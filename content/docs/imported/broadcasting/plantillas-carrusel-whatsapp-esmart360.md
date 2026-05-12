---
title: "Cómo Crear y Usar Plantillas de Carrusel en WhatsApp con E-SMART360"
description: "Aprende a crear y utilizar plantillas de carrusel multimedia en WhatsApp para mostrar productos, servicios y promociones de forma interactiva. Guía completa paso a paso con ejemplos prácticos, buenas prácticas y solución de problemas."
section: "broadcasting"
order: 247
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "plantillas-carrusel-whatsapp-esmart360"
canonicalGroup: "como-crear-y-usar-plantillas-de-carrusel-en-whatsapp-con"
tags: ["broadcasting"]
staging: true
---
# Cómo Crear y Usar Plantillas de Carrusel en WhatsApp con E-SMART360

Las plantillas de carrusel multimedia son una de las herramientas más útiles que te permiten mostrar múltiples piezas de contenido multimedia, como imágenes y videos, en un solo mensaje. Ya sea que quieras captar la atención de tus usuarios hacia productos, tu tienda, servicios, descuentos, novedades o incluso un sitio web, esta función te brinda un método atractivo y cautivador para presentar tu información.


> **¿Qué es un carrusel en WhatsApp?** Un carrusel es un mensaje interactivo que contiene varias tarjetas deslizables, cada una con su propio encabezado multimedia (imagen o video), texto descriptivo y hasta dos botones de acción. Es ideal para catálogos de productos, promociones y contenido visual.

Crear plantillas de carrusel con E-SMART360 es sumamente sencillo. A continuación exploraremos el proceso de creación y el uso de las plantillas de carrusel multimedia.

---

## Requisitos Previos

Antes de comenzar, asegúrate de contar con lo siguiente:

- Una **cuenta de WhatsApp Business** conectada a E-SMART360.
- **Contenido para tu carrusel** definido: imágenes, videos, texto y botones.
- Una **tienda en línea conectada** (si planeas usar la plantilla de carrusel de productos).
- Acceso al panel de administración de E-SMART360.
- **Cumplir con las políticas de WhatsApp** para plantillas de marketing.


> **Consejo:** Prepara todas tus imágenes y videos antes de comenzar. WhatsApp recomienda usar imágenes en formato JPEG o PNG con una resolución mínima de 300×300 píxeles y videos en MP4 con duración máxima de 30 segundos.

---

## Creación de una Plantilla de Carrusel Multimedia

### Paso 1: Acceder al Panel de Plantillas

Desde el panel de control de E-SMART360, navega a **'Bot Manager'** y luego selecciona **'Plantillas de Mensajes'**.


### Iniciar la creación

Haz clic en **'Crear'** y selecciona la opción **'Plantilla de Carrusel Multimedia'**.
  
### Configurar el nombre y la categoría

Asigna un nombre descriptivo a tu plantilla y cambia la categoría a **'Marketing'**. La categoría es importante porque determina las reglas de aprobación de WhatsApp. Las categorías disponibles son Marketing, Utilidad, Autenticación y Servicio.
  
### Diseñar el cuerpo del mensaje

Agrega el mensaje principal o "burbuja de mensaje" que aparecerá antes de las tarjetas del carrusel. Personaliza el texto para que sea atractivo y relevante. Recuerda que el límite es de 1024 caracteres para plantillas multimedia.
  
### Agregar tarjetas multimedia

Comienza con la primera tarjeta: elige entre **'Imagen'** o **'Video'** como encabezado de la tarjeta, y agrega el mensaje que deseas enviar en el cuerpo de la tarjeta. Puedes agregar entre 1 y 10 tarjetas por carrusel.
  
### Configurar botones por tarjeta

Para cada tarjeta del carrusel, puedes agregar hasta **dos botones**. Elige entre las opciones **'URL'** y **'Respuesta Rápida'** según tus necesidades. Las opciones disponibles son:
    
    - **Tipo de Botón**: Puedes elegir entre 'URL' (para enlaces externos) o 'Respuesta Rápida' (para respuestas predefinidas).
    - **Texto del Botón**: El texto visible que verá el usuario (máximo 20 caracteres).
    - **Valor de Acción**: La URL o el payload de la respuesta rápida (máximo 256 caracteres).
  

> **Importante:** Debes mantener el **mismo orden de botones** en todas tus tarjetas. Por ejemplo, si en la primera tarjeta agregas una URL y una Respuesta Rápida, todas las demás tarjetas deben seguir exactamente ese mismo orden. Si no lo haces, la plantilla no se guardará y recibirás un mensaje de error.

### Paso 2: Enviar la Plantilla para Aprobación

Una vez que hayas terminado de crear tu plantilla de carrusel, debes enviarla para su revisión. WhatsApp normalmente revisa y aprueba las plantillas en un plazo de **24 a 48 horas**. En algunos casos puede demorar hasta 72 horas.

Puedes verificar el estado de aprobación desde la sección **'Plantillas de Mensajes'** en tu panel de E-SMART360. Los estados posibles son:

- **Pendiente**: La plantilla está siendo revisada.
- **Aprobada**: Lista para usar en tus flujos y transmisiones.
- **Rechazada**: Debes revisar las observaciones y corregir la plantilla.
- **Pausada**: WhatsApp ha detenido temporalmente su uso.

### Paso 3: Vincular la Plantilla a un Flujo de Bot

Una vez aprobada la plantilla, sigue estos pasos para usarla en tu chatbot:


### Ir a Respuestas del Bot

Ve a **'Bot Reply'**, haz clic en **'Crear'** y agrega una palabra clave y un título al inicio del flujo del bot.
  
### Agregar la plantilla al flujo

Desde el constructor de flujos, agrega el botón de **'Plantillas'**, selecciona tu plantilla y agrega los componentes multimedia correspondientes (imágenes o videos según hayas configurado la plantilla).
  
### ¡Listo!

Guarda el flujo. Ahora tu bot enviará el carrusel cada vez que un usuario active la palabra clave configurada.
  
Así se verá tu carrusel en acción cuando el usuario interactúe con el bot. Cada tarjeta aparecerá de forma deslizable y los botones serán totalmente funcionales.


> **¡Todo listo!** Ya puedes configurar tu bot y comenzar a enviar plantillas de carrusel con contenido multimedia a tus clientes de forma automatizada.

---

## Envío de Video en la Plantilla de Carrusel

Enviar **video** con la plantilla de carrusel es igual de fácil. Todo lo que tienes que hacer es cambiar el encabezado de la tarjeta de **'Imagen'** a **'Video'**.


> **Especificaciones técnicas para videos:** Los videos deben estar en formato MP4, con un tamaño máximo de 16 MB y una duración recomendada de no más de 30 segundos. Asegúrate de que el contenido sea relevante, tenga buena iluminación y esté correctamente editado. Usa el códec H.264 para máxima compatibilidad.

El resto de los pasos, incluyendo agregar tarjetas, personalizar botones y guardar la plantilla, siguen siendo los mismos que para la plantilla de carrusel de imágenes. No necesitas aprender un proceso diferente.

---

## Uso de la Plantilla de Carrusel de Productos

Si buscas mostrar productos de tu tienda en línea, la **Plantilla de Carrusel de Productos** es una opción muy conveniente. A continuación te explicamos cómo usarla:


### Integrar tu tienda en línea

Para usar esta función, debes integrar tu **tienda en línea con tu cuenta de WhatsApp Business de E-SMART360**. Asegúrate de que tu tienda esté sincronizada correctamente. E-SMART360 es compatible con WooCommerce, Shopify y otras plataformas de e-commerce.
  
### Agregar productos a tu catálogo

Asegúrate de que tus productos estén listados en tu catálogo de WhatsApp. Puedes agregarlos manualmente o sincronizarlos automáticamente desde WooCommerce, Shopify u otras plataformas compatibles. El catálogo se actualiza en tiempo real cuando haces cambios.
  
### Crear la plantilla

Sigue los pasos descritos anteriormente para crear una plantilla de carrusel multimedia, pero selecciona la opción de **'Carrusel de Productos'** en lugar de 'Carrusel Multimedia'.
  
### Seleccionar productos

A diferencia de la plantilla de carrusel multimedia, aquí **no necesitas agregar tarjetas manualmente**. Simplemente selecciona la cantidad de productos que deseas mostrar al crear la plantilla. Luego, al crear el flujo del bot, tendrás opciones para agregar los productos directamente desde tu catálogo sincronizado.
  
De esta manera puedes agregar productos de tu tienda en línea como un carrusel y enviarlos a tus clientes de forma automatizada, sin tener que diseñar cada tarjeta individualmente.

<mermaid
  graph LR
    A[Catálogo de Productos] --> B[Seleccionar Productos]
    B --> C[Crear Plantilla Carrusel]
    C --> D[Aprobación WhatsApp]
    D --> E[Vincular a Flujo Bot]
    E --> F[¡Enviar a Clientes!]
></mermaid>

---

## Aprovechando los Botones CTA URL para Mayor Interacción

Para mejorar la interacción con los usuarios, considera usar **botones CTA (Llamada a la Acción)** con URLs. Aquí te mostramos los pasos:


### Crear un flujo de bot

Crea un flujo de bot y agrega un **botón CTA URL** desde el constructor de flujos de E-SMART360.
  
### Personalizar el botón

Define el **texto del botón**, la **URL de destino** y el **mensaje** que acompañará al botón. Ejemplos de texto para botones:
    
    - "Ver producto" → Enlace a ficha de producto
    - "Comprar ahora" → Enlace directo al carrito de compra
    - "Más información" → Enlace a página informativa
    - "Agendar cita" → Enlace a calendario de reservas
    - "Descargar guía" → Enlace a PDF o recurso descargable
  
### Guardar y probar

Guarda tu bot y pruébalo enviándote un mensaje a ti mismo. Verifica que el botón se vea correctamente y que la URL de destino funcione.
  

> **¿Sabías que...?** También puedes enviar botones CTA URL directamente desde el chat en vivo. Solo ve a la sección de **chat en vivo** de E-SMART360, selecciona **flujo o plantilla de mensaje** y envíalo al instante sin necesidad de configurar un bot completo.

### Configuración Avanzada de Botones Interactivos

E-SMART360 te permite ir más allá con los botones interactivos. Cada botón puede desencadenar diferentes acciones:



### Enviar Mensaje

Muestra un nuevo mensaje cuando el botón es presionado, continuando la conversación de forma natural. Ideal para menús interactivos donde cada opción lleva a más información.
  
### Asignar Etiqueta

Clasifica a los usuarios según su interacción, permitiéndote segmentar tu audiencia para campañas futuras. Por ejemplo, etiquetar como "Interesado en producto A" para enviar promociones específicas después.
  
### Inscribir en Secuencia

Agrega usuarios a una secuencia de mensajes de seguimiento automatizada. Perfecto para secuencias de ventas o correos de nutrición de leads.
  
### URL Externa

Redirige a los usuarios a páginas externas como productos, formularios u ofertas especiales. La URL debe comenzar con https:// para funcionar correctamente.
  
### Botón de Respuesta Rápida

Ideal para encuestas, menús interactivos y navegación dentro del chatbot. El usuario no necesita escribir, solo tocar el botón. Puedes usar estos botones para:
    
    - Confirmar pedidos
    - Seleccionar opciones de un menú
    - Responder preguntas frecuentes
    - Navegar entre categorías de productos
    - Calificar la atención recibida
    
    Los payloads de respuesta rápida pueden tener hasta 256 caracteres.
  
### Botón de URL

Perfecto para dirigir tráfico a tu sitio web, blog, tienda o landing page. Algunos casos de uso:
    
    - Enlace a producto específico del catálogo
    - Página de pago o checkout
    - Formulario de registro para eventos
    - Video promocional o testimonial
    - Artículo de blog relevante
    - Página de términos y condiciones
    
    Las URLs deben incluir el protocolo (https://).
  
---

## Consejos para Plantillas de Carrusel Efectivas


> Sigue estos consejos para crear carruseles que realmente funcionen y capturen la atención de tu audiencia.

- **Mantén la consistencia**: Usa un diseño y una disposición uniformes en todas las tarjetas. De lo contrario, la plantilla no se guardará ni será aprobada.
- **Usa imágenes de alta calidad**: Elige imágenes visualmente atractivas y relevantes. Una imagen borrosa, pixelada o de baja calidad puede dañar la percepción de tu marca.
- **Limita el texto**: Mantén el texto conciso y enfocado. Los usuarios de WhatsApp suelen consumir contenido rápido desde sus dispositivos móviles, así que ve al grano.
- **Llamadas a la acción claras**: Fomenta la interacción del usuario con botones y mensajes bien elaborados. Un botón genérico como "Click aquí" funciona menos que "Ver oferta exclusiva" o "Comprar ahora".
- **Prueba y refina**: Prueba tu plantilla para asegurarte de que funciona como esperas y haz los ajustes necesarios. Prueba tanto en dispositivos iOS como Android.


> **Prueba A/B:** Crea dos versiones de un mismo carrusel cambiando solo las imágenes o el texto de los botones. Envía cada versión a un grupo diferente y mide cuál obtiene mejor tasa de clics. Esto te ayudará a optimizar tus campañas continuamente.

---

## Límites de Caracteres para Plantillas Multimedia

Para garantizar que tus plantillas sean aprobadas, es importante respetar los límites de caracteres establecidos por WhatsApp. Exceder estos límites puede resultar en el rechazo automático de tu plantilla.

| Elemento | Límite de Caracteres |
|----------|---------------------|
| **Encabezado (Texto)** | Hasta 60 caracteres |
| **Título del Encabezado (Multimedia)** | Hasta 256 caracteres |
| **Cuerpo (Plantillas multimedia)** | Hasta 1024 caracteres |
| **Cuerpo (Plantillas estándar)** | Hasta 4096 caracteres |
| **Pie de página** | Hasta 60 caracteres |
| **Texto del botón** | Hasta 20 caracteres |
| **Payload de respuesta rápida** | Hasta 256 caracteres |


> Exceder estos límites provocará el rechazo de tu plantilla. Recuerda que los marcadores de posición como {{1}} cuentan como 1 carácter cada uno. Planifica tu mensaje teniendo en cuenta estos límites desde el principio.

---

## Razones Comunes de Rechazo y Cómo Solucionarlas

Si tu plantilla de carrusel no es aprobada, estas son las causas más frecuentes y sus soluciones:


### La plantilla no se guarda por inconsistencia en botones

**Problema:** Las tarjetas del carrusel no mantienen el mismo orden de botones.

**Solución:** Asegúrate de que todas las tarjetas tengan exactamente la misma estructura de botones. Si la primera tarjeta tiene un botón URL y uno de Respuesta Rápida, todas las demás deben tener el mismo orden. El orden debe ser idéntico en cada tarjeta.

### Plantilla rechazada por contenido publicitario engañoso

**Problema:** El mensaje contiene promesas exageradas, claims sin respaldo o información que podría considerarse engañosa.

**Solución:** Revisa que tu mensaje cumpla con las políticas de WhatsApp. Evita términos como "garantizado", "mejor del mundo", "resultados increíbles" sin evidencia. Usa un lenguaje claro, veraz y medible. Proporciona siempre la fuente de cualquier afirmación.

### Los botones no funcionan correctamente

**Problema:** Los botones URL o de Respuesta Rápida no redirigen o no responden como se espera.

**Solución:** Verifica que cada tarjeta tenga URLs correctamente formateadas (incluyendo https://) o payloads de Respuesta Rápida válidos. Mantén el orden de botones consistente en todas las tarjetas. Prueba cada URL manualmente antes de enviar la plantilla.

### El contenido multimedia no se muestra

**Problema:** Las imágenes o videos no aparecen en el carrusel cuando se envía.

**Solución:** Comprueba que la URL del archivo multimedia sea accesible públicamente y esté correctamente subida a un servidor. Usa formatos compatibles (JPEG/PNG para imágenes, MP4 para videos). Verifica que el tamaño no exceda los 5 MB para imágenes o 16 MB para videos.

### El carrusel no se envía en el flujo del bot

**Problema:** Configuraste la plantilla pero no se envía cuando el usuario activa el bot con la palabra clave.

**Solución:** Confirma que la plantilla esté **aprobada** por WhatsApp (revisa el estado en 'Plantillas de Mensajes'). Verifica que tu flujo de bot o configuración de chat en vivo incluya la plantilla correcta y que la palabra clave esté bien configurada sin errores tipográficos.

---

## Preguntas Frecuentes


### ¿Por qué mi plantilla de carrusel no se guarda?

Asegúrate de que todas las tarjetas sigan el mismo orden de botones. Si una tarjeta tiene una URL y una Respuesta Rápida, todas las tarjetas deben tener exactamente la misma estructura. También verifica que los límites de caracteres se respeten y que el contenido multimedia cumpla con las especificaciones técnicas. Errores comunes incluyen inconsistencias en los tipos de botones entre tarjetas.

### ¿Cuánto tarda la aprobación de una plantilla?

WhatsApp normalmente revisa y aprueba las plantillas dentro de 24 a 48 horas. En algunos casos puede demorar hasta 72 horas si hay alta demanda de revisiones. Puedes verificar el estado en la sección "Plantillas de Mensajes" de tu panel de E-SMART360. Si tu plantilla permanece en estado "Pendiente" por más de 72 horas, contacta a soporte.

### ¿Puedo enviar plantillas de carrusel en transmisiones masivas?

Sí, una vez aprobadas, puedes usarlas en transmisiones masivas, en el chat en vivo o en flujos de bot. Las plantillas aprobadas no tienen restricciones de uso en cuanto al canal de envío. Sin embargo, recuerda respetar los límites de transmisión según tu nivel de calidad y las políticas antispam de WhatsApp.

### ¿Puedo agregar videos en lugar de imágenes en el carrusel?

Sí, simplemente selecciona "Video" en lugar de "Imagen" al configurar el encabezado de cada tarjeta. El resto del proceso de creación es idéntico. Puedes mezclar imágenes y videos en diferentes tarjetas del mismo carrusel según tus necesidades.

### ¿Necesito una tienda en línea para usar plantillas de carrusel?

No, no es necesario tener una tienda en línea. Puedes agregar imágenes o videos manualmente a cada tarjeta sin necesidad de un catálogo de productos. Sin embargo, para usar el **carrusel de productos** (que extrae productos automáticamente de tu catálogo), tu tienda debe estar integrada con E-SMART360 a través de WooCommerce, Shopify u otra plataforma compatible.

### ¿Cuántas tarjetas puede tener un carrusel?

Actualmente, WhatsApp permite entre 1 y 10 tarjetas por carrusel. Se recomienda usar entre 3 y 5 tarjetas para mantener la atención del usuario sin abrumarlo con demasiadas opciones. Las tarjetas adicionales pueden pasar desapercibidas si el usuario no desliza para verlas.

### ¿Los carruseles funcionan en todas las versiones de WhatsApp?

Los carruseles son compatibles con WhatsApp Business API y funcionan en las versiones más recientes de WhatsApp en iOS y Android. Algunas versiones muy antiguas de WhatsApp o versiones modificadas (no oficiales) pueden no mostrar el carrusel correctamente. WhatsApp Web también es compatible con carruseles.

### ¿Puedo editar una plantilla de carrusel después de creada?

Sí, puedes editar plantillas existentes. Sin embargo, cualquier modificación significativa requiere una **nueva aprobación** por parte de WhatsApp. Los cambios menores como ajustes de texto pueden aprobarse más rápido. Para cambios mayores, considera crear una plantilla nueva.

### ¿Qué hago si mi cuenta tiene baja calificación de calidad?

Si tu calificación de calidad es baja, WhatsApp puede rechazar automáticamente tus plantillas. Para mejorar tu calificación:
- Reduce la frecuencia de mensajes a usuarios inactivos
- Elimina contactos que han bloqueado tu número
- Envía contenido relevante que genere interacción positiva
- Evita mensajes repetitivos o genéricos
- Revisa los reportes de calidad en tu panel de E-SMART360

---

## Ejemplos Prácticos de Uso

### Ejemplo 1: Tienda de Ropa - Colección de Temporada

Una tienda de ropa puede crear un carrusel con 4 tarjetas mostrando:

- **Tarjeta 1:** Vestido de verano → Botón "Ver talles" (URL a página del producto)
- **Tarjeta 2:** Camisa casual → Botón "Comprar ahora" (URL al carrito)
- **Tarjeta 3:** Zapatos de colección → Botón "Ver colección" (URL a categoría)
- **Tarjeta 4:** Accesorios → Botón "20% descuento" (URL a promoción)


> **Resultado esperado:** Al presentar múltiples productos en un solo mensaje, el cliente puede explorar la colección sin salir de WhatsApp, lo que aumenta significativamente las probabilidades de compra y reduce la fricción en el proceso de venta.

### Ejemplo 2: Restaurante - Menú del Día

Un restaurante puede usar un carrusel para mostrar su menú del día:

- **Tarjeta 1:** Imagen del plato principal → Botón "Ver ingredientes" (Respuesta Rápida)
- **Tarjeta 2:** Postre recomendado → Botón "Ordenar ahora" (URL a WhatsApp para pedido)
- **Tarjeta 3:** Bebida especial → Botón "Promoción 2x1" (URL a cupón descargable)

Este enfoque permite al cliente ver visualmente las opciones disponibles y tomar una decisión informada sin necesidad de visitar un sitio web.

### Ejemplo 3: Agencia de Viajes - Paquetes Turísticos

- **Tarjeta 1:** Playas del Caribe → Botón "Ver itinerario" (URL a PDF)
- **Tarjeta 2:** Aventura en montaña → Botón "Disponibilidad" (Respuesta Rápida)
- **Tarjeta 3:** City tour europeo → Botón "Cotizar ahora" (URL a formulario)
- **Tarjeta 4:** Crucero familiar → Botón "Promo familiar" (URL a oferta)



### Caso de Uso: E-commerce

**Carrusel de productos destacados**
    
    Ideal para tiendas online que quieren mostrar su catálogo sin saturar al cliente con múltiples mensajes. Cada tarjeta representa un producto diferente con su propio enlace de compra. Combínalo con etiquetas para segmentar clientes según el producto que más les interese.
    
    **Ejemplo práctico:** Una tienda de electrónica crea un carrusel con smartphones, audífonos, cargadores y fundas, cada uno con botón de "Comprar ahora". Los clientes que hacen clic en "audífonos" reciben una etiqueta y días después una promo de accesorios de audio.
  
### Caso de Uso: Servicios Profesionales

**Carrusel de servicios ofrecidos**
    
    Perfecto para agencias, consultores y profesionales que ofrecen múltiples servicios. Cada tarjeta describe un servicio con un botón para agendar una cita o solicitar más información.
    
    **Ejemplo práctico:** Una agencia de marketing muestra: "Gestión de redes sociales" → Botón "Agendar consultoría", "Diseño web" → Botón "Ver portafolio", "SEO" → Botón "Solicitar cotización", "Email marketing" → Botón "Ver casos de éxito".
  
---

## Buenas Prácticas para la Aprobación de Plantillas

Para maximizar las posibilidades de que tu plantilla de carrusel sea aprobada por WhatsApp, sigue estas recomendaciones:

### Verifica tu Calidad de Cuenta

WhatsApp evalúa la calidad de tu cuenta basándose en varios factores:

- **Tasa de bloqueos**: Si muchos usuarios bloquean tus mensajes, tu calidad baja.
- **Tasa de reclamos**: Reportes de spam afectan negativamente tu cuenta y pueden llevar a suspensiones.
- **Nivel de engagement**: Mensajes que generan interacción positiva (clics, respuestas) mejoran tu reputación.
- **Antigüedad de la cuenta**: Las cuentas más antiguas con buen historial tienen mejor reputación.


> Una cuenta con calificación baja puede tener sus plantillas rechazadas automáticamente, incluso si el contenido es correcto. Revisa periódicamente tu estado de calidad en el panel de E-SMART360.

### Categoría Correcta de Plantilla

WhatsApp clasifica las plantillas en cuatro categorías principales:

| Categoría | Uso | Ejemplo |
|-----------|-----|--------|
| **Marketing** | Promociones, ofertas, novedades | "¡20% de descuento en nuestra nueva colección!" |
| **Utilidad** | Transacciones, notificaciones | "Tu pedido #1234 ha sido enviado y estará contigo en 3 días" |
| **Autenticación** | Códigos OTP, verificación | "Tu código de verificación es: 847291 - Válido por 5 minutos" |
| **Servicio** | Actualizaciones de servicio | "Recordatorio: tu cita es mañana a las 10:00 en nuestra sucursal" |

Para los carruseles multimedia, la categoría más común es **Marketing**, pero asegúrate de seleccionar la que mejor se ajuste a tu contenido. Una categoría incorrecta puede resultar en rechazo.

### Incluye Variables de Muestra

Si tu plantilla utiliza variables como {{1}}, {{2}}, etc., asegúrate de incluir datos de muestra al enviarla para aprobación. WhatsApp revisa el mensaje completo, no solo la estructura. Sin datos de muestra, el revisor no puede evaluar el mensaje real que recibirá el usuario.

Por ejemplo, en lugar de enviar "Hola {{1}}, tu pedido {{2}} está listo", envía "Hola María, tu pedido #12345 está listo".

### Evita Contenido Restringido

WhatsApp **NO aprueba** plantillas que contengan:

- Contenido para adultos o sexualmente explícito
- Promoción de productos ilegales o regulados (tabaco, alcohol, armas)
- Afirmaciones médicas sin respaldo científico
- Ofertas piramidales o esquemas de inversión de dudosa legalidad
- Marcas registradas sin autorización del propietario
- URLs acortadas (como bit.ly) sin contexto claro
- Lenguaje discriminatorio o contenido ofensivo


> **Regla de oro:** Si tu contenido cumple con las políticas de anuncios de Meta (Facebook/Instagram), es muy probable que también cumpla con las políticas de plantillas de WhatsApp. Cuando tengas dudas, revisa primero las políticas oficiales de Meta.

---

## Estrategias para Maximizar la Tasa de Conversión con Carruseles

### Segmentación de Audiencia

No envíes el mismo carrusel a todos tus contactos. Segmenta tu audiencia según criterios relevantes:

- **Historial de compras**: Clientes que compraron ropa anteriormente → carrusel de ropa nueva
- **Ubicación geográfica**: Clientes en una ciudad específica → promociones locales
- **Intereses previos**: Usuarios que hicieron clic en tecnología → carrusel de gadgets
- **Etapa del ciclo de compra**: Nuevos leads → carrusel de presentación de productos; clientes recurrentes → carrusel de novedades

### Timing y Frecuencia

- Envía carruseles promocionales en **martes a jueves entre 10:00 y 12:00** (mejores tasas de apertura según estudios de marketing)
- No envíes más de **1 carrusel promocional por semana al mismo usuario** para evitar fatiga y bloqueos
- Programa carruseles de **recordatorio de carrito abandonado** dentro de las **primeras 4 horas** después del abandono, cuando la intención de compra sigue fresca
- Evita fines de semana para contenido promocional B2B; los fines de semana funcionan mejor para B2C

### Diseño Visual Consistente

- Usa la **misma paleta de colores** y tipografía en todas las tarjetas para mantener la identidad de marca
- Mantén la **misma proporción de imagen** en todas las tarjetas (se recomienda 1:1 o 16:9)
- Coloca el **logo de tu marca** en una posición consistente dentro de cada imagen
- Usa fondos que contrasten adecuadamente con el texto para garantizar legibilidad



### 📸 Calidad de Imagen

Usa imágenes de al menos 800×800 píxeles para evitar pixelado. Evita texto superpuesto demasiado pequeño (menos de 24px). El formato recomendado es JPEG con compresión moderada (80-85% de calidad).
  
### ✍️ Texto Efectivo

Menos de 20 palabras por tarjeta. Usa verbos de acción: Compra, Descubre, Reserva, Ahorra, Solicita, Agenda. Incluye emojis con moderación (1-2 por tarjeta como máximo).
  
### 🎯 Llamada a la Acción

Un solo objetivo por botón. Usa "Comprar ahora" en lugar de "Ver más". Prueba distintas variaciones (A/B testing) y mide cuál funciona mejor con tu audiencia específica.
  
---

## Integración con Otras Herramientas de E-SMART360

### Carrusel + Transmisiones Masivas

Puedes combinar plantillas de carrusel con transmisiones masivas para campañas a gran escala:

1. **Segmenta tu lista de contactos** por etiquetas o campos personalizados
2. **Selecciona la plantilla de carrusel** aprobada que deseas enviar
3. **Programa el envío** en el momento óptimo según tu análisis de audiencia
4. **Monitorea las métricas** de entrega, clics y conversiones desde el panel

### Carrusel + Chat en Vivo

Los agentes de soporte pueden enviar carruseles directamente desde el chat en vivo de E-SMART360:

- **Seleccionan la plantilla** desde el menú de plantillas disponibles en la interfaz de chat
- **Personalizan productos** si es un carrusel de productos del catálogo
- **Envían al cliente** en medio de una conversación de soporte o ventas


> Esta combinación es ideal para equipos de ventas que conversan con clientes en tiempo real. El agente puede recomendar productos específicos sin salir de la ventana de chat, lo que acelera el proceso de venta y mejora la experiencia del cliente.

### Carrusel + Catálogo de WhatsApp

Si tienes un catálogo de productos sincronizado con E-SMART360, el carrusel de productos se actualiza automáticamente cuando:

- **Agregas nuevos productos** → aparecen automáticamente en el carrusel sin intervención manual
- **Actualizas precios o descripciones** → se reflejan automáticamente en las tarjetas
- **Desactivas productos agotados** → desaparecen del carrusel para evitar pedidos imposibles


> Esto significa que **no necesitas recrear la plantilla** cada vez que cambia tu inventario. WhatsApp actualiza los datos dinámicamente desde tu catálogo, ahorrándote horas de trabajo administrativo.

---

## Aspectos Técnicos a Considerar

### Formatos de Archivo Soportados

| Tipo | Formatos | Tamaño Máximo | Duración Máx. |
|------|----------|---------------|---------------|
| Imagen | JPEG, PNG | 5 MB | — |
| Video | MP4 | 16 MB | 30 segundos |
| Documento | PDF, DOCX | 100 MB | — |

### Resolución Recomendada

- **Imágenes cuadradas (1:1):** Mínimo 300×300 píxeles, recomendado 800×800
- **Imágenes horizontales (16:9):** Mínimo 800×450 píxeles, recomendado 1200×675
- **Videos:** Resolución de al menos 480p, preferiblemente 720p o 1080p

### Codificación de Video

Para garantizar la máxima compatibilidad en todos los dispositivos:

- **Códec de video:** H.264
- **Códec de audio:** AAC, estéreo
- **Velocidad de bits:** 2-4 Mbps
- **Frame rate:** 30 fps o menos
- **Aspect ratio:** 16:9 o 1:1
- **Perfil:** Baseline o Main (no High)

### Almacenamiento y URLs de Medios

Las imágenes y videos que uses en tus plantillas de carrusel deben estar alojados en URLs accesibles públicamente. Considera:

- Usar un CDN para garantizar velocidad de carga
- No mover ni eliminar los archivos después de aprobar la plantilla
- Verificar que los enlaces no requieran autenticación
- Usar URLs con HTTPS (requisito de WhatsApp)

---

## Solución de Problemas Técnicos

### El carrusel no se renderiza correctamente

Si el carrusel se ve mal o incompleto:

1. Verifica que todas las imágenes tengan las dimensiones correctas
2. Confirma que los archivos multimedia no estén corruptos
3. Revisa que la plantilla esté aprobada (no solo guardada)
4. Prueba en diferentes dispositivos y versiones de WhatsApp

### Error 130472: Número de teléfono en experimento

Si recibes este error, significa que tu número de teléfono está siendo evaluado por WhatsApp. Esto es temporal y generalmente se resuelve en 24-48 horas. Durante este período:

- Evita enviar demasiados mensajes
- Asegúrate de que tus plantillas cumplan con las políticas
- Mantén una alta tasa de engagement

### Error 131026: Mensaje no entregable

Este error puede ocurrir si:

- El destinatario ha bloqueado tu número
- El destinatario no tiene WhatsApp
- El número es inválido
- La plantilla ha sido pausada o rechazada después de su aprobación

Revisa el estado del contacto en tu panel de E-SMART360 y limpia tu lista de contactos inválidos regularmente.

---


> **Nuevos límites de caracteres para plantillas multimedia (2025-06-23)**
> Se actualizaron los límites de caracteres para el cuerpo de plantillas multimedia: ahora es posible usar hasta 1024 caracteres en el cuerpo para plantillas multimedia y hasta 4096 para plantillas estándar. Los límites de botones se mantienen en 20 caracteres por botón.

> **Soporte mejorado para videos en carrusel (2025-03-15)**
> Ahora los carruseles con video tienen mejor compatibilidad en dispositivos Android e iOS. Se recomienda usar videos MP4 con una duración máxima de 30 segundos para una experiencia óptima de reproducción.

> **Nueva integración de catálogo dinámico (2025-01-10)**
> Los carruseles de productos ahora se actualizan automáticamente cuando modificas tu catálogo. Ya no es necesario recrear la plantilla para reflejar cambios de inventario o precios.

---

## Conclusión

Las plantillas de carrusel multimedia ofrecen una forma dinámica y atractiva de presentar contenido dentro de tus chatbots. Al utilizar eficazmente imágenes, videos y botones URL, puedes crear mensajes convincentes y atractivos que capten la atención de tu audiencia y generen más ventas o las acciones que desees de tus usuarios.


> **Recursos adicionales:** Además de esta guía, te recomendamos ver nuestros tutoriales en video sobre creación de plantillas de carrusel en WhatsApp, donde explicamos cada paso visualmente para una mejor comprensión de todo el proceso.

## ¿Qué sigue?

Ahora que sabes crear plantillas de carrusel, puedes explorar otras funcionalidades de E-SMART360:

- **Plantillas de mensajes estándar** para comunicaciones utilitarias de confirmación y notificación
- **Flujos de bot multicapa** para automatizar conversaciones complejas con múltiples opciones
- **Transmisiones masivas** para llegar a toda tu audiencia segmentada
- **Integración con Facebook Ads** para campañas Click to WhatsApp con segmentación avanzada
- **Chat en vivo compartido** para atención al cliente en equipo con asignación de agentes
- **Catálogo de WhatsApp** para sincronizar productos automáticamente
- **Webhooks** para enviar datos de interacciones a tu CRM o sistema externo

Cada una de estas herramientas se complementa con las plantillas de carrusel para crear una estrategia de marketing integral en WhatsApp que impulse el crecimiento de tu negocio.
