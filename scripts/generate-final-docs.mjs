#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const docsRoot = path.join(root, "content", "docs");
const matrix = JSON.parse(fs.readFileSync(path.join(root, "scripts", "docs-taxonomy-matrix.json"), "utf8"));

const titles = {
  overview: "Visión general de E-SMART360",
  arquitectura: "Arquitectura del ecosistema",
  "primeros-pasos/onboarding": "Onboarding general",
  "ayuda/soporte": "Soporte y operación diaria",
  "vision-general/fuentes-y-rebranding": "Fuentes, rebranding y criterio editorial",
  "chatbots/intro": "Introducción a chatbots omnicanal",
  "chatbots/canales-omnicanal": "Canales omnicanal",
  "chatbots/constructor-visual": "Constructor visual de flujos",
  "chatbots/flujos-y-canales": "Flujos, canales y handoff",
  "chatbots/variables-y-segmentacion": "Variables, etiquetas y segmentación",
  "chatbots/live-chat-bandeja": "Live chat y bandeja compartida",
  "chatbots/entrenamiento-ia": "Entrenamiento de IA con FAQ, URL, archivos y hojas",
  "chatbots/formularios-whatsapp-flows": "Formularios y WhatsApp Flows",
  "chatbots/webchat-e-instagram": "Webchat, Instagram y Facebook Messenger",
  "broadcasting/plantillas-whatsapp": "Plantillas de WhatsApp",
  "broadcasting/campanas-y-segmentacion": "Campañas y segmentación",
  "broadcasting/regla-24-horas": "Regla de 24 horas",
  "broadcasting/botones-y-carruseles": "Botones, URLs dinámicas y carruseles",
  "broadcasting/smart-delay": "Smart Delay y secuencias",
  "broadcasting/rechazos-y-calidad": "Rechazos, calidad y reputación",
  "ecommerce/catalogo-y-pagos-whatsapp": "Catálogo y pagos por WhatsApp",
  "ecommerce/shopify": "Shopify y automatización conversacional",
  "ecommerce/woocommerce": "WooCommerce y pedidos por WhatsApp",
  "ecommerce/carritos-abandonados": "Recuperación de carritos abandonados",
  "ecommerce/cod-y-prepago": "COD, prepago y confirmación de pedidos",
  "ecommerce/notificaciones-pedidos": "Notificaciones de pedidos",
  "operacion-meta/calidad-y-limites-whatsapp": "Calidad y límites de WhatsApp",
  "operacion-meta/cloud-api-y-embedded-signup": "Cloud API y Embedded Signup",
  "operacion-meta/verificacion-negocio": "Verificación de negocio",
  "operacion-meta/errores-comunes": "Errores comunes de WhatsApp Cloud API",
  "telegram/marketing-y-comunidades": "Marketing y comunidades en Telegram",
  "telegram/comunidades-y-antispam": "Comunidades y anti-spam en Telegram",
  "telegram/bots-y-captacion": "Bots de Telegram y captación",
  "agente-voz/intro": "Introducción al agente de voz IA",
  "agente-voz/primer-agente": "Primer agente de voz IA",
  "agente-voz/llamadas-entrantes": "Llamadas entrantes con voz IA",
  "agente-voz/campanas-salientes": "Campañas salientes con voz IA",
  "agente-voz/clinicas-y-citas": "Voz IA para clínicas y citas",
  "agente-voz/soporte-y-handoff": "Soporte, escalación y handoff",
  "oficina-virtual/intro": "Introducción a Oficina Virtual",
  "oficina-virtual/widget-y-clickntalk": "Widget y página ClickNTalk",
  "oficina-virtual/agenda-y-videollamadas": "Agenda y videollamadas",
  "oficina-virtual/apps-y-canales": "Apps y canales de Oficina Virtual",
  "oficina-virtual/cname-y-wordpress-wix-shopify": "CNAME, WordPress, Wix y Shopify",
  "oficina-virtual/webhooks-y-api-frontend": "Webhooks y API frontend de Oficina Virtual",
  "tarjetas-nfc/intro": "Introducción a tarjetas digitales NFC",
  "tarjetas-nfc/perfiles-y-qr": "Perfiles, QR y NFC",
  "tarjetas-nfc/tracking-y-crm": "Tracking, CRM y formularios",
  "tarjetas-nfc/casos-de-uso": "Casos de uso de tarjetas NFC",
  "sectores/salud": "Sector salud y clínicas",
  "sectores/educacion": "Sector educación",
  "sectores/ecommerce": "Sector e-commerce",
  "sectores/agencias": "Sector agencias",
  "sectores/ventas": "Ventas B2B y equipos comerciales",
  "sectores/servicios-profesionales": "Servicios profesionales",
  "sectores/inmobiliaria": "Sector inmobiliario",
  "api/overview": "API y webhooks para developers",
  "api/webhooks": "Webhooks",
  "api/eventos": "Eventos",
  "api/payloads": "Payloads JSON",
  "api/seguridad-y-reintentos": "Seguridad, firma y reintentos",
  "agencias/marca-blanca-y-operacion": "Marca blanca y operación para agencias",
  "agencias/cuentas-clientes-billing": "Cuentas, clientes y billing",
  "agencias/paquetes-y-soporte": "Paquetes, soporte y entrega recurrente",
  "integracion/ecosistema": "Integración del ecosistema",
  "integracion/webhook-workflow": "Webhook workflow",
};

const descriptions = {
  "chatbots/entrenamiento-ia": "Cómo entrenar asistentes con FAQ, URL, archivos, HTTP API y Google Sheets.",
  "oficina-virtual/webhooks-y-api-frontend": "Eventos, API frontend y automatización alrededor del widget de atención.",
  "api/seguridad-y-reintentos": "Buenas prácticas para tokens, firmas, retry, idempotencia y operación segura.",
};

const sectionByRoute = new Map();
const groupByRoute = new Map();
for (const group of matrix.coverageGroups) {
  for (const route of group.expectedRoutes) {
    sectionByRoute.set(route, group.section);
    groupByRoute.set(route, group.id);
  }
}
sectionByRoute.set("vision-general/fuentes-y-rebranding", "vision-general");
sectionByRoute.set("integracion/ecosistema", "integracion");
sectionByRoute.set("integracion/webhook-workflow", "integracion");
groupByRoute.set("vision-general/fuentes-y-rebranding", "core");
groupByRoute.set("integracion/ecosistema", "developers");
groupByRoute.set("integracion/webhook-workflow", "developers");

const allRoutes = Array.from(new Set([...sectionByRoute.keys()]));

function slug(input) {
  return input.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function quote(input) {
  return JSON.stringify(input);
}

function arr(values) {
  return `[${values.map((value) => quote(value)).join(", ")}]`;
}

function audienceFor(section, route) {
  if (section === "api-referencia" || route.startsWith("api/")) return ["developer", "agencia"];
  if (section === "agencias") return ["agencia", "admin"];
  if (section === "sectores" || route.includes("ventas")) return ["cliente", "ventas"];
  if (section === "ayuda") return ["cliente", "soporte"];
  return ["cliente", "soporte"];
}

function platformFor(section, route) {
  if (section === "agente-voz") return ["voice"];
  if (section === "oficina-virtual") return ["virtual-office"];
  if (section === "tarjetas-nfc") return ["nfc"];
  if (section === "sectores" || section === "agencias" || section === "vision-general" || section === "primeros-pasos") return ["all"];
  return ["chatbots"];
}

function useCaseFor(section, route) {
  const cases = [];
  if (route.includes("ecommerce") || route.includes("shopify") || route.includes("woocommerce") || route.includes("pedido")) cases.push("ecommerce");
  if (route.includes("salud") || route.includes("clinica") || route.includes("citas")) cases.push("healthcare");
  if (route.includes("educacion")) cases.push("education");
  if (route.includes("agencia")) cases.push("agency");
  if (route.includes("ventas") || route.includes("campanas") || route.includes("broadcasting")) cases.push("sales");
  if (route.includes("soporte") || route.includes("live-chat") || route.includes("handoff")) cases.push("support");
  if (route.includes("servicios")) cases.push("professional-services");
  if (route.includes("inmobiliaria")) cases.push("real-estate");
  return cases.length ? Array.from(new Set(cases)) : ["support"];
}

function sourceFor(route) {
  if (route.startsWith("agente-voz")) return "scrape";
  if (route.startsWith("oficina-virtual")) return "scrape";
  if (route.startsWith("tarjetas-nfc") || route.startsWith("sectores")) return "manual";
  return "fulldoc";
}

function tagsFor(section, route) {
  return Array.from(new Set([section, groupByRoute.get(route), ...route.split(/[/-]/).filter((part) => part.length > 3)])).slice(0, 10);
}

function relatedLinks(route) {
  const group = groupByRoute.get(route);
  const peers = allRoutes.filter((candidate) => candidate !== route && groupByRoute.get(candidate) === group).slice(0, 4);
  return peers.map((peer) => `- [${titles[peer] ?? peer}](/docs/${peer})`).join("\n");
}

function featureSummary(route, section) {
  const title = titles[route] ?? route;
  const shared =
    "E-SMART360 organiza esta capacidad como parte de una suite SaaS de automatización comercial para negocios mexicanos y equipos latinos en Estados Unidos. La intención no es mostrar una herramienta aislada, sino explicar cómo se conecta con canales, datos, soporte humano, métricas y operación diaria. Cada implementación debe dejar claro qué resuelve, qué datos necesita, quién la administra y cómo se mide el resultado.";
  const bySection = {
    "chatbots-omnicanal":
      "En chatbots omnicanal, el objetivo es recibir conversaciones desde WhatsApp, Instagram, Facebook, Telegram o webchat, entender la intención del cliente y moverlo hacia una respuesta, una compra, una cita o una derivación humana. La documentación hereda funciones de constructor visual, etiquetas, variables, flujos condicionales, bandeja compartida y entrenamiento de IA.",
    broadcasting:
      "En broadcasting, la prioridad es comunicar a escala sin perder calidad de cuenta. Las campañas deben usar plantillas aprobadas, segmentos limpios, ventanas correctas, botones útiles y métricas de entrega. La operación debe respetar la regla de 24 horas y las políticas de mensajería de Meta.",
    ecommerce:
      "En e-commerce conversacional, el chat se vuelve un canal de venta y postventa. El catálogo, los pagos, los pedidos, los carritos abandonados y las notificaciones se conectan para que el cliente compre sin abandonar la conversación y el equipo mantenga trazabilidad.",
    "operacion-meta":
      "En operación Meta, la documentación cubre límites, calidad, verificación, Cloud API, números, errores y reputación. Este bloque es crítico porque una automatización mal operada puede reducir entregabilidad o bloquear campañas.",
    telegram:
      "Telegram complementa WhatsApp cuando se necesitan comunidades, grupos, bots de captación, anti-spam y canales de contenido. Se documenta como parte del ecosistema omnicanal, no como canal separado sin estrategia.",
    "agente-voz":
      "El agente de voz IA cubre llamadas entrantes y salientes para confirmar citas, calificar leads, hacer seguimiento, resolver preguntas frecuentes y escalar a humanos cuando la conversación requiere juicio o sensibilidad.",
    "oficina-virtual":
      "La oficina virtual conecta widget web, página directa, agenda, videollamadas y eventos técnicos. Es útil para clínicas, consultores, servicios profesionales y ventas consultivas que necesitan pasar de interés digital a atención en vivo.",
    "tarjetas-nfc":
      "Las tarjetas digitales NFC convierten el contacto presencial en flujo digital medible. Un perfil, QR o tap NFC puede abrir WhatsApp, agenda, landing, formulario o CRM, y cada interacción debe generar seguimiento.",
    sectores:
      "Las guías por sector traducen la suite a problemas reales: ventas, citas, soporte, educación, e-commerce, agencias, inmobiliaria y servicios profesionales. Cada sector combina plataformas distintas y define un camino de adopción progresivo.",
    "api-referencia":
      "La referencia developer documenta cómo conectar eventos, webhooks y payloads con CRM, hojas, ERPs, sitios web y automatizaciones internas. El foco es claridad contractual, seguridad, trazabilidad, retry e idempotencia.",
    agencias:
      "La operación para agencias convierte E-SMART360 en un servicio recurrente: onboarding, cuentas cliente, marca blanca, paquetes, soporte, billing, métricas y expansión mensual.",
    "vision-general": shared,
    "primeros-pasos": shared,
    integracion: shared,
    ayuda: shared,
  };
  return `Esta página cubre **${title}**. ${bySection[section] ?? shared}`;
}

function stepsFor(route, section) {
  return `## Configuración recomendada

1. **Define el objetivo operativo.** Establece si esta página se usará para vender, atender, confirmar citas, recuperar pedidos, calificar leads, crear comunidad o conectar sistemas. El objetivo evita flujos inflados y ayuda a medir resultados.
2. **Identifica canales y responsables.** Decide qué canal inicia el proceso, qué equipo recibe excepciones y qué datos se guardan. En E-SMART360 conviene documentar propietario, horario, handoff y prioridad.
3. **Prepara datos y permisos.** Reúne números, catálogos, plantillas, etiquetas, campos de CRM, calendario, credenciales o webhooks. La calidad del dato determina la calidad de la automatización.
4. **Construye el flujo base.** Empieza con un recorrido corto: entrada, calificación, respuesta principal, confirmación y cierre. Después agrega ramificaciones para objeciones, errores y casos humanos.
5. **Prueba con casos reales.** Valida desde móvil, escritorio y canal final. Revisa textos, botones, variables, permisos y escenarios donde el cliente no responde.
6. **Publica con monitoreo.** Lanza por segmento, revisa métricas diariamente la primera semana y ajusta mensajes, tiempos, handoff y reglas de calidad.`;
}

function checklistFor(route, section) {
  return `## Checklist de configuración

- [ ] El objetivo de negocio está escrito en una frase y tiene métrica asociada.
- [ ] La audiencia está segmentada por cliente nuevo, cliente activo, lead, paciente, alumno, comprador, agencia o developer.
- [ ] Los canales conectados tienen permisos correctos y responsables claros.
- [ ] Los mensajes usan tono E-SMART360: directo, útil, profesional y rebrandeado.
- [ ] Las variables obligatorias tienen nombre, tipo, ejemplo y validación.
- [ ] Existe handoff humano para excepciones, reclamos, urgencias o dudas sensibles.
- [ ] La medición incluye conversión, tiempo de respuesta, errores, abandono y satisfacción.
- [ ] Hay una prueba de extremo a extremo antes de activar campañas o tráfico real.`;
}

function errorsFor(route, section) {
  return `## Errores comunes y validación

- **Flujos demasiado largos.** Si el usuario necesita más de tres decisiones para avanzar, separa el recorrido en módulos y mide abandono.
- **Datos sin dueño.** Toda variable debe tener destino: CRM, hoja, etiqueta, evento, ticket, pedido o historial de conversación.
- **Mensajes sin contexto.** Evita plantillas genéricas; usa datos del cliente, etapa y motivo de contacto.
- **Handoff tardío.** Define condiciones claras para escalar cuando hay urgencia, intención alta, frustración o solicitud sensible.
- **Métricas incompletas.** No basta saber cuántos mensajes se enviaron; mide respuesta, conversión, calidad y operación humana.

La validación final debe incluir una prueba manual del recorrido, revisión de permisos, confirmación de eventos y lectura del historial para asegurar que el equipo entiende qué ocurrió y por qué.`;
}

function metricsFor(route, section) {
  return `## Métricas que debes revisar

| Métrica | Por qué importa | Acción si baja |
| --- | --- | --- |
| Tasa de respuesta | Indica si el mensaje abre conversación real | Ajustar copy, horario y segmento |
| Conversión principal | Mide si el flujo logra venta, cita, registro o resolución | Simplificar pasos y mejorar CTA |
| Tiempo de primera atención | Evalúa experiencia y carga operativa | Automatizar respuestas frecuentes o reforzar equipo |
| Handoff a humano | Muestra complejidad y huecos del bot | Crear nuevas reglas, FAQs o etiquetas |
| Errores o abandonos | Señala fricción técnica o de contenido | Probar variables, botones, permisos y enlaces |`;
}

function relatedFor(route) {
  const links = relatedLinks(route);
  return `## Rutas relacionadas

${links || "- [Documentación general](/docs/overview)\n- [Soporte](/docs/ayuda/soporte)"}`;
}

function sectorBody(route, section) {
  return `${featureSummary(route, section)}

## Problema que resuelve

En este sector, el reto principal es convertir intención en acción sin depender de seguimiento manual constante. Los equipos suelen perder oportunidades por respuestas lentas, agendas desconectadas, datos incompletos, campañas sin segmentación o conversaciones que no llegan al responsable correcto. E-SMART360 ordena la operación para que cada contacto tenga una entrada clara, una calificación mínima, una respuesta útil y una salida medible.

## Plataformas recomendadas

- **Chatbots omnicanal:** capturan intención, responden preguntas y clasifican conversaciones.
- **Broadcasting:** comunica recordatorios, promociones, avisos o seguimiento con plantillas aprobadas.
- **Voz IA:** confirma, califica o reactiva cuando el chat no es suficiente.
- **Oficina virtual:** agenda y atiende por videollamada cuando la venta o servicio requiere conversación.
- **Tarjetas NFC:** conecta contacto presencial con CRM, WhatsApp, agenda o landing.
- **API y webhooks:** sincronizan eventos con sistemas internos.

## Flujo recomendado

1. El usuario entra por anuncio, QR, NFC, WhatsApp, webchat, formulario o llamada.
2. El sistema identifica motivo, urgencia, servicio, ubicación, presupuesto o etapa.
3. El flujo ofrece una respuesta, agenda, catálogo, llamada, formulario o derivación.
4. El equipo humano toma solo casos complejos o de alto valor.
5. Los eventos se guardan para seguimiento, medición y mejora mensual.

${checklistFor(route, section)}

## Integraciones útiles

CRM, Google Sheets, calendario, pasarela de pago, plataforma e-commerce, webhook interno, correo transaccional, gestor de tickets y dashboards de métricas. El orden correcto es conectar primero lo que afecta la operación diaria y dejar integraciones secundarias para una segunda fase.

## Ruta de adopción por madurez

En una primera etapa conviene activar solo el canal principal, una captura de datos mínima y un reporte sencillo para observar volumen, intención y tiempos de respuesta. En una segunda etapa se agregan etiquetas, campañas, recordatorios y handoff con reglas más precisas. La tercera etapa conecta integraciones, automatizaciones de seguimiento, voz IA u oficina virtual según el retorno esperado. Esta progresión evita sobrecargar al equipo y permite que cada cambio tenga evidencia operativa antes de sumar complejidad.

${metricsFor(route, section)}

${errorsFor(route, section)}

${relatedFor(route)}`;
}

function apiBody(route, section) {
  return `${featureSummary(route, section)}

## Modelo de eventos

Los eventos deben ser pequeños, verificables y repetibles. Cada payload incluye un identificador único, fecha, origen, tipo de evento y objeto principal. Si el destino no responde, E-SMART360 debe poder reintentar sin duplicar efectos.

## Payload de ejemplo

\`\`\`json
{
  "eventId": "evt_01HSMART360",
  "event": "conversation.updated",
  "source": "esmart360",
  "occurredAt": "2026-06-18T16:00:00-06:00",
  "customer": {
    "name": "Cliente Demo",
    "phone": "+525512345678",
    "channel": "whatsapp"
  },
  "context": {
    "route": "${route}",
    "tags": ${JSON.stringify(tagsFor(section, route))}
  }
}
\`\`\`

## Seguridad y autenticación

Usa HTTPS, tokens por entorno, rotación de secretos y firma HMAC cuando el destino lo permita. Nunca expongas tokens en documentación pública, capturas o ejemplos reales. Para producción, separa credenciales de desarrollo y mantén una lista de IPs, dominios y responsables técnicos.

## Retry e idempotencia

Los webhooks deben aceptar reintentos. El receptor debe usar \`eventId\` como clave idempotente para no crear dos tickets, dos pedidos o dos citas por el mismo evento. Recomendamos responder \`2xx\` solo cuando el evento fue validado y guardado; cualquier error temporal debe devolver \`5xx\` para permitir retry controlado.

${stepsFor(route, section)}

${checklistFor(route, section)}

## Troubleshooting

- Si no llega el webhook, valida URL pública, certificado TLS, método HTTP y reglas de firewall.
- Si llega duplicado, revisa idempotencia por \`eventId\`.
- Si faltan campos, confirma versión del payload y permisos del canal.
- Si el destino responde tarde, mueve procesos pesados a una cola interna.
- Si hay errores de firma, verifica encoding, secreto activo y cuerpo original sin modificar.

${metricsFor(route, section)}

${relatedFor(route)}`;
}

function generalBody(route, section) {
  return `${featureSummary(route, section)}

## Cuándo usar esta guía

Usa esta guía cuando quieras implementar, vender, explicar o auditar esta capacidad dentro de E-SMART360. El contenido está pensado para clientes finales, agencias, ventas, soporte y perfiles técnicos. La regla central es que cada función debe estar conectada a un resultado: más citas, más ventas, menos ausencias, mejor soporte, mejor reputación de cuenta o integración más confiable.

## Componentes involucrados

- **Entrada:** WhatsApp, Instagram, Facebook, Telegram, webchat, widget web, llamada, QR, NFC o formulario.
- **Lógica:** flujo visual, IA, segmentación, plantilla, reglas de horario, handoff o webhook.
- **Datos:** variables, etiquetas, contacto, pedido, cita, evento, historial y resultado.
- **Salida:** respuesta, campaña, ticket, pedido, agenda, videollamada, llamada, CRM o reporte.
- **Medición:** conversión, respuesta, entrega, satisfacción, error, abandono y acción humana.

${stepsFor(route, section)}

${checklistFor(route, section)}

## Ejemplo operativo

Una empresa lanza esta capacidad con un segmento pequeño. Primero define el mensaje principal y el dato mínimo que necesita capturar. Después conecta el canal, prueba el flujo con usuarios internos y revisa si las variables se guardan correctamente. Cuando todo está validado, activa tráfico real y monitorea respuesta, errores, abandono y escalaciones. La mejora ocurre por ciclos: ajustar copy, simplificar pasos, agregar respuestas frecuentes, afinar etiquetas y conectar nuevos sistemas solo cuando el flujo base ya funciona.

## Buenas prácticas

- Empieza con un flujo corto y medible antes de construir automatizaciones complejas.
- Nombra variables y etiquetas con un estándar fácil de leer por soporte y ventas.
- No uses mensajes genéricos para todos los casos; segmenta por intención, canal y etapa.
- Mantén una ruta humana clara para oportunidades importantes o problemas sensibles.
- Documenta cambios: fecha, responsable, motivo, métrica esperada y resultado.
- Revisa permisos y políticas de canal antes de enviar campañas o conectar integraciones.

${errorsFor(route, section)}

${metricsFor(route, section)}

${relatedFor(route)}`;
}

function frontmatter(route, section, order) {
  const title = titles[route] ?? route;
  return `---
title: ${quote(title)}
description: ${quote(descriptions[route] ?? `${title} dentro de la documentación operativa de E-SMART360.`)}
section: ${quote(section)}
order: ${order}
audience: ${arr(audienceFor(section, route))}
platform: ${arr(platformFor(section, route))}
useCase: ${arr(useCaseFor(section, route))}
source: ${quote(sourceFor(route))}
canonicalGroup: ${quote(slug(route))}
tags: ${arr(tagsFor(section, route))}
---

`;
}

function bodyFor(route, section) {
  if (section === "api-referencia" || route.startsWith("api/")) return apiBody(route, section);
  if (section === "sectores") return sectorBody(route, section);
  return generalBody(route, section);
}

let order = 1;
const generated = [];
for (const route of allRoutes) {
  const section = sectionByRoute.get(route);
  const file = path.join(docsRoot, `${route}.mdx`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${frontmatter(route, section, order++)}${bodyFor(route, section)}\n`, "utf8");
  generated.push(route);
}

const reportPath = path.join(docsRoot, "_final-generation-report.json");
fs.writeFileSync(
  reportPath,
  JSON.stringify({ generatedAt: new Date().toISOString(), generated: generated.length, routes: generated }, null, 2),
  "utf8",
);
console.log(`Generated final docs: ${generated.length}`);
console.log(`Report: ${path.relative(root, reportPath)}`);
