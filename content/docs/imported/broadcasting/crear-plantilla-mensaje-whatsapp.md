---
title: "Cómo crear una plantilla de mensaje para WhatsApp"
description: "Guía completa paso a paso para crear, aprobar y utilizar plantillas de mensaje en WhatsApp Business API a través de E-SMART360. Incluye tipos de plantillas, límites de caracteres, variables dinámicas, botones CTA, causas de rechazo y ejemplos prácticos para ecommerce."
section: "broadcasting"
order: 199
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "crear-plantilla-mensaje-whatsapp"
canonicalGroup: "como-crear-una-plantilla-de-mensaje-para-whatsapp"
tags: ["broadcasting"]
staging: true
---
# Cómo crear una plantilla de mensaje para WhatsApp


> Las plantillas de mensaje de WhatsApp son mensajes predefinidos y aprobados que permiten a las empresas iniciar conversaciones con sus clientes en cualquier momento, incluso fuera de la ventana de 24 horas. Con E-SMART360 puedes crear, gestionar y sincronizar estas plantillas directamente desde el panel de control, integrándolas con transmisiones masivas, flujos de bot, chat en vivo y notificaciones de WooCommerce o Shopify.

Las plantillas te permiten enviar mensajes enriquecidos con formato estructurado, botones interactivos, variables personalizadas y contenido multimedia. Son la base de cualquier estrategia de comunicación profesional en WhatsApp Business API.

## ¿Qué son y para qué sirven las plantillas de mensaje?

WhatsApp Business API exige que los mensajes iniciados por la empresa —es decir, aquellos que no son respuesta a un mensaje del cliente— utilicen plantillas previamente aprobadas. Esto garantiza que los usuarios reciban contenido relevante, estructurado y libre de spam.

Las plantillas se usan principalmente para:

- **Notificaciones transaccionales**: confirmaciones de pedido, recibos de pago, actualizaciones de envío.
- **Recordatorios**: citas médicas, vencimientos de facturas, fechas de entrega.
- **Mensajes promocionales**: ofertas, descuentos, lanzamientos, eventos.
- **Autenticación y seguridad**: códigos OTP, verificación de identidad.
- **Reenganche de clientes**: mensajes para recuperar usuarios inactivos.
- **Encuestas y feedback**: solicitudes de opinión después de una compra o servicio.


> Al crear tus plantillas directamente en E-SMART360, puedes gestionarlas junto con tus flujos de automatización, etiquetarlas por campaña y hacer seguimiento de su rendimiento sin salir de la plataforma.

## Prerrequisitos

Antes de empezar a crear plantillas de mensaje, asegúrate de tener todo listo:


### Cuenta de WhatsApp Business conectada

Debes tener una cuenta de WhatsApp Business API vinculada a E-SMART360. Si aún no lo has hecho, sigue la guía de conexión en el módulo de configuración de canales.

### Acceso a WhatsApp Cloud API (opcional)

Si planeas crear plantillas desde el Administrador de WhatsApp Manager y luego sincronizarlas, necesitarás acceso a la plataforma de Meta Developers.

### Contenido del mensaje definido

Redacta previamente el texto de tu plantilla, incluyendo:
- Las variables que necesitarás (nombre del cliente, número de pedido, fecha, etc.).
- Los botones de acción o respuesta rápida.
- El texto del pie de página (si aplica).
- El tipo de encabezado (texto, imagen, video o documento).

## Tipos de plantillas: utilidad vs. marketing

WhatsApp clasifica las plantillas en dos categorías principales. Elegir la categoría correcta es fundamental para que tu plantilla sea aprobada.

### Plantillas de utilidad

Las plantillas de **utilidad** están diseñadas exclusivamente para mensajes transaccionales. Deben ser funcionales, informativas y no promocionales. Si una plantilla mezcla contenido de utilidad con promocional, WhatsApp la clasificará automáticamente como de marketing.

**Características clave:**
- Deben estar vinculadas a una transacción, suscripción o servicio acordado previamente.
- El contenido debe ser neutral y objetivo.
- Tienen prioridad de entrega más alta que las de marketing.
- Suelen tener tasas de aprobación más rápidas y altas.

**Ejemplos de plantillas de utilidad:**

| Contexto | Ejemplo |
|---|---|
| Confirmación de pedido | "Tu pedido #12345 ha sido confirmado. Recibirás una actualización de seguimiento pronto." |
| Recibo de pago | "Tu pago de $50 se ha procesado correctamente. Gracias por tu compra." |
| Recordatorio de cita | "Recordatorio: tu cita con el Dr. García es el 15 de marzo a las 10 AM. Responde para confirmar." |
| Actualización de envío | "Tu paquete #98765 ha sido enviado. Fecha estimada de entrega: 20 de marzo." |
| Código de verificación | "Tu código de verificación es: 482931. Válido por 10 minutos." |

### Plantillas de marketing

Las plantillas de **marketing** ofrecen mayor flexibilidad y se usan para mensajes que no están vinculados a una transacción específica. Pueden incluir contenido promocional, invitaciones y mensajes de reenganche.

**Características clave:**
- Mayor libertad creativa en el contenido.
- Pueden incluir imágenes, videos y botones promocionales.
- Están sujetas a límites de frecuencia (frequency capping) establecidos por Meta.
- Su aprobación puede tomar más tiempo y ser más estricta.

**Ejemplos de plantillas de marketing:**

| Contexto | Ejemplo |
|---|---|
| Oferta promocional | "¡Oferta exclusiva! Obtén 20% de descuento en tu próxima compra. Usa AHORRO20." |
| Reenganche | "Te extrañamos. Disfruta de envío gratis en tu próximo pedido. Toca para comprar." |
| Evento | "Únete a nuestro webinar sobre marketing digital. ¡Regístrate ahora!" |
| Recomendación | "Basado en tus compras, creemos que te encantará nuestra nueva colección." |
| Bienvenida | "¡Bienvenido a {{tienda}}! Disfruta de un 10% de descuento en tu primera compra." |


### ¿Qué pasa si mi plantilla tiene contenido mixto?

Si una plantilla contiene tanto elementos de utilidad como promocionales, WhatsApp la clasificará como **marketing**. Por ejemplo, si añades "¡Aprovecha nuestra oferta!" al final de una confirmación de pedido, toda la plantilla se tratará como marketing. Esto puede reducir la prioridad de entrega y aumentar la probabilidad de rechazo. Es mejor mantener las plantillas de utilidad limpias y crear plantillas de marketing separadas.

## Guía paso a paso para crear una plantilla

Sigue estos pasos para crear tu primera plantilla de mensaje en E-SMART360:


### Accede al Gestor de Bots

Ingresa al **panel principal** de E-SMART360, navega a **Gestor de Bots** y selecciona la cuenta de bot de WhatsApp donde deseas trabajar. Una vez dentro del panel del bot, haz clic en la opción **Plantillas de mensaje** que encontrarás en el menú lateral.

### Crea las variables de la plantilla (si las necesitas)

Si tu mensaje necesita incluir datos personalizados como nombres, números de pedido o montos, debes crear las variables primero:

1. Desplázate hasta la sección **Variable de plantilla** en la parte inferior de la página.
2. Haz clic en el botón **Crear**.
3. Escribe un nombre descriptivo para la variable, por ejemplo: `nombre_cliente` o `num_pedido`.
4. Haz clic en **Guardar**.


> Las variables se insertan en el cuerpo del mensaje usando el formato `{{nombre_variable}}`. Por ejemplo: "Hola {{nombre_cliente}}, tu pedido #{{num_pedido}} ha sido confirmado por un total de {{total_pedido}}."

### Completa el formulario de la plantilla

Regresa a la sección **Configuración de plantilla de mensaje** y completa el formulario con los siguientes campos:

- **Nombre de la plantilla**: usa un nombre descriptivo e interno que te ayude a identificar su propósito. Por ejemplo: `confirmacion_pedido_ecommerce` o `recordatorio_cita_medica`.
- **Cuerpo del mensaje**: redacta el mensaje principal. Inserta las variables que creaste usando el formato `{{nombre_variable}}`.
- **Texto del pie de página** (opcional): añade un texto breve al final, como el nombre de tu empresa, un aviso legal o una frase de cortesía. Máximo 60 caracteres.
- **Tipo de encabezado**: selecciona entre texto, imagen, video o documento según el contenido que quieras incluir.
- **Botones** (opcional): selecciona el tipo de botón que necesitas y completa los campos correspondientes.
- Haz clic en **Guardar**.

### Espera la aprobación de WhatsApp

Una vez guardada, la plantilla se envía automáticamente a WhatsApp para su revisión. El estado aparecerá como **Pendiente** en el panel. Revisa periódicamente hasta que el estado cambie a **Aprobado**.


> Solo puedes utilizar las plantillas cuando su estado sea **Aprobado**. Si una plantilla es rechazada, aparecerá como **Rechazada** junto con el motivo. Deberás corregir el contenido y volver a enviarla. No te preocupes, el proceso de corrección y reenvío es rápido desde el panel.

### Utiliza la plantilla en tus comunicaciones

Con la plantilla aprobada, puedes usarla en múltiples canales:

- **Transmisiones masivas**: envía la plantilla a listas completas de suscriptores con datos personalizados.
- **Chat en vivo**: los agentes pueden seleccionar plantillas para responder rápidamente a los clientes.
- **Notificaciones de WooCommerce/Shopify**: configura la plantilla en las integraciones de ecommerce para enviar confirmaciones de pedido, actualizaciones de envío o recuperación de carritos abandonados.
- **Flujos de bot**: usa las plantillas como respuestas dentro de flujos automatizados.

## Límites de caracteres para cada componente

Para evitar que tu plantilla sea rechazada, es fundamental respetar los límites de caracteres establecidos por WhatsApp para cada componente:

| Componente | Tipo de plantilla | Límite de caracteres |
|---|---|---|
| **Encabezado de texto** | Todas | 60 caracteres |
| **Subtítulo de encabezado multimedia** | Con imagen/video/documento | 256 caracteres |
| **Cuerpo del mensaje** | Plantillas con medios | 1024 caracteres |
| **Cuerpo del mensaje** | Plantillas estándar al enviar a aprobación | 1024 caracteres |
| **Cuerpo del mensaje** | Plantillas estándar una vez aprobadas | 4096 caracteres |
| **Pie de página** | Todas | 60 caracteres |
| **Texto del botón** | Todos los tipos | 20 caracteres |
| **Payload de botón de respuesta rápida** | Respuesta rápida | 256 caracteres |


> El contador de caracteres de WhatsApp trata cada variable `{{nombre}}` como 1 carácter, independientemente de la longitud que tenga el nombre de la variable. Esto facilita cumplir con los límites incluso cuando usas múltiples variables en el cuerpo del mensaje.

## Cómo añadir botones interactivos a tus plantillas

Los botones hacen que tus plantillas sean mucho más efectivas al permitir que los usuarios actúen directamente desde el mensaje. E-SMART360 soporta los siguientes tipos de botones:

### Botones de llamada a la acción (CTA)

Estos botones ejecutan una acción inmediata cuando el usuario los toca:

**Visitar sitio web**: abre una URL en el navegador del usuario. Puedes usar URLs dinámicas que incluyan variables para personalizar la página de destino.

```
Ejemplo: https://tutienda.com/pedido/{{num_pedido}}/seguimiento
```

**Llamar por teléfono**: inicia una llamada telefónica al número que configures. Ideal para servicios que requieren contacto directo como soporte técnico o ventas.

### Botones de respuesta rápida

Permiten al usuario responder con una opción predefinida. Son ideales para:

- **Confirmaciones**: "Sí, confirmo mi asistencia" / "No, reagendar"
- **Encuestas rápidas**: "Me gusta" / "No me interesa"
- **Navegación**: "Ver catálogo" / "Hablar con un agente"

Cada botón puede tener un payload de hasta 256 caracteres que identifica la opción seleccionada, permitiendo a tu flujo de bot reaccionar en consecuencia.


> Para añadir botones a tu plantilla, durante la creación selecciona la opción de botón correspondiente, completa el texto (máximo 20 caracteres) y, según el tipo, proporciona la URL, el número telefónico o el payload de respuesta.

## Variables dinámicas: personalización avanzada

Las variables dinámicas son la clave para enviar mensajes únicos y relevantes a cada cliente. Con E-SMART360, puedes usar variables en:

### Transmisiones masivas

Combina tus plantillas con datos de Google Sheets, listas de suscriptores o campos personalizados. Por ejemplo:

```
Plantilla: "Hola {{nombre}}, tu pedido #{{pedido}} está en camino. Llegará el {{fecha_entrega}}."
```

Cada suscriptor recibirá el mensaje con sus propios datos reemplazando las variables.

### Flujos de bot

Captura información durante la conversación —como el nombre, el producto de interés o la ubicación— y úsala en mensajes posteriores con plantillas. Esto crea una experiencia conversacional fluida y personalizada.

### Integraciones con ecommerce

Las integraciones con WooCommerce y Shopify envían datos estructurados de cada pedido que puedes mapear directamente a las variables de tu plantilla:

| Variable en plantilla | Dato desde WooCommerce/Shopify |
|---|---|
| `{{nombre_cliente}}` | Nombre del cliente del pedido |
| `{{num_pedido}}` | Número de pedido |
| `{{total}}` | Total de la compra |
| `{{fecha_entrega}}` | Fecha estimada de entrega |
| `{{productos}}` | Lista de productos comprados |
| `{{estado}}` | Estado actual del pedido |


### Ejemplo completo: Notificación de envío

**Nombre de plantilla**: notificacion_envio  
**Tipo**: Utilidad  
**Variables**: `{{nombre}}`, `{{pedido}}`, `{{fecha_entrega}}`, `{{link_seguimiento}}`, `{{tienda}}`

**Cuerpo**:
"Hola {{nombre}},

¡Buenas noticias! Tu pedido #{{pedido}} ya ha sido enviado desde {{tienda}}.

Fecha estimada de entrega: {{fecha_entrega}}

Puedes seguir tu pedido aquí: {{link_seguimiento}}

Gracias por confiar en nosotros."

**Botón CTA**: "Seguir mi pedido" → URL: {{link_seguimiento}}

## Cómo crear plantillas con contenido multimedia

WhatsApp permite crear plantillas que incluyen imágenes, videos o documentos en el encabezado. Estas plantillas son especialmente efectivas para:

- **Catálogos de productos**: muestra la imagen del producto directamente en el mensaje.
- **Promociones visuales**: incluye un banner con la oferta del día.
- **Documentos importantes**: envía facturas, contratos o guías en formato PDF.
- **Videos demostrativos**: muestra un tutorial o video promocional.

**Requisitos para plantillas multimedia:**
- El archivo debe estar alojado en una URL accesible públicamente.
- El encabezado multimedia acepta imágenes en formato JPG o PNG, videos MP4 y documentos PDF.
- El subtítulo del encabezado tiene un límite de 256 caracteres.
- El cuerpo del mensaje tiene un límite de 1024 caracteres.


### Formato recomendado para imágenes

- Tamaño: entre 100 KB y 5 MB.
- Dimensiones: 800 x 418 píxeles (relación 1.91:1).
- Formato: JPG o PNG.
- Asegúrate de que la imagen sea clara y relevante al mensaje.

## Causas comunes de rechazo y cómo solucionarlas

Entender por qué WhatsApp rechaza las plantillas te ahorrará tiempo y te ayudará a crear contenido que se apruebe a la primera.

### 1. Contenido promocional disfrazado de utilidad

**Problema**: Añadir frases promocionales a una plantilla que debería ser transaccional.  
**Ejemplo incorrecto**: "Tu pedido #123 ha sido confirmado. ¡Aprovecha nuestro 2x1 en accesorios!"  
**Solución**: Crea una plantilla de utilidad limpia y una plantilla de marketing separada para la promoción.

### 2. Exceso de formato o caracteres especiales

**Problema**: Uso excesivo de emojis, mayúsculas, signos de exclamación múltiples o caracteres no permitidos.  
**Ejemplo incorrecto**: "🔥🔥 OFERTA IMPERDIBLE!!! COMPRA AHORA!!! 🔥🔥"  
**Solución**: Usa formato moderado. Un emoji ocasional está bien, pero evita cadenas de emojis y mayúsculas sostenidas.

### 3. Información engañosa o falta de transparencia

**Problema**: Promesas que no se pueden verificar, lenguaje engañoso o falta de términos y condiciones.  
**Solución**: Sé transparente. Si ofreces un descuento, asegúrate de que los términos sean claros. No uses lenguaje que pueda interpretarse como clickbait.

### 4. Errores de formato en el cuerpo

**Problema**: Saltos de línea excesivos, espacios incorrectos o estructura desordenada.  
**Solución**: Revisa el formato antes de enviar. Usa saltos de línea solo donde sea necesario para la legibilidad.

### 5. Exceder los límites de caracteres

**Problema**: El cuerpo o el pie de página superan los límites permitidos.  
**Solución**: Revisa la tabla de límites de caracteres más arriba y ajusta tu contenido. Recuerda que al enviar a aprobación el límite del cuerpo es 1024 caracteres.

### 6. Variables mal formateadas

**Problema**: Variables con espacios, caracteres especiales o formato incorrecto.  
**Solución**: Usa solo letras minúsculas, números y guiones bajos en los nombres de variables. Formato correcto: `{{nombre_cliente}}`.

### 7. Botones con texto demasiado largo

**Problema**: El texto del botón supera los 20 caracteres.  
**Solución**: Mantén los botones cortos y directos: "Ver oferta", "Confirmar", "Seguir pedido".


### Lista de verificación antes de enviar una plantilla

- [ ] El tipo de plantilla (utilidad/marketing) es correcto.
- [ ] El cuerpo no supera los 1024 caracteres.
- [ ] El pie de página tiene 60 caracteres o menos.
- [ ] Los botones tienen 20 caracteres o menos.
- [ ] Las variables están formateadas como {{nombre}}.
- [ ] No hay contenido promocional en plantillas de utilidad.
- [ ] El tono es profesional y apropiado.
- [ ] No hay emojis excesivos ni mayúsculas sostenidas.
- [ ] Los enlaces son válidos y accesibles.
- [ ] Las URLs de seguimiento son dinámicas si aplica.

## Cómo actualizar o modificar plantillas existentes

Las plantillas aprobadas pueden editarse cuando necesites actualizar su contenido. El proceso es sencillo:

1. Ve a **Gestor de Bots** > **Plantillas de mensaje**.
2. Localiza la plantilla que deseas modificar en la lista.
3. Haz clic en el botón de edición (lápiz o ícono similar).
4. Realiza los cambios necesarios en el cuerpo, pie de página, botones o variables.
5. Guarda los cambios.


> Al editar una plantilla aprobada, esta volverá automáticamente a estado **Pendiente** y deberá ser revisada nuevamente por WhatsApp. Planifica los cambios con anticipación para no interrumpir tus campañas activas. Te recomendamos tener una versión de respaldo antes de hacer cambios mayores.

## Cómo crear plantillas desde WhatsApp Manager y sincronizarlas

Si prefieres crear tus plantillas directamente en el Administrador de WhatsApp Cloud API y luego sincronizarlas con E-SMART360, también es posible:

1. Inicia sesión en el **Administrador de WhatsApp** de Meta Developers.
2. Crea la plantilla siguiendo las instrucciones de la plataforma.
3. Espera la aprobación desde la propia interfaz de Meta.
4. Una vez aprobada, ve a E-SMART360 > **Gestor de Bots** > **Plantillas de mensaje**.
5. Haz clic en **Sincronizar plantillas**.
6. Las plantillas aprobadas aparecerán automáticamente en tu lista.


> Sincronizar regularmente mantiene tus plantillas actualizadas en ambos lados. Programa una sincronización cada vez que crees o modifiques una plantilla desde el Administrador de Meta.

## Estrategias avanzadas con plantillas

### Segmentación por tipo de plantilla

Organiza tus plantillas por propósito y audiencia usando nombres descriptivos. Por ejemplo:

- `recordatorio_cita_clientes_vip` — para clientes premium.
- `confirmacion_pedido_nacional` — para envíos dentro del país.
- `promocion_black_friday_2025` — para campañas temporales.

### Secuencias automatizadas

Combina múltiples plantillas en secuencias automatizadas para crear experiencias completas:

1. **Día 1**: Plantilla de bienvenida con oferta de bienvenida.
2. **Día 3**: Plantilla de seguimiento preguntando si necesita ayuda.
3. **Día 7**: Plantilla de recordatorio sobre la oferta.
4. **Día 14**: Plantilla de reenganche si no ha realizado ninguna acción.

### Pruebas A/B con plantillas

Crea dos versiones de una misma plantilla (variando el tono, los botones o el llamado a la acción) y mide cuál tiene mejor tasa de entrega, clics o conversiones.

## Ejemplos prácticos de casos de uso



### Recuperación de carrito abandonado

Usa una plantilla de marketing que se active automáticamente cuando un cliente abandone productos:

"Hola {{nombre_cliente}} 👋

Notamos que dejaste algunos productos en tu carrito en {{tienda}}. ¡No te los pierdas!

➡️ {{productos_abandonados}}

Completa tu compra ahora y obtén **{{descuento}}** de descuento con el código {{codigo}}.

Este descuento es válido por {{vigencia}} horas."

Botones: "Completar compra" (CTA URL → link del carrito) | "Ya no me interesa"

Configuración: Actívala mediante la integración con WooCommerce/Shopify y el webhook de abandono de carrito.

### Confirmación de cita con opciones

Crea una plantilla de utilidad que permita al cliente confirmar o reagendar:

"Recordatorio: {{nombre_cliente}}, tu cita en {{negocio}} está programada para:

📅 Fecha: {{fecha_cita}}
⏰ Hora: {{hora_cita}}
📍 Dirección: {{direccion}}

Por favor confirma tu asistencia para que podamos preparar todo."

Botones: "Sí, confirmo" (payload: confirmar_cita_{{id_cita}}) | "Reagendar" (payload: reagendar_{{id_cita}})

Configuración: Conéctalos a un flujo de bot que actualice el estado de la cita en tu calendario automáticamente.

## Preguntas frecuentes


### ¿Cuánto tiempo tarda la aprobación de una plantilla?

El tiempo de aprobación puede variar desde unos minutos hasta 48 horas hábiles. Las plantillas de utilidad bien estructuradas suelen aprobarse más rápido (en cuestión de horas). Si tu plantilla lleva más de 48 horas en estado Pendiente, verifica que cumpla con todas las políticas de WhatsApp y, si es así, contacta al soporte de Meta.

### ¿Puedo usar la misma plantilla para múltiples campañas?

Sí, una vez aprobada, una plantilla puede reutilizarse en todas las campañas que necesites. Sin embargo, te recomendamos crear plantillas específicas para cada tipo de comunicación para mantener la organización y facilitar el seguimiento de rendimiento por campaña.

### ¿Qué sucede si una plantilla aprobada es desaprobada después?

WhatsApp puede desaprobar plantillas que ya estaban aprobadas si actualiza sus políticas o si detecta que el uso de la plantilla genera baja calidad (altas tasas de bloqueo o reportes de spam). Revisa periódicamente el estado de tus plantillas en el panel de E-SMART360. Si una plantilla es desaprobada, recibirás una notificación con el motivo para que puedas corregirla y reenviarla.

### ¿Puedo enviar plantillas a usuarios que no me han escrito primero?

Sí, ese es precisamente el propósito de las plantillas. Con una plantilla aprobada, puedes iniciar una conversación con cualquier usuario que haya optado por recibir mensajes de tu negocio. Es importante cumplir con las políticas de consentimiento de WhatsApp para evitar bloqueos y reportes.

### ¿Cuál es la diferencia entre crear la plantilla en E-SMART360 vs. WhatsApp Manager?

Crear la plantilla directamente en E-SMART360 es más conveniente porque:
- Todo se gestiona desde una sola plataforma.
- No necesitas alternar entre interfaces.
- Las plantillas se sincronizan automáticamente.
- Puedes usarlas inmediatamente en tus flujos y transmisiones.

Crear en WhatsApp Manager y sincronizar tiene sentido si ya trabajas con múltiples herramientas y prefieres centralizar la creación desde Meta.

### ¿Qué hago si mi plantilla es rechazada por segunda vez?

Si una plantilla es rechazada dos veces, revisa cuidadosamente el mensaje de rechazo. Los motivos más comunes son contenido promocional en plantillas de utilidad, formato incorrecto o exceso de caracteres. Ajusta el contenido siguiendo las guías de esta documentación y, si el problema persiste, contacta al soporte de E-SMART360 para recibir asistencia personalizada.

## Conclusión y mejores prácticas

Las plantillas de mensaje son el corazón de la comunicación profesional en WhatsApp Business API. Con E-SMART360, crearlas y gestionarlas es un proceso ágil que se integra perfectamente con todas las capacidades de la plataforma.

**Mejores prácticas resumidas:**

- ✅ **Planifica**: Define el propósito, tipo y contenido de cada plantilla antes de crearla.
- ✅ **Personaliza**: Usa variables dinámicas para que cada mensaje sea relevante para el destinatario.
- ✅ **Respeta límites**: Mantente dentro de los límites de caracteres establecidos por WhatsApp.
- ✅ **Clasifica correctamente**: No mezcles contenido promocional con transaccional.
- ✅ **Monitorea**: Revisa el estado de aprobación y el rendimiento de tus plantillas regularmente.
- ✅ **Actualiza**: Mantén tus plantillas al día con los cambios en las políticas de WhatsApp.
- ✅ **Organiza**: Usa nombres descriptivos para encontrar y gestionar tus plantillas fácilmente.
- ✅ **Prueba**: Realiza pruebas A/B con diferentes versiones para identificar cuál funciona mejor.

Con estas prácticas, tus comunicaciones serán más efectivas, profesionales y alineadas con los estándares de WhatsApp, maximizando el alcance y la calidad de tus interacciones con los clientes.

## Gestión de plantillas desde el panel de control

El panel de Plantillas de mensaje en E-SMART360 te ofrece una vista completa de todas tus plantillas con información clave de un vistazo:

| Columna | Descripción |
|---|---|
| **Nombre** | Nombre interno de la plantilla |
| **Cuerpo** | Vista previa del contenido del mensaje |
| **Estado** | Aprobado, Pendiente, Rechazado o Desaprobado |
| **Categoría** | Utilidad o Marketing |
| **Última actualización** | Fecha del último cambio |
| **Acciones** | Editar, duplicar, eliminar, sincronizar |

### Filtrar y buscar plantillas

Puedes filtrar tus plantillas por:

- **Estado**: muestra solo las aprobadas, pendientes o rechazadas.
- **Categoría**: filtra por utilidad o marketing.
- **Texto libre**: busca por nombre o contenido de la plantilla.

### Duplicar plantillas existentes

Si necesitas crear una plantilla similar a una ya existente, usa la función **Duplicar**. Esto crea una copia exacta que puedes modificar sin afectar la original. Es útil para:

- Crear variaciones para pruebas A/B.
- Adaptar una plantilla de utilidad para otro producto o servicio.
- Crear versiones en diferentes idiomas.

## Cómo usar plantillas en transmisiones masivas

Las transmisiones masivas (broadcasting) son uno de los usos más potentes de las plantillas de mensaje. Te permiten enviar el mismo mensaje personalizado a miles de contactos simultáneamente.

### Configuración de una transmisión con plantilla


### Selecciona la plantilla

En el módulo de Transmisiones, elige "Usar plantilla" y selecciona una plantilla aprobada de tu lista.

### Configura los destinatarios

Selecciona la lista de suscriptores, etiqueta o segmento al que deseas enviar el mensaje. Puedes importar contactos desde Google Sheets o CSV.

### Asigna los valores de las variables

Si tu plantilla usa variables, asigna los valores correspondientes desde tus datos:

- **Manual**: escribe los valores para cada variable.
- **Desde Google Sheets**: mapea columnas de tu hoja de cálculo a las variables.
- **Desde campos personalizados**: usa los datos almacenados en el perfil de cada suscriptor.
- **Desde integración**: usa datos de WooCommerce, Shopify u otras integraciones.

### Revisa y programa

Previsualiza el mensaje con datos de ejemplo, verifica que todo esté correcto y programa el envío para ahora o para una fecha futura.


> Para transmisiones con muchas variables, te recomendamos usar la integración con Google Sheets. Prepara una hoja de cálculo con columnas que coincidan con los nombres de tus variables, impórtala y E-SMART360 se encargará de personalizar cada mensaje automáticamente.

### Buenas prácticas para transmisiones masivas

- **Segmenta tu audiencia**: no envíes el mismo mensaje a todos. Usa etiquetas y filtros para dirigirte al grupo correcto.
- **Respeta los horarios**: evita enviar mensajes en horarios nocturnos o fines de semana, a menos que tu negocio lo requiera.
- **Monitorea las métricas**: revisa las tasas de entrega, lectura y respuesta de cada transmisión.
- **Cumple con los límites**: WhatsApp establece límites de mensajes por día según el nivel de calidad y verificación de tu cuenta. Consulta los límites en la configuración de tu cuenta.
- **Prueba antes de enviar**: envía una prueba a ti mismo o a un grupo pequeño antes de lanzar la transmisión completa.

## Integración con flujos de bot

Las plantillas de mensaje también se integran con los flujos automatizados de tus bots. Puedes usarlas como respuestas dentro de cualquier nodo del flujo:

1. En el editor de flujos de bot, selecciona el nodo donde deseas la respuesta.
2. Elige el tipo de mensaje "Plantilla de WhatsApp".
3. Selecciona la plantilla aprobada de tu lista.
4. Asigna los valores de las variables (pueden venir de respuestas anteriores del usuario).
5. Conecta el nodo al siguiente paso del flujo.

**Ejemplo de flujo**:

- **Paso 1**: El usuario escribe "quiero comprar".
- **Paso 2**: El bot captura el nombre del usuario y el producto.
- **Paso 3**: El bot envía una plantilla de confirmación: "Gracias {{nombre}}, hemos recibido tu solicitud para {{producto}}. Un asesor te contactará en breve."
- **Paso 4**: El bot notifica al equipo de ventas por el chat compartido.

## Uso de plantillas en el chat en vivo

Los agentes de soporte pueden usar plantillas de mensaje directamente desde el chat en vivo para:

- Responder rápidamente a preguntas frecuentes.
- Enviar confirmaciones de pedido durante la conversación.
- Compartir enlaces de seguimiento o pago.
- Cerrar conversaciones con un mensaje de despedida estandarizado.


> Esto no solo acelera los tiempos de respuesta, sino que garantiza que los mensajes cumplan con las políticas de WhatsApp, ya que todas las plantillas han sido previamente aprobadas.

## Plantillas para reactivar conversaciones después del horario laboral

WhatsApp permite usar plantillas específicas para reiniciar conversaciones que quedaron fuera del horario laboral. Estas plantillas son útiles cuando un cliente escribe fuera de tu horario de atención y necesitas retomar la conversación al día siguiente.

**Ejemplo**:

"Hola {{nombre_cliente}}, gracias por escribirnos. Hemos recibido tu mensaje y te atenderemos a la brevedad. Nuestro horario es de lunes a viernes de 9 a 18 h."

Puedes configurar una regla automática en E-SMART360 para que cuando un mensaje llegue fuera del horario laboral, se responda automáticamente con esta plantilla.

## Errores comunes y códigos de error

Al trabajar con plantillas de mensaje, puedes encontrar algunos códigos de error. Aquí los más comunes y cómo resolverlos:

| Código de error | Significado | Solución |
|---|---|---|
| **130472** | El número de teléfono del usuario es parte de un experimento | Espera a que el experimento termine o contacta a Meta |
| **131026** | Mensaje no entregable | Revisa que el destinatario tenga WhatsApp activo |
| **130429** | Límite de tasa excedido | Reduce la velocidad de envío o espera antes de reintentar |
| **131042** | Plantilla rechazada | Revisa el motivo y corrige el contenido de la plantilla |
| **132001** | El destinatario ha bloqueado tu número | No puedes enviar mensajes a este contacto |
| **133010** | El mensaje contiene enlaces no permitidos | Revisa la lista de URLs bloqueadas por WhatsApp |


### ¿Qué hacer si el botón 'Iniciar verificación' de Facebook aparece atenuado?

Este problema suele ocurrir cuando la página de Facebook no tiene los permisos configurados correctamente. Para solucionarlo:

1. Verifica que la página de Facebook esté correctamente vinculada.
2. Asegúrate de tener rol de administrador en la página.
3. Confirma que el Business Manager esté verificado.
4. Si el problema persiste, contacta al soporte de Meta.

## Actualizaciones y cambios recientes


> **Nuevos límites de caracteres para plantillas de medios (Febrero 2025)**
> WhatsApp actualizó los límites de caracteres para el cuerpo de las plantillas con medios a 1024 caracteres. Las plantillas estándar mantienen el límite de 4096 caracteres una vez aprobadas, pero al enviar a aprobación el límite sigue siendo 1024 caracteres.

> **Clasificación automática de plantillas mixtas (Enero 2025)**
> WhatsApp ahora clasifica automáticamente como "marketing" cualquier plantilla que contenga tanto contenido transaccional como promocional. Ya no es posible enviar plantillas de utilidad con frases promocionales.

> **Soporte para botones de acción dinámicos (Diciembre 2024)**
> Ahora puedes usar URLs dinámicas en botones CTA que incluyan variables. Por ejemplo: `https://tutienda.com/pedido/{{num_pedido}}` se reemplazará automáticamente con el número de pedido de cada destinatario.
