---
title: "Configuración de Embedded Signup para Conectar WhatsApp Sin Catálogo"
description: "Aprende a configurar la aplicación de Facebook Login for Business con Embedded Signup para conectar WhatsApp Cloud API sin necesidad de un catálogo de productos. Guía paso a paso para desarrolladores y agencias whitelabel."
section: "ecommerce"
order: 176
audience: ["cliente"]
platform: ["chatbots"]
useCase: ["ecommerce"]
source: "fulldoc"
sourceSlug: "configuracion-app-embedded-signup-conectar-whatsapp-sin-catalogo-esmart360"
canonicalGroup: "configuracion-de-embedded-signup-para-conectar-whatsapp-sin-catalogo"
tags: ["ecommerce"]
staging: true
---
> El registro integrado de WhatsApp (Embedded Signup) ofrece dos formas de conectar WhatsApp a E-SMART360: con catálogo de productos o sin catálogo. En esta guía nos enfocamos en la configuración sin catálogo, ideal para negocios que no venden productos físicos o que prefieren empezar con una configuración más simple.

## ¿Qué es Embedded Signup?

Embedded Signup es el sistema de registro integrado que permite a los usuarios conectar su número de WhatsApp Business API directamente desde el panel de E-SMART360 mediante una ventana emergente autorizada por Meta. Este flujo guía al usuario a través de:

- La autenticación con su cuenta de Facebook
- La selección o creación de un Business Manager
- La creación de una cuenta de WhatsApp Business (WABA)
- El registro y verificación de su número de teléfono
- La selección opcional de un catálogo de productos


> **¿Cuándo elegir la opción sin catálogo?** Si tu negocio ofrece servicios, cursos, consultoría, o si vendes productos que no necesitan un catálogo formal en Facebook Commerce Manager, la opción sin catálogo es la más rápida y sencilla. Puedes agregar un catálogo más adelante si lo necesitas.

---

## Requisitos Previos

Antes de comenzar con la configuración de Embedded Signup, asegúrate de tener lo siguiente:


### Cuenta de Desarrollador de Facebook

Necesitas acceso a [developers.facebook.com](https://developers.facebook.com) con una cuenta que tenga permisos de administrador sobre la aplicación que vas a configurar.
  
### Aplicación de Facebook Creada

Debes haber creado una aplicación en Facebook Developers. Esta aplicación será la que utilice el flujo de Embedded Signup para conectar WhatsApp.
  
### Facebook Login for Business Configurado

La aplicación debe tener el producto "Facebook Login for Business" agregado. Sin este producto, no podrás crear la configuración de Embedded Signup.
  
### Cuenta de Business Manager

Aunque no es obligatorio tenerla antes de la configuración, el usuario final necesitará una cuenta de Business Manager de Facebook para completar el registro. Si no tiene una, el flujo de Embedded Signup le permitirá crear una.
  
### Panel de E-SMART360

Tu cuenta en E-SMART360 debe estar activa para poder acceder a la sección de conexión de WhatsApp y utilizar el Embedded Signup.
  

> **Importante:** La configuración que vas a crear es para que los USUARIOS FINALES puedan conectar sus números de WhatsApp. Si eres una agencia whitelabel, necesitarás repetir este proceso de configuración en la aplicación de Facebook que uses para tus clientes.

---

## Paso 1: Acceder a Facebook Developers

Primero, dirígete a [developers.facebook.com](https://developers.facebook.com). Inicia sesión con tu cuenta de Facebook que tenga permisos de administrador sobre la aplicación que vas a configurar.


> **Nota sobre permisos:** Si no ves la opción de crear o editar configuraciones, es posible que no tengas los permisos adecuados. Necesitas ser administrador o tener un rol de desarrollo en la aplicación.

Una vez dentro del panel de desarrolladores:

1. Haz clic en el menú de **"Apps"** (Mis aplicaciones) en la esquina superior derecha.
2. Selecciona la aplicación que utilizarás para Embedded Signup.
3. Si no tienes una aplicación creada, haz clic en "Crear aplicación" y sigue el asistente.

## Paso 2: Navegar a Facebook Login for Business

Dentro del panel de tu aplicación:

1. En el menú lateral izquierdo, busca la sección de productos.
2. Localiza **"Facebook Login for Business"** y haz clic para expandirlo.
3. Si no ves este producto, deberás agregarlo: ve a "Productos" → "Agregar producto" y busca "Facebook Login for Business".


> **Diferencia clave:** "Facebook Login for Business" es diferente de "Facebook Login" estándar. El primero está diseñado específicamente para flujos de autenticación empresarial como Embedded Signup, mientras que el segundo es para inicios de sesión de usuarios en aplicaciones convencionales. Asegúrate de estar usando el correcto.

## Paso 3: Acceder a Configuraciones

Una vez en "Facebook Login for Business":

1. Haz clic en **"Configurations"** (Configuraciones).
2. Verás una lista de configuraciones existentes (si las hay) o un panel vacío.
3. Haz clic en el botón **"Create Configuration"** (Crear Configuración).

![Configuración de Embedded Signup](<Base64-Image-Removed>)

## Paso 4: Crear la Configuración de Embedded Signup

En el formulario de creación de configuración, completa los siguientes campos:


### Nombre de la Configuración

Proporciona un nombre descriptivo para tu configuración. Por ejemplo: "Embedded Signup Clientes" o "Conexión WhatsApp sin Catálogo". Este nombre es solo para referencia interna.
  
### Variación de Inicio de Sesión (Login Variation)

Selecciona **"WhatsApp Embedded Signup"** como la variación de inicio de sesión. Esta opción configura el flujo específicamente para la conexión de WhatsApp Business API.
  
### Token de Acceso (Access Token)

En el campo de token de acceso, selecciona **"Never"** (Nunca). Esto significa que no se generará un token de acceso automático para esta configuración. E-SMART360 maneja la autenticación de forma independiente.
  
### Selección de Activo (Asset)

En la pestaña de Asset, mantén seleccionada la opción **"WhatsApp account"** (Cuenta de WhatsApp). Esto permite que el flujo de Embedded Signup gestione la creación y conexión de cuentas de WhatsApp Business.
  
### Permisos

En la sección de permisos, selecciona **"whatsapp_business_management"** y **"whatsapp_business_messaging"**. Estos son los permisos mínimos necesarios para que el usuario pueda conectar y gestionar su número de WhatsApp.
  
### Crear Configuración

Haz clic en el botón **"Create"** (Crear) para finalizar. La configuración se generará y aparecerá en tu lista de configuraciones.
  


### Permisos Explicados

**whatsapp_business_management:** Permite gestionar cuentas de WhatsApp Business, incluyendo la creación, actualización y eliminación de números de teléfono y perfiles de negocio.
    
    **whatsapp_business_messaging:** Permite enviar y recibir mensajes a través de la WhatsApp Cloud API. Sin este permiso, el número no podrá enviar ni recibir mensajes.
  
### Permisos Adicionales

Si tu aplicación necesita funcionalidades extra, puedes agregar:
    - **whatsapp_business_phone_numbers:** Para gestionar múltiples números
    - **catalog_management:** Si en el futuro planeas agregar un catálogo
    - **business_management:** Para acceder a información del Business Manager
  
## Paso 5: Copiar el ID de Configuración

Una vez creada la configuración, verás que se ha generado un **ID de Configuración** único. Este ID es el identificador que vincula tu aplicación de Facebook con el flujo de Embedded Signup.


> **¿Qué hacer con el ID de Configuración?** Copia este ID y pégalo en la configuración de **WhatsApp API** en E-SMART360. Dependiendo de tu tipo de cuenta:
  
  - **Usuarios regulares:** Ve a la configuración de WhatsApp API y busca el campo "Configuration ID".
  - **Agencias whitelabel:** Deberás configurarlo en los ajustes de whitelabel para que todos tus clientes usen esta configuración.

![ID de Configuración](<Base64-Image-Removed>)

Una vez que hayas pegado el ID de configuración, el sistema estará listo. La integración entre tu aplicación de Facebook y E-SMART360 ahora es funcional.

## Paso 6: Verificar la Conexión

Para asegurarte de que todo funciona correctamente:

1. Abre el panel de E-SMART360 en una ventana de incógnito o con un usuario de prueba.
2. Ve a la sección **"Conectar Cuenta"** en el menú de WhatsApp.
3. Haz clic en **"Connect WhatsApp"** .
4. Deberías ver el flujo de Embedded Signup que te permite conectar un número con o sin catálogo.


> **Prueba recomendada:** Realiza una prueba completa con un número de teléfono nuevo que no esté registrado en WhatsApp. Esto garantizará que el flujo completo —desde la autenticación hasta la verificación del número— funciona sin problemas.

---

## Experiencia del Usuario Final

Una vez que has configurado el Embedded Signup, tus usuarios finales (o clientes si eres agencia) verán opciones para conectar WhatsApp con o sin catálogo. Veamos cómo se ve desde su perspectiva:



### Conexión Sin Catálogo

El usuario simplemente sigue el flujo de Embedded Signup que configuraste. Podrá:
    
    1. Iniciar sesión con Facebook
    2. Seleccionar o crear un Business Manager
    3. Elegir "Crear nueva WABA" o seleccionar una existente
    4. Ingresar su número de teléfono
    5. Verificar con OTP
    6. ¡Listo! El número queda conectado sin necesidad de catálogo.
  
### Conexión Con Catálogo

Si el usuario opta por la conexión con catálogo, verá pasos adicionales:
    
    1. Los mismos pasos iniciales que la opción sin catálogo
    2. Un paso extra para seleccionar o crear un catálogo en Facebook Commerce Manager
    3. Sincronización del catálogo con WhatsApp
    4. Verificación del número y activación completa
    
    Esta opción es recomendada para tiendas y e-commerce.
  
> **Ventaja de la opción sin catálogo:** Es más rápida y tiene menos fricción. El usuario no necesita tener un catálogo configurado en Facebook Commerce Manager, lo que reduce la barrera de entrada. Muchos negocios de servicios —como consultorías, clínicas, escuelas o agencias— no necesitan un catálogo de productos para empezar a usar WhatsApp Business API.

---

## Configuración para Agencias Whitelabel

Si eres parte de una agencia whitelabel que usa E-SMART360, la configuración de Embedded Signup es esencial para que tus clientes puedan conectar sus propios números de WhatsApp sin intervención técnica.


### Crea tu Aplicación en Facebook Developers

Crea una aplicación de tipo "Business" en Facebook Developers. Asegúrate de que el nombre de la aplicación sea reconocible para tus clientes.
  
### Configura Facebook Login for Business

Agrega el producto "Facebook Login for Business" a tu aplicación. Sin este paso, no podrás crear la configuración de Embedded Signup.
  
### Crea la Configuración de Embedded Signup

Sigue los pasos del 1 al 5 descritos anteriormente para crear la configuración con los permisos "whatsapp_business_management" y "whatsapp_business_messaging".
  
### Copia el ID de Configuración

Copia el ID de configuración generado. Este ID es único para tu aplicación.
  
### Configúralo en tu Panel Whitelabel

En E-SMART360, ve a la configuración de whitelabel y pega el ID de configuración en el campo correspondiente. Todos tus clientes usarán esta configuración automáticamente.
  

> **Importante para agencias:** Cada aplicación de Facebook tiene su propio ID de configuración. Si gestionas múltiples aplicaciones (por ejemplo, para diferentes mercados o tipos de clientes), deberás crear una configuración de Embedded Signup para cada una y configurarlas por separado en E-SMART360.

---

## Solución de Problemas Comunes


### La opción de Embedded Signup no aparece en mi aplicación

Verifica que hayas agregado el producto "Facebook Login for Business" a tu aplicación. También asegúrate de que tu aplicación sea de tipo "Business" y no de tipo "Consumer". Si el problema persiste, revisa que tu cuenta tenga permisos de administrador sobre la aplicación.

### El usuario ve un error al intentar conectar su número

Este error suele ocurrir cuando:
  
  1. El ID de configuración no está correctamente pegado en E-SMART360
  2. Los permisos seleccionados no incluyen "whatsapp_business_management" y "whatsapp_business_messaging"
  3. La aplicación de Facebook no está correctamente configurada o está en modo de desarrollo
  
  Revisa cada uno de estos puntos y vuelve a intentarlo.

### El usuario no tiene Business Manager de Facebook

No hay problema. El flujo de Embedded Signup permite al usuario crear un nuevo Business Manager durante el proceso de registro. Solo necesita su cuenta de Facebook personal para iniciar el proceso.

### ¿Puedo cambiar de sin catálogo a con catálogo después?

Sí, completamente. WhatsApp Business API te permite agregar un catálogo en cualquier momento. Simplemente ve a Facebook Commerce Manager, crea o selecciona un catálogo, y vincúlalo a tu WABA. No es necesario reconectar el número ni crear una nueva configuración de Embedded Signup.

### El ID de configuración no se guarda en E-SMART360

Asegúrate de que el ID esté completo y sin espacios adicionales. Copia exactamente el ID que aparece en Facebook Developers, incluyendo todos los caracteres. Si el problema persiste, contacta al soporte de E-SMART360.

### ¿Qué hago si el botón 'Create Configuration' no funciona?

Prueba los siguientes pasos:
  
  1. Refresca la página de Facebook Developers
  2. Cierra sesión y vuelve a iniciar
  3. Usa una ventana de incógnito
  4. Verifica que tu aplicación tenga todos los productos requeridos instalados
  5. Si nada funciona, contacta al soporte de Meta

---

## Mejores Prácticas



### Nombres Claros

Usa nombres descriptivos para tus configuraciones de Embedded Signup. Si tienes múltiples configuraciones (por ejemplo, una para clientes con catálogo y otra sin catálogo), los nombres claros te ayudarán a gestionarlas.
  
### Prueba Siempre Antes de Publicar

Antes de lanzar tu configuración a producción, prueba el flujo completo con un usuario de prueba. Verifica que los permisos sean los correctos y que el ID de configuración funcione correctamente.
  
### Documenta tu Configuración

Guarda el ID de configuración, la fecha de creación y el propósito de cada configuración en un documento interno. Esto facilitará la gestión futura y la resolución de problemas.
  
### Mantén tus Aplicaciones Actualizadas

Revisa periódicamente que tu aplicación de Facebook no tenga problemas de revisión o cambios en los permisos. Meta actualiza sus políticas regularmente, y es importante mantener tu aplicación al día.
  
---

## Errores Comunes al Configurar Embedded Signup y Cómo Solucionarlos

Durante la configuración de Embedded Signup, pueden surgir varios errores. Aquí tienes los más comunes y sus soluciones:


### Error: 'App Not Configured for Facebook Login'

Este error aparece cuando Facebook Login no está correctamente configurado en tu aplicación.
  
  **Solución:** Ve a la sección "Facebook Login" en tu aplicación de Facebook Developers y asegúrate de que hayas configurado correctamente el URI de redireccionamiento de OAuth. Para Embedded Signup, el URI debe incluir la URL de tu instancia de E-SMART360. También verifica que el modo en vivo esté activado para la aplicación.

### Error: 'Invalid Configuration ID'

Este error ocurre cuando el ID de configuración que pegaste en E-SMART360 no es válido o no corresponde a la aplicación correcta.
  
  **Solución:** Vuelve a Facebook Developers, navega a Facebook Login for Business → Configurations, y copia exactamente el ID de configuración correcto. Asegúrate de no incluir espacios adicionales. Si el error persiste, elimina la configuración y créala de nuevo.

### Error: 'Permissions Not Granted'

El usuario ve este error cuando la configuración no incluye los permisos necesarios.
  
  **Solución:** Edita la configuración en Facebook Developers y verifica que los permisos "whatsapp_business_management" y "whatsapp_business_messaging" estén seleccionados. Si modificas los permisos, guarda los cambios y actualiza el ID de configuración en E-SMART360.

### Error: 'Phone Number Already Registered'

El usuario intenta conectar un número que ya está registrado en WhatsApp o WhatsApp Business App.
  
  **Solución:** El usuario debe eliminar el número de WhatsApp o WhatsApp Business App antes de conectarlo a la API. Esto implica:
  1. Abrir WhatsApp en su teléfono
  2. Ir a Configuración → Cuenta → Eliminar mi cuenta
  3. Confirmar la eliminación (esto borrará los chats a menos que tenga copia de seguridad)
  4. Esperar 24 horas antes de intentar la conexión

### Error: 'Maximum Number of WABAs Reached'

Este error aparece cuando el Business Manager del usuario ya tiene el máximo de cuentas de WhatsApp Business permitidas.
  
  **Solución:** El usuario puede eliminar una WABA existente o crear un nuevo Business Manager. Cada Business Manager permite hasta 20 WABAs. Para crear un nuevo Business Manager, el usuario puede hacerlo durante el flujo de Embedded Signup seleccionando "Crear nuevo Business Manager".

### La Ventana Emergente se Cierra Inmediatamente

El usuario hace clic en "Connect WhatsApp" pero la ventana se abre y se cierra sin mostrar nada.
  
  **Solución:** Este problema suele ser por bloqueadores de ventanas emergentes (popup blockers) en el navegador. El usuario debe:
  1. Permitir ventanas emergentes para el dominio de E-SMART360
  2. Deshabilitar temporalmente extensiones de bloqueo de anuncios
  3. Intentar con otro navegador (Chrome y Firefox son los más compatibles)

---

## Entendiendo la Relación entre Business Manager, WABA y Números de Teléfono

Para trabajar correctamente con Embedded Signup, es importante entender la jerarquía de cuentas en WhatsApp Business API:


> **Jerarquía de cuentas:**
  
  **Facebook Business Manager** → Contiene una o varias **WhatsApp Business Accounts (WABA)** → Cada WABA contiene uno o varios **números de teléfono** → Cada número tiene su propio **perfil de negocio** y **configuración de mensajería**
  
  Cada nivel de esta jerarquía tiene sus propios permisos y configuraciones.

### Facebook Business Manager

El Business Manager es la capa superior que gestiona todas las propiedades de negocio de Meta: páginas de Facebook, cuentas publicitarias, catálogos, y cuentas de WhatsApp. Cada Business Manager tiene:

- **Un nombre legal de negocio:** Debe coincidir con la documentación oficial de la empresa
- **Un propietario:** La persona que creó el Business Manager
- **Administradores:** Pueden gestionar todas las propiedades
- **Empleados:** Tienen acceso limitado según los permisos asignados

### WhatsApp Business Account (WABA)

La WABA es la cuenta que contiene la configuración de WhatsApp Business API. Cada WABA incluye:

- **Hasta 20 números de teléfono** (dependiendo del límite de tu Business Manager)
- **La configuración de mensajería:** Plantillas de mensajes, webhooks, calidad de cuenta
- **El límite de mensajería:** Determina cuántos mensajes puedes enviar por día
- **La calificación de calidad:** Basada en las interacciones con los usuarios



### Business Manager vs WABA

**Business Manager** es la cuenta corporativa que contiene todo. **WABA** es una subcuenta específica para WhatsApp. Una empresa puede tener múltiples WABAs si necesita gestionar diferentes marcas o departamentos de forma independiente.
    
    Ejemplo: Una empresa con dos marcas (Marca A y Marca B) puede tener:
    - 1 Business Manager (Empresa XYZ)
    - 2 WABAs (una para Marca A, otra para Marca B)
    - Varios números en cada WABA
  
### Límites de la WABA

- **Máximo de WABAs por Business Manager:** 20
    - **Máximo de números por WABA:** 20 (depende del límite de mensajería)
    - **Máximo de plantillas de mensaje:** Ilimitado (sujeto a aprobación)
    - **Límite de mensajería inicial:** 250 conversaciones/día
    - **Límite máximo (Tier 4):** 100,000 conversaciones/día
  
---

## Selección del Tipo de Número de Teléfono

No todos los números de teléfono son adecuados para WhatsApp Business API. Al configurar Embedded Signup, el usuario debe considerar lo siguiente:



### Números Compatibles

- **Números móviles:** Funcionan perfectamente, reciben OTP por SMS
    - **Números fijos:** Funcionan si pueden recibir llamadas (verificación por llamada de voz)
    - **Números virtuales:** Algunos servicios de números virtuales funcionan, pero no todos
    - **Números internacionales:** WhatsApp Business API soporta números de la mayoría de países
  
### Números NO Compatibles

- **Números de VoIP gratuitos:** Generalmente no son aceptados
    - **Números de Google Voice:** No compatibles con la API
    - **Números de WhatsApp existentes:** Deben eliminarse primero de WhatsApp App
    - **Números premium o de tarificación especial:** No compatibles
    - **Números de extensión corta:** Generalmente no funcionan
  
> **Recomendación:** Usa un número de teléfono móvil dedicado para WhatsApp Business API. No uses tu número personal, ya que una vez conectado a la API, no podrás usarlo en la aplicación de WhatsApp normal. Un SIM adicional para negocios es la mejor opción.

---

## Configuración de la Información del Negocio durante el Embedded Signup

Durante el flujo de Embedded Signup, el usuario debe proporcionar información sobre su negocio. Aquí están los detalles de cada campo:


### Nombre de la Cuenta de Negocio (Business Account Name)

Este es el nombre interno que se usará para identificar la WABA. No es visible para los clientes. Ejemplos: "Soporte Técnico", "Ventas Online 2024", "Consultoría Principal".
    
    **Recomendación:** Usa un nombre descriptivo que te ayude a identificar el propósito de esta cuenta, especialmente si tienes múltiples WABAs.
  
### Nombre de Visualización (Display Name)

Este nombre es visible para los clientes en WhatsApp. Debe cumplir con las políticas de Meta:
    
    - No puede contener palabras genéricas como "Soporte" o "Atención al Cliente" sin incluir tu marca
    - Debe incluir el nombre de tu empresa para aprobación
    - Si usas un nombre de marca, debe ir seguido de "by [Nombre de Empresa]"
    
    **Ejemplo correcto:** "SuperTech by XYZ Pvt Ltd"
    **Ejemplo incorrecto:** "Soporte al Cliente" (demasiado genérico)
  
### Categoría del Negocio

Selecciona la categoría que mejor describa tu negocio. Esto ayuda a WhatsApp a entender el tipo de comunicación que enviarás. Las categorías incluyen:
    
    - Automotriz
    - Belleza y Cuidado Personal
    - Educación
    - Entretenimiento
    - Finanzas
    - Comida y Bebidas
    - Salud y Bienestar
    - Inmobiliaria
    - Tecnología
    - Viajes y Turismo
    - Y muchas más...
  
### Sitio Web (Opcional)

Proporciona la URL del sitio web de tu negocio. Aunque es opcional, incluirla aumenta la confianza del cliente y es necesaria si planeas solicitar la verificación de marca (Green Tick).
  

> **Atención con el nombre de visualización:** Meta revisa todos los nombres de visualización antes de aprobarlos. Si el nombre es rechazado, el número no podrá enviar mensajes hasta que se apruebe uno nuevo. El proceso de aprobación puede tomar de 1 a 5 días hábiles. Para evitar retrasos, asegúrate de que el nombre incluya el nombre legal de tu empresa.

---

## Entendiendo el Proceso de Verificación del Número

La verificación del número de teléfono es un paso crítico en el flujo de Embedded Signup. Aquí te explicamos cómo funciona:

### Métodos de Verificación

El sistema ofrece dos métodos para verificar el número:

1. **Verificación por SMS:** El usuario recibe un código de 6 dígitos (OTP) por mensaje de texto. Es el método más rápido y recomendado.
2. **Verificación por llamada de voz:** El usuario recibe una llamada automatizada que lee el código de verificación. Útil cuando el número no puede recibir SMS.


> **Dato importante:** Una vez que el número se verifica y se conecta a la WABA, ese número deja de funcionar en la aplicación normal de WhatsApp. Todos los mensajes y llamadas entrantes se gestionarán a través de la WhatsApp Cloud API. Si necesitas usar el mismo número en un teléfono, deberás usar la aplicación de WhatsApp Business API (solo lectura) o gestionar todo desde el panel de E-SMART360.

### Después de la Verificación

Una vez verificado el número, el flujo de Embedded Signup solicita al usuario que revise y acepte los permisos que la aplicación de E-SMART360 necesita para gestionar su cuenta de WhatsApp. Estos permisos incluyen:

- **Leer y gestionar conversaciones:** Acceso a los mensajes entrantes y salientes
- **Enviar mensajes:** Capacidad de enviar mensajes en nombre del negocio
- **Gestionar plantillas:** Crear y gestionar plantillas de mensajes
- **Gestionar webhooks:** Configurar notificaciones de eventos
- **Ver información de la cuenta:** Acceso a métricas y configuración

---

## Verificación del Negocio en Meta

Después de que el usuario conecta su número a través de Embedded Signup, el siguiente paso recomendado es verificar su negocio con Meta. La verificación empresarial es necesaria para:

- Solicitar el Green Tick de WhatsApp (verificación oficial)
- Aumentar los límites de mensajería
- Acceder a funcionalidades avanzadas
- Aumentar la confianza de los clientes


### Accede al WhatsApp Manager

Desde el panel de E-SMART360, ve a "Conectar Cuenta" → "Manage" para abrir el WhatsApp Manager de Meta. Aquí encontrarás todas las opciones de configuración avanzada de tu cuenta.
  
### Inicia la Verificación

En el WhatsApp Manager, busca la opción de "Business Verification" o "Verificación de Negocio". Haz clic en "Start Verification" para comenzar el proceso.
  
### Proporciona Documentación

Dependiendo del país y tipo de negocio, Meta solicitará documentos como:
    - Registro mercantil o acta constitutiva
    - Comprobante de domicilio fiscal
    - Identificación oficial del representante legal
    - Licencia o permiso de operación (para negocios regulados)
  
### Espera la Revisión

Meta revisa la documentación y verifica la identidad del negocio. Este proceso puede tomar de 1 a 10 días hábiles. Recibirás una notificación por correo electrónico cuando la verificación esté completa.
  

> **Consejo:** Prepara toda la documentación antes de iniciar el proceso de verificación. La mayoría de los rechazos ocurren por documentos incompletos o que no coinciden exactamente con la información registrada en el Business Manager. Asegúrate de que el nombre del negocio sea idéntico al de los documentos oficiales.

---

## Configuración del Método de Pago

Aunque la configuración de Embedded Signup no incluye directamente el método de pago, es un paso necesario después de la conexión. WhatsApp Cloud API cobra por cada conversación. Sin un método de pago configurado, los mensajes salientes serán rechazados.


### Accede al WhatsApp Manager

Ve a "Connect Dashboard" en E-SMART360 y haz clic en "Manage" para abrir el WhatsApp Manager de Meta.
  
### Agrega Método de Pago

En el WhatsApp Manager, busca la opción "Add Payment Method" o "Agregar Método de Pago". Meta acepta tarjetas de crédito y débito de Visa, Mastercard, American Express y Discover.
  
### Ingresa los Datos

Proporciona los datos de tu tarjeta: número, fecha de vencimiento, código CVV y dirección de facturación. Meta no cobra por la configuración, solo por las conversaciones iniciadas.
  
### Confirma y Verifica

Confirma los datos de la tarjeta. Recibirás un pequeño cargo de verificación (generalmente menos de $1 USD) que será reembolsado. Refresca la página para asegurarte de que el método de pago esté activo.
  


### Costos de Conversación

WhatsApp cobra por conversación, no por mensaje individual. Los costos varían según:
    
    - **Región del usuario:** El costo es diferente para cada país
    - **Tipo de conversación:** Marketing, utility, service o authentication
    - **Iniciador:** Conversaciones iniciadas por el usuario son más económicas
    
    Los precios se actualizan trimestralmente y están disponibles en la página oficial de WhatsApp Business API.
  
### Facturación

El ciclo de facturación de Meta es mensual. Recibirás una factura detallada con:
    
    - Desglose de conversaciones por tipo y región
    - Créditos gratuitos (si aplican): Las primeras 1,000 conversaciones de servicio al mes son gratuitas
    - Cargos adicionales (si los hay)
    
    Puedes configurar alertas de presupuesto para evitar gastos inesperados.
  
---

## Integración con el Panel de E-SMART360

Una vez que has completado la configuración técnica de Embedded Signup, el flujo para los usuarios finales desde E-SMART360 es el siguiente:


### Acceso al Panel

El usuario inicia sesión en E-SMART360 y navega a la sección de WhatsApp en el menú lateral.
  
### Conexión de Cuenta

Hace clic en "Conectar Cuenta" y luego en "Connect WhatsApp". Se abrirá la ventana de Embedded Signup.
  
### Autenticación

El usuario inicia sesión con su cuenta de Facebook (si no está autenticado) y selecciona o crea su Business Manager.
  
### Creación de WABA

El usuario crea una nueva cuenta de WhatsApp Business o selecciona una existente. Aquí define el nombre de su negocio y el nombre de visualización.
  
### Verificación del Número

Ingresa su número de teléfono, recibe un OTP por SMS o llamada, y lo verifica.
  
### Selección de Catálogo (Opcional)

Si el usuario eligió la opción con catálogo, se le pedirá que seleccione o cree un catálogo. En la opción sin catálogo, este paso se omite.
  
### Conexión Exitosa

El número queda conectado a E-SMART360 y el usuario puede comenzar a enviar mensajes, crear chatbots y gestionar campañas.
  

> **Tip para agencias:** Si ofreces E-SMART360 como servicio whitelabel, puedes crear un video tutorial personalizado para tus clientes mostrando exactamente los pasos que deben seguir. Esto reduce las solicitudes de soporte y mejora la experiencia de onboarding.

---

## Recursos Adicionales

Para complementar esta guía, te recomendamos revisar los siguientes temas relacionados:



### Configuración de la API de Facebook

Si necesitas configurar la aplicación de Facebook para Embedded Signup con catálogo de productos, el proceso es similar pero incluye pasos adicionales para la gestión de catálogos en Facebook Commerce Manager. La configuración base es la misma.
  
### Guía Whitelabel Completa

Para agencias que revenden E-SMART360, la configuración de Embedded Signup es solo el primer paso. También necesitarás configurar el branding personalizado, los dominios y las políticas de uso para tus clientes.
  
---

## Preguntas Frecuentes


### ¿Qué es exactamente Embedded Signup?

Es un flujo de registro integrado proporcionado por Meta que permite a los usuarios conectar su número de WhatsApp Business API directamente desde una aplicación de terceros (como E-SMART360) sin necesidad de salir de la plataforma. Se abre una ventana emergente que guía al usuario a través de todo el proceso de conexión.

### ¿Necesito una cuenta de desarrollador de Facebook para esto?

Sí, necesitas acceso a Facebook Developers para crear la aplicación y configurar el Facebook Login for Business con Embedded Signup. Sin embargo, los usuarios finales solo necesitan una cuenta de Facebook normal para conectar su número a través del flujo que tú configuraste.

### ¿Cuánto tiempo toma configurar Embedded Signup?

La configuración técnica toma aproximadamente 10-15 minutos si ya tienes una aplicación de Facebook creada. Si empiezas desde cero (creando la aplicación, agregando productos y configurando), el proceso completo puede tomar entre 30 y 45 minutos.

### ¿Puedo usar la misma configuración para varios números telefónicos?

Sí, la configuración de Embedded Signup es independiente del número de teléfono. Una vez configurada, cualquier usuario puede conectar su propio número a través del flujo. No hay límite en la cantidad de números que pueden conectarse usando la misma configuración.

### ¿Qué diferencia hay entre Embedded Signup y la conexión manual?

Embedded Signup automatiza todo el proceso de creación de WABA, registro de número y asignación de permisos. La conexión manual requiere que el usuario cree su propia WABA en WhatsApp Manager, configure los webhooks y genere los tokens de acceso. Embedded Signup reduce este proceso de varios pasos a una experiencia guiada de pocos minutos.

### ¿Los usuarios necesitan conocimientos técnicos para conectar su número?

No. La ventaja de Embedded Signup es que los usuarios solo necesitan seguir las instrucciones en pantalla: iniciar sesión con Facebook, ingresar su número de teléfono y verificar el OTP. Todo el trabajo técnico de configuración de la API, permisos y webhooks se maneja automáticamente.

### ¿Puedo tener configuraciones separadas para clientes con y sin catálogo?

Sí, puedes crear múltiples configuraciones de Embedded Signup dentro de la misma aplicación de Facebook. Cada una tendrá su propio ID de configuración. Luego puedes usar diferentes IDs en E-SMART360 según el tipo de cliente.

### ¿Qué pasa si Meta cambia los requisitos de Embedded Signup?

Meta actualiza periódicamente sus políticas y requisitos. Es recomendable revisar la documentación oficial de Facebook Developers al menos una vez al mes para estar al tanto de cualquier cambio. Si hay cambios importantes, E-SMART360 te notificará a través del panel de administración.

---

## Conclusión

La configuración de Embedded Signup para conectar WhatsApp sin catálogo es un proceso sencillo pero crucial para habilitar la conexión de números de WhatsApp Business API a través de E-SMART360. Siguiendo los pasos descritos en esta guía, podrás:

1. Crear la aplicación de Facebook necesaria
2. Configurar Facebook Login for Business
3. Generar el ID de configuración de Embedded Signup
4. Integrarlo con E-SMART360
5. Ofrecer a tus usuarios una experiencia de conexión fluida y sin fricciones


> **¿Listo para comenzar?** Si aún no has configurado tu Embedded Signup, te recomendamos empezar ahora. El proceso toma menos de 30 minutos y una vez configurado, tus usuarios podrán conectar sus números de WhatsApp de forma autónoma, sin necesidad de intervención técnica.
