"use client";

import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PrevisualizarBanner } from "@/components/wireframes/previsualizar-banner";
import { PrevisualizarChatIntro } from "@/components/wireframes/previsualizar-chat-intro";
import { WireframeShell } from "@/components/wireframes/wireframe-shell";
import { ActionMatrix, type ActionMatrixRow } from "@/components/wireframes/action-matrix";
import { WireframeDummyButton } from "@/components/wireframes/wireframe-dummy-button";
import { mockClientApiKeyMasked } from "@/components/wireframes/mock-data";
import { Button } from "@/components/ui/button";

const permitidoCliente: ActionMatrixRow[] = [
  {
    boton: "Enviar mensaje / plantilla",
    endpoint: "…/api/v1/whatsapp/send",
    hace: "Automatiza mensajes desde su número (ventana 24h o plantilla aprobada).",
    noHace: "No envía desde el número de otro cliente de tu agencia.",
    riesgo: "Meta: opt-in, categoría de plantilla, límites de tier.",
    valorReal:
      "El cliente final opera su propio canal: confirmaciones, campañas y bots sin depender de tu operador para cada envío.",
    entradaTipica: `{
  "phone_number_id": "1234567890",
  "to": "5215512345678",
  "type": "template",
  "template": {
    "name": "recordatorio_cita",
    "language": { "code": "es_MX" },
    "components": [{ "type": "body", "parameters": [{ "type": "text", "text": "10:00" }] }]
  }
}`,
    salidaTipica: `{
  "status": "success",
  "data": { "message_id": "wamid.HBgM...", "recipient_id": "5215512345678" }
}`,
    rolAgencia:
      "Les das plantillas aprobadas y reglas de uso; monitoreas abuso y límites de paquete a nivel cuenta.",
    rolCliente:
      "Integra su CRM o n8n: al crear cita dispara template; ve message_id para trazabilidad en su sistema.",
  },
  {
    boton: "Gestionar subscribers",
    endpoint: "…/whatsapp/subscriber/list | create | update",
    hace: "Lista, crea y actualiza contactos de su phone_number_id.",
    noHace: "No lista usuarios B2B ni otros tenants.",
    riesgo: "LFPDPPP / GDPR: base de datos personal; retención y consentimiento.",
    valorReal:
      "Su CRM vive en los contactos de WhatsApp: etiquetas, campos custom y segmentación sin export manual diario.",
    entradaTipica: `// list
{ "phone_number_id": "1234567890", "page": 1, "limit": 100 }

// update (ejemplo)
{ "subscriber_id": "sub_001", "custom_field": { "ultima_compra": "2026-05-01" } }`,
    salidaTipica: `{
  "status": "success",
  "data": {
    "subscribers": [
      { "id": "sub_001", "phone": "5215512345678", "name": "Ana", "labels": ["vip"] }
    ],
    "total": 430
  }
}`,
    rolAgencia:
      "Defines si pueden crear campos custom en tu instancia; cobras por volumen de contactos si aplica.",
    rolCliente:
      "Sincroniza con su ERP: lee list, enriquece con update; no cruza datos con otros clientes.",
  },
  {
    boton: "Etiquetas y campos personalizados",
    endpoint: "…/assign-labels · …/assign-custom-fields",
    hace: "Segmenta y enriquece perfiles en el CRM ligero de WhatsApp.",
    noHace: "No crea nuevos módulos de producto (solo metadatos de contacto).",
    riesgo: "Los nombres de campo/label deben existir; errores 400 si no.",
    valorReal:
      "Campañas más efectivas: “solo leads con etiqueta cita-no-show” sin rehacer la base en Excel.",
    entradaTipica: `{
  "subscriber_id": "sub_001",
  "labels": ["lead-caliente", "descuento-mayo"]
}`,
    salidaTipica: `{ "status": "success", "data": { "subscriber_id": "sub_001", "labels": ["lead-caliente", "descuento-mayo"] } }`,
    rolAgencia:
      "Preconfiguras taxonomía de labels por vertical para que no caos de nombres libres.",
    rolCliente:
      "Marca contactos desde su app de inbox o integración; dispara flujos filtrados por label.",
  },
];

const prohibidoTipico: ActionMatrixRow[] = [
  {
    boton: "Crear usuarios hijo",
    endpoint: "…/api/v1/user/create",
    hace: "—",
    noHace: "Reservado a apiToken de agencia en un modelo típico marca blanca.",
    riesgo: "Si el proveedor lo expone con clave de usuario, revisar contrato y abuso.",
    valorReal:
      "Protege tu margen: el cliente no compite contigo creando subcuentas sin tu control comercial.",
    entradaTipica: `// No debería estar disponible con clave de cliente
{ "name": "...", "email": "...", "package_id": 3 }`,
    salidaTipica: `// Respuesta esperada si está bien aislado
{ "status": "error", "message": "Forbidden" }`,
    rolAgencia:
      "Único camino de alta: tu backoffice llama create con tu token; cobras setup y recurrente.",
    rolCliente:
      "Pide alta a tu equipo comercial; no ve endpoint de creación en su documentación pública.",
  },
  {
    boton: "Cambiar paquetes de otros",
    endpoint: "…/api/v1/user/update",
    hace: "—",
    noHace: "No debe actualizar user_id que no sea el propio (si el BFF no filtra).",
    riesgo: "IDOR: validar siempre user_id contra el token en tu BFF.",
    valorReal:
      "Evita escalada de privilegios: un cliente no puede regalarse plan premium tocando solo el id.",
    entradaTipica: `{ "id": 9999, "package_id": 99 }`,
    salidaTipica: `{ "status": "error", "message": "Not allowed" }`,
    rolAgencia:
      "Tú haces upgrades/downgrades con tu token; registras auditoría (quién cambió qué).",
    rolCliente:
      "Solo puede pedir cambio por ticket; tú ejecutas update sobre su id legítimo.",
  },
  {
    boton: "Transacciones / facturación agencia",
    endpoint: "…/api/v1/user/transaction/list",
    hace: "—",
    noHace: "Vista financiera agregada de la agencia, no del cliente final.",
    riesgo: "Filtrar en BFF: nunca devolver transacciones de otros hijos.",
    valorReal:
      "Claridad contable: el cliente ve solo sus cargos (si los expones); tú ves el consolidado de revendedor.",
    entradaTipica: `{ "user_id": 1001 }`,
    salidaTipica: `// Lo que SÍ vería el cliente (filtrado a su id)
{
  "status": "success",
  "data": [
    { "id": "tx_01", "concept": "Renovación mayo", "amount_mxn": 2499, "date": "2026-05-01" }
  ]
}`,
    rolAgencia:
      "Concilias Stripe/PayPal con transaction/list por cada hijo o agregado.",
    rolCliente:
      "Opcional: solo líneas que le facturaste tú a él; no ve movimientos de otros clientes de tu agencia.",
  },
];

type CasoDeUso = { title: string; slug: string };

export function PanelClienteClient({ casosDeUso }: { casosDeUso: CasoDeUso[] }) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground noise-overlay">
      <Navigation casosDeUso={casosDeUso} />
      <div className="page-grid-bg pointer-events-none fixed inset-0 -z-10 opacity-[0.35]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <PrevisualizarBanner />

        <div className="mb-4 rounded-lg border border-[var(--accent-meta,#0668E1)]/25 bg-[var(--accent-meta,#0668E1)]/5 px-4 py-3 text-sm text-foreground">
          <strong>Nota:</strong> la matriz “permitido / prohibido” es orientativa. Debe validarse con la API
          real del proveedor white-label y con cómo expongas rutas en tu BFF (
          <code className="rounded bg-muted px-1 font-mono text-xs">api.tu-marca.com</code>).
        </div>

        <PrevisualizarChatIntro>
          <p>
            <strong>Cliente final (API propia / developer):</strong> el valor está en automatizar WhatsApp
            (envío, subscribers, etiquetas) y ver <strong>su</strong> consumo y límites.{" "}
            <strong>Tú como agencia:</strong> sigues controlando altas, planes, add-ons, facturación y
            políticas; el cliente no administra la cartera B2B ni las cuentas hermanas.
          </p>
          <p>
            Usa las tablas para explicar en el chat: <strong>qué puede hacer solo</strong>,{" "}
            <strong>qué datos ve en JSON</strong> y <strong>qué debe pedirte a ti</strong>.
          </p>
        </PrevisualizarChatIntro>

        <div className="mb-8 mt-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Vista</p>
            <h1 className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
              Panel cliente — valor por endpoint
            </h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Lo que un cliente final vería si vendes API bajo tu marca: credenciales enmascaradas, consumo
              legible y, debajo, cada endpoint con valor de negocio, payload de ejemplo y división agencia
              vs cliente.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/previsualizar/panel-revendedor">Revendedor</Link>
            </Button>
            <Button variant="default" className="rounded-full" asChild>
              <Link href="/previsualizar/panel-cliente">Cliente</Link>
            </Button>
          </div>
        </div>

        <WireframeShell title="Credenciales API (demo)" eyebrow="Nunca mostrar apiToken completo en UI">
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-muted/30 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Clave enmascarada</p>
              <p className="mt-1 font-mono text-sm text-foreground">{mockClientApiKeyMasked}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <WireframeDummyButton>Rotar clave</WireframeDummyButton>
              <WireframeDummyButton>Copiar endpoint base</WireframeDummyButton>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Base pública sugerida (ficticia):{" "}
            <code className="rounded bg-muted px-1 font-mono">https://api.su-marca.com/v1</code> → tu BFF
            reescribe hacia el host del proveedor y adjunta el token del hijo.
          </p>
        </WireframeShell>

        <div className="mt-10 space-y-6">
          <WireframeShell title="Día a día: qué hace el cliente vs qué te pide a ti" eyebrow="Resumen operativo">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <p className="text-xs font-mono uppercase tracking-widest text-foreground">Cliente final</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Envía mensajes y plantillas desde su número.</li>
                  <li>Sincroniza y etiqueta subscribers para campañas.</li>
                  <li>Dispara flujos de bot ya publicados por ti o por el proveedor.</li>
                  <li>Consulta su consumo (mensajes, tokens) para no romper límites.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-dashed border-foreground/20 bg-muted/20 p-4">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Tú (agencia)
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Alta de cuenta, plan, add-ons y renovaciones.</li>
                  <li>Magic link o reset si el cliente no entra al panel.</li>
                  <li>Aprobación de plantillas Meta y políticas de uso.</li>
                  <li>Facturación y cargos; el cliente no ve el ledger de otros hijos.</li>
                </ul>
              </div>
            </div>
          </WireframeShell>

          <WireframeShell title="Uso del plan (solo lectura)" eyebrow="GET/POST …/user/usage/log — su user_id">
            <p className="text-sm text-muted-foreground">
              En UI suele ser barras de progreso; en API es el mismo dato que usa el revendedor pero{" "}
              <strong>filtrado a un solo tenant</strong>. Así el cliente decide cuándo comprar más volumen.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border p-4 text-center">
                <p className="text-2xl font-display text-foreground">78%</p>
                <p className="text-xs text-muted-foreground">Mensajes del ciclo (demo UI)</p>
              </div>
              <div className="rounded-xl border border-border p-4 text-center">
                <p className="text-2xl font-display text-foreground">42%</p>
                <p className="text-xs text-muted-foreground">Tokens IA (demo UI)</p>
              </div>
              <div className="rounded-xl border border-border p-4 text-center">
                <p className="text-2xl font-display text-foreground">3 / 5</p>
                <p className="text-xs text-muted-foreground">Miembros de equipo (demo UI)</p>
              </div>
            </div>
            <pre className="max-h-56 overflow-auto rounded-xl border border-border bg-muted/40 p-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
              {`{
  "status": "success",
  "data": {
    "user_id": 1001,
    "period": "2026-05",
    "modules": [
      { "name": "Message Credit", "used": 12400, "limit": 50000, "percent": 24.8 },
      { "name": "Bot AI Token", "used": 890000, "limit": 2000000, "percent": 44.5 }
    ]
  }
}`}
            </pre>
          </WireframeShell>

          <WireframeShell title="Endpoints que sí tendría el cliente (típico)" eyebrow="Subconjunto orientativo">
            <div className="flex flex-wrap gap-2">
              <WireframeDummyButton>Probar envío WhatsApp</WireframeDummyButton>
              <WireframeDummyButton>Listar mis subscribers</WireframeDummyButton>
              <WireframeDummyButton>Ver mi consumo (API)</WireframeDummyButton>
            </div>
            <ActionMatrix title="Detalle: permitido (valor + datos + roles)" rows={permitidoCliente} />
          </WireframeShell>

          <WireframeShell title="Lo que normalmente no debe hacer el cliente" eyebrow="Evitar confusiones con la llave de agencia">
            <ActionMatrix title="Detalle: prohibido o solo vía agencia" rows={prohibidoTipico} />
          </WireframeShell>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
