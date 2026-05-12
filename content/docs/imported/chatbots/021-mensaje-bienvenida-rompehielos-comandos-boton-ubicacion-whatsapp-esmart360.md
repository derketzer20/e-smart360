---
title: "Chatbot de WhatsApp: Mensaje de Bienvenida, Rompehielos, Comandos y Botón de Ubicación"
description: "Guía completa para configurar el mensaje de bienvenida, rompehielos, comandos por palabra clave y el botón de ubicación en tu chatbot de WhatsApp con E-SMART360. Aprende paso a paso a personalizar la experiencia de tus suscriptores."
section: "chatbots-omnicanal"
order: 123
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "021-mensaje-bienvenida-rompehielos-comandos-boton-ubicacion-whatsapp-esmart360"
canonicalGroup: "chatbot-de-whatsapp-mensaje-de-bienvenida-rompehielos-comandos-y-boton-de-ubicacion"
tags: ["chatbots-omnicanal", "chatbots"]
staging: true
---
# Chatbot de WhatsApp: Mensaje de Bienvenida, Rompehielos, Comandos y Botón de Ubicación

<Update title="Actualización de funcionalidades" date="18 Feb 2026" />

¿No sería increíble poder enviar un mensaje de bienvenida automático a un suscriptor de WhatsApp en cuanto entra a la ventana de chat? ¿O tener preguntas predefinidas para que solo tengan que hacer clic en un rompehielos? ¿O comandos directos para que el chatbot ejecute acciones específicas?

E-SMART360 ha incorporado estas funcionalidades a su chatbot de WhatsApp: **mensaje de bienvenida**, **rompehielos (icebreakers)**, **comandos por palabra clave** y **botón de ubicación**. Cada una de estas herramientas está diseñada para mejorar la primera impresión, reducir la fricción inicial y facilitar la navegación del usuario dentro del chat.

En esta guía completa aprenderás a configurar y usar cada una de estas funciones paso a paso.


> **Resumen rápido:** El mensaje de bienvenida saluda automáticamente a los nuevos suscriptores. Los rompehielos ofrecen preguntas predefinidas para iniciar la conversación. Los comandos ejecutan acciones específicas con una barra inclinada (ej: /ayuda). El botón de ubicación permite a los usuarios compartir su localización con un solo clic.

---

## Mensaje de Bienvenida

El mensaje de bienvenida es el primer contacto que tiene un suscriptor con tu chatbot. Se envía de forma automática en cuanto el usuario entra a la ventana de chat por primera vez. Una buena bienvenida marca la diferencia entre un usuario que se queda y uno que se va.

### Paso 1: Crear el mensaje "Get Started"

Sigue estos pasos para crear el contenido del mensaje de bienvenida:


### Accede al Gestor de Bots

Desde el panel de control de E-SMART360, ve a la sección **"Gestor de Bots"** del canal de WhatsApp que quieras configurar.

### Edita el botón de acciones

Desplázate hacia abajo y haz clic en el botón **"Actions"** (Acciones). Allí encontrarás la opción **"Get Started"**.

### Personaliza el mensaje

Edita el mensaje predeterminado de "Get Started" para que se ajuste a las necesidades de tu negocio. Puedes modificar el texto y agregar más componentes a la respuesta del bot, de la misma forma en que creas chatbots. Incluye imágenes, botones, listas o cualquier otro elemento interactivo disponible.


> El mensaje "Get Started" puede contener texto, imágenes, botones interactivos (CTA), listas de opciones e incluso enlaces. Aprovecha al máximo estos componentes para crear una primera impresión impactante.

### Paso 2: Activar el mensaje de bienvenida

Una vez creado el mensaje "Get Started" desde E-SMART360, es necesario activarlo desde la API de WhatsApp Cloud. Sigue estas instrucciones:


### Accede a la configuración del número

Desde el panel de E-SMART360, ve a **"Conectar Cuenta"** y haz clic en el botón **"Administrar"** del bot conectado. Alternativamente, puedes acceder directamente a la página de configuración de números de teléfono de WhatsApp Cloud API.

### Ve a la configuración del número

Haz clic en el botón de **configuración** (engranaje) del número de teléfono que tienes conectado.

### Activa los mensajes de bienvenida

Selecciona la opción **"Automatización"** y haz clic en el botón **"Activar"** que aparece junto a "Mensajes de bienvenida".


> ¡Listo! A partir de este momento, cada vez que un nuevo suscriptor entre al chatbot de WhatsApp, recibirá automáticamente el mensaje de bienvenida que configuraste. Puedes implementar un chatbot completamente funcional como mensaje de bienvenida.

### Consideraciones importantes para tu mensaje de bienvenida

Un buen mensaje de bienvenida debe:

- **Ser breve y directo**: Los usuarios no quieren leer párrafos largos. Ve al punto.
- **Incluir una llamada a la acción clara**: Indica al usuario qué debe hacer a continuación.
- **Reflejar la personalidad de tu marca**: Usa un tono acorde a tu negocio.
- **Ofrecer valor inmediato**: Explica brevemente qué puede hacer el usuario en el chat.


### Ejemplo de mensaje de bienvenida efectivo

**Texto:** "¡Hola {{nombre}}! 👋 Bienvenido a [Nombre de tu empresa]. Estoy aquí para ayudarte. ¿Qué te gustaría hacer hoy?

1. 🔍 Ver nuestros productos
2. 📦 Consultar tu pedido
3. 🆘 Hablar con un agente

Responde con el número o escribe tu pregunta."

---

## Rompehielos (Icebreakers)

Los rompehielos son preguntas o frases predefinidas que aparecen como botones al inicio de la conversación. Ayudan a los suscriptores a iniciar una conversación con el chatbot de manera sencilla, reduciendo la fricción y las tasas de abandono.

A diferencia del mensaje de bienvenida, los rompehielos deben crearse primero desde la API de WhatsApp Cloud, y luego se configuran las respuestas del bot desde E-SMART360.

### Configuración de rompehielos


### Accede a la configuración de WhatsApp Cloud API

Ve al panel de **WhatsApp Manager** y selecciona el número de teléfono de tu bot.

### Agrega preguntas de rompehielos

Dentro de las opciones de configuración, busca la sección **"Rompehielos"** (Icebreakers) y haz clic en **"Editar"**. Agrega las preguntas que quieras que aparezcan como opciones. Puedes tener múltiples preguntas.

### Guarda los cambios

Una vez que hayas agregado todas las preguntas necesarias, guarda la configuración.

### Crea los bots con las preguntas como palabras clave

Copia cada pregunta exactamente como la escribiste y úsala como **palabra clave** en el Gestor de Bots de E-SMART360. Cada pregunta debe tener su propio bot independiente con las respuestas correspondientes.

### Configura las respuestas

Para cada bot, configura las respuestas que el chatbot enviará cuando un usuario seleccione esa pregunta. No te limites a respuestas simples: puedes implementar un chatbot completamente funcional para cada pregunta de rompehielos, con flujos de conversación, botones, imágenes y más.


> **Importante:** Escribe las preguntas exactamente igual en ambos lugares (WhatsApp Cloud API y E-SMART360). Cualquier variación en mayúsculas, minúsculas, tildes o signos de puntuación puede impedir que el bot detecte la coincidencia.

### Ideas de preguntas rompehielos según tu negocio



### E-commerce

- "🛍️ ¿Qué productos tienen en oferta?"
- "📦 ¿Dónde está mi pedido?"
- "💳 ¿Cómo puedo pagar?"
- "🚚 ¿Cuánto tarda el envío?"

### Servicios

- "📅 Quiero agendar una cita"
- "💰 ¿Cuánto cuesta el servicio?"
- "ℹ️ Más información sobre..."
- "📞 Hablar con un asesor"

### Soporte

- "🔑 Olvidé mi contraseña"
- "❓ Preguntas frecuentes"
- "📝 Quiero reportar un problema"
- "🔄 Quiero cancelar mi servicio"

---

## Comandos

Los comandos permiten a los usuarios ejecutar acciones específicas escribiendo una palabra clave precedida por una barra inclinada (`/`). Por ejemplo, un usuario puede escribir `/ayuda` para obtener información de soporte, o `/precios` para conocer los planes disponibles.

El procedimiento para crear comandos es similar al de los rompehielos.

### Configuración de comandos


### Accede a la configuración de comandos de WhatsApp Cloud API

Desde el **WhatsApp Manager**, ve a la sección de configuración del número de teléfono y busca la opción **"Comandos"**.

### Agrega los comandos

Haz clic en **"Editar"** y en el campo del formulario agrega un comando con la barra inclinada al inicio. Por ejemplo: `/generar`. Luego escribe una descripción breve del comando en el campo de descripción. Puedes agregar tantos comandos como necesites.

### Guarda los cambios

Después de agregar todos los comandos, haz clic en **"Guardar"**.

### Crea los bots asociados a cada comando

Al igual que con los rompehielos, debes crear un bot en E-SMART360 por cada comando. Copia el comando completo (incluyendo la barra inclinada) y úsalo como **palabra clave** en el Gestor de Bots.

### Configura las respuestas de cada comando

Define qué responderá el chatbot cuando un usuario active cada comando. Puedes hacer respuestas tan complejas como necesites, incluyendo flujos de varios pasos.


> **Sugerencia:** Crea un comando `/menu` o `/inicio` que muestre todas las opciones disponibles. Esto ayuda a los usuarios que no están familiarizados con los comandos a navegar fácilmente por tu chatbot.

### Ejemplos prácticos de comandos


### Comandos recomendados para negocios

| Comando | Descripción |
|---------|-------------|
| `/inicio` o `/menu` | Muestra el menú principal con todas las opciones disponibles |
| `/ayuda` | Abre el centro de ayuda o preguntas frecuentes |
| `/precios` | Muestra los planes y precios disponibles |
| `/contacto` | Proporciona información de contacto o deriva a un agente |
| `/pedido` | Permite consultar el estado de un pedido |
| `/catalogo` | Muestra el catálogo de productos o servicios |
| `/horario` | Indica el horario de atención |
| `/ubicacion` | Solicita o muestra la ubicación de la tienda |
| `/suscripcion` | Gestiona la suscripción del usuario |

---

## Botón de Ubicación

El componente de **Ubicación** se utiliza para recopilar la ubicación geográfica de los suscriptores de forma sencilla y rápida. Los suscriptores no necesitan escribir su dirección manualmente; simplemente presionan un botón y su ubicación se envía automáticamente.

### Cómo agregar el botón de ubicación


### Accede al Gestor de Bots

Desde el panel de E-SMART360, ve al Gestor de Bots y selecciona el bot donde quieras agregar el componente de ubicación.

### Agrega el componente de ubicación

Dentro de las respuestas del bot, busca el componente **"Ubicación"** (Location) y agrégalo a la respuesta.

### Personaliza el texto

Escribe el texto que acompañará al botón de ubicación. Este texto se mostrará al suscriptor junto con un botón etiquetado como **"Enviar Ubicación"**.

En cuanto el suscriptor presione el botón, su ubicación se enviará al chatbot automáticamente. No se requiere ninguna acción adicional por parte del usuario.

### Almacenamiento y acceso a la ubicación

La ubicación del suscriptor se almacena automáticamente en su **información de perfil**. Puedes acceder a estos datos desde dos lugares:

- **Chat en vivo:** Cuando converses con un suscriptor a través del chat en vivo, podrás ver su ubicación en el panel de información del contacto.
- **Gestor de Suscriptores:** En la sección de administración de suscriptores, cada perfil mostrará la ubicación compartida, junto con otros datos como nombre, teléfono, etiquetas y campos personalizados.


> **Usos prácticos de la ubicación:**
- Mostrar la tienda más cercana al usuario
- Calcular costos de envío según la distancia
- Enviar ofertas personalizadas basadas en la zona geográfica
- Verificar direcciones de entrega en pedidos
- Asignar automáticamente un agente de la región correspondiente

### Combinando ubicación con flujos condicionales

La ubicación recopilada puede utilizarse como condición en flujos de chatbot más complejos. Por ejemplo:



### Flujo: Envío por zona

1. El usuario presiona "Enviar Ubicación"
2. El chatbot recibe las coordenadas
3. Según la zona, el bot responde con el tiempo de entrega estimado
4. Ofrece opciones de envío disponibles para esa área

### Flujo: Sucursal más cercana

1. El usuario solicita la ubicación de sucursales
2. Presiona "Enviar Ubicación"
3. El chatbot calcula qué sucursal está más cerca
4. Muestra la dirección, horario y teléfono de esa sucursal

---

## Configuración Avanzada: Respuesta "Sin Coincidencia" (No Match Reply)

Cuando un suscriptor envía un mensaje que no coincide con ninguna palabra clave, rompehielos o comando configurado, es importante que igual reciba una respuesta. Para esto existe la **Respuesta Sin Coincidencia** (No Match Reply).

### ¿Qué es una respuesta sin coincidencia?

Es un mensaje predeterminado que se envía cuando el chatbot no encuentra ninguna regla que coincida con el mensaje del usuario. En lugar de dejar el mensaje sin respuesta, el bot ofrece una salida amigable que puede:

- Sugerir una acción alternativa.
- Ofrecer un enlace a más información.
- Derivar al usuario a un agente humano.
- Mostrar el menú principal nuevamente.

### Cómo configurar la respuesta sin coincidencia


### Accede al Gestor de Bots

Ve al **Gestor de Bots** de WhatsApp en el panel de E-SMART360.

### Selecciona No Match Reply

Haz clic en **"Acciones"** y luego selecciona **"No Match Reply"**. Esto abrirá el editor visual de flujos.

### Edita la respuesta

Personaliza el mensaje de respuesta. Puedes agregar texto, imágenes, botones o contenido interactivo.

### Configura la frecuencia

En la sección de **Configuración** del Gestor de Bots, activa la respuesta sin coincidencia y elige la frecuencia:
- **Responder siempre:** Envía la respuesta cada vez que un mensaje no coincida.
- **Una vez al día:** Envía solo una respuesta por día para evitar mensajes repetitivos.

### Guarda la configuración

Haz clic en **"Guardar Configuración"** para aplicar los cambios.


> Con esta configuración, todos los suscriptores reciben siempre una respuesta relevante, incluso cuando el chatbot no entiende su mensaje. Esto mejora significativamente la experiencia de usuario y reduce la frustración.

### Ejemplo de respuesta sin coincidencia

```
No he entendido bien tu mensaje. 😅

Puedes probar con estas opciones:

📋 Escribe "menú" para ver todas las opciones
🆘 Escribe "ayuda" para hablar con un agente
🔍 Escribe lo que buscas con otras palabras

¿En qué más puedo ayudarte?
```

---

## Cómo crear un chatbot basado en palabras clave

Una vez que has configurado los elementos anteriores (bienvenida, rompehielos, comandos y ubicación), el siguiente paso es dominar la creación de chatbots basados en palabras clave. E-SMART360 cuenta con un **Constructor Visual de Flujos (Visual Flow Bot Builder)** que facilita todo el proceso.

### Acceso al Gestor de Bots

Desde el panel de control de E-SMART360, ve al menú **"Gestor de Bots"**. Selecciona la cuenta de bot que deseas configurar y haz clic en **"Respuesta del Bot"** para continuar.

### Crear un nuevo chatbot

Haz clic en el botón **"Crear"** dentro de la configuración de Respuesta del Bot. Se abrirá el **Constructor Visual de Flujos**, un lienzo interactivo donde podrás diseñar visualmente todo el flujo de conversación.

### Nombrar el chatbot

Localiza el componente **"Iniciar Flujo del Bot"** (Start Bot Flow) y haz doble clic para abrir el modal de configuración. Ingresa un nombre en el campo **Título** y, opcionalmente, selecciona una etiqueta y una secuencia.

### Configurar la palabra clave de activación

En el modal de configuración, ingresa la palabra clave que activará el bot (por ejemplo: "Hola", "Ayuda", "Productos"). E-SMART360 ofrece dos modos de coincidencia:

- **Coincidencia exacta:** El bot solo se activa con la palabra clave específica.
- **Coincidencia de cadena:** El bot se activa si el mensaje contiene la palabra clave en cualquier parte (ej: "Hola, necesito ayuda" activaría el bot con la palabra clave "ayuda").


> **Coincidencia exacta vs. Coincidencia de cadena:**
- Usa **coincidencia exacta** para comandos como `/menu` donde necesitas precisión total.
- Usa **coincidencia de cadena** para palabras clave como "precio" donde los usuarios pueden escribir "¿Cuál es el precio?" o "me interesa el precio del producto".

### Configurar el mensaje de respuesta

Arrastra una conexión desde el conector de salida (Next) del componente "Iniciar Flujo del Bot" y suéltala en el lienzo. Se mostrarán diferentes opciones de componentes. Selecciona el **Componente Interactivo**.

Haz doble clic en él para abrir el modal de configuración. Completa los siguientes campos:

- **Encabezado del mensaje:** Texto opcional que aparece en negrita al inicio.
- **Cuerpo del mensaje:** Texto principal (obligatorio).
- **Pie del mensaje:** Texto opcional al final.

También puedes establecer un tiempo de retardo si deseas que el bot "piense" antes de responder.

### Agregar botones interactivos

Desde el conector del Componente Interactivo, arrastra una conexión al lienzo para agregar botones. Aparecerá un **Componente de Botón en Línea**. Haz doble clic e ingresa:

- **Texto del botón:** La etiqueta que verá el usuario.
- **Acción del botón:** Qué sucede al hacer clic. Las opciones incluyen:
  - Enviar un mensaje
  - Iniciar un flujo
  - Acción predeterminada del sistema

Puedes agregar tantos botones como necesites, cada uno con su propia acción y flujo asociado.

### Guardar y probar el chatbot

Para finalizar, conecta un **Componente de Texto** como mensaje final del flujo, configúralo con el texto deseado y haz clic en **"Guardar"** (esquina superior derecha del lienzo).

Para probar el chatbot, abre WhatsApp, escribe la palabra clave que configuraste y envíala. Observa la respuesta del bot para confirmar que funciona correctamente.


> **Solución de problemas comunes:**
- **¿La palabra clave no activa el bot?** Verifica que esté escrita correctamente en el componente de activación.
- **¿Los botones no aparecen?** Asegúrate de que estén correctamente vinculados a un componente interactivo.
- **¿No hay mensaje final?** Revisa que el Componente de Texto esté agregado y configurado.
- **¿Los cambios no se guardan?** Siempre haz clic en el botón "Guardar" antes de salir del constructor visual.

---

## Cómo crear comandos de ventas con secuencias automatizadas

Además de los comandos básicos, E-SMART360 permite crear **secuencias de ventas automatizadas** que guían al suscriptor a través de un embudo de conversión completo.

### ¿Qué es una secuencia de ventas?

Una secuencia de ventas es una serie de mensajes automatizados que se envían en un orden específico para educar, nutrir y convertir a un lead en cliente. Por ejemplo:



### Secuencia: Bienvenida para nuevos leads

**Día 1:** Mensaje de bienvenida con presentación de la marca
**Día 2:** Caso de éxito o testimonio de cliente
**Día 3:** Oferta especial o descuento por tiempo limitado
**Día 4:** Recordatorio final con llamada a la acción
**Día 5:** Mensaje de seguimiento si no hubo respuesta

### Secuencia: Recuperación de carrito

**Hora 1:** "Olvidaste algo en tu carrito 🛒"
**Hora 6:** "¿Necesitas ayuda con tu compra?"
**Día 1:** "Tu carrito sigue esperando - ¡10% de descuento!"
**Día 3:** "Última oportunidad - El descuento expira pronto"

### Configuración de secuencias

1. En el **Gestor de Bots**, crea un nuevo bot y asígnale una palabra clave como "comprar" o "quiero comprar".
2. Configura la respuesta inicial con un mensaje de bienvenida a la secuencia.
3. Utiliza el **constructor visual** para conectar múltiples componentes en secuencia.
4. Define tiempos de espera entre mensajes usando el componente de retardo.
5. Agrega condicionales: si el usuario responde "sí" continúa, si responde "no" deriva a otro flujo.

---

## Preguntas Frecuentes


### ¿Puedo tener diferentes mensajes de bienvenida para diferentes canales?

Sí. E-SMART360 te permite configurar mensajes de bienvenida independientes para cada canal: WhatsApp, Facebook Messenger, Instagram, Telegram y Web Chat. Cada canal tiene su propia configuración dentro del Gestor de Bots correspondiente.

### ¿Los mensajes de bienvenida cuentan dentro de la ventana de 24 horas?

Sí, el mensaje de bienvenida se envía dentro de la ventana de servicio al cliente (24 horas desde el último mensaje del usuario). Como es una respuesta iniciada por el usuario (al entrar al chat), no consume una plantilla de mensaje ni está sujeto a los límites de plantillas de marketing.

### ¿Puedo desactivar el mensaje de bienvenida sin perder la configuración?

Sí. Desde la configuración de WhatsApp Cloud API puedes desactivar temporalmente los mensajes de bienvenida sin perder el contenido que hayas creado. Cuando lo reactives, el mensaje seguirá ahí con toda su configuración previa.

### ¿Cuántos rompehielos o comandos puedo tener?

WhatsApp Cloud API permite hasta 10 preguntas de rompehielos y hasta 20 comandos. No hay límite en la cantidad de bots que puedes crear en E-SMART360 para responder a cada uno.

### ¿El botón de ubicación funciona en WhatsApp Web?

Sí, el botón de ubicación funciona tanto en WhatsApp Web como en la aplicación móvil. En la web, al hacer clic en "Enviar Ubicación", el navegador solicitará permiso para acceder a la ubicación del dispositivo.

### ¿Puedo usar variables personalizadas en los mensajes de bienvenida?

Sí. E-SMART360 admite variables como {{nombre}}, {{telefono}}, {{email}} y cualquier campo personalizado que hayas configurado en el perfil del suscriptor. Esto te permite personalizar cada mensaje de bienvenida de forma única.

### ¿Qué hago si el botón de ubicación no aparece para algunos usuarios?

Esto puede ocurrir si el usuario está usando una versión antigua de WhatsApp. Recomienda a tus usuarios actualizar la aplicación. También verifica que el componente de ubicación esté correctamente agregado en la respuesta del bot dentro del Gestor de Bots.

### ¿Los comandos distinguen entre mayúsculas y minúsculas?

Sí, los comandos distinguen entre mayúsculas y minúsculas a menos que configures la palabra clave con coincidencia de cadena. Por ejemplo, "/Menu" no activará el bot configurado con "/menu". Se recomienda usar todo en minúsculas para evitar confusiones.

---

## Ejemplos prácticos y casos de uso

### Caso 1: Tienda de ropa online

Una tienda de ropa implementó los siguientes elementos en su chatbot de WhatsApp:

1. **Mensaje de bienvenida:** "¡Bienvenido a ModaShop! 👗 Descubre las últimas tendencias. Escribe 'catálogo' para ver nuestra colección o 'ayuda' si necesitas asistencia."
2. **Rompehielos:** "¿Buscas algo en especial?", "Quiero ver las novedades", "Tengo una consulta sobre mi pedido"
3. **Comandos:** `/talles`, `/envios`, `/devoluciones`, `/ofertas`
4. **Botón de ubicación:** Para encontrar la tienda física más cercana


> **Resultado:** La tienda redujo en un 40% las consultas básicas por teléfono y aumentó en un 25% la tasa de conversión de visitantes a compradores.

### Caso 2: Restaurante con servicio a domicilio

Un restaurante local configuró su chatbot para:

1. **Mensaje de bienvenida:** "¡Hola! 🍕 Bienvenido a Pizzas del Valle. ¿Quieres ver nuestro menú o hacer un pedido?"
2. **Rompehielos:** "Quiero ver el menú", "¿Cuánto tarda la entrega?", "Horarios y ubicación"
3. **Comandos:** `/menu`, `/promos`, `/horario`, `/pedir`
4. **Botón de ubicación:** Para calcular el tiempo de entrega según la distancia


> **Resultado:** Las órdenes por WhatsApp aumentaron un 60% y el tiempo promedio de atención se redujo de 8 minutos a 45 segundos.

### Caso 3: Clínica dental

Una clínica dental utiliza:

1. **Mensaje de bienvenida:** "Bienvenido a Clínica DentalCare 🦷 ¿Necesitas agendar una cita o tienes alguna consulta?"
2. **Rompehielos:** "Quiero agendar una cita", "¿Cuáles son sus servicios?", "Dolor o emergencia"
3. **Comandos:** `/cita`, `/servicios`, `/emergencia`, `/ubicacion`, `/precios`
4. **Botón de ubicación:** Para que el paciente comparta su ubicación y reciba indicaciones para llegar


> **Resultado:** La clínica redujo las llamadas telefónicas en un 55% y automatizó el 70% de las agendaciones de citas.

---

## Mejores prácticas y recomendaciones



### Mensaje de bienvenida

✅ Sé breve y claro
✅ Incluye una llamada a la acción
✅ Personaliza con el nombre del usuario
✅ Usa emojis para dar calidez
❌ No incluyas demasiadas opciones
❌ No uses jerga técnica

### Rompehielos y comandos

✅ Prioriza los comandos más usados
✅ Usa nombres intuitivos
✅ Agrupa comandos por categorías
✅ Incluye siempre `/ayuda`
❌ No uses comandos demasiado largos
❌ No dupliques funcionalidades

### Recomendaciones adicionales para optimizar tu chatbot

- **Prueba antes de lanzar:** Verifica cada flujo con diferentes dispositivos y versiones de WhatsApp.
- **Monitorea las métricas:** Revisa qué rompehielos y comandos se usan más para optimizar tu chatbot.
- **Actualiza periódicamente:** Mantén la información actualizada (precios, horarios, promociones).
- **Ofrece siempre una salida humana:** Asegúrate de que los usuarios puedan contactar a un agente si el chatbot no resuelve su consulta.
- **A/B test de mensajes:** Prueba diferentes versiones de tus mensajes de bienvenida para ver cuál funciona mejor.

---

## Conclusión

Configurar correctamente el **mensaje de bienvenida**, los **rompehielos**, los **comandos** y el **botón de ubicación** en tu chatbot de WhatsApp transforma la experiencia de tus suscriptores desde el primer momento. Estas herramientas trabajan juntas para:

- **Reducir la fricción inicial:** Los usuarios saben exactamente qué hacer desde el primer clic.
- **Aumentar la retención:** Una primera interacción positiva invita a volver.
- **Mejorar la eficiencia:** Automatiza respuestas comunes y libera tiempo de tu equipo.
- **Recopilar datos valiosos:** La ubicación y las interacciones te dan información sobre tus clientes.

E-SMART360 sigue añadiendo nuevas funcionalidades para mejorar tu experiencia con chatbots. Si tienes ideas o sugerencias, no dudes en compartirlas. ¡Mantente atento a las próximas actualizaciones!


> **¿Necesitas ayuda adicional?** E-SMART360 ofrece soporte técnico dedicado para ayudarte a configurar y optimizar tu chatbot de WhatsApp. Contacta a nuestro equipo de soporte para recibir asistencia personalizada.

---

## Recursos relacionados

- [Guía de configuración de WhatsApp Cloud API](/recursos/configuracion-whatsapp-cloud-api)
- [Cómo crear plantillas de mensaje en WhatsApp](/recursos/plantillas-mensaje-whatsapp)
- [Botón de acción: Configuración de Get Started y No Match](/recursos/configuracion-botones-accion)
- [URL dinámica en botones de llamada a la acción](/recursos/url-dinamica-botones-cta)

---

## Apéndice: Guía rápida de referencia

### Tabla comparativa de funcionalidades

| Funcionalidad | ¿Dónde se configura? | ¿Requiere activación en Cloud API? | ¿Se puede combinar con otros componentes? |
|---------------|---------------------|-------------------------------------|------------------------------------------|
| Mensaje de bienvenida | E-SMART360 + WhatsApp Cloud API | Sí | Sí, con todos los componentes |
| Rompehielos | WhatsApp Cloud API + E-SMART360 | No, se activa automáticamente | Sí, cada pregunta puede tener su propio flujo |
| Comandos | WhatsApp Cloud API + E-SMART360 | No, se activa automáticamente | Sí, igual que los rompehielos |
| Botón de ubicación | E-SMART360 (Gestor de Bots) | No | Sí, dentro de cualquier respuesta del bot |
| No Match Reply | E-SMART360 (Gestor de Bots) | No, pero debe activarse manualmente | Sí, incluye control de frecuencia |

### Glosario de términos


### Términos clave de la guía

- **Get Started:** Mensaje inicial que se envía automáticamente cuando un nuevo usuario interactúa con el chatbot por primera vez.
- **Rompehielos (Icebreaker):** Preguntas o frases predefinidas que aparecen como botones al inicio del chat para facilitar la primera interacción.
- **Comando:** Palabra clave precedida por una barra inclinada (/) que ejecuta una acción específica en el chatbot.
- **Palabra clave (Keyword):** Término o frase que activa una respuesta automatizada del bot.
- **Coincidencia exacta:** Modo de activación donde el bot solo responde si el mensaje del usuario coincide exactamente con la palabra clave.
- **Coincidencia de cadena:** Modo de activación donde el bot responde si el mensaje del usuario contiene la palabra clave en cualquier parte.
- **No Match Reply:** Respuesta predeterminada que se envía cuando ningún bot coincide con el mensaje del usuario.
- **Constructor Visual de Flujos:** Herramienta gráfica de E-SMART360 para diseñar flujos de conversación arrastrando y conectando componentes.
- **Componente Interactivo:** Elemento del constructor que permite agregar mensajes con botones, listas y otros elementos interactivos.
- **Secuencia de ventas:** Serie de mensajes automatizados enviados en un orden específico para guiar al lead a través del embudo de conversión.


### Checklist de implementación


> **Lista de verificación para lanzar tu chatbot:**

☐ Mensaje de bienvenida creado en el Gestor de Bots
☐ Mensaje de bienvenida activado en WhatsApp Cloud API
☐ Rompehielos configurados en WhatsApp Cloud API
☐ Bots creados en E-SMART360 para cada pregunta de rompehielos
☐ Comandos configurados en WhatsApp Cloud API
☐ Bots creados en E-SMART360 para cada comando
☐ Botón de ubicación agregado en las respuestas correspondientes
☐ Respuesta sin coincidencia (No Match Reply) configurada
☐ Frecuencia de No Match Reply definida
☐ Pruebas realizadas en diferentes dispositivos
☐ Monitoreo de métricas configurado

### Solución de problemas avanzada

#### El mensaje de bienvenida no se envía

**Posibles causas y soluciones:**

1. **No está activado en WhatsApp Cloud API:** Ve a la configuración del número y verifica que los mensajes de bienvenida estén activados en la sección de Automatización.
2. **El contenido del mensaje tiene errores:** Revisa que el mensaje "Get Started" contenga al menos texto válido y que no haya componentes rotos.
3. **El número no está verificado:** Algunos mensajes de bienvenida requieren que el número de teléfono pase por el proceso de verificación de negocio.
4. **La cuenta está en modo de prueba:** Si tu cuenta de WhatsApp Business API está en modo de prueba, los mensajes de bienvenida pueden tener restricciones.
5. **Problemas de caché:** Espera unos minutos después de activar la función y vuelve a intentarlo.

#### Los rompehielos no aparecen

**Posibles causas y soluciones:**

1. **No se guardaron correctamente:** Ve a WhatsApp Cloud API, edita los rompehielos y asegúrate de hacer clic en "Guardar" antes de salir.
2. **Actualización pendiente:** Los cambios en los rompehielos pueden tardar hasta 5 minutos en reflejarse en WhatsApp.
3. **El usuario no es nuevo:** Los rompehielos solo aparecen para usuarios que inician una conversación nueva, no para conversaciones existentes.
4. **Versión de WhatsApp:** Verifica que el usuario tenga una versión reciente de WhatsApp que soporte esta funcionalidad.

#### El comando no funciona

**Posibles causas y soluciones:**

1. **La palabra clave no coincide:** Verifica que el comando en WhatsApp Cloud API coincida exactamente (incluyendo la barra /) con la palabra clave en el Gestor de Bots.
2. **El bot no está activo:** Revisa que el bot esté en estado "Activo" y no en "Borrador".
3. **Conflicto con otros bots:** Si hay otro bot con la misma palabra clave, puede haber conflictos. Revisa que no haya duplicados.
4. **Permisos insuficientes:** Verifica que tu plan de E-SMART360 incluya la cantidad de bots que necesitas.

#### La ubicación no se almacena

**Posibles causas y soluciones:**

1. **El usuario no dio permiso:** WhatsApp solicitará permiso al usuario para compartir su ubicación. Si el usuario rechaza, no se almacenará.
2. **GPS desactivado:** El usuario debe tener el GPS activado en su dispositivo para que la ubicación se envíe.
3. **Problemas de privacidad:** Revisa la configuración de privacidad del usuario; algunos usuarios tienen la ubicación desactivada por defecto.
4. **Campo no visible en el gestor:** Puede que la ubicación se haya almacenado pero no sea visible en la interfaz. Revisa en la sección de "Campos Personalizados" del suscriptor.

---

## Referencia rápida de componentes MDX

### Componentes interactivos disponibles en E-SMART360



### Texto

Mensaje de texto simple. Soporta formato usando markdown básico como **negritas**, *cursivas*, y `código`.

```
Ejemplo: ¡Hola {{nombre}}! Bienvenido a nuestro servicio.
```

### Imagen

Envía una imagen junto con un texto descriptivo. Formatos soportados: JPG, PNG, WEBP.
Tamaño máximo: 5 MB.

### Botón CTA

Botón con llamada a la acción que puede abrir una URL o activar un flujo dentro del chatbot.

- **Texto del botón:** Máximo 20 caracteres.
- **Acción:** URL o flujo interno.

### Lista de opciones

Menú desplegable con múltiples opciones. Ideal para menús con más de 3 opciones.

- **Título de la lista:** Máximo 24 caracteres.
- **Opciones:** Hasta 10 opciones, cada una con título y descripción opcional.

### Botones rápidos

Botones de respuesta rápida que aparecen debajo del mensaje. Hasta 3 botones.
Cada botón responde automáticamente con un texto predefinido.

### Ubicación

Botón que solicita al usuario compartir su ubicación geográfica. Se almacena automáticamente en el perfil del suscriptor.

---

## Integración con otras herramientas

E-SMART360 permite complementar las funcionalidades descritas en esta guía con otras herramientas de automatización:

- **Google Sheets:** Usa datos de hojas de cálculo para personalizar los mensajes de bienvenida con información actualizada de productos, precios o inventario.
- **Webhooks:** Configura webhooks para enviar la ubicación recopilada a tu CRM o sistema de gestión de pedidos.
- **Zapier:** Conecta E-SMART360 con más de 3000 aplicaciones para automatizar flujos de trabajo completos.
- **API HTTP:** Integra E-SMART360 con aplicaciones personalizadas a través de la API REST.

Estas integraciones permiten crear experiencias verdaderamente omnicanal donde los datos fluyen sin problemas entre todas tus herramientas de negocio.
