---
title: "Cómo Crear una Plantilla de Carrusel en WhatsApp con E-SMART360"
description: "Guía completa paso a paso para crear y usar plantillas de carrusel multimedia y de productos en WhatsApp Business API. Incluye configuración de botones CTA, límites técnicos, solución de problemas, ejemplos prácticos para e-commerce, preguntas frecuentes y mejores prácticas para maximizar el engagement con tus clientes."
section: "broadcasting"
order: 246
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "plantilla-carrusel-whatsapp-crear-en-e-smart360"
canonicalGroup: "como-crear-una-plantilla-de-carrusel-en-whatsapp-con"
tags: ["broadcasting"]
staging: true
---
import { Callout, Steps, Step, Expandable, Columns, Card, Tabs, Tab, CodeGroup, CodeGroupItem, Update } from '@components';

# Cómo Crear una Plantilla de Carrusel en WhatsApp con E-SMART360


> **Última actualización:** 23 de junio de 2025. Esta guía cubre tanto las plantillas de carrusel multimedia como las plantillas de carrusel de productos, incluyendo las mejores prácticas de la WhatsApp Business API y su integración completa con E-SMART360.

Las plantillas de carrusel multimedia son una de las herramientas más potentes que WhatsApp pone a disposición de las empresas para mostrar múltiples piezas de contenido —como imágenes y videos— en un solo mensaje. Ya sea que quieras captar la atención de tus usuarios hacia productos, tu tienda, servicios, descuentos, novedades o incluso un sitio web, esta función te ofrece un método visualmente atractivo y altamente efectivo para presentar tu información.

A diferencia de los mensajes de texto simples, las plantillas de carrusel permiten a los usuarios deslizar horizontalmente entre varias tarjetas, cada una con su propio contenido multimedia, texto descriptivo y botones de acción. Esto crea una experiencia interactiva similar a navegar por un catálogo o un escaparate digital, todo dentro de la conversación de WhatsApp. El usuario puede explorar múltiples opciones sin salir de la aplicación, lo que reduce la fricción en el proceso de descubrimiento y compra.


> **¿Sabías que...?** Los mensajes con carrusel multimedia tienen una tasa de clics (CTR) hasta un 45% más alta que los mensajes de texto plano, según estudios de la industria. Esto se debe a que el formato visual y la interactividad mantienen al usuario comprometido por más tiempo y facilitan la exploración de múltiples opciones en una sola interacción.

Crear plantillas de carrusel con E-SMART360 es un proceso sencillo pero que requiere atención a los detalles. A continuación exploraremos paso a paso el proceso de creación y el uso de estas potentes plantillas para que puedas aprovechar al máximo esta funcionalidad.

## Requisitos Previos

Antes de comenzar a crear tu primera plantilla de carrusel, asegúrate de cumplir con los siguientes requisitos:



### 📱 Cuenta de WhatsApp Business

Debes tener una cuenta de WhatsApp Business conectada a E-SMART360 a través de la WhatsApp Cloud API. Si aún no lo has hecho, consulta nuestra guía de conexión para vincular tu número de teléfono con la plataforma. Necesitarás tener una cuenta verificada en Meta Business Manager y un número de teléfono registrado correctamente.

### 🖼️ Contenido Multimedia Preparado

Prepara con anticipación las imágenes y/o videos que deseas incluir en cada tarjeta del carrusel. Asegúrate de que cumplan con los requisitos de formato (JPEG, PNG o MP4), tamaño máximo (5 MB para imágenes, 16 MB para videos) y resolución. Todos los archivos deben estar alojados en URLs públicas accesibles vía HTTPS.

### 🛒 Tienda en Línea (Opcional)

Si planeas usar la plantilla de carrusel de productos con extracción automática desde tu catálogo, necesitarás tener tu tienda en línea (WooCommerce, Shopify u otra plataforma compatible) integrada con E-SMART360 y sincronizada con tu catálogo de WhatsApp. Esto permite que los productos se muestren con su información actualizada en tiempo real.

### 🔑 Acceso al Panel de Control

Asegúrate de tener credenciales de acceso activas al panel de administración de E-SMART360 con permisos suficientes para crear y modificar plantillas de mensajes, gestionar flujos de bot y acceder a la sección de catálogos. Si eres administrador de la cuenta, verifica que tu rol tenga habilitadas todas las opciones necesarias.

> **Importante:** Aunque no es estrictamente necesario tener una tienda en línea para crear carruseles multimedia básicos, si deseas usar la funcionalidad de carrusel de productos con extracción automática desde tu catálogo, la integración con tu plataforma de e-commerce es obligatoria. Sin esta integración, deberás agregar cada tarjeta del carrusel de forma manual con sus respectivas imágenes y textos.

## Creación de una Plantilla de Carrusel Multimedia

El proceso para crear una plantilla de carrusel multimedia consta de varias etapas que detallamos a continuación. Desde el panel de control de E-SMART360, navega a la sección correspondiente y sigue estos pasos cuidadosamente:


### Accede al Gestor de Bots

Dirígete al panel principal de E-SMART360. En el menú lateral que se encuentra a la izquierda de la pantalla, busca y haz clic en la sección **"Gestor de Bots"** (Bot Manager). Una vez dentro de esta sección, verás varias opciones relacionadas con la configuración de tus chatbots. Selecciona la opción **"Plantillas de Mensajes"** (Message Templates). Aquí es donde se gestionan todas las plantillas que utilizarán tus bots para comunicarse con los clientes.

### Inicia la creación de una nueva plantilla

En la parte superior de la pantalla de Plantillas de Mensajes, verás un botón que dice **"Crear"** (Create). Haz clic en él y se desplegará un menú con los diferentes tipos de plantillas disponibles. Debes seleccionar la opción **"Plantilla de Carrusel Multimedia"** (Carousel Media Template). Este tipo de plantilla está diseñada específicamente para mostrar múltiples tarjetas con contenido visual en formato de carrusel deslizable, perfecto para catálogos de productos, galerías de servicios o presentaciones promocionales.

### Configura los datos generales de la plantilla

Se abrirá el formulario de creación de la plantilla. Aquí deberás completar los siguientes campos obligatorios y opcionales:

- **Nombre de la plantilla:** Asigna un nombre descriptivo que te permita identificar fácilmente esta plantilla más adelante. Por ejemplo: "Carrusel Colección Verano 2025" o "Catálogo de Productos Destacados". El nombre debe ser único y reconocible.
- **Categoría de la plantilla:** Cambia la categoría de la plantilla a **"Marketing"**. Las categorías determinan el tipo de uso que WhatsApp permitirá para la plantilla. La categoría Marketing es la adecuada para campañas promocionales, ofertas y contenido de ventas. Otras categorías disponibles incluyen Utility (transaccional) y Authentication (autenticación).
- **Mensaje principal (burbuja de texto):** Escribe el mensaje introductorio que aparecerá en la burbuja de texto que precede al carrusel. Por ejemplo: "¡Echa un vistazo a nuestras novedades de esta temporada!" o "Estos son los productos más populares de la semana".
- **Cuerpo de cada tarjeta:** Para cada tarjeta del carrusel, deberás elegir entre **"Imagen"** o **"Video"** como encabezado y agregar el texto descriptivo que deseas mostrar en el cuerpo de la misma. Puedes incluir placeholders utilizando la sintaxis {{1}}, {{2}}, etc., para personalizar el contenido con datos del usuario.

### Agrega y configura las tarjetas del carrusel

El carrusel puede contener múltiples tarjetas, cada una representando un elemento diferente que deseas mostrar a tus clientes. Para agregar y configurar cada tarjeta, sigue estos pasos:

1. **Selecciona el tipo de encabezado:** Elige entre **Imagen** o **Video** para la parte visual de la tarjeta. Todas las tarjetas deben usar el mismo tipo de encabezado (no se puede mezclar imágenes y videos en un mismo carrusel).
2. **Proporciona la URL del archivo multimedia:** Ingresa la dirección web pública donde está alojado el archivo. Asegúrate de que la URL comience con https:// y sea accesible sin autenticación.
3. **Escribe el texto descriptivo:** Redacta el contenido de la tarjeta (máximo 160 caracteres). Sé conciso pero informativo.
4. **Opcionalmente, agrega un pie de página:** Puedes incluir un texto breve al final de cada tarjeta (máximo 60 caracteres).

Cada tarjeta puede incluir **hasta dos botones** de interacción. Tienes dos tipos de botones disponibles:

- **URL:** Redirige al usuario a una página web externa cuando hace clic. Ideal para enlazar a productos, ofertas o landing pages.
- **Respuesta Rápida (Quick Reply):** Envía un mensaje predefinido al chatbot cuando el usuario hace clic. Perfecto para menús interactivos o consultas de información.


> **Regla de oro:** Es fundamental que **el orden y tipo de botones sea exactamente el mismo en todas las tarjetas del carrusel**. Si decides que la primera tarjeta tenga un botón URL seguido de un botón de Respuesta Rápida, todas las demás tarjetas deben seguir exactamente ese mismo patrón. Si esta regla no se cumple, la plantilla no se guardará y recibirás un error de validación.

### Configura los detalles de cada botón

Para cada botón que agregues a las tarjetas, encontrarás las siguientes opciones de configuración detallada:

- **Tipo de Botón (Button Type):** Selecciona entre las opciones disponibles:
  - "URL": Para redirigir a una página web.
  - "Quick Reply": Para enviar una respuesta predefinida al chatbot.
- **Texto del Botón (Button Text):** Escribe el texto que aparecerá visible en el botón. Debe ser conciso, descriptivo y atractivo. El límite máximo es de 20 caracteres. Ejemplos recomendados: "Ver producto", "Comprar ahora", "Más información", "Agendar cita".
- **Valor de Acción (Action Value):** Este campo cambia según el tipo de botón seleccionado:
  - Si elegiste "URL": Ingresa la dirección web completa, incluyendo el protocolo https://.
  - Si elegiste "Quick Reply": Ingresa el texto que se enviará como respuesta automática cuando el usuario haga clic en el botón.

### Envía la plantilla para aprobación de WhatsApp

Una vez que hayas completado la configuración de todas las tarjetas y botones, guarda la plantilla haciendo clic en el botón correspondiente. La plantilla se enviará automáticamente a WhatsApp para su revisión y aprobación por parte del equipo de Meta.

El proceso de aprobación suele tomar entre **24 y 48 horas** en condiciones normales, aunque en algunos casos puede ser más rápido (incluso en cuestión de horas) o más lento si hay alta demanda de revisiones. Puedes verificar el estado de aprobación en cualquier momento desde la sección "Plantillas de Mensajes" de tu panel de E-SMART360. Los estados posibles son:

| Estado | Descripción | Acción requerida |
|--------|-------------|------------------|
| **Pendiente** | La plantilla está siendo revisada por el equipo de WhatsApp. | Esperar la revisión. No se requiere ninguna acción. |
| **Aprobada** | La plantilla ha sido aprobada y está lista para su uso. | Ya puedes utilizarla en tus flujos de bot y transmisiones. |
| **Rechazada** | La plantilla no cumplió con las políticas de WhatsApp. | Revisa el motivo del rechazo, corrige los errores y vuelve a enviar. |
| **Pausada** | La plantilla fue pausada por WhatsApp por calidad o infracciones. | Revisa las políticas de WhatsApp y solicita una revisión si es necesario. |

### Configura el bot para usar la plantilla aprobada

Una vez que la plantilla haya sido aprobada, es hora de incorporarla a un flujo de bot para que pueda ser enviada a los usuarios de forma automática. Sigue estos pasos para configurarla:

1. Ve a la sección **"Respuesta de Bot"** (Bot Reply) dentro del Gestor de Bots.
2. Haz clic en el botón **"Crear"** (Create) para iniciar un nuevo flujo de bot o edita uno existente.
3. Agrega una **palabra clave** que activará este flujo automáticamente. Por ejemplo, "catálogo", "productos", "ofertas", "novedades" o "colección". Puedes agregar múltiples palabras clave separadas por comas.
4. Asigna un **título** descriptivo al inicio del flujo para identificarlo fácilmente en el gestor.
5. Desde el constructor visual de flujos, arrastra y suelta el componente de **"Plantillas"** (Templates) que encontrarás en la paleta de componentes disponibles.
6. Selecciona tu plantilla de carrusel de la lista de plantillas aprobadas.
7. Si tu plantilla incluye placeholders ({{1}}, {{2}}, etc.), asigna los valores correspondientes para cada uno.
8. Opcionalmente, añade componentes multimedia adicionales si tu flujo lo requiere.
9. Guarda el flujo y actívalo para que los usuarios puedan empezar a recibir la plantilla.

### Prueba el funcionamiento completo del carrusel

Antes de lanzar tu campaña a gran escala, es fundamental realizar pruebas exhaustivas para garantizar que todo funciona correctamente. Sigue este checklist de verificación:

1. **Prueba de activación:** Abre una conversación de prueba con tu bot desde WhatsApp. Envía la palabra clave que configuraste y verifica que el bot responda correctamente.
2. **Verificación visual del carrusel:** Confirma que el carrusel se muestre correctamente con todas las tarjetas que configuraste. Desliza horizontalmente para revisar cada una.
3. **Prueba de botones:** Haz clic en cada botón de todas las tarjetas para asegurarte de que:
   - Las URLs dirijan a las páginas correctas y se abran sin errores.
   - Las Respuestas Rápidas envíen el texto predefinido correctamente.
4. **Carga de multimedia:** Verifica que todas las imágenes y videos se carguen sin problemas y se vean correctamente. Si algún archivo no se carga, revisa que la URL sea accesible públicamente.
5. **Compatibilidad móvil:** Prueba el carrusel tanto en dispositivos Android como iOS para asegurar una experiencia consistente en ambas plataformas.

Si todo funciona correctamente, ¡tu bot está listo para empezar a enviar plantillas de carrusel con contenido multimedia a tus clientes!


> **Diferencia clave entre carrusel multimedia y carrusel de productos:** La plantilla de carrusel multimedia requiere que agregues manualmente cada tarjeta con su contenido (imagen/video, texto y botones). La plantilla de carrusel de productos, por otro lado, genera automáticamente las tarjetas a partir de los datos de tu catálogo de e-commerce sincronizado, ahorrándote tiempo y asegurando que la información esté siempre actualizada.

### Envío de Video en el Carrusel Multimedia

Si prefieres usar videos en lugar de imágenes en tus tarjetas, el proceso es igual de sencillo. Simplemente cambia la opción de "Card Header" (Encabezado de tarjeta) de "Imagen" a "Video" al momento de configurar cada tarjeta. El resto de los pasos —incluyendo la adición de tarjetas, la personalización de botones y el guardado de la plantilla— son exactamente los mismos que para el carrusel de imágenes.


> **Requisitos para videos en el carrusel:**
- Formato: MP4 con codificación H.264.
- Duración máxima: 30 segundos.
- Tamaño máximo del archivo: 16 MB.
- El video debe estar alojado en una URL pública accesible vía HTTPS.
- La relación de aspecto recomendada es 1:1 (cuadrado) o 16:9 (horizontal).
- No se recomienda usar videos con texto pequeño o detalles finos, ya que la vista previa puede ser reducida en dispositivos móviles.

## Uso de la Plantilla de Carrusel de Productos

Si tienes una tienda en línea y deseas mostrar tus productos directamente desde tu catálogo sincronizado, la **Plantilla de Carrusel de Productos** es la opción ideal. Esta funcionalidad te permite crear carruseles dinámicos donde cada tarjeta se completa automáticamente con la información de tus productos (imagen, nombre, precio) sin necesidad de configurar cada tarjeta manualmente, lo que ahorra tiempo y reduce errores.


### Integra tu tienda en línea con E-SMART360

Para usar la funcionalidad de carrusel de productos, el primer paso es asegurarte de que tu tienda en línea esté correctamente integrada con E-SMART360. Las plataformas compatibles incluyen:

- **WooCommerce:** Integración nativa para tiendas basadas en WordPress. Sincroniza productos, precios, inventario y categorías.
- **Shopify:** Conexión directa con tiendas Shopify. La integración permite importar productos automáticamente.
- **API personalizada:** Para otras plataformas, puedes utilizar nuestra API de integración para sincronizar tu catálogo.

Una vez conectada, verifica en la sección de "Catálogo" de E-SMART360 que los productos estén sincronizados correctamente. Si ves productos duplicados o faltantes, revisa la configuración de la integración y vuelve a sincronizar. Asegúrate de que cada producto tenga al menos una imagen de buena calidad, un nombre descriptivo y un precio actualizado.

Si necesitas ayuda detallada con este paso, consulta nuestra guía sobre cómo configurar un catálogo de productos en WhatsApp o mira nuestro video tutorial disponible en el canal oficial de E-SMART360.

### Crea la plantilla de carrusel de productos

El proceso de creación es similar al de la plantilla de carrusel multimedia, con una diferencia clave en la selección de contenido:

1. Ve a "Plantillas de Mensajes" y haz clic en "Crear".
2. Selecciona la opción **"Plantilla de Carrusel de Productos"** (Product Carousel Template).
3. Asigna un nombre descriptivo a la plantilla y selecciona la categoría "Marketing".
4. Configura el mensaje de la burbuja principal (el texto que precede al carrusel).
5. En lugar de agregar tarjetas una por una, **selecciona la cantidad de productos** que deseas incluir en el carrusel (entre 1 y 10 productos).
6. Opcionalmente, define criterios de filtrado (categoría, rango de precio, etiquetas) para seleccionar automáticamente los productos que cumplan con ciertos requisitos.

A diferencia del carrusel multimedia, **no necesitas añadir imágenes ni textos manualmente**, ya que el sistema extraerá automáticamente la información de cada producto desde tu catálogo sincronizado: la imagen principal, el nombre del producto y el precio.

### Configura los botones de acción para los productos

Aunque las tarjetas se generan automáticamente con los datos del producto, aún puedes y debes personalizar los botones de acción para cada producto. Por cada tarjeta puedes agregar hasta dos botones. Las configuraciones más comunes y efectivas son:

- **Botón 1 - "Ver producto":** Botón de tipo URL que dirige a la página individual del producto en tu tienda en línea.
- **Botón 2 - "Comprar ahora":** Botón de tipo URL que lleva directamente al carrito de compras con el producto agregado.

Al igual que en las plantillas multimedia, el orden y tipo de botones debe ser exactamente el mismo en todos los productos del carrusel. Si decides tener un solo botón, ese mismo patrón debe aplicarse a todas las tarjetas.

### Envía a aprobación e integra en tu bot

Al igual que con las plantillas multimedia, la plantilla de carrusel de productos debe ser aprobada por WhatsApp antes de poder utilizarla. El proceso de aprobación es el mismo: envía la plantilla, espera la revisión (24-48 horas) y verifica el estado.

Una vez aprobada, intégrala en tus flujos de bot siguiendo estos pasos:

1. Ve a "Respuesta de Bot" y crea un nuevo flujo o edita uno existente.
2. Agrega la palabra clave que activará este carrusel (ej: "tienda", "comprar", "productos").
3. En el constructor de flujos, agrega el componente de "Plantillas" y selecciona tu plantilla de carrusel de productos.
4. En la configuración de la plantilla, **selecciona los productos específicos** que deseas mostrar desde tu catálogo. Puedes elegir productos individuales o aplicar filtros.
5. Guarda y activa el flujo.


> **Ventaja clave del carrusel de productos:** Los datos de los productos se actualizan dinámicamente. Si cambias el precio, la imagen o la disponibilidad de un producto en tu tienda, esos cambios se reflejarán automáticamente en el carrusel sin necesidad de recrear la plantilla. Esto garantiza que tus clientes siempre vean información actualizada y precisa.

## Aprovechando los Botones CTA (Llamada a la Acción)

Los botones de CTA (Call to Action) son elementos interactivos fundamentales que permiten a los usuarios realizar acciones específicas con un solo clic. En el contexto de las plantillas de carrusel, los botones CTA son esenciales para guiar al usuario hacia la acción deseada, ya sea visitar una página web, realizar una compra, agendar una cita o iniciar una conversación con un agente.


> **¿Qué tipos de botones existen en las plantillas de carrusel?** WhatsApp ofrece dos tipos principales de botones para las plantillas de carrusel: los botones de URL (que redirigen a una página web externa) y los botones de Respuesta Rápida (Quick Reply, que envían un mensaje predefinido al chatbot). Ambos tipos pueden combinarse en una misma tarjeta, siempre manteniendo la consistencia en todo el carrusel. No puedes mezclar tipos de botones en diferentes posiciones entre tarjetas.

### Configuración Detallada de Botones CTA URL

Los botones CTA URL son perfectos para dirigir tráfico a tu sitio web, tienda en línea, landing pages especializadas, formularios de registro o cualquier otra página externa. Aquí te mostramos cómo configurarlos paso a paso en E-SMART360:


### Crea un flujo de bot con botón CTA

Desde el panel de E-SMART360, accede al Gestor de Bots y crea un nuevo flujo o edita uno existente. En el constructor visual de flujos, busca el componente de botón llamado **"CTA URL"** o **"Botón URL"** dentro de la sección de elementos interactivos. Arrástralo y suéltalo en el flujo en el punto donde deseas que aparezca el botón de llamada a la acción. Conecta este bloque al bloque de inicio del flujo para que se active cuando el usuario envíe la palabra clave correspondiente.

### Personaliza el botón CTA URL

Configura los siguientes parámetros del botón en el panel de propiedades:

- **Texto del botón (Button Text):** Escribe un texto breve y atractivo que invite claramente a la acción. Ejemplos altamente efectivos: "Ver producto", "Comprar ahora", "Más información", "Agendar cita", "Descargar guía", "Solicitar cotización". Recuerda que el límite máximo es de 20 caracteres, así que elige palabras clave impactantes.
- **URL de destino (Action URL):** Ingresa la dirección web completa a la que deseas dirigir a los usuarios. Asegúrate de incluir el protocolo https:// y de que la URL sea accesible públicamente sin autenticación. Verifica que la página de destino esté optimizada para dispositivos móviles, ya que la mayoría de los usuarios de WhatsApp acceden desde sus teléfonos.
- **Mensaje de acompañamiento:** Redacta el texto que contextualizará al usuario antes de mostrarle el botón. Este mensaje debe explicar brevemente qué encontrará al hacer clic. Por ejemplo: "Haz clic en el botón de abajo para ver los detalles de este producto".

### Envía el botón CTA desde el chat en vivo (opcional)

Una funcionalidad adicional muy útil de E-SMART360 es que puedes enviar el botón CTA URL directamente desde tu chat en vivo, sin necesidad de que el usuario active un flujo de bot. Esto es especialmente valioso cuando un agente de soporte o ventas necesita compartir un enlace específico durante una conversación activa con un cliente.

Para utilizar esta funcionalidad:

1. Ve a la sección de **chat en vivo** (Live Chat) de E-SMART360.
2. Durante una conversación activa con un cliente, haz clic en el botón de **"Flujo"** o **"Plantilla de mensaje"** que aparece en la barra de herramientas del chat.
3. Selecciona la plantilla que contiene el botón CTA URL de la lista de plantillas disponibles.
4. Haz clic en "Enviar" para que el cliente reciba el mensaje con el botón interactivo.

El cliente recibirá el mensaje con el botón CTA en su chat de WhatsApp y podrá hacer clic para ser redirigido a la página que hayas configurado, todo sin salir de la conversación.


> **Precaución importante con las URLs:** Siempre verifica que las URLs que agregues a tus botones CTA sean correctas y estén funcionando antes de enviar la plantilla a producción. Una URL rota, incorrecta o que redirige a una página no deseada genera una mala experiencia de usuario y puede dañar la confianza del cliente en tu marca. Además, asegúrate de que las URLs cumplan estrictamente con las políticas de WhatsApp: no deben redirigir a contenido prohibido (violencia, contenido sexual, productos ilegales, engaños publicitarios) y deben ser páginas seguras (HTTPS).

## Límites de Caracteres y Especificaciones Técnicas

Es fundamental conocer los límites establecidos por WhatsApp para las plantillas de carrusel multimedia. Superar estos límites resultará en errores al guardar la plantilla o en el rechazo de la misma durante el proceso de revisión de WhatsApp.



### 📷 Imágenes

**Especificaciones técnicas para imágenes en el carrusel:**

- **Formatos aceptados:** JPEG y PNG exclusivamente.
- **Tamaño máximo del archivo:** 5 MB por imagen.
- **Relación de aspecto recomendada:** 1:1 (formato cuadrado).
- **Resolución mínima recomendada:** 300 x 300 píxeles.
- **Resolución óptima:** 800 x 800 píxeles para una visualización nítida en todos los dispositivos.
- **Requisito de alojamiento:** La imagen debe estar alojada en una URL pública accesible vía HTTPS. No se aceptan archivos locales ni URLs que requieran autenticación.
- **Compresión recomendada:** Comprime las imágenes sin perder calidad visible para reducir el tiempo de carga. Herramientas como TinyPNG o Squoosh pueden ayudarte.

### 🎬 Videos

**Especificaciones técnicas para videos en el carrusel:**

- **Formato aceptado:** MP4 con codificación de video H.264 y codificación de audio AAC.
- **Tamaño máximo del archivo:** 16 MB por video.
- **Duración máxima:** 30 segundos por video.
- **Relación de aspecto recomendada:** 1:1 (cuadrado) o 16:9 (horizontal).
- **Resolución recomendada:** 720p (1280 x 720 píxeles) como mínimo.
- **Contenido del video:** Evita texto muy pequeño o detalles finos, ya que la vista previa del video puede mostrarse en un tamaño reducido dentro del carrusel.
- **Requisito de alojamiento:** El video debe estar alojado en una URL pública accesible vía HTTPS.

### 📝 Texto y Botones

**Límites de caracteres para texto y botones en el carrusel:**

- **Cuerpo del mensaje en cada tarjeta:** Máximo 160 caracteres (incluyendo espacios).
- **Encabezado de la tarjeta:** Máximo 60 caracteres.
- **Pie de página (opcional):** Máximo 60 caracteres.
- **Texto de cada botón:** Máximo 20 caracteres (recomendado: entre 10 y 18 para una visualización óptima).
- **Cantidad máxima de tarjetas por carrusel:** 10 tarjetas (recomendado: entre 3 y 6 para mejor experiencia de usuario).
- **Cantidad máxima de botones por tarjeta:** 2 botones.
- **Límite de placeholders por plantilla:** Hasta 20 placeholders dinámicos ({{1}}, {{2}}, etc.).

> **¡Atención! Requisito crítico de alojamiento multimedia:** Todos los archivos multimedia (imágenes y videos) deben estar alojados en servidores accesibles públicamente a través de conexiones HTTPS seguras. Los archivos almacenados localmente en tu computadora, protegidos con contraseña, alojados en servidores que requieran autenticación o en redes privadas (localhost, IPs internas) no funcionarán en las plantillas de WhatsApp. Además, las URLs de tus archivos multimedia deben ser permanentes y no caducar con el tiempo. Las URLs temporales de servicios de almacenamiento gratuito o de prueba pueden expirar y causar que las imágenes o videos dejen de mostrarse después de unos días o semanas. Te recomendamos usar servicios de almacenamiento en la nube confiables como AWS S3, Google Cloud Storage, Cloudinary o el almacenamiento integrado de E-SMART360.

## Guía Completa de Bloques Interactivos y Botones

Los bloques interactivos y los botones son elementos clave para mejorar la experiencia del usuario en tus chatbots de E-SMART360. A continuación, te explicamos cómo configurarlos en detalle para crear conversaciones fluidas y atractivas.

### Conceptos Básicos de los Bloques Interactivos

Los bloques interactivos permiten a los usuarios interactuar con tu chatbot simplemente tocando opciones predefinidas en forma de botones, en lugar de tener que escribir respuestas manualmente. Esto agiliza la comunicación, reduce errores de escritura y mejora significativamente la experiencia del usuario, especialmente en dispositivos móviles donde escribir puede ser incómodo.



### 🔘 Tipos de Botones Disponibles

- **Botones de Respuesta Rápida (Quick Reply):** Envían un mensaje predefinido al chatbot cuando el usuario hace clic. Ideales para menús de opciones, encuestas de satisfacción, confirmaciones de pedidos o selección de categorías.
- **Botones URL:** Redirigen a páginas web externas cuando el usuario hace clic. Perfectos para enlazar a fichas de producto, promociones, blog posts, formularios de registro o páginas de pago.
- **Botones de Llamada Telefónica:** Inician una llamada telefónica directa al número configurado (disponibles en ciertos tipos de interacciones y planes de WhatsApp Business API).

### 🎯 Acciones que Pueden Desencadenar los Botones

- **Enviar mensaje de respuesta:** Muestra un mensaje de texto automatizado cuando el usuario hace clic en un botón de Respuesta Rápida.
- **Asignar etiqueta al contacto:** Clasifica automáticamente a los usuarios según la opción que seleccionaron, permitiendo segmentarlos para campañas futuras.
- **Inscribir en una secuencia de seguimiento:** Agrega al usuario automáticamente a una secuencia programada de mensajes de seguimiento (drip campaign).
- **Notificar a un agente:** Asigna la conversación a un agente humano específico para atención personalizada cuando se requiere intervención manual.
- **Actualizar campo personalizado:** Modifica el valor de un campo personalizado del contacto (por ejemplo, "categoría de interés", "presupuesto").

### Configuración de Bloques Interactivos en el Constructor de Flujos

Para crear una experiencia de usuario fluida con botones interactivos, sigue estos pasos para configurar correctamente los bloques en el constructor de flujos de E-SMART360:

1. **Accede al Gestor de Bots** desde el panel principal y ve a la sección de "Respuesta de Bot".
2. **Haz clic en "Crear"** para iniciar un nuevo flujo o selecciona uno existente para editarlo.
3. **Haz doble clic** en el bloque de inicio del flujo (nodo inicial) para abrir el panel de configuración.
4. **Edita la pestaña de "Configurar Referencia"** (Configure Reference): aquí puedes definir el título del flujo y las palabras clave que lo activarán.
5. **Selecciona el tipo de coincidencia** (string match): puedes elegir entre coincidencia exacta, coincidencia parcial que contenga las palabras clave o mediante expresiones regulares para patrones más complejos.
6. **Guarda los cambios** y continúa con la construcción del flujo agregando los bloques interactivos.

### Creación de Flujos de Conversación Multinivel

Una de las funcionalidades más potentes de E-SMART360 es la capacidad de crear flujos de conversación multinivel, donde cada botón puede desencadenar una nueva interacción con más opciones y contenido relevante para el usuario, creando verdaderos árboles de decisión conversacionales.

Para crear flujos multinivel efectivos:

1. **Clona bloques existentes:** Haz clic derecho sobre cualquier bloque en el constructor visual para usar la función "Clonar" y duplicar bloques que ya hayas configurado previamente. Esto ahorra tiempo y garantiza consistencia en el diseño.
2. **Anida bloques interactivos:** Agrega un bloque interactivo dentro de otro existente para crear conversaciones estructuradas con múltiples niveles de profundidad. Por ejemplo: el primer nivel pregunta "¿Qué categoría te interesa?" y cada respuesta lleva a un submenú con productos específicos de esa categoría.
3. **Conecta los botones a sus destinos:** Cada botón de Respuesta Rápida puede estar conectado a un nuevo bloque, permitiendo que el usuario navegue por diferentes ramas de la conversación según sus elecciones.
4. **Cierra los bloques correctamente:** Los bloques de botones deben cerrarse adecuadamente con un bloque de texto de conclusión o redirigiendo a otro flujo, ya que no pueden quedar abiertos sin un mensaje de seguimiento.

Este enfoque permite crear experiencias conversacionales ricas donde los usuarios pueden explorar diferentes opciones, productos o servicios simplemente tocando botones, sin necesidad de escribir nada y de forma totalmente guiada.

## Consejos para Plantillas de Carrusel Efectivas

Para maximizar el impacto de tus plantillas de carrusel, sigue estas recomendaciones basadas en las mejores prácticas de la industria y la experiencia de cientos de usuarios de E-SMART360:



### 📐 Consistencia Visual

Mantén un diseño uniforme en todas las tarjetas del carrusel. Usa el mismo estilo visual, colores corporativos y disposición de elementos en cada tarjeta. La plantilla no se guardará si el orden de los botones no es consistente entre tarjetas. Además, una apariencia profesional y coherente refuerza la identidad de tu marca y genera confianza en los usuarios.

### 🖼️ Imágenes de Alta Calidad

Selecciona imágenes visualmente atractivas, nítidas y relevantes para tu contenido. Una imagen borrosa, pixelada o de baja calidad puede afectar negativamente la percepción de tu marca y disminuir la tasa de clics hasta en un 60%. Invierte tiempo en elegir imágenes profesionales o de stock de alta resolución que representen adecuadamente tus productos o servicios.

### ✍️ Texto Conciso y Enfocado

Mantén el texto breve y directo. No satures las tarjetas con párrafos largos o información excesiva. Ve al grano: destaca los beneficios principales y el valor de tu oferta en pocas palabras. Recuerda que el límite es de 160 caracteres por tarjeta, así que prioriza la información más importante. Usa viñetas mentales: "Producto X - $Y - Envío gratis".

### 🎯 Llamadas a la Acción Claras

Incluye botones con mensajes que inviten claramente a la acción deseada. Frases como "Comprar ahora", "Ver oferta", "Más información" o "Contactar" funcionan mejor que términos genéricos como "Click aquí" o "Ir". Cada botón debe tener un propósito definido y estar perfectamente alineado con el contenido de la tarjeta que lo contiene.

### 🧪 Prueba Antes de Publicar

Antes de lanzar tu plantilla a gran escala, pruébala minuciosamente para asegurarte de que funciona como esperas. Envía pruebas a ti mismo o a un grupo reducido de usuarios de prueba. Verifica que las imágenes y videos se carguen correctamente, que los botones dirijan a las URLs correctas y que el formato se vea bien tanto en dispositivos Android como iOS.

### 📊 Analiza el Rendimiento

Monitorea las métricas de tus campañas que utilizan carrusel: tasa de clics (CTR) por tarjeta, interacciones totales, conversiones generadas y tasa de rebote. Usa estos datos para refinar tus plantillas y mejorar los resultados en futuras campañas. E-SMART360 ofrece herramientas de análisis integradas en el panel de reportes para ayudarte a medir el rendimiento de cada plantilla.

## Casos de Uso y Ejemplos Prácticos

Para ayudarte a visualizar cómo aplicar las plantillas de carrusel en tu negocio, aquí tienes cuatro ejemplos prácticos detallados de diferentes industrias con resultados reales:



### 🛍️ Tienda de Ropa y Moda

**Escenario:** Una tienda de moda lanza su colección de temporada y quiere promocionarla entre sus clientes de WhatsApp de forma visual y atractiva.

**Solución:** Crean un carrusel con 5 tarjetas, cada una mostrando una prenda diferente de la nueva colección (vestido, camisa, pantalón, accesorios, calzado). Cada tarjeta incluye el nombre del producto, el precio promocional y dos botones: "Ver detalle" (URL a la página del producto con fotos adicionales) y "Comprar ahora" (URL directa al carrito de compras con el producto preseleccionado).

**Resultado:** Los clientes pueden explorar toda la colección sin salir de WhatsApp, aumentando las posibilidades de compra. Según datos reportados por nuestros usuarios, esta estrategia demostró aumentar las tasas de conversión en hasta un 35% en comparación con los mensajes de texto tradicionales.

**Configuración adicional:** El carrusel se activa con la palabra clave "novedades", y el flujo de bot pregunta la categoría preferida (mujer, hombre, infantil) antes de mostrar los productos relevantes, personalizando así la experiencia.

### 🍕 Restaurante con Menú Digital

**Escenario:** Un restaurante quiere mostrar su menú completo a los clientes que preguntan por WhatsApp, sin necesidad de enviar imágenes estáticas o PDFs difíciles de leer en dispositivos móviles.

**Solución:** Configuran un bot con palabras clave como "menú" o "carta". Cuando el cliente escribe esas palabras, el bot responde automáticamente con un carrusel donde cada tarjeta representa una categoría del menú: entradas, platos principales, postres, bebidas y combos especiales. Cada tarjeta incluye una foto representativa de la categoría y un botón URL que lleva a la sección correspondiente del menú en la página web del restaurante.

**Resultado:** Los clientes reciben una experiencia visual atractiva y pueden explorar el menú completo al instante. El restaurante reportó una reducción del 40% en las consultas repetitivas sobre el menú y un aumento del 20% en los pedidos gracias a la presentación apetitosa de los platos en formato carrusel.

### 🏢 Agencia Inmobiliaria

**Escenario:** Una agencia inmobiliaria quiere mostrar propiedades disponibles a clientes potenciales que contactan por WhatsApp después de ver un anuncio.

**Solución:** Utilizan la plantilla de carrusel de productos integrada con su CRM inmobiliario. Cada tarjeta del carrusel muestra la foto principal del departamento o casa, el precio de venta o renta, la ubicación y dos botones: "Agendar visita" (URL que abre un calendario de agendamiento) y "Ver ficha técnica" (URL a la página detallada con todas las especificaciones, metros cuadrados, amenities, etc.).

**Resultado:** Los clientes potenciales reciben propiedades seleccionadas según sus criterios de búsqueda (ubicación, rango de precio, número de habitaciones), agilizando el proceso de ventas. La agencia reportó un aumento del 25% en las visitas programadas y una reducción significativa en las llamadas telefónicas de consulta básica.

### 📚 Plataforma de Cursos Online

**Escenario:** Una plataforma educativa promociona sus cursos más populares entre los usuarios que ya han mostrado interés en formarse en áreas específicas.

**Solución:** Crean un carrusel con los 4 cursos más demandados del mes. Cada tarjeta muestra el logo o una imagen representativa del curso, el nombre completo, la duración en horas o semanas y el precio promocional con descuento por tiempo limitado. Los botones incluyen "Ver programa" (URL a la página del curso con el temario detallado) y "Inscribirme ahora" (URL de pago directo con el descuento aplicado).

**Resultado:** La plataforma experimentó un aumento significativo del 50% en las inscripciones provenientes de WhatsApp en comparación con las campañas de email marketing tradicionales. Los usuarios valoran poder ver múltiples opciones y elegir rápidamente sin salir de la aplicación de mensajería.


> **Novedad: Integración mejorada con catálogos de e-commerce (2025-06-15)**
> Ahora puedes sincronizar automáticamente tu catálogo de WooCommerce o Shopify con las plantillas de carrusel de productos. Los cambios que hagas en tu tienda (precios, imágenes, disponibilidad, nuevos productos) se reflejarán en tiempo real en tus plantillas de carrusel, sin necesidad de recrearlas manualmente. Esta actualización reduce significativamente el tiempo de mantenimiento de tus campañas y asegura que tus clientes siempre vean información actualizada al minuto.

## Preguntas Frecuentes


### ¿Por qué mi plantilla de carrusel no se guarda?

Este es uno de los problemas más comunes al crear plantillas de carrusel. La causa más frecuente es la **inconsistencia en el orden de los botones entre las tarjetas**. WhatsApp exige que todas las tarjetas del carrusel tengan exactamente la misma estructura de botones, en el mismo orden. Si una tarjeta tiene un botón URL seguido de una Respuesta Rápida, todas las demás deben seguir ese mismo patrón.

Otras causas posibles incluyen:
- Has superado el límite máximo de 10 tarjetas por carrusel.
- El nombre de la plantilla contiene caracteres especiales no permitidos.
- Las URLs de los archivos multimedia no son accesibles o no utilizan HTTPS.
- Algún campo obligatorio está vacío o contiene información inválida.

### ¿Cuánto tiempo tarda la aprobación de una plantilla por WhatsApp?

WhatsApp normalmente revisa y aprueba las plantillas en un plazo de **24 a 48 horas** en condiciones normales. Sin embargo, este tiempo puede variar dependiendo de la carga de trabajo del equipo de revisión de Meta. En algunos casos, las plantillas pueden ser aprobadas en cuestión de horas, mientras que en periodos de alta demanda podrían tardar hasta 72 horas.

Puedes verificar el estado en cualquier momento desde la sección "Plantillas de Mensajes" de tu panel de E-SMART360. Si tu plantilla es rechazada, recibirás una notificación con el motivo específico del rechazo para que puedas corregirla y reenviarla sin tener que empezar desde cero.

### ¿Puedo enviar plantillas de carrusel en transmisiones masivas (broadcasts)?

Sí, absolutamente. Una vez que la plantilla esté aprobada por WhatsApp, puedes utilizarla en los siguientes canales de envío:

1. **Transmisiones masivas (Broadcasts):** Envía la plantilla a listas de contactos segmentados. Esta es una de las aplicaciones más efectivas para campañas de marketing.
2. **Chat en vivo (Live Chat):** Los agentes pueden enviar la plantilla manualmente durante conversaciones activas con clientes.
3. **Flujos de bot automáticos:** La plantilla se envía automáticamente cuando un usuario activa una palabra clave predefinida.

Las plantillas de carrusel son especialmente efectivas en campañas de marketing masivo porque captan mejor la atención que los mensajes de texto plano y generan mayores tasas de interacción.

### ¿Puedo mezclar imágenes y videos en un mismo carrusel?

No, no es posible mezclar imágenes y videos en un mismo carrusel. WhatsApp exige que **todas las tarjetas del carrusel utilicen el mismo tipo de encabezado multimedia**. Esto significa que debes elegir entre:

- **Carrusel de imágenes:** Todas las tarjetas usan imágenes como encabezado.
- **Carrusel de videos:** Todas las tarjetas usan videos como encabezado.

No puedes tener algunas tarjetas con imagen y otras con video en el mismo carrusel. Si necesitas mostrar ambos tipos de contenido, considera crear dos plantillas de carrusel separadas o usar la imagen como vista previa y enlazar al video mediante un botón URL.

### ¿Necesito tener una tienda en línea para usar la plantilla de carrusel de productos?

No es obligatorio. Puedes crear carruseles perfectamente funcionales añadiendo imágenes o videos manualmente a cada tarjeta, lo que se conoce como "Carrusel Multimedia". Esta modalidad no requiere integración con ninguna plataforma de e-commerce.

Sin embargo, si deseas usar la funcionalidad específica de **Carrusel de Productos** que extrae automáticamente los artículos desde tu catálogo de WhatsApp, necesitarás tener tu tienda en línea (WooCommerce, Shopify, etc.) integrada con E-SMART360 y tus productos sincronizados. La ventaja de esta modalidad es que los datos se actualizan automáticamente y no requieren mantenimiento manual.

### ¿Cuántas tarjetas puedo incluir en un carrusel y cuál es el número recomendado?

WhatsApp permite un **máximo de 10 tarjetas por carrusel**. Sin embargo, desde el punto de vista de la experiencia de usuario, se recomienda usar entre **3 y 6 tarjetas** para mantener la atención del usuario sin abrumarlo con demasiadas opciones.

Un carrusel con menos de 3 tarjetas puede parecer vacío, mientras que uno con 7 o más puede provocar fatiga de decisión en el usuario. El punto óptimo suele estar entre 4 y 5 tarjetas, que permite mostrar variedad sin saturar al usuario. Recuerda también que todas las tarjetas deben usar el mismo tipo de encabezado (todas imagen o todas video).

### ¿Qué hago si mi plantilla fue rechazada?

Si tu plantilla fue rechazada por WhatsApp, no te preocupes. Sigue estos pasos para corregirla y reenviarla:

1. **Revisa el motivo del rechazo:** En el panel de E-SMART360, ve a "Plantillas de Mensajes" y busca el estado de tu plantilla. Haz clic para ver los detalles del rechazo.
2. **Identifica el problema:** Las razones más comunes de rechazo incluyen:
   - Contenido promocional excesivo o engañoso.
   - Falta de placeholders con datos de ejemplo representativos.
   - Botones con URLs rotas o que redirigen a páginas incorrectas.
   - Imágenes de baja calidad o con texto superpuesto ilegible.
   - Incumplimiento de las políticas de contenido de WhatsApp.
3. **Corrige los errores:** Modifica la plantilla según las indicaciones recibidas.
4. **Reenvía la plantilla:** Una vez corregida, puedes enviarla nuevamente para su revisión. El proceso de aprobación comenzará de nuevo con un tiempo estimado de 24 a 48 horas.

### ¿Los placeholders funcionan en las plantillas de carrusel?

Sí, los placeholders (variables dinámicas como {{1}}, {{2}}, etc.) funcionan en las plantillas de carrusel de la misma manera que en las plantillas de mensaje regulares. Puedes usarlos para personalizar:

- El **mensaje de la burbuja principal** que precede al carrusel (ej: "Hola {{1}}, mira nuestras ofertas").
- El **texto del cuerpo** de cada tarjeta (ej: "Precio especial: {{2}}").
- Los **botones URL** (ej: incluyendo un identificador de usuario en la URL).

Sin embargo, ten en cuenta que los placeholders no pueden usarse en el contenido multimedia (imágenes/videos) ni en los textos de los botones. El límite total de placeholders por plantilla es de 20.

## Solución de Problemas Comunes


> **Posibles causas y sus soluciones:**

- **Causa 1 - La plantilla aún no está aprobada:** Verifica el estado en "Plantillas de Mensajes". Debe mostrar el estado "Aprobada". Si está "Pendiente", espera la revisión de WhatsApp.
- **Causa 2 - El flujo del bot está mal configurado:** Revisa que hayas seleccionado la plantilla correcta en el componente de "Plantillas" del constructor de flujos y que los placeholders estén correctamente mapeados.
- **Causa 3 - Problema de conexión con WhatsApp Business API:** Asegúrate de que tu cuenta de WhatsApp Business esté activa, correctamente conectada y que el token de acceso no haya expirado.
- **Causa 4 - La palabra clave no coincide:** Verifica que la palabra clave configurada en el flujo del bot coincida exactamente con lo que el usuario está escribiendo (considera mayúsculas/minúsculas si la coincidencia es exacta).

> **Posibles causas y sus soluciones:**

- **Causa 1 - Formato de URL incorrecto:** Verifica que todas las URLs comiencen con https:// y sean accesibles públicamente sin requerir autenticación ni cookies de sesión.
- **Causa 2 - Inconsistencia en el orden de botones:** Todas las tarjetas del carrusel deben tener exactamente el mismo orden y tipo de botones. Si una tarjeta difiere, la plantilla no funcionará correctamente.
- **Causa 3 - Texto del botón demasiado largo:** El límite es de 20 caracteres. Si el texto es más largo, WhatsApp truncará el botón o rechazará la plantilla. Reduce el texto a 18 caracteres como máximo para estar seguro.
- **Causa 4 - La plantilla no está aprobada:** Los botones no funcionarán hasta que la plantilla haya sido aprobada por WhatsApp.

> **Posibles causas y sus soluciones:**

- **Causa 1 - URL del archivo inaccesible:** Verifica que la imagen o video estén alojados en una URL pública y accesible. Prueba abrir la URL directamente en un navegador en modo incógnito para confirmar que es accesible sin autenticación.
- **Causa 2 - Formato de archivo no soportado:** Usa exclusivamente JPEG o PNG para imágenes, y MP4 (H.264) para videos. Otros formatos como GIF, WEBM, BMP o TIFF no son compatibles.
- **Causa 3 - Archivo demasiado pesado:** Las imágenes no deben superar los 5 MB y los videos no deben superar los 16 MB. Comprime los archivos si es necesario.
- **Causa 4 - El enlace ha caducado:** Si usas enlaces temporales o de prueba, reemplázalos por URLs permanentes en un servicio de almacenamiento confiable.
- **Causa 5 - El video excede los 30 segundos:** WhatsApp limita la duración de los videos en carrusel a 30 segundos. Acorta el video si es necesario.

## Conclusión

Las plantillas de carrusel multimedia ofrecen una forma dinámica, interactiva y altamente efectiva de presentar contenido dentro de tus chatbots de WhatsApp. Al utilizar eficazmente imágenes, videos y botones URL, puedes crear mensajes convincentes y llamativos que capten la atención de tu audiencia y los guíen hacia las acciones que deseas: comprar productos, agendar servicios, explorar catálogos o simplemente obtener más información sobre tu negocio.

La versatilidad de las plantillas de carrusel las hace adecuadas para prácticamente cualquier industria: tiendas de retail, restaurantes, agencias inmobiliarias, plataformas educativas, clínicas, talleres mecánicos y más. La clave está en elegir imágenes de alta calidad, redactar textos concisos y persuasivos, y configurar botones de acción claros que faciliten al usuario dar el siguiente paso en su recorrido de compra.


> **Próximos pasos recomendados:**
1. **Crea tu primera plantilla de carrusel** siguiendo los pasos de esta guía.
2. **Pruébala exhaustivamente** antes de lanzarla a gran escala.
3. **Monitorea los resultados** usando las herramientas de análisis de E-SMART360.
4. **Optimiza iterativamente** basándote en los datos de rendimiento: ajusta imágenes, textos, botones y segmentación.
5. **Expande a múltiples campañas** con diferentes carruseles para distintos públicos y objetivos.



### 📹 Video Tutorial

Además de esta guía escrita, te recomendamos ver nuestro video tutorial sobre cómo crear una plantilla de carrusel en WhatsApp, donde explicamos cada paso visualmente para mayor claridad. El video está disponible en nuestro canal oficial de YouTube y cubre desde la configuración básica hasta casos de uso avanzados con integración de tiendas en línea.

### 📚 Artículos Relacionados

Si deseas profundizar en temas complementarios, te recomendamos los siguientes recursos:
- [Cómo crear una plantilla de mensaje en WhatsApp Manager y sincronizarla con E-SMART360](/recursos/plantillas-mensajes-whatsapp-manager)
- Guía completa de componentes multimedia en E-SMART360
- [Cómo crear una plantilla de mensaje para WhatsApp](/recursos/crear-plantilla-mensaje-whatsapp)
- Guía de integración de catálogos de productos con WhatsApp
- Estrategias de marketing con WhatsApp Business API

## Mejores Prácticas para Campañas con Carrusel

Para garantizar el éxito de tus campañas utilizando plantillas de carrusel, te recomendamos seguir estas mejores prácticas adicionales:

### Segmentación de Audiencia
No envíes el mismo carrusel a todos tus contactos. Segmenta tu audiencia según:
- **Intereses previos:** Usa las etiquetas que los contactos han acumulado al interactuar con otros flujos de bot.
- **Historial de compras:** Muestra productos complementarios a los que ya han comprado.
- **Ubicación geográfica:** Si tienes sucursales o cobertura regional, muestra promociones relevantes para cada zona.
- **Etapa del ciclo de ventas:** Los nuevos leads necesitan contenido educativo, mientras que los clientes recurrentes responden mejor a ofertas de fidelización.

### Frecuencia de Envío
- **Campañas de marketing:** Máximo 1-2 carruseles por semana por contacto para evitar saturación.
- **Campañas estacionales:** Aumenta la frecuencia durante temporadas clave (Black Friday, Navidad, lanzamientos), pero siempre respetando los límites de mensajeria de WhatsApp.
- **Seguimiento post-compra:** Envía un carrusel con productos relacionados 3-5 días después de una compra.

### Optimización para Conversión
- **Primera tarjeta:** Debe ser la más atractiva, ya que es lo primero que ve el usuario.
- **Última tarjeta:** Úsala para un CTA general o una oferta especial adicional.
- **Botones:** Prefiere botones URL sobre Respuestas Rápidas cuando el objetivo sea generar tráfico web o ventas.
- **Llamado a la acción:** Incluye un sentido de urgencia cuando sea relevante ("Oferta válida hasta agotar stock", "Descuento exclusivo hoy").

### Pruebas A/B
Realiza pruebas A/B sistemáticas para identificar qué variaciones funcionan mejor:
- Prueba diferentes imágenes para el mismo producto.
- Varía el texto de los botones (ej: "Comprar" vs "Lo quiero").
- Compara carruseles de 4 tarjetas vs 6 tarjetas.
- Mide qué posición dentro del carrusel genera más clics.

## Políticas de WhatsApp para Plantillas Marketing

Es importante conocer y respetar las políticas de WhatsApp para evitar que tus plantillas sean rechazadas o que tu número sea restringido:



### ✅ Contenido Permitido

- Promociones y ofertas de productos/servicios legítimos.
- Lanzamientos de nuevos productos o colecciones.
- Invitaciones a eventos (webinars, lanzamientos, tiendas físicas).
- Contenido informativo sobre tu negocio.
- Encuestas de satisfacción con incentivo.
- Recordatorios de carritos abandonados con oferta.

### ❌ Contenido Prohibido

- Contenido engañoso o falso sobre productos/servicios.
- Promesas de resultados irreales o milagrosos.
- Contenido para adultos, violencia o discursos de odio.
- Productos prohibidos (armas, drogas, tabaco en algunas regiones).
- Prácticas de spam o mensajes no solicitados masivamente.
- Suplantación de identidad de otras marcas o personas.

> **Consecuencias de violar las políticas:** Si WhatsApp determina que tus plantillas violan sus políticas, puede tomar acciones que van desde el rechazo de la plantilla individual hasta la restricción temporal de tu capacidad de enviar mensajes, o incluso la desactivación permanente de tu cuenta de negocio. Revisa periódicamente las políticas actualizadas de WhatsApp Business API para asegurarte de cumplirlas.


> **Próximamente: Carrusel con productos recomendados por IA (2025-07-01)**
> Estamos desarrollando una nueva funcionalidad que permitirá a E-SMART360 seleccionar automáticamente los productos más relevantes para cada usuario basándose en su historial de compras, navegación e interacciones previas con el bot. El carrusel se generará dinámicamente mostrando primero los productos con mayor probabilidad de conversión para cada cliente específico. ¡Mantente atento a las actualizaciones!
