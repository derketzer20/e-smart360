---
title: "Cómo Actualizar Plantillas de WhatsApp y Sincronizarlas con E-SMART360"
description: "Guía completa para actualizar, sincronizar y mapear plantillas de mensajes de WhatsApp en E-SMART360. Aprende el proceso paso a paso, desde la edición en el Administrador de Plantillas de WhatsApp hasta la verificación final del template actualizado, incluyendo buenas prácticas, solución de problemas y ejemplos prácticos."
section: "broadcasting"
order: 129
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "actualizar-plantillas-whatsapp-sincronizacion-esmart360"
canonicalGroup: "como-actualizar-plantillas-de-whatsapp-y-sincronizarlas-con"
tags: ["broadcasting"]
staging: true
---
Mantener tus plantillas de WhatsApp actualizadas es esencial para mantener una comunicación efectiva con tu audiencia. Con E-SMART360, puedes sincronizar y actualizar fácilmente las plantillas creadas en el Administrador de Plantillas de WhatsApp, asegurando que tus mensajes cumplan con las políticas de la plataforma y reflejen siempre la información más reciente de tu negocio.


> Si aún no has creado tu primera plantilla de mensaje, te recomendamos leer primero la guía sobre cómo crear plantillas de mensaje para WhatsApp antes de continuar con este proceso de actualización.

## ¿Qué Son las Plantillas de Mensajes de WhatsApp?

Las plantillas de mensajes de WhatsApp son mensajes predefinidos que las empresas pueden enviar a sus clientes incluso después de que haya transcurrido la ventana de 24 horas desde la última interacción. Son fundamentales para enviar actualizaciones, confirmaciones, recordatorios y notificaciones transaccionales.

E-SMART360 te permite gestionar estas plantillas de manera centralizada, sincronizándolas directamente con la API de WhatsApp Cloud para que siempre tengas acceso a las versiones más recientes aprobadas por Meta.

### ¿Por qué son importantes las plantillas?

Las plantillas de mensaje son el único tipo de mensaje que puedes enviar fuera de la ventana de 24 horas en WhatsApp. Sin ellas, solo puedes responder a mensajes iniciados por el cliente dentro de ese período. Por eso es tan importante mantenerlas actualizadas y aprobadas: cualquier error, desactualización o incumplimiento de políticas puede resultar en el rechazo de la plantilla y la interrupción de tus comunicaciones comerciales.


> Las plantillas de mensaje aprobadas te permiten iniciar conversaciones con tus clientes en cualquier momento, lo que las convierte en la herramienta más poderosa para campañas de marketing, notificaciones y atención al cliente proactiva.

## Prerrequisitos

Antes de comenzar con la actualización de plantillas, asegúrate de contar con lo siguiente:

- **Una cuenta activa en E-SMART360** con acceso al módulo de Plantillas de Mensaje.
- **Una cuenta de WhatsApp Business** conectada a E-SMART360 a través de WhatsApp Cloud API.
- **Acceso al Administrador de Plantillas de WhatsApp** (WhatsApp Template Manager) a través de Meta Business Suite.
- **Tener plantillas previamente creadas** que necesiten ser actualizadas o modificadas.
- **Conocimiento básico** de la estructura de las plantillas (encabezado, cuerpo, pie de página y botones).
- **Comprensión de las categorías de plantillas** (Utilidad, Marketing, Autenticación) para elegir la correcta.


> Si no has conectado tu número de WhatsApp a E-SMART360, completa primero el proceso de Embedded Signup antes de intentar sincronizar plantillas. Sin una conexión activa, la sincronización fallará.

## Pasos para Actualizar Plantillas de WhatsApp en E-SMART360

Sigue estos pasos detallados para actualizar tus plantillas y sincronizarlas correctamente.

### 1. Accede al Administrador de Plantillas de WhatsApp

El primer paso consiste en realizar los cambios directamente en el Administrador de Plantillas oficial de WhatsApp:

1. Inicia sesión en business.facebook.com y selecciona tu cuenta de negocio.
2. Haz clic en "Todas las herramientas" y luego en "WhatsApp Manager".
3. Haz clic en el menú de tres puntos junto a tu número de teléfono y selecciona "Administrar plantillas de mensajes".
4. Busca la plantilla que deseas actualizar utilizando el buscador o navegando por la lista.
5. Haz clic en el icono de edición (lápiz) junto a la plantilla.
6. Realiza los cambios necesarios en el contenido: encabezado, cuerpo, pie de página o botones.
7. Si agregaste nuevas variables, verifica que estén numeradas correctamente ({{1}}, {{2}}, {{3}}, etc.).
8. Asegúrate de que los cambios cumplan con las directrices de contenido de WhatsApp.
9. Agrega datos de muestra para las variables cuando WhatsApp lo solicite.
10. Guarda los cambios y espera la aprobación de WhatsApp.


> Siempre utiliza nombres descriptivos para tus plantillas, como `confirmacion_pedido_v2` o `recordatorio_cita_es`, en lugar de nombres genéricos como `plantilla_01`. Esto facilita la identificación, organización y el trabajo en equipo cuando varias personas gestionan las plantillas.

### 2. Desvincula la Plantilla en E-SMART360

Una vez que la plantilla ha sido actualizada y aprobada en el Administrador de WhatsApp, debes desvincular la versión anterior en E-SMART360:

1. Inicia sesión en tu cuenta de E-SMART360.
2. Navega a la sección de **Plantillas de Mensaje** en el menú principal.
3. Localiza la plantilla que deseas actualizar utilizando los filtros de búsqueda.
4. Haz clic en la opción **"Desvincular"** (Unlink) ubicada junto a la plantilla.
5. Confirma la acción en el diálogo de confirmación.
6. Verifica que la plantilla ya no aparezca como "Vinculada" en la lista.


> Desvincular una plantilla no la elimina del Administrador de WhatsApp. Solo rompe la conexión local en E-SMART360, permitiendo que posteriormente puedas sincronizar la versión actualizada desde la API de WhatsApp Cloud. La plantilla original en WhatsApp Manager permanece intacta.

### 3. Sincroniza las Plantillas en E-SMART360

Después de desvincular la plantilla, es momento de sincronizar las versiones más recientes:


### Accede a la sección de Plantillas

Ve a la sección de Plantillas de Mensaje en el panel de control de E-SMART360. Allí verás la lista completa de plantillas actualmente vinculadas y disponibles.
  
### Haz clic en Sincronizar

Presiona el botón **"Sync Template"** o **"Sincronizar Plantilla"** para iniciar la comunicación con la API de WhatsApp Cloud. Este botón suele estar ubicado en la parte superior derecha de la sección.
  
### Espera la confirmación

El sistema se comunicará con WhatsApp Cloud API para obtener todas las plantillas disponibles que aún no estén vinculadas en E-SMART360. El proceso puede tomar de 5 a 30 segundos. Cuando finalice, verás un mensaje de confirmación indicando cuántas plantillas nuevas se han detectado.
  
### Verifica las plantillas sincronizadas

Revisa la lista actualizada. Las nuevas plantillas aparecerán con un estado "Disponible para vincular" o similar. Localiza la plantilla que actualizaste en el paso 1.
  
### 4. Vincula la Plantilla Actualizada

Una vez sincronizadas las plantillas, debes vincular la versión actualizada:

1. Localiza la plantilla actualizada en la lista de plantillas disponibles.
2. Verifica que el nombre y la categoría coincidan con la plantilla que modificaste.
3. Haz clic en **"Vincular"** (Map) para conectar la plantilla actualizada con E-SMART360.
4. En la ventana de mapeo, asigna cada variable de la plantilla ({{1}}, {{2}}, etc.) al campo de datos correspondiente.
5. Si la plantilla contiene variables nuevas, deberás crearlas primero en la sección de "Template Variable".



### Variables existentes

Si ya tienes variables creadas en E-SMART360 que coinciden semánticamente con las de la plantilla, puedes mapearlas directamente seleccionándolas de la lista desplegable. No es necesario crearlas de nuevo si ya existen.
  
### Variables nuevas

Si agregaste nuevas variables a la plantilla durante la actualización, deberás crearlas primero. Ve a la sección "Template Variable", haz clic en "Crear", ingresa un nombre descriptivo para la variable y guárdala. Luego vuelve al mapeo y selecciona la nueva variable.
  
6. Confirma el mapeo y guarda la configuración.

### 5. Verifica la Actualización

El paso final es crucial para asegurarte de que todo funciona correctamente:

1. **Prueba individual:** Envía un mensaje de prueba utilizando la plantilla actualizada desde el panel de E-SMART360.
2. **Verifica el contenido:** Revisa que los cambios realizados se reflejen correctamente en el mensaje recibido.
3. **Comprueba las variables:** Verifica que cada variable se esté reemplazando con el valor correcto (nombre del cliente, número de pedido, fecha, etc.).
4. **Prueba los botones:** Si la plantilla incluye botones, haz clic en cada uno para confirmar que funcionan correctamente (URLs válidas, respuestas rápidas visibles, CTA funcionales).
5. **Prueba multiplataforma:** Verifica la apariencia en diferentes dispositivos si es posible.
6. **Prueba en producción:** Una vez verificada, la plantilla estará lista para usarse en campañas de broadcast, automatizaciones, chatbots y chat en vivo.


> Si después de sincronizar la plantilla no aparece en la lista de disponibles, verifica estos puntos: la plantilla debe estar en estado "Aprobada" en WhatsApp Manager, no "Pendiente" o "Rechazada"; asegúrate de haber desvinculado correctamente la versión anterior; espera unos minutos e intenta sincronizar nuevamente.

## Tipos de Plantillas según su Categoría

WhatsApp clasifica las plantillas en diferentes categorías. Es importante conocerlas para elegir la adecuada:

### Plantillas de Utilidad (Utility)

Son mensajes preaprobados diseñados para actualizaciones transaccionales, como confirmaciones, cambios o suspensiones relacionadas con una transacción o suscripción específica. Deben ser funcionales y no promocionales.

**Ejemplos de plantillas de utilidad:**

- **Confirmación de pedido:** "Tu pedido #12345 ha sido confirmado. Recibirás una actualización de seguimiento pronto."
- **Recibo de pago:** "Tu pago de $50 se ha procesado exitosamente. ¡Gracias por tu compra!"
- **Recordatorio de cita:** "Recordatorio: tu cita con el Dr. García está programada para el 15 de marzo a las 10:00 AM. Responde para confirmar."
- **Actualización de envío:** "Tu paquete ha sido enviado. Número de seguimiento: {{1}}. Fecha estimada de entrega: {{2}}."
- **Verificación de cuenta:** "Tu código de verificación es {{1}}. No compartas este código con nadie."

### Plantillas de Marketing

Ofrecen mayor flexibilidad y se utilizan para mensajes que no se relacionan con una transacción específica. Pueden incluir promociones, ofertas, mensajes de bienvenida, actualizaciones de producto, invitaciones a eventos y recomendaciones.

**Ejemplos de plantillas de marketing:**

- **Oferta promocional:** "¡Oferta exclusiva! Obtén un 20% de descuento en tu próxima compra. Usa el código AHORRO20."
- **Reenganche de clientes:** "Te extrañamos {{1}}. Disfruta de envío gratis en tu próximo pedido."
- **Invitación a evento:** "Únete a nuestro próximo seminario web sobre tendencias de marketing digital. ¡Regístrate ahora!"
- **Lanzamiento de producto:** "¡Ya está aquí {{1}}! Descubre las nuevas funcionalidades."
- **Boletín informativo:** "No te pierdas las últimas novedades. Lee nuestro boletín de este mes."

### Plantillas de Autenticación (Authentication)

Utilizadas exclusivamente para enviar códigos de verificación y contraseñas de un solo uso (OTP). Tienen reglas especiales y no pueden incluir contenido de marketing o promocional.


> Elige siempre la categoría correcta para tu plantilla. Una clasificación incorrecta puede resultar en el rechazo inmediato. Si una plantilla de utilidad contiene elementos promocionales, WhatsApp la reclasificará automáticamente como marketing.

## Límites de Caracteres para Plantillas de Mensaje

Para garantizar que tus plantillas sean aprobadas, respeta los siguientes límites de caracteres:



### Encabezado (Header)

- **Texto:** hasta 60 caracteres
    - **Subtítulo (para medios):** hasta 256 caracteres
    - **Medios:** imágenes, videos o documentos con límites de tamaño específicos
  
### Cuerpo (Body)

- **Con medios:** hasta 1024 caracteres
    - **Estándar:** hasta 4096 caracteres
    - **Para aprobación:** máximo 1024 caracteres ({{n}} cuenta como 1 carácter)
  
### Pie de página (Footer)

- Hasta **60** caracteres
    - Texto opcional, sin formato ni enlaces
  
### Botones

- **Texto del botón:** hasta 20 caracteres
    - **Payload de respuesta rápida:** hasta 256 caracteres
    - **URL de llamado a la acción:** debe ser válida y completa
  
> Superar estos límites no siempre causa un error visible, pero resultará en el rechazo de la plantilla durante la revisión de WhatsApp. Siempre verifica las longitudes antes de enviar.

## Beneficios de Mantener las Plantillas Actualizadas

Mantener tus plantillas actualizadas ofrece múltiples ventajas:



### Comunicación Mejorada

Las actualizaciones regulares garantizan que tus mensajes sean relevantes y estén alineados con las necesidades actuales de tus clientes.
  
### Consistencia de Marca

Mantén una voz de marca coherente en todas tus comunicaciones. Refina el tono según evoluciona tu negocio.
  
### Cumplimiento Normativo

Mantente en cumplimiento con las políticas de WhatsApp. Las pautas cambian periódicamente y las plantillas válidas pueden dejar de serlo.
  
### Eficiencia Operativa

Ahorra tiempo reutilizando plantillas existentes en lugar de crear nuevas desde cero para cambios menores.
  
### Mayor Tasa de Entrega

Las plantillas actualizadas tienen mayor probabilidad de ser entregadas exitosamente, mejorando tus métricas.
  
### Mejor Experiencia del Cliente

Los clientes reciben información precisa, lo que mejora su confianza y satisfacción con tu marca.
  
## Causas Comunes de Rechazo de Plantillas

Conocer las razones de rechazo te ayudará a evitarlas:


### Variables sin contexto

**Problema:** Las variables se colocan sin texto circundante, haciendo el mensaje confuso.
**Solución:** Siempre proporciona contexto para las variables.

**Ejemplo incorrecto:** `Hola {{1}}, tu {{2}} está {{3}}.`
**Ejemplo correcto:** `Hola {{1}}, tu pedido {{2}} ha sido {{3}} exitosamente.`

### Nombre de plantilla poco claro

**Problema:** Nombres genéricos o vagos como `Plantilla_003`.
**Solución:** Usa nombres descriptivos como `confirmacion_pedido_v2` o `recordatorio_cita_es`.

### Contenido que no explica el uso de la plantilla

**Problema:** El mensaje no explica claramente su propósito a los revisores.
**Solución:** Proporciona contenido significativo que muestre el contexto de uso.

**Ejemplo correcto:** `Hola {{1}}, disculpa la demora. ¿Te gustaría continuar esta conversación con un agente?`

### Texto usado dentro de variables incorrectamente

**Problema:** Colocar texto descriptivo dentro de {{ }} en lugar de solo números.
**Solución:** Usa siempre números: {{1}}, {{2}}, {{3}}. El nombre descriptivo se configura en el mapeo.

**Ejemplo incorrecto:** `Hola {{nombre}}, tu servicio para {{servicio}} ha sido activado.`
**Ejemplo correcto:** `Hola {{1}}, tu servicio para {{2}} ha sido activado.`

### Errores de sintaxis en variables

**Problema:** Variables sin dobles corchetes completos o numeración incorrecta.
**Solución:** Usa siempre {{ }} y asegura numeración secuencial desde 1.

### Líneas vacías en el contenido

**Problema:** Espacios en blanco o líneas vacías entre párrafos.
**Solución:** Usa guiones múltiples (----) para los saltos de párrafo.

**Ejemplo correcto:**
```
¡Gracias por registrarte!
----
Haz clic en el botón de abajo para completar tu registro.
```

### Errores ortográficos o jerga informal

**Problema:** Errores tipográficos o lenguaje demasiado informal.
**Solución:** Revisa el contenido antes de enviarlo. Usa lenguaje profesional y claro.

## Cómo Sincronizar Plantillas Creadas en WhatsApp Manager

Si prefieres crear tus plantillas directamente en WhatsApp Manager, el proceso completo es:

### Crear la Plantilla en WhatsApp Manager

1. Inicia sesión en business.facebook.com y selecciona tu cuenta de negocio.
2. Ve a "Todas las herramientas" > "WhatsApp Manager".
3. Haz clic en el menú de tres puntos y selecciona "Administrar plantillas de mensajes".
4. Haz clic en "Crear plantilla".
5. Elige una categoría: Marketing, Utilidad o Autenticación.
6. Asigna un nombre descriptivo y selecciona el idioma.
7. Opcionalmente, agrega un encabezado (texto o imagen).
8. Escribe el cuerpo del mensaje e inserta variables si es necesario.
9. Opcionalmente, agrega un pie de página y botones.
10. Agrega datos de muestra para las pruebas y envía la plantilla para aprobación.

### Sincronizar con E-SMART360

1. Ve a la sección de Plantillas de Mensaje en E-SMART360.
2. Haz clic en **"Sincronizar Plantilla"** para obtener la plantilla aprobada.
3. Vincula las variables de la plantilla con las de tu chatbot o crea nuevas.
4. Guarda la plantilla. Ya está lista para usarse.


> WhatsApp Manager no admite **plantillas de carrusel** de forma nativa. Sin embargo, E-SMART360 sí permite crear y enviar este tipo de plantillas directamente desde la plataforma.

## Plantillas para Reiniciar Conversaciones Fuera del Horario Laboral

Una estrategia importante es contar con plantillas específicas para retomar conversaciones cuando un cliente contactó fuera del horario laboral y la ventana de 24 horas ya expiró.

### Plantilla 1: Disculpa Genérica con Opción de Continuar

```
Lo sentimos, no pudimos responderte a tiempo porque no estábamos disponibles.
Si deseas continuar esta conversación, presiona CONTINUAR y un agente te atenderá.
```

### Plantilla 2: Personalizada con Variable de Nombre

```
Hola {{1}}, lamentablemente nos contactaste fuera de nuestro horario laboral
y no pudimos responderte a tiempo. Si aún necesitas ayuda, presiona SÍ.
```

### Plantilla 3: Con Opciones Múltiples de Contacto

```
Disculpa por no haber respondido tu llamada o mensaje de inmediato.
Si tu problema persiste y deseas hablar con un agente, presiona LLAMAR,
o si prefieres chatear, presiona CHAT.
```


> Estas plantillas de reenganche son ideales para negocios con horarios definidos. Puedes sincronizarlas en E-SMART360 y usarlas con chatbots automatizados para cubrir la atención fuera de hora.

## Integración de Plantillas con Campañas de Broadcast

Una vez actualizadas, tus plantillas se pueden usar en diferentes tipos de campañas:

### Broadcast Masivos

Las plantillas aprobadas se usan para enviar mensajes broadcast a tus suscriptores. E-SMART360 respeta los límites de WhatsApp y permite segmentar tu audiencia por etiquetas, ubicación o comportamiento.

### Mensajes Automatizados

Configura disparadores automáticos para eventos como:
- Nuevo pedido en WooCommerce o Shopify
- Carrito abandonado
- Cumpleaños del cliente
- Formulario de contacto completado
- Actualización de envío

### Chat en Vivo

Los agentes pueden seleccionar plantillas predefinidas para responder rápidamente a consultas comunes, manteniendo consistencia y ahorrando tiempo.

### Flujos de Bot

Las plantillas se integran en flujos de chatbot condicionales, donde el bot selecciona la plantilla según la respuesta del usuario o la etapa del flujo de ventas.


> Al sincronizar plantillas actualizadas, todos estos canales se benefician automáticamente. No necesitas configurar cada integración por separado.

## Comprensión de los Límites de Broadcast en WhatsApp

Para maximizar la efectividad de tus plantillas, entiende los límites de broadcast:

### Límites por Nivel de Mensajería

| Nivel | Límite de Contactos | Descripción |
|-------|---------------------|-------------|
| Trial | 250 contactos | Cuentas nuevas en período de prueba |
| Tier 1 | 1,000 contactos | Nivel inicial después de verificación |
| Tier 2 | 10,000 contactos | Negocios con buena calificación de calidad |
| Tier 3 | 100,000 contactos | Negocios establecidos con excelente reputación |

### Reglas Importantes de Broadcast

- Los mensajes broadcast solo se envían a contactos que hayan iniciado una conversación en los últimos 30 días.
- WhatsApp monitorea la calificación de calidad de tu número. Las plantillas con reclamos pueden reducir tu límite.
- El límite se renueva cada 24 horas.
- Puedes solicitar un aumento de límite si mantienes una calificación alta.

## Calificación de Calidad de WhatsApp

La calificación de calidad de tu número afecta directamente la entrega de tus plantillas. WhatsApp evalúa tres métricas:

1. **Tasa de bloqueos:** Usuarios que bloquean tus mensajes.
2. **Tasa de reclamos:** Usuarios que reportan tus mensajes como spam.
3. **Tasa de entrega:** Mensajes que llegan correctamente a los destinatarios.



### Calificación Verde (Alta)

Sin restricciones. Tus plantillas se envían sin problemas y mantienes tus límites actuales.
  
### Calificación Amarilla (Media)

WhatsApp monitorea tu actividad. Revisa el contenido y la frecuencia de envío para evitar que empeore.
  
### Calificación Roja (Baja)

Tu límite se reduce significativamente. Revisa urgentemente tus plantillas y la segmentación de campañas.
  
> Mantener tus plantillas actualizadas con contenido relevante es clave para preservar una calificación alta. Las plantillas obsoletas aumentan las tasas de bloqueo y reclamo.

## Errores Comunes al Sincronizar Plantillas y Soluciones


### Error: La plantilla no aparece después de sincronizar

**Causa:** La plantilla está en estado "Pendiente" o "Rechazada".
**Solución:** Verifica el estado en WhatsApp Manager. Si está pendiente, espera aprobación. Si fue rechazada, corrige los errores y vuelve a enviarla.

### Error: Variables no mapeadas correctamente

**Causa:** Las variables de la plantilla no coinciden con las configuradas en E-SMART360.
**Solución:** Revisa la numeración y cantidad de variables. Asegúrate de que cada una tenga su contraparte creada en E-SMART360.

### Error: El botón no funciona en el mensaje enviado

**Causa:** El tipo de botón no es compatible o la URL no es válida.
**Solución:** Verifica que los botones sean de tipo aprobado por WhatsApp y que las URLs comiencen con https://.

## Guía de Solución de Problemas: Mensajes No Enviados

Si los mensajes no se envían después de sincronizar, sigue estos pasos:

1. **Verifica el estado de la plantilla:** Debe estar "Aprobada" en WhatsApp Manager.
2. **Revisa la conexión de tu número:** Asegúrate de que esté correctamente conectado a E-SMART360.
3. **Comprueba los límites de mensajería:** Verifica que no hayas alcanzado tu límite diario.
4. **Revisa la calificación de calidad:** Una calificación baja puede bloquear el envío.
5. **Confirma los datos del destinatario:** Debe haber optado por recibir mensajes.
6. **Prueba con un mensaje manual:** Envía una prueba desde el chat en vivo para aislar el problema.
7. **Revisa los registros de error:** Consulta los logs de E-SMART360 para identificar errores de API.

## Buenas Prácticas para la Gestión de Plantillas

### Versionado y Organización

- Usa nombres descriptivos con números de versión (ej: `promocion_navidad_2026_v1`).
- Mantén un registro de cambios realizados en cada versión.
- Archiva plantillas antiguas por si necesitas revertir cambios.

### Frecuencia de Actualización

- Revisa tus plantillas al menos una vez al mes.
- Actualiza después de cambios importantes en tu negocio.
- Mantente al tanto de las actualizaciones de políticas de WhatsApp.

### Contenido y Segmentación

- Personaliza según el segmento de clientes.
- Usa variables para hacer mensajes más relevantes.
- Evita lenguaje promocional en plantillas de utilidad.



#### Ejemplo de plantilla de bienvenida

```
Hola {{1}},

¡Bienvenido a {{2}}! Estamos encantados de tenerte con nosotros.

----

Para comenzar, explora nuestro catálogo de productos o contáctanos si tienes preguntas.

Gracias por confiar en nosotros.
El equipo de {{2}}
```

#### Ejemplo de plantilla de pedido

```
Hola {{1}},

Tu pedido {{2}} ha sido {{3}}.

----

Puedes dar seguimiento aquí: {{4}}

¿Tienes preguntas? Responde a este mensaje.
```

## Ejemplos Prácticos de Uso



### Confirmación de Pedido Automatizada

Una tienda de e-commerce actualiza su plantilla para incluir un enlace de seguimiento. Al sincronizar en E-SMART360, cada nuevo pedido en WooCommerce genera automáticamente un mensaje con el enlace de rastreo en tiempo real.
  
### Recordatorio de Citas con Variables Dinámicas

Un consultorio médico actualiza su plantilla con un botón de confirmación. Al mapear {{1}} (paciente), {{2}} (fecha) y {{3}} (hora), los pacientes reciben recordatorios personalizados y confirman con un clic.
  
## Preguntas Frecuentes


### ¿Puedo tener múltiples versiones de la misma plantilla?

Sí, WhatsApp permite tener varias versiones con nombres diferentes. Puedes crear `bienvenida_v1`, `bienvenida_v2`, etc. E-SMART360 te permite gestionarlas y elegir cuál usar en cada automatización.

### ¿Cuánto tarda WhatsApp en aprobar una plantilla actualizada?

El tiempo varía desde minutos hasta varios días. Las de utilidad suelen aprobarse más rápido. Si supera los 7 días, contacta al soporte de Meta.

### ¿Qué pasa si uso una plantilla rechazada después de haber sido aprobada?

Quedará en estado "rechazado" y no podrás enviar mensajes con ella. Deberás crear una versión corregida, enviarla para aprobación y sincronizarla nuevamente.

### ¿Puedo eliminar una plantilla desvinculada de E-SMART360?

Sí, una vez desvinculada puedes eliminarla. Esto no afecta la plantilla en WhatsApp Manager. Para eliminarla permanentemente de WhatsApp, hazlo desde el Administrador de Meta.

### ¿Las plantillas actualizadas afectan campañas de broadcast en curso?

Sí, la nueva versión se aplica a mensajes pendientes. Los ya enviados conservan el contenido original. Recomendamos pausar campañas activas antes de actualizar plantillas críticas.

## Conclusión

Actualizar las plantillas de WhatsApp en E-SMART360 es un proceso sencillo que garantiza comunicaciones efectivas y actualizadas. Siguiendo estos pasos —acceder al Administrador de WhatsApp, desvincular, sincronizar y vincular— puedes mantener tus mensajes optimizados y en cumplimiento con las políticas de WhatsApp.

Recuerda que una gestión proactiva de tus plantillas protege la reputación de tu cuenta ante Meta y maximiza la efectividad de tus campañas de marketing y atención al cliente.

Para obtener asistencia personalizada, no dudes en contactar a nuestro equipo de soporte.


> **Última actualización (7 de mayo de 2026)**
> Esta guía refleja los cambios más recientes en las políticas de plantillas de WhatsApp Cloud API y el proceso de sincronización en E-SMART360.
