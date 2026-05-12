---
title: "Causas Comunes del Rechazo de Plantillas de WhatsApp y Cómo Solucionarlas"
description: "Guía completa sobre las razones más frecuentes por las que Meta rechaza las plantillas de mensajes de WhatsApp y cómo evitarlas. Incluye buenas prácticas, ejemplos y pasos para corregir plantillas rechazadas."
section: "broadcasting"
order: 145
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "causas-comunes-rechazo-plantillas-whatsapp-esmart360"
canonicalGroup: "causas-comunes-del-rechazo-de-plantillas-de-whatsapp-y-como-solucionarlas"
tags: ["broadcasting"]
staging: true
---
# Causas Comunes del Rechazo de Plantillas de WhatsApp y Cómo Solucionarlas

Las plantillas de mensajes de WhatsApp son esenciales para enviar comunicaciones a los suscriptores fuera de la ventana de 24 horas posterior a su última interacción con tu chatbot. También se conocen como mensajes iniciados por la empresa y permiten enviar plantillas a cualquier número en cualquier momento.

Estas plantillas se utilizan principalmente para:

- Informar a los clientes sobre novedades y actualizaciones
- Enviar mensajes promocionales a listas de suscriptores
- Entregar códigos OTP y verificaciones
- Notificar cambios en pedidos o estados de cuenta
- Recordatorios de citas y eventos

Antes de poder enviar cualquier plantilla de mensaje, es necesario crearla y someterla a revisión. Solo después de obtener la aprobación de Meta podrás comenzar a utilizarla. El proceso de aprobación es riguroso y cualquier error de formato o contenido puede resultar en un rechazo.


> **Importante:** La creación de plantillas de mensajes de WhatsApp requiere atención al detalle y cumplimiento estricto de las políticas de Meta. Un solo error en el formato o contenido suficiente para que tu plantilla sea rechazada.

## Requisitos Previos para Crear Plantillas

Antes de comenzar a crear plantillas, asegúrate de cumplir con los siguientes requisitos:

- **Una cuenta de WhatsApp Business** conectada a E-SMART360
- **Acceso a WhatsApp Cloud API** (para sincronizar plantillas desde WhatsApp Manager si es necesario)
- **Una idea clara del contenido del mensaje**, incluyendo variables, botones o pies de página que necesitarás
- **Un método de pago configurado** en Meta WhatsApp Manager para cubrir las tarifas de conversación
- **Facebook Business Manager verificado** (recomendado para evitar errores de envío)

Una vez que tengas todo esto listo, puedes proceder a crear tus plantillas con la confianza de que no encontrarás obstáculos técnicos durante el proceso de aprobación.


> **Dato importante:** El pago de tu suscripción a E-SMART360 NO cubre las tarifas de conversación de Meta. Debes agregar un método de pago directamente en Meta WhatsApp Manager para que los mensajes puedan enviarse correctamente.

## ¿Qué son las Plantillas de Mensajes de WhatsApp?

Las plantillas de mensajes son formatos de mensaje preaprobados que las empresas pueden utilizar para iniciar conversaciones con sus clientes fuera de la ventana de servicio al cliente de 24 horas. WhatsApp Cloud API exige que todos los mensajes iniciados por la empresa utilicen plantillas aprobadas previamente.

Existen tres categorías principales de plantillas:



### Marketing

Mensajes promocionales, ofertas, campañas de re-engagement y comunicaciones que no están vinculadas a una transacción específica.

### Utilidad

Notificaciones transaccionales como confirmaciones de pedido, actualizaciones de envío, recibos de pago y recordatorios de citas.

### Autenticación

Códigos OTP y mensajes de verificación de identidad para procesos de inicio de sesión y autenticación de dos factores.

## Formas de Crear Plantillas de Mensajes

Puedes crear plantillas de mensajes de **dos maneras**:


### Desde el Gestor de Plantillas de E-SMART360

La forma más recomendada y sencilla. El sistema verifica automáticamente los errores de formato y te sugiere correcciones antes de enviar la plantilla a revisión.

Pasos:
1. Accede al módulo de Plantillas desde tu panel de control
2. Selecciona "Crear nueva plantilla"
3. Elige la categoría (Marketing, Utilidad o Autenticación)
4. Completa los campos: nombre, idioma, cuerpo del mensaje
5. Agrega variables si es necesario usando el formato {{1}}, {{2}}, etc.
6. Revisa las sugerencias automáticas de formato
7. Envía para aprobación

### Desde WhatsApp Business Manager

En algunos casos, ciertas cuentas pueden experimentar demoras prolongadas en la revisión al crear plantillas mediante la API. En estas situaciones, se recomienda:

1. Crear la plantilla directamente en WhatsApp Manager
2. Sincronizarla en E-SMART360
3. Mapear las variables si la plantilla las incluye


> **Recomendación:** Siempre que sea posible, crea tus plantillas desde el Gestor de Plantillas de E-SMART360. La plataforma valida automáticamente el formato y te alerta sobre posibles errores antes del envío.

## Tipos de Problemas de Rechazo

Los rechazos de plantillas se dividen en dos categorías principales: problemas de formato y problemas de contenido.

### Problemas de Formato

Si creas la plantilla desde E-SMART360, no necesitas preocuparte por la mayoría de los problemas de formato, ya que la plataforma los verifica automáticamente y te sugiere correcciones. Sin embargo, es importante conocerlos:

#### Variables con formato incorrecto
- **Problema:** Los parámetros variables faltan o tienen llaves desalineadas
- **Solución correcta:** El formato correcto es `{{1}}`, `{{2}}`, `{{3}}`
- **Ejemplo incorrecto:** `{1}`, `{{1`, `{1}}`
- **Ejemplo correcto:** `Hola {{1}}, gracias por tu compra`

#### Caracteres especiales en variables
- **Problema:** Las variables contienen caracteres especiales como #, $ o %
- **Solución:** Usa solo letras, números y guiones bajos dentro de las variables

#### Variables no secuenciales
- **Problema:** Las variables no siguen un orden numérico (ej. `{{1}}`, `{{2}}`, `{{4}}`, `{{5}}` pero falta `{{3}}`)
- **Solución:** Asegúrate de que todas las variables sean secuenciales: `{{1}}`, `{{2}}`, `{{3}}`


> **Error común:** Saltarse números en la secuencia de variables es una de las causas de rechazo más frecuentes. Siempre verifica que no haya espacios en la numeración.

### Problemas de Contenido

Los problemas de contenido son más variados y requieren una revisión cuidadosa:

#### Violación de la Política Comercial de WhatsApp

Si la plantilla contiene contenido que infringe la [Política Comercial de WhatsApp](https://www.whatsapp.com/legal/commerce-policy/), será rechazada automáticamente. Esto incluye:

- Productos o servicios prohibidos
- Contenido ilegal o regulado
- Promoción de actividades fraudulentas


### ¿Qué productos están restringidos en WhatsApp?

Las políticas comerciales de WhatsApp prohíben: tabaco, alcohol (en algunas regiones), armas de fuego, drogas recreativas, contenido sexual explícito, servicios financieros no regulados, productos farmacéuticos sin receta, y cualquier otro artículo o servicio que infrinja las leyes locales. Revisa siempre la política actualizada antes de crear plantillas promocionales.

#### Solicitud de datos sensibles

No solicites identificadores sensibles a los usuarios como:

- Números completos de tarjetas de crédito
- Números de cuentas bancarias
- Números de identificación nacional
- Contraseñas o PIN
- Datos biométricos


> **Ejemplo incorrecto:** "Por favor comparte tu número completo de tarjeta de crédito para procesar el reembolso, {{1}}."

**Ejemplo correcto:** "Para verificar tu pago, ingresa a tu cuenta desde este enlace seguro: {{1}}"

#### Contenido abusivo o amenazante

No utilices lenguaje que pueda considerarse:

- Agresivo o intimidante
- Amenazas de acción legal
- Amenazas de exposición pública
- Discriminación u hostigamiento

Mantén siempre un tono profesional y respetuoso en todas tus plantillas.

#### Duplicados de plantillas existentes

Si envías una plantilla con el mismo texto en el cuerpo y pie de página que una plantilla ya existente, el duplicado será rechazado.


### ¿Cómo evitar crear plantillas duplicadas?

Antes de crear una nueva plantilla, revisa las plantillas existentes en tu cuenta. Si necesitas una variación, asegúrate de cambiar suficiente contenido y usa un nombre de plantilla descriptivo y único. Por ejemplo, en lugar de "template_014", usa "order_update_001" o "promo_summer_2026".

#### Errores ortográficos y gramaticales

El contenido con errores de ortografía o gramática es una causa común de rechazo. WhatsApp espera un nivel profesional de redacción.

**Pasos para evitarlo:**
1. Revisa la plantilla varias veces antes de enviarla
2. Usa herramientas de corrección ortográfica
3. Pide a un colega que revise el contenido
4. Lee el mensaje en voz alta para detectar errores

#### Uso de acortadores de URL

No utilices URLs acortadas en tus plantillas como bit.ly, tinyurl, short.ly, etc.

**Alternativas correctas:**
- Usa URLs completas en el cuerpo del mensaje
- Coloca los enlaces en botones de CTA (Call to Action)
- Usa enlaces de tu propio dominio

#### Categoría incorrecta

Elegir la categoría equivocada para la plantilla puede resultar en rechazo. Recuerda las tres categorías:



### Marketing

- Promociones y ofertas
- Boletines y newsletters
- Re-engagement de clientes
- Invitaciones a eventos
- Recomendaciones de productos

### Utilidad

- Confirmaciones de pedido
- Actualizaciones de envío
- Recibos de pago
- Recordatorios de citas
- Notificaciones de estado

### Autenticación

- Códigos OTP
- Verificación de identidad
- Confirmación de inicio de sesión

> **Importante:** Si una plantilla contiene tanto contenido de utilidad como de marketing, será clasificada automáticamente como plantilla de marketing. Elige la categoría que mejor refleje el propósito principal del mensaje.

## Errores Comunes del Sistema y Cómo Solucionarlos

Además de los rechazos por contenido y formato, existen errores del sistema que pueden impedir el envío de plantillas aprobadas. El más frecuente es el **Error 131042**, relacionado con problemas en el método de pago.

### Error 131042: Problema con el Método de Pago

**Mensaje de error:**

_"El mensaje no pudo enviarse debido a uno o más errores relacionados con tu método de pago."_

Este error ocurre cuando hay un problema con el método de pago vinculado a tu Cuenta de WhatsApp Business.

**Causas comunes:**

1. **Método de pago no conectado correctamente**: El método de pago puede haberse agregado al administrador de WhatsApp equivocado, o simplemente no se ha configurado.
2. **Datos comerciales faltantes**: Después de agregar el método de pago, es posible que falten datos de verificación.
3. **Facebook Business Manager no verificado**: Sin verificación empresarial, los pagos pueden fallar.
4. **WhatsApp Manager suspendido**: La cuenta puede estar en estado de suspensión temporal.

**Solución paso a paso:**


### Verifica el método de pago en Meta WhatsApp Manager

1. Accede a la configuración de pagos de Meta
2. Selecciona el Facebook Business Manager correcto
3. Ve a Facturas y pagos > Cuentas > Cuentas de WhatsApp Business
4. Busca el WhatsApp Manager que coincida con tu ID de negocio
5. Si ves "Agregar método de pago", haz clic en los tres puntos (•••) > Ver detalles
6. Completa ambos pasos: agregar información de pago y verificar datos fiscales

### Verifica tu Facebook Business Manager

1. Accede al Centro de Seguridad de Facebook
2. Selecciona el Facebook Business Manager correcto
3. Si ves "Verificado", todo está correcto
4. Si ves "Iniciar verificación", sigue los pasos y espera 24-48 horas

### Confirma que los mensajes puedan enviarse

Una vez verificados ambos aspectos, espera unos minutos y vuelve a intentar el envío de tus plantillas aprobadas. Si el error persiste, contacta al soporte técnico.


> **Importante:** Las tarifas de conversación de WhatsApp se cobran por cada conversación iniciada con plantillas. Asegúrate de tener fondos suficientes en tu método de pago configurado para evitar interrupciones en el servicio.

## Guía Detallada para Cada Tipo de Plantilla

### Plantillas de Utilidad

Las plantillas de utilidad son mensajes preaprobados diseñados para actualizaciones transaccionales, como confirmaciones, cambios o suspensiones relacionados con una transacción o suscripción específica. Estas plantillas deben ser funcionales y no promocionales.

**Ejemplos de plantillas de utilidad correctas:**

- **Confirmación de pedido:** "Tu pedido #12345 ha sido confirmado. Recibirás una actualización de seguimiento pronto."
- **Recibo de pago:** "Tu pago de $50 ha sido procesado exitosamente. ¡Gracias por tu compra!"
- **Recordatorio de cita:** "Recordatorio: tu cita con el Dr. García está programada para el 15 de marzo a las 10:00 AM. Responde para confirmar."
- **Notificación de envío:** "Tu paquete con el número de seguimiento {{1}} ha sido enviado. Fecha estimada de entrega: {{2}}."


> **Nota:** Si una plantilla contiene tanto contenido de utilidad como promocional, WhatsApp la clasificará automáticamente como plantilla de marketing, lo que puede afectar los costos de conversación y los límites de mensajería.

### Plantillas de Marketing

Las plantillas de marketing ofrecen mayor flexibilidad y se utilizan para mensajes que no se relacionan con una transacción específica. Pueden incluir promociones, ofertas, mensajes de bienvenida, actualizaciones, invitaciones, recomendaciones o solicitudes de participación.

**Ejemplos de plantillas de marketing correctas:**

- **Oferta promocional:** "¡Oferta exclusiva! Obtén un 20% de descuento en tu próxima compra. Usa el código AHORRO20 al pagar."
- **Re-engagement:** "Te extrañamos! Disfruta de envío gratis en tu próximo pedido. Toca abajo para comprar ahora."
- **Invitación a evento:** "Únete a nuestro próximo seminario web sobre tendencias de marketing digital. ¡Regístrate ahora!"
- **Lanzamiento de producto:** "¡Ya está aquí nuestro nuevo producto! Conoce todas las novedades y sé el primero en probarlo."

## Razones Detalladas de Rechazo y Soluciones

A continuación, presentamos una lista exhaustiva de las razones por las que las plantillas son rechazadas, junto con sus soluciones:

### 1. Variables sin contexto
- **Problema:** Las variables se colocan sin texto circundante, lo que las hace confusas
- **Solución:** Siempre proporciona contexto para las variables. Las plantillas con variables independientes serán rechazadas

**❌ Incorrecto:** `{{1}} {{2}} {{3}}`

**✅ Correcto:** `Hola {{1}}, tu servicio de {{2}} ha sido activado el {{3}}.`

### 2. Nombre de plantilla poco claro
- **Problema:** Nombres genéricos o vagos como "template_003" o "plantilla_nueva"
- **Solución:** Usa nombres descriptivos como `order_confirmation_003` o `promo_summer_2026` para clarificar el propósito

### 3. Contenido que no explica el uso de la plantilla
- **Problema:** El mensaje no deja claro el propósito a los revisores
- **Solución:** Proporciona contenido significativo y completo

**✅ Correcto:** `Hola {{1}}, disculpa la demora. ¿Te gustaría continuar esta conversación?`

### 4. Texto usado como variables
- **Problema:** Colocar texto dentro de {{ }} en lugar de números
- **Solución:** Usa placeholders numéricos. Solo se permiten números dentro de las llaves dobles

**✅ Correcto:** `Hola {{1}}, tu servicio para {{2}} ha sido activado en {{3}}.`

### 5. Faltan llaves dobles en las variables
- **Problema:** Variables no encerradas en {{ }}
- **Solución:** Siempre usa llaves dobles para todas las variables

**❌ Incorrecto:** `Hola {1}`, `Hola {nombre}`
**✅ Correcto:** `Hola {{1}}`

### 6. Líneas vacías en el contenido
- **Problema:** Espacios en blanco entre el texto
- **Solución:** Usa guiones múltiples (----) para los saltos de párrafo

**✅ Correcto:**
```
¡Gracias por registrarte!
----
Haz clic en el botón de abajo para completar tu registro.
```

### 7. Errores ortográficos o jerga
- **Problema:** Errores tipográficos o lenguaje informal
- **Solución:** Revisa todo el contenido antes de enviarlo. Usa un corrector ortográfico

### 8. Numeración incorrecta de variables
- **Problema:** Variables numeradas fuera de orden
- **Solución:** Asegúrate de que las variables sean secuenciales (ej. {{1}}, {{2}}, {{3}})

### 9. Falta de contenido multimedia de muestra
- **Problema:** No se envía un archivo de ejemplo para plantillas con contenido multimedia
- **Solución:** Adjunta una imagen, video o documento de muestra al enviar la plantilla

### 10. Uso de acortadores de URL
- **Problema:** Enlaces acortados (ej. bit.ly) en el contenido del mensaje
- **Solución:** Usa URLs completas o agrega enlaces a botones de CTA


> **Recomendación:** Los botones de CTA no solo evitan problemas con los acortadores, sino que también mejoran la experiencia del usuario al facilitar la navegación a la página de destino.

### 11. Mezcla de múltiples idiomas
- **Problema:** Una sola plantilla contiene diferentes idiomas
- **Solución:** Mantén un solo idioma por plantilla. Si necesitas comunicarte en otro idioma, crea una plantilla separada

### 12. Exceso de límites de caracteres
- **Problema:** El texto en el encabezado, cuerpo o pie de página excede la longitud permitida
- **Solución:** Mantén el contenido dentro de los límites establecidos


### Límites de caracteres para plantillas de WhatsApp

| Componente | Límite de caracteres |
|------------|---------------------|
| Encabezado (texto) | 60 caracteres |
| Encabezado (imagen) | Sin límite de texto |
| Cuerpo del mensaje | 1024 caracteres |
| Pie de página | 60 caracteres |
| Botón CTA (texto) | 20 caracteres |
| Botón de respuesta rápida | 20 caracteres (sin emojis) |

**Nota:** Los límites pueden variar ligeramente según la región y las actualizaciones de Meta. Verifica siempre la documentación más reciente.

### 13. Traducciones no coincidentes
- **Problema:** Las versiones en otros idiomas no coinciden con la plantilla en inglés
- **Solución:** Asegúrate de que todas las traducciones sean idénticas en significado y estructura

### 14. Uso de emojis en botones de respuesta rápida
- **Problema:** Emojis en botones de respuesta rápida
- **Solución:** Evita usar emojis en el texto de los botones

### 15. Uso excesivo de variables
- **Problema:** Demasiadas variables que hacen que el mensaje sea confuso
- **Solución:** Mantén las variables al mínimo y proporciona suficiente texto estático para dar claridad

**❌ Incorrecto:** `Hola {{1}}, {{2}}. Gracias por comprar {{3}}, {{4}}.`

**✅ Correcto:** `Hola {{1}}, gracias por comprar Nike Shoes.`

### 16. Falta de enlace para cancelar suscripción
- **Problema:** No se proporciona una opción para que el usuario cancele la suscripción
- **Solución:** Incluye un enlace de baja para evitar que los mensajes sean marcados como spam


> **Obligatorio para plantillas de marketing:** Todas las plantillas de marketing deben incluir un mecanismo de cancelación de suscripción. No hacerlo puede resultar en la desactivación de tu capacidad de enviar mensajes.

## Cómo Corregir una Plantilla Rechazada

Si tu plantilla es rechazada, **no puedes editarla directamente**. En su lugar, sigue estos pasos:


### Ubica la plantilla rechazada

Ve a la sección de **Plantillas** en tu panel de E-SMART360 y filtra por el estado "Rechazado".

### Duplica la plantilla

Haz clic en los tres puntos (⋯) junto a la plantilla rechazada y selecciona **Duplicar plantilla**.

### Realiza las correcciones necesarias

Basándote en el motivo del rechazo que proporciona Meta, corrige:
- Formato de variables
- Contenido problemático
- Categoría incorrecta
- Ortografía y gramática
- Cualquier otro error identificado

### Cambia el nombre de la plantilla

Usa un nombre descriptivo y diferente al original para evitar conflictos de duplicados.

### Reenvía para aprobación

Una vez realizadas todas las correcciones, envía la plantilla duplicada para una nueva revisión.

## Buenas Prácticas Generales



### Antes de crear la plantilla

- Revisa las políticas comerciales de WhatsApp
- Consulta las plantillas existentes para evitar duplicados
- Define claramente el propósito del mensaje
- Prepara el contenido multimedia si es necesario
- Elige nombres descriptivos y únicos

### Durante la creación

- Usa el Gestor de Plantillas de E-SMART360 para validación automática
- Mantén las variables secuenciales y con contexto
- Verifica los límites de caracteres
- Usa un solo idioma por plantilla
- Incluye enlaces de cancelación en plantillas de marketing


> **Última actualización: Guía de plantillas de WhatsApp (2026-05-06)**
> Esta guía se ha actualizado para reflejar las políticas más recientes de Meta sobre plantillas de mensajes. Los límites de caracteres y las categorías pueden cambiar según las actualizaciones de la plataforma de WhatsApp Business API.

## Preguntas Frecuentes


### ¿Cuánto tiempo tarda la aprobación de una plantilla de WhatsApp?

El tiempo de revisión puede variar desde unas pocas horas hasta varios días hábiles. Meta revisa cada plantilla manualmente para garantizar el cumplimiento de sus políticas. Si la revisión se demora más de 5 días hábiles, puedes contactar al soporte de Meta para obtener una actualización. Crear las plantillas desde el Gestor de Plantillas de E-SMART360 puede acelerar el proceso ya que la plataforma valida el formato automáticamente.

### ¿Puedo usar la misma plantilla para marketing y utilidad?

No. WhatsApp clasifica las plantillas en categorías específicas. Si una plantilla contiene contenido tanto de utilidad como de marketing, será clasificada automáticamente como marketing. Esto puede afectar los costos de conversación y los límites de mensajería. Es mejor crear plantillas separadas para cada propósito.

### ¿Qué hago si mi plantilla sigue siendo rechazada después de corregir los errores?

Si después de corregir los errores la plantilla sigue siendo rechazada:
1. Revisa detenidamente el motivo del rechazo proporcionado por Meta
2. Asegúrate de que el nombre de la plantilla sea único
3. Verifica que no haya contenido duplicado con otras plantillas
4. Comprueba que la categoría seleccionada sea la correcta
5. Prueba simplificando el mensaje al mínimo necesario
6. Considera crear la plantilla desde WhatsApp Manager directamente
7. Contacta al soporte de E-SMART360 para asistencia personalizada

### ¿Afecta el rechazo de plantillas a mi calidad de cuenta de WhatsApp?

Sí. Los rechazos frecuentes pueden afectar negativamente tu calificación de calidad en WhatsApp. Una calificación baja puede resultar en límites de mensajería reducidos o incluso la suspensión de tu capacidad de enviar mensajes. Es importante revisar cuidadosamente cada plantilla antes de enviarla para mantener una buena calificación.

### ¿Puedo enviar plantillas sin variables?

Sí, las plantillas sin variables son perfectamente aceptables. De hecho, para mensajes simples como "¡Gracias por tu compra!" o "Bienvenido a nuestra comunidad", una plantilla sin variables puede ser más clara y menos propensa a errores. Las variables son útiles cuando necesitas personalizar el mensaje para cada destinatario.

### ¿Qué son los botones de CTA y cómo ayudan a evitar rechazos?

Los botones de CTA (Call to Action) son botones interactivos que puedes agregar a tus plantillas de WhatsApp. Existen tres tipos:

1. **CTA de navegación:** Dirige a los usuarios a una página web
2. **CTA de llamada telefónica:** Inicia una llamada al hacer clic
3. **Respuesta rápida:** Permite a los usuarios responder con opciones predefinidas

Los botones de CTA ayudan a evitar rechazos porque:
- Eliminan la necesidad de usar acortadores de URL en el cuerpo del mensaje
- Mejoran la experiencia del usuario
- Proporcionan una acción clara y directa
- Reducen la ambigüedad del propósito del mensaje

**Límite de caracteres:** 20 caracteres por botón. Los botones de respuesta rápida no pueden contener emojis.

### ¿Cómo se calculan los costos de las conversaciones con plantillas?

WhatsApp cobra por conversación, no por mensaje individual. Cada vez que envías una plantilla a un usuario, se inicia una conversación que tiene un costo según:

- **La región del destinatario:** Los costos varían por país
- **La categoría de la plantilla:** Marketing, utilidad o autenticación
- **El tipo de conversación:** Iniciada por la empresa (plantilla) o por el usuario

Las conversaciones de autenticación suelen tener tarifas más bajas, mientras que las de marketing tienen tarifas más altas. Puedes consultar las tarifas actualizadas en el panel de E-SMART360.

### ¿Puedo crear plantillas con imágenes o videos?

Sí, WhatsApp permite crear plantillas con contenido multimedia como imágenes, videos y documentos. Sin embargo, debes tener en cuenta lo siguiente:

- **Imágenes:** Formato JPG o PNG, máximo 5 MB
- **Videos:** Formato MP4, máximo 16 MB, duración máxima de 30 segundos
- **Documentos:** Formato PDF, máximo 100 MB

Al enviar una plantilla multimedia para aprobación, debes adjuntar un archivo de muestra para que los revisores de Meta puedan verificar el contenido. Sin este archivo de muestra, la plantilla será rechazada.

**Límite de caracteres en el cuerpo:** 1024 caracteres, independientemente del tipo de medio utilizado.

### ¿Qué pasa si mi cuenta de WhatsApp Business no está verificada?

Si tu Facebook Business Manager no está verificado, puedes experimentar:

- Rechazo de plantillas sin motivo claro
- Error 131042 al intentar enviar mensajes
- Límites de mensajería más restrictivos
- Imposibilidad de acceder a ciertas funciones avanzadas

La verificación de tu negocio en Meta Business Manager es un proceso que toma entre 24 y 48 horas. Necesitarás proporcionar documentación oficial de tu empresa, como registros mercantiles o comprobantes fiscales. Una vez verificado, tendrás acceso completo a todas las funcionalidades de la API de WhatsApp.

## Proceso Completo de Creación de Plantillas Paso a Paso

A continuación, te mostramos el proceso completo para crear una plantilla de WhatsApp exitosa desde el panel de E-SMART360:


### Accede al Gestor de Plantillas

Desde tu panel de control de E-SMART360, navega hasta el módulo de **Mensajes** y selecciona **Plantillas de mensajes**. Aquí verás todas las plantillas existentes con su estado actual (aprobado, pendiente, rechazado).

### Configura los datos básicos

Haz clic en **Crear plantilla** y completa:
- **Nombre de la plantilla:** Usa un nombre descriptivo como `confirmacion_pedido_001`
- **Idioma:** Selecciona el idioma del mensaje
- **Categoría:** Marketing, Utilidad o Autenticación

### Redacta el cuerpo del mensaje

Escribe el contenido principal del mensaje. Si necesitas incluir variables, usa el formato `{{1}}`, `{{2}}`, etc. Asegúrate de:
- Proporcionar contexto para cada variable
- Mantener las variables en orden secuencial
- No superar los 1024 caracteres
- Usar guiones (----) para separar párrafos

### Agrega el encabezado y pie de página (opcional)

- **Encabezado de texto:** Máximo 60 caracteres
- **Encabezado multimedia:** Puedes agregar una imagen, video o documento
- **Pie de página:** Máximo 60 caracteres, ideal para información legal o de suscripción

### Configura los botones (opcional)

Puedes agregar hasta:
- **2 botones de respuesta rápida** (sin emojis, máximo 20 caracteres cada uno)
- **1 botón de CTA** con enlace a página web o número de teléfono
- **1 botón de CTA de navegación** + **1 botón de respuesta rápida**

### Define las variables de plantilla

Si tu plantilla incluye variables (`{{1}}`, `{{2}}`, etc.), asígnales nombres descriptivos en la sección de **Variables de plantilla**. Esto te ayudará a recordar qué dato debe ir en cada posición al momento de enviar.

### Revisa y envía para aprobación

Antes de enviar:
1. Revisa la ortografía y gramática
2. Verifica que no haya duplicados
3. Confirma la categoría seleccionada
4. Asegúrate de que las variables sean secuenciales
5. Haz clic en **Enviar para aprobación**


> Una vez creada la plantilla, el sistema la enviará automáticamente a Meta para su revisión. Puedes monitorear el estado desde el panel de Plantillas. El proceso de aprobación puede tardar desde unas horas hasta varios días hábiles.

## Ejemplos Prácticos



### Caso 1: Tienda de e-commerce

**Problema:** Una tienda en línea creó una plantilla de marketing para notificar envíos, y fue rechazada por categoría incorrecta.

**Solución:** La notificación de envío debe ser categorizada como **Utilidad**, no Marketing. La plantilla corregida:

```
📦 Tu pedido #{{1}} ha sido enviado.
Número de seguimiento: {{2}}
Fecha estimada: {{3}}
----
Gracias por comprar con nosotros.
```

Además, se corrigió el uso del emoji 📦 en el cuerpo (permitido en cuerpo, no en botones).

### Caso 2: Agencia de servicios

**Problema:** Una agencia creó una plantilla con variables no secuenciales: {{1}}, {{2}}, {{4}}.

**Solución:** Se corrigió la secuencia para que fuera {{1}}, {{2}}, {{3}}.

Plantilla original (incorrecta):
```
Hola {{1}}, tu cita para {{2}} ha sido agendada para el {{4}}.
```

Plantilla corregida (correcta):
```
Hola {{1}}, tu cita para {{2}} ha sido agendada para el {{3}}.
```

La agencia también agregó un enlace de cancelación de suscripción al pie para cumplir con las políticas de marketing.

### Caso 3: Restaurante con recordatorios

**Problema:** Un restaurante creó una plantilla de marketing para recordar a los clientes sus reservas, pero fue rechazada porque usaba acortadores de URL.

La plantilla original era:
```
¡Reserva confirmada! Ver detalles: bit.ly/3xRsv
```

**Solución:** Se movió el enlace a un botón de CTA y se cambió la categoría a **Utilidad**, ya que los recordatorios de reservas son transaccionales.

Plantilla corregida:
```
¡Reserva confirmada para el {{1}}!
Restaurante: {{2}}
Personas: {{3}}
----
Por favor llega 10 minutos antes.
```
Con un botón CTA que dice "Ver detalles" y enlaza a la página de confirmación completa.

Además, se agregó un pie de página con la opción de cancelar la suscripción para cumplir con las políticas de mensajería.

## Conclusión

Crear plantillas de mensajes de WhatsApp que pasen la revisión de Meta requiere atención a los detalles, conocimiento de las políticas y buenas prácticas de redacción. Siguiendo esta guía y utilizando el Gestor de Plantillas de E-SMART360, puedes minimizar significativamente las probabilidades de rechazo.

Recuerda estos puntos clave:

1. **Usa el Gestor de Plantillas** de E-SMART360 para validación automática de formato
2. **Elige la categoría correcta** para cada plantilla
3. **Mantén las variables secuenciales** y con contexto adecuado
4. **Evita contenido sensible**, lenguaje abusivo y URLs acortadas
5. **Incluye opción de cancelación** en plantillas de marketing
6. **Revisa la ortografía** antes de enviar
7. **Duplica y corrige** en lugar de intentar editar plantillas rechazadas

Con estas prácticas, tus plantillas serán aprobadas más rápido y podrás mantener una comunicación efectiva con tus clientes a través de WhatsApp.
