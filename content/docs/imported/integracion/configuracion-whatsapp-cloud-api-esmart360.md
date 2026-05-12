---
title: "Cómo configurar la WhatsApp Cloud API con E-SMART360"
description: "Guía completa paso a paso para crear y conectar tu WhatsApp Cloud API con E-SMART360. Incluye configuración manual, Embedded Signup, gestión de tokens, webhooks y facturación."
section: "integracion"
order: 179
audience: ["developer"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "configuracion-whatsapp-cloud-api-esmart360"
canonicalGroup: "como-configurar-la-whatsapp-cloud-api-con"
tags: ["integracion"]
staging: true
---
# Cómo configurar la WhatsApp Cloud API con E-SMART360


> **¿Qué lograrás con esta guía?** Configurar tu WhatsApp Cloud API desde cero y conectarla con E-SMART360 para activar chatbot, bandeja compartida, broadcasting, automatización de WooCommerce/Shopify, flujos webhook, catálogo de WhatsApp y mucho más.

**Resumen rápido:** Para usar las funciones de automatización de WhatsApp de E-SMART360 (chatbot, Shared Inbox, broadcasting, automatización de WooCommerce/Shopify, webhook workflow, catálogo, etc.), primero debes configurar una cuenta de WhatsApp Cloud API y conectarla a E-SMART360. Esta guía muestra el proceso completo de configuración manual: crear una app empresarial en Meta/Facebook, agregar WhatsApp, verificar un número de teléfono, configurar webhooks usando la URL de callback y el token de verificación de E-SMART360, cambiar la app a modo Live agregando las URLs de Política de Privacidad y Términos, generar un token de acceso permanente mediante usuarios del sistema de Business Manager y, finalmente, conectar el ID de la cuenta de WhatsApp Business + el token dentro de E-SMART360. Si prefieres un método más sencillo, E-SMART360 también ofrece Embedded Signup, que conecta WhatsApp con pocos clics (recomendado).

*Última actualización: Febrero 2026*

E-SMART360 es una plataforma completa de automatización de marketing para WhatsApp; incluye chatbot, chat en vivo, broadcasting, integración con Shopify y WooCommerce para automatización de mensajes de pedidos, flujo de trabajo webhook, catálogo de WhatsApp y muchas funciones más. Para usar todas estas funciones desde E-SMART360, debes tener tu cuenta de WhatsApp Cloud API configurada primero. Es fácil configurar e integrar WhatsApp Cloud API con E-SMART360. En este artículo, proporcionaremos un procedimiento detallado paso a paso para crear una WhatsApp Cloud API.


> **Importante:** Antes de comenzar el proceso de creación de la WhatsApp Cloud API, asegúrate de tener un número de teléfono que no esté actualmente asociado con WhatsApp. Si el número ya está vinculado a una cuenta de WhatsApp o a una cuenta comercial en cualquier aplicación móvil, aún se puede utilizar migrándolo a la WhatsApp Cloud API. Para migrar tu cuenta de WhatsApp existente, primero debes eliminarla de la aplicación móvil y luego agregar el número a tu nueva WhatsApp Cloud API.

---

## Estructura de la WhatsApp Business API: Conceptos clave


> Antes de sumergirte en la configuración técnica, es útil entender cómo se organiza el ecosistema de WhatsApp Business API. Estos tres elementos trabajan juntos.

### Meta Business Manager

**Meta Business Manager** actúa como la plataforma central donde se gestionan todos los activos digitales de tu negocio. Esto incluye páginas de Facebook, cuentas de Instagram, cuentas publicitarias y, lo más importante para esta guía, las **Cuentas de WhatsApp Business**. Aquí gestionas permisos, asignas roles y conectas diversas herramientas de negocio.

**Puntos clave:**

- **Verificación empresarial**: Antes de utilizar completamente la WhatsApp Business API, tu negocio debe estar verificado dentro de Business Manager. La verificación implica proporcionar documentación legal de tu empresa, como registros comerciales, y puede tardar desde unos días hasta varias semanas en ser aprobada por Meta.
- **Gestión de múltiples activos**: Puedes gestionar varios activos como cuentas de Facebook e Instagram, cuentas de WhatsApp Business y números de teléfono, todo en un solo lugar.
- **Asignación de roles y permisos**: Puedes asignar roles (administrador, editor o visor) a miembros del equipo para controlar el acceso a diferentes partes de tus activos empresariales.


### ¿Qué es Meta Business Manager y por qué lo necesito?

Meta Business Manager es el centro de control central donde se gestionan todos los activos digitales de tu negocio en el ecosistema de Meta. Es esencial porque:
- Centraliza la administración de todas tus cuentas comerciales en un solo lugar
- Te permite agregar y gestionar usuarios con diferentes niveles de permiso
- Es un requisito obligatorio para utilizar WhatsApp Business API
- Sin Business Manager, no puedes crear aplicaciones de WhatsApp Cloud API ni generar tokens de acceso permanentes
- Te permite gestionar métodos de pago y facturación para todos tus servicios de Meta

### Cuentas de WhatsApp Business (WABA)

Una **Cuenta de WhatsApp Business (WABA)** es donde se lleva a cabo la comunicación de tu negocio a través de WhatsApp. Cada cuenta de WhatsApp Business puede gestionar múltiples números de teléfono, lo que te permite administrar diferentes departamentos, servicios o ubicaciones a través de números separados.

**Puntos clave:**

- **Tipos de cuentas de WhatsApp Business**:
  - **Cuenta Business**: Es el tipo de cuenta predeterminado al registrarte. Muestra tu número de teléfono en la mayoría de las vistas, a menos que el cliente guarde tu contacto.
  - **Official Business Account (OBA)**: Si tu negocio califica, puedes solicitar este estado. Las OBA muestran el nombre de tu empresa en todas las vistas e incluyen una **insignia verde de verificación**.
- **Límite de números**: Una cuenta verificada puede tener hasta **25 números de teléfono**. Sin verificación, estás limitado a **un número**.
- **Plantillas de mensajes**: Las cuentas pueden almacenar hasta 250 plantillas de mensajes para mensajes automatizados.
- **Límites de mensajería**: Dependiendo del nivel de tu cuenta, tendrás diferentes límites de mensajes por período de 24 horas.


### ¿Cuál es la diferencia entre una cuenta Business y una Official Business Account (OBA)?

**Business Account:**
- Toda empresa comienza con este tipo de cuenta.
- Los usuarios verán tu número de teléfono en lugar del nombre de tu empresa.
- Puedes completar tu perfil comercial con detalles como nombre, descripción y sitio web.
- No incluye la insignia verde de verificación.

**Official Business Account (OBA):**
- Reservado para empresas **notables** y **verificadas**.
- Muestran el **nombre de la empresa** en todas las vistas e incluyen insignia verde.
- Requiere verificación comercial a través de Meta Business Manager y solicitud del sello verde.
- El proceso puede tomar varias semanas.

### Números de teléfono

Los números de teléfono se utilizan para enviar y recibir mensajes a través de la WhatsApp Business API. Gestionarlos de manera efectiva es crucial.

**Puntos clave:**

- **Uso único**: Un número puede usarse **solo para WhatsApp Business API o para la aplicación WhatsApp Business, pero no para ambas**.
- **Números verificados**: Todos los números deben verificarse mediante código SMS o llamada telefónica.
- **Gestión de múltiples números**: Puedes conectar hasta **25 números** bajo una misma cuenta verificada.
- **Límites de aumento**: Si necesitas más de 25 números, puedes solicitar un aumento a Meta con una cuenta empresarial verificada.

---

## Resumen de pasos para conectar WhatsApp Cloud API a E-SMART360


### Crear una aplicación

1. Ve al sitio de Facebook Developer (developers.facebook.com).
2. Haz clic en Mis aplicaciones y luego en Crear aplicación.
3. Selecciona Empresas (Business) como tipo de aplicación.
4. Completa el formulario con el nombre de la aplicación y tu correo electrónico.
5. Opcionalmente, selecciona una cuenta de negocio existente.
6. Confirma tu identidad reingresando tu contraseña de Facebook.
7. Agrega WhatsApp a tu aplicación en la página de productos.

### Agregar un método de pago

1. En la página Quickstart de WhatsApp, configura tu método de pago.
2. Serás redirigido a Meta Business Settings.
3. Selecciona tu país, moneda y método de pago (tarjeta de crédito/débito).
4. Ingresa los detalles de tu tarjeta y guarda la configuración.
5. Si Meta solicita información comercial adicional, proporciona los datos requeridos.

### Configurar webhooks

1. Haz clic en Configurar webhooks en la sección de WhatsApp.
2. Obtén la URL de Callback y el Token de Verificación desde E-SMART360.
3. Pégalos en los campos correspondientes en Facebook Developer.
4. Haz clic en Verificar y guardar para validar la conexión.
5. Suscríbete al campo messages.

### Agregar y verificar un número de teléfono

1. Haz clic en Agregar número de teléfono.
2. Completa la información del perfil: nombre, zona horaria y categoría.
3. Ingresa el número de teléfono con código de país.
4. Elige verificación por SMS o llamada telefónica.
5. Ingresa el código de verificación.

### Obtener un token de acceso permanente

1. Ve a Configuración empresarial en Facebook Business.
2. Crea un usuario del sistema con rol Admin.
3. Agrega tu aplicación como activo con control total.
4. Genera un nuevo token con expiración Nunca.
5. Selecciona los permisos requeridos y genera el token.

### Cambiar el modo a Live

1. Busca el interruptor de modo Desarrollo/Live.
2. Proporciona las URLs de Política de Privacidad y Términos de Servicio.
3. Copia las URLs desde la página Conectar WhatsApp de E-SMART360.
4. Pégalas en Configuración básica de la aplicación.
5. Cambia el interruptor a Live.

### Conectar a E-SMART360

1. En E-SMART360, ve a WhatsApp > Conectar WhatsApp.
2. Ingresa tu WABA ID y el token de acceso permanente.
3. Haz clic en Conectar.
4. Verás un mensaje de éxito y la cuenta aparecerá activa.

---

## Embedded Signup: La forma más rápida (Recomendada)

Si prefieres no pasar por el proceso manual, E-SMART360 ofrece un método de **Embedded Signup de un solo clic**. Es la forma más fácil y rápida de conectar tu cuenta de WhatsApp Business, sin necesidad de crear aplicaciones ni configurar tokens manualmente.


> El método Embedded Signup te permite conectar tu número de teléfono directamente desde el panel de E-SMART360, guiándote a través de la autenticación de Meta en pocos pasos.

**Ventajas del Embedded Signup:**
- **Sin configuración manual**: No necesitas crear una aplicación ni configurar webhooks.
- **Sin gestión de tokens**: El sistema genera y gestiona los tokens automáticamente.
- **Integración instantánea**: En solo unos clics, tu número estará conectado.
- **Menos errores**: Se reducen significativamente las posibilidades de errores de configuración.
- **Actualizaciones automáticas**: Los cambios en la API de Meta se manejan automáticamente.

---

## Instrucciones detalladas para la configuración manual

### Crear una aplicación

Antes de poder usar E-SMART360, necesitas crear la WhatsApp Cloud API y agregarle un número de teléfono. El primer paso es crear una aplicación desde tu cuenta de desarrollador de Facebook.

1. Abre tu navegador y ve a [developers.facebook.com](https://developers.facebook.com/). Asegúrate de haber iniciado sesión con la cuenta de Facebook que administra tu negocio.

2. Haz clic en la pestaña **Mis aplicaciones** (My Apps) en la esquina superior derecha.

3. Se abrirá una página con un botón **Crear aplicación** (Create App) y tus aplicaciones existentes.

4. Haz clic en **Crear aplicación** para comenzar.

5. Selecciona **Otros** (Other) como propósito y haz clic en **Siguiente** (Next).

6. Selecciona **Empresas** (Business) como tipo de aplicación y haz clic en **Siguiente**.

7. Completa el formulario:
   - **App Name**: Nombre descriptivo, ej. WhatsApp Bot MiEmpresa.
   - **App Contact Email**: Correo electrónico de contacto.
   - **Business Account**: Opcional, selecciona una cuenta existente.

8. Haz clic en **Crear aplicación**.

9. Reingresa tu contraseña de Facebook para confirmar tu identidad.

10. En la página de productos, busca la sección **WhatsApp** y haz clic en **Configurar** (Setup).

11. Serás redirigido a la página **Quickstart** de WhatsApp.

### Agregar un método de pago

En la página Quickstart, verás una sección para agregar un método de pago. Sin esto, no podrás enviar Mensajes Iniciados por la Empresa.


> **¿Por qué necesito un método de pago?** WhatsApp API es de pago por uso. Meta cobra por cada conversación iniciada. Existen tipos de conversación: marketing, utility, service y authentication, cada uno con costo diferente.

1. Haz clic en el enlace de método de pago. Serás redirigido a Meta Business Settings.

2. Selecciona tu cuenta empresarial si es necesario.

3. Ve a **Cuentas > WhatsApp Accounts** en la barra lateral izquierda.

4. Selecciona tu cuenta de WhatsApp y haz clic en la pestaña **Configuración** (Settings).

5. Haz clic en **Configuración de pago** (Payment Settings).

6. Haz clic en **Agregar método de pago**.

7. Selecciona tu país, moneda y método de pago (tarjeta de crédito/débito).

8. Ingresa los detalles de tu tarjeta y haz clic en **Guardar**.


### ¿Qué hago si Meta me pide información comercial faltante?

Después de agregar el método de pago, Meta puede solicitar información comercial adicional:
1. Busca un banner en la parte superior indicando que falta información.
2. Proporciona: Nombre legal de la empresa, Dirección, Teléfono y Sitio web.
3. Haz clic en **Guardar** para completar.

### Tokens de acceso: temporal vs permanente

En la Configuración de API, verás un **token de acceso temporal**. Este token expira en **23 horas** y no se recomienda para producción.


> **No uses el token temporal para producción.** La conexión durará solo 23 horas. Usa un token permanente generado mediante usuarios del sistema de Business Manager.

**Usos del token temporal:**
- Pruebas iniciales de concepto
- Desarrollo y depuración
- Verificar que la configuración básica funciona

También verás un **número de teléfono de prueba** que Meta proporciona automáticamente. No lo uses para producción.

En esta página encontrarás información importante:
- Token de acceso temporal
- ID del número de teléfono (Phone Number ID)
- ID de la cuenta de WhatsApp Business (WABA ID)
- Número de teléfono de prueba

Guarda el **WABA ID** porque lo necesitarás para conectar con E-SMART360.

### Agregar un número de teléfono

1. En Configuración de API, desplázate a **Agregar un número de teléfono** (Paso 5).

2. Haz clic en **Agregar número de teléfono**.


> **¿Tu número ya está registrado en WhatsApp?** Elimínalo de tu cuenta existente:
   WhatsApp > Configuración > Cuenta > Eliminar mi cuenta

3. Completa el perfil:
   - **WhatsApp Business display name**: Nombre de tu negocio.
   - **Timezone**: Zona horaria de tu negocio.
   - **Category**: Categoría del negocio.
   - **Business description**: Opcional.

4. Haz clic en **Siguiente**.

5. Ingresa el número de teléfono con código de país (ej. +34 para España).

6. Elige verificación por SMS o llamada telefónica.

7. Ingresa el código de verificación recibido.


> **Consejos importantes sobre números de teléfono:**
- Una cuenta verificada acepta hasta 25 números.
- Un número no puede usarse en API y app móvil simultáneamente.
- Una WABA solo pertenece a un Business Manager.
- No se puede migrar una WABA entre empresas.
- Sin verificación empresarial, solo puedes usar 1 número.

### Configurar Webhook

El webhook permite que E-SMART360 reciba mensajes entrantes en tiempo real.

1. Ve al Paso 3 y haz clic en **Configurar webhooks**.

2. En la página Configuration, haz clic en **Editar** en la sección Webhooks.

3. Aparecerán dos campos: Callback URL y Verify Token.

4. Obtén estos valores desde E-SMART360:
   - Inicia sesión en E-SMART360.
   - Ve a WhatsApp > Conectar WhatsApp.
   - Copia la Webhook Callback URL y el Verify Token.

5. Pégalos en los campos correspondientes en Facebook Developer.

6. Haz clic en **Verificar y guardar** (Verify and Save).

7. Haz clic en **Gestionar** (Manage) para seleccionar campos:
   - **messages**: Mensajes entrantes (obligatorio)
   - **message_deliveries**: Confirmaciones de entrega
   - **message_reads**: Confirmaciones de lectura

8. Asegúrate de suscribirte al campo **messages**.

### Cambiar el modo de la aplicación a Live

1. Busca el interruptor de modo Desarrollo/Live en la parte superior.

2. Intenta cambiar a Live. Meta te pedirá URLs de Política de Privacidad y Términos.

3. Copia las URLs desde la página Conectar WhatsApp de E-SMART360.

4. Pégalas en Configuración básica > Política de Privacidad y Términos de Servicio.

5. Guarda los cambios.

6. Vuelve a intentar cambiar el interruptor a Live. Confirma el cambio.

### Obtener un token de acceso permanente

1. Ve a **Configuración empresarial** (Business Settings) en Facebook Business.

2. En la barra lateral, selecciona **Usuarios del sistema** (System Users).

3. Haz clic en **Agregar** y crea un nuevo usuario con nombre y rol Admin.

4. Selecciona el usuario creado y haz clic en **Agregar activos** (Add Assets).

5. Selecciona tu aplicación como activo con control total (Full control).

6. Haz clic en **Generar nuevo token** para el usuario.

7. Selecciona tu aplicación y elige **Nunca** como expiración.

8. Selecciona estos permisos:
   - Business management
   - Catalog management
   - WhatsApp business messaging
   - WhatsApp business management

9. Haz clic en **Generar token** y cópialo de forma segura.


> **Guarda tu token en un lugar seguro.** No podrás verlo nuevamente desde la interfaz de Meta. Si lo pierdes, deberás generar uno nuevo.

### Conectar a E-SMART360

1. En E-SMART360, ve a **WhatsApp > Conectar WhatsApp**.

2. Ingresa tu **WhatsApp Business Account ID (WABA ID)**.

3. Ingresa el **token de acceso permanente** que generaste.

4. Haz clic en **Conectar**.

5. Verás un mensaje de éxito y la cuenta aparecerá en la lista de conexiones activas.

---

## Gestión de plantillas de mensajes

Las plantillas de mensajes son esenciales para enviar mensajes iniciados por la empresa. Deben ser aprobadas por Meta antes de su uso.


> **¿Qué son las plantillas de mensajes?** Son mensajes predefinidos que han sido aprobados por Meta y pueden enviarse a usuarios que no han iniciado una conversación contigo en las últimas 24 horas. Se utilizan para notificaciones, recordatorios, alertas y promociones.

**Tipos de plantillas:**
- **Marketing**: Promociones, ofertas y comunicaciones de marketing.
- **Utility**: Confirmaciones de pedidos, facturas, actualizaciones de cuenta.
- **Service**: Resolución de problemas, atención al cliente.
- **Authentication**: Códigos de verificación y autenticación de dos factores.

**Límites de plantillas:**
- Hasta 250 plantillas por cuenta de WhatsApp Business.
- Cada plantilla debe pasar la revisión de Meta.
- El tiempo de aprobación puede variar de minutos a días.

**Cómo crear una plantilla efectiva:**
1. Ve al Administrador de WhatsApp Business.
2. Selecciona Administrador de plantillas de mensajes.
3. Haz clic en Crear plantilla.
4. Selecciona la categoría (Marketing, Utility, Service).
5. Define el nombre, el idioma y el contenido de la plantilla.
6. Incluye variables personalizadas con formato {{1}}, {{2}}, etc.
7. Envía la plantilla para revisión.


### Consejos para la aprobación de plantillas

- Usa un lenguaje claro y directo.
- Evita mayúsculas excesivas y signos de puntuación repetitivos.
- Incluye una opción para darse de baja en plantillas de marketing.
- Respeta las políticas de Meta sobre contenido restringido.
- Revisa los ejemplos de plantillas aprobadas en el administrador.

## Facturación y métodos de pago

WhatsApp Business API opera con un modelo de pago por uso. Los costos varían según el tipo de conversación y la región.

**Categorías de conversación:**
- **Marketing**: Comunicaciones promocionales y de marketing.
- **Utility**: Transacciones, verificaciones y actualizaciones de cuenta.
- **Service**: Atención al cliente iniciada por el usuario.
- **Authentication**: Autenticación de usuarios.

**Métodos de pago aceptados:**
- Tarjetas de crédito y débito (Visa, Mastercard, American Express, etc.)
- Pago directo a través de Meta Business Settings.


> **Recomendación:** Configura tu método de pago al inicio del proceso de configuración. Aunque no planees enviar campañas de marketing inmediatamente, necesitarás el método de pago para ciertas funcionalidades como la verificación de la cuenta.

**Pasos para gestionar la facturación:**
1. Accede a Meta Business Settings.
2. Ve a Cuentas > WhatsApp Accounts.
3. Selecciona tu cuenta y haz clic en Configuración > Configuración de pago.
4. Revisa tu método de pago, historial de facturación y límites.

## Guía rápida para la migración de números existentes

Si ya tienes un número activo en WhatsApp Messenger o WhatsApp Business, puedes migrarlo a la Cloud API siguiendo estos pasos:

1. **Respaldar tus datos**: Exporta tu chat desde la aplicación de WhatsApp.

2. **Eliminar la cuenta**: Ve a Configuración > Cuenta > Eliminar mi cuenta en WhatsApp.

3. **Esperar la desactivación**: El proceso puede tomar unos minutos.


> Una vez eliminada la cuenta de WhatsApp, no podrás acceder a tus chats anteriores. Asegúrate de haber respaldado todo lo necesario antes de continuar.

4. **Agregar el número en Cloud API**: Sigue los pasos de la sección Agregar un número de teléfono de esta guía.

5. **Configurar webhooks y token**: Completa los pasos restantes de configuración.

## Migración desde un BSP (Business Service Provider)

Si actualmente utilizas un proveedor BSP para la API de WhatsApp, puedes migrar tu número a E-SMART360. El proceso implica:

1. **Contactar a tu BSP actual**: Solicita la desvinculación de tu número de su plataforma.

2. **Verificar la propiedad del número**: Asegúrate de tener acceso al número para verificación.

3. **Configurar en E-SMART360**: Sigue la guía de Embedded Signup o configuración manual.



### Migración directa

Si migras directamente, el número se transferirá sin cambios en la configuración del webhook. Solo necesitas actualizar el endpoint en tu panel de E-SMART360.

### Migración con nuevo número

Si prefieres comenzar con un número nuevo, puedes mantener tu configuración BSP actual mientras configuras el nuevo número en E-SMART360.

## Enlaces útiles para la configuración de WhatsApp Business API

Aquí tienes una lista de enlaces directos a las páginas más importantes de Meta para la administración de tu WhatsApp Business API:

| Recurso | Enlace |
|---------|-------|
| Facebook Developers | developers.facebook.com |
| Meta Business Suite | business.facebook.com |
| Administrador de WhatsApp | business.facebook.com/wa/manage/ |
| Configuración de pagos | business.facebook.com/settings/payments |
| Verificación empresarial | business.facebook.com/settings/security |
| Panel de desarrollador | developers.facebook.com/apps |
| Cambiar foto del perfil | business.facebook.com/wa/manage/phone-numbers |

## Ejemplos de casos de uso

Una vez conectada tu WhatsApp Cloud API con E-SMART360, puedes implementar estos casos de uso:


<Card title='Atención al cliente automatizada'>
Configura un chatbot que responda automáticamente preguntas frecuentes, horarios, direcciones y más. Cuando el bot no pueda resolver la consulta, transfiere al agente humano en la bandeja compartida.

<Card title='Notificaciones de pedidos'>
Conecta WooCommerce o Shopify para enviar automáticamente confirmaciones de pedido, actualizaciones de envío y recordatorios de carrito abandonado.

<Card title='Campañas de marketing'>
Crea listas de difusión y envía campañas segmentadas con plantillas aprobadas. Mide tasas de apertura y clics desde el panel de E-SMART360.

<Card title='Catálogo de productos'>
Muestra tu catálogo de productos directamente en WhatsApp. Los clientes pueden navegar, seleccionar y realizar pedidos sin salir de la aplicación.

## Preguntas frecuentes


### ¿Qué es WhatsApp Cloud API y por qué la necesito para E-SMART360?

WhatsApp Cloud API es la solución oficial de Meta para empresas. E-SMART360 necesita esta conexión para enviar y recibir mensajes de WhatsApp y activar funciones como chatbot, broadcasting, plantillas e integraciones.

### ¿Necesito un número de teléfono nuevo para crear una cuenta de WhatsApp Cloud API?

Idealmente, el número no debe estar activo en la aplicación móvil de WhatsApp. Sin embargo, puedes migrar un número existente eliminándolo primero de la app móvil y luego agregándolo a Cloud API.

### ¿Cuál es la diferencia entre el token temporal y el token permanente?

El token temporal expira en 23 horas y solo sirve para pruebas. El token permanente se genera mediante usuarios del sistema de Business Manager y es necesario para una conexión estable a largo plazo.

### ¿Por qué necesito configurar webhooks?

Los webhooks permiten que E-SMART360 reciba mensajes y eventos de WhatsApp Cloud API en tiempo real. Sin ellos, no puedes recibir mensajes de clientes ni activar automatizaciones.

### ¿Dónde obtengo la URL de Callback y el Token de Verificación?

Ambos valores están en tu panel de E-SMART360 en WhatsApp > Conectar WhatsApp. Cópialos y pégalos en la configuración de webhooks de Meta.

¿Por qué necesito URLs de Política de Privacidad y Términos de Servicio?
Meta requiere URLs válidas antes de cambiar tu aplicación de modo Desarrollo a Live. E-SMART360 proporciona estas URLs en la página Conectar WhatsApp.

### ¿Cómo genero un token de acceso permanente?

1. Crea un usuario del sistema en Business Settings.
2. Asigna tu aplicación como activo con control total.
3. Genera un token con permisos: Business management, Catalog management, WhatsApp business management y WhatsApp business messaging.
4. Selecciona Nunca como expiración.

### ¿Puedo enviar mensajes sin agregar un método de pago?

Para enviar mensajes iniciados por la empresa (plantillas), Meta requiere un método de pago. Puedes agregarlo durante la configuración inicial o más tarde, según el estado de tu cuenta.

### ¿Qué hago si la conexión falla con error bad signature?

Este error suele ocurrir cuando el token de acceso no es válido o los permisos no están configurados correctamente. Verifica que el token tenga todos los permisos necesarios y que el WABA ID sea correcto.

---

## Vídeo tutorial

Puedes ver nuestro video tutorial en YouTube para una guía visual del proceso:


> El video tutorial cubre todo el proceso de configuración desde cero, incluyendo la creación de la aplicación, configuración de webhooks, generación del token permanente y conexión final con E-SMART360.

---

## Conclusión

Configurar la WhatsApp Cloud API con E-SMART360 es un proceso sencillo si sigues los pasos en el orden correcto. Una vez conectada, tendrás acceso a todas las herramientas de automatización:

- **Chatbot**: Automatiza respuestas y califica leads 24/7
- **Bandeja compartida**: Gestiona todas las conversaciones en un solo lugar
- **Broadcasting**: Envía campañas masivas con plantillas aprobadas
- **Catálogo**: Muestra productos directamente en WhatsApp
- **Integraciones**: Conecta WooCommerce, Shopify, Google Sheets y más
- **Flujos webhook**: Automatiza procesos complejos
- **AI Agent**: Responde preguntas usando IA entrenada con tus datos


> ¡Has completado la configuración! Ahora puedes empezar a aprovechar todo el potencial de WhatsApp Business API con E-SMART360.

---

### ¿Necesitas ayuda?

Si encuentras algún problema durante la configuración, contáctanos a través de:

- **Soporte técnico**: Abre un ticket en nuestro sistema de soporte
- **Centro de ayuda**: Consulta nuestra base de conocimientos
- **Comunidad**: Únete a nuestro foro para compartir experiencias

---

## Historial de actualizaciones


> **Versión inicial de la guía (Febrero 2026)**
> Guía completa de configuración de WhatsApp Cloud API con E-SMART360. Incluye Embedded Signup, configuración manual, facturación y migración.

## Niveles de mensajería de WhatsApp

WhatsApp clasifica las cuentas en diferentes niveles de mensajería según su uso. Estos niveles determinan cuántos mensajes puedes enviar en un período de 24 horas.

**Los niveles disponibles son:**

| Nivel | Límite de mensajes/24h | Requisitos |
|-------|----------------------|------------|
| Trial | 250 | Cuentas nuevas sin verificar |
| Tier 1 | 1,000 | Verificación básica |
| Tier 2 | 10,000 | Cuenta verificada, calidad buena |
| Tier 3 | 100,000 | Cuenta verificada, calidad alta |
| Tier 4 | 500,000+ | Cuenta verificada, calidad excelente |

**¿Cómo mejorar tu nivel de mensajería?**
1. **Verifica tu empresa** en Meta Business Manager.
2. **Mantén una alta calidad** en tus mensajes (baja tasa de bloqueos).
3. **Aumenta el volumen gradualmente** a medida que crece tu base de contactos.
4. **Monitorea tu calidad** desde el panel de Meta Business Manager.


### ¿Qué afecta la calidad de mi cuenta?

La calidad de tu cuenta se mide mediante la tasa de bloqueos, reportes de spam y retroalimentación de los usuarios. Factores que afectan la calidad:
- Enviar mensajes a contactos que no han dado consentimiento.
- Altas tasas de bloqueo (usuarios que bloquean tu número).
- Contenido marcado como spam por los destinatarios.
- Mensajes con alta frecuencia a usuarios que no interactúan.

## Entendiendo la regla de las 24 horas

WhatsApp tiene una regla fundamental sobre las ventanas de conversación:

- **Ventana de servicio al cliente (24 horas)**: Cuando un cliente te envía un mensaje, se abre una ventana de 24 horas durante la cual puedes responder libremente sin usar una plantilla.
- **Ventana de marketing**: Pasadas las 24 horas, solo puedes enviar mensajes usando plantillas aprobadas. Cada plantilla enviada inicia una nueva ventana de 24 horas.
- **Plantillas de marketing**: Tienen su propia ventana de 24 horas desde el envío de la plantilla.


> **Consejo:** Responde a los mensajes de los clientes dentro de la ventana de 24 horas para ahorrar costos. Una vez que la ventana expira, cualquier mensaje entrante abre una nueva ventana.

## Límites de mensajes y broadcasting

WhatsApp impone límites estrictos en el envío de mensajes comerciales para proteger la experiencia del usuario.

**Límites de broadcasting:**
- **Límite diario**: Determinado por tu nivel de mensajería.
- **Límite por plantilla**: No puedes enviar la misma plantilla a más de un cierto número de contactos por día.
- **Frecuencia**: Evita enviar múltiples mensajes a un mismo contacto en poco tiempo.

**Prácticas recomendadas para broadcasting:**
1. Segmenta tu audiencia antes de enviar campañas.
2. Personaliza los mensajes usando variables ({{1}}, {{2}}, etc.).
3. Incluye siempre una opción para darse de baja.
4. Monitorea las tasas de bloqueo y retroalimentación.
5. No envíes más de un mensaje de marketing por semana al mismo contacto.

## Calidad de la cuenta y su impacto

WhatsApp evalúa constantemente la calidad de tu cuenta mediante:

**Estado de calidad:**
- **Verde**: Calidad buena. Sin restricciones.
- **Amarillo**: Calidad media. Posible restricción de límites.
- **Rojo**: Calidad baja. Restricciones severas o suspensión.

**Cómo mantener una buena calidad:**
- Obtén consentimiento explícito antes de enviar mensajes.
- Evita enviar mensajes a números que no han optado por recibirlos.
- Revisa y ajusta tus estrategias si notas un aumento en bloqueos.
- Utiliza contenido relevante y útil para tus suscriptores.
- Mantén actualizada tu lista de contactos, eliminando inactivos.

## Formatos de medios y límites

WhatsApp API soporta varios tipos de medios con límites específicos:

| Tipo de medio | Tamaño máximo | Formato |
|--------------|--------------|---------|
| Imagen | 5 MB | JPG, PNG |
| Video | 16 MB | MP4 |
| Audio | 16 MB | AAC, AMR |
| Documento | 100 MB | PDF, DOC, XLS |
| Sticker | 100 KB | WebP |


### ¿Cómo enviar imágenes y videos en campañas?

E-SMART360 te permite enviar medios en tus campañas de broadcasting. Puedes:
- Adjuntar una imagen junto con el texto del mensaje.
- Enviar videos promocionales o tutoriales.
- Usar documentos PDF para catálogos o facturas.
- Crear plantillas de medios (carousel) para mostrar múltiples productos.
- El tamaño máximo de archivo varía según el tipo de medio.

## Solución de problemas comunes

Aquí tienes una lista de problemas frecuentes y sus soluciones:


### Error: Bad signature al conectar

Este error indica que el token de acceso no coincide o ha expirado. Soluciones:
1. Regenera el token de acceso permanente en Business Settings.
2. Verifica que el WABA ID sea correcto.
3. Asegúrate de que los permisos del token incluyan WhatsApp business messaging.
4. Comprueba que el usuario del sistema tenga acceso a la aplicación.

### El botón de verificación está gris o no visible

Si el botón Start Verification en Meta Business Manager aparece gris:
1. Asegúrate de haber iniciado sesión como administrador del Business Manager.
2. Verifica que hayas completado todos los campos requeridos de la empresa.
3. Confirma que tu empresa tenga un sitio web y correo corporativo.
4. Si el problema persiste, contacta al soporte de Meta.

### Mi plantilla de mensaje fue rechazada

Las razones más comunes de rechazo:
1. **Contenido engañoso**: Promesas falsas o información incorrecta.
2. **Mayúsculas excesivas**: Evita escribir en mayúsculas sostenidas.
3. **Falta de opción de baja**: Las plantillas de marketing deben incluir cómo darse de baja.
4. **Contenido restringido**: No uses términos prohibidos por Meta.
5. **Formato incorrecto**: Revisa que las variables {{1}}, {{2}} estén bien colocadas.

**Cómo solucionarlo:**
- Revisa las políticas de contenido de Meta.
- Corrige el contenido según las observaciones.
- Vuelve a enviar la plantilla para revisión.

### Mis mensajes no se están enviando

Si los mensajes no se envían, verifica:
1. **Estado de la cuenta**: Revisa si tu cuenta está restringida.
2. **Límite de mensajes**: Puede que hayas alcanzado tu límite diario.
3. **Calidad de la cuenta**: Una calidad baja puede restringir el envío.
4. **Número verificado**: Asegúrate de que tu número esté verificado.
5. **Método de pago**: Confirma que tu método de pago esté activo.
6. **Webhooks**: Verifica que los webhooks estén configurados correctamente.

### Error al verificar el número de teléfono

Si la verificación del número falla:
1. Asegúrate de que el número no esté registrado en otra cuenta de WhatsApp.
2. Verifica que el código de país sea correcto (ej. +34 para España).
3. Intenta con el otro método de verificación (SMS o llamada).
4. Espera 10 minutos y vuelve a intentarlo.
5. Si el problema continúa, contacta al soporte de Meta.

## Cómo contactar al soporte de Meta

Si encuentras problemas que no puedes resolver por tu cuenta, Meta ofrece varios canales de soporte:

1. **Centro de ayuda de Meta Business**: business.facebook.com/help
2. **Soporte en el panel de desarrollador**: developers.facebook.com/community/support/
3. **Foro de desarrolladores**: developers.facebook.com/community/
4. **Soporte directo**: Accesible desde Meta Business Manager > Soporte.

**Consejos para obtener ayuda más rápido:**
- Proporciona capturas de pantalla del error.
- Incluye el ID de tu aplicación y cuenta de WhatsApp.
- Describe los pasos que seguiste antes del error.
- Indica si el problema es constante o intermitente.

## Verificación empresarial de Meta

Para acceder a todas las funcionalidades de WhatsApp Business API, tu empresa necesita estar verificada. El proceso implica:

**Requisitos para la verificación:**
- Documentación legal de la empresa (registro mercantil, licencia, etc.)
- Sitio web corporativo activo
- Correo electrónico con dominio corporativo
- Información de contacto verificable

**Pasos para verificar tu empresa:**
1. Ve a Meta Business Settings > Seguridad > Verificación empresarial.
2. Haz clic en Iniciar verificación.
3. Proporciona la documentación requerida.
4. Espera la revisión de Meta (puede tardar días o semanas).
5. Una vez aprobada, podrás acceder a todas las funcionalidades.


> **Nota:** La verificación empresarial es diferente a la verificación del número de teléfono. La verificación empresarial acredita la existencia legal de tu empresa, mientras que la verificación del número solo confirma que tienes acceso al número.


### ¿Qué hago si mi solicitud de verificación es rechazada?

Si Meta rechaza tu verificación empresarial:
1. Revisa el motivo del rechazo en Business Settings.
2. Corrige la información o documentación proporcionada.
3. Asegúrate de que el nombre legal coincida con los documentos.
4. Vuelve a enviar la solicitud.
5. Si es rechazada nuevamente, contacta al soporte de Meta.

## Cómo solicitar el sello verde de WhatsApp

El sello verde (Official Business Account) es un distintivo que aumenta la confianza de tus clientes. Para solicitarlo:

**Requisitos:**
- Empresa verificada en Meta Business Manager.
- Marca reconocida con presencia establecida.
- Cumplir con las políticas de Meta.
- Tener un perfil comercial completo.

**Proceso de solicitud:**
1. Accede al Administrador de WhatsApp Business.
2. Selecciona tu número de teléfono.
3. Solicita la verificación del sello verde.
4. Espera la revisión de Meta (puede tomar varias semanas).
5. Una vez aprobado, tu nombre de empresa se mostrará con la insignia verde.

## Cómo cambiar la foto de perfil y datos comerciales

Puedes personalizar la apariencia de tu negocio en WhatsApp:

1. Ve al Administrador de WhatsApp Business (business.facebook.com/wa/manage/).
2. Selecciona tu número de teléfono.
3. En la sección de Perfil, puedes modificar:
   - **Foto de perfil**: Imagen representativa de tu negocio.
   - **Nombre de visualización**: El nombre que ven los usuarios.
   - **Descripción**: Información sobre tu negocio.
   - **Sitio web**: URL de tu página web.
   - **Dirección**: Dirección física de tu negocio.
   - **Horario**: Horario de atención.
   - **Correo electrónico**: Email de contacto.

4. Guarda los cambios. La actualización puede tardar unos minutos en reflejarse.


> **Recomendación:** Mantén tu perfil comercial completo y actualizado. Un perfil completo genera más confianza en los clientes y mejora la tasa de respuesta.

## Eliminar un número de teléfono de WhatsApp Business API

Si necesitas eliminar un número de teléfono de tu WhatsApp Business API:

1. Ve a Meta Business Settings > Cuentas > WhatsApp Accounts.
2. Selecciona la cuenta que contiene el número.
3. Ve a la sección de Números de teléfono.
4. Selecciona el número que deseas eliminar.
5. Haz clic en Eliminar y confirma la acción.


> **Advertencia:** Al eliminar un número, perderás el acceso a todas las conversaciones y configuraciones asociadas. Asegúrate de haber respaldado cualquier información importante antes de eliminar.

## Integración con Zapier

E-SMART360 se integra con Zapier para automatizar flujos de trabajo entre aplicaciones. Puedes:

1. **Enviar datos de WhatsApp a otras apps**: Cuando recibes un mensaje, puedes enviar los datos a Google Sheets, CRM, etc.
2. **Recibir datos de otras apps en WhatsApp**: Cuando ocurre un evento en otra aplicación, puedes enviar un mensaje automatizado.
3. **Automatizar respuestas basadas en datos externos**: Usa información de otras apps para personalizar respuestas.

## Catálogo de WhatsApp

El catálogo de WhatsApp te permite mostrar tus productos directamente en la aplicación:

**Ventajas:**
- Los clientes pueden ver productos sin salir de WhatsApp.
- Navegación intuitiva con imágenes, precios y descripciones.
- Posibilidad de compartir productos individuales.
- Integración con el flujo del chatbot para ventas automatizadas.

**Cómo configurar el catálogo:**
1. Desde el panel de E-SMART360, ve a Catálogo de WhatsApp.
2. Conecta tu catálogo de Facebook o crea uno nuevo.
3. Agrega productos con imágenes, precios y descripciones.
4. Activa el catálogo en tu número de WhatsApp.
5. Configura el chatbot para mostrar productos según las consultas.

## Preguntas frecuentes adicionales


### ¿Puedo usar el mismo número en múltiples plataformas?

No. Un número de teléfono solo puede estar asociado a una cuenta de WhatsApp Business API a la vez. No puedes usar el mismo número en E-SMART360 y en otra plataforma simultáneamente.

### ¿Cuánto tiempo tarda la aprobación de una plantilla?

El tiempo de aprobación varía según la categoría y la carga de trabajo de Meta. Las plantillas Utility suelen aprobarse en minutos u horas. Las plantillas Marketing pueden tardar de horas a varios días. Si tu plantilla tarda más de 7 días, contacta al soporte.

### ¿Qué hago si mi cuenta de WhatsApp se desactiva?

Si tu cuenta se desactiva, generalmente es por violación de políticas o calidad baja. Para recuperarla:
1. Revisa el motivo de la desactivación en Meta Business Manager.
2. Apela la decisión proporcionando la documentación requerida.
3. Si la apelación es exitosa, revisa tus prácticas de mensajería.
4. Implementa cambios para evitar futuras desactivaciones.

### ¿Cómo funciona el período de prueba gratuito?

E-SMART360 ofrece un período de prueba gratuito para que explores todas las funcionalidades. Durante la prueba, puedes conectar tu WhatsApp Cloud API y probar el chatbot, broadcasting y otras funciones. No se requiere tarjeta de crédito para comenzar.

### ¿Puedo migrar mi número de un BSP a E-SMART360?

Sí. El proceso implica:
1. Desvincular el número del BSP actual.
2. Verificar que tengas acceso al número.
3. Conectar el número a E-SMART360 usando Embedded Signup o configuración manual.
4. Configurar los webhooks y el token nuevamente.

## Ejemplos de uso con código

A continuación, algunos ejemplos de cómo enviar mensajes usando la API una vez conectada:



### Enviar mensaje de texto

```bash
curl -X POST https://graph.facebook.com/v21.0/PHONE_NUMBER_ID/messages
  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN'
  -H 'Content-Type: application/json'
  -d '{
    "messaging_product": "whatsapp",
    "to": "521234567890",
    "type": "text",
    "text": { "body": "Hola, gracias por contactarnos!" }
  }'
```

### Enviar plantilla

```bash
curl -X POST https://graph.facebook.com/v21.0/PHONE_NUMBER_ID/messages
  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN'
  -H 'Content-Type: application/json'
  -d '{
    "messaging_product": "whatsapp",
    "to": "521234567890",
    "type": "template",
    "template": {
      "name": "bienvenida",
      "language": { "code": "es" }
    }
  }'
```

<Tab title='Enviar imagen'>
```bash
curl -X POST https://graph.facebook.com/v21.0/PHONE_NUMBER_ID/messages
  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN'
  -H 'Content-Type: application/json'
  -d '{
    "messaging_product": "whatsapp",
    "to": "521234567890",
    "type": "image",
    "image": {
      "link": "https://ejemplo.com/imagen.jpg"
    }
  }'
```

> Estos ejemplos usan la API de Meta directamente. E-SMART360 maneja todas estas llamadas automáticamente, pero los ejemplos te ayudan a entender el funcionamiento interno.

## Recursos adicionales

Para profundizar en temas específicos, consulta estos recursos:

| Recurso | Descripción |
|---------|-------------|
| Guía de migración | Cómo migrar un número existente a WhatsApp Cloud API |
| Guía de plantillas | Cómo crear y gestionar plantillas de mensajes |
| Guía de Embedded Signup | Conexión rápida de WhatsApp Business |
| Guía de facturación | Configuración de pagos y costos |
| Tutorial en video | Proceso completo de configuración visual |
| API Reference | Documentación técnica de la API de WhatsApp |

---
