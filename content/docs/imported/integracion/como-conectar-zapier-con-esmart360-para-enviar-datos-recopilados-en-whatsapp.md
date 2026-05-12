---
title: "Cómo Conectar Zapier con E-SMART360 para Enviar Datos Recopilados en WhatsApp"
description: "Guía completa paso a paso para integrar E-SMART360 con Zapier mediante webhooks salientes. Aprende a crear flujos de entrada de usuario, configurar un webhook de salida y enviar datos de WhatsApp a cientos de aplicaciones de terceros automáticamente."
section: "integracion"
order: 157
audience: ["developer"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "como-conectar-zapier-con-esmart360-para-enviar-datos-recopilados-en-whatsapp"
canonicalGroup: "como-conectar-zapier-con-para-enviar-datos-recopilados-en-whatsapp"
tags: ["integracion"]
staging: true
---
> **Actualización de integración Zapier (2026-05-05)**
> Esta guía ha sido actualizada con los cambios recientes en la interfaz de E-SMART360 y las nuevas funcionalidades de webhook saliente. Compatible con las últimas versiones de la API de WhatsApp Cloud.

# Cómo Conectar Zapier con E-SMART360 para Enviar Datos Recopilados en WhatsApp

E-SMART360 te permite enviar datos recopilados a través de chatbots de WhatsApp —como entradas de usuario, direcciones de correo electrónico, números de teléfono y detalles de suscriptores— a Zapier mediante un webhook saliente (**outbound webhook**). Al crear un flujo de entrada de usuario (**User Input Flow**) en E-SMART360 y conectarlo a un disparador **"Catch Hook"** de Zapier, puedes enviar automáticamente datos de usuarios de WhatsApp a Zapier e integrarlos con cientos de aplicaciones de terceros, como Google Sheets, Mailchimp, Salesforce, HubSpot y muchas más.


> **¿Sabías que...?** La integración con Zapier no requiere conocimientos de programación. Todo el proceso se realiza mediante la interfaz visual de E-SMART360 y la configuración punto y clic de Zapier. En menos de 15 minutos puedes tener tu primera automatización funcionando.

## ¿Qué Vas a Aprender?

En esta guía completa aprenderás a:

1. Crear una campaña de **flujo de entrada de usuario (User Input Flow)** en E-SMART360
2. Configurar un **webhook saliente** para enviar datos a Zapier
3. Obtener la URL del webhook desde **Zapier**
4. Conectar E-SMART360 con Zapier
5. Enviar **datos de prueba** desde WhatsApp a Zapier
6. Configurar una **acción automatizada** en Zapier (por ejemplo, enviar un correo electrónico)
7. **Publicar tu Zap** y ponerlo en producción

---

## 1: Crear una Campaña de Flujo de Entrada de Usuario en E-SMART360

El primer paso es crear una campaña de **User Input Flow** en E-SMART360. Este tipo de campaña te permite recolectar información estructurada de los usuarios durante una conversación.

### Acceder al Panel de Control

1. Inicia sesión en tu panel de control de **E-SMART360**.
2. En la barra lateral izquierda, localiza la sección **WhatsApp** y haz clic en el menú **Bot Manager** (o **Gestor de Bots**).


> La ubicación exacta del menú puede variar ligeramente según la versión de E-SMART360 que estés utilizando. Si no encuentras "Bot Manager", busca la sección "WhatsApp" que contiene las opciones de automatización de chatbots.

3. Se abrirá la página del gestor de bots de WhatsApp. En esta página, haz clic en la opción **Input Flow** (Flujo de Entrada).

![Página del gestor de bots con la opción Input Flow]

4. Al hacer clic, aparecerán las configuraciones del flujo de entrada junto con un botón **Create** (Crear).

5. Haz clic en el botón **Create**. Inmediatamente se abrirá el **editor de flujo** (Flow Builder Editor) con dos componentes pre-conectados:
   - **Start Bot Flow** (Inicio del Flujo del Bot)
   - **User Input Flow** (Flujo de Entrada de Usuario)

![Editor de flujo con Start Bot Flow y User Input Flow conectados]


> El editor de flujo de E-SMART360 es una herramienta visual de tipo **arrastrar y soltar**. No necesitas escribir una sola línea de código para crear flujos conversacionales complejos.

### Configurar el Flujo de Entrada de Usuario

1. Haz **doble clic** en el componente **User Input Flow**.
2. Se abrirá un panel lateral derecho llamado **Configure User Input Flow** (Configurar Flujo de Entrada de Usuario).
3. En el campo **User Input Flow**, selecciona la opción **Add New Input Flow** (Añadir Nuevo Flujo de Entrada).
4. En el campo **Campaign Name** (Nombre de Campaña), proporciona un nombre descriptivo, por ejemplo: *"Recolección de Correos Electrónicos"*.

![Configuración del flujo de entrada de usuario]

5. Haz clic en **OK**.


### Componentes del editor

El editor de flujo de E-SMART360 utiliza componentes visuales que se conectan entre sí mediante nodos de entrada y salida. Cada componente representa una acción diferente: preguntar al usuario, enviar un mensaje, o ejecutar una acción interna.
  
### Conexión automática

Cuando creas un nuevo flujo de entrada, el componente "New Question" se conecta automáticamente al "Start Bot Flow Campaign", listo para ser configurado.
  
Inmediatamente después de configurar el flujo, un nuevo componente **New Question** (Nueva Pregunta) aparecerá en el editor, conectado automáticamente al **Start Bot Flow Campaign**.

![Nuevo componente de pregunta en el editor]

### Configurar la Campaña de Inicio del Flujo del Bot

1. Haz **doble clic** en el componente **Start Bot Flow Campaign**.
2. Se abrirá un panel lateral llamado **Configure Reference** (Configurar Referencia) con los siguientes campos:
   - **Title** (Título): Proporciona un título. Por ejemplo: *"Bienvenida - Solicitud de Email"*
   - **Choose Labels** (Elegir Etiquetas): Opcional. Selecciona una etiqueta de la lista desplegable para categorizar la campaña.
   - **Choose Sequence** (Elegir Secuencia): Opcional. Puedes seleccionar una secuencia para encadenar múltiples campañas.


> Los campos de **etiquetas** y **secuencias** son completamente opcionales, pero muy útiles cuando gestionas múltiples campañas y necesitas organizarlas o encadenarlas. Las etiquetas te permiten filtrar campañas, mientras que las secuencias te permiten ejecutar una campaña después de otra automáticamente.

![Configuración del Start Bot Flow]

3. Haz clic en **OK** para guardar la configuración.

### Configurar la Nueva Pregunta

1. Haz **doble clic** en el componente **New Question** (Nueva Pregunta).
2. Se abrirá el panel lateral **Configure New Question** (Configurar Nueva Pregunta).
3. Selecciona el tipo de entrada **Free Keyboard Input** (Entrada de Teclado Libre).
4. Al seleccionarlo, aparecerán varios campos que debes completar:


### Campo Question (Pregunta)

Escribe la pregunta que verá el usuario. Por ejemplo: *"Por favor, proporciona tu dirección de correo electrónico para que podamos mantenerte informado."*
  
### Campo Reply Type (Tipo de Respuesta)

Selecciona el tipo de respuesta como **Email** (Correo Electrónico). Esto hará que E-SMART360 valide automáticamente que el usuario ingrese una dirección de correo electrónico válida.
  
### Guardar la configuración

Haz clic en el botón **OK** para guardar la configuración de la pregunta.
  
![Configuración de la pregunta con Free Keyboard Input y tipo Email]


> **Tip profesional:** El tipo de respuesta **Email** no solo valida el formato del correo, sino que también permite a E-SMART360 reconocer automáticamente ese dato como un campo estructurado que se puede enviar posteriormente a través del webhook. También puedes usar tipos como **Number**, **Phone**, **Date**, o **Text** según la información que necesites recolectar.

### Añadir una Respuesta Final

Después de que el usuario responda la pregunta, es recomendable enviar un mensaje de confirmación.

1. Desde el conector **Final Reply Socket** (Conector de Respuesta Final) del componente **New Question**, arrastra el cursor y suéltalo en el editor.
2. Al soltarlo, aparecerá un menú con diferentes tipos de componentes. Selecciona **Postback**.
3. Inmediatamente, aparecerá un componente **New Postback** (Nuevo Postback) conectado al componente de pregunta.

![Componente New Postback conectado a New Question]

4. Haz **doble clic** en el componente **New Postback**.
5. Se abrirá el panel lateral **Configure New Postback** (Configurar Nuevo Postback).
6. Proporciona un título en el campo **Title** (por ejemplo: *"Confirmación de Correo"*).
7. Opcionalmente, puedes elegir una etiqueta y una secuencia, aunque no son obligatorios.
8. Haz clic en **OK**.

Ahora añadiremos un mensaje de texto de confirmación:

1. Desde el conector **Next Socket** del **New Postback**, arrastra el cursor y suéltalo en el editor.
2. Aparecerá una lista de componentes. Selecciona **Text** (Texto).
3. Se creará un componente **Text** conectado al postback.

![Componente de texto conectado al postback]

4. Haz **doble clic** en el componente **Text**.
5. En el campo de texto, escribe un mensaje de confirmación. Por ejemplo: *"¡Gracias! Hemos recibido tu correo electrónico correctamente. Te mantendremos informado sobre nuestras novedades."*
6. Haz clic en **OK**.


> **¡Importante!** Para que el flujo funcione correctamente como un bot completo, debes añadir un **componente Trigger** (Disparador). Este componente se encarga de activar el flujo cuando el usuario envía un mensaje con la palabra clave configurada.

### Guardar y Probar el Bot

1. Haz clic en el botón **Save** (Guardar) para guardar todo el flujo.
2. Ahora, vamos a probar el bot:
   - Abre WhatsApp en tu teléfono.
   - Escribe la **palabra clave** que activa el bot (por defecto, suele ser la palabra configurada en el Trigger).
   - El bot te responderá pidiéndote tu dirección de correo electrónico.
   - Proporciona tu correo electrónico.

![Prueba del bot en WhatsApp solicitando el correo electrónico]


> **Solución de problemas:** Si el bot no responde, verifica lo siguiente:
  - Asegúrate de que el número de teléfono esté correctamente conectado a WhatsApp Cloud API.
  - Revisa que el Trigger esté configurado con la palabra clave correcta.
  - Confirma que el bot esté publicado y activo desde el panel de control.
  - Verifica que el componente **Trigger** esté correctamente conectado al flujo.

## 2: Crear un Webhook Saliente en E-SMART360

Ahora que tenemos nuestro flujo de entrada de usuario funcionando, necesitamos crear un **webhook saliente (outbound webhook)** para enviar los datos recolectados a Zapier.


> ¿Qué es un webhook saliente? Es un mecanismo que permite a E-SMART360 enviar datos automáticamente a una URL externa (en este caso, la URL de webhook de Zapier) cada vez que ocurre un evento específico, como cuando un usuario completa un flujo de entrada.

1. **Actualiza** la página del gestor de bots de WhatsApp (Bot Manager).
2. Haz clic en la opción **Outbound Webhook** (Webhook Saliente).

![Opción Outbound Webhook en el Bot Manager]

3. Se abrirá la configuración del webhook saliente con un botón **Create** (Crear).
4. Haz clic en el botón **Create**.

![Botón Create en la configuración de Outbound Webhook]

5. Aparecerá un **formulario modal** de webhook saliente con los siguientes campos:
   - **Webhook Modal Name** (Nombre del Webhook): Proporciona un nombre descriptivo, como *"Webhook a Zapier - Recolección de Emails"*.
   - **Webhook Outbound URL** (URL del Webhook Saliente): Aquí debes pegar la URL que obtendrás de Zapier. **No te preocupes, la obtendremos en el siguiente paso.**

![Formulario modal del webhook saliente]

Además del nombre y la URL, deberás seleccionar los datos que deseas enviar a Zapier:

- **Subscriber Name** (Nombre del Suscriptor)
- **Phone Number** (Número de Teléfono)
- **Input Flow Data** (Datos del Flujo de Entrada)


> **¿Qué datos se envían?** Cuando marcas estas opciones, cada vez que un usuario completa un flujo de entrada, E-SMART360 enviará un payload JSON a la URL del webhook con:
  - El nombre del suscriptor (si está disponible)
  - El número de teléfono (ID del chat)
  - Las respuestas del usuario a las preguntas del flujo de entrada

6. Por ahora, **no guardes el webhook** todavía. Primero necesitamos obtener la URL de Zapier.

## 3: Obtener la URL del Webhook desde Zapier

Vamos a Zapier para crear un nuevo **Zap** (automatización) y obtener la URL del webhook.

1. Inicia sesión en tu cuenta de **Zapier** (o créala si aún no tienes una).
2. Haz clic en el botón **Create Zap** (Crear Automatización).

![Botón Create Zap en Zapier]

3. Se abrirá un entorno de creación (sandbox).
4. En el campo **App & Event** (Aplicación y Evento), selecciona **Webhook by Zapier**.

![Selección de Webhook by Zapier en Zapier]

5. Aparecerá un formulario modal llamado **Webhooks by Zapier**. En el campo **Event** (Evento), elige la opción **Catch Hook** (Capturar Webhook).


> El evento **Catch Hook** permite que Zapier reciba datos de cualquier fuente externa a través de una URL de webhook. Es la opción perfecta para conectar E-SMART360 con Zapier.

![Selección del evento Catch Hook]

6. Haz clic en el botón **Continue** (Continuar).
7. Haz clic en **Continue** nuevamente en la siguiente pantalla.
8. Ahora verás una **URL de Webhook** generada por Zapier. **Copia esta URL**; la necesitarás en el siguiente paso.

![URL del webhook generada por Zapier]


> **¡Importante!** No cierres ni refresques la página de Zapier hasta que hayas completado la conexión. Mantén esta pestaña abierta mientras trabajas en los siguientes pasos.

## 4: Conectar E-SMART360 con Zapier

Ahora que tenemos la URL del webhook de Zapier, volvamos a E-SMART360 para completar la configuración.

1. Regresa a la página de configuración del webhook saliente en **E-SMART360**.
2. En el campo **Webhook Outbound URL**, **pega la URL** que copiaste de Zapier.
3. Asegúrate de haber seleccionado los datos que deseas enviar:
   - ✅ **Subscriber Name** (Nombre del Suscriptor)
   - ✅ **Phone Number** (Número de Teléfono)
   - ✅ **Input Flow Data** (Datos del Flujo de Entrada)
4. Haz clic en el botón **Save Webhook** (Guardar Webhook).

![Completando la configuración del webhook en E-SMART360]


> ¡La conexión está establecida! Ahora, cada vez que un usuario complete el flujo de entrada de datos, E-SMART360 enviará automáticamente los datos a la URL del webhook de Zapier.

## 5: Enviar Datos de Prueba desde E-SMART360 a Zapier

Para verificar que la conexión funciona correctamente, vamos a enviar datos de prueba.

1. Abre **WhatsApp** en tu teléfono.
2. Escribe la **palabra clave** que activa el bot con flujo de entrada.
3. El bot te pedirá tu **dirección de correo electrónico**.
4. Proporciona un correo electrónico de prueba.

![Envío de datos de prueba desde WhatsApp]

5. Ahora, regresa a **Zapier** (mantén abierta la pestaña donde creaste el Zap).
6. Haz clic en el botón **Test Trigger** (Probar Disparador).


> Al hacer clic en **Test Trigger**, Zapier buscará los datos más recientes recibidos en la URL del webhook. Debería mostrar la información que acabas de enviar desde WhatsApp.

7. Zapier mostrará los datos recolectados:
   - **Subscriber Name** (Nombre del usuario)
   - **Chat ID** (Número de teléfono)
   - **User Input Flow Data** (Respuesta del usuario, en este caso, el correo electrónico)

![Datos recolectados mostrados en Zapier]


> ¡Los datos están fluyendo correctamente desde E-SMART360 a Zapier! Ahora podemos configurar qué hacer con estos datos.

## 6: Configurar una Acción Automatizada en Zapier

Ahora que los datos llegan a Zapier, vamos a configurar una **acción**. En este ejemplo, enviaremos un **correo electrónico** con los datos recolectados usando **Email by Zapier**.

### Configurar el Módulo de Acción

1. Después de ver los datos de prueba, haz clic en el botón **Continue** (Continuar) en Zapier.

![Botón Continue en Zapier]

2. Aparecerá un formulario para seleccionar la aplicación de acción. Selecciona **Email by Zapier**.

![Selección de Email by Zapier como acción]

3. En el campo **Event** (Evento), selecciona **Send Outbound Email** (Enviar Correo Electrónico Saliente).

![Selección del evento Send Outbound Email]

4. Haz clic en **Continue**.

### Completar los Detalles del Correo Electrónico

1. En el campo **To** (Para), selecciona el **User Input Data - Answer** (Respuesta del Flujo de Entrada de Usuario). Este es el correo electrónico que el usuario proporcionó en WhatsApp.
2. En el campo **Subject** (Asunto), escribe un asunto, por ejemplo: *"Gracias por suscribirte — Hemos recibido tu información"*.
3. En el campo **Body** (Cuerpo del correo), redacta el contenido del mensaje. Puedes utilizar los **datos recolectados** para personalizarlo. Por ejemplo:

```
Hola {{Subscriber Name}},

¡Gracias por proporcionarnos tu dirección de correo electrónico ({{User Input Data Answer}})!

Hemos recibido tus datos correctamente a través de nuestro chatbot de WhatsApp. Te mantendremos informado sobre nuestras últimas novedades y promociones.

Si tienes alguna pregunta, no dudes en contactarnos.

Saludos,
El equipo de E-SMART360
```


> **Personalización de datos:** Zapier te permite insertar campos dinámicos (como el nombre del suscriptor y el correo electrónico) utilizando las etiquetas que aparecen en el panel de configuración. Esto hace que cada correo sea único y personalizado para cada usuario.

![Configuración del cuerpo del correo electrónico con datos dinámicos]


> Asegúrate de que la dirección de correo que uses para enviar esté verificada en Zapier. Los planes gratuitos de Email by Zapier tienen límites de envío. Para envíos masivos, considera usar otras aplicaciones como Gmail, Outlook o SendGrid.

4. Haz clic en **Continue**.
5. Haz clic en **Test Action** (Probar Acción) para enviar un correo electrónico de prueba.

![Botón Test Action en Zapier]

6. **Revisa tu bandeja de entrada** para verificar que el correo electrónico ha llegado correctamente.

![Correo electrónico recibido correctamente]


> ¡La automatización funciona! El correo electrónico se ha enviado correctamente con los datos recolectados a través del chatbot de WhatsApp.

## 7: Publicar el Zap

Una vez que la prueba ha sido exitosa, es momento de **publicar el Zap** para que funcione en producción.

1. Regresa a la página de Zapier.
2. Haz clic en el botón **Publish Zap** (Publicar Automatización).

![Botón Publish Zap]

3. Se abrirá un cuadro de confirmación. Haz clic en **Publish & Turn On** (Publicar y Activar).

![Confirmación de publicación del Zap]

4. ¡Tu Zap ahora está **publicado y activo**! Cada vez que un usuario complete el flujo de entrada en WhatsApp, se enviará automáticamente un correo electrónico con sus datos.

![Zap publicado y funcionando]


> **¡Felicidades!** Has conectado E-SMART360 con Zapier exitosamente. Ahora los datos que tus clientes proporcionan a través de WhatsApp se envían automáticamente a cualquier aplicación que soporte Zapier.

---

## Casos de Uso Avanzados con Zapier

La integración de E-SMART360 con Zapier abre un mundo de posibilidades. Aquí tienes algunos casos de uso adicionales:



### 📧 Marketing por Correo Electrónico

Conecta E-SMART360 con **Mailchimp**, **ActiveCampaign** o **ConvertKit**. Cuando un usuario proporciona su correo electrónico en WhatsApp, se agrega automáticamente a tu lista de suscriptores y recibe un correo de bienvenida personalizado.
  
### 📊 Gestión de Clientes en CRM

Conecta con **Salesforce**, **HubSpot**, **Pipedrive** o **Zoho CRM**. Cada interacción en WhatsApp puede crear un nuevo contacto, actualizar un registro existente o crear un nuevo deal automáticamente, sin intervención manual.
  
### 📋 Hojas de Cálculo Automatizadas

Conecta con **Google Sheets** o **Airtable**. Cada respuesta de tus clientes en WhatsApp se añade automáticamente como una nueva fila en tu hoja de cálculo, perfecto para llevar un registro de leads, encuestas o formularios de contacto.
  
### 📅 Gestión de Citas y Calendarios

Conecta con **Google Calendar**, **Calendly** o **Acuity Scheduling**. Cuando un cliente solicita una cita en WhatsApp, se puede crear automáticamente un evento en tu calendario y enviar una confirmación.
  

### 💬 Notificaciones en Tiempo Real

Conecta con **Slack**, **Microsoft Teams** o **Discord**. Recibe notificaciones instantáneas en tu equipo cada vez que un cliente completa un formulario o solicita información a través de WhatsApp.
  
### 🛒 Automatización de E-commerce

Conecta con **Shopify**, **WooCommerce** o **Magento**. Cuando un cliente consulta sobre un producto en WhatsApp, puedes crear automáticamente un carrito abandonado, enviar un enlace de pago o actualizar el estado de un pedido.
  

---

## Preguntas Frecuentes


### ¿Cuál es el propósito de conectar E-SMART360 con Zapier?

Conectar E-SMART360 con Zapier te permite enviar automáticamente los datos recopilados por tus chatbots de WhatsApp a cientos de aplicaciones de terceros. Esto elimina la necesidad de transferir datos manualmente y te permite crear flujos de trabajo automatizados completos. Por ejemplo, cuando un cliente proporciona su correo electrónico en WhatsApp, Zapier puede agregarlo automáticamente a tu lista de Mailchimp, crear un contacto en HubSpot y enviar un correo de bienvenida, todo sin intervención humana.

### ¿Qué tipo de datos se pueden enviar desde E-SMART360 a Zapier?

Puedes enviar los siguientes datos:
  - **Nombre del suscriptor** (si está disponible en el chat)
  - **Número de teléfono** (actúa como ID del chat)
  - **Datos del flujo de entrada de usuario** (respuestas a preguntas, como correo electrónico, número de teléfono, texto libre, etc.)
  - **Etiquetas** y otros metadatos relacionados con el chatbot

  Estos datos se envían en formato JSON a través del webhook saliente y Zapier los procesa para que puedas utilizarlos en cualquier acción posterior.

### ¿Necesito conocimientos de programación para integrar E-SMART360 con Zapier?

No, absolutamente no. La integración es **completamente sin código (no-code)**. Todo el proceso se realiza mediante:
  1. La interfaz visual de arrastrar y soltar del editor de flujos de E-SMART360
  2. La configuración punto y clic de Zapier

  No es necesario escribir código, configurar servidores ni gestionar APIs manualmente. Si puedes usar un editor visual y copiar y pegar una URL, puedes realizar esta integración.

### ¿Qué es un User Input Flow (Flujo de Entrada de Usuario) en E-SMART360?

Un **User Input Flow** es un tipo de campaña de chatbot diseñada para recolectar datos estructurados de los usuarios durante una conversación. A diferencia de un chatbot estándar que ofrece respuestas predefinidas, el flujo de entrada hace preguntas al usuario y almacena sus respuestas como datos estructurados. Por ejemplo, puedes crear un flujo que pregunte el nombre, correo electrónico y número de teléfono, y cada respuesta se guarda como un campo específico que luego puedes enviar a Zapier.

### ¿Qué disparador (trigger) de Zapier debo usar para esta integración?

Debes usar **Webhooks by Zapier** con el evento **Catch Hook**. Este disparador crea una URL única que puede recibir datos de cualquier fuente externa. Cuando E-SMART360 envía los datos a esta URL a través del webhook saliente, Zapier los captura y los pone a disposición para las acciones posteriores en tu Zap. No necesitas configurar autenticación adicional; simplemente pegas la URL que genera Zapier en el campo correspondiente de E-SMART360.

### ¿Qué acciones puedo realizar en Zapier después de recibir datos de E-SMART360?

Las posibilidades son prácticamente ilimitadas, ya que Zapier se conecta con más de 5000 aplicaciones. Algunas acciones populares incluyen:
  - **Enviar correos electrónicos** con Gmail, Outlook, SendGrid o Email by Zapier
  - **Agregar contactos a CRMs** como HubSpot, Salesforce, Pipedrive o Zoho
  - **Actualizar hojas de cálculo** en Google Sheets, Excel o Airtable
  - **Crear tareas** en Trello, Asana, ClickUp o Monday.com
  - **Enviar mensajes** a Slack, Microsoft Teams o Telegram
  - **Procesar pagos** con Stripe, PayPal o Square
  - **Gestionar campañas** en Mailchimp, ActiveCampaign o Sendinblue

### ¿La integración está limitada solo a Zapier?

No. E-SMART360 también se puede integrar con otras plataformas de automatización como:
  - **Pabbly Connect**: Una alternativa a Zapier que también permite crear flujos de trabajo automatizados
  - **Make (anteriormente Integromat)**: Una potente herramienta de automatización visual
  - **n8n**: Una plataforma de automatización de código abierto
  - **Cualquier sistema que acepte datos vía HTTP API o webhook**

  El principio es el mismo: creas un flujo de entrada de usuario, configuras un webhook saliente con la URL proporcionada por la plataforma de automatización, y los datos fluyen automáticamente.

### ¿Qué hago si Zapier no está disponible en mi país?

Si Zapier no está disponible o prefieres usar otra herramienta, puedes utilizar alternativas como:
  - **Pabbly Connect**: Ofrece un plan gratuito muy generoso con 100 operaciones por mes
  - **Make (Integromat)**: Excelente para flujos de trabajo visuales complejos
  - **n8n**: Puedes instalarlo en tu propio servidor para tener control total
  - **Power Automate**: La solución de Microsoft para automatización empresarial

  Todas estas plataformas funcionan con webhooks y pueden recibir datos de E-SMART360 de la misma manera que Zapier.

---

## Ejemplos Prácticos Adicionales



### 🎯 Captura de Leads Cualificados

<strong>Problema:</strong> Recibes muchos leads de WhatsApp pero pierdes tiempo calificándolos manualmente.<br/><br/>
    <strong>Solución con E-SMART360 + Zapier:</strong>
    1. Crea un flujo de entrada que pregunte: nombre, presupuesto, plazo y necesidades específicas
    2. Configura un webhook saliente que envíe los datos a Zapier
    3. En Zapier, conecta con Google Sheets para registrar el lead
    4. Agrega una condición: si el presupuesto es > $500, envía una notificación a Slack al equipo de ventas
    5. Si el presupuesto es < $500, envía un correo automatizado con información de autoservicio<br/><br/>
    <strong>Resultado:</strong> Leads calificados automáticamente sin intervención humana.
  
### 📝 Encuestas con Seguimiento Automático

<strong>Problema:</strong> Realizas encuestas de satisfacción pero no das seguimiento a respuestas negativas.<br/><br/>
    <strong>Solución con E-SMART360 + Zapier:</strong>
    1. Crea un flujo de entrada con preguntas de satisfacción (1-5)
    2. Configura el webhook saliente hacia Zapier
    3. En Zapier, conecta con Airtable para almacenar todas las respuestas
    4. Agrega una condición: si la calificación es ≤ 2, envía un correo al equipo de soporte con los datos del cliente
    5. Si la calificación es ≥ 4, envía un mensaje de agradecimiento automatizado en WhatsApp<br/><br/>
    <strong>Resultado:</strong> Mejora la satisfacción del cliente dando seguimiento inmediato a feedback negativo.
  
### 🔄 Sincronización Multiaplicación

<strong>Problema:</strong> Los datos de tus clientes están dispersos en múltiples sistemas y pierdes tiempo sincronizándolos.<br/><br/>
    <strong>Solución con E-SMART360 + Zapier:</strong>
    1. Crea un flujo de entrada que capture datos completos del cliente
    2. Configura el webhook saliente hacia Zapier
    3. En Zapier, usa el modo "Multi-Step Zap" para:
       - Primer paso: Crear/actualizar contacto en HubSpot
       - Segundo paso: Agregar el correo a Mailchimp
       - Tercer paso: Crear una tarea en Asana para el equipo de ventas
       - Cuarto paso: Añadir una fila en Google Sheets para reportes<br/><br/>
    <strong>Resultado:</strong> Un solo formulario en WhatsApp actualiza todos tus sistemas automáticamente.
  
### 📱 Notificaciones de Pedidos en Tiempo Real

<strong>Problema:</strong> Tus clientes no saben cuándo su pedido cambia de estado y te llaman constantemente.<br/><br/>
    <strong>Solución con E-SMART360 + Zapier:</strong>
    1. Cuando WooCommerce o Shopify cambia el estado de un pedido, envía un webhook a Zapier
    2. Zapier recibe los datos del pedido (número, estado, nombre del cliente)
    3. Zapier envía una solicitud HTTP con los datos del pedido al webhook saliente de E-SMART360
    4. E-SMART360 recibe los datos y envía un mensaje automatizado al cliente por WhatsApp con el estado actualizado<br/><br/>
    <strong>Resultado:</strong> Clientes informados en tiempo real sin necesidad de llamar.
  
---

## Solución de Problemas Comunes


### El bot no responde en WhatsApp

**Posibles causas y soluciones:**
  
  - **Verifica la conexión a WhatsApp Cloud API:** Asegúrate de que tu número de teléfono esté correctamente conectado y verificado en la sección de WhatsApp del panel de control.
  - **Revisa el Trigger:** Confirma que la palabra clave del Trigger esté configurada correctamente y que el Trigger esté conectado al flujo de entrada en el editor visual.
  - **Estado del bot:** Verifica que el bot esté en estado "Publicado" o "Activo". Si está en modo borrador, no procesará mensajes.
  - **Componentes desconectados:** Revisa que todos los componentes (Start Bot Flow, Trigger, Question, Postback, Text) estén correctamente conectados mediante sus nodos de entrada y salida.
  - **Límites de WhatsApp:** Si has enviado muchos mensajes de prueba, es posible que hayas alcanzado el límite de mensajes del tier de WhatsApp Business API. Revisa tu límite actual en el panel de configuración.

### Zapier no detecta los datos enviados desde E-SMART360

**Sigue estos pasos:**
  1. **Verifica que el webhook esté guardado:** Ve a Outbound Webhook en E-SMART360 y confirma que el webhook aparezca en la lista con la URL correcta de Zapier.
  2. **Reenvía los datos:** Vuelve a WhatsApp, escribe la palabra clave y proporciona nuevamente tu correo electrónico. Luego haz clic en "Test Trigger" en Zapier.
  3. **Espera unos segundos:** A veces hay un pequeño retardo en la transmisión. Espera 10-15 segundos entre el envío en WhatsApp y la prueba en Zapier.
  4. **Verifica la URL:** Confirma que la URL del webhook esté completa y sin espacios adicionales. La URL debe comenzar con "https://hooks.zapier.com/".
  5. **Compatibilidad de navegador:** Si usas un navegador con bloqueador de anuncios, prueba desactivándolo temporalmente, ya que algunos bloqueadores pueden interferir con la comunicación entre plataformas.

### El correo electrónico de prueba no llega

**Posibles causas:**
  - **Revisa la carpeta de spam:** Los correos automatizados suelen terminar en spam. Agrega la dirección de remitente a tus contactos.
  - **Límites de Email by Zapier:** Los planes gratuitos de Zapier tienen un límite de correos que puedes enviar. Revisa tu plan y las tareas restantes.
  - **Configuración incorrecta del campo TO:** Asegúrate de haber seleccionado el campo correcto en "To". Debe ser "User Input Data Answer" o el campo que contenga la dirección de correo recolectada.
  - **Formato de correo inválido:** Si el usuario ingresó un correo en formato incorrecto, Zapier no podrá enviar el email. Verifica que la validación de tipo "Email" esté activada en el flujo de entrada.
  - **Fallo de autenticación:** Si usas Gmail u Outlook como servicio de correo, verifica que la conexión esté autorizada y que no haya expirado el token de acceso.

### El webhook saliente no aparece o no se guarda

**Solución:**
  1. **Actualiza la página del Bot Manager** antes de hacer clic en "Outbound Webhook". A veces la interfaz no refleja los cambios más recientes.
  2. **Verifica los permisos de tu cuenta:** Algunos roles de usuario en E-SMART360 tienen restricciones para crear webhooks. Asegúrate de tener permisos de administrador o los permisos adecuados.
  3. **Navegador:** Prueba en una ventana de incógnito o en otro navegador para descartar problemas de caché.
  4. **Campos obligatorios:** Asegúrate de completar todos los campos obligatorios: nombre del webhook, URL y al menos uno de los campos de datos a enviar.

### ¿Puedo usar varias URLs de webhook (varios destinos)?

**Respuesta corta:** Sí, pero cada webhook es independiente.
  
  Si necesitas enviar los mismos datos a múltiples destinos (por ejemplo, a Zapier y a otro sistema), puedes crear **múltiples webhooks salientes** en E-SMART360, cada uno con una URL diferente. Sin embargo, ten en cuenta que deberás configurar cada webhook por separado.
  
  Alternativamente, puedes crear un Zap multi-paso en Zapier que envíe los datos a varios destinos desde un solo punto de entrada.

### ¿Zapier cobra por usar esta integración?

Zapier tiene un **plan gratuito** que incluye 100 tareas por mes, lo cual es suficiente para probar la integración y para uso ligero. Los planes de pago ofrecen más tareas, Zaps multi-paso, y acceso a aplicaciones premium.
  
  La integración en sí misma no tiene costo adicional. E-SMART360 no cobra por el uso del webhook saliente. Solo pagas por tu plan de E-SMART360 y por el plan de Zapier que elijas.

### ¿Qué alternativas a Zapier existen?

Existen varias alternativas a Zapier que también se integran con E-SMART360 mediante webhooks:
  
  - **Pabbly Connect:** Ofrece 100 operaciones por mes en su plan gratuito. Su estructura es similar a Zapier pero generalmente más económica.
  - **Make (anteriormente Integromat):** Excelente para flujos de trabajo visuales más complejos. Ofrece un plan gratuito con 1000 operaciones por mes.
  - **n8n:** Plataforma de automatización de código abierto que puedes instalar en tu propio servidor. No tiene límites de tareas más allá de los recursos de tu servidor.
  - **Power Automate (Microsoft):** Ideal si ya usas el ecosistema de Microsoft 365. Se integra nativamente con SharePoint, Teams y Office.
  - **Workato:** Plataforma empresarial con capacidades avanzadas de integración y transformación de datos.
  
  Todas estas plataformas funcionan con webhooks y pueden recibir datos de E-SMART360 de la misma manera que Zapier.

### ¿Cuánto tiempo tarda en propagarse un cambio en el flujo de entrada?

Los cambios que realizas en el flujo de entrada de E-SMART360 se aplican **inmediatamente** después de hacer clic en "Save". No hay tiempo de propagación. Sin embargo, si tienes dudas, puedes actualizar la página y verificar que los cambios se hayan guardado correctamente.

  Para el webhook saliente, los cambios también son instantáneos. Una vez que guardas la URL y seleccionas los campos, el próximo usuario que complete el flujo activará el webhook automáticamente.

### ¿Puedo crear flujos de entrada con múltiples preguntas?

Sí, puedes crear flujos de entrada con **tantas preguntas como necesites**. Simplemente añade más componentes "New Question" y conéctalos en secuencia. Cada pregunta puede tener un tipo de respuesta diferente (Email, Number, Text, Date, etc.).

  Los datos de todas las preguntas se enviarán en el payload JSON del webhook, y Zapier los mostrará como campos separados que puedes utilizar en tus acciones.

  **Ejemplo de flujo multipregunta:**
  1. ¿Cuál es tu nombre? → Text
  2. ¿Cuál es tu correo electrónico? → Email
  3. ¿Cuál es tu número de teléfono? → Phone
  4. ¿Cuál es tu presupuesto aproximado? → Number

### ¿Puedo personalizar el mensaje de la URL del webhook en caso de error?

E-SMART360 maneja los errores de webhook de forma interna. Si la URL del webhook no está disponible o devuelve un error, el sistema lo registrará en los logs del bot. Puedes revisar estos registros en el panel de control para identificar problemas.

  Para una solución más robusta, considera configurar un sistema de reintentos o una cola de mensajes en tu infraestructura. Sin embargo, para la mayoría de los casos de uso, el webhook saliente de E-SMART360 es más que suficiente.

---

## Diagrama del Flujo Completo

A continuación, se muestra un diagrama visual de cómo fluyen los datos desde que el usuario escribe en WhatsApp hasta que Zapier ejecuta la acción automatizada:

```mermaid
flowchart TD
    A[Usuario escribe palabra clave en WhatsApp] --> B[¡Trigger del bot se activa en E-SMART360]
    B --> C[¡Bot pregunta: "Por favor, proporciona tu email"]
    C --> D[Usuario responde con su dirección de correo]
    D --> E[¡E-SMART360 valida y almacena la respuesta]
    E --> F[¡E-SMART360 envía payload JSON al webhook de Zapier]
    F --> G[Zapier recibe los datos con Catch Hook]
    G --> H[Zapier procesa los datos y ejecuta la acción]
    H --> I[Destino final: Email, CRM, Google Sheets, Slack, etc.]
    
    style A fill:#25D366,color:#fff
    style E fill:#667eea,color:#fff
    style F fill:#667eea,color:#fff
    style G fill:#FF4A00,color:#fff
    style H fill:#FF4A00,color:#fff
    style I fill:#4CAF50,color:#fff
```

Este diagrama representa el flujo completo de datos desde el momento en que el usuario interactúa con el chatbot en WhatsApp hasta que la información llega a su destino final a través de Zapier.

---

## Configuraciones Avanzadas

### Filtrado por Etiquetas y Segmentación

Puedes combinar el webhook saliente con las etiquetas de E-SMART360 para enviar datos a diferentes Zaps según el tipo de interacción. Por ejemplo:



#### Estrategia de segmentación

```
Etiqueta "lead-caliente" → Zap 1: Enviar a HubSpot + Slack ventas
Etiqueta "lead-frio"    → Zap 2: Enviar a Mailchimp + Google Sheets
Etiqueta "soporte"      → Zap 3: Enviar a Zendesk + correo al equipo
```

### Múltiples Preguntas en un Solo Flujo

Para recolectar más información en una sola interacción, puedes añadir preguntas secuenciales:


### Pregunta 1: Nombre completo

Tipo: **Free Keyboard Input** → Reply Type: **Text**
    
    Pregunta: "¿Cuál es tu nombre completo?"
  
### Pregunta 2: Correo electrónico

Tipo: **Free Keyboard Input** → Reply Type: **Email**
    
    Pregunta: "¿Cuál es tu dirección de correo electrónico?"
  
### Pregunta 3: Número de teléfono

Tipo: **Free Keyboard Input** → Reply Type: **Phone**
    
    Pregunta: "¿Cuál es tu número de teléfono de contacto?"
  
### Pregunta 4: Mensaje o consulta

Tipo: **Free Keyboard Input** → Reply Type: **Text**
    
    Pregunta: "¿En qué podemos ayudarte? Cuéntanos brevemente tu consulta."
  
### Mensaje de confirmación final

Texto: "¡Gracias {{nombre}}! Hemos recibido tu consulta. Te contactaremos al {{telefono}} o al {{email}} en las próximas 24 horas."
  
El payload JSON enviado a Zapier incluirá todas las respuestas:



#### Payload con múltiples respuestas

```json
{
  "subscriber_name": "María García",
  "phone_number": "521234567890",
  "input_flow_data": {
    "¿Cuál es tu nombre completo?": "María García López",
    "¿Cuál es tu dirección de correo electrónico?": "maria@ejemplo.com",
    "¿Cuál es tu número de teléfono de contacto?": "521234567890",
    "¿En qué podemos ayudarte?": "Quiero información sobre el plan premium para mi negocio de comercio electrónico"
  }
}
```

### Uso de Campos Personalizados en el Webhook

E-SMART360 permite añadir **custom fields** (campos personalizados) a los suscriptores. Estos campos también pueden enviarse a través del webhook saliente:

- **Campos del suscriptor:** nombre, teléfono, correo
- **Campos personalizados:** empresa, cargo, ubicación, preferencias
- **Datos del flujo de entrada:** respuestas a preguntas
- **Metadatos:** fecha, hora, etiquetas asignadas


> Para utilizar campos personalizados, primero debes crearlos en la sección **Subscriber Manager** → **Custom Fields** de E-SMART360. Una vez creados, se mostrarán como opciones seleccionables en la configuración del webhook saliente.

---

## Mejores Prácticas

### 1. Prueba Siempre Antes de Publicar

Antes de publicar tu Zap, realiza al menos 3 pruebas con diferentes datos para asegurarte de que:
- El bot responde correctamente a la palabra clave
- Las preguntas se muestran en el orden correcto
- La validación de tipos de respuesta funciona (Email, Phone, etc.)
- El webhook envía los datos completos a Zapier
- La acción en Zapier se ejecuta sin errores

### 2. Monitorea el Consumo de Tareas en Zapier

Zapier mide el uso en "tareas". Cada vez que un webhook recibe datos y se ejecuta una acción, cuenta como una tarea. Esto incluye también las pruebas. Revisa tu panel de Zapier para no exceder los límites de tu plan.

### 3. Usa Nombres Descriptivos para tus Zaps

Cuando tengas múltiples automatizaciones, usa nombres claros como:
- "Lead desde WhatsApp → HubSpot + Slack"
- "Encuesta satisfacción → Airtable + Email equipo"
- "Formulario registro → Mailchimp + Google Sheets"

### 4. Documenta tus Flujos

Mantén un registro de qué flujos de entrada están conectados a qué webhooks y qué Zaps procesan los datos. Esto facilita el mantenimiento y la solución de problemas.

### 5. Configura Alertas de Error

En Zapier, puedes configurar notificaciones de error para recibir un correo cuando un Zap falla. Esto te permite reaccionar rápidamente ante cualquier problema.

---

## Preguntas Frecuentes Adicionales


### ¿Puedo usar un solo flujo de entrada para activar múltiples webhooks?

Sí, es posible tener múltiples webhooks salientes apuntando a diferentes URLs de Zapier (o a la misma URL de un Zap multi-paso). Cada webhook se configura de forma independiente y se activa cuando el usuario completa el flujo de entrada. Esto es útil si necesitas que los mismos datos lleguen a diferentes destinos o si quieres separar la lógica de procesamiento. Sin embargo, ten en cuenta que cada webhook cuenta como una llamada independiente.

### ¿Qué sucede si la URL del webhook de Zapier cambia?

Si la URL del webhook cambia (por ejemplo, porque creaste un nuevo Zap), debes actualizar manualmente la URL en la configuración del webhook saliente de E-SMART360. Te recomendamos:
  1. Mantener un registro de las URLs activas en un documento.
  2. Probar el nuevo webhook antes de eliminar el anterior.
  3. Actualizar la URL en E-SMART360 inmediatamente después de crear el nuevo Zap.

### ¿E-SMART360 guarda un registro de los datos enviados por webhook?

Sí, E-SMART360 mantiene registros de las actividades del bot, incluyendo los datos enviados a través de webhooks. Puedes acceder a estos registros desde el panel de control en la sección de logs o historial de actividad. Esto es útil para depurar problemas o verificar que los datos se están enviando correctamente.

### ¿Puedo enviar datos a Zapier solo cuando se cumpla una condición específica?

Actualmente, el webhook saliente de E-SMART360 se activa cada vez que un usuario completa un flujo de entrada, sin condiciones adicionales. Sin embargo, puedes implementar la lógica condicional dentro de Zapier usando filtros (Filters). Zapier te permite agregar condiciones como:
  - "Continuar solo si el campo X contiene Y"
  - "Continuar solo si el número es mayor que Z"
  - "Saltar si el campo está vacío"
  
  Esto te permite procesar selectivamente los datos según criterios específicos sin modificar la configuración del webhook en E-SMART360.

### ¿Puedo usar E-SMART360 con otras herramientas de automatización además de Zapier?

Sí, el webhook saliente de E-SMART360 funciona con cualquier plataforma que acepte datos a través de webhooks HTTP POST. Esto incluye:
  - **Pabbly Connect**: Alternativa con plan gratuito generoso
  - **Make (Integromat)**: Automatización visual avanzada
  - **n8n**: Código abierto, autoalojado
  - **Power Automate**: Ecosistema Microsoft
  - **Prosperna**: Para negocios en Filipinas
  - **Sistemas personalizados**: Cualquier API que acepte JSON por POST
  
  El proceso de configuración es esencialmente el mismo: obtienes una URL de webhook de la plataforma, la pegas en la configuración del webhook saliente de E-SMART360, y listo.

### ¿Cuántos datos puedo enviar en cada llamada al webhook?

El payload enviado por E-SMART360 incluye el nombre del suscriptor, el número de teléfono y las respuestas del flujo de entrada. No hay un límite estricto en la cantidad de datos, pero se recomienda mantener los flujos de entrada con un máximo de 10-15 preguntas para garantizar un rendimiento óptimo y una buena experiencia de usuario en WhatsApp.

  Si necesitas recolectar una gran cantidad de datos, considera dividir la recolección en múltiples flujos de entrada o usar formularios de WhatsApp (WhatsApp Flows) como complemento.

### ¿Qué formato de datos usa el webhook?

El webhook saliente de E-SMART360 envía los datos en formato **JSON** (JavaScript Object Notation) a través de una petición **HTTP POST**. Este es el formato estándar para webhooks y es compatible con Zapier y todas las plataformas de automatización modernas.

  La estructura del JSON es simple y consistente, lo que facilita su procesamiento en cualquier plataforma.

---

## Conclusión

Has aprendido a conectar E-SMART360 con Zapier para enviar datos recolectados desde WhatsApp a cualquier aplicación de tu elección. Este flujo de trabajo te permite:

1. **Crear flujos de entrada de usuario** sin código para recolectar información estructurada
2. **Configurar webhooks salientes** para enviar datos automáticamente
3. **Conectar con Zapier** para acceder a miles de integraciones
4. **Automatizar acciones** como envío de correos, creación de contactos y más
5. **Publicar y gestionar** tus automatizaciones en producción

La combinación de E-SMART360 y Zapier elimina las barreras técnicas y te permite crear flujos de trabajo empresariales potentes sin necesidad de programar. Desde la captura de leads hasta la sincronización multicanal, las posibilidades son prácticamente ilimitadas.


> **¿Listo para el siguiente paso?** Explora otras integraciones de E-SMART360 como:
  - [Webhook Workflow: Automatiza tu negocio con WhatsApp](/recursos/webhook-workflow)
  - [Integración HTTP API externa](/recursos/http-api)
  - [Integración con WooCommerce y Shopify para e-commerce](/recursos/integraciones-ecommerce)
  - [Automatización de respuestas con Google Sheets](/recursos/google-sheets-automation)

---

## Recursos Adicionales



### 📖 Documentación de Zapier

Consulta la guía oficial de Zapier sobre Webhooks para aprender más sobre los diferentes tipos de eventos y cómo depurar problemas de conectividad.
  
### 🎥 Video Tutorial

Mira nuestro video tutorial paso a paso sobre cómo conectar E-SMART360 con Zapier. El video cubre cada paso en detalle con ejemplos visuales.
  
### 💡 Comunidad y Soporte

Únete a nuestra comunidad de usuarios para compartir experiencias, hacer preguntas y descubrir nuevas formas de automatizar tu negocio con E-SMART360.
