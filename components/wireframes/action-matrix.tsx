import { Fragment } from "react";
import { cn } from "@/lib/utils";

export type ActionMatrixRow = {
  boton: string;
  endpoint: string;
  hace: string;
  noHace: string;
  riesgo: string;
  /** Valor de negocio u operación que obtienes al usar el endpoint */
  valorReal?: string;
  /** Campos o cuerpo típico que envías (demo) */
  entradaTipica?: string;
  /** Fragmento de respuesta JSON o campos que verías en UI/API (demo) */
  salidaTipica?: string;
  /** Acción concreta del revendedor / apiToken de agencia */
  rolAgencia?: string;
  /** Acción concreta del cliente final (si aplica) */
  rolCliente?: string;
};

function rowHasInsight(r: ActionMatrixRow): boolean {
  return Boolean(
    r.valorReal || r.entradaTipica || r.salidaTipica || r.rolAgencia || r.rolCliente,
  );
}

type ActionMatrixProps = {
  title: string;
  rows: ActionMatrixRow[];
  className?: string;
};

export function ActionMatrix({ title, rows, className }: ActionMatrixProps) {
  return (
    <div className={cn("overflow-x-auto rounded-xl border border-border bg-muted/20", className)}>
      <p className="border-b border-border bg-background/90 px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
            <th className="px-3 py-2 font-medium">Botón / acción</th>
            <th className="px-3 py-2 font-medium">Endpoint (doc proveedor)</th>
            <th className="px-3 py-2 font-medium">Hace</th>
            <th className="px-3 py-2 font-medium">No hace</th>
            <th className="px-3 py-2 font-medium">Riesgo / nota</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <Fragment key={`${r.boton}-${r.endpoint}`}>
              <tr className="border-b border-border/80 align-top">
                <td className="px-3 py-3 font-medium text-foreground">{r.boton}</td>
                <td className="px-3 py-3 font-mono text-[11px] text-[var(--accent-meta,#0668E1)]">
                  {r.endpoint}
                </td>
                <td className="px-3 py-3 text-muted-foreground">{r.hace}</td>
                <td className="px-3 py-3 text-muted-foreground">{r.noHace}</td>
                <td className="px-3 py-3 text-muted-foreground">{r.riesgo}</td>
              </tr>
              {rowHasInsight(r) ? (
                <tr className="border-b border-border/80 bg-muted/25 align-top last:border-b-0">
                  <td colSpan={5} className="px-3 py-4">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="space-y-3">
                        {r.valorReal ? (
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-meta,#0668E1)]">
                              Valor real (qué ganas)
                            </p>
                            <p className="mt-1 text-sm text-foreground">{r.valorReal}</p>
                          </div>
                        ) : null}
                        {r.entradaTipica ? (
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                              Datos que envías / parámetros típicos
                            </p>
                            <pre className="mt-1 max-h-40 overflow-auto rounded-lg border border-border bg-background/80 p-3 font-mono text-[11px] leading-relaxed text-muted-foreground whitespace-pre-wrap">
                              {r.entradaTipica}
                            </pre>
                          </div>
                        ) : null}
                      </div>
                      <div className="space-y-3">
                        {r.salidaTipica ? (
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                              Datos que verías (respuesta / pantalla)
                            </p>
                            <pre className="mt-1 max-h-48 overflow-auto rounded-lg border border-border bg-background/80 p-3 font-mono text-[11px] leading-relaxed text-muted-foreground whitespace-pre-wrap">
                              {r.salidaTipica}
                            </pre>
                          </div>
                        ) : null}
                        {(r.rolAgencia || r.rolCliente) && (
                          <div className="grid gap-3 sm:grid-cols-2">
                            {r.rolAgencia ? (
                              <div className="rounded-lg border border-border/80 bg-background/60 p-3">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-foreground">
                                  Tú (revendedor / agencia)
                                </p>
                                <p className="mt-2 text-sm text-muted-foreground">{r.rolAgencia}</p>
                              </div>
                            ) : null}
                            {r.rolCliente ? (
                              <div className="rounded-lg border border-dashed border-foreground/20 bg-muted/20 p-3">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                                  Cliente final
                                </p>
                                <p className="mt-2 text-sm text-muted-foreground">{r.rolCliente}</p>
                              </div>
                            ) : null}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ) : null}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
