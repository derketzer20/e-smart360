"use client";

import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PrevisualizarBanner } from "@/components/wireframes/previsualizar-banner";
import { PrevisualizarChatIntro } from "@/components/wireframes/previsualizar-chat-intro";
import { WireframeShell } from "@/components/wireframes/wireframe-shell";
import { ActionMatrix, type ActionMatrixRow } from "@/components/wireframes/action-matrix";
import { WireframeDummyButton } from "@/components/wireframes/wireframe-dummy-button";
import { mockClients, mockResellerSummary, mockUsageModules } from "@/components/wireframes/mock-data";
import { Button } from "@/components/ui/button";

const mockUserListResponse = `{
  "status": "success",
  "data": [
    {
      "id": 1001,
      "name": "Cliente Demo SA de CV",
      "email": "contacto@cliente-demo.mx",
      "package_id": 3,
      "expired_date": "2026-08-01",
      "status": 1,
      "user_type": "user"
    }
  ],
  "total": 3
}`;

const matrizClientes: ActionMatrixRow[] = [
  {
    boton: "Crear cliente",
    endpoint: "POST …/api/v1/user/create",
    hace: "Da de alta una cuenta hija en la plataforma del proveedor con paquete y vigencia.",
    noHace: "No crea un nuevo tipo de paquete en el catálogo del proveedor.",
    riesgo: "Correo duplicado, cupo de subscribers de tu agencia, package_id inválido.",
    valorReal:
      "Onboarding en minutos: pasas de “venta cerrada” a “cuenta activa con límites conocidos”, sin soporte manual del proveedor.",
    entradaTipica: `{
  "name": "Clínica Norte",
  "email": "admin@clinicanorte.mx",
  "password": "********",
  "package_id": 3,
  "expired_date": "2027-01-01",
  "user_type": "user"
}`,
    salidaTipica: `{
  "status": "success",
  "message": "User created successfully",
  "data": {
    "id": 10442,
    "name": "Clínica Norte",
    "email": "admin@clinicanorte.mx",
    "package_id": 3,
    "api_token": "bs_•••••••••••••••••••••••••••••••••"
  }
}`,
    rolAgencia:
      "Desde tu panel o CRM: botón “Nuevo cliente”, eliges plan comercial → mapeas a package_id del proveedor, envías alta y guardas el user_id y api_token del hijo en tu base (encriptado).",
    rolCliente:
      "No crea cuentas: recibe invitación o magic link que tú generas; solo opera su propio número y datos.",
  },
  {
    boton: "Editar plan / vigencia",
    endpoint: "POST …/api/v1/user/update",
    hace: "Cambia package_id, fecha de expiración, estado activo/inactivo, reset de uso mensual.",
    noHace: "No redefine la lista de módulos del sistema; solo elige entre paquetes existentes.",
    riesgo: "Desalinear tu catálogo Smart 360 con package_id; cortar servicio por error de fecha.",
    valorReal:
      "Upsell / downgrade / renovación sin reconfigurar Meta: ajustas licencia y límites en un solo llamado.",
    entradaTipica: `{
  "id": 1001,
  "package_id": 2,
  "expired_date": "2026-12-31",
  "status": 1
}`,
    salidaTipica: `{
  "status": "success",
  "message": "User updated",
  "data": { "id": 1001, "package_id": 2, "expired_date": "2026-12-31" }
}`,
    rolAgencia:
      "Operaciones: renovación, pausa por impago, cambio de tier. Lo disparas desde tu backoffice cuando tu ERP o Stripe confirma pago.",
    rolCliente:
      "No debería cambiar su propio plan salvo producto “self-serve”; si lo hace, es riesgo de margen — normalmente te escribe a soporte y tú actualizas.",
  },
  {
    boton: "Login mágico (direct URL)",
    endpoint: "GET/POST …/api/v1/user/get/direct-login-url",
    hace: "Genera URL de acceso único al panel del cliente en el host del proveedor.",
    noHace: "No es SSO enterprise completo sin IdP y mapeo adicional.",
    riesgo: "URL filtrada = acceso a cuenta ajena; caducidad corta y un solo uso si el proveedor lo permite.",
    valorReal:
      "Soporte nivel 1 instantáneo: el cliente entra al panel white-label sin recordar contraseña; tú reduces tickets.",
    entradaTipica: `{ "id": 1001 }`,
    salidaTipica: `{
  "status": "success",
  "data": {
    "url": "https://app.proveedor.com/auth/magic?token=••••••••••••••••",
    "expires_in": 900
  }
}`,
    rolAgencia:
      "En llamada o ticket: generas link, lo envías por canal seguro; auditas quién pidió el acceso.",
    rolCliente:
      "Hace clic, entra a su panel; no ve datos de otros clientes de tu agencia.",
  },
  {
    boton: "Ver consumo (usage log)",
    endpoint: "GET/POST …/api/v1/user/usage/log",
    hace: "Lista uso por módulo (mensajes, tokens IA, live chat, etc.) para un user_id.",
    noHace: "No factura ni cobra; es telemetría / control de cupos.",
    riesgo: "Interpretar “0” como ilimitado vs deshabilitado según doc del módulo.",
    valorReal:
      "Facturación y salud del negocio: ves quién se acerca al tope antes del churn; puedes ofrecer add-on a tiempo.",
    entradaTipica: `{ "user_id": 1001, "month": "2026-05" }`,
    salidaTipica: `{
  "status": "success",
  "data": {
    "user_id": 1001,
    "modules": [
      { "name": "Message Credit", "used": 12400, "limit": 50000 },
      { "name": "Bot AI Token", "used": 890000, "limit": 2000000 }
    ]
  }
}`,
    rolAgencia:
      "Dashboard interno: filtras por cliente, exportas CSV para tu equipo financiero o alertas automáticas al 80 % del cupo.",
    rolCliente:
      "Si les expones solo su user_id, ven su propio consumo en tu UI; no ven el agregado de toda tu agencia.",
  },
];

const matrizAddons: ActionMatrixRow[] = [
  {
    boton: "Crear add-on comercial",
    endpoint: "POST …/api/v1/user/addon/create",
    hace: "Define un complemento (módulo extra, precio, vigencia) si tu rol de agencia lo permite.",
    noHace: "No sustituye al paquete base; se asigna encima.",
    riesgo: "JSON de variaciones complejo; probar en sandbox del proveedor.",
    valorReal:
      "Empaquetas upsells propios (“+1M tokens IA”, “equipo extra”) alineados a tu P&L sin esperar al proveedor.",
    entradaTipica: `{
  "name": "Pack IA extra 1M",
  "price": 499,
  "validity_days": 30,
  "variation_json": { "module": "bot_ai_token", "limit": 1000000 }
}`,
    salidaTipica: `{
  "status": "success",
  "data": { "addon_id": 501, "name": "Pack IA extra 1M" }
}`,
    rolAgencia:
      "Producto: defines SKU de add-on una vez; luego lo asignas a clientes que ya agotaron el base.",
    rolCliente:
      "No crea add-ons globales; solo ve efectos si tú se lo asignas (más límite en su cuenta).",
  },
  {
    boton: "Asignar add-on a usuario",
    endpoint: "POST …/api/v1/user/addon/assign",
    hace: "Vincula un add-on existente a un user_id con fecha de expiración.",
    noHace: "No configura Meta ni WABA por sí solo.",
    riesgo: "IDs de variación incorrectos; add-on activo pero módulo mal mapeado.",
    valorReal:
      "Cobro recurrente atado a entrega: activas el extra el mismo día que el cliente paga tu add-on.",
    entradaTipica: `{
  "user_id": 1001,
  "addon_id": 501,
  "expired_date": "2026-07-01"
}`,
    salidaTipica: `{
  "status": "success",
  "data": { "purchase_id": 88921, "user_id": 1001, "addon_id": 501 }
}`,
    rolAgencia:
      "Tras pago en tu pasarela: webhook → assign; o botón en tu panel “Activar pack IA” para un cliente seleccionado.",
    rolCliente:
      "Ve reflejado el nuevo tope en su panel o en la siguiente llamada a usage/log; no asigna a otros.",
  },
  {
    boton: "Quitar add-on (de-assign)",
    endpoint: "GET/POST …/api/addon/purchase/delete",
    hace: "Elimina una compra/asignación de add-on por id de compra.",
    noHace: "No revierte cargos en Stripe/PayPal externos.",
    riesgo: "Ruta puede variar por white-label — validar en doc host.",
    valorReal:
      "Offboarding limpio: cancelas extras sin tocar el paquete base ni borrar la cuenta.",
    entradaTipica: `{ "purchase_id": 88921 }`,
    salidaTipica: `{ "status": "success", "message": "Addon purchase deleted" }`,
    rolAgencia:
      "Soporte o fin de promoción: quitas add-on cuando el cliente deja de pagar el extra.",
    rolCliente:
      "Normalmente no; si pudiera, sería riesgo — en buen diseño solo la agencia o el proveedor.",
  },
];

const matrizWhatsapp: ActionMatrixRow[] = [
  {
    boton: "Enviar texto WhatsApp",
    endpoint: "GET/POST …/api/v1/whatsapp/send",
    hace: "Envía mensaje de sesión a un número (ventana 24h si aplica).",
    noHace: "No sustituye plantillas aprobadas fuera de ventana.",
    riesgo: "Políticas Meta, opt-in, formato E.164 del teléfono.",
    valorReal:
      "Automatización conversacional: confirmaciones, recordatorios, respuesta desde tu bot o CRM con el número del cliente.",
    entradaTipica: `{
  "user_id": 1001,
  "phone_number_id": "1234567890",
  "to": "5215512345678",
  "type": "text",
  "text": { "body": "Tu cita quedó confirmada para mañana 10:00." }
}`,
    salidaTipica: `{
  "status": "success",
  "data": {
    "message_id": "wamid.HBgM...",
    "recipient_id": "5215512345678"
  }
}`,
    rolAgencia:
      "Puedes enviar en nombre de un cliente hijo (su user_id + su phone_number_id) si tu modelo es agencia operadora; audita y segmenta por tenant.",
    rolCliente:
      "Con su propia API key: envía solo desde su número; tú no ves el contenido salvo que lo registres en tu BFF.",
  },
  {
    boton: "Listar subscribers",
    endpoint: "GET/POST …/api/v1/whatsapp/subscriber/list",
    hace: "Pagina contactos asociados al phone_number_id.",
    noHace: "No exporta solo a CSV nativo; devuelve JSON para que tu app lo persista.",
    riesgo: "Paginación (page/limit); campos personalizados pueden inflar payload.",
    valorReal:
      "Base operativa: sincronizas contactos hacia tu CRM, segmentas campañas y detectas duplicados.",
    entradaTipica: `{
  "user_id": 1001,
  "phone_number_id": "1234567890",
  "page": 1,
  "limit": 50
}`,
    salidaTipica: `{
  "status": "success",
  "data": {
    "subscribers": [
      {
        "id": "sub_001",
        "phone": "5215512345678",
        "name": "Ana",
        "labels": ["lead-caliente"]
      }
    ],
    "total": 1240,
    "page": 1
  }
}`,
    rolAgencia:
      "Monitoreas calidad de datos de tus clientes B2B o haces reporting agregado anonimizado según contrato.",
    rolCliente:
      "Lista y filtra sus propios contactos para campañas o soporte; no ve la lista de otro cliente.",
  },
  {
    boton: "Disparar flujo de bot",
    endpoint: "GET/POST …/api/v1/whatsapp/trigger-bot",
    hace: "Inicia un flujo por bot_flow_unique_id hacia un número.",
    noHace: "No edita el flujo en el builder; solo lo ejecuta.",
    riesgo: "Flujo obsoleto o usuario sin opt-in → rechazo Meta.",
    valorReal:
      "Orquestación: desde tu ERP (pago recibido, cita creada) arrancas un flujo de bienvenida o encuesta sin agente humano.",
    entradaTipica: `{
  "user_id": 1001,
  "phone_number_id": "1234567890",
  "to": "5215512345678",
  "bot_flow_unique_id": "flow_abc123"
}`,
    salidaTipica: `{
  "status": "success",
  "data": { "session_id": "sess_7721", "bot_flow_unique_id": "flow_abc123" }
}`,
    rolAgencia:
      "Plantillas de flujo reutilizables por vertical (clínica, retail); asignas flow_id según tipo de cliente.",
    rolCliente:
      "Dispara flujos propios acordados contigo; no edita el flow_id de otros tenants.",
  },
];

type CasoDeUso = { title: string; slug: string };

export function PanelRevendedorClient({ casosDeUso }: { casosDeUso: CasoDeUso[] }) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground noise-overlay">
      <Navigation casosDeUso={casosDeUso} />
      <div className="page-grid-bg pointer-events-none fixed inset-0 -z-10 opacity-[0.35]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <PrevisualizarBanner />

        <PrevisualizarChatIntro>
          <p>
            <strong>Revendedor (apiToken de agencia):</strong> puede dar de alta y mantener cuentas hijo,
            asignar paquetes/add-ons del catálogo del proveedor, generar acceso al panel del cliente y leer
            consumo por <code className="rounded bg-muted px-1 font-mono text-xs">user_id</code>.{" "}
            <strong>Cliente final:</strong> con su propia clave solo automatiza sobre su número (WhatsApp,
            subscribers, flujos) y ve su uso; no administra la cartera B2B de la agencia.
          </p>
          <p>
            Cada tabla abajo incluye <strong>valor real</strong>, <strong>entrada / salida típica</strong>{" "}
            (demo) y <strong>quién hace qué</strong> para que puedas explicar el producto en un chat sin
            abrir la doc del proveedor.
          </p>
        </PrevisualizarChatIntro>

        <div className="mb-8 mt-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Vista</p>
            <h1 className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
              Panel revendedor — valor por endpoint
            </h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Wireframe orientado a negocio: qué función desbloquea cada ruta, qué datos envías y recibes, y
              la división de responsabilidad entre tú y tu cliente. Rutas alineadas a documentación tipo
              BotSailor; tu host white-label puede variar.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="default" className="rounded-full" asChild>
              <Link href="/previsualizar/panel-revendedor">Revendedor</Link>
            </Button>
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/previsualizar/panel-cliente">Cliente</Link>
            </Button>
          </div>
        </div>

        <WireframeShell title="Resumen de cuenta (agencia)" eyebrow="myInfo + usage a nivel agencia (demo)">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="text-xs text-muted-foreground">Paquete (demo)</p>
              <p className="mt-1 font-medium text-foreground">{mockResellerSummary.packageName}</p>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="text-xs text-muted-foreground">Vencimiento</p>
              <p className="mt-1 font-medium text-foreground">{mockResellerSummary.expiredDate}</p>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="text-xs text-muted-foreground">Subscribers</p>
              <p className="mt-1 font-medium text-foreground">
                {mockResellerSummary.subscribersUsed} / {mockResellerSummary.subscribersLimit}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="text-xs text-muted-foreground">Créditos mensaje</p>
              <p className="mt-1 font-medium text-foreground">{mockResellerSummary.messageCreditsLabel}</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-background/60 p-4">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Módulos (demo)</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {mockUsageModules.map((m) => (
                <li key={m.module} className="flex justify-between text-sm text-muted-foreground">
                  <span>{m.module}</span>
                  <span className="font-mono text-foreground">
                    {m.used.toLocaleString("es-MX")} /{" "}
                    {typeof m.limit === "number" ? m.limit.toLocaleString("es-MX") : m.limit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </WireframeShell>

        <div className="mt-10 space-y-6">
          <WireframeShell
            title="Listado de clientes (lo que verías vía API)"
            eyebrow="GET …/user/list o equivalente — ficticio"
          >
            <p className="text-sm text-muted-foreground">
              En tu consola white-label esta misma información suele venir de un listado paginado. Lo
              relevante para el chat: <strong>qué campos expones a ventas/soporte</strong> (nombre, plan,
              vencimiento, estado) y cuáles son solo técnicos (ids internos).
            </p>
            <pre className="max-h-64 overflow-auto rounded-xl border border-border bg-muted/40 p-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
              {mockUserListResponse}
            </pre>
          </WireframeShell>

          <WireframeShell title="Clientes B2B (cuentas hijo)" eyebrow="User create / update / magic link / usage">
            <div className="flex flex-wrap gap-2">
              <WireframeDummyButton>Crear cliente</WireframeDummyButton>
              <WireframeDummyButton>Editar plan seleccionado</WireframeDummyButton>
              <WireframeDummyButton>Login mágico</WireframeDummyButton>
              <WireframeDummyButton>Ver consumo del seleccionado</WireframeDummyButton>
            </div>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50 text-xs uppercase text-muted-foreground">
                    <th className="px-3 py-2">Nombre</th>
                    <th className="px-3 py-2">Email</th>
                    <th className="px-3 py-2">Paquete</th>
                    <th className="px-3 py-2">Vence</th>
                    <th className="px-3 py-2">Estado</th>
                    <th className="px-3 py-2">WhatsApp (demo)</th>
                  </tr>
                </thead>
                <tbody>
                  {mockClients.map((c) => (
                    <tr key={c.id} className="border-b border-border/70">
                      <td className="px-3 py-2 font-medium">{c.name}</td>
                      <td className="px-3 py-2 text-muted-foreground">{c.email}</td>
                      <td className="px-3 py-2 font-mono text-xs">
                        #{c.packageId} {c.packageLabel}
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">{c.expiredDate}</td>
                      <td className="px-3 py-2">{c.status === 1 ? "Activo" : "Inactivo"}</td>
                      <td className="px-3 py-2 text-muted-foreground">{c.phoneDisplay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ActionMatrix title="Detalle por endpoint: clientes" rows={matrizClientes} />
          </WireframeShell>

          <WireframeShell title="Add-ons" eyebrow="addon/create · assign · delete purchase">
            <div className="flex flex-wrap gap-2">
              <WireframeDummyButton>Nuevo add-on</WireframeDummyButton>
              <WireframeDummyButton>Asignar a cliente</WireframeDummyButton>
            </div>
            <ActionMatrix title="Detalle por endpoint: add-ons" rows={matrizAddons} />
          </WireframeShell>

          <WireframeShell title="WhatsApp (operaciones frecuentes)" eyebrow="user_id + phone_number_id del hijo">
            <div className="flex flex-wrap gap-2">
              <WireframeDummyButton>Enviar texto</WireframeDummyButton>
              <WireframeDummyButton>Listar subscribers</WireframeDummyButton>
              <WireframeDummyButton>Disparar flujo</WireframeDummyButton>
            </div>
            <ActionMatrix title="Detalle por endpoint: WhatsApp" rows={matrizWhatsapp} />
          </WireframeShell>

          <WireframeShell title="Paquete vs módulo vs add-on" eyebrow="Para alinear comercial y ingeniería">
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50 text-left text-xs uppercase text-muted-foreground">
                    <th className="px-3 py-2">Concepto</th>
                    <th className="px-3 py-2">¿Lo “crean” en vacío?</th>
                    <th className="px-3 py-2">Uso típico</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/70">
                    <td className="px-3 py-2 font-medium text-foreground">Paquete</td>
                    <td className="px-3 py-2">Eligen del catálogo (`package/list`).</td>
                    <td className="px-3 py-2">Definen límites base y módulos incluidos del SKU del proveedor.</td>
                  </tr>
                  <tr className="border-b border-border/70">
                    <td className="px-3 py-2 font-medium text-foreground">Módulo</td>
                    <td className="px-3 py-2">No; son capacidades con ID fijo.</td>
                    <td className="px-3 py-2">Se habilitan o limitan vía paquete o add-on.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-foreground">Add-on</td>
                    <td className="px-3 py-2">Pueden crear ofertas (`addon/create`) si el rol lo permite.</td>
                    <td className="px-3 py-2">Incrementos comerciales sobre el paquete (tokens, equipo, etc.).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </WireframeShell>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
