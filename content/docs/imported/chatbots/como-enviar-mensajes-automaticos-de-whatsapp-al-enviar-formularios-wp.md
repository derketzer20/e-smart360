---
title: "Cómo Enviar Mensajes Automáticos de WhatsApp al Enviar un Formulario WP"
description: "Aprende a configurar el envío automático de mensajes de WhatsApp cuando un usuario completa un formulario WP Forms en tu sitio web. Guía completa paso a paso con Webhook Workflow, plantillas de mensajes, mapeo de datos y solución de problemas."
section: "chatbots-omnicanal"
order: 163
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "como-enviar-mensajes-automaticos-de-whatsapp-al-enviar-formularios-wp"
canonicalGroup: "como-enviar-mensajes-automaticos-de-whatsapp-al-enviar-un-formulario-wp"
tags: ["chatbots-omnicanal", "chatbots"]
staging: true
---
# Cómo Enviar Mensajes Automáticos de WhatsApp al Enviar un Formulario WP


> Esta guía te muestra cómo integrar WP Forms con WhatsApp para enviar mensajes automatizados en el momento exacto en que un visitante completa un formulario en tu sitio web. Es ideal para confirmaciones de contacto, notificaciones de registro, acuses de recibo y seguimiento comercial inmediato.

En el mundo digital actual, la comunicación es la clave para construir relaciones sólidas con los clientes. Automatizar las respuestas no solo ahorra tiempo, sino que también garantiza que tus clientes se sientan valorados y atendidos de manera oportuna. Si tu sitio web utiliza WP Forms para consultas, comentarios o registros, tienes una oportunidad de oro para optimizar la comunicación integrando mensajes automatizados de WhatsApp.

Esta guía te llevará a través del proceso completo de configuración de mensajes automáticos de WhatsApp activados por el envío de formularios WP. Ya sea que quieras enviar una nota de agradecimiento, un mensaje de confirmación o información de seguimiento, esta integración mejorará la experiencia del usuario y aumentará el compromiso con tus clientes sin esfuerzo. Una vez configurado, todo funcionará de manera automática.

## Requisitos Previos

Antes de comenzar, asegúrate de contar con lo siguiente:


### WP Forms Pro

La funcionalidad de webhooks solo está disponible en la versión **Pro** de WP Forms. La versión gratuita no incluye esta característica. El addon de Webhooks es un complemento oficial que se instala por separado dentro del ecosistema de WP Forms.

### Webhooks Addon de WP Forms

Necesitas tener instalado y activado el addon **Webhooks** dentro de WP Forms para poder enviar datos a servicios externos.

### Cuenta de WhatsApp Business API

Debes tener una cuenta de WhatsApp Business conectada a E-SMART360. Si aún no la tienes, revisa nuestra guía de [conexión de WhatsApp Business](/recursos/conectar-whatsapp-business).

### Plantilla de Mensaje Aprobada por Meta

Meta exige una plantilla de mensaje aprobada para poder iniciar conversaciones con los clientes. Sin una plantilla aprobada, solo puedes responder mensajes entrantes dentro de la ventana de 24 horas.

### Cuenta Activa en E-SMART360

Necesitas una cuenta activa para acceder al panel de Webhook Workflow, Bot Manager y las demás herramientas necesarias para la configuración.


> Recuerda que pagar por tu suscripción a E-SMART360 **no cubre** las tarifas de conversación de Meta. Debes agregar un método de pago dentro de Meta WhatsApp Manager para cubrir esos costos. Cada mensaje iniciado con plantilla cuenta como una conversación facturable.


> **Actualización importante (2025-06-23)**
> Meta ha actualizado sus políticas de mensajería. Ahora las plantillas de tipo Marketing requieren incluir explícitamente una opción para que el usuario opte por no recibir más mensajes. Asegúrate de revisar las políticas actualizadas antes de crear tus plantillas.

---

## Paso 1: Instalar el Addon Webhooks de WP Forms

Junto con el plugin de WP Forms (versión Pro), necesitarás instalar el complemento llamado **Webhooks Addon**. Este addon actúa como el puente que permite que tu formulario envíe datos a servicios externos.

1. Desde el panel de WordPress, ve a **WPForms** y selecciona **Addons**.
2. Se abrirá la página con todos los Addons disponibles de WPForms.
3. Busca **Webhooks Addon** en la lista de complementos.
4. Haz clic en **Instalar** y luego en **Activar**.


> Este addon permite que WP Forms envíe datos a servicios externos como E-SMART360 a través de webhooks. Es el componente clave que conecta tu formulario con la automatización de WhatsApp. Sin este addon activado, WP Forms no podrá comunicarse con ningún servicio externo.

### Verificar que el Addon esté Activo

Después de la instalación, verifica que el addon aparezca como **Activo** en la lista de complementos de WP Forms. Si ves algún mensaje de error durante la instalación, asegúrate de que tu versión de WP Forms sea la Pro y que tu licencia esté vigente.

Si el addon no aparece en la lista, puedes descargarlo manualmente desde el sitio oficial de WP Forms y subirlo a través de WordPress en Plugins > Añadir nuevo > Subir plugin.

---

## Paso 2: Crear una Plantilla de Mensaje en WhatsApp

Meta solo permite que una **Plantilla de Mensaje Aprobada** inicie mensajes comerciales en WhatsApp. Por lo tanto, debemos crear una plantilla y esperar su aprobación por parte de Meta antes de poder usarla en nuestras campañas automatizadas.

1. Desde el panel de E-SMART360, ve a **Bot Manager de WhatsApp** y selecciona **Plantilla de Mensaje**.
2. Haz clic en el botón **Crear** y selecciona **Plantilla General**.
3. Proporciona un nombre para la plantilla (debe ser descriptivo, ej: `confirmacion_contacto_wp`).
4. Selecciona la **configuración regional** (locale) correspondiente a tu audiencia (ej: `es_MX` para español mexicano).
5. Selecciona la **categoría**: **Utility** para mensajes transaccionales o **Marketing** para promociones.
6. Elige el **tipo de encabezado**: Texto, Imagen, Video, Documento o ninguno.
7. Redacta el cuerpo del mensaje utilizando variables `{{1}}`, `{{2}}`, etc., para personalizar el contenido.



#### Ejemplo de Plantilla

```text
¡Hola {{1}}!

Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.

Tu número de consulta es: {{2}}
Hora de recepción: {{3}}

Saludos,
Equipo de Atención al Cliente
```

> Las variables como `{{1}}`, `{{2}}` y `{{3}}` se reemplazarán dinámicamente con los datos reales del formulario cuando se envíe el mensaje. El orden y la cantidad de variables depende de los campos que tengas en tu formulario y cómo las mapees posteriormente en el Webhook Workflow.

8. Opcionalmente, puedes agregar botones interactivos:
   - **Llamada a la Acción (CTA)**: Botón que lleva a una URL o número de teléfono.
   - **Respuesta Rápida (Quick Reply)**: Botones predefinidos que el usuario puede tocar para responder.
9. Guarda la plantilla y cierra la ventana.
10. Haz clic en el botón **Sincronizar Plantilla** para sincronizarla con los servidores de Meta.



### Tiempo de Aprobación

La aprobación puede tomar desde **unos minutos hasta 24 horas**, dependiendo del contenido y la categoría. Las plantillas de tipo **Utility** (transaccionales, confirmaciones, notificaciones de pedidos) suelen aprobarse más rápido que las de tipo **Marketing** (promociones, ofertas, newsletters).

### Causas de Rechazo Comunes

Los rechazos más comunes incluyen:
- Contenido engañoso o promesas exageradas
- Falta de opción para darse de baja (requerido en Marketing)
- URLs no verificadas o que redirigen a sitios inseguros
- Lenguaje que sugiere contacto previo sin permiso del usuario
- Uso de emojis excesivos o formatos incorrectos

### Cómo Verificar el Estado

Puedes verificar el estado de aprobación directamente desde el panel de Bot Manager > Plantilla de Mensaje. Cada plantilla mostrará su estado actual: Pendiente, Aprobada, Rechazada o en Pausa. Las plantillas aprobadas tendrán un badge verde de "Aprobado".

> Si tu plantilla es rechazada, no te preocupes. Revisa los motivos del rechazo, corrige el contenido y vuelve a enviarla. Puedes consultar nuestra guía detallada sobre [cómo solucionar rechazos de plantillas](/recursos/errores-rechazo-plantillas-whatsapp) para entender cada tipo de error y cómo resolverlo.

---

## Paso 3: Crear una Campaña de Webhook Workflow

Ahora necesitamos crear un flujo de trabajo de webhook. Este componente es el cerebro de la operación: recibe los datos del formulario, los procesa y dispara el envío del mensaje de WhatsApp.

1. Ve a **Webhook Workflow** desde el panel de E-SMART360 y haz clic en **Crear**.
2. Asigna un nombre al flujo de trabajo (ej: `Notificacion_WP_Forms_Contacto`).
3. Selecciona la **cuenta de WhatsApp** que usarás para enviar los mensajes.
4. Selecciona la **plantilla de mensaje** aprobada que creaste en el paso anterior.
5. Haz clic en **Crear Workflow**.


### ¿Qué es exactamente un Webhook Workflow?

Un Webhook Workflow es un receptor HTTP que escucha peticiones entrantes. Cuando un formulario externo (como WP Forms, Elementor Forms, o incluso una aplicación personalizada) envía datos a la URL única de este workflow, E-SMART360 captura esa información en tiempo real. Luego, el sistema procesa los datos recibidos, los mapea a las variables de tu plantilla de mensaje y dispara automáticamente el envío del mensaje de WhatsApp al número de teléfono especificado. Todo esto ocurre en milisegundos, ofreciendo una experiencia prácticamente instantánea al usuario.

El sistema te proporcionará una **URL de Callback** (también conocida como webhook URL). **Copia esta URL** cuidadosamente, la necesitarás en WP Forms en el siguiente paso.


> **IMPORTANTE**: No cierres la ventana del Webhook Workflow todavía. La campaña no está completa aún. Después de enviar datos de prueba desde WP Forms, necesitarás volver a esta misma ventana para capturar la respuesta y mapear los campos. Si cierras la ventana, tendrás que volver a abrir el workflow desde el listado de Webhook Workflows.

El Webhook Workflow también te permite:
- Configurar **múltiples cuentas de WhatsApp** para diferentes campañas
- Usar **diferentes plantillas** según el tipo de formulario
- Agregar **filtros** para enviar mensajes solo bajo ciertas condiciones
- Revisar **logs detallados** de cada disparo para depuración

---

## Paso 4: Crear un Formulario WP y Agregar la URL de Callback

En este paso vamos a crear un nuevo formulario WP con un campo de número de teléfono y agregar la URL copiada en la configuración de webhook.

1. Desde el panel de WordPress, ve a **WP Forms** y selecciona **Añadir Nuevo**.
2. Nombra el formulario (ej: "Formulario de Contacto con WhatsApp").
3. Selecciona una plantilla base (puedes usar "Blank" o "Simple Contact Form").
4. **Agrega los siguientes campos obligatorios**:
   - **Nombre** (campo de texto)
   - **Correo electrónico** (campo de email)
   - **Número de teléfono** (campo de teléfono) — **OBLIGATORIO**: WhatsApp necesita este número para enviar el mensaje
   - **Mensaje o consulta** (campo de área de texto o párrafo)


> El campo de **número de teléfono** es obligatorio porque es el destinatario del mensaje de WhatsApp. Sin este campo, la automatización no podrá enviar el mensaje. Asegúrate de incluir una nota en el formulario indicando al usuario que ingrese su número con código de país (ej: +521234567890).

5. Ahora ve a la **configuración del formulario**, selecciona la pestaña **Webhooks** (verás que aparece solo si tienes el addon instalado y activado).
6. **Activa los webhooks** moviendo el interruptor a la posición "ON".
7. En el campo **URL solicitada (Request URL)**, pega la URL de callback que copiaste del Webhook Workflow.
8. En **Método de solicitud (Request Method)**, selecciona **POST**.
9. En la sección **Cuerpo de la solicitud (Request Body)**, selecciona el campo del formulario "Nombre" e ingresa una **clave de parámetro** (por ejemplo, `name`).



### Mapeo de Campos Recomendado

| Parámetro | Campo WP Forms | Descripción |
|-----------|---------------|-------------|
| name | Nombre | Nombre completo del usuario |
| email | Correo Electrónico | Email de contacto del usuario |
| phone | Teléfono | Número de WhatsApp del destinatario |
| message | Mensaje / Consulta | Contenido de la consulta del usuario |

### Cuerpo de Solicitud en JSON

Cuando configures los parámetros, el sistema generará automáticamente un cuerpo JSON similar a este:

```json
{
  "name": "{field_name}",
  "email": "{field_email}",
  "phone": "{field_phone}",
  "message": "{field_message}"
}
```

10. Agrega más cuerpos de solicitud haciendo clic en el botón **"+"** hasta tener al menos 4 parámetros: `name`, `email`, `phone`, `message`.
11. Asegúrate de que cada parámetro esté correctamente emparejado con su campo del formulario.
12. Finalmente, haz clic en **Guardar** para guardar el formulario.


### ¿Puedo agregar más campos personalizados?

Sí, puedes agregar tantos campos como necesites. Cada campo adicional del formulario puede convertirse en un parámetro en el cuerpo de la solicitud. Solo asegúrate de que tu Plantilla de Mensaje tenga suficientes variables `{{N}}` para recibir esos datos. Si tu plantilla tiene 3 variables (`{{1}}`, `{{2}}`, `{{3}}`), deberás mapear solo 3 campos en el webhook.

---

## Paso 5: Enviar Datos de Prueba y Mapear el Workflow

Ahora debemos llenar el formulario una vez para enviar datos de muestra al webhook de E-SMART360 y mapear la campaña correctamente. Este es un paso crucial para que el sistema sepa qué campo corresponde a qué variable.

1. Abre el formulario WP en tu navegador (puedes usar la vista previa desde el panel de WP Forms o abrir la página donde está publicado).
2. **Completa el formulario con datos de prueba** realistas:
   - Nombre: "Juan Pérez" (o cualquier nombre ficticio)
   - Email: "juan@ejemplo.com"
   - Teléfono: un número real al que tengas acceso (opcional, para pruebas)
   - Mensaje: "Quiero información sobre sus servicios"
3. Envía el formulario.
4. **Regresa al webhook de E-SMART360** donde lo dejamos en el Paso 3.
5. Haz clic en el botón **Capturar Respuesta del Webhook (Capture Webhook Response)**.
6. El sistema buscará los datos de muestra más recientes y los mostrará en la interfaz.


> Si el sistema no captura ninguna respuesta, verifica que:
- La URL del webhook esté correctamente copiada y sin espacios
- WP Forms esté configurado con el método POST
- Haya enviado el formulario **después** de crear el webhook (los datos previos no se capturan)
- Prueba enviando el formulario nuevamente y vuelve a intentar

7. Una vez capturados los datos, verás la sección **Mapeo de Respuesta del Webhook (Webhook Response Mapping)**.
8. Haz clic en el campo de **número de teléfono** (o el campo correspondiente en tu plantilla) y selecciona el valor de teléfono de los datos sin procesar (raw data) que aparecen en pantalla.
9. Repite el proceso para cada variable de tu Plantilla de Mensaje:
   - `{{1}}` → selecciona el nombre
   - `{{2}}` → selecciona el número de consulta (puedes generar un ID único)
   - `{{3}}` → selecciona la hora o el mensaje
10. Cada variable de la plantilla debe estar correctamente mapeada con el campo de datos correspondiente.
11. Finalmente, haz clic en **Guardar Campaña**.


> ¡Perfecto! La integración está completa. A partir de ahora, cada vez que alguien complete el formulario WP, recibirá automáticamente un mensaje de WhatsApp personalizado con los datos que ingresó. No necesitas hacer nada más.

### Verificar que la Campaña esté Activa

Después de guardar, asegúrate de que el interruptor de la campaña esté en posición **Activo** (ON). Si está en pausa, los mensajes no se enviarán aunque los formularios se completen.

---

## Verificación y Pruebas Finales

Una vez configurado todo, es importante realizar pruebas exhaustivas para verificar que la integración funcione correctamente antes de ponerla en producción:


### Prueba con tu propio número

Completa el formulario con tu propio número de WhatsApp (con código de país incluido). Verifica que el mensaje llegue correctamente y en un tiempo razonable (menos de 10 segundos).

### Verifica las variables

Confirma que el nombre, email y otros datos personalizados aparezcan correctamente en el mensaje. Si alguna variable no se reemplaza, revisa el mapeo en el Webhook Workflow.

### Prueba con diferentes navegadores

Completa el formulario desde diferentes navegadores y dispositivos (móvil, tablet, desktop) para asegurarte de que funcione en todos los casos.

### Prueba con datos inválidos

Envía el formulario con datos incorrectos (número de teléfono sin código de país, email mal formateado) para ver cómo responde el sistema.

### Revisa los logs

En E-SMART360, ve a Webhook Workflow y revisa el historial de ejecuciones. Verifica que cada envío de formulario haya generado un disparo exitoso.


### ¿Y si el mensaje no llega? (Solución de problemas)

Si el mensaje no llega después de enviar el formulario, verifica lo siguiente en orden:

1. **Estado de la plantilla**: Revisa en Bot Manager > Plantilla de Mensaje que la plantilla esté **aprobada** por Meta. Si está en estado "Pendiente" o "Rechazada", no podrá usarse.
2. **Número de teléfono**: Asegúrate de que el campo del formulario capture el número completo con código de país (ej: +521234567890 para México). Sin el código de país, WhatsApp no puede enrutar el mensaje.
3. **URL del webhook**: Verifica que la URL esté bien copiada en WP Forms, sin espacios adicionales, guiones invisibles o caracteres extra.
4. **Método de pago**: Confirma que hayas agregado un método de pago en Meta WhatsApp Manager. Sin esto, Meta bloqueará el envío.
5. **Campaña activa**: Asegúrate de que el Webhook Workflow esté en estado "Activo", no en "Pausa" o "Borrador".
6. **Logs de Webhook Workflow**: Revisa los logs de ejecución en E-SMART360 para identificar errores específicos (errores HTTP, problemas de conexión, etc.).
7. **Calidad de la cuenta**: Verifica que tu cuenta de WhatsApp no tenga restricciones por calidad baja. Las cuentas con calificación "Roja" pueden ver limitado o bloqueado el envío de mensajes.

---

## Casos de Uso y Ejemplos Prácticos



### Confirmación de Contacto para Servicios Profesionales

**Escenario**: Un despacho de abogados tiene un formulario de consulta inicial en su web.

Cuando un visitante completa el formulario, recibe al instante un WhatsApp con:
- Agradecimiento personalizado con su nombre
- Número de caso o expediente
- Tiempo estimado de respuesta (ej: "Te contactaremos en máximo 2 horas hábiles")
- Enlace a recursos útiles (guías legales gratuitas)

**Resultado**: El cliente potencial se siente atendido desde el primer momento, reduciendo la fuga de leads y aumentando la tasa de conversión en un 35% estimado.

### Notificación de Registro para Webinars y Eventos

**Escenario**: Una empresa de formación online usa WP Forms para inscripciones a webinars.

Después del registro, el asistente recibe automáticamente en WhatsApp:
- Confirmación de inscripción
- Fecha y hora del evento (convertidas a su zona horaria)
- Enlace directo para unirse al webinar
- Botón CTA para agregar el evento al calendario

**Resultado**: La tasa de asistencia a los webinars aumentó del 40% al 75% al usar WhatsApp como canal de recordatorio inmediato.

### Captación de Leads Inmobiliarios

**Escenario**: Una agencia inmobiliaria recibe consultas sobre propiedades desde formularios en su sitio web.

Cada lead recibe un WhatsApp automático con:
- Confirmación de recepción de su consulta
- Ficha resumida de la propiedad que le interesó
- Enlace al catálogo completo de propiedades similares
- Botón para agendar una visita virtual

**Resultado**: El tiempo de primera respuesta se reduce a segundos, mejorando la experiencia del cliente y acelerando el ciclo de ventas.

### Soporte Técnico Post-Venta

**Escenario**: Una empresa de software tiene un formulario de soporte técnico para sus clientes.

Cuando un cliente reporta un incidente, recibe en WhatsApp:
- Número de ticket de soporte
- Categoría del problema reportado
- SLA de respuesta según su plan de soporte
- Enlace a la base de conocimiento con posibles soluciones
- Botón para hablar con un agente en vivo

**Resultado**: Los clientes obtienen confirmación inmediata de su reporte y soluciones rápidas, reduciendo los tickets duplicados y mejorando la satisfacción.

---

## Buenas Prácticas para tus Plantillas de Mensaje

Para maximizar la efectividad de tus mensajes automáticos y asegurar su aprobación por Meta, sigue estas recomendaciones:


### Sé claro y directo

El propósito del mensaje debe ser evidente desde las primeras palabras. Evita lenguaje ambiguo o excesivamente promocional. Los usuarios deben entender de inmediato por qué están recibiendo el mensaje y qué acción se espera de ellos.

### Incluye siempre una opción para darse de baja

Meta exige que los mensajes de marketing incluyan un mecanismo para que el usuario detenga la comunicación. Puedes usar un botón de "Dar de baja" tipo Quick Reply, o texto como "Responde STOP para cancelar la suscripción". En plantillas Utility esto no es obligatorio, pero es una buena práctica incluirlo.

### Personaliza con variables

Usa las variables `{{1}}`, `{{2}}`, etc., para personalizar cada mensaje con el nombre del cliente, su número de pedido, el servicio solicitado o cualquier dato relevante capturado en el formulario. Los mensajes personalizados tienen tasas de apertura y respuesta significativamente más altas.

### Respeta los horarios y la frecuencia

Evita enviar mensajes fuera del horario laboral (después de las 9 PM o antes de las 8 AM, en la zona horaria del destinatario). Meta penaliza el envío en horas no adecuadas. También respeta los límites de frecuencia: no envíes múltiples mensajes en cortos periodos de tiempo al mismo usuario.

### Mantén un tono profesional pero cercano

El mensaje debe reflejar la personalidad de tu marca, pero siempre dentro de los límites del respeto y la cortesía profesional. Un tono demasiado informal puede percibirse como poco profesional, mientras que uno demasiado rígido puede resultar frío. Encuentra el equilibrio adecuado para tu audiencia.

### Incluye un CTA claro

Cada mensaje debe tener un propósito claro y una llamada a la acción definida. Ya sea "Responde este mensaje", "Visita nuestro sitio web", "Agenda una llamada" o simplemente "Gracias por tu paciencia", asegúrate de que el usuario sepa qué hacer después de leer el mensaje.


> Recuerda que la tasa de apertura de WhatsApp supera el 98%, muy por encima del email marketing (20-30%). Aprovecha este canal para comunicaciones importantes, pero úsalo con responsabilidad para evitar que los usuarios te bloqueen o reporten como spam.

---

## Diferencias entre Enviar con Plantilla y Responder Conversaciones

Es importante entender la diferencia entre los mensajes iniciados por la empresa (usando plantillas) y las respuestas dentro de una conversación existente:

| Característica | Mensaje con Plantilla | Respuesta en Conversación |
|---------------|----------------------|--------------------------|
| ¿Requiere plantilla aprobada? | Sí | No |
| ¿Inicia nueva conversación? | Sí | No (continúa una existente) |
| Ventana de 24 horas | No aplica | Sí, se abre al recibir mensaje del usuario |
| Tipo de conversación facturable | Marketing / Utility | Service |
| Costo típico | Mayor (Marketing) o menor (Utility) | Generalmente más bajo |
| Ideal para | Notificaciones, confirmaciones, bienvenidas | Atención al cliente, respuestas a consultas |

En el caso de la integración con WP Forms, estamos usando **mensajes con plantilla**, ya que el usuario no ha iniciado la conversación primero. Por eso es obligatorio que tu plantilla esté aprobada por Meta.

---

## Preguntas Frecuentes


### ¿Necesito la versión Pro de WP Forms obligatoriamente?

Sí, la funcionalidad de webhooks solo está disponible en **WP Forms Pro**. La versión gratuita (Lite) de WP Forms no incluye soporte para webhooks ni para el addon de Webhooks, por lo que no podrás enviar datos a servicios externos sin la versión de pago. Si estás usando otro constructor de formularios como Elementor Forms, Gravity Forms o Contact Form 7, el proceso es diferente pero igualmente compatible con E-SMART360.

### ¿Cuánto tarda Meta en aprobar una plantilla de mensaje?

La aprobación puede tomar desde **unos minutos hasta 24-48 horas** en casos excepcionales, dependiendo del contenido, la categoría y la carga de trabajo del equipo de revisión de Meta. Las plantillas de tipo **Utility** (transaccionales, confirmaciones, notificaciones de pedidos) suelen aprobarse más rápido que las de tipo **Marketing** (promociones, ofertas, newsletters). Si tu plantilla lleva más de 48 horas en estado "Pendiente", contacta a soporte para verificar que no haya problemas con tu cuenta de WhatsApp Business.

### ¿Puedo enviar mensajes sin usar una plantilla aprobada?

No. Meta requiere una **plantilla aprobada** para iniciar cualquier mensaje comercial a los clientes. Sin una plantilla aprobada, solo puedes responder a mensajes iniciados por el cliente dentro de la ventana de 24 horas (conversación de tipo Service). Para iniciar una conversación comercial —como la notificación automática después de un formulario— la plantilla aprobada es obligatoria e innegociable.

### ¿Qué hago si el webhook falla o no recibe los datos?

Si el webhook falla, sigue esta checklist de depuración:
1. **Verifica la URL**: Asegúrate de que la URL del webhook esté exactamente igual en WP Forms, sin espacios, saltos de línea o caracteres ocultos.
2. **Confirma el método HTTP**: Debe ser **POST**, no GET ni PUT.
3. **Revisa la configuración de WP Forms**: Ve a WP Forms > Settings > Webhooks y verifica que esté activado y bien configurado.
4. **Prueba con una herramienta externa**: Usa herramientas como Postman o webhook.site para enviar una petición POST a tu URL de callback y verificar que E-SMART360 la recibe.
5. **Revisa los logs**: En E-SMART360, ve a Webhook Workflow y revisa el historial de ejecuciones para ver si hay errores registrados.
6. **Cuenta activa**: Confirma que tu cuenta de WhatsApp Business esté activa y con método de pago configurado en Meta WhatsApp Manager.

### ¿Puedo usar otros formularios diferentes a WP Forms?

Sí, E-SMART360 es compatible con prácticamente cualquier constructor de formularios que soporte webhooks, incluyendo:
- **Elementor Forms** (con su integración de acciones después del envío)
- **Gravity Forms** (con el addon de webhooks o mediante su integración nativa de feeds)
- **Contact Form 7** (usando plugins complementarios como "Contact Form 7 Webhooks" o mediante integración HTTP API)
- **Formidable Forms** (con su addon de webhooks)
- **Ninja Forms** (con su extensión de webhooks)
- **Formularios personalizados** (con cualquier código que pueda hacer una petición POST a la URL de callback)

### ¿El mensaje automático cuenta como una conversación facturable?

Sí. Cada vez que se envía un mensaje usando una plantilla aprobada, Meta lo considera una **conversación iniciada por la empresa (business-initiated)** y se factura según las tarifas de tu región y el tipo de conversación (Marketing o Utility). Las conversaciones Utility suelen ser más económicas que las de Marketing. Revisa nuestra [guía completa de conversaciones de WhatsApp](/recursos/tipos-conversaciones-whatsapp) para entender las tarifas actualizadas por país y tipo de conversación.

### ¿Qué pasa si el usuario responde a mi mensaje automático?

Si el usuario responde al mensaje automático dentro de las 24 horas posteriores al envío, se abre una **ventana de conversación de tipo Service**. Durante esa ventana (24 horas desde la respuesta del usuario), puedes responder sin necesidad de usar plantillas aprobadas, y las conversaciones se facturan a la tarifa más baja (Service). Esto te permite tener un seguimiento personalizado sin costo adicional de plantillas.

### ¿Puedo tener múltiples formularios con diferentes mensajes?

Sí, absolutamente. Puedes crear tantos **Webhook Workflows** como necesites, cada uno con:
- Una URL de callback diferente
- Una plantilla de mensaje distinta
- Una cuenta de WhatsApp específica (si tienes varias)

Luego, en WP Forms, cada formulario apunta a la URL de callback de su workflow correspondiente. Esto te permite tener, por ejemplo, un formulario de contacto con un mensaje de confirmación, un formulario de registro con un mensaje de bienvenida y un formulario de soporte con un mensaje de ticket, todo funcionando simultáneamente.

### ¿Cómo soluciono el error 131042 de método de pago?

El error 131042 ("Message failed to send because there were one or more errors related to your payment method") ocurre cuando hay problemas con el método de pago en Meta WhatsApp Manager. Para solucionarlo:
1. Ve a **E-SMART360 > Métodos de Pago**.
2. Selecciona el Facebook Business Manager correcto.
3. Ve a **Facturación y Pagos > Cuentas > WhatsApp Business Accounts**.
4. Busca la cuenta que coincida con tu ID de negocio en E-SMART360.
5. Si ves "Agregar método de pago", haz clic en los tres puntos (•••) > Ver detalles.
6. Completa **ambos pasos**: agrega información de pago (tarjeta de crédito) y verifica la información fiscal (GST si aplica).
7. Si el mensaje sigue sin enviarse, verifica que tu **Facebook Business Manager** esté verificado en el Centro de Seguridad.

---

## Integración con HTTP API como Alternativa

Además del Webhook Workflow, E-SMART360 ofrece una integración mediante **HTTP API** que puede usarse como alternativa o complemento. Esta integración es ideal si necesitas:

- Conectar con **aplicaciones personalizadas** que no soportan webhooks
- Realizar **llamadas API bidireccionales** (enviar y recibir datos)
- Integrar **sistemas CRM, ERP o plataformas propietarias**
- Sincronizar **datos de suscriptores** entre sistemas
- Crear **usuarios en WordPress** automáticamente desde WhatsApp

### Cómo Configurar la Integración HTTP API

1. En el panel de E-SMART360, ve a **Integraciones > HTTP API**.
2. Haz clic en **Crear** para iniciar una nueva conexión API.
3. Proporciona un **Nombre** reconocible (ej: "WP User Create API").
4. Selecciona el **Método HTTP** (GET, POST, PUT, DELETE, etc.).
5. Ingresa la **URL del Endpoint** de la API externa.
6. Proporciona un **ID de Suscriptor de Prueba** (copia uno desde el Gestor de Suscriptores).


### Configuración de Headers y Autenticación

Dependiendo de la API externa, puede que necesites configurar headers adicionales:
- **Content-Type**: Normalmente `application/json`
- **Authorization**: Token Bearer, API Key, o Basic Auth según lo requiera el servicio
- **Accept**: `application/json` para respuestas en formato JSON

E-SMART360 soporta autenticación mediante Bearer Token, Basic Auth y API Key en los headers.

7. Configura el **Cuerpo de la Solicitud** con los campos requeridos por la API externa (ej: username, email, role).
8. Elige entre valores **estáticos** o **dinámicos** basados en la entrada del usuario.
9. Selecciona el **formato** de la solicitud: JSON, Form Data o X-WWW-FORM-URLENCODED.


> La integración HTTP API es especialmente útil cuando necesitas crear usuarios en WordPress, actualizar registros en tu CRM, o enviar datos a sistemas de terceros que no tienen una integración preconstruida con E-SMART360.

10. Haz clic en **Verificar Conexión** para enviar una solicitud de prueba.
11. Si la conexión es exitosa, haz clic en **Guardar API**.
12. **Mapea los datos de respuesta**: asigna los campos de la respuesta API a las variables internas de E-SMART360 (por ejemplo, mapea un `user_id` devuelto por la API al perfil del suscriptor).
13. Finalmente, agrega el **Elemento HTTP API** dentro del Flow Builder de tu chatbot para activar la integración en el flujo conversacional.


> La diferencia principal entre Webhook Workflow y HTTP API es la dirección de la comunicación:
- **Webhook Workflow**: E-SMART360 **recibe** datos de un sistema externo (como WP Forms) y dispara un mensaje
- **HTTP API**: E-SMART360 **envía** datos a un sistema externo (como un CRM) desde el flujo del chatbot
Ambos pueden usarse juntos para crear automatizaciones bidireccionales completas.

---

## Anatomía de una URL de Webhook

Entender cómo está compuesta tu URL de callback puede ayudarte a depurar problemas. Una URL típica de Webhook Workflow sigue esta estructura:

```
https://api.esmart360.com/webhook/workflow/{id_unico}/{token_secreto}
```

- `{id_unico}`: Identificador único de tu workflow (no compartas este dato)
- `{token_secreto}`: Token de autenticación para evitar que terceros envíen datos falsos a tu webhook


> **No compartas tu URL de callback públicamente.** Cualquier persona con acceso a esta URL podría enviar datos a tu webhook y disparar mensajes de WhatsApp. Trátala como una credencial sensible.

---

## Configuración Avanzada: Filtros y Condiciones

El Webhook Workflow de E-SMART360 permite agregar **filtros y condiciones** para controlar cuándo se debe enviar el mensaje:

### Filtros por Campo
Puedes configurar condiciones como:
- Enviar mensaje solo si el campo `email` no está vacío
- Enviar solo si el `país` del teléfono es México (código +52)
- Enviar solo si el valor del campo `tipo_consulta` es igual a "ventas"

### Filtros por Horario
- Enviar mensajes solo en **horario laboral** (lunes a viernes, 9:00 a 18:00)
- Acumular mensajes fuera de horario y enviarlos al inicio del siguiente día hábil
- Usar **plantillas diferentes** para horario laboral y no laboral

### Filtros por Frecuencia
- Limitar a **1 mensaje por usuario cada 24 horas**
- Evitar enviar múltiples mensajes al mismo número en cortos periodos


> Los filtros son especialmente útiles en campañas de alto volumen donde quieres evitar el uso excesivo de mensajes a un mismo contacto, lo que podría afectar tu calificación de calidad en WhatsApp.

---

## Errores Comunes y Soluciones Detalladas

| Código de Error | Mensaje | Causa | Solución |
|-----------------|---------|-------|----------|
| 131042 | Error relacionado con el método de pago | Método de pago no configurado o incorrecto en Meta WhatsApp Manager | Agrega o corrige el método de pago y verifica el Business Manager |
| 130472 | El número es parte de un experimento | El número de teléfono está en un grupo de prueba de Meta | Espera a que termine el experimento o usa otro número |
| 131026 | Mensaje no entregable | El destinatario ha bloqueado la cuenta o no tiene WhatsApp | Verifica que el número esté activo en WhatsApp |
| 132001 | Límite de mensajes alcanzado | Has superado el límite de mensajes de tu tier actual | Solicita un aumento de límite o espera al siguiente periodo |
| 132015 | Plantilla no aprobada | La plantilla no ha sido aprobada por Meta | Revisa el estado y corrige si fue rechazada |
| 131000 | Error interno del servidor | Problema temporal en los servidores de Meta | Espera unos minutos y vuelve a intentar |
| 131005 | Número de teléfono inválido | El formato del número no es válido | Verifica que incluya el código de país sin el signo + en algunos casos |


### ¿Qué hacer si mi cuenta tiene calificación de calidad baja?

La calificación de calidad de tu cuenta de WhatsApp se ve afectada por:
- **Altos reportes de spam** por parte de los usuarios
- **Altas tasas de bloqueo** (usuarios que bloquean tu número)
- **Baja tasa de conversación** (mensajes enviados sin respuesta)

Para mejorarla:
1. Revisa el contenido de tus plantillas: ¿son relevantes para el usuario?
2. Reduce la frecuencia de mensajes a contactos que no responden
3. Asegúrate de que los usuarios hayan dado **consentimiento explícito** para recibir mensajes
4. Usa los mensajes con plantilla solo para comunicaciones esperadas (confirmaciones de formularios, notificaciones de pedidos, etc.)
5. Monitorea tu calificación desde el panel de WhatsApp Manager

---

## Comparativa: WP Forms vs. Otros Constructores de Formularios

| Característica | WP Forms (Pro) | Elementor Forms | Gravity Forms | Contact Form 7 |
|---------------|----------------|-----------------|---------------|----------------|
| Webhook nativo | ✅ (con addon) | ✅ (integrado) | ✅ (con addon) | ❌ (requiere plugin extra) |
| Campo de teléfono | ✅ | ✅ | ✅ | ✅ (con plugin) |
| Varios campos personalizados | ✅ | ✅ | ✅ | ✅ |
| Condiciones en el envío | ✅ | ✅ | ✅ | ❌ |
| Integración directa con E-SMART360 | ✅ (vía webhook) | ✅ (vía webhook) | ✅ (vía webhook) | ✅ (vía webhook/HTTP API) |
| Costo adicional por webhook | Ninguno | Ninguno | Ninguno | Ninguno |

Como ves, **todos los principales constructores de formularios son compatibles con E-SMART360**, siempre que tengan la capacidad de enviar datos vía webhook. Si tu formulario actual no soporta webhooks, la **integración HTTP API** es una alternativa igualmente efectiva.

---

## Plantillas de Mensaje Recomendadas

Aquí tienes algunos ejemplos de plantillas que puedes crear para diferentes escenarios:

### 1. Confirmación de Contacto (Utility)

```text
¡Hola {{1}}! 👋

Hemos recibido tu mensaje correctamente.

📝 Tu consulta: "{{3}}"
🆔 Número de seguimiento: {{2}}
⏰ Recibido el: {{4}}

Te contactaremos en menos de 24 horas hábiles.

¡Gracias por escribirnos!
```

### 2. Confirmación de Pedido (Utility)

```text
¡Gracias por tu compra, {{1}}! 🛒

Tu pedido #{{2}} ha sido registrado.

📍 Dirección de envío: {{3}}
💰 Total: {{4}}
📦 Estado: En preparación

Te notificaremos cuando sea enviado.
```

### 3. Bienvenida a Newsletter (Marketing)

```text
¡Bienvenido(a) {{1}}! 🎉

Gracias por suscribirte a nuestro newsletter.

A partir de ahora recibirás:
✅ Ofertas exclusivas
✅ Nuevos lanzamientos
✅ Tips y consejos

¿Prefieres dejar de recibir estos mensajes?
Responde STOP para cancelar.
```


> Recuerda que las plantillas de tipo **Marketing** requieren incluir explícitamente una opción para que el usuario se dé de baja. Las plantillas tipo **Utility** son para transacciones y notificaciones que el usuario espera recibir.

---

## Preguntas Frecuentes Adicionales


### ¿Puedo enviar archivos multimedia (imágenes, PDFs) en el mensaje automático?

Sí, siempre que tu plantilla de mensaje tenga un **Header de tipo Imagen, Video o Documento**. Al crear la plantilla, selecciona el tipo de encabezado que necesites. Luego, en el Webhook Workflow, puedes pasar la URL del archivo multimedia como una variable. El archivo debe estar alojado en un servidor accesible públicamente o usar URLs de medios válidas.

### ¿Qué límites de mensajes tengo según mi tier de WhatsApp?

Los límites de mensajes dependen de tu calificación de calidad y del tier de tu cuenta de WhatsApp Business:

| Tier | Límite de usuarios en 24h |
|------|--------------------------|
| Tier 1 | 1,000 |
| Tier 2 | 10,000 |
| Tier 3 | 100,000 |
| Tier 4 | 1,000,000+ |

Si necesitas aumentar tu límite, solicita una revisión desde WhatsApp Manager. Tu límite se actualizará automáticamente si mantienes una buena calificación de calidad.

### ¿Cómo migro desde otra plataforma (BSP) a E-SMART360?

Migrar desde otra plataforma a E-SMART360 es un proceso sencillo:
1. **No pierdes tu número de teléfono**: el número se mantiene igual durante la migración
2. **No pierdes tu cuota de mensajes**: los límites y la calificación de calidad se transfieren
3. **No pierdes tus plantillas**: las plantillas aprobadas pueden migrarse al nuevo sistema
4. El proceso típico toma entre 24 y 72 horas hábiles

Consulta nuestra [guía completa de migración](/recursos/migracion-bsp-esmart360) para más detalles.

### ¿Puedo usar esto para enviar mensajes a números internacionales?

Sí, el sistema soporta el envío a números de cualquier país, siempre que:
- El número esté registrado en WhatsApp
- El número incluya el código de país completo (ej: +34 para España, +57 para Colombia, +54 para Argentina)
- La cuenta de WhatsApp Business tenga la capacidad de enviar mensajes a ese país (sin restricciones geográficas)
- El destinatario tenga WhatsApp instalado en su dispositivo

### ¿Cómo configuro el botón CTA en la plantilla para agendar una cita?

Para agregar un botón CTA que lleve a una página de agendamiento:
1. Al crear la plantilla, activa la opción **Botones**
2. Selecciona **Llamada a la Acción (CTA)**
3. Elige el tipo: **Visitar sitio web**
4. Ingresa la URL de tu página de agendamiento (puede incluir variables como `{{5}}` para personalizar)
5. Guarda y sincroniza la plantilla
6. En el mapeo del webhook, la variable `{{5}}` se reemplazará con la URL personalizada para cada usuario

---

## Conclusión

Integrar mensajes automáticos de WhatsApp con WP Forms es una forma poderosa de mejorar la comunicación con tus clientes y optimizar tus flujos de trabajo. Siguiendo los pasos descritos en esta guía, puedes configurar un sistema eficiente que envíe mensajes personalizados a tus usuarios en el momento exacto en que envían un formulario.

Esta automatización no solo ahorra tiempo, sino que también mejora la experiencia del usuario, demostrando a tus clientes que valoras su tiempo y sus consultas. La combinación de un formulario web con la inmediatez de WhatsApp crea un canal de comunicación fluido que acelera los tiempos de respuesta, aumenta la satisfacción del cliente y mejora tus tasas de conversión.


> ¿Listo para implementarlo? Si tienes dudas durante el proceso, nuestro equipo de soporte está disponible para ayudarte. No dudes en contactarnos para recibir asistencia personalizada.

### Recursos Adicionales

- [Guía de conexión de WhatsApp Business](/recursos/conectar-whatsapp-business)
- [Solución de errores comunes en WhatsApp](/recursos/errores-comunes-whatsapp)
- [Tipos de conversaciones y tarifas de WhatsApp](/recursos/tipos-conversaciones-whatsapp)
- [Guía de plantillas de mensaje](/recursos/plantillas-mensaje-whatsapp)
- [Migración desde otro BSP a E-SMART360](/recursos/migracion-bsp-esmart360)
