---
title: "Cómo Enviar Mensajes Automáticos de WhatsApp al Recibir un Formulario WPForms"
description: "Aprende a configurar el envío automático de mensajes de WhatsApp cuando un usuario completa un formulario WPForms en tu sitio WordPress. Guía paso a paso con webhooks, plantillas de mensaje y flujo de trabajo completo en E-SMART360."
section: "chatbots-omnicanal"
order: 208
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "enviar-mensajes-whatsapp-automaticos-wpforms-esmart360"
canonicalGroup: "como-enviar-mensajes-automaticos-de-whatsapp-al-recibir-un-formulario-wpforms"
tags: ["chatbots-omnicanal", "chatbots"]
staging: true
---
# Cómo Enviar Mensajes Automáticos de WhatsApp al Recibir un Formulario WPForms

En el mundo digital actual, la comunicación es clave para construir relaciones sólidas con los clientes. Automatizar las respuestas no solo ahorra tiempo, sino que también garantiza que tus clientes se sientan valorados y atendidos de manera oportuna. Si tu sitio web utiliza WPForms para recopilar consultas, comentarios o registros, tienes una oportunidad de oro para optimizar la comunicación integrando mensajes automáticos de WhatsApp.


> **¿Sabías que…?** Cada vez que un usuario completa un formulario en tu web, puedes enviarle automáticamente un mensaje personalizado a WhatsApp con la información que acaba de proporcionar. Esto mejora la tasa de respuesta y la experiencia del cliente significativamente.

Esta guía te llevará a través del proceso completo para configurar mensajes automáticos de WhatsApp activados por envíos de formularios WPForms. Ya sea que quieras enviar una nota de agradecimiento, un mensaje de confirmación o información de seguimiento, esta integración mejorará la experiencia del usuario y aumentará el compromiso con tus clientes sin esfuerzo adicional.

## Requisitos Previos

Antes de comenzar, asegúrate de contar con lo siguiente:



### Requisitos Técnicos

- **WPForms Pro** (la versión gratuita no incluye webhooks)
- **Webhooks Addon** instalado y activado en WPForms
- Una **cuenta de WhatsApp Business** conectada a E-SMART360
- Una **plantilla de mensaje aprobada** por Meta
- Una **cuenta en E-SMART360** para configurar la automatización

### Conocimientos Previos

- Acceso al panel de administración de WordPress
- Familiaridad básica con WPForms
- Conocimiento del panel de E-SMART360
- Comprensión básica de webhooks y APIs

## Paso 1: Instalar el Complemento Webhooks de WPForms

Además del plugin WPForms (debes tener la **versión Pro**), necesitaremos un complemento llamado **Webhooks Addon**.


### Accede a los complementos de WPForms

Desde el panel de WordPress, ve a **WPForms** y selecciona **Addons**. Se abrirá una página con todos los complementos disponibles de WPForms.

### Instala y activa Webhooks Addon

Busca el complemento **Webhooks Addon**, instálalo y actívalo.


> **Consejo:** Una vez activado, verás una nueva pestaña de "Webhooks" en la configuración de cada formulario WPForms que crees. Esto permite que los datos del formulario se envíen a servicios externos como E-SMART360.

## Paso 2: Crear una Plantilla de Mensaje

Meta solo permite que los mensajes comerciales se inicien usando **plantillas de mensaje aprobadas**. Por lo tanto, debemos crear una plantilla y esperar su aprobación por parte de Meta.


### Accede al Gestor de Plantillas

Desde el panel de E-SMART360, ve a **WhatsApp Bot Manager** y selecciona **Message Template**.

### Crea una nueva plantilla

Haz clic en el botón **Create** y selecciona **General Template**.

### Configura los detalles de la plantilla

Proporciona un nombre para la plantilla, selecciona el idioma (locale), la categoría y el tipo de encabezado (header). Luego escribe el cuerpo del mensaje.

### Añade botones (opcional)

Puedes agregar botones como **Call to Action** (CTA) o **Quick Reply** para hacer el mensaje más interactivo.

### Guarda y sincroniza

Haz clic en **Save** y cierra la ventana. Luego haz clic en el botón **Sync Template** para sincronizarla con Meta. Cuando esté aprobada por Meta, estará disponible para usarse.


> **Importante:** La aprobación de Meta puede tardar desde unos minutos hasta 24 horas, dependiendo del contenido. Revisa las [guías de tipos de plantillas](/recursos/guias-plantillas-whatsapp) para asegurarte de que tu contenido cumpla con las políticas.

### Variables en las Plantillas

Al crear tu plantilla, puedes usar variables para personalizar cada mensaje. Por ejemplo:

```
Hola {{1}}, gracias por contactarnos. Hemos recibido tu consulta sobre {{2}} y te responderemos a la brevedad en el número {{3}}.
```


> **Tip:** Define tus variables con nombres descriptivos en E-SMART360 (por ejemplo: `nombre_cliente`, `producto_consultado`, `telefono`) para que sea más fácil mapearlas después.

## Paso 3: Crear una Campaña de Webhook Workflow

Ahora crearemos un flujo de trabajo mediante webhook.


### Accede a Webhook Workflow

Ve a **Webhook Workflow** desde el panel de E-SMART360 y haz clic en **Create**.

### Configura el flujo de trabajo

Asigna un nombre al flujo de trabajo, selecciona la cuenta de WhatsApp y la plantilla de mensaje que usarás para esta campaña.

### Obtén la URL de callback

Haz clic en **Create Workflow**. El sistema te proporcionará una URL de **Callback**. **Copia esta URL**, la necesitarás en WPForms.


> **No cierres esta ventana.** La campaña aún no está completa. Regresarás aquí después de configurar el formulario en WordPress.



### Formato de la URL de Callback

```
https://api.esmart360.com/webhook/workflow/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```
Esta URL es única para cada campaña. Cada vez que WPForms envíe datos a esta URL, E-SMART360 procesará la información y enviará el mensaje de WhatsApp configurado.

### Estructura del Payload

```json
{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "phone": "+521234567890",
  "message": "Quiero información sobre el producto X"
}
```

## Paso 4: Crear un Formulario WPForms y Agregar la URL de Callback

En este paso vamos a crear un nuevo formulario WPForms con un campo de número de teléfono y agregar la URL copiada en la configuración de webhook.


### Crea un nuevo formulario

Desde el panel de WordPress, ve a **WPForms** y selecciona **Add New**. Nombra el formulario y elige una plantilla. Agrega un **campo de número de teléfono** al formulario. Este campo es obligatorio porque E-SMART360 lo usará para enviar el mensaje de WhatsApp.

### Configura el webhook en el formulario

Ve a **WPForms Settings**, selecciona la pestaña **Webhooks** y **habilita los Webhooks**.

### Pega la URL de callback

En el campo **Request URL**, pega la URL de callback que copiaste de E-SMART360.

### Configura el método de solicitud

En **Request Method**, selecciona **POST**. El método POST es el estándar para enviar datos de formularios a servicios externos.

### Mapea los campos del formulario

Desde **Request Body**, selecciona el **campo de nombre** e ingresa una **clave de parámetro** (por ejemplo: `name`). Agrega más campos haciendo clic en el botón **"+"**.

### Agrega los campos necesarios

Agrega al menos 3 campos en el cuerpo de la solicitud:
- **Nombre** → clave: `name`
- **Correo electrónico** → clave: `email`
- **Número de teléfono** → clave: `phone`
- **Mensaje o consulta** → clave: `message`

### Guarda el formulario

Finalmente, haz clic en **Save** para guardar el formulario.


> **¡Buen trabajo!** Has conectado exitosamente tu formulario WPForms con E-SMART360. Ahora cada vez que un usuario complete este formulario, los datos se enviarán automáticamente a tu flujo de trabajo.

## Paso 5: Enviar Datos de Muestra y Mapear el Flujo de Trabajo

Ahora debemos completar el formulario una vez para enviar datos de muestra a E-SMART360 y mapear la campaña correctamente.


### Completa el formulario de prueba

Ve al formulario WPForms en tu sitio web y **llena todos los campos** con datos de prueba. Asegúrate de incluir un número de teléfono válido para las pruebas.

### Captura la respuesta en E-SMART360

**Regresa al panel de E-SMART360** donde dejaste abierta la ventana de Webhook Workflow. Haz clic en **Capture Webhook Response**. Al hacer clic, el sistema capturará los datos de muestra que acabas de ingresar en el formulario.

### Mapea el número de teléfono

En la sección **Webhook response mapping**, haz clic en el **campo de número de teléfono** y selecciona el número de teléfono de los datos sin procesar (raw data).

### Mapea las demás variables

Si tu plantilla de mensaje incluye variables (como `{{1}}`, `{{2}}`, etc.), cada variable debe mapearse con el campo correspondiente de los datos de muestra. Por ejemplo:
- `{{1}}` → campo `name`
- `{{2}}` → campo `message`
- `{{3}}` → campo `phone`

### Guarda la campaña

Una vez que todos los campos estén mapeados, haz clic en **Save** para guardar la campaña.


> **¿Qué ocurre después?** A partir de este momento, cada vez que un usuario complete el formulario en tu sitio web, recibirá automáticamente un mensaje de WhatsApp personalizado con la información que proporcionó. El sistema funciona 24/7 sin intervención manual.

## Beneficios de Esta Integración

Integrar mensajes automáticos de WhatsApp con WPForms ofrece múltiples ventajas para tu negocio:

- **Respuesta inmediata:** Tus clientes reciben confirmación al instante, lo que reduce la ansiedad de espera.
- **Ahorro de tiempo:** Elimina la necesidad de responder manualmente cada consulta.
- **Personalización:** Cada mensaje puede incluir el nombre del cliente y los detalles específicos de su consulta.
- **Mayor tasa de conversión:** Los clientes que reciben una respuesta rápida tienen más probabilidades de completar una compra.
- **Profesionalismo:** Una comunicación automatizada y bien diseñada proyecta una imagen profesional de tu marca.


> **¿Sabías que…?** Los negocios que responden a sus clientes en los primeros 5 minutos tienen 9 veces más probabilidades de convertir una venta. Con esta automatización, tu respuesta es prácticamente instantánea.

## Ejemplos de Casos de Uso



### Confirmación de Contacto

- El usuario llena el formulario de contacto
- Recibe al instante: *"Hola Juan, gracias por escribirnos. Hemos recibido tu mensaje y te contactaremos en las próximas 24 horas."*
- **Resultado:** El cliente sabe que su mensaje fue recibido

### Notificación de Registro

- El usuario se registra a un webinar
- Recibe: *"¡Gracias por registrarte, María! El webinar será el viernes a las 5 PM. Te enviaremos el enlace 1 hora antes."*
- **Resultado:** Confirmación inmediata y aumento de asistencia

### Soporte Post-Venta

- El usuario solicita soporte técnico
- Recibe: *"Hola Carlos, hemos creado tu ticket #1234. Un agente te atenderá en breve."*
- **Resultado:** Reducción de reclamos y mejora en la experiencia de soporte

## Solución de Problemas Comunes


### No sé si la versión gratuita de WPForms funciona para esto

La versión gratuita de WPForms **no incluye soporte para webhooks**. Necesitas la versión **Pro** para acceder a esta funcionalidad. Si no tienes WPForms Pro, considera actualizar tu licencia o explorar otras alternativas como Google Forms + Zapier.

### Mi plantilla de mensaje fue rechazada por Meta

Meta revisa todas las plantillas de mensajes para garantizar que cumplan con sus políticas. Las razones más comunes de rechazo incluyen:
- Contenido promocional en categoría incorrecta
- Falta de claridad en el propósito del mensaje
- Uso incorrecto de mayúsculas o signos de puntuación
- Variables mal formateadas

Revisa nuestra guía de [solución de rechazos de plantillas](/recursos/solucion-rechazos-plantillas) para más detalles.

### El webhook no envía datos a E-SMART360

Si el webhook no funciona, verifica lo siguiente:
1. La URL de callback está copiada correctamente (sin espacios adicionales)
2. El Webhooks Addon está **activado** en WPForms
3. El método de solicitud está configurado como **POST**
4. Los nombres de los campos coinciden exactamente con lo que espera E-SMART360
5. El formulario se ha **guardado** después de la configuración

### ¿Puedo usar variables en el mensaje?

Sí, totalmente. Puedes usar variables como `{{nombre}}`, `{{email}}`, `{{telefono}}` para personalizar cada mensaje. Solo asegúrate de:
1. Definir las variables en la plantilla de mensaje de E-SMART360
2. Mapear cada variable correctamente en la sección de mapeo de webhook
3. Probar con datos reales antes de ponerlo en producción

### ¿Puedo enviar mensajes a números internacionales?

Sí, siempre que el número de teléfono incluya el código de país correcto (ejemplo: +52 para México, +34 para España, +1 para EE.UU.). Asegúrate de que tu formulario WPForms tenga el formato adecuado para que los usuarios ingresen su número con código de país.

### ¿Cuánto tiempo tarda en llegar el mensaje después del envío del formulario?

El mensaje se envía prácticamente en tiempo real. Desde que el usuario hace clic en "Enviar" hasta que recibe el WhatsApp, normalmente pasan solo **unos segundos**. El tiempo depende de la velocidad de tu servidor, la conexión a internet y los servidores de Meta.

## Preguntas Frecuentes


### ¿Necesito WPForms Pro para usar webhooks?

Sí, la funcionalidad de webhooks solo está disponible en la versión **WPForms Pro**. La versión gratuita no incluye esta característica.

### ¿Cuánto tarda Meta en aprobar una plantilla de mensaje?

La aprobación puede tardar desde **unos minutos hasta 24 horas**, dependiendo del contenido y la categoría de la plantilla. Las plantillas de tipo utilitario suelen aprobarse más rápido que las de marketing.

### ¿Puedo enviar mensajes sin usar una plantilla?

**No.** Meta exige una **plantilla aprobada** para iniciar mensajes a los clientes. Las únicas excepciones son las respuestas dentro de la ventana de 24 horas después del último mensaje del cliente.

### ¿Qué hago si el webhook falla?

Verifica que:
- La URL del webhook sea correcta
- WPForms esté configurado correctamente
- El Addon de Webhooks esté activado
- La cuenta de WhatsApp en E-SMART360 esté activa
- La plantilla de mensaje esté aprobada

### ¿Puedo enviar imágenes o archivos en el mensaje automático?

Las plantillas de mensaje de texto estándar no permiten archivos adjuntos. Sin embargo, puedes usar **plantillas multimedia** (como carrusel o imagen) si tu caso de uso lo requiere. Consulta la guía de [plantillas de carrusel](/recursos/plantillas-carrusel-whatsapp) para más información.

## Mejores Prácticas para tus Mensajes Automáticos

Para maximizar el impacto de tus mensajes automáticos, considera estas recomendaciones:



### Personalización

- Usa siempre el nombre del cliente en el mensaje
- Incluye detalles específicos de su consulta
- Adapta el tono del mensaje a tu marca
- Evita mensajes genéricos que parezcan spam

### Timing y Frecuencia

- Envía la confirmación inmediatamente después del formulario
- No envíes más de un mensaje automático por formulario
- Respeta la ventana de 24 horas para seguimiento
- Programa mensajes de seguimiento con al menos 48h de diferencia

### Consejos Adicionales


### Optimiza tus plantillas para mejorar la tasa de apertura

Las plantillas con mayor tasa de apertura comparten estas características:
- **Mensaje corto y directo:** 100-150 caracteres es ideal
- **Beneficio claro:** El cliente debe entender por qué recibe el mensaje
- **Call to Action visible:** Incluye un botón o instrucción clara
- **Personalización evidente:** Usa el nombre del cliente y datos relevantes
- **Diseño limpio:** Sin exceso de formato, emojis moderados

### Mide el rendimiento de tus campañas

E-SMART360 te permite hacer seguimiento de:
- **Tasa de entrega:** ¿Cuántos mensajes llegaron correctamente?
- **Tasa de apertura:** ¿Cuántos clientes abrieron el mensaje?
- **Tasa de clics:** Si usas botones CTA, ¿cuántos hicieron clic?
- **Tasa de respuesta:** ¿Cuántos clientes respondieron al mensaje?

Usa estos datos para optimizar tus plantillas y flujos de trabajo.

## Ejemplo Completo: Formulario de Solicitud de Presupuesto

Imagina que tienes un negocio de reparación de electrodomésticos y quieres automatizar tus solicitudes de presupuesto:

### Configuración del Formulario WPForms

| Campo | Tipo | Clave en Webhook |
|-------|------|-----------------|
| Nombre completo | Texto | `name` |
| Teléfono | Teléfono | `phone` |
| Tipo de electrodoméstico | Selector | `appliance_type` |
| Descripción del problema | Texto largo | `problem_desc` |
| Dirección | Texto | `address` |

### Plantilla de Mensaje para WhatsApp

```
Hola {{1}}, gracias por solicitar tu presupuesto.

Hemos recibido los detalles de tu {{2}} y nuestro equipo revisará la información.

Te contactaremos al {{3}} en las próximas 2 horas con el presupuesto.

¡Gracias por confiar en nosotros!
```

### Resultado Final

Cuando un cliente completa el formulario, recibe automáticamente:

> *"Hola Carlos, gracias por solicitar tu presupuesto. Hemos recibido los detalles de tu lavadora y nuestro equipo revisará la información. Te contactaremos al +521234567890 en las próximas 2 horas con el presupuesto. ¡Gracias por confiar en nosotros!"*


> **Impacto real:** Negocios que implementan esta automatización reportan una reducción del 40% en llamadas de seguimiento y un aumento del 25% en la satisfacción del cliente al recibir confirmación inmediata.

## Integraciones Relacionadas

E-SMART360 también te permite automatizar mensajes desde otras fuentes. Explora estas guías relacionadas:

- [Enviar mensajes automáticos desde Google Sheets](/recursos/mensajes-automaticos-google-sheets)
- [Recuperar carritos abandonados de WooCommerce por WhatsApp](/recursos/recuperar-carritos-abandonados-woocommerce-whatsapp)
- [Notificaciones de pedidos de Shopify por WhatsApp](/recursos/notificaciones-pedidos-shopify-whatsapp)
- [Integrar WooCommerce para automatización en WhatsApp](/recursos/integrar-woocommerce-automatizacion-whatsapp)

## Conclusión

Integrar mensajes automáticos de WhatsApp con WPForms es una forma poderosa de mejorar la comunicación con tus clientes y optimizar tu flujo de trabajo. Siguiendo los pasos descritos en esta guía, puedes configurar un sistema automatizado que envíe mensajes personalizados a tus usuarios en el momento exacto en que envían un formulario.

Esta automatización no solo ahorra tiempo, sino que también mejora la experiencia del usuario, demostrando a tus clientes que valoras su tiempo y sus consultas. Comienza a aprovechar esta integración hoy mismo para fortalecer las relaciones con tus clientes y aumentar el compromiso con un esfuerzo mínimo.


> **Próximo paso:** Una vez que hayas configurado esta integración básica, considera explorar flujos más avanzados como el envío de mensajes secuenciales, la integración con Google Sheets para campañas masivas personalizadas, o la conexión con tu tienda WooCommerce para notificaciones de pedidos automatizadas.
