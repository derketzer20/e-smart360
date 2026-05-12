---
title: "Conectar la Aplicación WhatsApp Business a la Cloud API de Meta"
description: "Guía completa para conectar tu número existente de WhatsApp Business App con la plataforma E-SMART360 mediante Embedded Signup y Cloud API, permitiendo automatización de marketing sin perder el uso en tu móvil."
section: "integracion"
order: 173
audience: ["developer"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "conectar-whatsapp-business-app-a-cloud-api-esmart360"
canonicalGroup: "conectar-la-aplicacion-whatsapp-business-a-la-cloud-api-de-meta"
tags: ["integracion"]
staging: true
---
# Conectar la Aplicación WhatsApp Business a la Cloud API de Meta


> **Actualizado:** 19 de junio de 2025 — Meta ahora permite conectar números existentes de WhatsApp Business App a la plataforma empresarial mediante Cloud API, una funcionalidad que antes requería un número nuevo.

En el panorama digital actual, las empresas dependen de WhatsApp Business para interactuar eficientemente con sus clientes. Para facilitar esta integración, **E-SMART360** ahora es compatible con **Embedded Signup** de WhatsApp, lo que permite a las empresas conectar sus cuentas existentes de **WhatsApp Business App** a la plataforma sin complicaciones. Además, E-SMART360 permite aprovechar la **WhatsApp Cloud API** para gestionar tareas de marketing de manera efectiva, **todo mientras continúas usando WhatsApp en tu dispositivo móvil**.


> **Novedad importante:** Anteriormente, las empresas solo podían usar la **Plataforma WhatsApp Business** con un **número de teléfono nuevo**. Sin embargo, Meta ahora permite conectar números existentes de la app WhatsApp Business a la plataforma. Esto significa que puedes usar tu mismo número tanto en tu móvil como en E-SMART360 para gestionar la automatización.

## Entendiendo WhatsApp Business App vs. Plataforma WhatsApp Business

### ¿Qué es WhatsApp Business App?

La **WhatsApp Business App** es una solución móvil diseñada para pequeñas empresas. Se instala en smartphones y permite gestionar consultas de clientes, enviar mensajes y brindar soporte al cliente directamente desde el teléfono.

### ¿Qué es la Plataforma WhatsApp Business?

La **Plataforma WhatsApp Business** (anteriormente solo disponible para integraciones API) es una solución más avanzada para empresas que requieren **automatización, escalabilidad e integraciones mediante API**. Antes de la actualización de Meta, las empresas debían registrar un **número nuevo** para usar esta plataforma, lo que impedía vincularlo a una cuenta existente de WhatsApp Business App.


> **El cambio clave de Meta:** Ahora es posible conectar números existentes de WhatsApp Business App a la Plataforma WhatsApp Business a través de Cloud API. Esto te da tres opciones:
- Usar un **número nuevo** exclusivamente para la plataforma API
- Usar un **número existente** de WhatsApp Business App en la plataforma empresarial
- Usar el **mismo número** tanto en tu **dispositivo móvil** como en **E-SMART360**

## ¿Qué es WhatsApp Embedded Signup?

**WhatsApp Embedded Signup** es un proceso de incorporación optimizado proporcionado por Meta que permite a las empresas **conectar su WhatsApp Business App existente** directamente a la API de WhatsApp Business sin requerir aprobaciones de terceros ni configuraciones manuales extensas.

Con la integración de **E-SMART360**, puedes:


### Conectar sin crear un número nuevo

Víncula tu WhatsApp Business App existente sin necesidad de registrar un número adicional. El proceso de Embedded Signup maneja toda la autenticación a través de Facebook Business Manager.

### Gestionar desde un solo lugar

Administra chats de clientes, envía mensajes automatizados y da seguimiento a análisis desde el panel de E-SMART360, todo centralizado.

### Usar tu móvil en paralelo

Continúa usando tu WhatsApp Business App en tu teléfono mientras aprovechas las potentes herramientas de marketing de E-SMART360 a través de Cloud API.

## Requisitos previos

Antes de comenzar, asegúrate de cumplir con lo siguiente:



### Cuenta y número

- Tener una **WhatsApp Business App existente** (no un número personal de WhatsApp) O un número nuevo listo para la plataforma empresarial.
- El número de teléfono debe ser **elegible** para incorporación (no debe estar vinculado a otra cuenta API de WhatsApp, a menos que estés migrando desde Business App).

### Acceso administrativo

- Tener **acceso de administrador** a la Cuenta de WhatsApp Business en Facebook Business Manager.
- Tener una cuenta activa en E-SMART360.
- (Opcional) Tener un Facebook Business Manager configurado.

## Guía paso a paso para conectar WhatsApp Business App a E-SMART360

### Paso 1: Navegar a la integración de WhatsApp en E-SMART360

1. Inicia sesión en tu panel de **E-SMART360**.
2. Ve a la sección **WhatsApp > Conectar cuenta**.
3. Haz clic en el botón **"Conectar WhatsApp"**.


> Muchos usuarios se refieren a este proceso como **"Escaneo QR para conectar WhatsApp"**, ya que permite una autenticación rápida. Con E-SMART360, ya sea que conectes un número nuevo o una cuenta existente de WhatsApp Business App, la integración se realiza mediante **Embedded Signup de Meta y Cloud API**.

### Paso 2: Iniciar el flujo de Embedded Signup

1. Haz clic en el botón **"Continuar con Facebook"**.
2. Inicia sesión en tu cuenta de **Facebook Business Manager**.
3. Selecciona la **Cuenta de WhatsApp Business** existente que deseas conectar.
4. Escoge el número de teléfono asociado a tu negocio.
5. Acepta los **permisos** y **términos de servicio** necesarios.



### Nueva cuenta

Si no tienes un Facebook Business Manager, el sistema te guiará para crear uno durante el proceso. WhatsApp Embedded Signup maneja automáticamente la creación de los recursos necesarios.

### Cuenta existente

Si ya tienes un Business Manager, verás el nombre legal de tu negocio. Si eres administrador, puedes proceder; si no, la opción aparecerá deshabilitada.

### Paso 3: Seleccionar o crear WABA y perfil

Tienes tres opciones al llegar a esta pantalla:



### Crear nuevo WABA y perfil

Si empiezas desde cero, ingresa todos los detalles necesarios, incluyendo nombre comercial y categoría. El campo de sitio web es opcional.

### WABA existente + nuevo perfil

Si ya tienes una Cuenta de WhatsApp Business (WABA), puedes crear simplemente un nuevo perfil de teléfono aquí.

### WABA y perfil existentes

Si ya tienes tanto WABA como perfil, los detalles se mostrarán sin posibilidad de edición. Puedes modificarlos después desde WhatsApp Manager.

### Paso 4: Crear el perfil de WhatsApp Business

Al configurar tu perfil empresarial, deberás proporcionar:

- **Nombre de la cuenta comercial**: El nombre oficial de tu negocio. Aparecerá en todas tus comunicaciones.
- **Nombre para mostrar**: Cómo te reconocerán tus clientes en WhatsApp. Debe coincidir con tu negocio o ser fácilmente identificable.


> **Importante sobre el nombre para mostrar:**
Debes incluir el **nombre de tu empresa** para fines de verificación. Si deseas usar tu **marca**, el formato debe ser:

**"Nombre de Marca" por "Nombre de Empresa"**

Por ejemplo, si tu empresa es **XYZ Pvt Ltd** y quieres usar tu marca **SuperTech**, el nombre debe ser:

**"SuperTech by XYZ Pvt Ltd"**

Esto asegura que tu nombre cumpla con las directrices de WhatsApp y aumenta la probabilidad de aprobación.

- **Categoría**: Selecciona la categoría que mejor describa tu negocio. Esto ayuda a WhatsApp a identificar el tipo de negocio y proporciona contexto a tus clientes.

### Paso 5: Verificar tu número de teléfono

1. Ingresa el número de teléfono que deseas conectar.
2. WhatsApp enviará un código de verificación mediante **SMS o llamada**.
3. Ingresa este código para verificar tu número.


> Solo necesitas el chip SIM para la verificación OTP; no necesitas un teléfono nuevo a menos que también quieras recibir llamadas en ese número. El número debe ser **nuevo** y no debe estar vinculado actualmente a WhatsApp o WhatsApp Business App.

### Paso 6: Revisar permisos

Se te solicitará revisar los permisos que WhatsApp requiere para tu negocio. Estos son permisos estándar que no se pueden modificar. Haz clic en **"Continuar"** para aceptarlos y proceder.

### Paso 7: Habilitar WhatsApp Cloud API para marketing

Una vez conectado, **E-SMART360 se integrará con la WhatsApp Cloud API** y podrás:


### Automatizar respuestas al cliente

Configura chatbots inteligentes que respondan automáticamente a preguntas frecuentes, consultas de productos y solicitudes de soporte, las 24 horas del día.

### Crear campañas de marketing

Diseña y ejecuta campañas de mensajería masiva en WhatsApp para promociones, lanzamientos de productos y comunicaciones estacionales.

### Configurar notificaciones promocionales

Programa recordatorios de carritos abandonados, confirmaciones de pedidos, actualizaciones de envío y notificaciones de seguimiento post-venta.

### Usar WhatsApp en tu móvil simultáneamente

Continúa usando WhatsApp Business App en tu dispositivo móvil mientras gestionas tareas avanzadas de marketing en E-SMART360. Ambas plataformas funcionan en paralelo sin conflictos.

## Sincronizar contactos antiguos e historial de chat

Una vez que hayas conectado tu número de WhatsApp Business, tienes la opción de sincronizar tus contactos anteriores y el historial de conversaciones. Esto garantiza que las interacciones existentes con clientes sean accesibles dentro de E-SMART360.

Para hacerlo, haz clic en el botón **"Obtener contactos e historial"**.


> **Importante:** Esta opción de sincronización solo está disponible dentro de las primeras **24 horas** después de conectar tu número. Después de ese período, la sincronización no se puede habilitar. Asegúrate de realizarla inmediatamente después de la conexión.

## Agregar método de pago

Meta cobra por cada conversación de WhatsApp Business API. Sin un método de pago configurado, los mensajes salientes serán rechazados. Los pagos van directamente a Meta, no a E-SMART360.

1. Ve al "Panel de conexión" y haz clic en "Administrar".
2. En WhatsApp Manager, haz clic en "Agregar método de pago".
3. Ingresa los datos de tu tarjeta de crédito o débito.
4. Confirma la información y actualiza la página para verificar que se haya agregado.


> E-SMART360 no aplica recargos adicionales sobre los costos de conversación de WhatsApp. Lo que pagas a Meta por las conversaciones es exactamente lo que se factura, sin márgenes adicionales.

## Completar información del negocio

1. En WhatsApp Manager, haz clic en "Agregar información".
2. Completa los detalles de tu negocio: dirección, sitio web, descripción y cualquier información adicional que los clientes puedan necesitar.
3. Haz clic en "Guardar".

## Solicitar el sello verde de verificación (Opcional)

El sello verde (Green Tick) significa verificación oficial por parte de Meta y aumenta la confianza del cliente en tu negocio.

### Requisitos previos

- Verificación empresarial completada.
- Autenticación de dos factores configurada.
- Nombre para mostrar aprobado.

### Pasos

1. En WhatsApp Manager, haz clic en "Enviar solicitud".
2. Proporciona enlaces de relaciones públicas o cobertura mediática sobre tu negocio.
3. Envía la solicitud para revisión de Meta.


> Si tu negocio no es ampliamente conocido o carece de presencia mediática, tu solicitud podría ser rechazada. Meta evalúa cada solicitud basándose en la visibilidad y legitimidad de la marca.

## Problemas comunes y solución de problemas


### El número de teléfono no es elegible para incorporación

**Causa:** El número ya está en uso con otra API de WhatsApp o cuenta personal de WhatsApp.

**Solución:** Elimina el número de la cuenta anterior y espera al menos 10 minutos antes de reintentar. Si el número está registrado en WhatsApp, deberás eliminarlo de WhatsApp (esto borrará los chats a menos que tengas una copia de seguridad).

### El botón 'Iniciar verificación' de Facebook está atenuado o no es visible

**Causa:** Generalmente ocurre cuando no se han completado todos los pasos previos de configuración empresarial.

**Solución:** Asegúrate de haber completado la verificación del negocio en Facebook Business Manager. Revisa que tu perfil empresarial tenga toda la información requerida y que el método de pago esté configurado correctamente.

### Mensajes que no se envían

**Causa:** Puede deberse a falta de método de pago, límites de mensajería alcanzados, o plantillas no aprobadas.

**Solución:** Verifica que el método de pago esté activo, revisa los límites de mensajería de tu cuenta, y asegúrate de que las plantillas de mensajes estén aprobadas por Meta. Consulta la guía de solución de problemas de mensajes para más detalles.

### Error 'número ya registrado'

**Causa:** El número está vinculado a otra cuenta de WhatsApp o WhatsApp Business API.

**Solución:** Asegúrate de que el número se haya eliminado completamente de WhatsApp o se haya migrado a un número nuevo. Espera al menos 10 minutos después de la eliminación antes de intentar la conexión nuevamente.

### ¿Puedo responder mensajes desde E-SMART360 y desde la app móvil?

Sí, puedes responder mensajes desde ambas plataformas. Los chats se mantienen sincronizados en tiempo real. Sin embargo, para la automatización del chatbot y las campañas de mensajes, se recomienda gestionar las respuestas a través de E-SMART360 para mantener la coherencia de las automatizaciones.

## Preguntas frecuentes


### Si envío un mensaje desde la aplicación móvil de WhatsApp Business, ¿estará disponible en la bandeja de entrada de E-SMART360?

Sí, cualquier mensaje enviado desde la aplicación móvil de WhatsApp Business también estará disponible en la bandeja de entrada de E-SMART360. El chat permanece sincronizado entre ambas plataformas en tiempo real, lo que garantiza que no pierdas el hilo de ninguna conversación, independientemente del dispositivo desde el que respondas.

### Cuando conecto mi número de WhatsApp Business a E-SMART360, ¿se sincronizarán mis contactos antiguos y mi historial de chat?

Sí, tienes la opción de sincronizar tus contactos existentes y el historial de conversaciones al conectar tu número de WhatsApp Business a E-SMART360. Sin embargo, esta opción solo está disponible dentro de las primeras 24 horas después de la conexión. Pasado ese tiempo, la sincronización ya no será posible. Te recomendamos realizar este paso inmediatamente después de conectar tu número para no perder datos valiosos de tus interacciones con clientes.

### ¿Puedo programar mensajes o enviar campañas masivas con E-SMART360?

Sí, E-SMART360 te permite programar mensajes y enviar campañas masivas a tus suscriptores, respetando las reglas de mensajería de WhatsApp y los límites de tu plan. Puedes establecer fechas y horas específicas para el envío, segmentar tu audiencia por etiquetas o campos personalizados, y dar seguimiento al rendimiento de cada campaña mediante análisis detallados.

### Si desinstalo la aplicación WhatsApp Business de mi teléfono, ¿E-SMART360 seguirá funcionando?

Sí, E-SMART360 continuará funcionando de forma independiente, ya que opera a través de la WhatsApp Cloud API. La plataforma no depende de la aplicación móvil para funcionar. Si reinstalas la aplicación y la usas junto con E-SMART360, los mensajes seguirán sincronizándose entre ambas plataformas sin problemas.

### ¿Mi chatbot manejará todos los mensajes automáticamente?

Sí, el chatbot manejará los mensajes según los flujos predefinidos que hayas configurado. Sin embargo, siempre puedes tomar el control manual de una conversación desde la bandeja de entrada de E-SMART360 cuando sea necesario. Esto te permite intervenir en casos complejos que requieran atención personalizada, mientras el chatbot se encarga de las consultas rutinarias.

### ¿Recibiré notificaciones de nuevos mensajes en E-SMART360?

Sí, E-SMART360 proporciona notificaciones en tiempo real para nuevos mensajes, lo que garantiza que no te pierdas ninguna consulta de clientes. Puedes configurar alertas dentro de la plataforma y también recibir notificaciones a través de los canales que prefieras para mantenerte al tanto incluso cuando no estés en el panel principal.

## Ejemplos prácticos y casos de uso



### Tienda de comercio electrónico

Una tienda de ropa online conectó su número de WhatsApp Business App a E-SMART360. Ahora pueden:
- Enviar confirmaciones de pedido automáticas
- Recordar carritos abandonados con ofertas personalizadas
- Gestionar consultas de clientes desde un solo panel
- Programar campañas semanales de nuevas colecciones

**Resultado:** Aumento del 35% en recuperación de carritos abandonados y reducción del 50% en tiempo de respuesta al cliente.

### Agencia de servicios profesionales

Una agencia de marketing digital migró su número comercial a E-SMART360 para:
- Automatizar la captación de leads mediante chatbots con palabras clave
- Enviar presupuestos automatizados en segundos
- Coordinar el equipo de ventas desde la bandeja de entrada compartida
- Programar recordatorios de citas y seguimientos

**Resultado:** Triplicaron los leads calificados mensuales y redujeron en un 60% las tareas repetitivas del equipo.

## Diferencias clave: App Móvil vs. Plataforma Cloud API



### WhatsApp Business App (Móvil)

**Ideal para:** Pequeña escala, comunicación simple con clientes.
- Sin capacidad de automatización avanzada
- Sin mensajería masiva
- Gestión manual de conversaciones
- Sin análisis ni reportes avanzados
- Máximo 1-2 agentes manejando chats

### WhatsApp Cloud API (E-SMART360)

**Ideal para:** Empresas que necesitan automatización y escalabilidad.
- Automatización con chatbots inteligentes
- Campañas de mensajería masiva
- Mensajes transaccionales automatizados
- Análisis y reportes detallados
- Equipos multiagente con bandeja compartida
- Integración con CRM y otras herramientas

## ¿Por qué elegir E-SMART360 para tu marketing en WhatsApp?


> E-SMART360 te ofrece una plataforma completa de automatización de WhatsApp Business sin la complejidad técnica de gestionar la API directamente. Conecta tu número existente y comienza a automatizar en minutos.

- **Integración sin complicaciones** — Sin necesidad de programación. Registro directo con tu WhatsApp Business App existente.
- **Soporte completo de WhatsApp Cloud API** — Accede a funciones avanzadas de mensajería y automatización.
- **Automatización de marketing y chatbots** — Configura interacciones impulsadas por IA con tus clientes.
- **Funciones de campañas y notificaciones** — Involucra a tus clientes con campañas de marketing en WhatsApp.
- **Usa WhatsApp en tu móvil** — Continúa usando WhatsApp Business App en tu teléfono mientras aprovechas las funciones API avanzadas de E-SMART360.
- **Panel de control fácil de usar** — Gestiona conversaciones, análisis y automatización desde un solo lugar.
- **Sin recargos ocultos** — Pagas directamente a Meta por las conversaciones, sin márgenes adicionales de E-SMART360.

## Próximos pasos después de la conexión

Una vez que hayas conectado exitosamente tu número, te recomendamos:


### Configurar tu primer chatbot

Crea flujos de conversación automatizados para preguntas frecuentes, captación de leads o soporte al cliente básico. Define palabras clave y respuestas automáticas.

### Importar tus contactos

Utiliza la opción de sincronización (disponible dentro de las primeras 24 horas) para importar contactos e historial. También puedes importar contactos manualmente o mediante archivo CSV.

### Configurar tu primera campaña

Diseña y programa tu primera campaña de mensajes masivos. Segmenta tu audiencia y personaliza los mensajes con variables dinámicas.

### Explorar integraciones

Conecta E-SMART360 con tus herramientas existentes: Google Sheets, WooCommerce, Shopify, Zapier y más para automatizar flujos de trabajo completos.


> ¿Listo para comenzar? Regístrate en E-SMART360 e integra tu WhatsApp Business App con Cloud API hoy mismo. Nuestro equipo de soporte está disponible para ayudarte en cada paso del proceso.

## Nota sobre limitaciones geográficas

Existen algunas limitaciones por país para la incorporación de usuarios de WhatsApp Business App. Consulta la [documentación oficial de Meta para desarrolladores](https://developers.facebook.com/docs/whatsapp/embedded-signup/custom-flows/onboarding-business-app-users/) para obtener información actualizada sobre la disponibilidad en tu región.


### ¿Necesito un número de teléfono completamente nuevo?

No necesariamente. Si ya tienes una WhatsApp Business App, Meta ahora permite conectar ese mismo número a la Cloud API a través de Embedded Signup. Esto significa que puedes usar el mismo número tanto en tu móvil como en E-SMART360. Solo necesitarás un número nuevo si tu número actual ya está vinculado a otra cuenta de API de WhatsApp.

### ¿Puedo usar el mismo número en varios dispositivos móviles?

WhatsApp Business App solo se puede usar en un dispositivo móvil a la vez. Sin embargo, al conectar tu número a E-SMART360 a través de Cloud API, puedes gestionar las conversaciones desde múltiples dispositivos (web, móvil, tablet) a través de la bandeja de entrada compartida de E-SMART360, mientras mantienes la app móvil activa en tu teléfono principal.

---

## Migración desde otra aplicación de WhatsApp

Si actualmente usas WhatsApp en otra plataforma o la aplicación estándar de WhatsApp y deseas migrar a E-SMART360, el proceso es sencillo pero requiere atención a ciertos detalles.

### Migrar desde WhatsApp Personal a WhatsApp Business API

1. **Realiza una copia de seguridad** de tus chats en WhatsApp (Google Drive o iCloud).
2. **Desinstala o elimina** el número de WhatsApp personal.
3. **Espera al menos 10 minutos** para que Meta procese la eliminación.
4. **Inicia el proceso de conexión** en E-SMART360 mediante Embedded Signup.
5. **Verifica el número** con el código OTP enviado por SMS o llamada.
6. **El número quedará asociado** a tu nueva cuenta de WhatsApp Business API.

### Migrar desde WhatsApp Business App a Cloud API

Si ya usas WhatsApp Business App en tu móvil y quieres migrar a la Cloud API:

1. **Asegúrate de tener el número correcto** registrado en WhatsApp Business App.
2. **Inicia sesión en E-SMART360** y ve a WhatsApp > Conectar cuenta.
3. **Selecciona "Continuar con Facebook"** e inicia el flujo de Embedded Signup.
4. **Selecciona tu WhatsApp Business Account (WABA)** existente.
5. **Selecciona el número** que ya usas en tu móvil.
6. **Acepta los permisos** y completa la verificación.


> **Ventaja clave:** A diferencia de los métodos anteriores, ahora puedes mantener activa tu WhatsApp Business App en el móvil mientras usas la Cloud API a través de E-SMART360. Ambas coexisten sin problemas.

### Migrar desde otro Proveedor de Soluciones Empresariales (BSP)

Si vienes de otra plataforma como otra plataforma, Twilio, MessageBird u otro BSP:

1. **Solicita la migración del número** en tu BSP actual. El proceso puede tardar entre 24 y 72 horas.
2. **Confirma que el número esté liberado** antes de iniciar la conexión en E-SMART360.
3. **Inicia el proceso de Embedded Signup** en E-SMART360 con tu número liberado.
4. **Verifica el número** con el código OTP.
5. **Configura tu nuevo perfil** en E-SMART360 con los detalles de tu negocio.


> Durante el proceso de migración entre BSP, tu número podría experimentar una interrupción temporal en el servicio. Planifica la migración en un horario de bajo volumen de mensajes para minimizar el impacto en tus clientes.

## Gestión avanzada del perfil de WhatsApp

Una vez conectado, puedes personalizar y gestionar múltiples aspectos de tu perfil de WhatsApp Business:

### Cambiar foto de perfil, descripción y sitio web

1. En **WhatsApp Manager**, busca tu número conectado en la sección "Administrar".
2. Actualiza la **foto de perfil** con el logo de tu empresa.
3. Edita la **descripción** del negocio (máximo 512 caracteres).
4. Agrega o modifica tu **dirección** y **sitio web**.
5. Añade cualquier **detalle adicional** que los clientes puedan necesitar.

### Configurar la autenticación de dos factores (2FA)

La autenticación de dos factores es un requisito de seguridad obligatorio para usar WhatsApp Business API:

1. En WhatsApp Manager, ve a **Configuración de seguridad**.
2. Activa la **verificación en dos pasos**.
3. Establece un **código PIN de 6 dígitos**.
4. Opcionalmente, agrega un **correo electrónico de recuperación**.


> La autenticación de dos factores es obligatoria para solicitar el sello verde de verificación y para acceder a niveles superiores de mensajería.

## Comprensión de los límites de mensajería

### Niveles de mensajería de WhatsApp

WhatsApp clasifica las cuentas en diferentes niveles según su volumen y calidad de mensajería:

| Nivel | Límite de marketing por día | Límite de conversaciones | Requisitos |
|-------|------------------------------|--------------------------|------------|
| **Pr Fig** | 1,000 | 10,000 | Calidad media-alta |
| **Nivel 1** | 10,000 | 100,000 | Calidad alta |
| **Nivel 2** | 100,000 | 1,000,000 | Calidad alta sostenida |
| **Nivel 3** | Ilimitado | Ilimitado | Calidad alta y aprobación especial |

### Cómo mejorar tu nivel de mensajería

1. **Mantén una alta calificación de calidad** (verde).
2. **Responde rápidamente** a los mensajes de los clientes.
3. **Minimiza los bloqueos** y reportes de spam.
4. **Usa plantillas aprobadas** para mensajes de marketing.
5. **Respeta la regla de 24 horas** para conversaciones iniciadas por el cliente.


> Puedes monitorear tu calificación de calidad y límites actuales directamente desde el panel de WhatsApp Manager o desde la sección de análisis de E-SMART360.

### Regla de las 24 horas

WhatsApp permite a las empresas enviar mensajes de marketing y conversaciones iniciadas por la empresa dentro de una ventana de 24 horas después del último mensaje del cliente. Si un cliente te envía un mensaje, tienes 24 horas para responder dentro de la ventana de servicio al cliente (conversación de servicio). Para iniciar una conversación después de ese período, debes usar una **plantilla de mensaje aprobada**.



### Conversaciones iniciadas por el cliente

- Ventana de 24 horas para respuesta de servicio
- Sin límite de mensajes dentro de la ventana
- Tarifa por conversación de servicio
- Se puede responder con cualquier contenido

### Conversaciones iniciadas por la empresa

- Requieren plantilla de mensaje aprobada
- Ventana de 24 horas desde el primer mensaje
- Tarifa por conversación de marketing/utilidad
- Límite según nivel de mensajería

## Tipos de mensajes y plantillas

### Mensajes de marketing

Utilizados para promociones, ofertas y contenido publicitario. **Deben usar una plantilla aprobada por Meta**.

### Mensajes de utilidad

Para confirmaciones de pedidos, actualizaciones de envío, notificaciones de cuenta y recordatorios de citas. **Requieren plantilla aprobada**.

### Mensajes de servicio

Respuestas a consultas de clientes dentro de la ventana de 24 horas. **No requieren plantilla**.

### Mensajes de autenticación

Códigos de verificación y autenticación de un solo uso (OTP). **Requieren plantilla específica**.

## Cómo crear una plantilla de mensaje en E-SMART360

1. Ve a la sección **Plantillas de mensajes** en el panel de E-SMART360.
2. Haz clic en **"Crear plantilla"**.
3. Selecciona la **categoría**: Marketing, Utilidad o Autenticación.
4. Elige el **idioma** de la plantilla.
5. Redacta el **contenido del mensaje** con formato de texto, emojis y variables.
6. Agrega **botones** si es necesario (CTA, llamada telefónica, URL dinámica).
7. Envía la plantilla para **revisión de Meta**.


> Las plantillas de marketing y utilidad deben ser **aprobadas por Meta** antes de poder usarse. El proceso de revisión puede tardar desde unas horas hasta varios días. Las razones comunes de rechazo incluyen: contenido engañoso, faltas de ortografía, formato incorrecto y falta de claridad en el propósito del mensaje.

### Consejos para evitar el rechazo de plantillas

1. **Sé claro y directo** en el propósito del mensaje.
2. **Usa lenguaje profesional** sin errores ortográficos.
3. **Incluye información de la empresa** en el pie del mensaje.
4. **No uses mayúsculas excesivas** ni múltiples signos de exclamación.
5. **Asegúrate de que los botones CTA** dirijan a URLs válidas y relevantes.
6. **Proporciona una opción para darse de baja** en mensajes de marketing.

## Entendiendo las calificaciones de calidad de WhatsApp

WhatsApp evalúa la calidad de tu cuenta basándose en:

- **Bloqueos:** Cuántos usuarios bloquean tus mensajes.
- **Reportes:** Cuántos usuarios reportan tus mensajes como spam.
- **Respuestas:** Tasa de respuesta y engagement de los usuarios.

### Estados de calificación

| Estado | Color | Significado |
|--------|-------|-------------|
| **Alta** | Verde | Funcionamiento normal, sin restricciones |
| **Media** | Amarillo | Posible límite reducido, monitoreo necesario |
| **Baja** | Rojo | Límite significativamente reducido, riesgo de desactivación |

### Cómo mantener una calificación alta

- **Segmenta tu audiencia** antes de enviar campañas masivas.
- **Personaliza los mensajes** con el nombre del destinatario.
- **Evita enviar mensajes** a números que no hayan optado por recibirlos.
- **Monitorea las tasas de bloqueo** y ajusta tu estrategia.
- **Usa la opción "No Match Reply"** para evitar respuestas automáticas a consultas no reconocidas.


> E-SMART360 proporciona herramientas integradas para monitorear tu calificación de calidad y te alerta si detecta una disminución que pueda afectar tus límites de mensajería.

## Límites de transmisión y broadcast

### Límites diarios por nivel

- **Pr Prueba:** 250 conversaciones al día
- **Nivel 1:** 1,000 conversaciones al día
- **Nivel 2:** 10,000 conversaciones al día
- **Nivel 3:** 100,000+ conversaciones al día

### Reglas de broadcasting en WhatsApp

1. **No puedes** enviar mensajes masivos a números que no hayan optado por recibirlos.
2. **Debes usar plantillas aprobadas** para mensajes de marketing.
3. **La frecuencia de envío** está limitada según tu nivel de mensajería.
4. **Los mensajes con imágenes o videos** tienen límites de tamaño específicos.
5. **Respeta los husos horarios** de tus destinatarios.

### Límites de tamaño para medios

| Tipo de medio | Tamaño máximo |
|---------------|---------------|
| Imagen | 5 MB |
| Video | 16 MB |
| Documento | 100 MB |
| Audio | 16 MB |

## Configuración de respuestas automáticas y frecuencia

### Respuesta "Sin coincidencia" (No Match Reply)

Configura una respuesta predeterminada para cuando un usuario envía un mensaje que no coincide con ninguna palabra clave o flujo configurado en tu chatbot:

1. Ve a la sección **Bot Manager** en E-SMART360.
2. Selecciona **"No Match Reply"**.
3. Redacta un mensaje genérico como: *"Gracias por contactarnos. Por favor, escribe 'Ayuda' para ver nuestras opciones disponibles."*
4. Configura la **frecuencia**: ¿cada cuánto tiempo se envía esta respuesta al mismo usuario?


> Recomendamos establecer un límite de frecuencia para la respuesta "Sin coincidencia" (por ejemplo, una vez cada 24 horas por usuario) para evitar molestar al cliente con mensajes repetitivos.

### Configuración de frecuencia de mensajes

E-SMART360 te permite controlar la frecuencia con la que tus chatbots envían mensajes a los usuarios:

- **Frecuencia por usuario:** Define el intervalo mínimo entre mensajes al mismo contacto.
- **Frecuencia global:** Limita el número total de mensajes automáticos por hora.
- **Horario de silencio:** Configura horas en las que el chatbot no debe enviar mensajes.

## Integración con Facebook Business Manager

### Crear una cuenta de Facebook Business Manager

Si aún no tienes una cuenta de Business Manager:

1. Ve a [business.facebook.com](https://business.facebook.com/overview).
2. Haz clic en **"Crear cuenta"**.
3. Ingresa el **nombre de tu negocio**, tu **nombre** y tu **correo electrónico**.
4. Completa la **información empresarial** requerida.
5. Confirma tu cuenta mediante el correo de verificación.

### Verificar tu Business Manager

La verificación empresarial es necesaria para acceder a funciones avanzadas:

1. En Business Manager, ve a **Configuración empresarial > Seguridad > Verificación empresarial**.
2. Haz clic en **"Iniciar verificación"**.
3. Selecciona tu **país** y el **tipo de documento** legal.
4. Sube la **documentación requerida** (registro mercantil, identificación fiscal, etc.).
5. Espera la **revisión de Meta** (puede tardar varios días).


> Si el botón "Iniciar verificación" está atenuado o no aparece, asegúrate de que tu perfil empresarial esté completo y que hayas agregado un método de pago. También verifica que tu negocio no haya alcanzado el límite de cuentas de Business Manager permitidas.

## Caso de uso avanzado: Automatización de ventas con secuencias

### Secuencia de ventas automatizada

Puedes configurar una secuencia de ventas completa que se active automáticamente cuando un cliente muestra interés:

1. **Mensaje inicial:** *"¡Gracias por tu interés en [Producto]! ¿Te gustaría recibir más información?"*
2. **Seguimiento día 1:** *"Aquí tienes un enlace con los detalles y precios de [Producto]."*
3. **Seguimiento día 3:** *"¿Has tenido oportunidad de revisar la información? Estoy aquí para resolver tus dudas."*
4. **Seguimiento día 7:** *"Por tiempo limitado, tenemos un descuento especial del 10% en [Producto]. ¿Te interesa?"*
5. **Oferta final día 14:** *"Esta es tu última oportunidad para aprovechar el descuento. ¡No dejes pasar esta oferta!"*


> Las secuencias de ventas automatizadas pueden aumentar significativamente tus tasas de conversión. E-SMART360 permite pausar la secuencia si el cliente responde en cualquier momento, permitiendo una transición suave a atención personalizada.

## Eliminación de número en Meta

Si necesitas eliminar tu número de teléfono de Meta por cualquier motivo:

1. Ve a **WhatsApp Manager** en Facebook Business Manager.
2. Selecciona el **número que deseas eliminar**.
3. Haz clic en **"Eliminar número"**.
4. Confirma la eliminación (esto desvinculará el número de la API).
5. El número quedará disponible para su uso en otra plataforma después de un período de espera.


> **Advertencia:** Eliminar un número de WhatsApp Manager borrará permanentemente todos los datos de conversaciones asociados a ese número. Asegúrate de haber respaldado cualquier información importante antes de proceder.

## Enlaces útiles para la configuración de WhatsApp Business API

| Recurso | Descripción |
|---------|-------------|
| WhatsApp Manager | Panel de administración de WABA y números |
| Facebook Business Manager | Gestión de cuentas empresariales |
| Meta Business Partner Directory | Busca socios verificados de Meta |
| Documentación para desarrolladores | API de WhatsApp Cloud, Embedded Signup |
| Soporte de Meta para empresas | Asistencia para problemas de API |

## Ejemplo práctico: Recuperación de carritos abandonados en comercio electrónico



### Flujo automatizado de recuperación

**Paso 1:** Cliente agrega productos al carrito pero no completa la compra.

**Paso 2:** WooCommerce/Shopify envía webhook a E-SMART360 con datos del carrito.

**Paso 3:** Se activa flujo automatizado:
1. **Mensaje inmediato:** "¡Hola [Nombre]! Vimos que dejaste [Producto] en tu carrito. ¿Necesitas ayuda con la compra?"
2. **Recordatorio (4h):** "Tu carrito con [Producto] sigue esperándote. ¡Finaliza tu compra aquí! [Enlace]"
3. **Oferta especial (24h):** "Como cortesía, aquí tienes un código de descuento del 10%: BIENVENIDO10"

**Paso 4:** Si el cliente responde, el chatbot lo guía para completar la compra o lo transfiere a un agente.

### Configuración técnica

1. Integra tu tienda (WooCommerce/Shopify) con E-SMART360.
2. Crea un webhook para eventos de "carrito abandonado".
3. Configura una plantilla de mensaje para el recordatorio inicial.
4. Diseña el flujo del chatbot con escenarios de respuesta.
5. Programa los intervalos de seguimiento.
6. Activa la integración y monitorea los resultados.

**Métrica clave:** Tasa de recuperación de carritos. Un flujo bien optimizado puede recuperar entre un 15% y un 30% de las ventas perdidas.

## Preguntas frecuentes adicionales


### ¿Qué sucede si alcanzo mi límite de mensajería diario?

Cuando alcanzas tu límite diario de mensajes, WhatsApp detiene automáticamente el envío de mensajes de marketing hasta que se reinicie el contador (normalmente al día siguiente). Los mensajes de servicio (respuestas dentro de la ventana de 24 horas) no se ven afectados por este límite. Para aumentar tu límite, debes mantener una calificación de calidad alta y solicitar una actualización de nivel en WhatsApp Manager. E-SMART360 te notificará cuando te estés acercando a tu límite diario.

### ¿Puedo tener múltiples números de WhatsApp conectados a una sola cuenta de E-SMART360?

Sí, E-SMART360 es compatible con múltiples números de WhatsApp conectados a una sola cuenta. Esto es especialmente útil para empresas que operan en diferentes regiones, tienen múltiples marcas, o necesitan separar departamentos (ventas, soporte, marketing). Cada número puede tener su propio perfil, chatbot y configuración independiente, mientras gestionas todo desde un solo panel de control.

### ¿Cómo maneja E-SMART360 la regla de 24 horas de WhatsApp?

E-SMART360 gestiona automáticamente la ventana de 24 horas para ti. Cuando un cliente te envía un mensaje, se abre una ventana de servicio de 24 horas durante la cual puedes responder sin restricciones. Si necesitas enviar un mensaje después de que la ventana haya expirado, E-SMART360 te guiará para usar una plantilla de mensaje aprobada. El sistema también te muestra el tiempo restante en la ventana actual para cada conversación activa.

### ¿E-SMART360 cobra algún recargo adicional sobre las tarifas de conversación de WhatsApp?

No. E-SMART360 no aplica ningún recargo adicional sobre las tarifas de conversación que cobra Meta. Los pagos por conversaciones se realizan directamente a Meta a través de tu método de pago configurado en WhatsApp Manager. E-SMART360 cobra únicamente por el uso de la plataforma (según el plan que hayas elegido), sin márgenes ocultos sobre los costos de API de WhatsApp. Esto te permite mantener un control total sobre tus costos operativos.

### ¿Qué tipos de archivos puedo enviar a través de WhatsApp usando E-SMART360?

WhatsApp Business API admite varios tipos de archivos: imágenes (JPG, PNG) hasta 5 MB, videos (MP4, 3GPP) hasta 16 MB, documentos (PDF, DOCX, XLSX, PPTX) hasta 100 MB, y audio (AAC, MP4, AMR) hasta 16 MB. E-SMART360 te permite incluir estos archivos en tus mensajes automatizados, campañas masivas y respuestas de chatbot, siempre que cumplas con los límites de tamaño establecidos por WhatsApp.

### ¿Puedo programar mensajes para enviarlos en una fecha futura?

Sí, E-SMART360 incluye una función completa de programación de mensajes. Puedes redactar tus campañas con anticipación, seleccionar la fecha y hora exacta de envío, y la plataforma se encargará de entregar los mensajes en el momento programado. También puedes configurar campañas recurrentes (semanales, mensuales) y ajustar las zonas horarias de tus destinatarios para garantizar que los mensajes lleguen en el momento óptimo.

### ¿Qué debo hacer si mi solicitud de verificación empresarial es rechazada?

Si tu solicitud de verificación empresarial es rechazada por Meta, revisa los siguientes puntos: (1) Los documentos proporcionados deben coincidir exactamente con el nombre legal de tu empresa registrado. (2) Asegúrate de que los documentos estén vigentes y no hayan expirado. (3) Verifica que el país seleccionado coincida con el de tu registro empresarial. (4) El nombre para mostrar debe incluir el nombre legal de la empresa. Puedes volver a solicitar la verificación después de corregir los problemas identificados. Para más ayuda, contacta al soporte de Meta Business.

## Conclusión

Conectar tu WhatsApp Business App a la Cloud API a través de E-SMART360 es más sencillo que nunca gracias a Embedded Signup de Meta. Ya no necesitas un número nuevo ni sacrificar el uso de WhatsApp en tu móvil para aprovechar el poder de la automatización y el marketing a escala.


> **¿Listo para transformar tu comunicación empresarial?** Regístrate en E-SMART360, conecta tu número de WhatsApp Business App en minutos y descubre todo lo que la automatización inteligente puede hacer por tu negocio.

### Resumen de beneficios

- ✅ Conexión sin programación ni conocimientos técnicos
- ✅ Usa tu mismo número en móvil y plataforma
- ✅ Automatización con chatbots inteligentes
- ✅ Campañas de marketing masivas con plantillas aprobadas
- ✅ Sincronización de contactos e historial (primeras 24h)
- ✅ Gestión multiagente desde una bandeja compartida
- ✅ Sin recargos ocultos sobre tarifas de Meta
- ✅ Soporte técnico dedicado durante todo el proceso
