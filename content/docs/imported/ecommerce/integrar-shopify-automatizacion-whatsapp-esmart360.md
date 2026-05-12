---
title: "Integrar Shopify con E-SMART360 para automatización en WhatsApp"
description: "Aprende a conectar tu tienda Shopify con E-SMART360 para automatizar notificaciones de pedidos, recuperar carritos abandonados y verificar pagos contra entrega (COD) directamente por WhatsApp. Guía paso a paso sin código."
section: "ecommerce"
order: 230
audience: ["cliente"]
platform: ["chatbots"]
useCase: ["ecommerce"]
source: "fulldoc"
sourceSlug: "integrar-shopify-automatizacion-whatsapp-esmart360"
canonicalGroup: "integrar-shopify-con-para-automatizacion-en-whatsapp"
tags: ["ecommerce"]
staging: true
---
# Integrar Shopify con E-SMART360 para automatización en WhatsApp


> **¿Qué lograrás con esta integración?** Conectar tu tienda Shopify con E-SMART360 te permite automatizar la comunicación con tus clientes a través de WhatsApp: enviar notificaciones de pedidos, recuperar carritos abandonados, verificar pedidos contra entrega (COD) y mucho más.

## ¿Por qué integrar Shopify con E-SMART360?

Integrar tu tienda Shopify con E-SMART360 transforma la forma en que operas tu negocio de e-commerce. En lugar de depender únicamente del correo electrónico o de notificaciones dentro de la plataforma, puedes llevar cada interacción directamente al WhatsApp de tus clientes, el canal de comunicación más usado en el mundo.


> **Beneficios clave:**
- Notificaciones de pedidos en tiempo real por WhatsApp
- Recuperación automatizada de carritos abandonados
- Verificación de pedidos contra entrega (COD)
- Atención al cliente automatizada las 24/7
- Mayor tasa de conversión y retención de clientes

## Requisitos previos

Antes de comenzar con la integración, asegúrate de tener lo siguiente:

- Una **cuenta activa en E-SMART360** con acceso al panel de control
- Una **tienda en Shopify** con permisos de administrador
- Un **número de teléfono registrado en WhatsApp Business API** conectado a tu cuenta de E-SMART360
- Acceso al **panel de administración de Shopify** para crear aplicaciones personalizadas

## Paso 1: Acceder a la configuración de integración

El primer paso es acceder a la sección de integraciones dentro de tu panel de E-SMART360.


### Inicia sesión en E-SMART360

Accede a tu cuenta desde el panel de control y dirígete al menú lateral izquierdo.

### Ve al menú de Integraciones

Haz clic en **Integraciones** en la barra lateral izquierda del panel de control.

### Selecciona la opción E-commerce

En el lado izquierdo de la pantalla de integraciones, verás varias categorías. Selecciona **E-commerce**.

### Crea una nueva integración

Haz clic en el botón **Nuevo**. Se abrirá un panel en el lado derecho donde podrás elegir la plataforma. Selecciona **Shopify**.

### Completa los datos de conexión

Se te solicitarán los siguientes campos:
- **Nombre del perfil:** Un nombre descriptivo para identificar esta integración (puede ser el nombre de tu tienda o cualquier identificador).
- **Subdominio de la tienda:** El subdominio de tu tienda Shopify (por ejemplo, `mitienda` si tu tienda está en `mitienda.myshopify.com`).
- **Token de acceso de administrador:** El token que autenticará la conexión entre Shopify y E-SMART360. En el siguiente paso te explicamos cómo obtenerlo.

## Paso 2: Crear una aplicación en Shopify y obtener el Token de Administrador

Para que E-SMART360 pueda comunicarse con tu tienda Shopify de forma segura, necesitas crear una aplicación personalizada dentro de Shopify y generar un token de acceso de administrador.


### Accede al panel de administración de Shopify

Inicia sesión en tu cuenta de Shopify y dirígete al **panel de administración**.

### Ve a Configuración → Aplicaciones y canales de venta

En el menú lateral izquierdo, haz clic en **Configuración**, luego selecciona **Aplicaciones y canales de venta**.

### Desarrolla aplicaciones

Desplázate hacia abajo hasta encontrar la sección **Desarrollar aplicaciones** y haz clic en el botón correspondiente.

### Crea una nueva aplicación

Haz clic en **Crear una aplicación**. En el campo **Nombre de la aplicación**, ingresa un nombre descriptivo como "E-SMART360 Integration". Luego haz clic en **Crear aplicación**.

### Configura los alcances de la API de administración

Una vez creada la aplicación, ve a la pestaña **Configuración** y busca la sección **Alcances de la API de administración**. Haz clic en **Configurar**. Deberás otorgar permisos de **lectura y escritura** para los siguientes recursos:
- **Pedidos** (`orders`)
- **Edición de pedidos** (`order_editing`)

Estos permisos permitirán a E-SMART360 acceder a los datos de tus pedidos y automatizar las notificaciones. Haz clic en **Guardar** cuando hayas terminado.

### Instala la aplicación

Ve a la pestaña **Credenciales de la API**. Haz clic en **Instalar aplicación** y luego confirma presionando **Instalar**.

### Revela el token de acceso

Después de la instalación, verás la opción **Revelar token una vez**. Haz clic en ese botón y **copia el token de acceso de administrador** que aparece. Guárdalo en un lugar seguro, ya que no podrás volver a verlo.


> **Importante:** El token de acceso de administrador es una credencial sensible. No lo compartas con nadie y guárdalo de forma segura. Si sospechas que ha sido comprometido, puedes regenerarlo desde el panel de Shopify.

## Paso 3: Completar la integración en E-SMART360

Ahora que tienes el token de acceso de administrador, vuelve al panel de E-SMART360 para finalizar la conexión.


### Pega el token en el campo correspondiente

En la pantalla de integración de Shopify donde dejaste los datos a medio completar, pega el **token de acceso de administrador** que copiaste en el paso anterior en el campo **Admin Access Token**.

### Guarda la configuración

Haz clic en el botón **Guardar** para completar la integración.


> **¡Listo!** Tu tienda Shopify ahora está conectada con E-SMART360. El perfil de integración aparecerá en tu lista de conexiones de e-commerce y podrás editarlo o eliminarlo en cualquier momento.

## Paso 4: Configurar notificaciones de pedidos por WhatsApp

Una vez que la integración está activa, puedes comenzar a enviar notificaciones automáticas de pedidos a tus clientes por WhatsApp usando el flujo de Webhook Workflow. Sigue estos pasos:


### Crea una plantilla de mensaje para WhatsApp

Ve al **Gestor de bots** en E-SMART360 y dirígete a **Plantillas de mensajes**. Crea una plantilla que incluya variables dinámicas como:
- `{{ProductList}}` — Lista de productos del pedido
- `{{TotalPrice}}` — Precio total del pedido
- `{{EstimatedDeliveryDate}}` — Fecha estimada de entrega
- `{{OrderNumber}}` — Número de pedido
- `{{CustomerName}}` — Nombre del cliente


> **Consejo:** Asegúrate de que tu plantilla cumpla con las políticas de Meta para ser aprobada. Usa un lenguaje claro y evita promociones no solicitadas en plantillas de tipo utilitario.

### Configura un Webhook Workflow

En el panel de E-SMART360, ve a **Webhook Workflow** y haz clic en **Crear Workflow**.
1. Asigna un nombre descriptivo al flujo (ej: "Notificación de pedido nuevo").
2. Selecciona la **cuenta de WhatsApp** desde la cual se enviarán los mensajes.
3. Elige la **plantilla de mensaje** que creaste en el paso anterior.
4. Haz clic en **Crear Workflow**. El sistema generará una **URL de Webhook** única.
5. **Copia esta URL** — la necesitarás en Shopify.

### Configura el webhook en Shopify

Ve al panel de administración de Shopify y navega a **Configuración → Notificaciones**. En la sección **Webhooks**, haz clic en **Crear webhook**. Completa los campos:
- **Evento:** Selecciona **Creación de pedido**.
- **Formato:** Mantén **JSON**.
- **URL:** Pega la URL del webhook que copiaste de E-SMART360.
- Haz clic en **Guardar**.

### Captura y mapea la respuesta del webhook

Vuelve a E-SMART360 → **Webhook Workflow** y haz clic en **Capturar respuesta del webhook**.
1. En Shopify, haz clic en **Enviar notificación de prueba** para generar un pedido de prueba.
2. Espera a que la respuesta aparezca en E-SMART360.
3. **Mapea los campos:**
   - **Número de teléfono** → `shipping_address > phone` (o `billing_address > phone`)
   - **Precio total** → `total_price`
   - **Lista de productos** → `line_items`
   - **Fecha estimada de entrega** → `created_at`
   - **Número de pedido** → `order_number`
   - **Nombre del cliente** → `customer > first_name` + `customer > last_name`
4. Haz clic en **Guardar Workflow**.

### Prueba el flujo completo

Realiza un pedido de prueba en tu tienda Shopify y verifica que:
1. El estado en **Webhook Workflow** de E-SMART360 cambie de "Pendiente" a "Completado".
2. Recibas la notificación de WhatsApp en el número de teléfono del cliente.
3. Los datos mostrados (productos, precio total, nombre) sean correctos.



### Ejemplo de plantilla de notificación

```
🛍️ ¡Gracias por tu compra, {{CustomerName}}!

Tu pedido #{{OrderNumber}} ha sido confirmado.

📦 Productos: {{ProductList}}
💰 Total: {{TotalPrice}}
📅 Entrega estimada: {{EstimatedDeliveryDate}}

Gracias por confiar en nosotros. 🚀
```

### Ejemplo de plantilla para COD

```
🛵 ¡Hola {{CustomerName}}!

Tu pedido #{{OrderNumber}} por {{TotalPrice}} está listo para ser enviado.

📍 Dirección: {{ShippingAddress}}
💳 Método de pago: Contra entrega

Por favor, ten el efectivo listo al momento de la entrega.

Gracias por tu preferencia. 🙌
```

## Paso 5: Recuperar carritos abandonados automáticamente

Una de las funcionalidades más potentes después de integrar Shopify con E-SMART360 es la recuperación de carritos abandonados. Los estudios muestran que la tasa de abandono de carritos en e-commerce ronda el 70%, y un recordatorio oportuno por WhatsApp puede recuperar entre un 15% y un 30% de esas ventas perdidas.


### Ve a la automatización de carritos abandonados

En el panel de E-SMART360, dirígete a **WC/Shopify Automation** y haz clic en **Crear**.

### Configura los parámetros de la campaña

Completa los siguientes campos:
- **Nombre de la campaña:** Un nombre descriptivo (ej: "Recuperación carritos - WhatsApp").
- **Tipo de tienda:** Selecciona **Shopify**.
- **API de tienda Shopify:** Elige el perfil de integración que creaste anteriormente.
- **Acción:** Selecciona **Recuperación de carrito abandonado**.

### Define el tiempo de espera y la plantilla

- **Demora del mensaje:** Establece el tiempo después del cual se enviará el recordatorio (por defecto: 30 minutos, pero puedes ajustarlo según tu estrategia).
- **Plantilla de mensaje:** Elige la plantilla de carrito abandonado que creaste (o usa las plantillas predeterminadas).

### Configura seguimiento adicional (opcional)

Puedes asignar **etiquetas** a los clientes que abandonan el carrito y configurar **secuencias de mensajes** de seguimiento para aumentar las probabilidades de conversión.

### Guarda la automatización

Haz clic en **Guardar**. A partir de este momento, cada vez que un cliente llegue a la página de pago y no complete la compra, recibirá automáticamente un mensaje de WhatsApp con un recordatorio personalizado.



### 📈 Ejemplo práctico: Recuperación de carrito

María agrega productos a su carrito en tu tienda Shopify por un valor de $45 USD, pero abandona la compra en la página de pago. Treinta minutos después, recibe este mensaje en WhatsApp:

"¡Hola María! 👋
Vimos que dejaste algunos productos en tu carrito:
🛒 Zapatos deportivos - $35.00
🧦 Calcetines - $10.00
💰 Total: $45.00

¿Quieres completar tu compra? Haz clic aquí para finalizar 👉 [link]

¡Tu pedido te espera! 🚀"

Resultado: María hace clic, completa la compra y la venta se recupera.

### 🚀 Ejemplo práctico: Verificación COD

Un cliente llamado Carlos realiza un pedido contra entrega (COD) de $120 USD. Con la integración activa, recibe automáticamente:

"🛵 ¡Hola Carlos!
Tu pedido #1042 por $120.00 ha sido procesado y está listo para entrega.
📍 Dirección: Calle Principal 123, Ciudad
💳 Pago: Contra entrega

Por favor confirma que estarás en casa para recibirlo. Responde ✅ SÍ o ❌ NO"

Carlos confirma, y el equipo de logística procede con la entrega, reduciendo las devoluciones por ausencia del cliente.

## Funcionalidades avanzadas con la integración Shopify

Una vez que tu tienda Shopify está conectada con E-SMART360, puedes aprovechar múltiples funcionalidades adicionales que van más allá de las notificaciones básicas:


### Enviar notificaciones de cambio de estado de pedido

Configura webhooks para diferentes eventos de Shopify como:
- **Pedido cancelado** → Notificar al cliente y ofrecer alternativas
- **Pedido enviado** → Compartir número de guía y enlace de rastreo
- **Pedido entregado** → Solicitar reseña o feedback del producto
- **Devolución iniciada** → Gestionar el proceso de devolución por chat

Cada evento puede tener su propia plantilla de mensaje personalizada.

### Vender productos del catálogo de Shopify en WhatsApp

Con la integración del catálogo de productos, puedes mostrar tus productos directamente dentro de las conversaciones de WhatsApp. Los clientes pueden:
- Ver imágenes y descripciones de productos
- Consultar precios y disponibilidad
- Agregar productos al carrito sin salir de WhatsApp
- Completar la compra a través de un flujo conversacional

Esto convierte a WhatsApp en un canal de venta completo.

### Automatización con secuencias de mensajes

Puedes crear secuencias de mensajes automatizados para:
- **Post-venta:** Enviar consejos de uso del producto 3 días después de la entrega
- **Cross-selling:** Recomendar productos complementarios basados en la compra anterior
- **Re-engagement:** Enviar un mensaje de oferta especial a clientes que no han comprado en 30 días
- **Encuestas de satisfacción:** Preguntar por la experiencia de compra 7 días después de la entrega

### Verificación de pedidos contra entrega (COD)

Si tu tienda ofrece pagos contra entrega, puedes automatizar la verificación de estos pedidos:
1. Cuando se crea un pedido COD, el cliente recibe un mensaje de confirmación.
2. El cliente debe confirmar el pedido respondiendo al mensaje.
3. Si el cliente no confirma en un período determinado, se envía un recordatorio.
4. Los pedidos no confirmados pueden ser marcados para revisión manual.

Esto reduce significativamente las falsas entregas y los costos de logística.

### Integración con Google Sheets

Puedes combinar la integración de Shopify con Google Sheets para:
- Exportar datos de pedidos a una hoja de cálculo automáticamente
- Crear informes personalizados sobre rendimiento de ventas
- Segmentar clientes por frecuencia de compra, monto promedio o preferencias
- Enviar mensajes masivos personalizados usando datos de la hoja de cálculo

Para más detalles, consulta la guía de integración con Google Sheets.

## Configuración de Workflow Webhook para eventos específicos de Shopify

Una de las capacidades más potentes después de integrar Shopify con E-SMART360 es la posibilidad de crear Workflows Webhook específicos para cada tipo de evento que ocurra en tu tienda. A continuación te mostramos los eventos más útiles y cómo configurarlos.

### Notificación de pedido cancelado

Cuando un cliente cancela un pedido, puedes notificarlo automáticamente y ofrecer alternativas.


### Crea un nuevo Workflow Webhook

Ve a **Webhook Workflow** en el panel de E-SMART360 y haz clic en **Crear Workflow**. Nombra el flujo como "Pedido cancelado - notificación".

### Selecciona la plantilla y obtén la URL

Elige una plantilla de mensaje tipo utilidad que comunique la cancelación de forma clara. Por ejemplo:

```
Hola {{CustomerName}}, lamentamos informarte que tu pedido #{{OrderNumber}} ha sido cancelado.

Si deseas realizar un nuevo pedido o tienes preguntas, responde a este mensaje y con gusto te ayudaremos.

💰 Reembolso: {{RefundAmount}}
📅 Fecha de cancelación: {{CancelledDate}}
```

Copia la URL del webhook generada.

### Configura el webhook en Shopify

En Shopify, ve a **Configuración → Notificaciones → Webhooks** y crea un nuevo webhook con:
- **Evento:** `orders/cancelled`
- **Formato:** JSON
- **URL:** Pega la URL de E-SMART360

### Captura y mapea la respuesta

Genera una cancelación de prueba desde Shopify (puedes cancelar un pedido de prueba) y captura la respuesta en E-SMART360. Mapea los campos relevantes como el número de teléfono, nombre del cliente, número de pedido y monto del reembolso.

### Notificación de pedido enviado

Mantén a tus clientes informados cuando sus pedidos sean despachados.


### Crea el Workflow

Crea un nuevo Workflow llamado "Pedido enviado - notificación de envío".

### Diseña la plantilla de mensaje

Crea una plantilla que incluya:

```
🚚 ¡Buenas noticias, {{CustomerName}}!

Tu pedido #{{OrderNumber}} ha sido enviado.

📦 Productos: {{ProductList}}
🏷️ Compañía de envío: {{ShippingCompany}}
🔢 Número de guía: {{TrackingNumber}}
🔗 Rastrea tu pedido aquí: {{TrackingUrl}}
📅 Fecha estimada de entrega: {{EstimatedDelivery}}

¡Gracias por tu compra! 🙌
```

### Configura el webhook en Shopify

Crea un webhook con el evento `orders/fulfilled` y la URL generada por E-SMART360.

### Mapea los campos de envío

Captura la respuesta y mapea correctamente los campos de fulfillment:
- Número de teléfono → `shipping_address.phone` o `billing_address.phone`
- Compañía de envío → `fulfillments[0].tracking_company`
- Número de guía → `fulfillments[0].tracking_number`
- URL de rastreo → `fulfillments[0].tracking_url`

### Notificación de pedido entregado

Una vez que el pedido ha sido marcado como entregado, puedes solicitar una reseña o feedback.


### Crea el Workflow de post-entrega

Crea un Workflow llamado "Pedido entregado - solicitud de reseña".

### Crea la plantilla de reseña

Diseña una plantilla que invite al cliente a calificar su experiencia:

```
🎉 ¡Hola {{CustomerName}}!

Tu pedido #{{OrderNumber}} ha sido entregado exitosamente.

¿Cómo fue tu experiencia de compra? Nos encantaría conocer tu opinión.

⭐ Haz clic aquí para calificarnos: [link a encuesta]

¡Gracias por elegirnos! 💙
```

**Nota:** Esta plantilla debe ser aprobada por Meta como plantilla de tipo marketing si incluye solicitud de reseña.

### Configura el webhook

No existe un evento nativo de "entregado" en Shopify. Para detectar la entrega, puedes:
- Usar una aplicación de tracking que actualice el fulfillment
- Configurar un webhook `fulfillments/update` y detectar cambios de estado
- Integrar con el carrier para recibir notificaciones de entrega

## Mapeo detallado de campos de Shopify en Webhook Workflow

Cuando configures un Webhook Workflow, es esencial que entiendas la estructura de datos que Shopify envía para mapear correctamente cada campo. Aquí te mostramos un desglose detallado:



### Datos del pedido

```json
{
  "id": 1234567890,
  "order_number": 1042,
  "created_at": "2026-05-07T15:30:00Z",
  "total_price": "45.00",
  "subtotal_price": "40.00",
  "total_tax": "5.00",
  "currency": "USD",
  "financial_status": "paid",
  "fulfillment_status": null,
  "note": null
}
```
**Campos clave para mapear:**
- `order_number` → Número de pedido visible para el cliente
- `total_price` → Precio total (usar `total_price` en lugar de `total_price_set`)
- `created_at` → Fecha de creación
- `financial_status` → Estado del pago (paid, pending, refunded)

### Datos del cliente

```json
{
  "customer": {
    "id": 987654321,
    "first_name": "María",
    "last_name": "García",
    "email": "maria@ejemplo.com",
    "phone": "+521234567890",
    "note": null
  }
}
```
**Campos clave:**
- `customer.first_name` + `customer.last_name` → Nombre completo
- `customer.phone` → Número de teléfono (cuando está disponible en el perfil)
- `customer.email` → Correo electrónico (respaldo)

### Dirección de envío

```json
{
  "shipping_address": {
    "first_name": "María",
    "last_name": "García",
    "address1": "Calle Principal 123",
    "address2": "Depto 4B",
    "city": "Ciudad de México",
    "province": "CDMX",
    "zip": "06600",
    "country": "México",
    "phone": "+521234567890"
  }
}
```
**Campos clave:**
- `shipping_address.phone` → **Mejor opción** para obtener el teléfono del cliente
- `shipping_address.address1` + `address2` → Dirección completa
- `shipping_address.city` + `province` + `zip` → Ubicación

### Productos del pedido

```json
{
  "line_items": [
    {
      "name": "Zapatos deportivos",
      "quantity": 1,
      "price": "35.00",
      "sku": "ZAP-001",
      "variant_title": "Talla 42 / Negro"
    },
    {
      "name": "Calcetines",
      "quantity": 2,
      "price": "5.00",
      "sku": "CAL-002"
    }
  ]
}
```
**Campos clave:**
- `line_items[].name` → Nombre del producto
- `line_items[].quantity` → Cantidad
- `line_items[].price` → Precio unitario
- `line_items[].variant_title` → Variante (talla, color, etc.)

Para la lista de productos en la plantilla, E-SMART360 concatenará automáticamente los nombres y cantidades.

> **Consejo profesional:** Siempre captura la respuesta de prueba real de Shopify en lugar de confiar en la estructura documentada. Shopify puede agregar o modificar campos en sus actualizaciones. La función **Capturar respuesta del webhook** de E-SMART360 te mostrará exactamente la estructura que tu tienda está enviando.

## Estrategias avanzadas de automatización

Una vez que dominas la configuración básica, puedes implementar estrategias más sofisticadas para maximizar el valor de tu integración.

### Secuencia de múltiples mensajes para carritos abandonados

No te limites a un solo recordatorio. Crea una secuencia de seguimiento:



### ⏰ Mensaje 1: 30 min después

"¡Hola {{CustomerName}}! ¿Olvidaste algo? 🛒

Tienes {{ProductCount}} productos esperando en tu carrito:
{{ProductList}}
💰 Total: {{TotalPrice}}

👉 Completa tu compra aquí: [checkout link]"

### 💪 Mensaje 2: 24 h después

"{{CustomerName}}, tu carrito sigue ahí... ¿necesitas ayuda con algo? 🤔

Si tienes dudas sobre tallas, envío o métodos de pago, ¡estamos aquí para ayudarte!

EscrÍbenos y te responderemos al instante. 💬"

### 🎁 Mensaje 3: 72 h después

"{{CustomerName}} ⚡ ¡Última oportunidad!

Completa tu compra de {{ProductList}} y obtén **{{DiscountPercent}}% de descuento** en tu siguiente pedido.

👉 [checkout link]

Esta oferta expira pronto. ¡No la dejes pasar! 🎉"

> **Cómo implementarlo:** Crea tres Workflows Webhook separados o configura una automatización con temporizadores en **WC/Shopify Automation**. Cada mensaje debe usar una plantilla aprobada por Meta y respetar los límites de mensajería de WhatsApp.

### Automatización de etiquetado y segmentación de clientes

Aprovecha las etiquetas de Shopify para segmentar a tus clientes y personalizar los mensajes:

| Etiqueta en Shopify | Segmento | Acción automatizada en E-SMART360 |
|---|---|---|
| `vip` | Clientes frecuentes | Enviar ofertas exclusivas y acceso anticipado |
| `nuevo` | Primera compra | Enviar guía de bienvenida y tutorial de productos |
| `cod-confirmed` | COD verificado | Proceder con el envío |
| `carrito-recuperado` | Recuperados | Agradecer y ofrecer descuento para próxima compra |
| `inactivo-30d` | Sin compras en 30 días | Enviar campaña de re-engagement con oferta |

Para automatizar el etiquetado, puedes usar los Workflows Webhook de E-SMART360 para agregar etiquetas automáticamente a los clientes basándote en su comportamiento. Luego, segmenta tus campañas de broadcast por etiquetas para enviar mensajes altamente relevantes.

### Optimización de tasas de conversión

Basado en datos de implementaciones exitosas, estas son las mejores prácticas para maximizar la efectividad de tu integración:

1. **Personaliza siempre el mensaje:** Usa el nombre del cliente y productos específicos en cada comunicación. Los mensajes genéricos tienen tasas de conversión hasta 3 veces menores.
2. **Incluye un enlace directo al checkout:** Cada mensaje de recuperación debe incluir un enlace que lleve al cliente directamente a su carrito para completar la compra en un solo clic.
3. **Respeta los horarios:** Configura los mensajes para que se envíen en horario comercial (9:00 a 21:00) para evitar violar las políticas de WhatsApp y reducir las tasas de bloqueo.
4. **Prueba A/B de plantillas:** Crea dos versiones de cada plantilla y mide cuál tiene mejor tasa de respuesta. E-SMART360 te permite monitorear el rendimiento de cada workflow.
5. **Ofrece incentivos en el tercer mensaje:** El primer recordatorio debe ser amable, el segundo útil, y el tercero debe incluir un descuento o beneficio tangible.

## Preguntas frecuentes


### ¿Cuál es el beneficio principal de integrar Shopify con E-SMART360?

El beneficio principal es poder automatizar toda la comunicación con tus clientes a través de WhatsApp, el canal de mensajería más utilizado del mundo. Esto incluye notificaciones de pedidos en tiempo real, recuperación de carritos abandonados, verificación de pedidos COD y atención al cliente automatizada. Como resultado, mejoras la experiencia del cliente, aumentas las tasas de conversión y reduces la carga operativa de tu equipo.

### ¿Qué funcionalidades están disponibles después de la integración?

Una vez conectada tu tienda, puedes:
- Enviar notificaciones automáticas de pedidos por WhatsApp
- Recuperar carritos abandonados con mensajes personalizados
- Verificar pedidos contra entrega (COD) automáticamente
- Automatizar la comunicación post-venta con secuencias de mensajes
- Vender productos del catálogo de Shopify directamente en WhatsApp
- Usar webhooks para eventos personalizados (cancelaciones, envíos, devoluciones)

### ¿Es necesario crear una aplicación en Shopify para la conexión?

Sí. Para conectar tu tienda Shopify con E-SMART360 de forma segura, debes crear una aplicación personalizada (custom app) dentro del panel de administración de Shopify. Esta aplicación te permitirá generar un **Token de acceso de administrador** que E-SMART360 usará para autenticarse y acceder a los datos de tus pedidos. El proceso es sencillo, no requiere conocimientos de programación y solo toma unos minutos.

### ¿Qué permisos necesita la API de administración de Shopify?

Necesitas otorgar permisos de **lectura y escritura** para:
- **Pedidos (Orders):** Para acceder a la información de pedidos, productos, precios y estados.
- **Edición de pedidos (Order editing):** Para gestionar modificaciones y actualizaciones de pedidos.

Estos permisos permiten a E-SMART360 leer los datos necesarios para las automatizaciones y, en algunos casos, actualizar información relevante.

### ¿Para qué se usa el Token de acceso de administrador?

El Token de acceso de administrador es la llave que permite a E-SMART360 comunicarse de forma segura con tu tienda Shopify. Con este token, la plataforma puede autenticarse ante la API de Shopify y obtener los datos de los pedidos, clientes y productos para activar las automatizaciones que configures (notificaciones, recuperación de carritos, etc.). Es una credencial sensible que debe mantenerse en secreto.

### ¿Dónde ingreso los datos de Shopify en E-SMART360?

Los datos se ingresan en el panel de E-SMART360 en la ruta: **Integraciones → E-commerce → Nuevo → Shopify**. Los campos requeridos son:
- **Nombre del perfil:** Cualquier nombre descriptivo.
- **Subdominio de la tienda:** El subdominio de tu Shopify (ej: `mitienda`).
- **Token de acceso de administrador:** El token que generaste en el paso anterior.

### ¿Se necesita programación para completar la integración?

No. Todo el proceso de integración entre Shopify y E-SMART360 es completamente **sin código**. Solo necesitas seguir los pasos desde los paneles de administración de ambas plataformas. No se requieren conocimientos técnicos ni de programación.

### ¿Esta integración funciona con WhatsApp Cloud API?

Sí. E-SMART360 utiliza la API de WhatsApp Cloud API (la API oficial de Meta) para enviar todos los mensajes automatizados. Esto garantiza que tus mensajes cumplan con las políticas de WhatsApp y lleguen de forma confiable a tus clientes.

### ¿Puedo desactivar o actualizar la integración después de activarla?

Sí, puedes editar, actualizar o eliminar la integración de Shopify en cualquier momento desde la sección **Integraciones → E-commerce** en tu panel de E-SMART360. Si necesitas cambiar el token o actualizar el subdominio, simplemente edita el perfil existente.

### ¿Qué hago si el webhook no captura la respuesta de Shopify?

Si el webhook no captura la respuesta, verifica lo siguiente:
1. Asegúrate de que la URL del webhook esté correctamente copiada en la configuración de Shopify.
2. Haz clic en **Enviar notificación de prueba** nuevamente en Shopify.
3. Refresca la página de **Webhook Workflow** en E-SMART360 para verificar si aparece la respuesta.
4. Revisa que los permisos de la API de Shopify incluyan los alcances necesarios.
5. Si el problema persiste, elimina y vuelve a crear el webhook tanto en Shopify como en E-SMART360.

### ¿Puedo usar otros eventos de Shopify además de la creación de pedidos?

Sí. Puedes crear webhooks adicionales para diferentes eventos como:
- **Cancelación de pedido** (`orders/cancelled`)
- **Cumplimiento de pedido** (`orders/fulfilled`)
- **Devolución** (`returns/create`)
- **Actualización de inventario** (`inventory_levels/update`)
- **Creación de cliente** (`customers/create`)

Cada evento puede tener su propio flujo de automatización en E-SMART360 con su propia plantilla de mensaje personalizada.

### ¿El carrito abandonado funciona si el cliente no proporciona número de teléfono?

Para que la recuperación de carritos abandonados funcione correctamente, la tienda Shopify debe **solicitar el número de teléfono** en la dirección de facturación o envío. Si el cliente no proporciona su número, no será posible enviarle el recordatorio por WhatsApp. Recomendamos configurar Shopify para que el campo de teléfono sea obligatorio durante el checkout.

### ¿Cómo configuro mensajes de prueba sin afectar a clientes reales?

Puedes crear pedidos de prueba en Shopify usando la función **Crear pedido manual** en el panel de administración. Usa un número de teléfono de prueba (el tuyo o el de un colega) para verificar que los mensajes se envían correctamente. Una vez que confirmes que todo funciona, los mensajes se enviarán automáticamente a los clientes reales.

### ¿La integración funciona con tiendas Shopify en múltiples países?

Sí. La integración de Shopify con E-SMART360 funciona independientemente del país donde esté registrada tu tienda. Solo asegúrate de que los números de teléfono de tus clientes estén en formato internacional. E-SMART360 maneja correctamente los códigos de país y los prefijos internacionales.

## Solución de problemas comunes


### Error: El mensaje no se envía a WhatsApp

Si las notificaciones no llegan al cliente:
- Verifica que la **cuenta de WhatsApp** esté correctamente conectada en E-SMART360.
- Confirma que el **Webhook Workflow** esté activo (estado "Activo").
- Revisa que la **plantilla de mensaje** haya sido aprobada por Meta.
- Asegúrate de que el número de teléfono del cliente esté en formato internacional con código de país (ej: +521234567890).
- Comprueba que el cliente haya **optado por recibir** mensajes (consentimiento).
- Revisa los logs de actividad en E-SMART360 para identificar errores específicos.

### Error: La respuesta del webhook no se captura

- Verifica que la URL del webhook en Shopify sea exactamente la misma que la generada en E-SMART360 (sin espacios ni caracteres adicionales).
- Envía la notificación de prueba desde Shopify y luego haz clic en "Capturar respuesta del webhook" en E-SMART360.
- Si el problema persiste, elimina y vuelve a crear el webhook tanto en Shopify como en E-SMART360.
- Asegúrate de que el formato seleccionado en Shopify sea **JSON** (no XML).

### Error: El token de acceso de administrador no funciona

- Asegúrate de haber copiado el token completo (sin espacios adicionales al inicio o final).
- Verifica que la aplicación de Shopify tenga los permisos correctos (Orders y Order editing con lectura y escritura).
- Si el token expiró, genera uno nuevo desde el panel de Shopify: ve a la aplicación → API Credentials → Reveal token once.
- Crea una nueva aplicación en Shopify si el token sigue sin funcionar.

## Próximos pasos

Una vez que hayas completado la integración básica, te recomendamos explorar estas guías relacionadas para maximizar el potencial de tu automatización:



### 📦 Notificaciones de pedidos

Aprende a configurar notificaciones detalladas de pedidos en Shopify directamente en WhatsApp, incluyendo datos de productos, precios y seguimiento.

### 🛒 Recuperación de carritos

Descubre cómo configurar campañas avanzadas de recuperación de carritos abandonados con secuencias de múltiples mensajes y ofertas personalizadas.

### ✅ Verificación COD

Guía completa para verificar pedidos contra entrega (COD) de Shopify por WhatsApp, reduciendo devoluciones y mejorando la tasa de éxito de entregas.

### 🚀 Envío de notificaciones

Configura el envío de notificaciones de cambio de estado de pedidos de Shopify a WhatsApp con webhook workflow.


> **Integración Shopify con E-SMART360 (Mayo 2026)**
> Esta guía ha sido actualizada para reflejar las últimas funcionalidades disponibles en la integración Shopify. Se han agregado secciones sobre recuperación de carritos abandonados, verificación COD, mapeo detallado de campos de Shopify y solución de problemas ampliada.
