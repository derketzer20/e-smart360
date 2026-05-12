---
title: "Cómo crear un chatbot de WhatsApp gratis sin código"
description: "Guía completa paso a paso para crear un chatbot de WhatsApp profesional sin escribir una sola línea de código. Conecta tu número, diseña flujos de conversación con arrastrar y soltar, y automatiza respuestas para tu negocio."
section: "ecommerce"
order: 127
audience: ["cliente"]
platform: ["chatbots"]
useCase: ["ecommerce"]
source: "fulldoc"
sourceSlug: "2026-05-07-crear-chatbot-whatsapp-gratis-sin-codigo-esmart360"
canonicalGroup: "como-crear-un-chatbot-de-whatsapp-gratis-sin-codigo"
tags: ["ecommerce"]
staging: true
---
# Cómo crear un chatbot de WhatsApp gratis sin código


> Esta guía te mostrará cómo crear un chatbot de WhatsApp utilizando la plataforma E-SMART360, sin necesidad de conocimientos de programación. Conecta tu número de WhatsApp Business API, diseña flujos de conversación visuales y lanza tu bot en minutos.

## ¿Qué vas a lograr con esta guía?

Al finalizar este tutorial tendrás un chatbot de WhatsApp completamente funcional que podrá:

- Responder automáticamente a preguntas frecuentes de tus clientes
- Calificar y capturar leads calificados las 24 horas del día
- Enviar mensajes multimedia, catálogos y botones interactivos
- Derivar conversaciones complejas a un agente humano cuando sea necesario
- Ejecutarse sin intervención manual, ahorrándote horas de trabajo cada semana


> **Tiempo estimado:** De 15 a 30 minutos. No necesitas saber programar. Solo necesitas una cuenta de E-SMART360 y un número de WhatsApp Business activo.

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente:

1.  Una cuenta en **E-SMART360** — puedes registrarte de forma gratuita
2.  Un número de teléfono registrado en **WhatsApp Business API** (a través de Meta / Facebook Business Manager)
3.  Tu **Business Account ID** y **Access Token** de WhatsApp Cloud API
4.  Un negocio, proyecto o sitio web donde implementar el chatbot


> Si aún no tienes tu número conectado a WhatsApp Business API, revisa nuestra guía de conexión antes de continuar. Necesitarás el Business Account ID y el Access Token para el paso 1 de este tutorial.

---

## Paso 1: Iniciar sesión y conectar tu cuenta de WhatsApp

### 1.1 Crear o iniciar sesión en tu cuenta

1.  Visita **E-SMART360** y haz clic en el botón **"Comenzar gratis"** o en **"Iniciar sesión"**.
2.  Completa los campos del formulario de registro o ingresa con tus credenciales existentes.
3.  Una vez dentro, accede al **Panel de control** (Dashboard).

### 1.2 Conectar tu número de WhatsApp

Desde el panel de control:

1.  Haz clic en el menú de navegación **"Conectar cuenta"**.
2.  Ingresa tu **Business Account ID** en el campo correspondiente.
3.  Ingresa tu **Access Token** de WhatsApp Cloud API.
4.  Haz clic en el botón **"Conectar"**.


> Si el ID y el token son válidos, verás un mensaje de notificación indicando que la conexión fue exitosa.

> **Nota importante:** No uses el token de acceso temporal que genera Meta por defecto. Es recomendable generar un token permanente desde tu cuenta de Facebook Business. Si no sabes cómo obtener estos datos, consulta nuestra guía sobre configuración de WhatsApp Cloud API.


### ¿Dónde encuentro mi Business Account ID y Access Token?

El Business Account ID se encuentra en tu **Meta Business Manager**, dentro de la configuración de tu cuenta de WhatsApp Business. El Access Token se genera desde la sección de **API de WhatsApp** en el panel de desarrolladores de Meta. Puedes crear un token permanente desde el panel de E-SMART360 para evitar tener que renovarlo periódicamente.

---

## Paso 2: Acceder al constructor visual de flujos

Una vez que tu cuenta de WhatsApp está conectada, es momento de construir el chatbot.

1.  Desde el **Panel de control**, haz clic en el menú **"Bot Manager"**.
2.  En **"WhatsApp Bot Manager"**, selecciona la cuenta de bot que deseas configurar.
3.  Haz clic en el botón **"Bot Reply"**.
4.  Finalmente, haz clic en el botón **"Crear"**.


> Al hacer clic en "Crear" serás llevado al **"Visual Flow Bot Builder Canvas"**, un lienzo visual donde diseñarás tu chatbot conectando componentes como piezas de un rompecabezas.

### Conociendo el lienzo de trabajo

El editor visual cuenta con un menú de **11 componentes** ubicado en el lado izquierdo del lienzo. Estos son:

| Componente | Descripción |
|---|---|
| **Texto** | Mensajes de texto plano |
| **Imagen** | Envío de imágenes |
| **Audio** | Mensajes de voz o audio |
| **Video** | Clips de video |
| **Archivo** | Documentos PDF, Word, etc. |
| **Interactivo** | Botones y listas interactivas |
| **Condición** | Flujos condicionales (sí/no) |
| **Nueva Secuencia** | Secuencias temporizadas |
| **User Input Flow** | Captura de datos del usuario |
| **Disparador (Trigger)** | Palabras clave que activan el bot |
| **Post-back** | Acciones posteriores |

En la esquina superior derecha del lienzo encontrarás cinco botones:



### 🔍 Probar

Te permite enviar el bot a un suscriptor de prueba para verificar su funcionamiento.
  
### ⬅️ Volver

Regresa al panel de gestión de bots.
  
### 🔄 Reordenar

Organiza automáticamente los componentes en el lienzo.
  
---

## Paso 3: Configurar el bot en el lienzo visual

### 3.1 Nombrar tu bot

1.  En el lienzo, localiza el componente **"Start Bot Flow"** (Inicio del flujo del bot).
2.  Haz **doble clic** sobre él para abrir el modal **"Configure Reference"**.
3.  En el campo **"Title"** (Título), escribe un nombre descriptivo para tu bot, por ejemplo: *"Bot de Atención al Cliente"*.
4.  Opcionalmente, puedes asignar una **etiqueta** y seleccionar una **secuencia**.
5.  Haz clic en **"Ok"** para guardar.

### 3.2 Agregar componentes al flujo

Para añadir mensajes al bot:

1.  Arrastra el cursor desde el conector **"Next"** del componente "Start Bot Flow".
2.  Suelta el cursor en el área del lienzo; aparecerá una **lista de componentes**.
3.  Selecciona el tipo de componente que deseas agregar: Texto, Imagen, Audio, Video, etc.

Por ejemplo, si seleccionas el componente **"Imagen"**, este aparecerá en el lienzo. Al hacer doble clic sobre él, se abrirá un formulario de configuración donde podrás:

- Subir la URL de la imagen
- Agregar un texto alternativo
- Configurar botones de post-back o acciones
- Personalizar la interfaz de usuario

### 3.3 Configurar los disparadores (Triggers)

Los disparadores son palabras clave que activan el bot cuando un usuario las escribe en WhatsApp.

1.  Desde el menú de documentos, selecciona el componente **"Trigger"**.
2.  Arrástralo al lienzo y suéltalo.
3.  Haz **doble clic** sobre el trigger para abrir el modal de configuración.
4.  Ingresa una palabra clave como **"Hola"**, **"Inicio"**, **"Menú"** o **"Ayuda"**.
5.  Conecta este trigger al conector **"Trigger"** del componente "Start Bot Flow".


> **Estrategia de palabras clave:** Configura múltiples triggers para cubrir variaciones. Por ejemplo, si tu negocio es un restaurante, puedes configurar triggers como "menú", "horario", "reservar", "ubicación". El bot responderá de forma diferente según la intención del cliente.

### 3.4 Tipos de coincidencia de palabras clave

E-SMART360 ofrece dos formas de activar tu bot mediante palabras clave:



### Coincidencia exacta

El bot solo se activa cuando el usuario escribe exactamente la palabra clave configurada. Por ejemplo, si configuras "Hola", solo responderá cuando el usuario escriba exactamente "Hola". Esto es útil para comandos específicos que no deben tener falsos positivos.

### Coincidencia parcial

El bot se activa cuando el mensaje del usuario **contiene** la palabra clave, sin importar el contexto. Por ejemplo, si configuras "Hola", el bot responderá tanto a "Hola" como a "Hola, necesito ayuda" o "Hola, buenos días". Esta opción es ideal para capturar más interacciones.

---

## Paso 4: Construir flujos de conversación avanzados

Ahora que conoces los fundamentos, puedes crear flujos más complejos. Veamos cómo integrar funcionalidades adicionales.

### 4.1 Agregar botones interactivos

Los botones hacen que tu chatbot sea mucho más efectivo, permitiendo a los usuarios elegir opciones sin escribir.


### Agregar un componente interactivo

Arrastra un componente **"Interactivo"** al lienzo desde el menú de documentos. Conéctalo después de tu mensaje de bienvenida.
  
### Configurar el mensaje interactivo

Haz doble clic en el componente interactivo. Completa los campos de **Encabezado**, **Cuerpo del mensaje** y **Pie de página**. El cuerpo del mensaje es obligatorio.
  
### Añadir botones

Arrastra desde el conector de botones del componente interactivo hacia el lienzo. Se creará un componente **"Inline Button"**. Configura el texto del botón y la acción que realizará al hacer clic (enviar un mensaje, iniciar un flujo, abrir una URL, etc.).
  
### Repetir para más botones

Repite el proceso para agregar tantos botones como necesites. Cada botón puede conectarse a un flujo diferente dentro del chatbot.
  

> **Ejemplo práctico:** Un bot de atención al cliente podría tener botones como:<br/>
  • "📦 Estado de mi pedido" → muestra información de seguimiento<br/>
  • "📞 Hablar con agente" → deriva a un humano<br/>
  • "❓ Preguntas frecuentes" → muestra respuestas predefinidas<br/>
  • "💳 Realizar pago" → inicia un flujo de pago

### 4.2 Crear secuencias de mensajes temporizados

Una secuencia te permite programar mensajes que se envían automáticamente después de un tiempo determinado, ideal para seguimiento de ventas y recordatorios.

1.  Conecta un componente **"Nueva Secuencia"** desde el botón de tu componente interactivo.
2.  Configura el nombre de la secuencia y el tiempo de espera (por ejemplo, 30 minutos).
3.  Agrega los mensajes que se enviarán cuando se cumpla el tiempo.
4.  Utiliza una **condición** para verificar si el usuario ya realizó la acción deseada antes de enviar el recordatorio.


> WhatsApp permite enviar mensajes de seguimiento ilimitados dentro de la **ventana de 24 horas**. Después de ese período, solo puedes enviar mensajes utilizando **plantillas preaprobadas** por Meta.

### 4.3 Capturar datos del usuario sin formularios

Puedes recolectar información valiosa de tus clientes directamente dentro de la conversación de WhatsApp, sin necesidad de que llenen formularios externos.

1.  Agrega un componente **"User Input Flow"** en tu flujo de conversación.
2.  Configura las preguntas que deseas hacer (nombre, correo, teléfono, preferencias, etc.).
3.  Cada respuesta del usuario se almacena automáticamente en los campos personalizados de tu base de suscriptores.


> **Caso de uso:** Una inmobiliaria puede preguntar "¿Qué tipo de propiedad buscas?", "¿Cuál es tu presupuesto máximo?" y "¿En qué zona prefieres vivir?". Toda esta información queda registrada para que el equipo de ventas haga seguimiento.

---

## Paso 5: Probar el bot creado

Antes de poner tu bot en producción, es fundamental probarlo.

### 5.1 Probar desde el panel de control

1.  Ve a tu **Panel de control** y haz clic en **"Subscriber Manager"** (Gestor de suscriptores).
2.  Haz clic en el botón de **"opciones"** y selecciona **"Suscriptor manual"**.
3.  Completa el formulario: ingresa un **nombre** y un **número de teléfono** (con código de país, sin el signo +). Por ejemplo: `521234567890`.
4.  Haz clic en **"Guardar"**.
5.  Vuelve al constructor de flujos y haz clic en el botón **"Test"** de la esquina superior derecha.
6.  Selecciona el suscriptor que acabas de crear y haz clic en **"Enviar"**.

### 5.2 Verificar en WhatsApp

1.  Espera unos minutos.
2.  Abre la cuenta de WhatsApp del suscriptor de prueba.
3.  Si el bot se creó correctamente, el mensaje aparecerá en la conversación.

### 5.3 Probar con palabras clave

Otra forma de verificar el bot es:

1.  Desde la cuenta de WhatsApp del suscriptor de prueba, escribe la palabra clave que configuraste (por ejemplo, "Hola").
2.  Espera unos minutos.
3.  El bot debería responder automáticamente según el flujo que diseñaste.


> **Solución de problemas comunes:** Si el bot no responde, verifica lo siguiente:
  - El token de acceso sigue siendo válido (los tokens temporales expiran después de 24 horas)
  - La palabra clave está correctamente configurada en el componente Trigger
  - Los componentes están correctamente conectados entre sí
  - Has hecho clic en **"Guardar"** antes de salir del constructor

---

## Paso 6: Analizar y mejorar tu bot

Una vez que tu bot está funcionando, el trabajo no termina ahí. La mejora continua es clave para maximizar los resultados.

### 6.1 Recopilar retroalimentación

Puedes agregar un mensaje al final de cada interacción preguntando: *"¿Te fue útil esta respuesta?"* con botones de "Sí" y "No". Esto te da métricas directas de satisfacción.

### 6.2 Monitorear el rendimiento

Desde el panel de E-SMART360 puedes revisar:

- **Volumen de conversaciones:** cuántas interacciones tiene tu bot al día
- **Tasa de respuesta:** qué porcentaje de mensajes reciben respuesta automática
- **Palabras clave populares:** qué términos usan más tus clientes
- **Puntos de abandono:** en qué parte del flujo los usuarios dejan de interactuar

### 6.3 Optimizar los flujos

Con base en los datos recopilados:

- Agrega nuevas palabras clave para cubrir preguntas frecuentes que no estás respondiendo
- Acorta los flujos si los usuarios abandonan en medio de la conversación
- Añade más opciones interactivas (botones) para reducir la fricción
- Implementa un **AI Agent** para manejar preguntas complejas que no están cubiertas por el flujo


### ¿Cómo integrar un AI Agent en tu chatbot?

E-SMART360 permite entrenar un asistente de IA con tu documentación, FAQ, URLs y archivos. Este AI Agent puede:
  - Responder preguntas abiertas que no están en el flujo predeterminado
  - Entender el contexto de la conversación
  - Aprender de nuevas preguntas y mejorar con el tiempo
  
  Para activarlo, ve a **Configuración del Bot > Integración AI** y selecciona la opción de entrenar con tu base de conocimiento.

---

## Casos de uso y ejemplos prácticos

### Caso 1: Tienda de e-commerce



### 🛒 Chatbot para tienda online

**Objetivo:** Automatizar la atención al cliente y aumentar ventas.<br/><br/>
    **Flujo del bot:**<br/>
    1. Saludo: "¡Bienvenido a [Tienda]! ¿En qué podemos ayudarte?"<br/>
    2. Botones interactivos:<br/>
       • "Ver catálogo" → Muestra productos destacados<br/>
       • "Estado de mi pedido" → Solicita número de pedido y muestra estado<br/>
       • "Hablar con asesor" → Deriva a un agente humano<br/>
    3. Si el usuario elige "Ver catálogo", se envía el catálogo de WhatsApp con imágenes y precios.<br/>
    4. Secuencia de seguimiento: si el usuario vio productos pero no compró, recibe un recordatorio a las 2 horas.
  
### 🏨 Chatbot para hotel o restaurante

**Objetivo:** Gestionar reservas y consultas frecuentes.<br/><br/>
    **Flujo del bot:**<br/>
    1. Saludo con imagen del establecimiento<br/>
    2. Botones:<br/>
       • "Hacer reservación" → Inicia flujo de User Input (fecha, hora, personas)<br/>
       • "Ver menú" → Envía PDF del menú<br/>
       • "Horarios y ubicación" → Mapa y horario<br/>
       • "Promociones" → Lista de ofertas vigentes<br/>
    3. Confirmación de reserva con datos capturados.
  
### Caso 2: Seguimiento de carritos abandonados

Uno de los usos más rentables de un chatbot de WhatsApp es la recuperación de carritos abandonados.


### Detectar el carrito abandonado

Integra tu tienda (Shopify, WooCommerce) con E-SMART360. Cuando un cliente agregue productos al carrito pero no complete la compra, se envía una notificación automática al chatbot.
  
### Enviar mensaje de recordatorio

El bot envía un mensaje amigable: "¡Hola! Vimos que dejaste algunos productos en tu carrito. ¿Te gustaría completar tu compra?" con un botón "Ir a pagar ahora".
  
### Aplicar etiquetas para seguimiento

El bot etiqueta al usuario como "Carrito_Abandonado". Si no compra después del primer recordatorio, se programa un segundo mensaje con un código de descuento exclusivo.
  
### Verificar compra y cerrar el ciclo

Si el usuario completa la compra, el bot envía un mensaje de agradecimiento y la etiqueta se actualiza a "Compra_Completada", deteniendo los recordatorios automáticos.
  
---

## FAQ: Preguntas frecuentes


### ¿Cómo puedo crear un chatbot de WhatsApp gratis sin codificar?

Puedes crear un chatbot de WhatsApp completamente gratis utilizando plataformas como E-SMART360. Solo necesitas conectar tu cuenta de WhatsApp Business API, usar el constructor visual de arrastrar y soltar para diseñar flujos de conversación, y configurar respuestas automáticas. No se requieren conocimientos de programación.

### ¿Necesito la API de WhatsApp Business para construir un chatbot?

Sí. Para crear un chatbot de WhatsApp escalable y profesional, necesitas acceso a la API de WhatsApp Business. E-SMART360 te ayuda a conectar tu número a través de Meta (Facebook Business Manager) y gestionar toda la automatización sin configuración técnica compleja.

### ¿Realmente es posible crear un chatbot de WhatsApp gratis?

Sí, muchas plataformas de chatbot ofrecen planes gratuitos o periodos de prueba que te permiten construir y probar un chatbot de WhatsApp. Sin embargo, algunas funciones avanzadas o volúmenes altos de mensajes pueden requerir un plan de pago. E-SMART360 ofrece un plan gratuito para comenzar.

### ¿Cuánto tiempo se tarda en configurar un chatbot de WhatsApp?

Puedes configurar un chatbot básico en **15-30 minutos** utilizando una plataforma sin código. Los flujos más avanzados con condiciones, secuencias y múltiples ramificaciones pueden tomar algunas horas, pero el proceso sigue siendo accesible para cualquier persona sin experiencia técnica.

### ¿Qué puede hacer un chatbot de WhatsApp por mi negocio?

Un chatbot de WhatsApp puede automatizar respuestas, responder preguntas frecuentes, capturar leads, enviar notificaciones, recuperar carritos abandonados, programar citas y proporcionar atención al cliente 24/7. Esto te ayuda a ahorrar tiempo, reducir costos operativos y aumentar las conversiones.

### ¿Se requiere conocimiento de programación para construir un chatbot de WhatsApp?

No, no se requiere programación. Los constructores de chatbot sin código como E-SMART360 te permiten crear automatizaciones utilizando herramientas visuales. Esto hace que sea fácil para emprendedores, dueños de negocio, marketers y principiantes empezar sin ayuda técnica.

### ¿Puedo transferir una conversación del bot a un agente humano?

Sí. E-SMART360 permite la **transferencia de chat** a un agente humano cuando el bot no puede resolver la consulta. Puedes configurar un botón de "Hablar con un asesor" que active la bandeja de entrada compartida (Shared Inbox), donde un agente real toma el control de la conversación.

### ¿Qué tipos de mensajes puede enviar mi chatbot?

Tu chatbot puede enviar mensajes de texto, imágenes, audio, video, documentos PDF, botones interactivos, listas de opciones, carruseles de productos (carousel templates), catálogos de WhatsApp y formularios nativos de WhatsApp Flows. Todo esto sin escribir una sola línea de código.

### ¿Puedo programar el envío de mensajes en diferido?

Sí. Con el componente **"Nueva Secuencia"** y la función **Smart Delay**, puedes programar respuestas con retrasos de hasta 24 horas. Esto es ideal para secuencias de bienvenida, recordatorios de carritos abandonados, mensajes de cumpleaños o campañas de marketing automatizadas.

### ¿Cómo sé si mi chatbot está funcionando correctamente?

E-SMART360 proporciona un botón de **"Test"** en el constructor visual para enviar mensajes de prueba a cualquier suscriptor. También puedes escribir la palabra clave desde WhatsApp y verificar la respuesta. Además, el panel de análisis muestra métricas de rendimiento como volumen de conversaciones, tasa de respuesta y puntos de abandono.

---

## Conclusión

Crear un chatbot de WhatsApp sin código es más fácil de lo que parece. Con E-SMART360 puedes:

- Conectar tu número de WhatsApp Business en minutos
- Diseñar flujos de conversación visuales con arrastrar y soltar
- Agregar mensajes multimedia, botones interactivos y secuencias temporizadas
- Probar y analizar el rendimiento de tu bot
- Mejorar continuamente basándote en datos reales de interacción


> **¿Listo para empezar?** Regístrate en E-SMART360 y crea tu primer chatbot de WhatsApp hoy mismo. No necesitas programación, solo tu cuenta de WhatsApp Business y las ganas de automatizar tu negocio.

---

---

## Apéndice A: Construir un chatbot de seguimiento automático

Una de las funcionalidades más potentes que puedes agregar a tu chatbot es el **seguimiento automático** de clientes potenciales. Este tipo de chatbot envía recordatorios a usuarios que han mostrado interés en tu producto pero no han completado la acción deseada, como realizar una compra.

### ¿Qué es un chatbot de seguimiento?

Es un sistema automatizado que envía mensajes de recordatorio a usuarios que interactuaron con tu chatbot pero no completaron una acción. Su objetivo es mantener el interés del cliente potencial y aumentar las tasas de conversión sin intervención manual.

### ¿Por qué usar un sistema de seguimiento automatizado?

- **Ahorra tiempo** al automatizar recordatorios que de otro modo harías manualmente.
- **Aumenta ventas y conversiones** al mantener tu oferta presente.
- **Asegura que los usuarios no olviden tu oferta** con recordatorios oportunos.
- **Funciona 24/7** sin esfuerzo manual.

### Cómo construir el flujo de seguimiento

#### 1. Crear el flujo del chatbot

1. Ve al **Panel de control > Bot Manager > Bot Reply > Crear**.
2. Nombra tu chatbot de forma descriptiva, por ejemplo: "Bot de Seguimiento de Ventas".
3. Guarda el chatbot y asegúrate de que se active cuando un usuario interactúe con un mensaje relacionado con un producto.

#### 2. Configurar mensajes interactivos con botones

1. Agrega un **bloque interactivo** a tu chatbot.
2. Crea un mensaje como: *"¡Hola! ¿Te interesaría nuestro producto?"* con botones de **Sí** y **No**.
3. Si el usuario selecciona **Sí**, proporciónale un enlace de pago o más información.
4. Si el usuario selecciona **No**, finaliza la conversación u ofrece asistencia adicional.

#### 3. Aplicar etiquetas para rastrear acciones del usuario

Las etiquetas son fundamentales para hacer seguimiento inteligente:

1. Cuando un usuario hace clic en **"Comprar ahora"**, aplica una etiqueta llamada **"Intención_Compra"**.
2. Si el usuario **no** hace clic en el botón, no recibe esta etiqueta.
3. Usa esta etiqueta para determinar quién necesita un recordatorio de seguimiento.

#### 4. Configurar la secuencia de seguimiento

1. Arrastra el conector desde la opción **"Suscribir a Secuencia"** del botón "Comprar ahora".
2. Crea una nueva secuencia de seguimiento que envíe un mensaje de recordatorio si el usuario no compra dentro del tiempo que elijas (por ejemplo, 30 minutos).
3. Agrega una **condición** para verificar si el usuario ya hizo clic en el botón de compra.
4. Si la condición es **falsa** (no compró), envía el mensaje de seguimiento.
5. Puedes repetir el proceso para enviar múltiples recordatorios.

#### 5. Programar mensajes estratégicamente

- WhatsApp permite enviar mensajes de seguimiento **ilimitados dentro de las primeras 24 horas**.
- Después de 24 horas, solo puedes usar **plantillas de mensaje preaprobadas**.
- Programa tus recordatorios estratégicamente para evitar saturar al usuario.

#### 6. Exportar flujos de chatbot

Puedes exportar el flujo completo de tu chatbot y compartirlo con otros miembros de tu equipo o reutilizarlo en otras cuentas. Esta funcionalidad te permite crear una biblioteca de flujos prediseñados.

---

## Apéndice B: Secuencias de ventas automatizadas

Las **secuencias de mensajes** son una herramienta avanzada que te permite enviar una serie de mensajes automatizados activados por acciones o eventos predefinidos. Son ideales para mantener el compromiso, nutrir leads y automatizar tareas de marketing.

### ¿Qué es un mensaje en secuencia?

Es un conjunto preconfigurado de mensajes automatizados que se envían a los suscriptores basándose en disparadores y horarios predefinidos. Cada mensaje se envía en un momento específico o después de que ocurre una acción determinada.

### Ideas para secuencias de mensajes

| Tipo de secuencia | Descripción | Ejemplo |
|---|---|---|
| **Bienvenida** | Involucra a nuevos suscriptores con saludos personalizados | "¡Gracias por suscribirte! Aquí tienes un 10% de descuento en tu primera compra" |
| **Soporte al cliente** | Automatiza respuestas a consultas comunes | "¿Necesitas ayuda con tu pedido? Estos son los pasos para rastrearlo:" |
| **Nutrición de leads** | Educa a los prospectos sobre productos o servicios | Día 1: "Conoce nuestros productos"; Día 3: "Casos de éxito"; Día 7: "Oferta especial" |
| **Ventas** | Guía a los clientes potenciales a través del embudo | "¿Listo para comprar? Aquí tienes un enlace directo" |
| **Onboarding** | Ayuda a nuevos usuarios a comenzar | "Paso 1: Configura tu perfil"; "Paso 2: Explora funciones clave" |
| **Promocional** | Anuncia nuevos productos, descuentos o eventos | "¡Oferta especial solo por hoy!" |
| **Educativa** | Proporciona contenido valioso a los suscriptores | "Tip del día: Cómo optimizar tu perfil de negocio" |

### Beneficios de usar secuencias de mensajes

- **Experiencia del cliente mejorada**: Las respuestas automáticas garantizan una interacción instantánea.
- **Mayor eficiencia**: Reduce la carga de trabajo manual al automatizar tareas repetitivas.
- **Mejores conversiones**: Nutre leads y mejora las tasas de conversión.
- **Mayor compromiso**: Mantiene a los usuarios interesados con seguimientos oportunos.
- **Optimización basada en datos**: Analiza el rendimiento y refina las secuencias según las métricas.

### Cómo configurar y lanzar una campaña de secuencia

1. **Crear una nueva secuencia**: Navega al **Flow Builder** y selecciona **'Nueva Secuencia'**.
2. **Configurar nombre y temporización**: Asigna un nombre descriptivo y define los intervalos entre cada mensaje.
3. **Estructurar la secuencia**: Agrega contenido de texto, multimedia y llamados a la acción en cada paso.
4. **Finalizar y activar**: Revisa la configuración y activa la secuencia.
5. **Monitorear y optimizar**: Analiza las métricas de rendimiento y ajusta los mensajes según los resultados.

### Mejores prácticas para secuencias de mensajes

- Mantén los mensajes **concisos y relevantes**.
- **Personaliza** las interacciones utilizando los datos del usuario.
- Programa los mensajes **estratégicamente** para mantener el compromiso sin saturar.
- Usa **plantillas de mensaje preaprobadas** para secuencias que excedan la ventana de 24 horas.
- **Analiza y refina** continuamente las secuencias basándote en datos de rendimiento.

---

## Apéndice C: Configuración detallada de disparadores por palabras clave

Los disparadores por palabras clave son la base de cualquier chatbot conversacional. Aquí tienes una guía más detallada para dominarlos.

### Acceso al Bot Manager

1. Ve al menú **Bot Manager** en el panel de E-SMART360.
2. Selecciona la cuenta de bot que deseas configurar.
3. Haz clic en **Bot Reply** para continuar.

### Crear un nuevo chatbot

1. Haz clic en el botón **Crear** en la sección Bot Reply.
2. Se abrirá el **Visual Flow Bot Builder canvas**.

### Nombrar tu chatbot

1. Localiza el componente **Start Bot Flow**.
2. Haz doble clic para abrir el modal **Configure Reference**.
3. Ingresa un nombre en el campo **Title**.
4. Opcionalmente, elige una etiqueta y selecciona una secuencia.

### Establecer una palabra clave de activación

1. En el modal **Configure Reference**, ingresa una palabra clave para activar el bot (por ejemplo, "Hola", "Inicio", "Menú").
2. **Coincidencia exacta**: El bot solo se activará para esta palabra específica.
3. **Coincidencia parcial**: El bot se activará para cualquier cadena que contenga la palabra clave, por ejemplo, "Hola, necesito ayuda" también activará el bot si la palabra clave es "Hola".
4. Haz clic en guardar.

### Configurar un mensaje de respuesta

1. Arrastra una conexión desde el conector **Next** del Start Bot Flow.
2. Suéltalo en el lienzo para ver las opciones de componentes disponibles.
3. Selecciona el **Componente Interactivo**.
4. Haz doble clic para abrir el modal de configuración.
5. Completa el **Encabezado**, **Cuerpo del mensaje** y **Pie de página**.
6. Configura un tiempo de retardo si es necesario.
7. Haz clic en **OK** para guardar.

### Agregar botones interactivos

1. Arrastra un conector desde el conector de botones del Componente Interactivo hacia el lienzo.
2. Aparecerá un **Componente de Botón Inline**.
3. Haz doble clic e ingresa un **Texto del Botón**.
4. Selecciona una **Acción del Botón** para cuando se haga clic (enviar un mensaje, iniciar un flujo, acción predeterminada del sistema, etc.).
5. Haz clic en **Guardar**.
6. Repite el proceso para agregar más botones.

### Configurar mensaje final y guardar

1. Selecciona el **Componente de Texto** para el mensaje final.
2. Haz doble clic, configura el mensaje y haz clic en **OK**.
3. Haz clic en el botón **Guardar** (esquina superior derecha del lienzo) para guardar toda la configuración del bot.

### Probar tu chatbot de WhatsApp

1. Abre WhatsApp.
2. Escribe la palabra clave que configuraste y envíala.
3. Observa la respuesta del chatbot para confirmar que funciona correctamente.

### Consejos y solución de problemas

- **¿La palabra clave no activa respuestas?** Verifica que la palabra clave esté correctamente configurada en el componente Trigger.
- **¿Los botones no aparecen?** Asegúrate de que estén correctamente vinculados a un componente interactivo.
- **¿Sin mensaje final?** Verifica que el Componente de Texto esté agregado y guardado.
- **¿Los cambios no se guardan?** Siempre haz clic en el botón **Guardar** antes de salir del constructor visual.

---

## Consejos avanzados para exprimir tu chatbot al máximo

### 1. Personalización con variables

E-SMART360 te permite usar **variables personalizadas** en tus mensajes. Por ejemplo:

- `{{nombre}}` para saludar al cliente por su nombre.
- `{{ultimo_pedido}}` para referenciar su última compra.
- `{{ciudad}}` para ofrecer promociones locales.

```
¡Hola {{nombre}}! 👋

Notamos que tu último pedido ({{ultimo_pedido}}) fue hace un mes.
¡Tenemos novedades que te encantarán!
```

### 2. Integración con Google Sheets

Puedes conectar tu chatbot con **Google Sheets** para enviar datos directamente a una hoja de cálculo y sincronizar información de tus clientes en tiempo real.

1. Ve a **Integraciones > Google Sheets**.
2. Conecta tu cuenta de Google.
3. Selecciona o crea la hoja de cálculo donde deseas almacenar los datos.
4. Cada vez que un cliente interactúe con el bot, sus respuestas se guardarán automáticamente.

### 3. Webhooks y API externa

Para necesidades más avanzadas, puedes usar **webhooks** para conectar tu chatbot con sistemas externos:

- Enviar datos de leads a tu CRM
- Actualizar inventarios en tu ERP
- Crear usuarios en WordPress automáticamente
- Enviar notificaciones a Slack o Discord

### 4. WhatsApp Flows (Formularios nativos)

WhatsApp Flows te permite crear **formularios interactivos** que se abren dentro de la conversación de WhatsApp. Son ideales para:

- Capturar direcciones de envío
- Recoger preferencias de clientes
- Realizar encuestas de satisfacción
- Procesar solicitudes de devolución

---

## Recursos relacionados

- [Guía para configurar WhatsApp Cloud API](/recursos/configuracion-whatsapp-cloud-api)
- [Cómo crear un chatbot basado en palabras clave](/recursos/chatbot-palabras-clave-whatsapp)
- [Automatizar seguimiento de ventas con secuencias](/recursos/secuencias-ventas-automaticas-whatsapp)
- [Integrar catálogo de productos en WhatsApp](/recursos/catalogo-productos-whatsapp)
- [Recuperar carritos abandonados con WhatsApp](/recursos/recuperar-carritos-abandonados-whatsapp)
