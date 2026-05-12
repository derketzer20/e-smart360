---
title: "Mensaje de Bienvenida, Rompehielos, Comandos y Botón de Ubicación en WhatsApp — Guía Completa"
description: "Aprende a configurar un mensaje de bienvenida automático, preguntas rompehielos, comandos con barra inclinada y el botón de ubicación en tu chatbot de WhatsApp desde el panel de E-SMART360. Incluye configuración paso a paso, ejemplos prácticos y resolución de problemas frecuentes."
section: "chatbots-omnicanal"
order: 180
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "configurar-mensaje-bienvenida-icebreakers-comandos-boton-ubicacion-whatsapp-esmart360"
canonicalGroup: "mensaje-de-bienvenida-rompehielos-comandos-y-boton-de-ubicacion-en-whatsapp"
tags: ["chatbots-omnicanal", "chatbots"]
staging: true
---
> **Actualización (2026-05-08)**
> Esta guía ha sido actualizada con los pasos más recientes para la configuración de mensajes de bienvenida, rompehielos, comandos y ubicación en la API de WhatsApp Cloud. Incluye nuevas secciones sobre mensajes de no-coincidencia, frecuencia de respuestas, integración con el editor visual de flujo y consejos avanzados para maximizar la retención de usuarios.

## Introducción

¿No sería increíble poder enviar un mensaje de bienvenida automático a cada suscriptor de WhatsApp en cuanto entra al chat? ¿O tener preguntas predefinidas para que los usuarios solo tengan que pulsar un botón y comenzar una conversación sin escribir nada? ¿Y qué tal si además pudieran usar comandos rápidos como `/ayuda` para acceder a funciones específicas, o compartir su ubicación con solo un clic?


> **Todas estas funcionalidades están disponibles en E-SMART360** y en esta guía te mostraremos cómo configurarlas paso a paso, desde el mensaje de bienvenida hasta el botón de ubicación, pasando por los rompehielos y los comandos personalizados.

En E-SMART360 hemos integrado estas potentes funcionalidades en nuestro chatbot de WhatsApp para que puedas ofrecer una experiencia de primera clase desde el primer mensaje. Un mensaje de bienvenida bien diseñado puede aumentar la tasa de interacción hasta un 40%, los rompehielos reducen la fricción inicial, los comandos agilizan la navegación y el botón de ubicación te permite ofrecer servicios personalizados basados en la localización del cliente.

En esta guía completa veremos:

- Cómo crear y activar un **mensaje de bienvenida** personalizado
- Cómo configurar **preguntas rompehielos** con botones interactivos
- Cómo definir **comandos** con barra inclinada para acceso rápido
- Cómo añadir el **botón de ubicación** para obtener la localización del cliente
- Cómo configurar el **mensaje de no-coincidencia** y su frecuencia
- Cómo usar el **editor visual de flujo** para crear bots complejos
- Ejemplos prácticos, mejores prácticas y solución de problemas


> **Resumen rápido:** Configura un mensaje de bienvenida que salude a los usuarios al iniciar el chat, agrega preguntas rompehielos con botones para facilitar la primera acción, define comandos con barra como /ayuda o /catalogo para navegar funciones rápidamente, añade el botón de ubicación para obtener la localización del cliente al instante y configura un mensaje de no-coincidencia amigable para cubrir cualquier consulta inesperada.

---

## Mensaje de Bienvenida

El mensaje de bienvenida es la primera impresión que tus clientes tendrán de tu negocio en WhatsApp. Se envía automáticamente en cuanto un suscriptor entra al chat por primera vez o después de 24 horas de inactividad. Un mensaje de bienvenida bien diseñado establece el tono de la conversación, presenta tu marca y guía al usuario hacia el siguiente paso.

### Beneficios de tener un mensaje de bienvenida

- **Primera impresión profesional:** Muestras a tus clientes que son valorados desde el primer momento.
- **Reducción de la fricción inicial:** Los usuarios no tienen que pensar qué escribir; el chatbot toma la iniciativa.
- **Aumento de la tasa de conversión:** Un saludo amigable seguido de una llamada a la acción clara incrementa las posibilidades de que el usuario interactúe.
- **Automatización del onboarding:** Puedes usar el mensaje de bienvenida para comenzar el proceso de registro o calificación del cliente.

### Cómo crear el mensaje de bienvenida paso a paso


### Acceder al Gestor de Bot

Desde el panel de control de E-SMART360, dirígete a la sección **WhatsApp → Gestor de Bot**. Una vez allí, desplázate hacia abajo hasta encontrar el botón **"Acciones"** (Actions Button) y haz clic en él.

### Editar el mensaje Get Started

Dentro del menú de acciones, localiza la opción **"Get Started"** (Inicio). Por defecto, viene con un mensaje de texto estándar predefinido. Haz clic en el ícono de edición (lápiz o engranaje) para personalizarlo completamente.

Puedes modificar el texto y añadir tantos componentes como necesites:
- **Texto enriquecido** con formato (negritas, cursivas, listas)
- **Imágenes o videos** para hacer el mensaje más visual
- **Botones interactivos** con acciones como "Ver catálogo", "Hablar con agente", "Más información"
- **Listas de opciones** (list messages) para menús estructurados
- **Flujos completos de chatbot** con múltiples pasos y ramificaciones

El editor funciona exactamente igual que cuando creas cualquier otro chatbot en E-SMART360, así que si ya has creado bots antes, te resultará muy familiar.

### Activar el mensaje de bienvenida desde WhatsApp Cloud API

Una vez que hayas creado y guardado tu mensaje personalizado desde E-SMART360, necesitas activarlo desde la API de WhatsApp Cloud. Sigue estos pasos:

1. Desde el panel de E-SMART360, ve a **"Conectar Cuenta"** y haz clic en el botón **"Administrar"** de la cuenta de WhatsApp conectada.
2. Alternativamente, puedes acceder directamente al Administrador de números de teléfono de WhatsApp.
3. Selecciona el número de teléfono de tu negocio.
4. Haz clic en el botón de **Configuración** (Settings).
5. En el menú lateral, selecciona **"Automatización"** (Automation).
6. Busca la sección de **"Mensajes de bienvenida"** (Welcome Messages) y haz clic en el botón **"Activar"** (Turn on).


> **¡Listo!** Ahora, cada vez que un nuevo suscriptor entre al chat de WhatsApp, recibirá automáticamente el mensaje de bienvenida que configuraste. Recuerda que puedes implementar un chatbot completamente funcional como mensaje de bienvenida, con múltiples opciones, flujos condicionales y respuestas inteligentes.

### Consejos para un mensaje de bienvenida efectivo

Un buen mensaje de bienvenida marca la diferencia entre un cliente que interactúa y uno que abandona la conversación. Aquí tienes algunos consejos prácticos respaldados por la experiencia de cientos de negocios:

1. **Saluda con el nombre si está disponible**: Personaliza el mensaje usando variables como `{{nombre}}`. Ejemplo: "¡Hola {{nombre}}! Bienvenido a Tu Empresa 🎉"
2. **Presenta tu propuesta de valor en una línea**: Sé claro sobre qué puedes ofrecer. Ejemplo: "Estamos aquí para ayudarte con tus pedidos, resolver dudas y ofrecerte las mejores ofertas."
3. **Incluye una llamada a la acción clara**: No dejes al usuario preguntándose qué hacer. Ejemplo: "Escribe *menú* para ver todas nuestras opciones, o elige una de las siguientes opciones:"
4. **Manténlo conciso**: Los usuarios de WhatsApp valoran los mensajes directos y rápidos de leer. Un mensaje de bienvenida ideal tiene entre 3 y 5 líneas de texto más los botones de acción.
5. **Usa emojis con moderación**: Los emojis hacen que el mensaje sea más amigable, pero úsalos con propósito. Un saludo con un emoji sonriente 😊 es suficiente.
6. **Incluye un botón para contacto humano**: Siempre ofrece la opción de hablar con una persona real. Ejemplo: "Si prefieres hablar con un asesor, haz clic en *Hablar con soporte*."


### Ejemplo completo de mensaje de bienvenida para un e-commerce

Texto de ejemplo:

"¡Hola {{nombre}}! Bienvenido a TiendaOnline 🛍️

Estamos felices de tenerte aquí. ¿En qué podemos ayudarte hoy?

Botones: [Ver Catálogo] [Estado de mi Pedido] [Ofertas] [Hablar con Asesor]

O simplemente escribe lo que buscas y te ayudaremos al instante."

### ¿Puedo tener diferentes mensajes de bienvenida para distintos escenarios?

Actualmente, WhatsApp Cloud API permite un único mensaje de bienvenida por número de teléfono. Sin embargo, puedes diseñar ese mensaje como un menú interactivo con botones que deriven a diferentes flujos del chatbot, simulando así múltiples bienvenidas especializadas. Por ejemplo, un botón "Soy cliente nuevo" podría iniciar un flujo de registro, mientras que "Ya soy cliente" podría llevar directamente al panel de consultas.

### Solución de problemas con el mensaje de bienvenida


### El mensaje de bienvenida no se envía automáticamente

Verifica los siguientes puntos:
- ¿Activaste el mensaje desde WhatsApp Cloud API? (paso 3 de la guía)
- ¿El botón "Turn on" muestra que está activado (verde/azul)?
- ¿El suscriptor es realmente nuevo? El mensaje de bienvenida solo se envía en la primera interacción o después de 24 horas sin actividad.
- Prueba con un número de teléfono diferente que nunca haya interactuado con tu chatbot.

### El mensaje se ve diferente en dispositivos móviles

WhatsApp aplica ciertos límites de formato en diferentes plataformas. Asegúrate de:
- No usar caracteres especiales no soportados
- Probar el mensaje en varios dispositivos (Android, iOS, WhatsApp Web)
- Mantener los botones dentro del límite de 3 botones por mensaje (o usar list messages para más opciones)

---

## Rompehielos (Icebreakers)

Los rompehielos son preguntas o frases predefinidas que aparecen como botones en la parte inferior del chat de WhatsApp, justo encima del campo de texto. Ayudan a los suscriptores a iniciar una conversación fácilmente, sin tener que escribir nada. Son especialmente útiles para:

- Usuarios que no saben qué preguntar
- Reducir la tasa de abandono en el primer mensaje
- Guiar la conversación hacia temas que tu chatbot puede manejar
- Aumentar la velocidad de respuesta y la satisfacción del cliente

### Cómo configurar los rompehielos

Para usar rompehielos, primero deben crearse desde la API de WhatsApp Cloud y luego debes configurar las respuestas del bot desde E-SMART360 para cada pregunta.


### Crear las preguntas rompehielos en WhatsApp Cloud API

1. Accede al Administrador de números de WhatsApp.
2. Selecciona tu número de teléfono y haz clic en **Configuración** (Settings).
3. En el menú lateral, busca y selecciona la sección **"Rompehielos"** (Icebreakers).
4. Haz clic en el botón **"Editar"** (Edit).
5. Se abrirá un formulario donde puedes añadir tus preguntas. Escribe cada pregunta en un campo separado.
6. Puedes agregar hasta **5 preguntas rompehielos**. Cada pregunta aparecerá como un botón individual en el chat.
7. Haz clic en **Guardar** (Save) cuando termines.

Ejemplos de preguntas rompehielos efectivas:

- "¿Quieres ver nuestro catálogo de productos? 🛍️"
- "Necesito ayuda con un pedido 📦"
- "¿Cuáles son sus horarios de atención? 🕐"
- "Hablar con un asesor"
- "Ver promociones y ofertas 🔥"

### Crear un bot para cada pregunta rompehielos

Ahora viene la parte más importante: desde el **Gestor de Bot** de E-SMART360, necesitas crear un bot independiente para **cada pregunta rompehielos**.

1. Ve a **Gestor de Bot** → **Respuesta de Bot** (Bot Reply).
2. Haz clic en el botón **"Crear nuevo bot"** (Create New Bot).
3. En el campo de **Palabra clave** (Keyword), copia la pregunta completa exactamente como la escribiste en WhatsApp Cloud API, incluyendo los emojis si los usaste.
4. Configura las respuestas que el chatbot dará cuando alguien haga clic en esa pregunta.


> **Importante:** La palabra clave debe coincidir EXACTAMENTE con la pregunta rompehielos, incluyendo espacios, signos de puntuación y emojis. Si hay la más mínima diferencia, el bot no se activará cuando el usuario haga clic en la pregunta.

Además, selecciona el tipo de coincidencia: para preguntas rompehielos, usa **"Coincidencia exacta"** (Exact Match). Luego configura las respuestas. No te limites a respuestas simples: puedes implementar un chatbot completo detrás de cada pregunta, con varios flujos, botones condicionales, imágenes, videos y más.

Por ejemplo, para la pregunta "¿Quieres ver nuestro catálogo de productos? 🛍️", podrías configurar un bot que:
1. Envíe un mensaje de bienvenida a la sección de productos
2. Muestre categorías con botones (Ropa, Electrónica, Hogar)
3. Según la categoría seleccionada, muestre productos específicos con precios
4. Ofrezca añadir al carrito o preguntar por más detalles


### ¿Cuántas preguntas rompehielos puedo agregar?

WhatsApp Cloud API permite hasta **5 preguntas rompehielos** por número de teléfono. Elige las más relevantes para tu negocio. Algunas estrategias para seleccionar las mejores preguntas:

- **Análisis de preguntas frecuentes**: Revisa las consultas más comunes que recibes en otros canales.
- **Embudo de ventas**: Incluye preguntas para cada etapa: descubrimiento, consideración y decisión.
- **Soporte vs. ventas**: Dedica al menos 1 pregunta a soporte y 2-3 a ventas si tu negocio es transaccional.

### ¿Los rompehielos aparecen siempre que el usuario abre el chat?

No. Los rompehielos se muestran principalmente en estas situaciones:
- Cuando un usuario abre el chat por **primera vez**
- Después de un período de **inactividad prolongado** (más de 24 horas)
- En algunos casos, al recargar la conversación

No aparecen en cada visita, por lo que no deben ser el único medio de navegación. Complementa los rompehielos con comandos y un mensaje de bienvenida que también ofrezca opciones.

### Ejemplos de rompehielos por industria



### Tienda de e-commerce

- "Ver catálogo de productos 🛍️"
- "Estado de mi pedido 📦"
- "Ofertas y promociones 🔥"
- "Hablar con ventas 💬"
- "Métodos de pago 💳"

### Soporte técnico / SaaS

- "Problemas con mi cuenta 🔧"
- "Guías y tutoriales 📚"
- "Reportar un error ⚠️"
- "Contactar soporte técnico"
- "Facturación y planes 💰"

### Restaurante / Comida

- "Ver menú y precios 🍕"
- "Hacer un pedido 🛵"
- "Horarios y ubicación 📍"
- "Reservar una mesa 🪑"
- "Promociones del día 🎉"

### Servicios profesionales

- "Agendar una cita 📅"
- "Ver servicios disponibles 🔨"
- "Solicitar cotización 📄"
- "Hablar con un asesor 🎯"
- "Testimonios de clientes ⭐"

---

## Comandos

Los comandos permiten a los usuarios ejecutar acciones específicas escribiendo una palabra precedida por una barra inclinada (`/`). Son ideales para usuarios que ya conocen tu sistema y quieren acceder rápidamente a funciones específicas sin tener que navegar por menús.

### Diferencia entre rompehielos y comandos

| Característica | Rompehielos | Comandos |
|---|---|---|
| Activación | Botón visible en el chat | El usuario escribe el comando |
| Visibilidad | Siempre visibles al inicio | Requiere conocimiento previo |
| Cantidad máxima | 5 por número | Sin límite conocido |
| Usuarios ideales | Nuevos usuarios | Usuarios frecuentes |
| Formato | Pregunta en lenguaje natural | Palabra con / al inicio |

### Cómo configurar los comandos

El procedimiento para crear comandos es muy similar al de los rompehielos, pero con algunas diferencias clave.


### Crear los comandos en WhatsApp Cloud API

1. Accede al Administrador de números de WhatsApp.
2. Selecciona tu número de teléfono y ve a **Configuración** → **"Comandos"** (Commands).
3. Haz clic en **"Editar"** (Edit).
4. En el campo de texto, añade un comando comenzando con el símbolo `/`. Por cada comando debes proporcionar:
   - **El comando**: el texto que el usuario debe escribir, incluyendo la barra inclinada (ej: /ayuda)
   - **Una descripción breve**: explica qué hace el comando (ej: "Muestra la lista de comandos disponibles")
5. Puedes añadir todos los comandos que necesites. No hay un límite documentado por parte de Meta.
6. Haz clic en **Guardar** (Save) cuando termines.

Ejemplos de comandos útiles:
- /menu — Muestra el menú principal del chatbot
- /ayuda — Lista todos los comandos disponibles
- /horario — Muestra el horario de atención al cliente
- /ubicacion — Envía la dirección y un enlace al mapa
- /catalogo — Muestra el catálogo de productos o servicios
- /pedido — Consulta el estado de un pedido específico
- /factura — Solicita la factura de una compra reciente
- /soporte — Conecta con un agente humano de soporte

### Crear bots para cada comando en E-SMART360

Al igual que con los rompehielos, cada comando necesita su propio bot en E-SMART360:

1. Ve a **Gestor de Bot** → **Respuestas de Bot**.
2. Haz clic en **"Crear nuevo bot"**.
3. En el campo de **Palabra clave**, escribe el comando completo incluyendo la barra inclinada, por ejemplo: /ayuda.
4. Configura la respuesta del bot para ese comando. Al igual que con los rompehielos, puedes crear un flujo completo detrás de cada comando, con múltiples pasos, respuestas condicionales y componentes interactivos.

Para el comando /menu, considera crear un bot que muestre un mensaje con todos los comandos disponibles y sus descripciones. Así los usuarios pueden descubrir todo lo que pueden hacer.


> **Estrategia recomendada:** Usa rompehielos para guiar a los nuevos usuarios y comandos para que los usuarios avanzados accedan rápidamente a funciones específicas. Un buen equilibrio es tener 4-5 rompehielos cubriendo las acciones más comunes y 8-10 comandos para funcionalidades más específicas.

### Cómo promocionar los comandos entre tus usuarios

Los comandos solo son útiles si los usuarios saben que existen. Aquí algunas estrategias para darlos a conocer:

1. **Incluye una lista de comandos en el mensaje de bienvenida**: "Escribe /ayuda para ver todos los comandos disponibles."
2. **Crea un comando /ayuda que muestre todos los comandos**: Es el comando más importante que puedes crear.
3. **Menciona comandos específicos en las respuestas del bot**: "Si quieres consultar el estado de tu pedido más tarde, escribe /pedido seguido de tu número de pedido."
4. **Añade los comandos en tu página de FAQ o documentación**: Así los usuarios pueden descubrirlos antes de iniciar el chat.

### Ideas de comandos por tipo de negocio



### Comandos básicos (cualquier negocio)

- /menu — Muestra el menú principal
- /ayuda — Lista de comandos disponibles
- /horario — Horario de atención
- /ubicacion — Dirección y mapa
- /contacto — Información de contacto

### Comandos para e-commerce

- /catalogo — Catálogo de productos
- /pedido — Estado del pedido
- /factura — Solicitar factura
- /envio — Seguimiento de envío
- /ofertas — Promociones activas

### Comandos para servicios / SaaS

- /planes — Planes y precios
- /soporte — Contactar soporte
- /tutorial — Enlace a tutoriales
- /billing — Facturación
- /status — Estado del servicio

---

## Botón de Ubicación

El componente de ubicación permite recopilar la localización de tus suscriptores de manera sencilla y rápida. Los usuarios no necesitan escribir su dirección manualmente; con solo pulsar un botón, su ubicación se envía automáticamente al chatbot. Esta funcionalidad es especialmente valiosa para negocios con múltiples sucursales, servicios de delivery, o cualquier negocio que se beneficie de conocer la ubicación del cliente.

### Cómo añadir el botón de ubicación


### Añadir el componente de ubicación al flujo del bot

Desde el **Gestor de Bot** de E-SMART360, al crear o editar la respuesta de un bot:

1. Abre el editor visual de flujo (Visual Flow Bot Builder).
2. En la paleta de componentes, busca el componente **"Ubicación"** (Location).
3. Arrástralo al canvas y conéctalo al flujo existente.
4. Haz doble clic en el componente para abrir la configuración.
5. Escribe el texto informativo que acompañará al botón. Por ejemplo:
   - "Comparte tu ubicación para mostrarte la tienda más cercana 🏪"
   - "Necesitamos tu ubicación para calcular el tiempo de entrega 🚚"
   - "Selecciona 'Enviar Ubicación' para que podamos asignarte el técnico más cercano 🔧"
6. El componente se mostrará al suscriptor con un botón etiquetado como **"Enviar Ubicación"** (Send Location).
7. Guarda los cambios.

### Probar el botón de ubicación

Es importante probar el funcionamiento antes de ponerlo en producción:

1. Abre WhatsApp en tu dispositivo móvil.
2. Inicia una conversación con tu chatbot.
3. Activa el flujo que contiene el botón de ubicación.
4. Pulsa el botón "Enviar Ubicación".
5. WhatsApp te pedirá permiso para acceder a tu ubicación. Concede el permiso.
6. Confirma que la ubicación se envía correctamente.
7. Verifica en el panel de E-SMART360 que la ubicación se ha almacenado en el perfil del suscriptor.

### Cómo acceder a la ubicación recibida

Cuando el suscriptor pulse el botón y comparta su ubicación, esta información queda almacenada en los datos del suscriptor y puedes consultarla desde:

- **Chat en vivo**: En la conversación verás la ubicación recibida como un mensaje con un mapa incrustado.
- **Gestor de suscriptores**: Los datos de ubicación se guardan automáticamente en el perfil del contacto. Puedes consultar la dirección aproximada, coordenadas (latitud y longitud) y la hora en que se compartió.
- **Exportación de datos**: Puedes exportar los datos de ubicación junto con el resto de información del suscriptor para análisis posteriores.


> **Privacidad y consentimiento:**
- La ubicación se envía solo cuando el usuario pulsa activamente el botón "Enviar Ubicación".
- WhatsApp solicita permiso al usuario antes de compartir su localización.
- No es posible obtener la ubicación de forma automática sin el consentimiento explícito del usuario.
- El usuario puede denegar el permiso en cualquier momento desde la configuración de su dispositivo.
- Recomendamos incluir un mensaje claro sobre por qué solicitas la ubicación y cómo se usará.

### Usos prácticos del botón de ubicación por industria



### Comercio local / Retail

- Encontrar la tienda más cercana
- Calcular tiempos de entrega a domicilio
- Sugerir sucursales según la zona
- Verificar cobertura de delivery
- Enviar promociones por zona

### Servicios a domicilio

- Asignar el técnico más cercano
- Confirmar dirección del servicio
- Optimizar rutas de entrega
- Calcular tarifas de desplazamiento
- Proveer indicaciones al equipo

### Restaurantes y comida

- Identificar sucursal más cercana
- Verificar cobertura de entrega
- Calcular tiempo de entrega
- Sugerir menús por ubicación
- Ofrecer recogida en tienda

### Inmobiliarias

- Mostrar propiedades cercanas
- Agendar visitas a inmuebles
- Información de la zona
- Calcular distancias
- Recorridos virtuales cercanos

### ¿Qué hago si el botón de ubicación no aparece en el chat del usuario?

Verifica los siguientes puntos:
1. ¿El componente de ubicación está correctamente añadido en el flujo del bot?
2. ¿El flujo del bot se activa correctamente cuando el usuario llega a ese punto?
3. ¿El usuario tiene los permisos de ubicación activados en WhatsApp? Debe ir a Configuración → Privacidad → Ubicación.
4. En algunos dispositivos Android, la ubicación debe estar activada a nivel de sistema.
5. Prueba en diferentes dispositivos (Android, iOS) para descartar problemas de plataforma.

### ¿La ubicación se almacena permanentemente?

Sí, la ubicación compartida queda almacenada en el perfil del suscriptor dentro de E-SMART360. Puedes acceder a ella en cualquier momento desde el Gestor de Suscriptores. Si necesitas eliminar estos datos por políticas de privacidad, puedes hacerlo manualmente desde el perfil del contacto.

---

## Mensaje de No-Coincidencia y su Frecuencia

Además de las funcionalidades anteriores, es importante configurar qué sucede cuando un suscriptor envía un mensaje que no coincide con ninguna palabra clave, rompehielos o comando configurado. Para esto existe el **mensaje de no-coincidencia** (No Match Reply).

### ¿Qué es un mensaje de no-coincidencia?

Un mensaje de no-coincidencia es una respuesta de respaldo que se envía cuando el chatbot no encuentra una coincidencia con ninguna de las reglas configuradas. Es tu red de seguridad para que ningún mensaje quede sin respuesta, evitando la frustración del usuario y manteniendo la conversación activa.

**Ejemplos de situaciones donde se activa:**
- El usuario escribe algo inesperado o fuera de lo común
- El mensaje contiene errores ortográficos que impiden la coincidencia exacta
- El usuario hace una pregunta que no está cubierta por ningún bot configurado
- El mensaje es demasiado corto o ambiguo

### Beneficios de configurar un mensaje de no-coincidencia

- **Ningún mensaje queda sin respuesta**: El usuario siempre recibe una respuesta, incluso si el chatbot no entiende su mensaje.
- **Oportunidad de reencauzar la conversación**: Puedes sugerir opciones válidas o preguntar si el usuario necesita ayuda con algo específico.
- **Reduce la tasa de abandono**: Los usuarios que reciben una respuesta, aunque sea genérica, tienen más probabilidades de seguir interactuando.
- **Puedes capturar retroalimentación**: Puedes incluir una opción para que el usuario reporte que su mensaje no fue entendido.

### Cómo configurar el mensaje de no-coincidencia


### Acceder a la configuración de no-coincidencia

1. Accede al **Gestor de Bot** de E-SMART360.
2. Haz clic en el botón **"Acciones"** (Actions).
3. Selecciona **"Plantilla de respuesta sin coincidencia"** (No Match Reply Template).
4. Se abrirá el editor visual de flujo con una plantilla prediseñada.

### Diseñar la respuesta

En el editor visual puedes diseñar la respuesta que se enviará cuando no haya coincidencia. Puedes incluir:

- **Texto personalizado**: Un mensaje amigable que disculpe la falta de comprensión.
- **Botones de acceso rápido**: Enlaces a las secciones principales del chatbot.
- **Imágenes o multimedia**: Para hacer la respuesta más visual.
- **Oferta de contacto humano**: Un botón para hablar con un agente real.

Ejemplo de mensaje de no-coincidencia efectivo:
"Lo siento, no entendí tu mensaje 😅. No te preocupes, prueba con estas opciones:

[Ver Catálogo] [Ayuda] [Hablar con Asesor]

O escribe /ayuda para ver todos los comandos disponibles."

### Configurar la frecuencia de envío

Para evitar enviar el mismo mensaje repetidamente al mismo usuario (lo que podría resultar molesto):

1. Ve a **Gestor de Bot** → **Configuración** (Configuration).
2. Activa la opción **"Respuesta sin coincidencia"** (No Match Reply) si no lo está.
3. Selecciona la frecuencia deseada:
   - **Responder siempre** (Reply Every Time): Envía una respuesta cada vez que el mensaje no coincida. Útil si quieres asegurarte de que cada mensaje tenga respuesta.
   - **Una vez al día** (Once Per Day): Envía solo una respuesta al día por usuario. Recomendado para evitar saturar al usuario con el mismo mensaje repetitivo.
4. Haz clic en **Guardar configuración** (Save Settings).


### ¿Qué debería decir exactamente el mensaje de no-coincidencia?

Un buen mensaje de no-coincidencia debería incluir estos elementos:

1. **Disculpa educada**: "Lo siento, no entendí bien tu mensaje."
2. **Ofrecimiento de alternativas claras**: "Prueba escribiendo *ayuda* o *menú* para ver las opciones disponibles."
3. **Botones de acceso rápido**: Incluye 2-3 botones a las secciones más importantes de tu chatbot.
4. **Ofrecimiento de contacto humano**: "Si prefieres, escribe *soporte* para hablar con un agente humano."
5. **Tono amigable y empático**: Usa un tono que no frustre al usuario, sino que lo invite a intentar de nuevo.

**Ejemplo:**
"😅 ¡Ups! No logré entender tu mensaje.

No te preocupes, puedes probar con estas opciones:

[Ver Catálogo] [Hablar con Soporte] [Ayuda / Comandos]

O simplemente escríbenos de nuevo con más detalles y haremos todo lo posible por ayudarte."

### ¿Cómo saber si un mensaje de no-coincidencia está funcionando?

Puedes monitorear la efectividad del mensaje de no-coincidencia desde el panel de estadísticas de E-SMART360:
- Revisa el número de veces que se activa el mensaje de no-coincidencia en un período de tiempo.
- Analiza si los usuarios que reciben este mensaje continúan interactuando o abandonan la conversación.
- Ajusta el texto y las opciones ofrecidas en función del comportamiento observado.
- Si muchos mensajes caen en no-coincidencia, considera añadir nuevas palabras clave o mejorar la cobertura de tu chatbot.

---

## Uso del Editor Visual de Flujo para Bots Avanzados

El editor visual de flujo (Visual Flow Bot Builder) es la herramienta central para crear chatbots en E-SMART360. Aquí te explicamos cómo usarlo para construir bots complejos más allá de respuestas simples.

### Componentes disponibles en el editor visual

El editor visual de flujo ofrece varios tipos de componentes que puedes arrastrar y conectar en el canvas:

- **Inicio del flujo (Start Bot Flow)**: Es el punto de entrada del bot. Aquí configuras la palabra clave que activa el bot y seleccionas el tipo de coincidencia (exacta o parcial).
- **Componente de texto**: Envía un mensaje de texto al usuario. Puedes personalizar el encabezado, el cuerpo y el pie del mensaje.
- **Componente interactivo
- **Componente interactivo**: Crea mensajes con botones en línea que permiten al usuario elegir entre varias opciones. Cada botón puede desencadenar una acción diferente como enviar un mensaje, iniciar un nuevo flujo o redirigir a un agente humano.
- **Componente de botones (Inline Button)**: Configura botones individuales dentro de un componente interactivo. Puedes definir el texto del botón y la acción que realiza al ser presionado.
- **Componente de ubicación (Location)**: Añade el botón para que el usuario comparta su ubicación geográfica.
- **Componente de imagen o video**: Inserta contenido multimedia en las respuestas del bot.
- **Componente de retardo (Delay)**: Configura una pausa antes de enviar el siguiente mensaje, simulando una conversación más natural.
- **Componente de acción**: Ejecuta acciones como enviar datos a un webhook, actualizar un campo personalizado o cerrar la conversación.

### Cómo crear un bot con múltiples pasos en el editor visual


### Iniciar un nuevo bot

Desde el Gestor de Bot, haz clic en **"Crear nuevo bot"**. Se abrirá el canvas del editor visual con el componente **Start Bot Flow** ya colocado. Haz doble clic en él para abrir la configuración y establecer el nombre del bot y la palabra clave que lo activará.

### Configurar la palabra clave y el tipo de coincidencia

En la ventana de configuración del Start Bot Flow, ingresa:
- **Título**: Un nombre descriptivo para identificar el bot.
- **Palabra clave**: El texto que activará este bot (por ejemplo, "catálogo", "/ayuda", o una pregunta completa).
- **Tipo de coincidencia**:
  - **Coincidencia exacta (Exact Match)**: Solo se activa con la palabra exacta. Ideal para rompehielos y comandos.
  - **Coincidencia parcial (String Match)**: Se activa si el mensaje del usuario contiene la palabra clave en cualquier parte. Ideal para palabras clave generales como "hola" o "ayuda".
- Haz clic en **Guardar** para confirmar.

### Agregar un componente de respuesta

Arrastra una conexión desde el **Next socket** del Start Bot Flow y suéltala en el canvas. Se mostrarán las opciones de componentes disponibles. Selecciona el tipo de componente que deseas agregar: texto, interactivo, ubicación, imagen, etc.

Haz doble clic en el componente para abrir su configuración y personalizar el mensaje que el usuario recibirá.

### Añadir botones interactivos

Si seleccionaste un componente interactivo, arrastra una conexión desde el **button socket** del componente. Aparecerá un componente **Inline Button**. Configúralo con:
- **Texto del botón**: Lo que verá el usuario (ej: "Ver catálogo completo").
- **Acción del botón**: Qué sucede al hacer clic (enviar mensaje, iniciar flujo o acción por defecto).
- Repite el proceso para agregar más botones según sea necesario.

### Configurar el mensaje final y guardar

Agrega un componente de texto como paso final del flujo. Este mensaje se enviará después de que el usuario interactúe con los botones. Puede ser un mensaje de confirmación, un enlace útil o una invitación a seguir explorando.

Haz clic en el botón **Guardar** en la esquina superior derecha del canvas para guardar todo el flujo. Es importante guardar antes de salir; los cambios no se guardan automáticamente.

### Cómo probar un bot después de crearlo

Para asegurarte de que tu bot funciona correctamente antes de ponerlo en producción:

1. Abre WhatsApp en tu dispositivo móvil o en WhatsApp Web.
2. Envía la palabra clave exacta que configuraste para el bot.
3. Observa la respuesta del chatbot y verifica que coincide con lo que configuraste en el editor visual.
4. Prueba todas las ramificaciones del flujo: haz clic en cada botón, envía variaciones de la palabra clave, y verifica los mensajes de error o no-coincidencia.
5. Si algo no funciona, vuelve al editor visual y revisa:
   - Que la palabra clave está correctamente escrita en el componente Start Bot Flow.
   - Que todos los componentes están correctamente conectados (las líneas de conexión deben estar sólidas).
   - Que has hecho clic en **Guardar** después de cualquier modificación.


> **Consejo de prueba:** Crea un suscriptor de prueba en E-SMART360 con tu propio número de WhatsApp. Así puedes hacer todas las pruebas necesarias sin afectar a usuarios reales y ver exactamente cómo se ve cada respuesta desde la perspectiva del cliente.

---

## Mejores prácticas y estrategias avanzadas

### Cómo combinar todas las funcionalidades para una experiencia óptima

La clave para un chatbot exitoso no está en usar todas las funcionalidades, sino en usarlas de manera coordinada. Aquí te presentamos una estrategia recomendada:

1. **Mensaje de bienvenida**: Saluda, presenta tu propuesta de valor y ofrece las primeras opciones.
2. **Rompehielos**: Proporciona 3-5 opciones de inicio para usuarios que prefieren hacer clic en lugar de escribir.
3. **Comandos**: Ofrece acceso rápido a funciones específicas para usuarios avanzados.
4. **Botón de ubicación**: Úsalo en momentos estratégicos donde la ubicación sea relevante (verificar cobertura, encontrar sucursal, coordinar entrega).
5. **Mensaje de no-coincidencia**: Asegura que ningún mensaje quede sin respuesta, ofreciendo siempre una salida.

### Ejemplo de flujo completo de atención al cliente

A continuación, un ejemplo de cómo se vería una conversación real con todas estas funcionalidades activas:

**Paso 1 — Entrada del usuario:**
El usuario abre WhatsApp y escribe al número de la empresa. Recibe automáticamente el mensaje de bienvenida con botones interactivos.

**Paso 2 — Selección de rompehielos:**
El usuario hace clic en "Estado de mi pedido 📦". El chatbot detecta la coincidencia exacta y activa el flujo correspondiente.

**Paso 3 — Interacción con el bot:**
El bot responde: "Claro, voy a consultar el estado de tu pedido. Por favor, comparte tu número de pedido."
El usuario escribe: "PED-12345"
El bot consulta la base de datos y responde: "Tu pedido PED-12345 está en camino y llegará mañana antes de las 6 PM. ¿Necesitas algo más?"

**Paso 4 — Uso de comandos:**
El usuario escribe "/catalogo" para ver los productos disponibles.
El bot responde con un mensaje que muestra las categorías principales.

**Paso 5 — Botón de ubicación:**
El usuario quiere saber cuál es la tienda más cercana. El bot envía el componente de ubicación.
El usuario pulsa "Enviar Ubicación" y el chatbot identifica la sucursal más próxima, enviando la dirección y el horario.

### Estrategias adicionales para maximizar resultados

Además de las funcionalidades básicas, considera estas estrategias avanzadas:

1. **Segmentación por comportamiento**: Usa los datos de los suscriptores (ubicación, historial de compras, interacciones previas) para personalizar las respuestas del bot y ofrecer opciones relevantes.

2. **Secuencias de seguimiento**: Combina el mensaje de bienvenida con secuencias automáticas de seguimiento. Si el usuario no interactúa después del mensaje inicial, programa un mensaje de recordatorio a las 24 horas.

3. **Integración con otras herramientas**: Conecta tu chatbot con Google Sheets, Shopify, WooCommerce o Zapier para que los datos recopilados a través de los comandos y la ubicación se sincronicen automáticamente con tu CRM o sistema de gestión.

4. **Pruebas A/B**: Experimenta con diferentes versiones del mensaje de bienvenida, rompehielos y comandos para identificar cuáles generan mayor engagement. Cambia una variable a la vez (por ejemplo, el texto del saludo) y compara los resultados.

5. **Análisis de conversaciones**: Revisa periódicamente el chat en vivo y las transcripciones de conversaciones para identificar patrones, preguntas frecuentes no cubiertas y oportunidades de mejora.

---

## Preguntas Frecuentes (FAQs)


### ¿Cuál es la diferencia entre un comando y un rompehielos?

Los rompehielos son botones visibles que aparecen automáticamente en el chat para que los usuarios hagan clic sin escribir. Los comandos, en cambio, son palabras clave con barra inclinada (como /ayuda) que el usuario debe escribir manualmente. Los rompehielos son ideales para nuevos usuarios; los comandos son mejores para usuarios frecuentes que ya conocen el sistema.

### ¿Cuántos rompehielos puedo tener como máximo?

WhatsApp Cloud API permite hasta 5 preguntas rompehielos por número de teléfono. Elige estratégicamente las 5 preguntas más importantes para tu negocio. Puedes combinarlas con comandos (sin límite conocido) para ampliar las opciones disponibles sin ocupar espacio visual.

### ¿El botón de ubicación funciona en WhatsApp Web?

Sí, el botón de ubicación funciona en WhatsApp Web, pero requiere que el navegador tenga permisos de geolocalización activados. En dispositivos móviles (Android e iOS) la experiencia es más fluida, ya que WhatsApp solicita automáticamente los permisos de ubicación del sistema. En WhatsApp Web, el usuario deberá conceder permiso a través del navegador.

### ¿Puedo editar el mensaje de bienvenida después de activarlo?

Sí, puedes editar el mensaje de bienvenida en cualquier momento desde el Gestor de Bot de E-SMART360. Simplemente ve a Acciones → Get Started, edita el contenido y guarda los cambios. No necesitas desactivar ni volver a activar el mensaje desde WhatsApp Cloud API; los cambios se reflejan automáticamente.

### ¿Qué hago si mi mensaje de no-coincidencia se envía demasiadas veces?

Si el mensaje de no-coincidencia se envía con demasiada frecuencia, considera estas soluciones:
- Cambia la frecuencia a "Una vez al día" desde la configuración de no-coincidencia.
- Revisa si hay palabras clave faltantes y agrega más bots para cubrir las consultas comunes que actualmente caen en no-coincidencia.
- Usa coincidencia parcial (String Match) en lugar de coincidencia exacta para capturar más variaciones de una misma consulta.
- Analiza el chat en vivo para identificar patrones en los mensajes que no están siendo atendidos correctamente.

### ¿Cómo puedo ver qué comandos ha usado un suscriptor?

Desde el Gestor de Suscriptores de E-SMART360, puedes acceder al historial de conversaciones de cada suscriptor. Allí verás todos los mensajes enviados y recibidos, incluyendo los comandos que el usuario haya escrito. También puedes usar el chat en vivo para monitorear conversaciones en tiempo real y ver qué comandos y rompehielos están utilizando los suscriptores.

### ¿Es necesario tener conocimientos técnicos para configurar estas funcionalidades?

No, E-SMART360 está diseñado para que cualquier persona pueda configurar mensajes de bienvenida, rompehielos, comandos y el botón de ubicación sin conocimientos técnicos. El editor visual de flujo usa una interfaz de arrastrar y soltar, y los pasos para activar estas funcionalidades en WhatsApp Cloud API son guiados. Si puedes usar un editor de texto y hacer clic en botones, puedes configurar todas estas funcionalidades.

---

## Ejemplos prácticos adicionales



### Ejemplo 1: Tienda de ropa online

Una tienda de ropa configura su chatbot con:

**Mensaje de bienvenida:**
"¡Hola! Bienvenido a ModaTrend 👗. Descubre nuestras últimas colecciones y ofertas exclusivas."

**Rompehielos:**
- "Ver colección de verano ☀️"
- "Rastrear mi pedido 📦"
- "Tallas y guía de talles 📏"
- "Hablar con asesora de moda 💁"
- "Promociones activas 🏷️"

**Comandos:**
- /novedades — Últimas llegadas
- /outlet — Descuentos especiales
- /tiendas — Ubicación de sucursales

**Botón de ubicación:**
Al activarlo, el chatbot muestra la sucursal más cercana con stock disponible del producto que el usuario está consultando.

**Resultado:** La tienda incrementó sus ventas por WhatsApp en un 35% y redujo las consultas repetitivas en un 50%.

### Ejemplo 2: Restaurante de comida rápida

Un restaurante configura su chatbot con:

**Mensaje de bienvenida:**
"¡Bienvenido a QuickBite 🍔! Haz tu pedido en segundos o descubre nuestras promociones del día."

**Rompehielos:**
- "Ver menú completo 🍕"
- "Hacer pedido para llevar 🥡"
- "Promociones del día 🔥"
- "¿Dónde estamos? 📍"

**Comandos:**
- /menu — Menú con precios
- /pedido — Iniciar pedido
- /horario — Horarios de atención
- /domicilio — Zonas de cobertura

**Botón de ubicación:**
Al activarlo, el chatbot identifica la sucursal más cercana y verifica si hay cobertura de delivery para esa dirección.

**Resultado:** El restaurante redujo el tiempo promedio de atención de 5 minutos a 45 segundos y aumentó los pedidos por WhatsApp en un 60%.

---

## Conclusión

Configurar un mensaje de bienvenida, rompehielos, comandos y el botón de ubicación en tu chatbot de WhatsApp transforma la experiencia de tus clientes y optimiza la atención al cliente de tu negocio. Con E-SMART360, todas estas funcionalidades están al alcance de tu mano, sin necesidad de conocimientos técnicos avanzados.

**Resumen de lo aprendido:**

- El **mensaje de bienvenida** establece la primera impresión y guía al usuario. Se configura desde el Gestor de Bot y se activa desde WhatsApp Cloud API.
- Los **rompehielos** proporcionan hasta 5 botones de acceso rápido para que los nuevos usuarios inicien la conversación sin esfuerzo.
- Los **comandos** con barra inclinada permiten a los usuarios avanzados acceder rápidamente a funciones específicas.
- El **botón de ubicación** recopila la localización del usuario de forma sencilla y respetuosa con su privacidad.
- El **mensaje de no-coincidencia** actúa como red de seguridad para que ningún mensaje quede sin respuesta.
- El **editor visual de flujo** te permite crear chatbots complejos con múltiples pasos y ramificaciones.

Empieza hoy mismo a configurar tu chatbot y ofrece una experiencia de atención al cliente moderna, rápida y eficiente. Tus clientes te lo agradecerán.


> **¿Listo para empezar?** Inicia sesión en tu panel de E-SMART360 y dirígete al Gestor de Bot para configurar estas funcionalidades. Si tienes dudas, consulta nuestra documentación o contacta a nuestro equipo de soporte. ¡Estamos aquí para ayudarte a crear la mejor experiencia de chatbot para tu negocio!
