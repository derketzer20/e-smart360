---
title: "Envío Masivo de Mensajes en WhatsApp con Datos Variables Personalizados"
description: "Guía completa paso a paso para crear campañas de broadcasting en WhatsApp con mensajes personalizados usando datos variables individuales. Aprende a importar suscriptores desde CSV y Google Sheets, mapear campos personalizados, crear plantillas aprobadas por Meta y lanzar campañas de difusión efectivas."
section: "chatbots-omnicanal"
order: 211
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "envio-mensajes-whatsapp-masivos-personalizados-variables-esmart360"
canonicalGroup: "envio-masivo-de-mensajes-en-whatsapp-con-datos-variables-personalizados"
tags: ["chatbots-omnicanal", "chatbots"]
staging: true
---
# Envío Masivo de Mensajes en WhatsApp con Datos Variables Personalizados

En el panorama actual de la comunicación digital, las empresas buscan constantemente nuevas formas de conectar con sus clientes a un nivel más personal. Una de las herramientas más poderosas disponibles es el **broadcasting de WhatsApp**, que permite a las empresas enviar mensajes masivos a sus suscriptores con facilidad.

Con el broadcasting de WhatsApp, puedes alcanzar a un número ilimitado de destinatarios simultáneamente, incluso aquellos que no han agregado tu número de negocio a sus contactos. La clave para que estas comunicaciones sean verdaderamente impactantes es la **personalización**.


> **¿Qué lograrás con esta guía?** Al finalizar, serás capaz de crear campañas de broadcasting donde cada suscriptor reciba un mensaje único con datos específicos para él —como su nombre, saldo pendiente, fecha de vencimiento o cualquier otra variable personalizada— todo desde una sola campaña automatizada.

## ¿Cómo funciona la personalización con variables?

Las empresas pueden personalizar los mensajes incorporando datos diferentes para cada suscriptor, haciendo que la interacción sea más relevante y atractiva. Por ejemplo, imagina que tienes una lista de suscriptores con deudas pendientes:

- **Usuario A** debe 50 USD, con vencimiento el 28 de febrero
- **Usuario B** debe 75 USD, con vencimiento el 12 de marzo

Con los datos variables personalizados, cada uno recibe un mensaje adaptado a su situación específica, en lugar de un mensaje genérico para todos. Esta capacidad de segmentación y personalización marca la diferencia entre una comunicación ignorada y una que genera acción.


> **Dato clave:** Los mensajes personalizados tienen tasas de apertura hasta un 70% más altas que los mensajes genéricos. La personalización no es un lujo, es una necesidad para campañas efectivas.

## Requisitos previos

Antes de comenzar, asegúrate de tener:

- Una cuenta activa en E-SMART360
- Un número de WhatsApp Business API conectado a tu cuenta
- Tu lista de suscriptores con los datos que deseas personalizar (en formato CSV o Google Sheets)
- Acceso a Meta Business Manager para la aprobación de plantillas

---

## Paso 1: Importar tu lista de suscriptores con datos personalizados desde un archivo CSV

Para comenzar, importa tu lista de suscriptores con los datos necesarios.


### Accede al Gestor de Suscriptores de WhatsApp

Desde el panel de control de E-SMART360, navega a **WhatsApp Subscriber Manager** (Gestor de Suscriptores de WhatsApp).

### Selecciona tu cuenta de WhatsApp

Si tienes múltiples cuentas de WhatsApp conectadas, selecciona la cuenta que vas a utilizar para la campaña.

### Inicia la importación

Haz clic en el botón de **opciones** y luego selecciona **Importar suscriptores**.

### Descarga la plantilla CSV

E-SMART360 proporciona una **plantilla CSV de ejemplo** que incluye dos columnas: una para el número de teléfono y otra para el nombre del suscriptor. Puedes descargar esta plantilla y modificarla agregando más columnas según sea necesario. Estas columnas adicionales se utilizarán como **variables personalizadas** en tu mensaje de broadcasting.


> **Formato especial:** Si tienes datos con formato inusual (como números largos, ceros a la izquierda, o fechas), agrega un apóstrofe (`'`) al inicio del valor o cambia el **formato de celda a Texto** antes de guardar y subir el archivo CSV. Esto evita que Excel o Google Sheets transformen tus datos automáticamente.

### Revisa los datos importados

Una vez subido el archivo, revisa los primeros dos registros para asegurarte de que todo esté correcto. También puedes asignar una **etiqueta (label)** a los suscriptores importados. Si dejas el campo de etiqueta en blanco, se usará el nombre del archivo como etiqueta.

### Importar contactos de WhatsApp desde Google Sheets

E-SMART360 también te permite importar contactos de WhatsApp directamente desde una hoja de Google Sheets. Esta integración perfecta simplifica el proceso de agregar contactos, haciéndolo más rápido y eficiente.


> **Ventaja de Google Sheets:** Puedes mantener tu lista de contactos siempre actualizada en la nube. Cualquier cambio que hagas en tu hoja de cálculo estará disponible para futuras importaciones sin necesidad de subir archivos manualmente.

Para importar desde Google Sheets:


### Conecta tu cuenta de Google

Ve a **Configuración → Integraciones → Google Sheets** e inicia sesión con tu cuenta de Google. Otorga los permisos necesarios para que E-SMART360 pueda acceder a tus hojas de cálculo.

### Selecciona la hoja de cálculo

Elige la hoja de Google que contiene tus contactos. Asegúrate de que la primera fila contenga los encabezados de columna (teléfono, nombre, y demás campos personalizados).

### Configura la sincronización

Define con qué frecuencia deseas que E-SMART360 sincronice los datos. Puedes optar por una importación única o una sincronización programada para mantener tus listas siempre actualizadas.

---

## Paso 2: Mapear los datos de los suscriptores

Una vez subido el archivo, el siguiente paso es mapear los datos de los suscriptores. La columna de **Número de teléfono** del archivo CSV debe mapearse al campo **Número de Teléfono del Suscriptor**, y la columna **Nombre del Suscriptor** debe mapearse al campo **Nombre del Suscriptor**. Las demás columnas deben mapearse a **variables de campos personalizados**.


### Inicia el mapeo

Haz clic en **Map Data** (Mapear Datos). Se abrirán dos campos: **File Header** (Encabezado del Archivo) y **Data Field** (Campo de Datos).

### Selecciona las correspondencias

En el campo **File Header**, selecciona el nombre de la columna del archivo CSV. En el campo **Data Field**, selecciona el campo apropiado al que se mapearán los datos de la columna.


> Realiza estos dos pasos para **cada columna** que tengas en tu archivo CSV. Es importante mapear **todas las columnas**, incluyendo los datos de campos personalizados que quieras usar en el broadcasting personalizado.

### Verifica los campos personalizados

Antes de mapear o subir el archivo CSV, asegúrate de haber creado previamente los **campos personalizados (custom fields)** para los datos variables de los suscriptores. Si no existen, debes crearlos antes de subir archivos CSV que contengan datos de campos personalizados.

### Cómo crear campos personalizados

Si aún no tienes campos personalizados creados, sigue estos pasos:


### Accede al Gestor de Suscriptores

Ve a **WhatsApp Subscriber Manager** desde el panel de control de E-SMART360.

### Administra los campos personalizados

Selecciona **Manage** (Administrar) y luego **Manage Custom Fields** (Administrar Campos Personalizados).

### Crea un nuevo campo

Haz clic en el botón **Create** (Crear).

### Configura el campo

Proporciona un **nombre para el campo personalizado** y selecciona el **tipo de respuesta** apropiado de la lista desplegable. Los tipos disponibles incluyen: texto, número, fecha, lista desplegable, y más.

### Guarda los cambios

Haz clic en **Save** (Guardar). Repite el proceso para cada campo personalizado que necesites (por ejemplo: `monto_deuda`, `fecha_vencimiento`, `producto`, `codigo_descuento`).


> **Ejemplo práctico:** Si estás enviando recordatorios de pago, podrías crear campos personalizados como `monto_deuda`, `fecha_vencimiento` y `numero_factura`. Luego, cada suscriptor tendrá sus propios valores en estos campos.

Después de mapear todos los datos, haz clic en el botón **Confirm** (Confirmar) para finalizar el proceso.

---

## Paso 3: Crear una plantilla de mensaje personalizada de WhatsApp

A continuación, necesitarás crear una plantilla de mensaje personalizada. Las plantillas de mensajes (también conocidas como **message templates**) son requeridas por WhatsApp Business API para iniciar conversaciones con los usuarios. Deben ser aprobadas por Meta antes de poder utilizarse.


### Accede al Gestor de Bots de WhatsApp

En el **WhatsApp Bot Manager**, selecciona tu cuenta y navega a la sección **Message Template** (Plantilla de Mensaje).

### Crea una nueva plantilla

Haz clic en el botón **Create** (Crear) para generar una nueva plantilla. Se abrirá un formulario con varias configuraciones.

### Configura los datos de la plantilla

Asigna un nombre descriptivo a la plantilla, elige tu **locale** (idioma y región, por ejemplo `es_MX` para español de México) y selecciona la **categoría** apropiada. Las categorías disponibles son:

- **Marketing:** Promociones, ofertas, anuncios de nuevos productos
- **Utilidad (Utility):** Confirmaciones de pedidos, actualizaciones de envío, recordatorios de citas, estados de cuenta
- **Autenticación:** Códigos de verificación y contraseñas de un solo uso (OTP)


> **Selecciona la categoría correcta.** Meta revisa la categoría de tu plantilla y puede rechazarla si no coincide con el contenido. Por ejemplo, una plantilla de "recordatorio de pago" debe categorizarse como Utilidad, no como Marketing.

### Incorpora las variables personalizadas

En el **cuerpo del mensaje**, incorpora las variables personalizadas de tu archivo CSV para personalizar el mensaje de cada suscriptor. Las variables se insertan usando la sintaxis `{{1}}`, `{{2}}`, etc., donde cada número corresponde a un campo de datos en el orden en que fueron mapeados.

Por ejemplo:
```
Hola {{1}} 👋
Tu factura #{{2}} por ${{3}} vence el {{4}}.
¡Paga a tiempo!
```


> **Importante:** El orden de las variables (`{{1}}`, `{{2}}`, `{{3}}`) corresponde al orden en que mapeaste los campos personalizados en el Paso 2 — NO al orden de las columnas en tu CSV. Lleva un registro claro de esta correspondencia.

### Configura el encabezado y pie de página

Opcionalmente, puedes agregar un **encabezado** (header) que puede incluir texto, una imagen, un video o un documento. También puedes agregar un **pie de página** (footer) con texto adicional como términos y condiciones o información legal.

### Agrega botones interactivos

Puedes incluir hasta **3 botones** por plantilla, con un máximo de **20 caracteres** por botón. Los tipos de botones disponibles son:

- **Call to Action (CTA):** Enlace a una URL o número de teléfono
- **Quick Reply:** Respuesta rápida predefinida que el usuario puede tocar

Por ejemplo, para un recordatorio de pago:
- Botón 1: "Pagar ahora" (CTA → URL de pago)
- Botón 2: "Hablar con asesor" (Quick Reply)

### Guarda y verifica el estado

Guarda la plantilla y verifica su estado de aprobación. Una vez aprobada, estará lista para usarse en tu campaña de broadcasting.


> **Tiempo de aprobación:** Las plantillas de mensajes de WhatsApp deben ser **aprobadas por Meta** antes de poder utilizarse. El proceso de aprobación puede tomar desde unos minutos hasta varias horas, dependiendo de la categoría y la calidad del contenido. Verifica el estado en la sección de plantillas antes de lanzar tu campaña.

### Razones comunes de rechazo de plantillas

Las plantillas pueden ser rechazadas por Meta por diversas razones. Conocerlas te ayudará a evitarlas:


### 🔴 Principales causas de rechazo

- **Contenido engañoso o falso:** Promesas que no se pueden cumplir, afirmaciones sin sustento
- **Lenguaje ofensivo o inapropiado:** Incluye contenido para adultos, violencia, discriminación
- **Formato incorrecto:** Uso inadecuado de mayúsculas, puntuación excesiva, errores ortográficos
- **Categoría incorrecta:** La categoría seleccionada no coincide con el propósito del mensaje
- **Caracteres especiales no permitidos:** Emojis excesivos, símbolos no estándar
- **Variables mal posicionadas:** Variables colocadas en encabezados donde no están permitidas
- **Falta de un propósito claro:** El mensaje no comunica claramente su intención



### Ejemplo: Plantilla Marketing

```
Hola {{1}} 👋

¡Oferta especial solo para ti!
Esta semana tienes un {{2}} de descuento 
en todos nuestros productos {{3}}.

Usa el código: {{4}}

Válido hasta el {{5}}.

[Tienda]
```
**Botones:** 1. Ver ofertas (URL) | 2. Comprar ahora (URL)

### Ejemplo: Plantilla Utilidad

```
Hola {{1}},

Tu pedido #{{2}} ha sido confirmado ✅
Producto: {{3}}
Total: ${{4}}
Fecha estimada de entrega: {{5}}

Gracias por tu compra.
[Tienda]
```
**Botones:** 1. Rastrear pedido (URL) | 2. Ayuda (Quick Reply)

---

## Paso 4: Lanzar la campaña de broadcasting

Ahora es momento de lanzar tu campaña personalizada.


### Accede a la sección de Broadcasting

Desde el menú de navegación lateral, ve a **WhatsApp Broadcasting** y haz clic en **Create** (Crear). Serás redirigido al **Visual Flow Builder** (Constructor de Flujos Visuales), donde podrás diseñar visualmente el flujo completo de tu campaña.

### Configura la campaña

Asigna un nombre descriptivo a tu campaña y selecciona **"Anytime"** (En cualquier momento) para el envío. Dependiendo de tu configuración, también puedes programar el envío para una fecha y hora específica.

### Selecciona la plantilla de mensaje

Elige la plantilla de mensaje que creaste y aprobaste en el **Paso 3**.

### Selecciona la etiqueta de suscriptores

En la sección **"Include Label IDs"** (Incluir IDs de Etiquetas), selecciona la etiqueta que usaste al subir la lista de suscriptores. Esto asegura que solo los suscriptores con esa etiqueta reciban el mensaje.

### Verifica el alcance

Confirma que el número de suscriptores objetivo coincida con tus expectativas. Una vez que todo esté configurado, haz clic en **OK**.

### Finaliza el flujo del bot

Finalmente, haz doble clic en **Start Bot Flow** (Iniciar Flujo del Bot) para nombrar tu flujo de bot y guardarlo. El flujo se activará automáticamente y comenzará a enviar los mensajes personalizados a cada suscriptor de tu lista.


> **¡Felicidades!** Has creado exitosamente un **broadcasting de WhatsApp personalizado** con datos variables para cada suscriptor. Tu campaña comenzará a enviarse según la configuración establecida. Puedes monitorear su progreso desde el panel de estadísticas.

---

## Entendiendo los límites de broadcasting en WhatsApp

### Niveles de mensajería

WhatsApp asigna a cada número de negocio un **nivel de mensajería (messaging tier)** que determina cuántos suscriptores puedes contactar en un período de 24 horas.



### Nivel Trial

**Límite:** 250 suscriptores/día
**Requisito:** Cuenta nueva
A medida que demuestres buen comportamiento (altas tasas de entrega, bajos reportes de spam), tu límite se incrementará automáticamente.

### Nivel 1

**Límite:** 1,000 suscriptores/día
Después de 1 semana con buen rendimiento en el nivel Trial, tu cuenta se actualizará automáticamente.

### Nivel 2+

**Límite:** 10,000+ suscriptores/día
Requiere verificación de negocio y buen historial de calidad. Los límites pueden aumentar hasta 100,000 o más.

> **¿Cómo aumentar tu nivel de mensajería?** Mantén una **calificación de calidad alta** (verde), minimiza los bloqueos y reportes de spam, y asegura que tus mensajes generen interacción positiva por parte de los destinatarios.

### Calificación de calidad (Quality Rating)

La calificación de calidad es un indicador crucial que WhatsApp asigna a tu número de teléfono. Esta calificación afecta directamente tu capacidad de enviar mensajes.



### Calificación Verde ✅

- Sin restricciones
- Puedes enviar mensajes con normalidad
- Elegible para aumentos de límite
- Buenas tasas de entrega

### Calificación Amarilla/Roja ⚠️

- Restricciones en el envío
- Posible límite reducido a nivel Trial
- Riesgo de bloqueo del número
- Mayor probabilidad de rechazo de plantillas

**Factores que afectan tu calificación de calidad:**

- **Tasa de bloqueos:** Si muchos usuarios bloquean tu número después de recibir un mensaje
- **Reportes de spam:** Cuando los destinatarios reportan tus mensajes como spam
- **Bajo engagement:** Mensajes abiertos pero sin ninguna interacción (clics, respuestas)
- **Quejas recibidas:** Número de quejas formales recibidas a través de Meta


> **Mantén un ecosistema saludable:** Revisa periódicamente tu calificación de calidad en el panel de control de E-SMART360. Si ves una tendencia a la baja, ajusta tu estrategia de mensajería: reduce la frecuencia, mejora la segmentación y asegúrate de que cada mensaje aporte valor real al destinatario.

---

## Reglas y buenas prácticas para broadcasting en WhatsApp

### Permisos de broadcasting

**Tipos de mensajes permitidos:**
- Mensajes promocionales y de marketing
- Notificaciones transaccionales y de utilidad
- Actualizaciones y mensajes de seguimiento
- Comunicaciones no transaccionales relacionadas con el servicio

### Consentimiento del usuario

**Requisitos de suscripción (opt-in):**
- Los usuarios deben proporcionar **consentimiento explícito** para recibir mensajes
- Métodos disponibles para obtener opt-in:
  - **Casillas de verificación** en páginas de aterrizaje y formularios web
  - **Campañas de opt-in por SMS** donde el usuario envía una palabra clave
  - **Recolección de consentimiento por correo electrónico** con confirmación
  - **Formularios en el sitio web** con aceptación de términos
  - **Click to WhatsApp Ads** donde el clic inicial constituye el consentimiento
  - **Códigos QR** que al escanearse inician una conversación


> **Consecuencias de enviar sin consentimiento:** El envío de mensajes no solicitados puede resultar en la suspensión temporal o permanente de tu número de WhatsApp Business API. Además, la calificación de calidad de tu número puede verse gravemente afectada.

### Mensajes a contactos no guardados

- Puedes enviar broadcasts a usuarios que **no tienen tu número guardado** en sus contactos
- Debes contar con el **consentimiento previo del usuario** para hacerlo
- Esta funcionalidad es **exclusiva de WhatsApp Business API** — no está disponible en la aplicación WhatsApp Business gratuita

### Señales de advertencia

Presta atención a estas señales que indican problemas potenciales con tu cuenta:

- **Disminución repentina** de la calificación de calidad
- **Altas tasas de bloqueo** por parte de los usuarios (más del 5%)
- **Falta de interacción** frecuente (mensajes abiertos pero sin respuesta)
- **Aumento en reportes de spam** desde el panel de Meta


### 📊 ¿Cómo monitorear estas señales?

E-SMART360 proporciona un panel de análisis en tiempo real donde puedes consultar:
- Calificación de calidad actual de tu número
- Tasa de entrega de tus últimos broadcasts
- Tasa de apertura y clics
- Número de reportes de spam y bloqueos
- Historial de calificación (tendencia semanal y mensual)

Revisa estas métricas al menos una vez por semana para detectar problemas a tiempo.

---

## Beneficios de personalizar tus broadcasts de WhatsApp

Enviar mensajes personalizados a tus suscriptores no solo mejora la efectividad de la comunicación, sino que también ayuda a construir relaciones más sólidas con tus clientes. Al dirigirte a cada destinatario individualmente con información relevante, es más probable que logres engagement y alcances tus objetivos de marketing.



### Mayor Engagement

Al dirigirte a cada persona por su nombre y compartir información relevante, las tasas de respuesta aumentan significativamente. Los mensajes personalizados generan hasta 6 veces más interacciones que los mensajes genéricos.

### Mejor experiencia del cliente

La personalización hace que las interacciones se sientan más humanas y centradas en el cliente. Los suscriptores perciben que la empresa se preocupa por sus necesidades individuales, lo que fortalece la lealtad a la marca.

### Mayores tasas de conversión

Los mensajes dirigidos y relevantes conducen a resultados de marketing más efectivos. Una llamada a la acción personalizada tiene muchas más probabilidades de ser exitosa que una genérica.

### 📊 Estadísticas de personalización en WhatsApp

- Los mensajes con nombre personalizado tienen un **26% más de probabilidad** de ser abiertos
- Las campañas segmentadas por comportamiento generan **760% más de ingresos** en comparación con campañas no segmentadas
- El **80% de los consumidores** prefiere hacer negocios con empresas que ofrecen experiencias personalizadas
- Los broadcasts personalizados reducen las tasas de cancelación de suscripción hasta en un **40%**
- Las tasas de clic (CTR) en mensajes personalizados son hasta **3 veces más altas** que en mensajes sin personalización

---

## Casos de uso avanzados con Google Sheets

E-SMART360 te permite ir más allá de la simple importación CSV. Puedes conectar Google Sheets para usar datos en tiempo real en tus respuestas del chatbot y campañas de broadcasting, permitiendo una automatización mucho más potente y dinámica.


### Conecta tu cuenta de Google

Desde **Configuración**, selecciona **Integraciones → Google Sheets** e inicia sesión con tu cuenta de Google. Selecciona una hoja existente o crea una nueva para almacenar los datos de tu campaña.

### Crea una campaña de obtención de datos

Ve a **Google Sheet Fetch Data** en la sección de Configuración, selecciona **WhatsApp Data Fetch Campaign** y haz clic en **Create**. Asigna un nombre a la API y selecciona la hoja de Google de la que deseas obtener datos.

### Mapea los datos de la hoja de cálculo

Elige un campo de **Search Data** (por ejemplo, el mensaje del suscriptor o un identificador único). Luego selecciona los encabezados de columna de Google Sheets y mapea cada uno al campo personalizado correspondiente en E-SMART360.

### Verifica la conexión

Haz clic en **Verify Connection** para confirmar que la configuración es correcta. Recibirás una confirmación visual si todo funciona correctamente.


> **¿Cómo usar esto en la práctica?** Crea una respuesta automática en tu chatbot que, cuando un usuario escriba "consultar saldo" o "estado de cuenta", busque en Google Sheets los datos de ese cliente y responda con su información personalizada al instante. ¡Todo automático!


### 🔄 Ejemplos de automatización con Google Sheets + WhatsApp

**Actualización de inventario en tiempo real:**
Mantén una hoja de Google con tu catálogo de productos y su disponibilidad. Cuando un cliente pregunte por la disponibilidad de un producto, el bot consulta la hoja en vivo y responde con los datos actualizados sin que tú tengas que intervenir manualmente.

**Directorio de servicios con proveedores:**
Si ofreces servicios con múltiples proveedores (por ejemplo, servicios de reparación: fontaneros, electricistas, técnicos de HVAC), almacena sus datos en Google Sheets con campos como: nombre, especialidad, zona de cobertura, disponibilidad. Cuando un cliente solicite un servicio, el bot busca al proveedor disponible más cercano y comparte sus datos de contacto automáticamente.

**Soporte técnico con base de conocimientos dinámica:**
Almacena respuestas a preguntas frecuentes en Google Sheets con categorías y palabras clave. Cuando un usuario haga una pregunta, el bot busca la respuesta más relevante en la hoja y la envía automáticamente. Puedes actualizar las respuestas en cualquier momento sin modificar el flujo del bot.

**Seguimiento post-venta automatizado:**
Después de una compra, registra el pedido en Google Sheets. Programa un flujo que, al día siguiente, consulte la hoja y envíe un mensaje personalizado al cliente preguntando si está satisfecho con su compra y ofreciendo asistencia adicional.

**Recordatorios de citas médicas o profesionales:**
Mantén un calendario de citas en Google Sheets. Programa un broadcast diario que, para cada cita del día siguiente, envíe un recordatorio personalizado al cliente con la fecha, hora, dirección y nombre del profesional que lo atenderá.

---

## Prueba antes de enviar: verifica tus broadcasts

Antes de lanzar tu campaña completa, es fundamental realizar pruebas para asegurarte de que la personalización y el formato sean correctos.


### Envía un mensaje de prueba

E-SMART360 te permite enviar un mensaje de prueba a ti mismo o a un grupo pequeño de destinatarios. Esta función está disponible en la sección de configuración de la campaña.

### Verifica la personalización

Revisa que todas las variables `{{1}}`, `{{2}}`, etc., se hayan reemplazado correctamente por los valores reales de cada suscriptor. Asegúrate de que no aparezcan variables sin reemplazar.

### Verifica el formato en diferentes dispositivos

Comprueba cómo se ve el mensaje en diferentes dispositivos (Android, iOS, WhatsApp Web). Los botones deben ser funcionales y los enlaces deben dirigir a las URLs correctas.

### Corrige y lanza

Si encuentras errores, corrige la plantilla o la configuración y vuelve a realizar la prueba. Una vez que todo esté funcionando correctamente, lanza la campaña completa.


> **Práctica recomendada:** Siempre envía al menos 2-3 mensajes de prueba con diferentes conjuntos de datos para verificar que todas las combinaciones de variables se rendericen correctamente.

---

## Preguntas frecuentes


### ¿Qué es el broadcasting de WhatsApp en E-SMART360?

El broadcasting permite a los usuarios enviar mensajes a múltiples contactos a la vez, manteniendo un toque personalizado mediante el uso de **datos variables** para cada destinatario. A diferencia de un mensaje masivo genérico, cada suscriptor recibe un mensaje adaptado a sus datos específicos. Esto es posible gracias a la integración con WhatsApp Business API.

### ¿Cómo puedo personalizar los mensajes en un broadcast?

Puedes personalizar los mensajes usando **variables** como el nombre del destinatario, preferencias u otros campos de datos personalizados. El proceso es: (1) importa tu lista con las columnas adicionales, (2) crea campos personalizados en el Gestor de Suscriptores, (3) mapea las columnas a los campos, y (4) usa las variables `{{1}}`, `{{2}}`, etc., en tu plantilla de mensaje.

### ¿Hay un límite en la cantidad de destinatarios en un broadcast?

No hay un límite fijo de destinatarios. El límite depende de tu **nivel de mensajería (messaging tier)** asignado por WhatsApp. Los niveles van desde 250 suscriptores por día (Trial) hasta 100,000 o más (niveles superiores). A medida que demuestres buen comportamiento y calidad, tu límite aumentará automáticamente.

### ¿Qué métricas de análisis ofrece E-SMART360 para rastrear broadcasts?

E-SMART360 te permite rastrear métricas como **tasas de entrega**, **tasas de apertura**, **tasas de engagement**, **calificación de calidad del número**, **reportes de spam**, **tasa de clics en botones**, y **número de respuestas recibidas**. Estas métricas te ayudan a evaluar el rendimiento de cada campaña y optimizar futuros envíos.

### ¿Puedo probar mis broadcasts antes de enviarlos?

Sí. E-SMART360 te permite enviar **mensajes de prueba** a ti mismo o a un grupo pequeño para asegurarte de que la personalización y el formato sean correctos antes de lanzar el broadcast completo. Esta es una práctica recomendada para evitar errores costosos. Siempre prueba al menos con 2-3 conjuntos de datos diferentes.

### ¿Qué causa una caída en la calificación de calidad de mi número?

La calificación de calidad puede caer por varias razones: **bloqueos excesivos** por parte de los destinatarios (más del 5%), **bajo engagement** (mensajes abiertos pero sin respuesta), **envío de mensajes no solicitados**, **altas tasas de quejas por spam**, o **frecuencia excesiva de mensajes**. Mantén una comunicación relevante, respeta el consentimiento y monitorea tus métricas regularmente.

### ¿Cuántos botones puedo incluir en una plantilla de broadcasting?

Puedes incluir hasta **3 botones** por plantilla, con un límite de **20 caracteres** por botón. Los botones pueden ser de tipo **Call to Action** (llamada a la acción, que abre una URL o inicia una llamada) o **Quick Reply** (respuesta rápida predefinida). El diseño adecuado de los botones puede aumentar significativamente la interacción con tus mensajes.

### ¿Puedo usar el mismo número para WhatsApp Business App y WhatsApp Business API?

No, no puedes usar el mismo número de teléfono simultáneamente en la aplicación WhatsApp Business (gratuita) y en WhatsApp Business API (a través de E-SMART360). Si deseas migrar, debes primero eliminar el número de la aplicación gratuita y luego registrarlo en E-SMART360 a través del proceso de Embedded Signup.

### ¿Cuánto tiempo toma la aprobación de una plantilla por parte de Meta?

El tiempo de aprobación varía según la categoría y la calidad del contenido. Las plantillas de **Utilidad** suelen aprobarse más rápido (minutos a horas), mientras que las de **Marketing** pueden tomar más tiempo (horas a días). Si una plantilla es rechazada, recibirás una notificación con el motivo del rechazo, podrás corregirlo y volver a enviarla para su revisión.

### ¿Qué tipos de plantillas de medios puedo usar en mis broadcasts?

E-SMART360 soporta plantillas con múltiples tipos de medios: **texto**, **imagen**, **video**, **documento** y **carrusel de imágenes**. Las plantillas de carrusel te permiten mostrar hasta 10 tarjetas con imagen, título, descripción y botones, ideales para catálogos de productos. Cada tipo de medio tiene límites de caracteres específicos definidos por WhatsApp.

### ¿Puedo programar un broadcast para una fecha futura?

Sí. E-SMART360 te permite programar tus campañas de broadcasting para una fecha y hora específica. Puedes preparar tus listas y plantillas con anticipación, programar el envío y la campaña se ejecutará automáticamente en el momento indicado. Esto es especialmente útil para campañas de cumpleaños, lanzamientos de productos o promociones estacionales.

### ¿Qué sucede si un suscriptor responde a mi mensaje broadcast?

Cuando un suscriptor responde a un mensaje broadcast, la conversación se abre y puedes continuarla de forma normal. La respuesta del usuario activa la ventana de servicio al cliente de 24 horas, durante la cual puedes enviar mensajes sin necesidad de plantillas. E-SMART360 te permite configurar respuestas automáticas o derivar la conversación a un agente humano.

### ¿Cómo maneja E-SMART360 los números de teléfono inválidos en mi lista?

E-SMART360 valida los números de teléfono durante la importación. Los números inválidos son rechazados y se te notificará cuántos registros se importaron exitosamente versus cuántos fallaron. También puedes descargar un reporte con los números rechazados para corregirlos y volver a intentarlo.

---

## Ejemplos prácticos detallados

### Caso 1: Campaña de recuperación de carritos abandonados

Supongamos que tienes una tienda Shopify o WooCommerce y quieres recuperar clientes que agregaron productos a su carrito pero no completaron la compra.

**Datos que necesitas en tu CSV:**

| Teléfono | Nombre | Producto | Precio | Link_Pago |
|----------|--------|----------|-------|-----------|
| 521234567890 | María García | Zapatos Deportivos | $89 USD | https://tutienda.com/pagar/abc123 |
| 521234567891 | Carlos López | Reloj Inteligente | $199 USD | https://tutienda.com/pagar/def456 |

**Plantilla de mensaje (categoría: Marketing):**

```
Hola {{1}} 👋

Notamos que dejaste {{2}} ({{3}}) en tu carrito. 
¡Completa tu compra ahora y recibe envío gratis!

👉 {{4}}

Este enlace es válido por 24 horas.
¡No dejes pasar esta oportunidad!
```

**Botones:**
- ".btn-primary" Comprar ahora (URL → `{{4}}`)
- ".btn-secondary" Ver más productos (URL → página de catálogo)


> **Resultado esperado:** Las tasas de recuperación de carritos abandonados mejoran drásticamente cuando el mensaje incluye el nombre del producto y un enlace de pago directo. Muchas empresas reportan recuperaciones del 15-30% de carritos abandonados usando esta estrategia.

---

### Caso 2: Campaña de cumpleaños con descuento personalizado

**Datos en tu CSV:**

| Teléfono | Nombre | Descuento | Codigo | Fecha_Valido |
|----------|--------|----------|--------|--------------|
| 521234567891 | Carlos López | 20% | CUMPLE20 | 15 días |
| 521234567892 | Ana Martínez | 20% | CUMPLE20 | 15 días |

**Plantilla de mensaje (categoría: Marketing):**

```
¡Feliz cumpleaños, {{1}}! 🎂🎉

Como celebración, te regalamos un {{2}} de descuento.
Usa el código: {{3}}

Válido por {{4}}. ¡Disfruta tu regalo!

[Tu Empresa] 💙
```


### 💡 Consejo: Automatiza el envío en fechas especiales

Puedes programar este tipo de campañas con anticipación. Prepara tu CSV con todos los cumpleaños del mes y programa el broadcast para que se envíe automáticamente en la fecha correspondiente. E-SMART360 maneja la cola de envíos para que cada suscriptor reciba el mensaje exactamente en su cumpleaños. Esta estrategia genera un alto nivel de aprecio y lealtad por parte de los clientes.

---

### Caso 3: Campaña de reactivación de clientes inactivos

**Datos en tu CSV:**

| Teléfono | Nombre | Dias_Inactivo | Oferta_Especial |
|----------|--------|---------------|-----------------|
| 521234567893 | Pedro Ramírez | 120 | 30% en tu próxima compra |
| 521234567894 | Laura Torres | 90 | 25% en tu próxima compra |

**Plantilla de mensaje (categoría: Marketing):**

```
Hola {{1}} 🙌

Hacen {{2}} días que no sabemos de ti.
Por eso, tenemos una oferta especial para ti:
¡{{3}}!

Usa el código: REACTIVA{{4}}

Válido por 7 días. ¡Te esperamos!

[Tu Empresa]
```

**Botones:** 1. Ver oferta (URL) | 2. Ir a la tienda (URL)


> **¿Por qué funciona?** Los clientes inactivos ya conocen tu marca y han comprado antes. Un mensaje personalizado con una oferta relevante puede reactivar hasta un 15% de clientes inactivos, generando ventas que de otra forma se habrían perdido.

---

## Uso de plantillas carrusel para catálogos de productos

E-SMART360 soporta **plantillas carrusel** que te permiten mostrar hasta 10 productos o servicios en un solo mensaje, cada uno con su propia imagen, título, descripción y botón de llamado a la acción.



### ¿Qué es una plantilla carrusel?

Es una plantilla de WhatsApp que muestra múltiples tarjetas deslizables horizontalmente. Cada tarjeta puede tener:
- Una imagen (relación 1:1 recomendada)
- Título (máximo 24 caracteres)
- Descripción (máximo 70 caracteres)
- Hasta 2 botones por tarjeta

### ¿Cuándo usar carruseles?

- Catálogos de productos
- Menú de servicios
- Propiedades inmobiliarias
- Colecciones de temporada
- Múltiples opciones de paquetes

> **Recomendación:** Usa imágenes de alta calidad con fondo blanco o transparente para mejor presentación. Asegúrate de que cada tarjeta tenga un propósito claro y no satures al usuario con demasiadas opciones.

---

## Consejos avanzados para optimizar tus campañas

### Mejores prácticas de segmentación



### Segmenta por comportamiento

No envíes el mismo mensaje a todos tus suscriptores. Segmenta según:
- Historial de compras
- Intereses declarados
- Nivel de engagement
- Ubicación geográfica
- Última interacción

### Segmenta por ciclo de vida

Adapta tus mensajes según la etapa del cliente:
- **Nuevos:** Mensajes de bienvenida y educación
- **Activos:** Ofertas y recomendaciones
- **En riesgo:** Incentivos para volver
- **Inactivos:** Campañas de reactivación

### Frecuencia recomendada de envío

| Tipo de campaña | Frecuencia recomendada |
|-----------------|----------------------|
| Marketing / Promociones | 1-2 veces por semana |
| Recordatorios de pago | 2-3 veces antes del vencimiento |
| Actualizaciones de pedidos | Según eventos del pedido |
| Boletines informativos | 1 vez cada 2 semanas |
| Cumpleaños / fechas especiales | 1 vez al año por evento |


> **No satures a tus suscriptores.** El envío excesivo de mensajes es la principal causa de bloqueos y reportes de spam. Respeta la frecuencia recomendada y monitorea las reacciones de tus suscriptores.

### Horarios óptimos de envío

- **Lunes a viernes:** 10:00 AM - 12:00 PM y 4:00 PM - 6:00 PM
- **Fines de semana:** 11:00 AM - 1:00 PM
- **Evita:** Horas de la madrugada (11 PM - 7 AM) y horarios de comida (1 PM - 3 PM)


> Estos horarios son referencias generales. Los horarios óptimos pueden variar según tu industria y tu audiencia específica. Revisa tus métricas de engagement para identificar los mejores momentos para tu negocio.

---

## Resumen y checklist final

Antes de lanzar tu primera campaña de broadcasting personalizado, asegúrate de haber completado todos estos pasos:


### ☑️ Prepara tus datos

Crea tu archivo CSV o Google Sheets con las columnas necesarias: teléfono, nombre, y todas las variables personalizadas que necesites. Verifica que los formatos de número de teléfono sean correctos (con código de país incluido).

### ☑️ Crea campos personalizados

En el Gestor de Suscriptores, crea un campo personalizado por cada columna de datos variable que hayas incluido en tu archivo.

### ☑️ Importa y mapea

Sube tu archivo CSV o conecta Google Sheets, mapea cada columna al campo correspondiente, y asigna una etiqueta a los suscriptores para poder segmentarlos fácilmente.

### ☑️ Crea y aprueba la plantilla

Diseña tu plantilla de mensaje con las variables `{{1}}`, `{{2}}`, etc., selecciona la categoría correcta, y espera la aprobación de Meta.

### ☑️ Configura y prueba la campaña

Crea la campaña de broadcasting, selecciona la plantilla aprobada y la etiqueta de suscriptores, y envía una prueba a ti mismo para verificar que la personalización funcione correctamente.

### ☑️ Lanza y monitorea

Una vez verificado todo, inicia el flujo del bot. Monitorea las métricas de entrega, apertura y engagement desde el panel de análisis. Ajusta tus campañas futuras según los resultados obtenidos.


> **¿Necesitas ayuda?** E-SMART360 ofrece soporte al cliente a través de chat en vivo en WhatsApp, Messenger, Telegram, Instagram y Webchat. También puedes abrir un ticket de soporte técnico donde un ingeniero dedicado resolverá tus dudas.

---

*¿Te ha sido útil esta guía? Compártela con tu equipo y comienza a enviar campañas de WhatsApp verdaderamente personalizadas hoy mismo.*
