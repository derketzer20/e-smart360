import os
import re
import shutil


def determine_category_and_slug(filename: str) -> tuple[str, str]:
    """
    Infer category and slug from a provider filename.

    Examples:
      - www.dialora.ai_industry_dental.md -> (casos-de-uso, dental)
      - www.dialora.ai_features_book_appointments.md -> (caracteristicas, book_appointments)
      - www.dialora.ai_use-cases_ai-receptionist.md -> (casos-de-uso, ai-receptionist)
      - www.dialora.ai_docs_use-cases_food-hospitality.md -> (casos-de-uso, food-hospitality)
    """
    base = os.path.basename(filename)
    stem, _ext = os.path.splitext(base)

    rules = [
        ("industry", "casos-de-uso"),
        ("use-cases", "casos-de-uso"),
        ("features", "caracteristicas"),
    ]

    # Prefer extracting the part after the marker when present.
    # Accept both "_marker_" and "_marker" (end-of-string) variants.
    for marker, category in rules:
        m = re.search(rf"_{re.escape(marker)}(?:_(?P<slug>.+))?$", stem)
        if m:
            slug = (m.group("slug") or marker).strip("_")
            return category, slug

        token = f"_{marker}_"
        if token in stem:
            slug = stem.split(token, 1)[1].strip("_")
            return category, slug

    # Fallback: category unknown, slug is last underscore-separated token.
    parts = [p for p in stem.split("_") if p]
    slug = parts[-1] if parts else stem
    return "sin-categoria", slug


def slug_to_title(slug: str) -> str:
    """
    Turn a slug into a human-friendly title.
    - dental -> Dental
    - book_appointments -> Book Appointments
    - ai-receptionist -> Ai Receptionist
    """
    words = re.split(r"[_\-]+", slug.strip())
    words = [w for w in words if w]
    return " ".join(w[:1].upper() + w[1:] for w in words)


def strip_existing_frontmatter(text: str) -> str:
    """
    If a file already contains YAML frontmatter at the top, remove it.
    Frontmatter is recognized only when the first non-empty line is '---'.
    """
    leading = re.match(r"^\s*", text)
    prefix = leading.group(0) if leading else ""
    rest = text[len(prefix) :]

    lines = rest.splitlines(True)  # keepends
    i = 0
    while i < len(lines) and lines[i].strip() == "":
        i += 1
    if i >= len(lines) or lines[i].strip() != "---":
        return text

    # Find closing '---'
    j = i + 1
    while j < len(lines) and lines[j].strip() != "---":
        j += 1
    if j >= len(lines):
        return text  # malformed frontmatter; leave as-is

    new_lines = lines[:i] + lines[j + 1 :]
    return prefix + "".join(new_lines).lstrip("\n")


def remove_residual_html(text: str) -> str:
    """
    Remove residual HTML tags while keeping native Markdown syntax intact.

    Strategy:
    - Remove entire <script>...</script> and <style>...</style> blocks.
    - Remove HTML comments.
    - Remove remaining tags like <div>, <span>, <br>, etc. (including attributes).
    """
    # Remove script/style blocks (case-insensitive, dot matches newlines)
    text = re.sub(r"(?is)<script\b[^>]*>.*?</script>", "", text)
    text = re.sub(r"(?is)<style\b[^>]*>.*?</style>", "", text)

    # Remove HTML comments
    text = re.sub(r"(?s)<!--.*?-->", "", text)

    # Remove remaining tags (e.g., <div ...>, </div>, <br/>, <span>)
    text = re.sub(r"(?is)</?([a-z][a-z0-9]*)\b[^>]*>", "", text)
    return text


def normalize_whitespace(text: str) -> str:
    """
    Light normalization for SSG-friendly Markdown output.
    - Convert CRLF/CR to LF.
    - Trim trailing spaces on each line.
    - Collapse 3+ blank lines into at most 2.
    """
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = "\n".join(line.rstrip() for line in text.split("\n"))
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip() + "\n"


def build_frontmatter(title: str, slug: str, category: str) -> str:
    # Minimal YAML, with quoted scalar values for safety.
    return (
        "---\n"
        f'title: "{title}"\n'
        f'slug: "{slug}"\n'
        f'category: "{category}"\n'
        "---\n\n"
    )


def process_markdown_file(src_path: str, dst_root: str) -> str:
    category, slug = determine_category_and_slug(os.path.basename(src_path))
    title = slug_to_title(slug)

    with open(src_path, "r", encoding="utf-8", errors="replace") as f:
        raw = f.read()

    body = strip_existing_frontmatter(raw)
    body = remove_residual_html(body)
    body = normalize_whitespace(body)

    frontmatter = build_frontmatter(title=title, slug=slug, category=category)
    out_text = frontmatter + body

    out_dir = os.path.join(dst_root, category)
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, f"{slug}.md")

    with open(out_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(out_text)

    return out_path


def collect_markdown_files(raw_root: str) -> list[str]:
    md_files: list[str] = []
    for root, _dirs, files in os.walk(raw_root):
        for name in files:
            if name.lower().endswith(".md"):
                md_files.append(os.path.join(root, name))
    return sorted(md_files)


def run(raw_root: str = "./raw_content", output_root: str = "./content") -> None:
    src_files = collect_markdown_files(raw_root)
    if not src_files:
        print(f"No se encontraron archivos .md en: {os.path.abspath(raw_root)}")
        return

    output_root_abs = os.path.abspath(output_root)
    os.makedirs(output_root_abs, exist_ok=True)

    written = 0
    for src in src_files:
        out_path = process_markdown_file(src, output_root_abs)
        written += 1
        print(f"[OK] {src} -> {out_path}")

    print(f"Listo. Archivos generados: {written}")


if __name__ == "__main__":
    run()

