---
title: "Conectar la App de WhatsApp Business a la Cloud API"
description: "Guía completa para conectar tu cuenta existente de WhatsApp Business App a la Cloud API mediante Embedded Signup. Sincroniza contactos, historial de chat y continúa usando WhatsApp en tu móvil mientras gestionas automatizaciones y marketing con E-SMART360."
section: "integracion"
order: 174
audience: ["developer"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "conectar-whatsapp-business-app-cloud-api-esmart360"
canonicalGroup: "conectar-la-app-de-whatsapp-business-a-la-cloud-api"
tags: ["integracion"]
staging: true
---
import { Callout, Steps, Step, Expandable, Columns, Card, Tabs, Tab, CodeGroup, CodeGroupItem, Update } from '/src/components/mdx';


> **Actualización importante de Meta (2025-06-19)**
> Meta ahora permite conectar números existentes de WhatsApp Business App directamente a la plataforma WhatsApp Business Platform vía Cloud API. Ya no es necesario crear un número nuevo para usar la API. Esta actualización elimina una de las barreras más grandes que enfrentaban las empresas para adoptar la automatización en WhatsApp.

## Introducción

En el panorama digital actual, las empresas dependen de WhatsApp Business para interactuar eficientemente con sus clientes. Con más de 2.000 millones de usuarios activos mensuales, WhatsApp se ha convertido en el canal de comunicación preferido tanto para pequeñas empresas como para grandes corporaciones.

Para facilitar esta integración, **E-SMART360** ahora soporta WhatsApp Embedded Signup, permitiendo que las empresas conecten sus cuentas existentes de **WhatsApp Business App** a la plataforma de forma sencilla. Además, E-SMART360 permite aprovechar la **WhatsApp Cloud API** para gestionar tareas de marketing de manera efectiva, **todo mientras continúas usando WhatsApp en tu dispositivo móvil**.

## QR Scan para Conectar WhatsApp

Muchos usuarios se refieren al proceso de conexión como **QR Scan para WhatsApp Connect**, ya que permite una autenticación rápida y la vinculación de tu WhatsApp Business App con E-SMART360. Mientras que los métodos tradicionales implican verificación por número, **escanear un código QR** es una forma intuitiva y rápida de sincronizar tu cuenta. Con E-SMART360, ya sea que estés conectando un número nuevo o una WhatsApp Business App existente, puedes integrarte fácilmente mediante **Embedded Signup y Cloud API de Meta**.


> Anteriormente, las empresas solo podían usar la **WhatsApp Business Platform** con un **número de teléfono nuevo**, lo que significaba que el número no podía vincularse a una WhatsApp App existente. Sin embargo, Meta ahora permite a las empresas **conectar sus números existentes de WhatsApp Business App** a la **WhatsApp Business Platform vía Cloud API**, lo que significa que puedes continuar usando tu **WhatsApp móvil** mientras gestionas la automatización a través de **E-SMART360**.

En esta guía, te explicaremos **ambos métodos** para que puedas elegir el enfoque correcto para tu negocio.

## Entendiendo la Diferencia: WhatsApp Business App vs. WhatsApp Business Platform

### ¿Qué es WhatsApp Business App?

WhatsApp **Business App** es una solución basada en dispositivos móviles diseñada para pequeñas empresas que desean comunicarse con sus clientes. Se instala en smartphones y se utiliza para gestionar consultas comerciales, enviar mensajes y brindar soporte al cliente.

**Características principales de WhatsApp Business App:**
- Perfil empresarial con información de tu negocio (dirección, descripción, sitio web)
- Etiquetas para organizar chats y contactos
- Respuestas rápidas para preguntas frecuentes
- Estadísticas básicas de mensajes
- Catálogo de productos
- Mensajes de ausencia y saludo

### ¿Qué es WhatsApp Business Platform?

WhatsApp **Business Platform** (anteriormente solo disponible para integraciones basadas en API) es una solución más avanzada para empresas que requieren **automatización, escalabilidad e integraciones basadas en API**. Antes, las empresas debían registrar un número de teléfono **nuevo** para usar esta plataforma, lo que significaba que no podía vincularse a una WhatsApp Business App existente.

**Características principales de WhatsApp Business Platform:**
- Mensajería automatizada a gran escala mediante la Cloud API
- Integración con sistemas CRM, ERP y herramientas de marketing
- Chatbots con inteligencia artificial
- Capacidad de gestionar hasta 25 números de teléfono por cuenta
- Límites de mensajería mucho más altos (hasta 250.000 mensajes por día en el nivel más alto)
- Mensajes plantilla preaprobados para notificaciones proactivas


> Meta ha introducido una actualización revolucionaria. Las empresas ahora pueden conectar sus **números existentes de WhatsApp Business App** a la **WhatsApp Business Platform vía Cloud API**. Esto significa que las empresas pueden usar:
- Un **número de teléfono nuevo** para la **WhatsApp Business Platform** (solo API)
- Un **número existente de WhatsApp Business App** en la **Business Platform**
- El **mismo número de WhatsApp Business App** tanto en un **dispositivo móvil** como en **E-SMART360** para una gestión fluida y sincronizada

## ¿Qué es WhatsApp Embedded Signup?

WhatsApp **Embedded Signup** es un proceso de incorporación simplificado proporcionado por Meta que permite a las empresas **conectar su WhatsApp Business App existente** directamente a la API de WhatsApp Business sin necesidad de aprobaciones de terceros ni configuraciones manuales extensas.

**Ventajas del Embedded Signup:**
- **Proceso sin fricciones**: No necesitas salir de la plataforma de E-SMART360 para completar la configuración
- **Autenticación rápida**: Usa tus credenciales existentes de Facebook Business Manager
- **Sin aprobaciones externas**: Todo el flujo se maneja dentro del ecosistema autorizado de Meta
- **Vinculación inmediata**: Tu número queda conectado a la Cloud API en cuestión de minutos

Con la **integración de E-SMART360**, puedes:

- Conectar tu **WhatsApp Business App existente** sin crear un número nuevo
- Gestionar chats de clientes, enviar mensajes automatizados y hacer seguimiento de análisis desde E-SMART360
- Continuar usando tu **WhatsApp Business App en tu teléfono móvil** mientras aprovechas las potentes herramientas de marketing de la **Cloud API**


> La coexistencia entre la app móvil y la plataforma API es una de las funcionalidades más solicitadas por las empresas. Ahora puedes tener lo mejor de ambos mundos: la portabilidad de la app móvil y la potencia de automatización de la Cloud API. Tus agentes de ventas pueden seguir usando el teléfono móvil mientras tu equipo de marketing automatiza campañas desde E-SMART360.

## Requisitos Previos

Antes de comenzar, asegúrate de cumplir con lo siguiente:

1. Tener una **WhatsApp Business App existente** (no un número personal de WhatsApp) O un número nuevo listo para la Business Platform
2. Tener **acceso de administrador** a la Cuenta de WhatsApp Business
3. Contar con un **número de teléfono elegible** para incorporación (que no esté vinculado a otra cuenta de API de WhatsApp, a menos que se esté migrando desde Business App)
4. Tener una **cuenta de Facebook Business Manager** activa (puedes crear una si no tienes)
5. **Conexión a internet estable** durante todo el proceso
6. **Disponibilidad del teléfono móvil** para recibir el código de verificación OTP

## Guía Paso a Paso para Conectar WhatsApp Business App a E-SMART360


### Navega a la Integración de WhatsApp en E-SMART360

1. Inicia sesión en tu panel de **E-SMART360**
    2. Ve al menú **WhatsApp** en la barra lateral
    3. Selecciona la opción **Conectar Cuenta**
    4. Haz clic en el botón **"Conectar WhatsApp"**
  
### Inicia el Flujo de Embedded Signup de WhatsApp

1. Haz clic en el botón **"Continuar con Facebook"** para iniciar el proceso de autenticación
    2. Se abrirá una ventana de **Facebook** solicitando inicio de sesión
    3. Inicia sesión en tu cuenta de **Facebook Business Manager** con las credenciales de administrador
    4. Selecciona la **Cuenta de WhatsApp Business** existente que deseas conectar
    5. Elige el **número de teléfono** asociado a tu negocio
    6. Acepta los **permisos** y **términos de servicio** necesarios

    
> Al elegir tu **Nombre para mostrar**, es esencial incluir el **nombre de tu empresa** para fines de verificación. Si deseas usar tu **nombre de marca**, debes formatearlo de la siguiente manera:

    **"Nombre de la Marca" por "Nombre de la Empresa"**

    Por ejemplo, si tu empresa es **XYZ Pvt Ltd** y quieres usar tu marca **SuperTech**, el nombre para mostrar debe ser:

    **"SuperTech by XYZ Pvt Ltd"**

    Esto asegura que tu nombre para mostrar esté alineado con las directrices de WhatsApp y aumenta la probabilidad de que tu perfil sea aprobado por Meta.
    
### Verifica tu Número de Teléfono

Una vez que aceptes los permisos, Meta enviará un **código de verificación OTP** al número de teléfono seleccionado:
    1. Revisa los mensajes de **WhatsApp** o **SMS** en tu teléfono móvil
    2. Ingresa el código de 6 dígitos en el campo de verificación
    3. Si no recibes el código, puedes solicitar una **llamada telefónica** como método alternativo
    4. Una vez verificado, el sistema confirmará que tu número está listo para usar con la Cloud API
  
### Habilita WhatsApp Cloud API para Marketing

Una vez conectado, **E-SMART360 se integrará con la WhatsApp Cloud API**. Ahora puedes:

    - **Automatizar respuestas** a clientes con chatbots inteligentes
    - **Crear campañas de marketing** con mensajería masiva de WhatsApp
    - **Configurar notificaciones promocionales** y recordatorios de carritos abandonados
    - **Programar mensajes** para fechas y horas específicas
    - **Segmentar tu audiencia** para enviar mensajes personalizados
    - **Continuar usando WhatsApp Business App** en tu dispositivo móvil mientras gestionas tareas avanzadas de marketing en E-SMART360
  
## Sincronización de Contactos e Historial de Chat Antiguos

Una vez que hayas conectado tu número de WhatsApp Business, tienes la opción de sincronizar tus contactos anteriores y el historial de conversaciones. Esto asegura que las interacciones existentes con los clientes sean accesibles dentro de E-SMART360, permitiendo una transición sin interrupciones.

Para hacerlo, haz clic en el botón **"Obtener Contactos e Historial"** que aparece en la pantalla de configuración después de la conexión exitosa.

**¿Qué se sincroniza exactamente?**
- **Contactos**: Todos los contactos que tienen conversaciones activas contigo en la app de WhatsApp Business
- **Historial de chat**: Los últimos mensajes de cada conversación, permitiendo ver el contexto completo de las interacciones previas
- **Metadatos**: Fechas, horas y estados de los mensajes (enviado, entregado, leído)


> Esta opción de sincronización solo está disponible durante las primeras **24 horas** después de conectar tu número. Pasado ese tiempo, la sincronización no se podrá habilitar. Por lo tanto, te recomendamos realizar este paso inmediatamente después de la conexión.

## Opción Alternativa: Conexión con un Número Nuevo

Si prefieres comenzar con un número completamente nuevo para la WhatsApp Business Platform, consulta nuestra guía detallada sobre cómo conectar una cuenta de WhatsApp Business a E-SMART360. Esta opción es ideal si deseas mantener tu número actual de WhatsApp Business App funcionando de forma independiente mientras usas un número dedicado exclusivamente para automatización y marketing.

## Cómo Crear una Cuenta de Facebook Business Manager

Si aún no tienes una cuenta de Facebook Business Manager, puedes crear una siguiendo estos pasos:


### Accede a Business Manager

Visita [business.facebook.com](https://business.facebook.com) y haz clic en **"Crear cuenta"**. Necesitarás iniciar sesión con tu cuenta personal de Facebook (tu cuenta personal actúa como administrador del Business Manager).
  
### Configura los datos de tu negocio

Ingresa el **nombre de tu negocio**, tu **nombre** y tu **dirección de correo electrónico empresarial**. Asegúrate de usar un correo electrónico que revises regularmente, ya que Meta enviará notificaciones importantes a esta dirección.
  
### Completa la configuración inicial

Una vez completados los pasos, tu Business Manager estará listo. Desde aquí podrás gestionar:
    - Cuentas de WhatsApp Business
    - Páginas de Facebook
    - Cuentas de Instagram
    - Cuentas publicitarias
    - Roles y permisos de tu equipo
  
## Estructura Completa de la Integración: Business Manager, WABA y Números

Para aprovechar al máximo la integración, es fundamental entender cómo se relacionan los distintos componentes. Aquí te explicamos cada uno en detalle.

### Meta Business Manager

**Meta Business Manager** es el centro neurálgico donde se gestionan todos los activos digitales de tu negocio. Esto incluye páginas de Facebook, cuentas de Instagram, cuentas publicitarias y, lo más importante para esta guía, las **Cuentas de WhatsApp Business (WABA)**.


### Puntos clave sobre Business Manager

- **Verificación Empresarial**: Antes de utilizar completamente la WhatsApp Business API, tu negocio debe estar verificado dentro de Business Manager. La verificación empresarial desbloquea límites más altos de mensajería y permite gestionar hasta 25 números de teléfono
- **Gestión de Múltiples Activos**: Puedes gestionar varios activos como cuentas de Facebook e Instagram, cuentas de WhatsApp Business y números de teléfono, todo en un solo lugar
- **Asignación de Roles y Permisos**: Puedes asignar roles (como administrador, editor o visor) a miembros del equipo para controlar el acceso a diferentes partes de tus activos empresariales
- **Centro de Seguridad**: Desde el Security Center puedes solicitar la verificación empresarial de Meta y gestionar la autenticación de dos factores

### Cuentas de WhatsApp Business (WABA)

Una **Cuenta de WhatsApp Business (WABA)** es donde se lleva a cabo la comunicación de tu negocio a través de WhatsApp. Cada WABA puede gestionar múltiples números de teléfono, lo que te permite administrar diferentes departamentos, servicios o ubicaciones a través de números separados.


### Puntos clave sobre WABA

**Tipos de Cuentas de WhatsApp Business:**
- **Business Account**: Es el tipo de cuenta predeterminado al registrarse en la WhatsApp Business API. Muestra tu número de teléfono en la mayoría de las vistas, a menos que el cliente guarde tu contacto
- **Official Business Account (OBA)**: Si tu negocio califica, puedes solicitar este estatus. Las OBA muestran el nombre de tu negocio en todas las vistas de WhatsApp e incluyen una insignia de verificación verde, lo que aumenta la confianza y credibilidad

**Límite de números de teléfono**: Una cuenta de WhatsApp Business verificada puede tener hasta **25 números de teléfono**. Si tu negocio no está verificado, estás limitado a usar solo **un número de teléfono**

**Plantillas de mensajes**: Las cuentas de WhatsApp Business pueden almacenar hasta 250 plantillas de mensajes, esenciales para enviar mensajes automatizados o preaprobados como notificaciones, recordatorios y alertas

### Números de Teléfono

Los números de teléfono son una parte esencial de tu Cuenta de WhatsApp Business. Estos números se utilizan para enviar y recibir mensajes a través de la WhatsApp Business API.


### Puntos clave sobre números de teléfono

- **Uso Único**: Un número de teléfono solo puede usarse para la **WhatsApp Business API** o la **WhatsApp Business App**, pero no para ambas. Una vez que vinculas un número a la API, no puedes usarlo para la WhatsApp Business App estándar
- **Números Verificados**: Todos los números de teléfono deben ser verificados a través de Meta Business Manager antes de poder usarse para enviar o recibir mensajes a través de la WhatsApp Business API
- **Gestión de Múltiples Números**: Una vez que tu cuenta esté verificada, puedes conectar hasta **25 números de teléfono** bajo una misma Cuenta de WhatsApp Business. Esto es útil para gestionar diferentes departamentos, servicios o incluso múltiples negocios dentro de la misma cuenta
- **Eliminación segura**: Si necesitas eliminar un número de una WABA, puedes hacerlo desde WhatsApp Manager. Esto es útil cuando migras a un nuevo número o cambias de proveedor

## Configuración del Método de Pago para la API de WhatsApp

La WhatsApp Cloud API es un servicio de pago por uso de Meta. Meta cobra una tarifa por cada conversación iniciada, ya sea entrante o saliente. Sin un método de pago configurado, los mensajes salientes serán rechazados.


> Los pagos por el uso de la WhatsApp Cloud API se realizan directamente a Meta según su modelo de precios por conversación. E-SMART360 no aplica ningún margen sobre estas tarifas. Lo que pagas a Meta es exactamente lo que se te cobra.

### Accede a la Configuración de Meta Business

Abre la página de [Meta Business Settings](https://business.facebook.com/settings/) iniciando sesión en tu Facebook Business Manager. Si tienes múltiples cuentas de negocio, selecciona la que configuraste para WhatsApp Cloud API.
  
### Navega a Cuentas de WhatsApp

En el panel lateral izquierdo, ve a **Accounts > WhatsApp Accounts**. Aquí verás todas las cuentas de WhatsApp asociadas a tu negocio. Selecciona la cuenta de WhatsApp que deseas configurar.
  
### Accede a la Configuración de Pago

Haz clic en la pestaña **Settings** de la cuenta de WhatsApp seleccionada. Dentro de esta sección, busca y haz clic en el botón **Payment Settings**. Esto te redirigirá a la página de configuración de pagos.
  
### Agrega un Método de Pago

1. En la página de Payment Settings, haz clic en **Add payment method**
    2. Selecciona tu **país**, **moneda preferida** y el **método de pago** que deseas usar (tarjeta de crédito o débito)
    3. Haz clic en **Next** y completa los datos de tu tarjeta: número, fecha de vencimiento, CVV y código postal
    4. Haz clic en **Save** para guardar el método de pago
  
### Agrega información empresarial faltante

Después de agregar tu método de pago, es posible que Meta muestre una notificación solicitando información empresarial adicional. Si ves este mensaje:
    1. Haz clic en la notificación o banner
    2. Proporciona los datos solicitados: **Nombre Legal del Negocio**, **Dirección**, **Teléfono** y **Sitio Web**
    3. Haz clic en **Save** para completar el proceso
  
## Enlaces Útiles para la Configuración de WhatsApp Business API

Aquí tienes una lista de enlaces directos a las secciones más importantes de la configuración de WhatsApp Business API en Meta:



### Business Settings

Accede a todas tus cuentas de WhatsApp conectadas, con sus respectivos WhatsApp Manager y configuraciones de pago. Es el punto de partida para gestionar toda tu infraestructura.

    **Enlace**: Panel de Configuración de Meta Business
  
### Security Center

Solicita la verificación empresarial de Meta para desbloquear el acceso sin restricciones a la WhatsApp Business API. La verificación es necesaria para gestionar más de un número de teléfono y aumentar los límites de mensajería.

    **Enlace**: Centro de Seguridad de Meta
  
### WhatsApp Manager

Obtén una vista general de todas tus cuentas de WhatsApp conectadas, gestiona los números de teléfono vinculados, accede a las plantillas de mensajes y utiliza herramientas avanzadas de configuración.

    **Enlace**: WhatsApp Manager
  
### Connected Phone Numbers

Administra los números de teléfono conectados a tu cuenta de WhatsApp. Desde aquí puedes cambiar la foto de perfil, la descripción, el sitio web o solicitar el Green Tick de verificación.

    **Enlace**: Gestión de Números de Teléfono
  
## Verificación Empresarial (Business Verification)

Para utilizar plenamente la WhatsApp Business API, tu negocio debe estar verificado en Meta. Este proceso de verificación confirma que tu empresa es una entidad legal legítima.


### Pasos para verificar tu negocio en Meta

1. **Accede al Security Center**: En Facebook Business Manager, ve a **Security Center**
2. **Inicia la verificación**: Haz clic en "Start Verification"
3. **Selecciona el método de verificación**: Puedes elegir entre:
   - **Documentos legales**: Proporciona documentos como escritura de constitución, licencia comercial o registro fiscal
   - **Verificación telefónica**: Meta puede llamar al número registrado de tu empresa para confirmar los datos
4. **Completa la información de tu negocio**: Asegúrate de que todos los datos coincidan exactamente con tus documentos oficiales
5. **Espera la revisión**: Meta revisará tu solicitud. El proceso puede tomar desde unas horas hasta varios días
6. **Recibe la confirmación**: Una vez aprobada, recibirás una notificación en tu correo electrónico y en Business Manager

**Consejo importante**: El botón "Start Verification" puede aparecer atenuado si tu perfil de negocio no está completo. Asegúrate de que toda la información requerida esté correctamente diligenciada antes de intentar la verificación.

## Green Tick de WhatsApp (Official Business Account)

El **Green Tick** o insignia de verificación verde es un símbolo de autenticidad que aparece junto al nombre de tu negocio en WhatsApp. Este distintivo aumenta significativamente la confianza de los clientes.


### ¿Cómo solicitar el Green Tick de WhatsApp?

1. En WhatsApp Manager, selecciona el número de teléfono y haz clic en "Submit Request" en la sección de verificación
2. **Requisitos previos indispensables**:
   - Verificación empresarial completada en Meta Business Manager
   - Autenticación de dos factores (2FA) configurada en la cuenta
   - Nombre para mostrar aprobado según las directrices de WhatsApp
3. **Proporciona enlaces de relaciones públicas** o cobertura mediática sobre tu negocio (artículos de prensa, menciones en medios reconocidos, presencia en Wikipedia)
4. **Envía la solicitud** para revisión de Meta

**Nota importante**: El Green Tick está reservado para negocios notables con presencia pública verificable. Si tu negocio es nuevo o carece de presencia mediática significativa, es probable que la solicitud sea rechazada. En ese caso, te recomendamos enfocarte primero en construir tu presencia online y solicitar la verificación más adelante.

## Gestión de tu Perfil de WhatsApp Business

Una vez conectado tu número, puedes personalizar tu perfil de WhatsApp Business para reflejar tu marca y mejorar la comunicación con los clientes.


### Accede a WhatsApp Manager

Desde el panel de E-SMART360, ve a "Connect Dashboard" y haz clic en "Manage" para abrir WhatsApp Manager. Alternativamente, puedes acceder directamente desde Meta Business Settings.
  
### Actualiza la foto de perfil

Selecciona tu número conectado en la sección "Manage" y actualiza tu foto de perfil con el logo de tu empresa. El tamaño recomendado es de 640x640 píxeles en formato JPG o PNG. Una foto profesional aumenta la credibilidad de tu negocio.
  
### Configura la descripción y sitio web

Agrega tu dirección, sitio web y cualquier detalle adicional que los clientes puedan necesitar. Una descripción clara y completa ayuda a los clientes a entender qué productos o servicios ofreces. Incluye información como:
    - **Descripción del negocio**: 2-3 líneas explicando tu propuesta de valor
    - **Sitio web**: URL completa de tu página principal
    - **Dirección**: Dirección física de tu negocio (si aplica)
    - **Correo electrónico**: Email de contacto empresarial
    - **Horario de atención**: Días y horas laborables
  
### Configura el horario de atención

Establece tu horario laboral para que los clientes sepan cuándo pueden esperar respuestas. Esto es especialmente importante para gestionar las expectativas y cumplir con la regla de 24 horas de WhatsApp, que permite responder mensajes de clientes dentro de una ventana de 24 horas sin costo de conversación adicional.
  
## Problemas Comunes y Solución de Problemas

### Error: Número de Teléfono No Elegible para Incorporación

**Razón posible:** El número ya está en uso con otra API de WhatsApp, está registrado en otra cuenta personal de WhatsApp o fue eliminado recientemente de otra plataforma.

**Soluciones:**
1. Verifica que el número no esté vinculado a ninguna otra cuenta de WhatsApp API. Si lo está, elimínalo de la cuenta anterior
2. Espera al menos **10-15 minutos** después de eliminar el número antes de reintentar la conexión
3. Asegúrate de que el número sea capaz de recibir SMS o llamadas para la verificación OTP

### Error de Número Ya Registrado

**Razón posible:** El número aún está vinculado activamente a WhatsApp (ya sea Business App o cuenta personal).

**Solución:** Debes eliminar el número de WhatsApp o migrarlo a otro número antes de conectarlo a E-SMART360.


> Si eliminas el número de WhatsApp, ten en cuenta que los chats se borrarán a menos que tengas una copia de seguridad. Alternativamente, puedes migrar el número a uno nuevo antes de proceder para conservar el historial de conversaciones.

### Error: Botón "Start Verification" Atenuado o No Visible

**Razón posible:** El perfil de tu negocio en Facebook Business Manager no está completo.

**Soluciones:**
1. Verifica que todos los campos obligatorios de tu perfil empresarial estén diligenciados
2. Confirma que hayas agregado un método de pago válido
3. Asegúrate de tener una Página de Facebook vinculada a tu Business Manager
4. Si el problema persiste, contacta al soporte de Meta

### Error al Agregar Método de Pago

**Razón posible:** La tarjeta no es aceptada en tu región o los datos no coinciden.

**Soluciones:**
1. Verifica que tu tarjeta acepte pagos internacionales si estás en un país diferente al de Meta
2. Confirma que la dirección de facturación coincida exactamente con la registrada en tu banco
3. Prueba con una tarjeta diferente si el problema persiste

## Preguntas Frecuentes


### Si envío un mensaje desde la app móvil de WhatsApp Business, ¿estará disponible en la bandeja de entrada de E-SMART360?

Sí, cualquier mensaje enviado desde la aplicación móvil de WhatsApp Business también estará disponible en la bandeja de entrada de E-SMART360. El chat permanece sincronizado entre ambas plataformas en tiempo real. Esto significa que puedes iniciar una conversación desde tu móvil y continuarla desde el panel de E-SMART360, o viceversa.

### Cuando conecto mi número de WhatsApp Business a E-SMART360, ¿se sincronizarán mis contactos antiguos y el historial de chat?

Sí, tienes la opción de sincronizar tus contactos existentes y el historial de conversaciones al conectar tu número de WhatsApp Business a E-SMART360. Sin embargo, esta opción solo está disponible durante las primeras 24 horas después de la conexión. Pasado ese tiempo, la sincronización ya no será posible. Te recomendamos realizar este paso inmediatamente después de conectar tu número para no perder la oportunidad.

### ¿Puedo responder mensajes tanto desde la bandeja de entrada de E-SMART360 como desde la app móvil de WhatsApp Business?

Sí, puedes responder mensajes desde ambas plataformas. La sincronización es bidireccional, por lo que los mensajes enviados desde cualquier plataforma serán visibles en la otra. Sin embargo, para la automatización de chatbots y las campañas de mensajes masivos, se recomienda gestionar las respuestas a través de E-SMART360 para mantener la coherencia, el seguimiento y la correcta aplicación de las reglas de negocio.

### Si desinstalo la app de WhatsApp Business de mi teléfono, ¿E-SMART360 seguirá funcionando?

Sí, E-SMART360 continuará funcionando de forma completamente independiente, ya que opera a través de la WhatsApp Cloud API. La desinstalación de la app móvil no afecta la conexión API. Sin embargo, ten en cuenta que perderás la capacidad de usar WhatsApp desde tu teléfono para ese número. Si reinstalas la app y la usas junto con E-SMART360, los mensajes seguirán sincronizándose entre ambas plataformas.

### ¿Mi chatbot gestionará todos los mensajes automáticamente?

Sí, el chatbot gestionará los mensajes según los flujos predefinidos que hayas configurado en E-SMART360. Esto incluye respuestas automáticas a preguntas frecuentes, recolección de datos de clientes, y activación de flujos de conversación específicos. Sin embargo, siempre puedes tomar el control de una conversación manualmente desde la bandeja de entrada de E-SMART360 si el chatbot no puede resolver la consulta del cliente.

### ¿Puedo programar mensajes o enviar campañas masivas con E-SMART360?

Sí, E-SMART360 te permite programar mensajes y enviar campañas masivas a tus suscriptores, respetando las reglas de mensajería de WhatsApp y los límites de tu plan. Puedes crear campañas con mensajes personalizados, segmentar tu audiencia por etiquetas o campos personalizados, y programar el envío para fechas y horas específicas.

### ¿Recibiré notificaciones de nuevos mensajes en E-SMART360?

Sí, E-SMART360 proporciona notificaciones en tiempo real para nuevos mensajes, asegurando que no te pierdas ninguna consulta de clientes. Puedes configurar notificaciones dentro de la plataforma y también recibir alertas por correo electrónico si lo prefieres.

### ¿Necesito un teléfono nuevo para este proceso?

No, solo necesitas un chip SIM nuevo para la verificación por OTP, a menos que planees recibir llamadas en ese mismo número. El proceso de Embedded Signup está diseñado para funcionar con tu número existente de WhatsApp Business App. Si tu número ya está registrado en WhatsApp Business App, puedes usarlo directamente para conectarte a la Cloud API sin necesidad de un nuevo chip.

### ¿Cuál es la diferencia entre una Business Account y una Official Business Account (OBA)?

**Business Account**: Es la cuenta estándar con la que todos comienzan al registrarse en la WhatsApp Business API. En la mayoría de las vistas de WhatsApp, los usuarios verán tu número de teléfono en lugar del nombre de tu negocio, a menos que hayan guardado tu contacto en su agenda.

**Official Business Account (OBA)**: Está reservada para negocios notables y verificados por Meta. Muestra el nombre del negocio en todas las vistas de WhatsApp, incluso si el usuario no tiene el contacto guardado, e incluye una insignia de verificación verde (Green Tick) que aumenta la confianza del cliente.

### ¿Cómo puedo aumentar el límite de números de teléfono en mi cuenta de WhatsApp Business?

Por defecto, cada Cuenta de WhatsApp Business puede tener hasta 25 números de teléfono si tu negocio está verificado. Si tu negocio no está verificado, solo puedes usar un número de teléfono. Para aumentar este límite:
1. Completa la verificación empresarial de Meta en el Security Center
2. Una vez verificado, automáticamente podrás agregar hasta 25 números
3. Si necesitas más de 25 números, debes contactar al soporte de Meta y justificar tu necesidad empresarial

### ¿Qué hago si mi solicitud de verificación empresarial fue rechazada?

Si tu solicitud de verificación empresarial en Meta fue rechazada:
1. Revisa el motivo del rechazo en el Security Center de Meta para entender la causa
2. Corrige cualquier error en la información de tu empresa (nombre legal, dirección, documentos)
3. Asegúrate de que los documentos proporcionados sean legibles, estén vigentes y coincidan exactamente con los datos registrados
4. Vuelve a solicitar la verificación después de haber realizado las correcciones necesarias
5. Si el rechazo persiste, contacta al soporte de Meta para obtener asistencia personalizada

### ¿Es posible tener múltiples números en diferentes WABA?

Sí, cada Cuenta de WhatsApp Business (WABA) puede gestionar hasta 25 números de teléfono. Si necesitas separar tus operaciones por departamentos, marcas o regiones, puedes crear múltiples WABA bajo el mismo Business Manager. Esto te permite:
- Mantener conversaciones separadas para ventas, soporte y marketing
- Tener diferentes perfiles y fotos de perfil para cada línea de negocio
- Gestionar permisos de equipo de forma independiente para cada WABA

### ¿Cómo contacto a Meta para problemas con la API de WhatsApp?

Puedes contactar al soporte de Meta para problemas relacionados con la WhatsApp Business API a través de:
1. **Centro de ayuda de Meta**: Accede desde Facebook Business Manager y busca en la sección de ayuda
2. **WhatsApp Manager**: Dentro de la configuración de tu cuenta de WhatsApp, hay opciones de soporte integradas
3. **Partner Directory**: Si eres cliente de E-SMART360, nuestro equipo de soporte puede ayudarte a escalar problemas a Meta
4. **Foro de desarrolladores de Meta**: Para problemas técnicos avanzados relacionados con la API

## Casos de Uso Prácticos



### Tienda de E-commerce: Automatización de Ventas

Una tienda de ropa online conectó su número de WhatsApp Business existente a E-SMART360. Gracias a la Cloud API, ahora puede:
    
    - Enviar notificaciones automáticas de confirmación de pedido inmediatamente después de la compra
    - Recordar a los clientes sobre carritos abandonados con un mensaje personalizado a las 2 horas y un recordatorio a las 24 horas
    - Responder preguntas frecuentes sobre tallas, envíos y devoluciones con chatbots automatizados
    - Enviar recomendaciones de productos basadas en compras anteriores
    - Programar mensajes de seguimiento post-venta para solicitar reseñas
    
    **Resultado**: Redujeron el tiempo de respuesta en un 60%, recuperaron el 15% de carritos abandonados y aumentaron las ventas recurrentes en un 25%.
  
### Agencia de Marketing: Gestión Multi-cuenta

Una agencia de marketing digital gestiona 8 cuentas de clientes diferentes. Conectaron su WABA verificada a E-SMART360 y ahora:
    
    - Administran múltiples números (hasta 25) desde un solo panel centralizado
    - Envían campañas segmentadas a diferentes audiencias de cada cliente
    - Sincronizan el historial de chat de cada cuenta dentro de las primeras 24 horas
    - Usan la bandeja compartida para que todo el equipo de la agencia colabore en tiempo real
    - Configuran chatbots diferentes para cada cliente según sus necesidades específicas
    
    **Resultado**: Centralizaron toda su comunicación de WhatsApp y duplicaron su capacidad de gestión sin contratar más personal.
  
### Clínica Médica: Gestión de Citas

Una clínica dental conectó su WhatsApp Business a E-SMART360 para automatizar la gestión de citas:
    
    - Los pacientes pueden agendar citas directamente desde WhatsApp mediante un flujo conversacional
    - El sistema envía recordatorios automáticos 24 horas antes de cada cita
    - Se envían instrucciones pre-consulta y formularios de admisión digitales
    - Las cancelaciones y reprogramaciones se gestionan automáticamente
    - Notificaciones de resultados de exámenes una vez procesados
    
    **Resultado**: Redujeron las ausencias en un 40% y liberaron 20 horas semanales del personal administrativo.
  
### Restaurante: Pedidos y Reservas

Un restaurante familiar conectó su WhatsApp Business a E-SMART360 para gestionar pedidos y reservas:
    
    - Los clientes pueden ver el menú digital y realizar pedidos para llevar directamente en WhatsApp
    - Las reservas de mesas se confirman automáticamente con un mensaje de confirmación
    - Se envían ofertas especiales y menús del día a los suscriptores cada semana
    - Los clientes pueden consultar el tiempo estimado de espera para pedidos
    - Gestión de quejas y sugerencias con respuestas automatizadas y escalamiento a personal humano
    
    **Resultado**: Incrementaron los pedidos para llevar en un 35% y mejoraron la satisfacción del cliente en un 28%.
  
## ¿Por qué elegir E-SMART360 para tu Marketing en WhatsApp?



### Integración sin Código

No se requieren conocimientos técnicos ni programación. Regístrate directamente con tu WhatsApp Business App existente mediante el flujo de Embedded Signup de Meta. En cuestión de minutos, tu número estará conectado y listo para usar.
  
### Cloud API Completa

Accede a todas las funciones avanzadas de mensajería y automatización que ofrece la WhatsApp Cloud API, incluyendo chatbots, mensajes plantilla, catálogos de productos, pagos integrados y más.
  
### Chatbots con IA

Configura interacciones impulsadas por inteligencia artificial para atender a tus clientes de forma automática e inteligente. Los chatbots pueden entender el lenguaje natural, resolver consultas complejas y aprender de cada interacción.
  
### Campañas y Notificaciones

Involucra a tus clientes con campañas de marketing en WhatsApp, notificaciones promocionales, recordatorios automatizados y mensajes transaccionales. Segmenta tu audiencia para enviar el mensaje correcto a la persona correcta.
  
### Usa WhatsApp en tu Móvil

Continúa usando WhatsApp Business App en tu teléfono mientras aprovechas las funciones avanzadas de la API de E-SMART360. La coexistencia te permite tener movilidad y automatización simultáneamente.
  
### Panel de Control Intuitivo

Gestiona conversaciones, análisis, automatizaciones y campañas desde un solo lugar con una interfaz fácil de usar. Obtén reportes detallados sobre el rendimiento de tus mensajes y la actividad de tus chatbots.
  
## Glosario de Términos

| Término | Definición |
|---------|-----------|
| **Cloud API** | La interfaz de programación de aplicaciones de WhatsApp basada en la nube de Meta que permite a las empresas enviar y recibir mensajes de forma programática |
| **WABA** | WhatsApp Business Account. Cuenta empresarial que gestiona los números de teléfono y la comunicación a través de la API |
| **Embedded Signup** | Proceso de registro integrado que permite conectar una WhatsApp Business App existente a la Cloud API |
| **OTP** | One-Time Password. Código de verificación único enviado por SMS o llamada para confirmar la propiedad del número |
| **Business Manager** | Centro de administración de Meta donde se gestionan todos los activos empresariales (cuentas de WhatsApp, páginas, anuncios) |
| **OBA** | Official Business Account. Cuenta empresarial oficial verificada por Meta con insignia de verificación verde |
| **Green Tick** | Insignia de verificación verde que aparece junto al nombre del negocio, indicando que es una cuenta oficial y auténtica |
| **Conversación** | Unidad de medición de Meta para el cobro de la API. Una conversación de 24 horas se cobra por cada sesión de mensajes con un cliente |

## Conclusión

Al aprovechar **WhatsApp Embedded Signup** y **Cloud API**, puedes integrar rápidamente tu **WhatsApp Business App** con **E-SMART360** y desbloquear potentes herramientas de interacción con clientes. La clave está en entender la estructura de Meta Business Manager, las cuentas WABA y los números de teléfono para gestionar tu comunicación de manera escalable y profesional.

### Resumen del Proceso

1. **Preparación**: Asegúrate de tener una WhatsApp Business App o un número nuevo elegible, acceso de administrador a Business Manager y un método de pago listo
2. **Conexión**: Usa el flujo de Embedded Signup a través de Facebook Business Manager desde el panel de E-SMART360
3. **Verificación**: Completa la verificación del número mediante OTP (código recibido por SMS o llamada)
4. **Sincronización**: Dentro de las primeras 24 horas, sincroniza contactos e historial usando el botón "Obtener Contactos e Historial"
5. **Pago**: Agrega un método de pago en Meta Business Settings para cubrir los cargos de conversación de la API
6. **Personalización**: Configura tu perfil, foto, descripción, sitio web y horario de atención
7. **Automatización**: Crea flujos de chatbot, campañas de marketing y notificaciones personalizadas
8. **Verificación empresarial**: Opcional pero recomendada para desbloquear mayores límites y funcionalidades


> Existen algunas limitaciones de país para la incorporación de usuarios de WhatsApp Business App. Algunos países pueden tener restricciones temporales o permanentes para el proceso de Embedded Signup. Consulta la documentación oficial de desarrolladores de Meta para obtener la lista más actualizada de países soportados.

### Beneficios Clave de Integrar tu WhatsApp Business con E-SMART360

- **Ahorro de tiempo**: Automatiza las respuestas repetitivas y libera a tu equipo para tareas de mayor valor
- **Mayor alcance**: Llega a tus clientes en el canal que más usan con campañas masivas segmentadas
- **Consistencia**: Todos los mensajes y respuestas siguen las directrices de tu marca
- **Análisis y reportes**: Obtén datos valiosos sobre el rendimiento de tus comunicaciones
- **Escalabilidad**: Gestiona desde 1 hasta 25 números de teléfono desde una sola plataforma
- **Coexistencia**: No sacrificas la app móvil para obtener las funcionalidades de la API

## Recursos Adicionales

- Guía completa: [Cómo configurar la WhatsApp Cloud API con E-SMART360](/recursos/configurar-whatsapp-cloud-api)
- Aprende sobre [límites de mensajería de WhatsApp](/recursos/limites-mensajeria-whatsapp)
- Gestiona tus [plantillas de mensajes de WhatsApp](/recursos/plantillas-mensajes-whatsapp)
- Configura tu [bandeja compartida de equipo](/recursos/bandeja-compartida-inbox-equipo)
- Verifica tu [Meta Business Manager](/recursos/verificar-meta-business-manager)
- Aprende sobre [tipos de conversaciones y precios de la API](/recursos/tipos-conversaciones-api-whatsapp)

## Migración desde un Número Existente de WhatsApp

Si ya tienes un número activo en WhatsApp Business App y deseas migrarlo completamente a la WhatsApp Business Platform, el proceso es diferente al Embedded Signup. Sigue estos pasos:


### Verifica la elegibilidad del número

Asegúrate de que tu número no esté ya registrado en otra cuenta de WhatsApp Business API. Puedes verificarlo en el WhatsApp Manager de Meta. Si el número ya está registrado, deberás eliminarlo de la cuenta anterior.
  
### Prepara una copia de seguridad

Antes de realizar cualquier cambio, realiza una copia de seguridad de tus chats en WhatsApp Business App. Ve a **Ajustes > Chats > Copia de seguridad** y guarda tus conversaciones en Google Drive o iCloud.
  
### Inicia el proceso de Embedded Signup desde E-SMART360

Sigue los pasos descritos en la guía principal. El sistema detectará que tu número está en uso y te guiará en el proceso de migración.
  
### Configura la coexistencia

Una vez completada la migración, tu número estará disponible tanto en tu móvil como en E-SMART360. Descarga e inicia sesión nuevamente en WhatsApp Business App en tu teléfono para activar el modo de coexistencia.
  
## Configuración Avanzada: Roles y Permisos del Equipo

Una vez que tu cuenta de WhatsApp Business está conectada a E-SMART360, puedes configurar roles y permisos para tu equipo.

### Roles Disponibles

- **Administrador**: Acceso completo a todas las funciones, incluyendo configuración, facturación y gestión de usuarios
- **Editor**: Puede crear y modificar campañas, chatbots y plantillas, pero no puede cambiar la configuración de la cuenta
- **Agente de Soporte**: Acceso a la bandeja de entrada para gestionar conversaciones con clientes, sin acceso a configuración
- **Visor**: Acceso de solo lectura para ver reportes y análisis

### Cómo Asignar Roles

1. En el panel de E-SMART360, ve a **Configuración > Equipo**
2. Haz clic en **Invitar Miembro**
3. Ingresa el correo electrónico del miembro del equipo
4. Selecciona el rol que deseas asignar
5. El miembro recibirá una invitación por correo para unirse a tu cuenta

## Diferencias Entre la App Móvil y la API: Tabla Comparativa

| Característica | WhatsApp Business App (Móvil) | WhatsApp Cloud API (E-SMART360) |
|---------------|------------------------------|---------------------------------|
| **Plataforma** | Android / iOS | Basada en nube (Web / API) |
| **Automatización** | Limitada (respuestas rápidas) | Completa (chatbots, flujos, IA) |
| **Mensajes masivos** | No (solo listas de difusión ≤256) | Sí (campañas ilimitadas según plan) |
| **Múltiples agentes** | No (un solo dispositivo) | Sí (bandeja compartida multi-agente) |
| **Números por cuenta** | 1 número | Hasta 25 números verificados |
| **Análisis** | Estadísticas básicas | Reportes detallados y personalizables |
| **Integraciones** | No | CRM, ERP, e-commerce, APIs |
| **Catálogo de productos** | Básico | Avanzado con sincronización automática |
| **Pagos integrados** | Limitado | WhatsApp Pay + pasarelas externas |
| **Uso móvil simultáneo** | N/A | Sí (coexistencia total) |

## Plantillas de Mensajes: Guía Rápida

Las plantillas de mensajes son esenciales para enviar notificaciones proactivas a tus clientes fuera de la ventana de 24 horas.


### Tipos de plantillas de mensajes

- **Marketing**: Promociones, ofertas, newsletters y contenido publicitario. Requieren aprobación de Meta y están sujetas a revisión de calidad
- **Utilidad**: Confirmaciones de pedidos, actualizaciones de envío, recordatorios de citas y notificaciones transaccionales. Aprobación más rápida
- **Autenticación**: Códigos de verificación OTP, códigos de inicio de sesión. Pueden enviarse sin restricción de plantilla en ciertos casos
- **Servicio**: Respuestas a consultas de clientes dentro de la ventana de 24 horas (no requieren plantilla)

### Límites de caracteres para plantillas con medios

- **Texto**: Hasta 1024 caracteres
- **Encabezado de imagen**: 640x640 píxeles (mínimo), 1920x1080 píxeles (recomendado)
- **Encabezado de video**: Hasta 16 MB, formatos MP4, duración máxima 30 segundos
- **Encabezado de documento**: Hasta 100 MB, formatos PDF, DOCX, PPTX, XLSX
- **Pie de página**: Hasta 60 caracteres
- **Botones**: Hasta 20 caracteres por botón, máximo 10 botones por plantilla

## Seguridad y Buenas Prácticas



### Autenticación de Dos Factores

Habilita la autenticación de dos factores (2FA) en tu Facebook Business Manager y en tu WhatsApp Business Account. Esto agrega una capa adicional de seguridad para proteger tu cuenta contra accesos no autorizados.
  
### Gestión de Permisos

Revisa periódicamente los permisos de los miembros de tu equipo. Aplica el principio de menor privilegio: cada persona debe tener solo los permisos necesarios para realizar su trabajo.
  
### Monitoreo de Actividad

Revisa regularmente los registros de actividad en tu Business Manager y en E-SMART360 para detectar cualquier comportamiento inusual o no autorizado.
  
### Cumplimiento de Políticas

Asegúrate de que todos los mensajes que envías cumplan con las políticas de Meta y las regulaciones locales de protección de datos (GDPR, CCPA, Ley de Datos Personales).
  
> El envío de mensajes masivos no solicitados o el incumplimiento de las políticas de calidad de WhatsApp puede resultar en la restricción o suspensión permanente de tu número de teléfono. Meta monitorea activamente la calidad de los mensajes, las tasas de bloqueo y las quejas de los usuarios. Asegúrate de:
- Obtener consentimiento explícito de los clientes antes de enviar mensajes de marketing
- Incluir una opción clara para darse de baja en todos los mensajes promocionales
- Mantener tasas de bloqueo por debajo del 0.5%
- No enviar mensajes a números que hayan optado por no recibir comunicaciones

## Soporte y Recursos de Ayuda

Si encuentras problemas durante el proceso de conexión o configuración, estos recursos pueden ayudarte:

1. **Centro de ayuda de E-SMART360**: Documentación completa y guías paso a paso
2. **Soporte técnico**: Abre un ticket desde el panel de E-SMART360 para asistencia personalizada
3. **WhatsApp Support**: Para problemas directamente relacionados con Meta o la API de WhatsApp
4. **Comunidad**: Únete a nuestro grupo de usuarios para compartir experiencias y mejores prácticas

### Contacto Directo con Meta

Si necesitas contactar a Meta para resolver problemas relacionados con tu Business Manager, verificación empresarial o la WhatsApp Business API, puedes:

- Abrir un caso desde el **Centro de ayuda** en Facebook Business Manager
- Usar el **WhatsApp Manager** para reportar problemas específicos de la cuenta
- Contactar a través del **Partner Directory** si eres cliente de un Partner oficial de Meta

## Próximos Pasos

Una vez que hayas conectado exitosamente tu WhatsApp Business App a E-SMART360, te recomendamos:

1. **Configurar tu primer chatbot**: Crea un flujo de bienvenida que salude a los nuevos clientes y recoja información básica
2. **Crear una campaña de bienvenida**: Envía un mensaje de presentación a tus contactos sincronizados
3. **Configurar notificaciones automáticas**: Activa alertas para nuevos mensajes y eventos importantes
4. **Explorar integraciones**: Conecta E-SMART360 con tu CRM, tienda online u otras herramientas
5. **Revisar análisis**: Familiarízate con los reportes de rendimiento para medir el éxito de tus campañas

¡Estás listo para llevar tu comunicación empresarial al siguiente nivel con E-SMART360 y WhatsApp Cloud API!
