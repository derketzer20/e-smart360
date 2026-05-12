---
title: "Chatbot Multicanal para WhatsApp, Messenger, Instagram, Telegram y WebChat"
description: "Descubre cómo E-SMART360 te permite gestionar chatbots multicanal en WhatsApp, Facebook Messenger, Instagram DM, Telegram y WebChat. Automatiza conversaciones, haz broadcasting, recopila datos y escala tu negocio desde un solo panel de control. Ideal para eCommerce, marketing y atención al cliente omnicanal."
section: "telegram"
order: 153
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "chatbot-multicanal-whatsapp-messenger-instagram-telegram-webchat-esmart360"
canonicalGroup: "chatbot-multicanal-para-whatsapp-messenger-instagram-telegram-y-webchat"
tags: ["telegram"]
staging: true
---
> **Actualización de plataforma (2026-05-07)**
> Esta guía cubre todas las funcionalidades multicanal de E-SMART360, incluyendo WhatsApp Cloud API, AI Agent con detección de intenciones, WebChat con AI Assistant, gestor de grupos de Telegram y las últimas integraciones para WooCommerce y Shopify.

# Chatbot Multicanal para WhatsApp, Messenger, Instagram, Telegram y WebChat

E-SMART360 es una potente plataforma de automatización de conversaciones y marketing omnicanal. Está equipada con chatbot para Facebook, Instagram, Telegram y el popular chatbot de WhatsApp, todo gestionable desde un solo panel de control unificado. En esta guía exploraremos cada canal y sus funcionalidades clave para que puedas conectar con tus clientes en múltiples redes sociales y hacer crecer tu negocio.


> E-SMART360 funciona con las APIs oficiales de cada plataforma: WhatsApp Business Cloud API, Facebook Messenger API, Instagram Graph API, Telegram Bot API y WebChat Widget. Todas las conexiones son estables y conformes con las políticas de cada plataforma.

---

## Canal de WhatsApp

El canal más potente de E-SMART360 es la integración con WhatsApp Business API. Su sistema impulsado por inteligencia artificial permite mantener conversaciones fluidas y automatizadas a través de la plataforma de mensajería más popular del mundo.

### Funcionalidades Clave de WhatsApp en E-SMART360

#### Conexión de tu cuenta de WhatsApp Business

Para empezar, debes conectar tu cuenta de WhatsApp Business a E-SMART360. Existen dos formas de hacerlo:


### Conexión recomendada con o sin permiso de catálogo

Este es el método más rápido y sencillo. Permite conectar tu número de teléfono sin necesidad de configurar manualmente la API de Meta. Puedes hacerlo con o sin permisos de catálogo de productos.

### Conexión manual alternativa

Este método te guía a través del proceso tradicional de integración con Meta Business. Aunque requiere más pasos, tiene la ventaja de reducir la probabilidad de que tu número comercial sea restringido durante el proceso de verificación.

#### Gestor de Chatbots (Chatbot Manager)

Una vez conectada tu cuenta, accedes al Gestor de Chatbots. Desde aquí puedes crear flujos automatizados usando el **Visual Flow Builder**, un editor visual de arrastrar y soltar que no requiere conocimientos técnicos. Simplemente dirígete a la opción "Crear" y accede al constructor.

#### AI Agent


> El AI Agent es el sistema de control central que gestiona toda la actividad del chatbot. Permite seleccionar campañas de IA preferidas, activar detección de intenciones, mantener memoria contextual y asignar agentes del equipo automáticamente según disponibilidad.

El sistema de **detección de intenciones** comprende la intención del usuario mediante palabras clave y las empareja con las campañas de entrenamiento configuradas, proporcionando respuestas precisas y contextuales.

**Configuración disponible del AI Agent:**

- **Detección de intenciones**: Actívala para que el bot entienda la intención del usuario
- **Memoria contextual**: Mantiene el contexto de la conversación activa
- **Asignación de agentes**: Asigna automáticamente agentes del equipo según disponibilidad
- **Respuesta en horario laboral**: Define si el agente IA responde solo fuera del horario laboral
- **Indicador de escritura**: Activa la animación de "escribiendo..." para dar un toque más humano
- **Nivel de razonamiento**: Ajusta la profundidad del análisis de la IA

Puedes elegir si el AI Agent debe responder a **todas las consultas** o solo como **Fallback** (cuando el chatbot programado no encuentra respuesta).


### ¿Cómo funciona la detección de intenciones?

La detección de intenciones analiza las palabras clave en los mensajes del usuario y las compara con las campañas de entrenamiento que hayas configurado. Cuando encuentra una coincidencia, responde según la intención detectada. Por ejemplo, si un usuario escribe "quiero comprar", el sistema detecta intención de compra y responde con el flujo de ventas correspondiente. Puedes entrenar al sistema con tus propias FAQs y documentos para mejorar la precisión.

#### Chat Widget

Los widgets de chat son una excelente forma de conectar con tus clientes desde tu sitio web. Puedes crear un widget de chat para tu cuenta de WhatsApp e insertarlo en tu página de aterrizaje mediante un código JavaScript embebido.



### Ventajas del Chat Widget

- Conexión directa desde landing pages
- Sin necesidad de que el cliente guarde tu número
- Embebido sencillo con una línea de código JS
- Ideal para capturar leads desde el sitio web
- Aparece como burbuja flotante personalizable

### Personalización disponible

- Colores y estilos personalizados para la burbuja
- Mensajes de bienvenida configurables
- Activación por tiempo de permanencia o scroll
- Compatible con WordPress, Shopify y cualquier CMS
- Vista previa en tiempo real de los cambios

#### Mensaje de Secuencia (Sequence Message)

Los mensajes de secuencia se utilizan para conectar con clientes en intervalos de tiempo predefinidos. Puedes seleccionar el primer mensaje para que se envíe después de unos minutos, horas o días, y luego definir un segundo, tercer y cuarto mensaje. Esta funcionalidad es ideal para newsletters, promociones y campañas de ventas.


> Las secuencias de mensajes combinadas con la segmentación por etiquetas son una de las estrategias más efectivas para campañas de nurturing y reactivación de clientes inactivos.

**Ejemplo de secuencia de ventas:**

1. **Mensaje 1** — Bienvenida inmediata con código de descuento del 10%
2. **Mensaje 2** — Día 1: Historia de la marca y casos de éxito
3. **Mensaje 3** — Día 3: Testimonios de clientes satisfechos
4. **Mensaje 4** — Día 7: Oferta por tiempo limitado con llamada a la acción

#### Input Flow (Flujo de Entrada de Datos)

Los Input Flows se utilizan para recopilar datos de los usuarios y enviarlos a través de URLs de webhook a aplicaciones de terceros. Puedes guardar estos datos en Google Sheets para usarlos posteriormente en campañas de ventas y promociones.

El flujo de entrada te permite hacer preguntas secuenciales al usuario (nombre, email, teléfono, preferencias) y almacenar las respuestas en campos personalizados que luego puedes utilizar para segmentar campañas de marketing.

#### Plantillas de Mensaje (Message Templates)

Las plantillas de mensaje se utilizan para enviar mensajes a los suscriptores fuera de la ventana de 24 horas y para importar contactos manualmente. Estas plantillas son mensajes preaprobados por WhatsApp que garantizan el cumplimiento de las políticas de la plataforma.


> Debes seguir las reglas de mensajería de Meta Business para que tus plantillas sean aprobadas. Las plantillas rechazadas pueden retrasar tus campañas. Asegúrate de clasificar correctamente cada plantilla en su categoría: marketing, utilidad o autenticación.

#### Integración con WooCommerce y Shopify

Esta automatización te permite enviar plantillas de mensaje preexistentes a tus clientes de WordPress/WooCommerce y Shopify automáticamente cuando realizan una compra en tu tienda.

**Notificaciones disponibles:**

- Confirmación de pedido
- Actualización de estado de envío
- Verificación de pedidos COD (pago contra entrega)
- Recuperación de carritos abandonados
- Notificaciones de disponibilidad de producto

#### Outbound Webhook (Webhook de Salida)

Un webhook de salida sirve como mecanismo que permite a una aplicación o servicio transferir datos a un sistema externo a través de solicitudes HTTP. Esta funcionalidad permite la transmisión fluida de información en tiempo real. Puedes seleccionar qué datos enviar: ID del suscriptor, nombre, apellido, número de teléfono y más.

#### Broadcasting en WhatsApp

El broadcasting de WhatsApp es una potente funcionalidad de comunicación que permite enviar mensajes, contenido multimedia y otras actualizaciones a una gran audiencia de contactos de WhatsApp al mismo tiempo. Es una herramienta excelente para empresas, organizaciones y startups.

Puedes crear una campaña de broadcast para un grupo específico de contactos utilizando etiquetas, asegurando que tus mensajes se envíen a grupos objetivo específicos o a todos tus suscriptores.


> Para mantener una reputación óptima y evitar restricciones, E-SMART360 sigue los límites de broadcasting establecidos por WhatsApp. Segmenta tu audiencia correctamente y envía contenido relevante para mantener una alta tasa de entrega y una buena calidad de cuenta.

#### Live Chat (Chat en Vivo)

La sección de Live Chat te permite conversar con tus clientes en tiempo real. Las funcionalidades incluidas son:

- **Activar/desactivar respuestas del bot**: Controla cuándo interviene la automatización
- **Notas internas**: Añade información relevante sobre cada cliente
- **Etiquetas**: Clasifica y segmenta usuarios para mejor seguimiento
- **Traducción integrada**: Traduce mensajes al instante
- **Historial completo de conversaciones**: Accede a todo el historial
- **Asignación de agentes**: Distribuye conversaciones entre tu equipo

#### Webhook Workflow

El Webhook Workflow te permite enviar mensajes automáticos a tus suscriptores de WhatsApp cuando ocurre un evento específico en un sistema externo. Por ejemplo, puedes enviar una notificación por WhatsApp a tu cliente cuando se realiza un pedido en tu tienda WooCommerce, Shopify o cualquier otra plataforma conectada.


### Pasos para configurar un Webhook Workflow

1. Accede a la sección Workflows en el panel de E-SMART360
2. Crea un nuevo workflow y selecciona "Webhook" como disparador
3. Configura la URL del webhook entrante con los datos del sistema externo
4. Diseña la plantilla de mensaje que se enviará al suscriptor
5. Define condiciones opcionales para filtrar eventos específicos
6. Activa el workflow y realiza una prueba de conexión
7. Monitorea los registros de actividad para verificar su funcionamiento

#### Catálogo de eCommerce (WhatsApp Catalog)

El catálogo de eCommerce de WhatsApp es una funcionalidad avanzada que permite a las empresas mostrar y gestionar sus productos o servicios directamente dentro de la plataforma de WhatsApp. Básicamente, funciona como un escaparate virtual donde las empresas pueden crear un catálogo de sus ofertas que los clientes pueden ver sin salir del chat.



### Beneficios del Catálogo

- Los clientes ven productos sin salir de WhatsApp
- Navegación intuitiva con imágenes y precios
- Posibilidad de realizar pedidos directamente
- Integración con inventario de WooCommerce/Shopify
- Actualización en tiempo real de existencias

### Casos de uso frecuentes

- Tiendas de ropa mostrando colecciones temporada
- Restaurantes con menús digitales interactivos
- Servicios profesionales con paquetes y precios
- Productos digitales y membresías
- Catálogos de bienes raíces con imágenes de propiedades

---

## Canal de Facebook Messenger

Facebook es, sin duda, la plataforma social más popular y fácil de usar, con alrededor de 3 mil millones de usuarios. Si quieres conectar con más clientes, debes estar presente en Facebook Messenger.

### Funcionalidades Clave de Facebook Messenger en E-SMART360

#### Conexión de tu cuenta de Facebook

Ve a la sección de Facebook desde el panel de E-SMART360. Desde aquí puedes conectar tu cuenta haciendo clic en **Iniciar sesión con Facebook** y otorgando los permisos necesarios.

#### Gestor de Chatbots

El mismo Gestor de Chatbots desde donde creamos los bots de WhatsApp. Todas las plataformas están ubicadas aquí. Este es el menú del constructor de bots desde el cual debes crear tu bot.

#### Bot Reply

Esta funcionalidad te permite crear bots con el Visual Flow Builder. Puedes **crear, duplicar, exportar e importar** flujos de bot desde aquí.

#### Plantilla de Broadcast (Broadcast Template)

Las empresas a menudo necesitan ejecutar campañas promocionales, de marketing y ventas. Esta funcionalidad es una excelente manera de llegar a los clientes.

#### Postback Manager

Un postback es un elemento esencial en un chatbot y puede reutilizarse en otros chatbots. Puedes tener varios chatbots para tu negocio, pero existe la posibilidad de que parte de esos bots sean iguales. Por esas razones, puedes usar la funcionalidad de postback.

#### Engagement Widget

Los widgets son la funcionalidad con la que los clientes suelen conectarse para obtener algún servicio o resolver consultas. Con esto, los clientes podrán unirse a una sala de chat con un solo clic.

#### Mensajes de Secuencia (Sequence)

Los mensajes de secuencia son excelentes para marketing, promociones y actualizaciones de ventas. Puedes configurar los temporizadores de antemano y el usuario recibirá los mensajes según los períodos de tiempo definidos.

#### User Input Flow

La función de Input Flow se utiliza para recopilar datos de los clientes y guardarlos para usos posteriores como promociones, ventas y marketing. Puedes guardar estos datos en Google Sheets y enviarlos a través de URL de webhook para conectar con otra aplicación.

#### Menú Persistente

Este es un menú de navegación que siempre está visible en la conversación del usuario con una empresa. Esta funcionalidad se utiliza para crear menús o comandos para diferentes idiomas.

#### RCN Postback Manager

RCN significa **Recurring Notification** (Notificación Recurrente). Esta funcionalidad permite a las páginas enviar mensajes promocionales a los seguidores interesados a través del chat de Messenger.

#### Domain Whitelisting

A veces Facebook no admite ciertos sitios web y no puedes usar algunas funcionalidades. En esos casos, debes incluir tu dominio en la lista blanca con esta funcionalidad para que tus dominios no sean bloqueados por Meta.

#### JSON API Connector

El conector JSON API se utiliza para enviar datos mediante webhooks desde E-SMART360. Puedes enviar datos activando un webhook con información como PSID, nombre, apellido, fecha de nacimiento, correos electrónicos y más.

#### Outbound Webhook

Esta es otra funcionalidad para enviar datos a través de webhook. Puedes seleccionar la acción desde Postback, User Input Flow o ambas.

#### Botones de Acción

Estos botones estarán disponibles para los clientes para que puedan elegir opciones como:



### Chat con humano

Transfiere la conversación a un agente humano en tiempo real cuando el cliente lo solicita o cuando el bot no puede resolver la consulta.

### Suscribirse

El cliente se registra para recibir notificaciones periódicas sobre promociones, novedades y contenido relevante.

### Comenzar

Inicia el flujo principal del bot, ideal para nuevos usuarios que quieren conocer los servicios disponibles.

### Chat con bot

Continúa la interacción automatizada con el chatbot, permitiendo al usuario acceder a funcionalidades específicas.

#### Configuración de Inicio (Get Started)

Con esta configuración, el cliente recibirá un mensaje de apertura. Es una idea para las interacciones iniciales con el cliente. También puedes agregar rompehielos (icebreakers) aquí.

#### Gestor de Suscriptores (Subscriber Manager)

El Gestor de Suscriptores se utiliza para gestionar tus clientes y segmentarlos según diferentes variantes para facilitar el manejo de clientes. Puedes crear etiquetas personalizadas para clasificar por comportamiento, ubicación o cualquier criterio que necesites.

#### Broadcasting en Facebook

El broadcasting de Meta significa que podrás enviar plantillas de mensaje a un grupo objetivo deseado de tus clientes. Facebook no permite enviar plantillas de broadcast a todos tus clientes. Necesitas tener **RCN-Suscriptores** y solo puedes ejecutar broadcasts usando plantillas **RCN-Postback** dirigidas solo a esos clientes.


### ¿Qué son exactamente los RCN-Suscriptores?

Los RCN-Suscriptores son usuarios que han optado voluntariamente por recibir notificaciones recurrentes de tu página a través de Messenger. Para obtener RCN-Suscriptores, debes configurar un flujo donde el usuario confirme explícitamente que desea recibir comunicaciones periódicas. Esto es un requisito obligatorio de Meta para cumplir con las políticas de privacidad y consentimiento.

---

## Canal de Instagram DM

Instagram es otra plataforma popular de Meta donde los usuarios comparten fotos de su vida diaria y se conectan con amigos y marcas. Integrar un chatbot en Instagram DM te permite automatizar la atención al cliente directamente en los mensajes directos.

### Funcionalidades Clave del Chatbot de Instagram DM en E-SMART360

#### Conexión de tu cuenta de Instagram

Ve a la sección de Instagram desde el panel de E-SMART360. Puedes conectar tu cuenta de Instagram desde aquí siguiendo el proceso de autenticación de Meta.

#### Gestor de Bots de Instagram

Todas las funcionalidades de Instagram están disponibles aquí. Vamos a discutir estas funcionalidades una por una.

#### Bot Reply

Esta sección es idéntica para todas las plataformas. Aquí es donde puedes crear y gestionar tus bots para diferentes cuentas.

#### Postback Manager

Como hemos mencionado anteriormente, los postbacks son esenciales y pueden reutilizarse en la función de un bot. Una misma función de bot puede ser requerida en muchos lugares dependiendo de las interacciones con los clientes.

#### Mensaje de Secuencia

El mensaje de secuencia es una de las funcionalidades más potentes de una herramienta de chatbot de marketing donde puedes interactuar con los clientes. Esta funcionalidad está equipada con User Input Flow y Google Sheets para recopilar y almacenar datos durante la secuencia.

#### Input Flow

Input Flow es otra funcionalidad para recopilar datos. Los usuarios pueden recolectar datos de los clientes y guardarlos en Google Sheets para su uso posterior en campañas de marketing y ventas.

#### Menú Persistente

Es un menú que siempre está visible en una conversación. Puedes seleccionar idiomas accediendo a la configuración **LOCALE**. Puedes enviar una URL o asignar una dirección de postback a este menú.

#### JSON API Connector

Esta funcionalidad te permite enviar datos a través de webhook a una aplicación o sitio web externo.

#### Outbound Webhook

Esta es una excelente funcionalidad para enviar datos a través de webhook de salida. Puedes seleccionar diferentes datos como ubicación, nivel de suscriptor o IDs para conectar con una aplicación externa.

#### Botones de Acción

La configuración de botones de acción en Instagram es ligeramente diferente a la de Facebook:


### No Match Reply (Respuesta sin coincidencia)

Envía una respuesta cuando la consulta del usuario no coincide con ninguna opción configurada en el sistema.

### Story Mention Reply (Respuesta por mención en historia)

Envía una respuesta automática a quien te mencione en una historia de Instagram.

### Story Private Reply (Respuesta privada por comentario en historia)

Responde automáticamente cuando alguien comenta en tu historia mediante un mensaje privado.

### Message Unsend Private Reply (Respuesta a mensaje eliminado)

Envía una respuesta a la persona que eliminó su mensaje.

#### Configuración de Inicio (Get Started)

Se trata de cómo saludas a tus clientes. Aquí puedes agregar hasta diez preguntas como respuestas rápidas (FAQs) para tus clientes. Ellos recibirán la respuesta de la plantilla de mensaje al hacer clic en ella.


> Las respuestas rápidas en Instagram son especialmente útiles para preguntas frecuentes como horarios, precios, ubicación y políticas de envío. Aprovecha al máximo las 10 preguntas disponibles para cubrir las dudas más comunes de tus clientes.

---

## Canal de Telegram

La plataforma más popular para el uso de bots es, sin duda, Telegram, donde las personas están realmente activas en grupos y acostumbradas al uso de bots. La plataforma de Telegram de E-SMART360 te ofrece enormes funcionalidades que son realmente potentes para marketing, segmentación de grupos, filtrado y conexión con clientes.

### Funcionalidades Clave del Chatbot de Telegram en E-SMART360

#### Conexión de tu bot de Telegram

Ve a la sección Conectar Cuenta desde el panel de E-SMART360, selecciona Conectar Telegram y verás la opción Conectar Bot. Luego pega el token HTTP API que obtuviste de **BotFather** y haz clic en conectar.

#### Bot Manager

Puedes acceder al Bot Manager desde el menú lateral del panel y dirigirte a la opción Bot Reply. Allí encontrarás una opción "Crear" que te llevará al Visual Flow Builder.

#### Bot Reply

Esta funcionalidad es como la de las otras plataformas, donde puedes crear bots con Visual Flow Builder. Es realmente simple y efectiva para usuarios sin conocimientos previos de programación.

#### Plantilla de Broadcast

El broadcasting se refiere al envío de mensajes o notificaciones a un grupo particular de usuarios todos a la vez, y está disponible aquí.

#### Chat Widget

Los widgets de chat son elementos emergentes interactivos. Esta funcionalidad es idéntica a las otras plataformas que hemos discutido anteriormente.

#### Secuencia en Telegram

El envío de mensajes de secuencia a tus clientes sigue el mismo proceso que hemos discutido anteriormente para otras plataformas. Te permite enviar mensajes a tus suscriptores en horarios predefinidos.

#### Input Flow

Esta es una de las funcionalidades más importantes de la sección Bot Reply, que se utiliza para recopilar datos de los usuarios:

- Los usuarios pueden acceder a informes para ver exactamente qué datos ha recopilado su bot de las interacciones de chat
- Pueden generar campos personalizados que se incorporan en los User Input Flows para personalizar aún más la recopilación de datos
- Los usuarios tendrán la flexibilidad de exportar y editar sus flujos de entrada existentes

#### Menú Persistente

Es una funcionalidad de navegación que permanecerá visible para los usuarios todo el tiempo. Garantiza un acceso fácil a funcionalidades y opciones esenciales dentro de una aplicación o sitio web.

#### Outbound Webhook

Un webhook de salida sirve como método que permite a una aplicación transferir datos. Esta funcionalidad permite la transmisión fluida de datos o notificaciones de eventos en tiempo real.

#### Botones de Acción

Esta sección es una colección de elementos personalizables dentro del Gestor de Bots de Telegram. Estos permiten a los usuarios realizar acciones particulares o definir plantillas que el bot debe usar como respuesta cuando se activan.

#### Configuración

En la sección de configuración encontrarás funcionalidades esenciales como **Chat con Humano**, donde puedes activar o desactivar la transferencia a un agente. Puedes habilitar o deshabilitar el mensaje de Get Started desde aquí. También hay **Auto Responders** para diferentes proveedores como Mailchimp, Sendinblue, ActiveCampaign y Mautic, entre otros.

#### Gestor de Grupos de Telegram


> El Gestor de Grupos de Telegram es una herramienta versátil diseñada meticulosamente para la administración y moderación de usuarios. Es una de las funcionalidades más diferenciadoras de E-SMART360 frente a otras plataformas de chatbot.

##### Actividad del Grupo

Te permite monitorear los niveles de participación e interacciones de los miembros dentro de tu grupo de Telegram. Puedes ver estadísticas de actividad, mensajes por miembro y tendencias de participación.

##### Suscriptores del Grupo

Esta funcionalidad te permite gestionar eficientemente los suscriptores de tu grupo con opciones para ver mensajes, silenciar y banear usuarios según sea necesario.

##### Filtrado de Mensajes

Aunque no puedes controlar lo que los usuarios dicen en el grupo, puedes filtrar mensajes:

| Tipo de Filtro | Descripción |
|----------------|-------------|
| Mensajes de miembros | Controla qué tipo de mensajes se permiten en el grupo |
| Mensajes reenviados | Bloquea o permite contenido reenviado de otros canales |
| Vigilancia por palabras clave | Monitorea términos específicos y activa alertas |
| Filtro de mensajes de administradores | Diferencia entre mensajes de admin y usuarios regulares |
| Mensajes de servicio | Gestiona notificaciones del sistema de Telegram |
| Restricción de nuevos miembros | Controla cuándo y cómo pueden unirse nuevos miembros |
| Límite de mensajes por miembro | Evita spam y flooding en el grupo |

---

## Canal WebChat Widget

El WebChat es crucial para cualquier negocio que quiera conectar con clientes directamente desde su sitio web. Con el paquete básico, puedes conectar un widget de WebChat a uno de tus sitios.


> Para una guía paso a paso sobre cómo conectar WebChat a tu sitio WordPress, consulta nuestra guía de integración de chatbot web en WordPress.

### Funcionalidades Clave del WebChat en E-SMART360

#### Bot Manager

Puedes acceder al Bot Manager de WebChat desde el menú lateral del panel y dirigirte a la opción Bot Reply. Allí encontrarás una opción "Crear" que te llevará al Visual Flow Builder.

#### Bot Reply

Esta funcionalidad es como la de las otras plataformas, donde puedes crear bots con Visual Flow Builder. Es realmente simple y efectiva para usuarios sin conocimientos previos.

#### AI Assistant

Esta funcionalidad fue introducida recientemente. Puedes entrenar un asistente de IA y la IA proporcionará respuestas según la campaña de entrenamiento, siguiendo las FAQs proporcionadas por el entrenador.


### ¿Cómo entrenar al AI Assistant del WebChat?

1. Prepara un documento con FAQs, guías o documentación de tu negocio
2. Sube el archivo (PDF, DOCX, TXT) o proporciona una URL con el contenido
3. El asistente de IA aprende de ese contenido automáticamente
4. Cuando un usuario escribe en el WebChat, la IA responde basándose en lo aprendido
5. Puedes actualizar el contenido de entrenamiento en cualquier momento
6. El AI Assistant se puede combinar con flujos de chatbot programados para casos complejos

#### Postback Manager

Un postback sirve como un componente esencial en un chatbot y puede reutilizarse para su uso en otro chatbot. Si tu negocio utiliza múltiples chatbots, es probable que algunas funcionalidades se superpongan entre ellos.

#### Input Flow

Esta es una de las formas más eficientes de recopilar datos de usuario:

- Los usuarios tienen la capacidad de ver informes que detallan los datos específicos recopilados por su bot de las interacciones de chat
- Tienen la capacidad de crear campos personalizados que se pueden integrar en los User Input Flows, mejorando la especificidad de la recopilación de datos
- Pueden exportar y editar sus flujos de entrada existentes

#### Menú Persistente

Es un elemento de navegación que permanece constantemente visible para los usuarios para su comodidad, por eso se conoce como menú persistente.

#### JSON API Connector

Esta funcionalidad permite la transmisión de datos a través de webhook a una aplicación o sitio web externo. Tendrás el privilegio de seleccionar qué datos deseas enviar a través de él.

#### Outbound Webhook

La funcionalidad de webhook de salida facilita la transferencia de datos y notificaciones de eventos en tiempo real a sistemas externos.

---

## Integración HTTP API Externa en Flujos de Bot


> E-SMART360 ofrece integración HTTP API que permite la conectividad fluida con plataformas externas como WooCommerce y WordPress. Esto permite interacciones dinámicas, como mostrar productos de WooCommerce en WhatsApp o integrar publicaciones de WordPress con tus chatbots.

### Configuración de la Integración HTTP API


### Accede a la sección HTTP API

Navega a Integración > HTTP API en el panel de E-SMART360. Haz clic en "Crear" para iniciar una nueva conexión API.

### Añade los detalles de conexión

Proporciona un nombre reconocible para la API (ej. "Crear Usuario WordPress"). Selecciona el método HTTP (GET, POST, PUT, DELETE, etc.) e ingresa la URL del endpoint de la API externa. Copia un ID de suscriptor desde el Gestor de Suscriptores para realizar pruebas.

### Configura los encabezados de solicitud

Configura el Content-Type como application/json u otro tipo según las especificaciones de la API externa. Añade las credenciales de autorización necesarias, como un Bearer Token.

### Configura el cuerpo de la solicitud

Añade los campos requeridos para la solicitud API. Puedes elegir entre valores estáticos o dinámicos basados en la entrada del usuario. Selecciona el formato: JSON, Form Data o X-WWW-FORM-URLENCODED según los requisitos de la API.

### Guarda y verifica la conexión

Haz clic en "Verificar Conexión" para enviar una solicitud de prueba a la API externa. Si la verificación es exitosa, haz clic en "Guardar API" para finalizar la configuración.

### Mapea los datos de respuesta

Mapea los campos de respuesta de la API a las variables de E-SMART360. Por ejemplo, si la API devuelve un user_id o email, puedes mapear esto al perfil del suscriptor. También puedes guardar elementos de lista como JSON para usarlos en mensajes interactivos como carruseles o listas de productos.

### Usa la API en el Flow Builder

Añade un Elemento HTTP API en cualquier parte del flujo del chatbot. Configura cuándo y cómo debe llamarse la API según las interacciones del usuario. Puedes usar la respuesta para personalizar el siguiente mensaje del bot.


> Con la integración HTTP API, E-SMART360 permite interacciones en tiempo real con plataformas externas, mejorando la automatización del chatbot al permitir acciones como creación de usuarios, recuperación de datos de suscriptores y actualizaciones fluidas de sistemas de terceros.

---

## Gestión de Conversaciones con el Panel de Live Chat

El Live Chat de E-SMART360 es una herramienta poderosa para gestionar conversaciones con clientes en tiempo real. Está dividido en varias secciones que facilitan la gestión de múltiples conversaciones simultáneamente.

### Sección de Lista de Suscriptores

Aquí verás todos tus suscriptores organizados:

- **Búsqueda rápida**: Encuentra rápidamente un suscriptor escribiendo su nombre o número de teléfono
- **Filtros avanzados**: Filtra por etiquetas, secuencias activas, respuestas recientes
- **Vistas de chat**: Mine (tus chats asignados), All Chats (todos), Unread (no leídos), Archived (archivados), Blocked (bloqueados), Resolved (resueltos)

### Sección de Ventana de Chat

- **Marcar chat**: Como no leído o archivado para seguimiento
- **Recordatorio de seguimiento**: Programa una hora específica para volver a contactar
- **Traducción integrada**: Traduce mensajes al instante a tu idioma preferido
- **Mensajes de firma**: Informa al cliente qué agente le está atendiendo
- **Reescribir con IA**: Mejora la gramática y el tono de tus mensajes automáticamente
- **Enviar plantillas**: Usa plantillas de mensaje predefinidas o flujos de bot directamente
- **Respuestas guardadas**: Inserta mensajes predefinidos para preguntas frecuentes
- **Compartir archivos**: Arrastra y suelta múltiples archivos para compartir con el cliente

### Sección de Acciones de Chat

- **Acciones rápidas**: Suscribir/desuscribir, pausar/reanudar bot, reiniciar Input Flow, borrar historial, salir del chat
- **Asignar agente**: Selecciona un agente específico del equipo para gestionar la conversación
- **Etiquetas**: Clasifica clientes en categorías personalizadas para segmentación
- **Campos personalizados**: Recopila datos específicos durante la conversación
- **Notas internas**: Guarda información importante visible solo para el equipo
- **Ventana de 24 horas**: Temporizador visual que muestra el tiempo restante para responder sin costo


### ¿Qué es la ventana de 24 horas de WhatsApp?

WhatsApp permite a las empresas responder mensajes iniciados por el cliente dentro de una ventana de 24 horas sin costo adicional por mensaje. Si necesitas contactar a un cliente después de ese período, debes usar una plantilla de mensaje preaprobada (Message Template). El panel de Live Chat muestra un contador regresivo para ayudarte a gestionar este límite de manera
## Broadcasting en WhatsApp: Guía de Buenas Prácticas

Para asegurar el éxito de tus campañas de broadcasting y evitar restricciones, es importante seguir ciertas reglas y buenas prácticas. WhatsApp tiene límites específicos para el envío de mensajes masivos que varían según la calidad de tu cuenta y el nivel de mensajería.

### Límites de Mensajería de WhatsApp

WhatsApp asigna a cada cuenta empresarial un límite de mensajería basado en la calidad de la cuenta y el volumen de conversaciones:

| Nivel de Mensajería | Límite de Mensajes/Día | Requisito |
|---------------------|------------------------|-----------|
| Nivel 1 | 1,000 | Cuenta verificada |
| Nivel 2 | 10,000 | Historial de buena calidad |
| Nivel 3 | 100,000 | Alto volumen con buena reputación |
| Nivel 4 | Ilimitado | Cuenta con excelente reputación |


> El límite de mensajería aumenta automáticamente cuando mantienes una buena calidad de cuenta. La calidad se mide en función de los reportes de usuarios, tasa de bloqueo y rate de entrega.

### Reglas de Broadcasting en WhatsApp

- **Siempre obtén consentimiento**: Solo envía mensajes a contactos que hayan optado voluntariamente
- **Usa plantillas aprobadas**: Para mensajes fuera de la ventana de 24 horas
- **Respeta la ventana de 24 horas para mensajes gratuitos**
- **Segmenta tu audiencia**: Usa etiquetas para campañas dirigidas
- **Incluye opción de darse de baja**: Todos los mensajes deben permitir que el usuario cancele la suscripción
- **Monitorea tu calidad**: Revisa regularmente el estado de calidad de tu cuenta

### Broadcasting con Variables Personalizadas

Una de las funcionalidades más potentes de E-SMART360 es el broadcasting con variables personalizadas. Puedes incluir campos como el nombre del cliente, fecha de última compra o cualquier campo personalizado en tus plantillas de broadcast, lo que aumenta significativamente la tasa de engagement.

**Ejemplo de plantilla con variables:**

```text
Hola {{nombre}}, tu pedido #{{pedido_id}} está en camino.
Fecha estimada de entrega: {{fecha_entrega}}
¡Gracias por confiar en nosotros!
```

---

## Secuencias de Ventas Automatizadas

Las secuencias de ventas son uno de los recursos más valiosos para cualquier negocio. Permiten nutrir leads de forma automática con mensajes programados estratégicamente.

### Configuración de una Secuencia de Ventas Efectiva


### Define tu objetivo de secuencia

¿Qué quieres lograr? Puede ser la venta de un producto, la inscripción a un webinar, la descarga de un recurso o la contratación de un servicio. Define claramente el objetivo antes de comenzar.

### Segmenta tu audiencia

Agrupa a tus contactos según su comportamiento, intereses o etapa en el embudo de ventas. Usa etiquetas para clasificarlos correctamente.

### Diseña los mensajes de la secuencia

Cada mensaje debe tener un propósito específico y aportar valor. Distribuye los mensajes en el tiempo de forma estratégica.

### Configura los intervalos

Define cuándo se enviará cada mensaje: inmediato, después de 1 hora, 1 día, 3 días, 7 días, etc.

### Añade llamadas a la acción

Cada mensaje debe incluir una acción clara que el usuario pueda realizar: comprar, registrarse, descargar, contactar.

### Monitorea y optimiza

Revisa las métricas de cada secuencia: tasa de apertura, tasa de clics, conversiones. Ajusta los mensajes según los resultados.

### Ejemplo de Secuencia para Venta de un Curso Online

1. **Mensaje 1 (Inmediato)**: "¡Hola {{nombre}}! Gracias por tu interés en nuestro curso de Marketing Digital. Aquí tienes un 20% de descuento exclusivo por ser nuevo suscriptor: CUPON20"
2. **Mensaje 2 (Día 1)**: "¿Sabías que el 85% de nuestros alumnos consiguen su primer cliente en menos de 30 días? Conoce su historia aquí: [enlace]"
3. **Mensaje 3 (Día 3)**: "Últimos días de descuento. El cupón CUPON20 expira en 48 horas. No pierdas esta oportunidad."
4. **Mensaje 4 (Día 7)**: "Aún estás a tiempo. Muchos de nuestros alumnos empezaron sin experiencia y hoy tienen negocios digitales exitosos. Empieza hoy: [enlace]"

---

## Ejemplos Prácticos de Uso Multicanal



### 🎯 Ejemplo 1: Tienda de Ropa y Accesorios

**Caso**: Una tienda de ropa que vende en Instagram y tiene tienda en WooCommerce.

**Flujo multicanal con E-SMART360:**

1. El cliente descubre un producto en Instagram y envía un DM preguntando precio
2. El chatbot de Instagram responde automáticamente con el catálogo de productos y precios
3. Si el cliente muestra interés, se le envía un enlace de pago por WhatsApp
4. Una vez realizado el pago, recibe confirmación por WhatsApp con el número de seguimiento
5. También recibe una notificación por Messenger con información de envío
6. 7 días después, recibe un mensaje de secuencia preguntando por su experiencia
7. Si hay alguna incidencia, el equipo de soporte la gestiona desde el Live Chat unificado

**Resultados obtenidos:**
- Aumento del 40% en tasa de conversión desde Instagram
- Reducción del 60% en tiempo de respuesta al cliente
- Incremento del 25% en valor del pedido medio por ventas cruzadas
- Clasificación automática de leads por nivel de interés

### 📱 Ejemplo 2: Agencia de Marketing Digital

**Caso**: Una agencia que gestiona campañas para múltiples clientes y necesita comunicación omnicanal eficiente.

**Flujo multicanal con E-SMART360:**

1. Los leads llegan desde el WebChat del sitio web de la agencia
2. El AI Assistant califica y segmenta los leads automáticamente según su presupuesto e industria
3. Los leads cualificados se transfieren al equipo de ventas por WhatsApp
4. Las notificaciones de campañas y reportes se envían por Telegram a grupos internos del equipo
5. Los clientes reciben actualizaciones semanales por Messenger
6. El equipo de soporte técnico usa el Live Chat para resolver incidencias en tiempo real
7. El reporting mensual se entrega automatizado por WhatsApp con gráficos y métricas

**Resultados obtenidos:**
- Gestión centralizada de 25+ clientes desde un solo panel
- Reducción del 45% en carga operativa del equipo
- Mejora del 70% en satisfacción del cliente por respuestas más rápidas
- Aumento del 35% en leads cualificados gracias al AI Assistant

> Ambos ejemplos demuestran cómo la integración multicanal no solo mejora la experiencia del cliente, sino que también optimiza los procesos internos del equipo, reduciendo costes operativos y aumentando las conversiones.

---

## Consejos Avanzados para la Automatización Multicanal

### Estrategia de Fallback Inteligente

Configura el AI Agent para que detecte cuándo una conversación necesita intervención humana. Define disparadores como:

- **Palabras clave urgentes**: "queja", "cancelar", "reembolso", "hablar con agente"
- **Insatisfacción del cliente**: Si el cliente repite la misma pregunta 2-3 veces
- **Solicitudes complejas**: Preguntas que requieren conocimiento especializado

### Segmentación por Comportamiento

Usa las etiquetas y campos personalizados para crear segmentos dinámicos:

- **Por frecuencia de compra**: Nuevos, recurrentes, inactivos, VIP
- **Por canal de origen**: Instagram, Facebook, WebChat, WhatsApp
- **Por etapa del ciclo de vida**: Lead, prospecto, cliente activo, cliente perdido
- **Por interés**: Categorías de productos o servicios consultados

### Automatización de Encuestas de Satisfacción

Configura un Input Flow que se active después de una conversación de soporte para recopilar feedback automáticamente:

1. Finaliza la conversación con el agente
2. El bot envía un mensaje de agradecimiento
3. Pregunta del 1 al 10: ¿Cómo calificas la atención recibida?
4. Pregunta opcional: ¿Cómo podríamos mejorar?
5. Los datos se almacenan en Google Sheets para análisis posterior

---

## Preguntas Frecuentes


### ¿Qué es un chatbot multicanal?

Un chatbot multicanal es un sistema que permite a las empresas automatizar conversaciones a través de múltiples plataformas de mensajería (WhatsApp, Messenger, Instagram, Telegram y WebChat) desde un único panel de control centralizado. Esto elimina la necesidad de gestionar cada canal por separado y proporciona una visión unificada de todas las interacciones con los clientes.

### ¿Qué plataformas soporta E-SMART360?

E-SMART360 soporta: WhatsApp (Cloud API), Facebook Messenger, Instagram DM, Telegram y WebChat Widget. La plataforma sigue expandiendo continuamente su compatibilidad con nuevos canales y plataformas adicionales.

### ¿Necesito conocimientos de programación para usar E-SMART360?

No. E-SMART360 utiliza un constructor visual de flujos de arrastrar y soltar (Visual Flow Builder) que permite crear automatizaciones de chatbot sin escribir una sola línea de código. La plataforma está diseñada para ser accesible para usuarios sin experiencia técnica. Sin embargo, para funcionalidades avanzadas como Webhook Workflow o HTTP API, puede ser útil tener conocimientos básicos de APIs.

### ¿Qué es el AI Agent y cómo funciona?

El AI Agent es el sistema de inteligencia artificial central que permite respuestas inteligentes usando detección de intenciones, memoria contextual, manejo de fallbacks, indicadores de escritura y niveles de razonamiento ajustables para interacciones más humanas. Detecta la intención del usuario mediante palabras clave y responde según las campañas de entrenamiento configuradas. Se puede configurar para responder a todas las consultas o solo como respaldo (fallback) cuando el chatbot programado no encuentra respuesta.

### ¿Puedo enviar mensajes promocionales masivos?

Sí. E-SMART360 soporta broadcasting en WhatsApp, Facebook (a través de RCN), Telegram y más. Puedes segmentar audiencias usando etiquetas y enviar campañas dirigidas. Es importante seguir las políticas de cada plataforma para evitar restricciones. En WhatsApp, debes usar plantillas de mensaje aprobadas para contactar fuera de la ventana de 24 horas y siempre ofrecer la opción de darse de baja.

### ¿Qué es el mensaje de secuencia y para qué sirve?

El mensaje de secuencia permite enviar mensajes de seguimiento automatizados en intervalos predefinidos (minutos, horas, días). Es ideal para promociones, newsletters, onboarding de nuevos clientes, nurturing de leads y reactivación de clientes inactivos. Puedes configurar secuencias completas de hasta varios mensajes con diferentes intervalos.

### ¿E-SMART360 es compatible con Shopify y WooCommerce?

Sí. E-SMART360 se integra nativamente con Shopify y WooCommerce para enviar confirmaciones de pedido, actualizaciones de estado, mensajes de verificación de COD, notificaciones de carritos abandonados y seguimiento de envíos directamente a través de WhatsApp. La integración se configura desde el panel sin necesidad de plugins adicionales.

### ¿Qué es el Webhook Workflow?

El Webhook Workflow permite activar mensajes automáticos cuando ocurren eventos específicos en sistemas externos. Por ejemplo, cuando se realiza un pedido en tu tienda WooCommerce o cuando se actualiza el estado de un envío, el webhook dispara una notificación automática por WhatsApp al cliente. Es una herramienta poderosa para mantener a tus clientes informados en tiempo real.

### ¿E-SMART360 permite gestionar grupos de Telegram?

Sí. Incluye un Gestor de Grupos de Telegram completo con herramientas de filtrado, moderación, gestión de suscriptores, vigilancia por palabras clave, monitoreo de actividad y restricción de nuevos miembros. Es ideal para comunidades, canales de soporte y grupos de ventas.

### ¿E-SMART360 es adecuado para negocios de eCommerce?

Sí, es ideal para negocios de eCommerce que quieran automatizar notificaciones de ventas, campañas de marketing, atención al cliente y engagement en múltiples plataformas. Las integraciones con Shopify, WooCommerce y el catálogo de WhatsApp lo convierten en una solución completa para tiendas online.

### ¿Cómo se maneja la ventana de 24 horas de WhatsApp?

WhatsApp permite a las empresas responder mensajes iniciados por el cliente dentro de una ventana de 24 horas sin costo adicional. El panel de Live Chat muestra un contador regresivo para ayudarte a gestionar este límite. Si necesitas contactar a un cliente después de ese período, debes usar una plantilla de mensaje preaprobada. Las plantillas de mensaje tienen diferentes categorías (marketing, utilidad, autenticación) y cada una tiene sus propias reglas de uso.

### ¿Qué son los RCN-Suscriptores en Facebook Messenger?

Los RCN-Suscriptores (Recurring Notification) son usuarios que han optado voluntariamente por recibir notificaciones recurrentes de tu página a través de Messenger. Para obtenerlos, debes configurar un flujo donde el usuario confirme explícitamente que desea recibir comunicaciones periódicas. Solo puedes enviar broadcasts a estos suscriptores usando plantillas RCN-Postback aprobadas por Meta.

### ¿Se pueden programar respuestas fuera del horario laboral?

Sí. El AI Agent tiene una configuración específica para "Responder en horario laboral". Puedes definir que el agente IA responda automáticamente fuera del horario laboral y que las consultas se transfieran a agentes humanos durante el horario laboral. Esto asegura que tus clientes siempre reciban una respuesta, incluso fuera del horario de atención.

---

## Conclusión

E-SMART360 es la mejor plataforma que puedes encontrar para llegar a audiencias en todas partes con un conjunto completo de chatbots con IA. Está diseñada para ayudarte a través de potentes funcionalidades para WhatsApp, Facebook Messenger, Instagram DM, Telegram y WebChat.

La plataforma te permite:

- **Automatizar conversaciones** en los 5 canales principales de mensajería
- **Gestionar todo desde un panel unificado** sin necesidad de cambiar entre plataformas
- **Recopilar datos** de tus clientes mediante Input Flows y almacenarlos en Google Sheets
- **Enviar campañas de broadcasting** segmentadas con mensajes personalizados
- **Automatizar secuencias de ventas** y nurturing de leads
- **Integrarte con eCommerce** (WooCommerce, Shopify) para notificaciones automáticas
- **Ofrecer soporte omnicanal** con Live Chat, transferencia a humano y AI Agent
- **Gestionar grupos de Telegram** con potentes herramientas de moderación

Conéctate con E-SMART360 hoy mismo para impulsar tus ventas, promociones y campañas de marketing a través de la automatización inteligente de conversaciones.


> ¿Listo para empezar? Crea tu cuenta gratuita en E-SMART360 y descubre cómo la automatización multicanal puede transformar la comunicación con tus clientes.

---

## Automatización de Secuencias de Ventas con Chatbots

Los chatbots de secuencia de ventas de E-SMART360 permiten automatizar completamente el proceso de seguimiento de leads. Esta funcionalidad es especialmente valiosa para negocios que gestionan un alto volumen de prospectos y necesitan asegurar que ningún lead quede sin seguimiento.

### Cómo Funciona una Secuencia de Ventas Automatizada


### Captura del lead

El lead llega a través de cualquiera de los canales: WhatsApp, Facebook Messenger, Instagram DM, WebChat, o Telegram. El chatbot captura automáticamente la información de contacto y el origen del lead.

### Cualificación automática

El Input Flow recopila información clave del lead: nombre, email, teléfono, presupuesto, necesidades específicas. El sistema asigna etiquetas automáticas según las respuestas.

### Asignación al equipo

Según las etiquetas y la disponibilidad, el lead se asigna automáticamente al agente o equipo de ventas correspondiente. El AI Agent puede gestionar las primeras interacciones si el equipo está ocupado.

### Secuencia de seguimiento

El lead recibe una secuencia de mensajes programados estratégicamente con contenido de valor, ofertas y llamadas a la acción. Cada mensaje se personaliza con el nombre y datos del lead.

### Cierre y postventa

Cuando el lead se convierte en cliente, la secuencia cambia automáticamente a mensajes de postventa, bienvenida y fidelización. Se activan las notificaciones de pedido y seguimiento.

### Reactivación de leads fríos

Si un lead no responde después de la secuencia completa, se mueve a una secuencia de reactivación con ofertas especiales o contenido diferente para reengancharlo.

### Tipos de Secuencias Disponibles

| Tipo de Secuencia | Objetivo | Duración Típica |
|-------------------|----------|-----------------|
| Secuencia de bienvenida | Dar la bienvenida y presentar la marca | 1-3 días |
| Secuencia de nurturing | Educar al lead sobre productos/servicios | 5-14 días |
| Secuencia de oferta | Presentar ofertas y descuentos | 3-7 días |
| Secuencia de reactivación | Recuperar leads inactivos | 7-30 días |
| Secuencia postventa | Fidelizar y solicitar reseñas | 1-7 días después de compra |
| Secuencia de carrito abandonado | Recuperar ventas no completadas | 2-5 días |

---

## Configuración Avanzada de Plantillas de Mensaje

Las plantillas de mensaje son fundamentales para la comunicación efectiva en WhatsApp. E-SMART360 te permite gestionar todo el ciclo de vida de las plantillas.

### Categorías de Plantillas

WhatsApp clasifica las plantillas en tres categorías principales:



### 📢 Marketing

Utilizadas para promociones, ofertas y campañas de concienciación. Requieren aprobación más rigurosa. Los usuarios deben haber optado por recibir comunicaciones de marketing.

### 🔧 Utilidad

Utilizadas para transacciones, notificaciones de cuenta, actualizaciones de pedido y alertas. No requieren consentimiento explícito si están relacionadas con una transacción del usuario.

La tercera categoría es **Autenticación**, utilizada para códigos de verificación y autenticación de dos factores (2FA). Estas plantillas tienen reglas específicas sobre el contenido y la caducidad del código.

### Razones Comunes de Rechazo de Plantillas

Para garantizar que tus plantillas sean aprobadas, evita estos errores comunes:

- **Contenido promocional sin opción de darse de baja**: Todas las plantillas de marketing deben incluir instrucciones claras para cancelar la suscripción
- **URLs acortadas o no verificadas**: Usa URLs completas y verificadas por Meta
- **Llamadas a la acción engañosas**: El botón o CTA debe corresponder exactamente a lo que ofrece la plantilla
- **Faltas de ortografía o gramática**: Revisa cuidadosamente el contenido antes de enviarlo
- **Caracteres especiales excesivos**: Evita el uso excesivo de emojis y mayúsculas
- **Información de contacto incompleta**: Incluye nombre de la empresa y datos de contacto


> Las plantillas de categoría "utilidad" tienen una tasa de aprobación significativamente mayor que las de "marketing". Siempre que sea posible, clasifica tus plantillas como utilidad si el contenido tiene un propósito transaccional o de servicio.

### Límites de Caracteres para Plantillas Multimedia

Cuando creas plantillas que incluyen imágenes, videos o documentos, ten en cuenta los siguientes límites:

- **Plantillas de texto**: 1024 caracteres máximos
- **Plantillas con imagen**: Texto del encabezado: 60 caracteres, cuerpo: 1024 caracteres
- **Plantillas con video**: Duración máxima del video: 30 segundos, tamaño máximo: 16 MB
- **Plantillas con documento**: Tamaño máximo del documento: 100 MB
- **Plantillas tipo carrusel**: Hasta 10 tarjetas en el carrusel

### Cómo Crear Plantillas de Carrousel en E-SMART360

Las plantillas de carrusel permiten mostrar múltiples productos o servicios en un solo mensaje:

1. Accede a la sección de Plantillas de Mensaje en el panel
2. Selecciona "Crear Plantilla" y elige el formato "Carrusel"
3. Añade hasta 10 tarjetas, cada una con: imagen, título, descripción y botón
4. Cada tarjeta puede tener su propio enlace o acción
5. Las plantillas de carrusel son ideales para catálogos de productos, menús y galerías de servicios
6. Envía la plantilla a revisión siguiendo las políticas de Meta

---

## Integración con Google Sheets para Automatización de Datos

La integración con Google Sheets es una de las funcionalidades más versátiles de E-SMART360. Te permite conectar tus formularios, Input Flows y datos de suscriptores directamente con hojas de cálculo en tiempo real.

### Usos Prácticos de la Integración con Google Sheets

- **Registro de leads**: Todos los leads capturados por el chatbot se guardan automáticamente en una hoja de cálculo
- **Seguimiento de ventas**: Cada interacción con un cliente se registra con su estado y fecha
- **Encuestas y feedback**: Las respuestas de los clientes se almacenan para análisis posterior
- **Automatización de campañas**: Los datos de Google Sheets pueden activar workflows automáticos
- **Reportes personalizados**: Genera reportes semanales o mensuales exportando los datos directamente

### Cómo Conectar Google Sheets con E-SMART360

1. Ve a la sección de Integraciones en el panel de E-SMART360
2. Selecciona Google Sheets y haz clic en "Conectar"
3. Inicia sesión con tu cuenta de Google y otorga los permisos necesarios
4. Selecciona la hoja de cálculo existente o crea una nueva
5. Mapea los campos del chatbot a las columnas de la hoja
6. Define si la integración será de ida (chatbot a Sheets) o bidireccional


### ¿Puedo importar contactos desde Google Sheets a E-SMART360?

Sí. Puedes importar contactos desde Google Sheets directamente al Gestor de Suscriptores de E-SMART360. La integración detecta automáticamente las columnas con nombres, teléfonos y otros datos, y los mapea a los campos de suscriptor correspondientes. También puedes programar importaciones periódicas para mantener tu lista de contactos actualizada automáticamente.

---

## Notificaciones Recurrentes (RCN) en Facebook Messenger

Las Notificaciones Recurrentes (RCN) son el sistema de Meta para permitir que las páginas de Facebook envíen mensajes promocionales a los seguidores interesados a través de Messenger.

### Cómo Configurar RCN en E-SMART360

1. Crea un postback de tipo **RCN-Postback** en el Postback Manager
2. Diseña un flujo de opt-in donde el usuario confirme que desea recibir notificaciones
3. Los usuarios que completen el opt-in se convierten automáticamente en RCN-Suscriptores
4. Crea la plantilla de broadcast que se enviará a estos suscriptores
5. Selecciona el grupo objetivo de RCN-Suscriptores para tu campaña

**Limitaciones importantes de RCN:**
- Solo puedes enviar un máximo de 1 broadcast por semana a RCN-Suscriptores
- Las plantillas RCN deben ser aprobadas por Meta antes de su uso
- Los usuarios pueden darse de baja en cualquier momento
- El contenido debe ser relevante y no engañoso

---

## Personalización de Widgets de Chat

Los widgets de chat son la puerta de entrada para muchos clientes. Personalizarlos adecuadamente puede mejorar significativamente la tasa de engagement.

### Opciones de Personalización de Widgets



### Apariencia Visual

- Color principal y secundario
- Posición (esquina inferior derecha o izquierda)
- Icono personalizado
- Animación de apertura
- Tamaño de la ventana de chat
- Modo oscuro o claro

### Mensajes y Textos

- Mensaje de bienvenida personalizado
- Texto del placeholder de escritura
- Texto del botón de inicio
- Mensaje fuera de horario
- Respuesta automática inicial
- Tiempo de activación del mensaje automático

### Comportamiento

- Activación por tiempo en página
- Activación por scroll
- Activación por clic en elemento
- Mostrar/ocultar en páginas específicas
- Preguntas frecuentes visibles
- Mostrar disponibilidad de agentes

### Código de Inserción del Widget

El widget de WebChat se inserta en tu sitio web mediante una línea de código JavaScript que se coloca antes del cierre de la etiqueta `</body>`. El código se genera automáticamente desde el panel de E-SMART360 y solo necesitas copiarlo y pegarlo en tu sitio.


> Si usas WordPress, el widget también se puede integrar mediante plugins compatibles o añadiendo el código directamente al archivo footer.php de tu tema. E-SMART360 es compatible con Elementor, Divi y la mayoría de los constructores de páginas populares.

---

## Importación y Gestión de Suscriptores

Gestionar correctamente tu base de suscriptores es fundamental para el éxito de tus campañas. E-SMART360 ofrece múltiples formas de importar y gestionar contactos.

### Métodos de Importación de Suscriptores

| Método | Descripción | Ideal para |
|--------|-------------|------------|
| Importación manual | Añadir contactos uno a uno desde el panel | Pequeños volúmenes (< 50 contactos) |
| Importación CSV | Subir archivo CSV con datos de contactos | Grandes volúmenes (hasta 10,000) |
| Integración Google Sheets | Sincronizar contactos desde una hoja de cálculo | Actualizaciones periódicas |
| Captura desde chatbot | Los contactos se añaden automáticamente al interactuar | Crecimiento orgánico continuo |
| API de integración | Importar mediante API desde sistemas externos | Desarrollo personalizado |

### Campos Personalizados y Etiquetas

Los campos personalizados te permiten almacenar información específica de cada suscriptor:

- **Campos predeterminados**: Nombre, teléfono, email, país, idioma
- **Campos personalizados**: Creados por ti según las necesidades de tu negocio
- **Etiquetas**: Clasificación flexible para segmentación de campañas
- **Notas**: Información adicional visible solo para tu equipo

Las etiquetas se pueden asignar manualmente o de forma automática mediante reglas definidas en los Input Flows y el comportamiento del usuario. Por ejemplo, un usuario que consulta sobre un producto específico puede recibir automáticamente la etiqueta "Interesado en [Producto]".
