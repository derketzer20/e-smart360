---
title: "Cómo configurar un menú persistente en Messenger y WebChat de E-SMART360"
description: "Guía completa para crear y configurar menús persistentes en Facebook Messenger y en el chat web de E-SMART360. Incluye pasos detallados, capturas de pantalla, casos de uso prácticos y preguntas frecuentes."
section: "chatbots-omnicanal"
order: 243
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "menu-persistente-messenger-webchat-esmart360"
canonicalGroup: "como-configurar-un-menu-persistente-en-messenger-y-webchat-de"
tags: ["chatbots-omnicanal", "chatbots"]
staging: true
---
> **Actualización reciente (Febrero 2026)**
> El menú persistente ahora permite configuraciones avanzadas de postback, URLs dinámicas y soporte completo para múltiples idiomas tanto en Facebook Messenger como en WebChat. También se ha añadido la posibilidad de deshabilitar la entrada de texto del usuario para forzar el uso del menú en WebChat.

**TL;DR:**

- Un menú persistente en Facebook Messenger mantiene las opciones de navegación siempre visibles para que los usuarios accedan a funciones clave sin necesidad de escribir comandos.
- Para habilitarlo, el botón "Get Started" debe estar activado en la configuración de tu bot en E-SMART360.
- Puedes configurar el menú desde el Administrador de Bots de Facebook seleccionando un idioma, añadiendo URLs web o acciones de postback, y publicando el menú.
- En el WebChat de E-SMART360, el menú persistente se configura por separado desde el Administrador de WebChat y puede incluir opciones de URL, postback y la capacidad de deshabilitar la entrada de texto del usuario.

## Introducción

El menú persistente es una funcionalidad de Facebook Messenger que las personas encuentran muy útil al comenzar a interactuar con un bot. Esta característica permite que los propietarios de negocios y sus seguidores se comuniquen fácilmente para intercambiar información o acceder a funciones útiles. Cuando alguien hace clic en el botón de mensaje, un menú permanece siempre visible en la bandeja de entrada, proporcionando acceso sencillo a los elementos clave. Esto es útil cuando alguien quiere acceder rápidamente a información empresarial, como la página "Acerca de", o incluso permitir que los usuarios se suscriban a notificaciones próximas a través de RCN (Notificaciones Recurrentes).

Implementar un chatbot para tu sitio web también puede mejorar significativamente el compromiso y ayudar a tus visitantes. El menú persistente es una característica que puedes usar para personalizar aún más tu sitio web. Destaca como una funcionalidad útil para los chatbots web que brindan una buena experiencia de usuario y acceso rápido de navegación a información crítica.


> **¿Sabías que...?** El menú persistente se comporta de manera similar tanto en Facebook Messenger como en el widget de chat web. Puedes configurarlo por separado para cada canal y adaptar el contenido al público específico de cada plataforma.

## ¿Qué es un menú persistente?

### En Facebook Messenger

Un menú persistente es básicamente una funcionalidad de Facebook Messenger que mantiene las opciones importantes siempre accesibles. Facilita la navegación, ya que las funciones de uso frecuente están disponibles sin necesidad de interactuar extensamente con el bot. Cuando un usuario abre la conversación con tu página, el menú permanece visible en la parte inferior de la bandeja de entrada.

Por ejemplo, un usuario puede querer acceder rápidamente a la información de la empresa. En lugar de escribir manualmente su consulta, encuentra todo lo que necesita directamente en el menú: la página "Acerca de", la opción para suscribirse a notificaciones a través de RCN y los datos de contacto del negocio.

### En el chat web (WebChat)

En el contexto del chat web, un menú persistente es una lista de botones u opciones que siempre es accesible desde la ventana de la interfaz del chatbot web. Este menú permite a los usuarios saltar a diferentes áreas de tu sitio o incluso interactuar directamente con el chatbot sin ingresar al flujo de conversación. Esta funcionalidad es especialmente útil para sitios web de comercio electrónico, donde el acceso rápido a soporte, productos o servicios puede mejorar la experiencia de compra.


> **¿Quieres un ejemplo?** Imagina un visitante en tu tienda online que quiere saber el estado de su pedido. Con un menú persistente, encuentra la opción "Seguimiento de pedido" con un solo clic, sin tener que escribir "¿Dónde está mi pedido?" en el chat.

## Accesibilidad siempre activa: beneficios del menú persistente

El menú persistente permanece visible durante toda la interacción del usuario con tu bot de Facebook. Proporciona acceso fácil a funciones e información clave sin que el usuario necesite navegar a través de menús de conversación. Aquí tienes un desglose de los beneficios y lo que ofrece:

- **Accesibilidad:** Los usuarios siempre pueden encontrar el menú, lo que facilita el acceso a funciones o información de uso frecuente.
- **Navegación mejorada:** Simplifica la navegación para los usuarios al proporcionar una estructura clara para interactuar con el bot.
- **Múltiples idiomas:** Puedes crear diferentes menús persistentes para varios idiomas, asegurando una experiencia fluida para usuarios con diferentes preferencias lingüísticas.
- **Reducción de fricción:** Los usuarios no necesitan recordar comandos ni escribir mensajes específicos; con un solo clic acceden a lo que necesitan.
- **Aumento de conversiones:** Al facilitar el acceso a productos, promociones y soporte, se incrementan las posibilidades de conversión.


> **Caso real:** Una tienda de ropa online implementó el menú persistente en Messenger con acceso a novedades, seguimiento de pedidos y soporte. Reportó un incremento del 32% en consultas sobre productos y una reducción del 45% en mensajes repetitivos.

## Cómo acceder al Administrador de Menú Persistente

Antes de crear tu menú persistente, debes acceder al Administrador de Bots de Facebook. Sigue estos pasos:


### Haz clic en Administrador de Bots de Facebook

Desde el panel de control de E-SMART360, haz clic en la opción **Bot Manager** de Facebook.
  
### Selecciona la cuenta de bot

Elige la cuenta de bot que deseas usar.
  
### Desplázate hasta Menú Persistente

Una vez dentro, desplázate hacia abajo hasta que veas la opción **Persistent Menu**.
  
## Cómo crear un menú persistente en Messenger

Puedes crear un menú persistente en Messenger siguiendo estos sencillos pasos:


### Haz clic en Crear

Haz clic en el botón **Create** desde la página de "Persistent Menu". Se abrirá una ventana emergente con varios campos.
  
### Configura el idioma y el nombre

Elige "default" como idioma desde las opciones de **Locale**. Puedes usar otro idioma desde la opción "Locale" después de haber configurado el predeterminado. En la sección del menú, primero proporciona un nombre para tu opción.
  
### Elige el tipo de acción

Luego elige entre **web url** (enlace web) o **postback** (acción de retorno). Finalmente, proporciona un enlace web o un ID de postback según tu elección anterior.
  
### Publica el menú

Haz clic en el botón **Options** y selecciona publicar el menú. También puedes eliminar un menú existente desde aquí si es necesario.
  


### URL Web

Una URL web dirige al usuario a una página específica. Por ejemplo, puedes enlazar a tu página de productos, a una oferta especial o a tu página de contacto. El usuario será redirigido al navegador cuando seleccione esta opción.
  
### Postback

Un postback ejecuta una respuesta automatizada del chatbot. Por ejemplo, puedes configurar un postback "Ver horarios" para que el bot responda automáticamente con los horarios de atención. No requiere salir de la conversación de Messenger.
  
## Cómo probar el menú persistente en Messenger

Después de configurar el menú persistente, es importante probarlo desde la página para verificar que funciona correctamente. Simplemente abre la conversación con tu página de Facebook y verifica que las opciones del menú aparezcan y funcionen según lo esperado.

Si después de publicar el menú persistente puedes verlo funcionando, entonces la configuración fue exitosa. Así es como puedes configurar un menú persistente en Messenger usando E-SMART360.


> **Solución de problemas:** Si el menú persistente no aparece después de publicarlo, verifica que el botón "Get Started" esté activado en la configuración de tu bot y que hayas publicado correctamente el menú. A veces es necesario esperar unos minutos para que los cambios se propaguen en los servidores de Meta.

## Cómo eliminar un menú persistente de Messenger

Puedes eliminar el menú persistente desde **Administrador de Bots de Facebook > Menú Persistente**. Haz clic en el botón **Options** del menú que deseas eliminar y selecciona la opción de eliminación. Los cambios se aplicarán después de unos minutos.

## Cómo implementar un menú persistente en tu chatbot web

Configurar un menú persistente en tu chatbot web implica algunos pasos sencillos:


### Ve al Administrador de WebChat

Desde el panel de E-SMART360, navega hasta el **WebChat Bot Manager** y busca la opción **Persistent Menu**.
  
### Haz clic en Crear

Haz clic en la opción **Create**. Aparecerá una ventana emergente en la misma pantalla.
  
### Agrega opciones al menú

Desde la ventana emergente, puedes agregar opciones para el Menú Persistente. Cada opción puede ser:
    - **URL:** Un enlace a una página web externa.
    - **Postback:** Una respuesta automatizada del chatbot.
  
### Deshabilita la entrada de usuario (opcional)

Si deshabilitas la entrada de usuario desde la configuración, los visitantes del sitio web no podrán enviar mensajes escritos y solo podrán usar las opciones del menú persistente.
  
### Guarda los cambios

Guarda la configuración. El menú persistente aparecerá automáticamente en la ventana de chat de tu sitio web.
  

> **¿Para qué sirve deshabilitar la entrada de usuario?** Esta opción es ideal para campañas específicas donde quieres guiar a los usuarios a través de un flujo predeterminado. Por ejemplo, encuestas de satisfacción, procesos de registro paso a paso o asistencia guiada para la resolución de problemas técnicos.

## Por qué necesitas un menú persistente en tu chatbot web

Al implementar un menú persistente, puedes tener el mejor chatbot con IA para tu sitio web y obtener varios beneficios:

1. **Accesibilidad:** Los usuarios siempre encuentran el menú, donde pueden acceder fácilmente a opciones o información de uso frecuente desde tu chatbot web.
2. **Navegación mejorada:** Facilita la navegación para los usuarios al estructurar las interacciones con el chatbot con IA.
3. **Selección de múltiples idiomas:** Para cada idioma, puedes crear opciones de menú persistente separadas en tu chatbot web y configurar respuestas del chatbot.


> **Caso de éxito:** Una empresa de servicios financieros configuró su WebChat con menú persistente y entrada de usuario deshabilitada. Obtuvieron un 28% más de leads calificados y un 52% menos de abandono en el sitio web. El 73% de los usuarios completaron el flujo guiado sin asistencia humana.

## Integración del WebChat en WordPress

Para que el menú persistente del WebChat funcione en tu sitio web, primero debes integrar el widget de chat. Sigue estos pasos:

### Requisitos previos

- Una cuenta activa en E-SMART360.
- Acceso de administrador a tu sitio web WordPress.
- El plugin Elementor instalado (si usas Elementor como constructor de páginas).

### Pasos para integrar el WebChat


### Conecta tu sitio web

Desde el panel de E-SMART360, navega a la opción **WebChat > Connect Website**. Haz clic en "Connect Website" para acceder al menú de configuración.
  
### Configura la apariencia del chat

Proporciona un título para tu chatbox, ingresa la URL de tu sitio web y configura:
    - **Theme Background:** Color de fondo del tema.
    - **Theme Color:** Color principal de acento.
    - **Chat Bubble Background:** Color de fondo de las burbujas de chat.
    - **Chat Bubble Color:** Color del texto en las burbujas.
    - **Brand Logo:** Sube el logotipo de tu empresa.
    - **Chatbox Wallpaper:** Imagen de fondo personalizada para el chat.
    - **Posición:** Elige si el chat aparece a la izquierda o derecha.
    - **Estado inicial:** Abierto o cerrado al cargar la página.
    - **Eje X e Y:** Ajuste de posición preciso en píxeles.
    - **Retardo de carga:** Tiempo en segundos antes de que aparezca el chat (por defecto 0 segundos).
    - **Auto-eliminar registros:** Configuración para la limpieza automática de datos (por defecto Nunca).
  
### Copia el código JS de inserción

Haz clic en **Embed Code** para abrir el cuadro de diálogo. Copia el código JavaScript de inserción desde la esquina superior derecha. Este código funciona para WordPress, sitios personalizados y otras plataformas.
  
### Pega el código en tu sitio web con Elementor

- Inicia sesión en tu sitio WordPress y accede al panel de administración.
    - Navega a la página de inicio y selecciona **Visit Site**.
    - Haz clic en el icono de Inicio, luego elige **Edit with Elementor**.
    - Busca el widget **Code** (Código) en la sección de Widgets.
    - Selecciona el widget **Shortcode**, arrastra y suéltalo dentro de un contenedor en la página.
    - Pega el código de inserción copiado en la sección de shortcode.
    - Publica la página para que el chatbot se active.
  
### Prueba el chatbot

Visita tu sitio web y abre el chatbot. Prueba los desencadenadores de palabras clave y las respuestas del bot. Desde el panel de WebChat Live Chat de E-SMART360, puedes gestionar las conversaciones entrantes.
  

> **Nota importante:** Si seleccionaste solo la página de inicio, el widget de chat solo será visible en esa página. Si deseas que aparezca en otras páginas, sigue el mismo procedimiento para cada una. La mayoría de los sitios WordPress usan Elementor como constructor de páginas, pero para otros constructores el proceso será similar.

## Cómo automatizar conversaciones complejas con flujo de entrada de usuario en WebChat

El **Flujo de Entrada de Usuario** es una función avanzada que permite a los chatbots recopilar respuestas de los usuarios de manera estructurada. En lugar de enviar respuestas genéricas, tu chatbot puede:

- Hacer preguntas específicas.
- Almacenar las respuestas de los usuarios.
- Usar los datos recopilados para personalizar conversaciones futuras.

### Características clave del Flujo de Entrada de Usuario

- **Entrada de usuario dinámica:** Recopila y almacena información del cliente.
- **Rutas de conversación personalizadas:** Diseña interacciones del chatbot basadas en las respuestas del usuario.
- **Recopilación de datos en tiempo real:** Usa las entradas del cliente inmediatamente para proporcionar respuestas personalizadas.

### Beneficios de usar el Flujo de Entrada de Usuario

- **Ahorra tiempo:** Reduce el trabajo manual para los equipos de soporte.
- **Mejora la experiencia del cliente:** Proporciona respuestas más rápidas y precisas.
- **Recopila datos valiosos:** Obtiene información estructurada del cliente para uso futuro.
- **Mejora las ventas y el marketing:** Ayuda a calificar leads y guiarlos a través del proceso de compra.

### Cómo configurar el Flujo de Entrada de Usuario


### Accede al Administrador de Bots

Inicia sesión en E-SMART360 y ve al **Bot Manager**.
  
### Selecciona tu chatbot

Selecciona tu chatbot y navega hasta **Input Flow** (Flujo de Entrada).
  
### Crea y diseña el flujo

Haz clic en **Create**, diseña tu flujo de entrada y guárdalo.
  
### Prueba el chatbot

Prueba tu chatbot para asegurarte de que todo funcione correctamente.
  
### Revisa los datos recopilados

Visualiza las entradas de usuario recopiladas en el **Subscriber Manager** (Administrador de Suscriptores).
  

> **Consejo de optimización:** Usa preguntas cortas y claras. Aplica lógica condicional para ajustar las respuestas del chatbot según las entradas del usuario. Revisa regularmente las métricas del chatbot para mejorar las interacciones. Agrega opciones de respaldo para entradas inesperadas.
  
### Casos de uso del Flujo de Entrada de Usuario



### Soporte al cliente

Guía a los usuarios paso a paso a través de la resolución de problemas. Por ejemplo, si un usuario reporta un problema técnico, el chatbot puede preguntar: "¿Qué tipo de problema tienes?", "¿Desde cuándo ocurre?", y "¿Qué navegador usas?" para recopilar toda la información necesaria antes de escalar al equipo de soporte.
  
### Calificación de leads

Solicita detalles como nombre, presupuesto y preferencias. Un ejemplo práctico: "¿Qué tipo de servicio buscas?", "¿Cuál es tu presupuesto aproximado?", y "¿En qué horario prefieres ser contactado?" para segmentar leads calificados automáticamente.
  
### Reserva de citas

Automatiza la programación de servicios y reuniones. El chatbot puede preguntar: "¿Qué servicio deseas reservar?", "¿Qué fecha prefieres?", y "¿A qué hora te gustaría?" para agendar directamente sin intervención humana.
  
### Asistencia en ecommerce

Recomienda productos basados en las preferencias del usuario. Pregunta: "¿Qué tipo de producto buscas?", "¿Cuál es tu rango de precio?", y "¿Tienes alguna marca preferida?" para ofrecer recomendaciones personalizadas.
  
## Conclusión

Un menú persistente en tu chatbot web puede cambiar la forma en que los usuarios se comunican con tu sitio. Este menú permanente definitivamente mejorará el compromiso y la satisfacción del usuario. Recuerda que el objetivo de tu chatbot web, particularmente en un entorno de comercio electrónico, es hacer la vida mucho más fácil a tus clientes. Un menú persistente bien implementado hace precisamente eso: además de hacer que tu sitio web sea funcional, es importante hacerlo amigable para el cliente.

¿Listo para llevar tu negocio al siguiente nivel? Atrae a nuevos clientes proporcionando un menú persistente en tu página de Facebook, para que puedan acceder a tu información útil a través de este menú. Mejor aún, simplifica este proceso con E-SMART360. No solo puedes configurar un menú, sino que también puedes crear respuestas automatizadas usando ese menú.


> **Próximo paso:** Una vez que tengas tu menú persistente configurado, considera combinarlo con otras funciones avanzadas como flujos de conversación condicionales, respuestas con IA o integraciones con WhatsApp Flows para crear una experiencia de atención al cliente completa y omnicanal.

## Preguntas frecuentes


### ¿Qué es el menú persistente de Facebook Messenger?

El menú persistente en Facebook Messenger mantiene las opciones importantes siempre visibles en la parte inferior de la conversación. Facilita la navegación ya que las funciones de uso frecuente son accesibles sin necesidad de interactuar extensamente con el bot.

### ¿Cómo configurar un menú persistente en Messenger?

Así es como puedes configurar un menú persistente en Messenger con E-SMART360:
  1. Ve al Administrador de Bots de Facebook.
  2. Selecciona tu cuenta de bot y luego ve a Menú Persistente.
  3. Haz clic en Crear, establece el nombre del menú, especifica URL web o postback y proporciona los detalles requeridos.
  4. Publica tu menú para hacerlo efectivo.

### ¿Cómo elimino un menú persistente de Messenger?

Puedes eliminar el menú persistente en el Administrador de Bots de Facebook > Menú Persistente. Haz clic en el botón Options del menú existente y selecciona eliminar.

### ¿Cómo se relaciona el botón 'Get Started' con el menú persistente?

El menú persistente requiere que el botón "Get Started" esté activado para funcionar. Debes habilitar el botón "Get Started" en la configuración de tu bot antes de agregar el menú persistente.

### ¿Cómo configurar respuestas rápidas en Facebook Messenger?

Las respuestas rápidas se configuran a través de la plataforma E-SMART360. Ve a la configuración de tu bot, define un mensaje y las opciones de respuestas rápidas, y agrégalas al flujo de tu chatbot. A diferencia del menú persistente, las respuestas rápidas aparecen temporalmente vinculadas al mensaje del bot.

### ¿Cómo eliminar el botón 'Get Started' de Facebook Messenger?

Ve a la configuración de tu bot en el Administrador de Bots de Facebook y, en la sección de configuración correspondiente, desactiva el botón "Get Started".

### ¿Qué es el menú persistente en Instagram?

Es el mismo concepto del menú persistente que ves en Facebook Messenger, pero aplicado a los mensajes directos de Instagram. La configuración se realiza desde el Administrador de Bots seleccionando la cuenta de Instagram correspondiente.

### ¿Cuál es el propósito del botón de Messenger?

El botón de Messenger es el punto de entrada donde las personas interactúan con tu bot. Puede dirigir a los usuarios a tu menú persistente u otras funciones de tu bot.

### ¿Qué es un menú persistente en un chatbot con IA para sitios web?

Un menú persistente es un menú fijo en la ventana de la interfaz del chatbot web para navegar a secciones clave o realizar acciones específicas sin interactuar con el flujo de conversación.

### ¿Cómo configurar un menú persistente en un chatbot web?

Puedes configurar un menú persistente en solo tres pasos:
  1. Inicia sesión en E-SMART360 y conecta tu sitio web.
  2. Ve al Administrador de Bots de WebChat y desde allí crea el menú persistente.
  3. Agrega tus opciones deseadas y guarda.
  El menú persistente aparecerá en la ventana de chat de tu sitio web.

### ¿Por qué necesito un menú persistente para mi chatbot con IA?

Un menú persistente facilita la interacción del usuario al proporcionar acceso directo a enlaces y funciones importantes, mejorando la experiencia del usuario.

### ¿Cómo puede beneficiar un menú persistente a un chatbot de comercio electrónico?

Un menú persistente brinda acceso rápido a categorías de productos, soporte y promociones, reduciendo el tiempo que los clientes necesitan para encontrar lo que buscan.

### ¿Se puede crear un chatbot gratuito con menú persistente en un sitio web?

Sí, muchas plataformas ofrecen la capacidad de crear un chatbot gratuito con menú persistente, aunque las características y opciones de personalización pueden variar. E-SMART360 es una de ellas.

### ¿Qué elementos incluir en el menú persistente de un chatbot en un sitio web?

Incluye enlaces que proporcionen valor inmediato al usuario, como preguntas frecuentes, contacto con soporte, vista de productos, servicios y otras secciones de acceso frecuente.

### ¿Qué es un chatbot de sitio web?

Un chatbot de sitio web es un software automatizado impulsado por IA que puede interactuar con los visitantes, responder consultas, guiar a los usuarios a través de tu sitio y mejorar el compromiso sin intervención humana.

### ¿Por qué debería usar un chatbot con IA en mi sitio web?

Los chatbots con IA mejoran el compromiso del usuario, proporcionan soporte al cliente instantáneo, automatizan la interacción y aumentan la eficiencia, mejorando la experiencia general del usuario.

### ¿Cómo puedo crear un chatbot para mi sitio web?

Puedes crear un chatbot usando E-SMART360 u otras herramientas de construcción de chatbots que ofrezcan plantillas personalizables e interfaces fáciles de usar, adecuadas incluso para personas sin conocimientos de programación.

### ¿Qué hace al mejor chatbot con IA en un sitio web?

El mejor chatbot con IA para un sitio web debe ser receptivo, personalizable, fácil de implementar, manejar una amplia gama de solicitudes de usuario de manera efectiva e incluir capacidades avanzadas de procesamiento de lenguaje natural.

### ¿Qué importancia tiene tener un chatbot para sitios web de comercio electrónico?

Para los sitios web de comercio electrónico, los chatbots son cruciales ya que ayudan a los clientes a encontrar productos, proporcionan recomendaciones, manejan transacciones y ofrecen soporte, lo que mejora la experiencia de compra y puede aumentar las ventas.

### ¿Existen chatbots gratuitos para sitios web?

Sí, muchas plataformas ofrecen servicios de chatbot gratuitos con funciones básicas, perfectos para pequeñas empresas o aquellos nuevos en el mundo de los chatbots.

### ¿Cuáles son los beneficios de tener un chatbot en un sitio web?

Un chatbot en un sitio web proporciona soporte 24/7, responde consultas comunes al instante y libera a los agentes humanos para manejar problemas más complejos.

### ¿Cómo personalizar un chatbot para manejar múltiples idiomas?

Personaliza tu chatbot para múltiples idiomas configurando menús persistentes separados para cada idioma, asegurando interacciones personalizadas para una mejor comunicación y compromiso.

### ¿Cómo puede un chatbot personalizado mejorar las interacciones con los clientes en un sitio web?

Un chatbot personalizado puede tener la apariencia que tu negocio necesita para los clientes a los que sirves, manejar consultas más complejas e integrarse profundamente con los sistemas de backend de tu sitio web.

### ¿Hay algún plugin de chat gratuito para sitios web?

Sí, existen muchos plugins de chat para sitios web. E-SMART360 AI Website Chatbot es uno de los más avanzados, con memoria contextual que puede recordar el contexto de la conversación.

### ¿Cómo ayuda un plugin de chat en vivo a un negocio de comercio electrónico?

Es muy beneficioso tener un plugin de chat en vivo en el sitio web que los usuarios puedan usar para obtener información sobre productos y servicios en un sitio web de comercio electrónico.

### ¿Cuál es el mejor plugin de chat para sitios web?

E-SMART360 tiene uno de los mejores plugins de chat para sitios web, que puede incluir menú persistente y respuesta con IA.

### ¿Cómo puedo implementar el plugin de chat de Facebook en mi sitio web?

Desde la configuración del Administrador de Bots de Facebook de E-SMART360, puedes crear el plugin de chat de Facebook para tu sitio web.

### ¿Puedo configurar un plugin de chat de WhatsApp para mi sitio web?

Sí, puedes configurar un plugin de chat de WhatsApp para tu sitio web. Primero debes conectar tu número de WhatsApp Business y, desde el administrador de bots de WhatsApp, crear un widget de chat. Copia el código de inserción y pégalo en el código de tu sitio web.

### ¿Podré enviar mensajes a través del chat en vivo en el sitio web de forma gratuita?

Sí, puedes enviar y recibir mensajes a través del chat en vivo en el sitio web de forma gratuita desde el Administrador de Bots de WebChat de E-SMART360 > sección de chat en vivo.

### ¿Puedo usar este chatbot en sitios web que no son WordPress?

Sí, puedes integrar el chatbot con sitios web personalizados y otras plataformas usando el código JavaScript de inserción proporcionado.

### ¿Necesito Elementor para agregar el chatbot a mi sitio?

No, Elementor es solo una forma de agregar el chatbot. Puedes pegar el código JS de inserción en cualquier constructor de páginas o directamente en el HTML de tu sitio.

### ¿Puedo personalizar la apariencia del chatbot?

Sí, puedes modificar el color del tema, el fondo de las burbujas de chat, el fondo del chatbox y el logotipo de la marca en el menú de configuración de WebChat.

### ¿Qué hago si el chatbot no aparece en mi sitio web?

Verifica lo siguiente:
  - Asegúrate de que el código de inserción esté correctamente pegado.
  - Confirma que JavaScript esté habilitado en tu sitio.
  - Verifica que el chatbot esté activado en la configuración de E-SMART360.
  - Limpia la caché de tu sitio web y vuelve a intentarlo.

## Recursos relacionados

- [Cómo importar páginas de Facebook y cuentas de Instagram en E-SMART360](/recursos/importar-paginas-facebook-instagram)
- [Gestor de postback de notificaciones recurrentes (RCN) en Messenger con E-SMART360](/recursos/rcn-postback-messenger)
- [Guía de listas de transmisión de WhatsApp para mensajería masiva](/recursos/whatsapp-broadcasting-list)
- [Cómo configurar un chatbot de ventas con secuencia automatizada](/recursos/configurar-chatbot-secuencia-ventas)
- [Guía de límites de mensajería de WhatsApp Business](/recursos/límites-mensajería-whatsapp)

### Video tutorial

Para un tutorial detallado en video sobre cómo configurar el menú persistente en Facebook Messenger, visita nuestro canal de YouTube oficial.

## Ejemplo completo: Chatbot de ecommerce con menú persistente optimizado

A continuación, te mostramos un ejemplo completo de cómo configurar un chatbot para una tienda online con menú persistente optimizado:

### Configuración del menú persistente en Messenger

```
Opción 1: Ver Novedades → URL: https://tutienda.com/novedades
Opción 2: Buscar Producto → Postback: BUSCAR_PRODUCTO
Opción 3: Seguimiento Pedido → Postback: SEGUIMIENTO_PEDIDO
Opción 4: Contactar Soporte → Postback: CONTACTAR_SOPORTE
Opción 5: Promociones → URL: https://tutienda.com/ofertas
```

### Configuración del menú persistente en WebChat

```
Opción 1: Catálogo Completo → URL: https://tutienda.com/catalogo
Opción 2: Ayuda con mi Pedido → Postback: AYUDA_PEDIDO
Opción 3: Hablar con Agente → Postback: HABLAR_AGENTE
Opción 4: Preguntas Frecuentes → Postback: FAQ
```

### Flujo de conversación automatizada

1. El usuario hace clic en "Buscar Producto" del menú persistente.
2. El chatbot responde: "¡Claro! ¿Qué tipo de producto buscas hoy?"
3. El usuario escribe "Zapatos deportivos".
4. El chatbot usa el flujo de entrada de usuario para preguntar: "¿Tienes alguna marca o rango de precio preferido?"
5. El usuario responde y el chatbot muestra recomendaciones personalizadas.
6. Si el usuario está interesado, el botón CTA "Ver producto" lo dirige a la ficha del producto.


> **Resultado esperado:** Este flujo combinado (menú persistente + botones CTA + flujo de entrada) ha demostrado aumentar las conversiones hasta en un 40% en tiendas online, reducir el tiempo de atención en un 60% y mejorar la satisfacción del cliente en un 35%.

## Configuración multilingüe del menú persistente

Una de las características más potentes del menú persistente es la capacidad de ofrecer diferentes menús según el idioma del usuario. Aquí te mostramos cómo configurarlo:


### Crea el menú en el idioma predeterminado

Configura primero el menú con locale "default" (generalmente inglés o el idioma principal de tu negocio).
  
### Agrega menús para otros idiomas

Desde el Administrador de Bots, crea menús persistentes adicionales usando diferentes opciones de **Locale**: español, francés, portugués, alemán, etc.
  
### Configura la detección de idioma en el bot

Asegúrate de que tu chatbot tenga un flujo inicial que detecte o pregunte el idioma preferido del usuario. Puedes usar un botón CTA al inicio: "Selecciona tu idioma / Select your language".
  
### Asigna el menú según el idioma

El bot cargará automáticamente el menú persistente correspondiente al idioma que el usuario haya seleccionado al inicio de la conversación.
  
### Ejemplo de menú multilingüe



### Español

- Ver productos
    - Soporte
    - Ubicación
    - Promociones
  
### English

- View Products
    - Support
    - Location
    - Promotions
  
### Français

- Voir les produits
    - Support
    - Emplacement
    - Promotions
  
## Solución de problemas comunes


### El menú persistente no aparece en Messenger

**Causas posibles:**
  - El botón "Get Started" no está activado (es requisito obligatorio).
  - El menú se creó pero no se publicó (falta hacer clic en Options > Publish).
  - La página de Facebook no está correctamente vinculada a E-SMART360.
  - Cambios recientes que aún no se han propagado en los servidores de Meta (espera 5-10 minutos).
  
  **Soluciones:**
  1. Verifica que el botón "Get Started" esté activado en la configuración del bot.
  2. Confirma que hayas hecho clic en "Options" y luego en "Publish" después de crear el menú.
  3. Reconecta la página de Facebook desde el panel de E-SMART360.
  4. Espera unos minutos y vuelve a probar.

### El chatbot web no aparece en mi sitio

**Causas posibles:**
  - El código JS de inserción no está correctamente pegado en el sitio.
  - JavaScript está deshabilitado en el navegador o el sitio.
  - El chatbot está desactivado en la configuración de E-SMART360.
  - La caché del sitio web está mostrando una versión anterior.
  - Algún plugin de seguridad está bloqueando la carga del script.
  
  **Soluciones:**
  1. Verifica que el código de inserción esté completo y correcto.
  2. Confirma que JavaScript esté habilitado.
  3. Activa el chatbot en la configuración de E-SMART360.
  4. Limpia la caché del sitio web y del navegador.
  5. Desactiva temporalmente los plugins de seguridad para identificar si están bloqueando el script.

### El menú persistente del WebChat no se muestra

**Causas posibles:**
  - El menú no se guardó correctamente después de crearlo.
  - La entrada de usuario está deshabilitada pero no se configuraron opciones en el menú.
  - El widget de chat no está conectado a ninguna página web.
  
  **Soluciones:**
  1. Ve al Administrador de WebChat y verifica que el menú persistente esté guardado.
  2. Asegúrate de tener al menos una opción configurada en el menú.
  3. Conecta el widget de chat a una página web desde la configuración.
  4. Prueba en una ventana de incógnito para evitar problemas de caché.

### Los botones CTA no funcionan correctamente

**Causas posibles:**
  - El texto del botón excede el límite de caracteres permitido.
  - El bloque interactivo no está cerrado con un bloque de texto.
  - La acción configurada no tiene un bloque de destino válido.
  
  **Soluciones:**
  1. Acorta el texto del botón para que cumpla con el límite de caracteres.
  2. Agrega un bloque de texto después del bloque interactivo.
  3. Verifica que cada acción de botón tenga un destino configurado correctamente.
  4. Prueba el flujo desde el panel de pruebas del Administrador de Bots.

## Consejos avanzados para optimizar tu menú persistente

1. **Menos es más:** Limita el menú a 5-7 opciones principales para no abrumar al usuario.
2. **Prioriza las acciones más comunes:** Analiza los mensajes que recibes con más frecuencia conviértelos en opciones del menú.
3. **Actualiza según temporadas:** Cambia las opciones del menú para reflejar promociones de temporada, eventos especiales o lanzamientos de productos.
4. **Prueba A/B:** Crea diferentes versiones del menú y mide cuál genera más clics.
5. **Combina menú persistente con respuestas rápidas:** Usa respuestas rápidas contextuales dentro de la conversación complementarias al menú persistente global.
6. **Monitorea el rendimiento:** Usa las analíticas de E-SMART360 para ver qué opciones del menú tienen más clics y ajusta según los datos.
7. **Incluye siempre una opción de ayuda/soporte:** Asegúrate de que los usuarios puedan contactar a un agente humano si lo necesitan.

## Conclusión final

El menú persistente no es solo una característica adicional, sino una herramienta fundamental para optimizar la experiencia de usuario tanto en Facebook Messenger como en el chat web de tu sitio. Su implementación es sencilla, los beneficios son inmediatos y las posibilidades de personalización son amplias.

Al dominar la configuración del menú persistente en ambas plataformas, combinado con botones CTA interactivos y flujos de entrada de usuario, puedes crear una experiencia de atención al cliente completa, profesional y omnicanal que impulse el crecimiento de tu negocio.

¿Listo para empezar? Accede a tu panel de E-SMART360 y configura tu primer menú persistente hoy mismo.
