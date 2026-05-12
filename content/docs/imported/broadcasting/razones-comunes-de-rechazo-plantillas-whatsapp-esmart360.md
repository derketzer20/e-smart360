---
title: "Razones Comunes del Rechazo de Plantillas de Mensajes de WhatsApp"
description: "Guía completa sobre por qué Meta rechaza las plantillas de WhatsApp, cómo evitarlo y consejos prácticos para asegurar la aprobación de tus plantillas de mensajes. Incluye errores de formato, contenido, políticas y soluciones detalladas."
section: "broadcasting"
order: 256
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "razones-comunes-de-rechazo-plantillas-whatsapp-esmart360"
canonicalGroup: "razones-comunes-del-rechazo-de-plantillas-de-mensajes-de-whatsapp"
tags: ["broadcasting"]
staging: true
---
# Razones Comunes del Rechazo de Plantillas de Mensajes de WhatsApp


> Las plantillas de mensajes de WhatsApp son esenciales para enviar mensajes a tus suscriptores fuera de la ventana de 24 horas posterior a su última interacción con tu chatbot de WhatsApp. También se conocen como mensajes iniciados por la empresa y se usan habitualmente para notificar a los clientes sobre nueva información, enviar mensajes promocionales masivos, códigos OTP y mucho más.

## ¿Qué Son las Plantillas de Mensajes de WhatsApp?

Las plantillas de mensajes de WhatsApp son mensajes preaprobados que permiten a las empresas iniciar conversaciones con sus clientes incluso cuando han pasado más de 24 horas desde la última interacción. Sin estas plantillas, solo puedes responder a mensajes entrantes dentro de esa ventana de 24 horas. Una vez que la ventana se cierra, cualquier mensaje que quieras enviar debe hacerse a través de una plantilla aprobada.

Con E-SMART360, gestionar y crear estas plantillas es un proceso sencillo. Sin embargo, antes de utilizarlas, deben ser creadas y enviadas para su revisión a Meta. Solo después de recibir la aprobación de Meta podrás empezar a enviar mensajes usando estas plantillas a tus clientes.


> Crear plantillas de mensajes de WhatsApp requiere atención al detalle y cumplimiento estricto de las políticas de Meta. Un solo error puede retrasar tu aprobación por días o incluso semanas, afectando tus campañas de marketing y comunicación.

## Métodos para Crear Plantillas de Mensajes

Existen dos formas principales de crear plantillas de mensajes en WhatsApp Business API:


### Desde el Gestor de Plantillas de E-SMART360

La forma más recomendada y conveniente. E-SMART360 verifica automáticamente los errores de formato y te sugiere correcciones antes de enviar la plantilla a revisión. Esto reduce significativamente la probabilidad de rechazo por errores de sintaxis o formato.


> Recomendamos crear las plantillas desde el Gestor de Plantillas de E-SMART360 para aprovechar las validaciones automáticas y las sugerencias en tiempo real.

### Desde el Administrador de Empresas de WhatsApp (WhatsApp Business Manager)

Puedes crear la plantilla directamente en WhatsApp Manager y luego sincronizarla en E-SMART360, asignando las variables correspondientes si la plantilla las incluye.

En algunos casos, las cuentas de WhatsApp pueden experimentar demoras prolongadas en la revisión de plantillas cuando se crean mediante API desde E-SMART360. En esta situación, recomendamos crear la plantilla directamente en WhatsApp Manager, sincronizarla en E-SMART360 y luego mapear las variables si la plantilla contiene alguna.

## Categorías de Plantillas de Mensajes

Existen tres categorías principales de plantillas de mensajes en WhatsApp. Elegir la categoría incorrecta es una de las causas más comunes de rechazo.



### Marketing

Las plantillas de marketing ofrecen una mayor flexibilidad y se utilizan para mensajes que no están relacionados con una transacción específica. Pueden incluir promociones, ofertas, mensajes de bienvenida, actualizaciones, invitaciones, recomendaciones o solicitudes de interacción con el cliente.

**Ejemplos:**
- Oferta promocional: "¡Oferta exclusiva! Obtén un 20% de descuento en tu próxima compra. Usa el código AHORRO20 al pagar."
- Reenganche de clientes: "Te extrañamos! Disfruta de envío gratis en tu próximo pedido. Toca abajo para comprar ahora."
- Invitación a evento: "Únete a nuestro próximo seminario web sobre tendencias de marketing digital. ¡Regístrate ahora!"

### Utilidad (Utility)

Las plantillas de utilidad son mensajes preaprobados diseñados para actualizaciones transaccionales, como confirmaciones, cambios o suspensiones relacionados con una transacción o suscripción específica. Deben ser funcionales y no promocionales. Si una plantilla contiene contenido tanto de utilidad como de marketing, se clasificará como plantilla de marketing.

**Ejemplos:**
- Confirmación de pedido: "Tu pedido #12345 ha sido confirmado. Pronto recibirás una actualización de seguimiento."
- Recibo de pago: "Tu pago de $50 se ha procesado exitosamente. ¡Gracias por tu compra!"
- Recordatorio de cita: "Recordatorio: Tu cita con el Dr. García está programada para el 15 de marzo a las 10 a.m. Responde para confirmar."

### Autenticación (Authentication)

Estas plantillas se utilizan exclusivamente para enviar códigos de autenticación, como OTP (contraseñas de un solo uso), verificación de dos factores o códigos de confirmación de identidad. Tienen reglas específicas y no pueden incluir contenido de marketing o utilidad.

**Ejemplo:**
- "Tu código de verificación es {{1}}. Este código expirará en 5 minutos."

> Elegir la categoría incorrecta puede resultar en el rechazo inmediato de tu plantilla. Por ejemplo, marcar una plantilla de marketing como de utilidad para intentar evadir restricciones resultará en un rechazo y posiblemente en una revisión más estricta de tus futuras plantillas.

## Tipos Comunes de Rechazo

Los rechazos de plantillas de mensajes de WhatsApp se dividen en dos categorías principales:

### 1. Problemas de Formato

Si creas tu plantilla desde el Gestor de Plantillas de E-SMART360, no necesitas preocuparte por los problemas de formato. La plataforma verifica automáticamente estos errores y te sugiere correcciones si cometes algún error.


### Errores de formato más frecuentes

**Variables faltantes o llaves desbalanceadas:** Los parámetros de variables faltan o tienen llaves incorrectas. El formato correcto es {{1}}.

**Caracteres especiales en variables:** Los parámetros de variables contienen caracteres especiales como #, $ o %.

**Numeración no secuencial:** Las variables no siguen un orden secuencial. Por ejemplo, se definen {{1}}, {{2}}, {{4}}, {{5}} pero {{3}} no existe. Las variables deben ser secuenciales ({{1}}, {{2}}, {{3}}).

**Texto usado como variable:** Se coloca texto dentro de {{ }} en lugar de números. Usa siempre placeholders numéricos.

**Formato incorrecto:** Ejemplo ❌ incorrecto: _Hola {{1, tu pedido {{2}} está confirmado_. — Ejemplo ✅ correcto: _Hola {{1}}, tu pedido {{2}} está confirmado_.

### 2. Problemas de Contenido

Los problemas de contenido son más variados y requieren atención especial. A continuación, se detallan las causas más comunes.


### Violación de las políticas comerciales de WhatsApp

Si la plantilla contiene contenido que infringe las Políticas Comerciales de WhatsApp, será rechazada automáticamente. Esto incluye la promoción de productos restringidos, contenido para adultos, armas, drogas, tabaco, servicios financieros no regulados y otros artículos prohibidos.

**Ejemplo ❌ Incorrecto:** "Comparte el número completo de tu tarjeta de crédito para continuar, {{1}}."

**Ejemplo ✅ Correcto:** "Para verificar tu pago, visita tu página de cuenta, {{1}}."

### Solicitud de datos sensibles

No solicites identificadores sensibles a los usuarios, como números de tarjetas de pago, números de cuentas financieras, números de identificación nacional u otros datos sensibles. Las plantillas que soliciten este tipo de información serán rechazadas.

En su lugar, redirige al usuario a un portal seguro: "Para actualizar tu información de pago, inicia sesión en tu cuenta segura."

### Contenido abusivo o amenazante

El contenido potencialmente abusivo o amenazante, como amenazar a un cliente con acciones legales o avergonzarlo públicamente, resultará en el rechazo inmediato de la plantilla. Mantén siempre un tono profesional y respetuoso en todas tus plantillas.

### Plantillas duplicadas

Si una plantilla se envía con la misma redacción en el cuerpo y pie de página que una plantilla existente, será rechazada como duplicada. Para evitarlo, modifica ligeramente el contenido y usa un ID de plantilla diferente.

**Ejemplo ❌ Incorrecto:** plantilla_014

**Ejemplo ✅ Correcto:** actualizacion_pedido_001

### Errores ortográficos o gramaticales

El contenido deficiente con errores ortográficos o gramaticales es otra razón común de rechazo. Revisa cuidadosamente todo el contenido antes de enviarlo. Usa herramientas de corrección ortográfica y pide a un colega que revise la plantilla antes de enviarla.

### URLs acortadas

No uses URLs acortadas en tus plantillas de mensajes como bit.ly, short.ly, tinyurl.com, etc. Las URLs acortadas son una señal de alerta para los revisores de Meta. Usa URLs completas o agrega enlaces en botones de CTA (llamada a la acción).

### Categoría incorrecta

Elegir la categoría incorrecta de plantilla también puede resultar en rechazo. Recuerda que existen tres categorías: Marketing, Utilidad y Autenticación. Asegúrate de seleccionar la categoría correcta según el propósito del mensaje. Si una plantilla contiene contenido tanto de utilidad como de marketing, WhatsApp la clasificará automáticamente como marketing.

## Errores Específicos de Rechazo y Cómo Solucionarlos

A continuación, se presenta una lista detallada de los errores más comunes que causan el rechazo de plantillas y cómo solucionarlos.

### 1. Variables sin Contexto

**Problema:** Las variables se colocan sin texto circundante, lo que las hace confusas para los revisores.

**Solución:** Siempre proporciona contexto para las variables. Las plantillas con variables independientes serán rechazadas.

**Ejemplo ❌ Incorrecto:** `{{1}} {{2}} {{3}}`

**Ejemplo ✅ Correcto:** _Hola {{1}}, gracias por comprar {{2}} el día {{3}}._

### 2. Nombre de Plantilla Poco Claro

**Problema:** Nombres genéricos o vagos como "Plantilla_003" o "temp_1".

**Solución:** Usa nombres descriptivos como `confirmacion_pedido_003` o `recordatorio_cita_001` para aclarar el propósito.

### 3. Contenido que No Explica el Uso de la Plantilla

**Problema:** El mensaje no deja claro su propósito a los revisores.

**Solución:** Proporciona contenido significativo que explique claramente el contexto.

**Ejemplo ✅ Correcto:** _Hola {{1}}, disculpa la demora. ¿Te gustaría continuar esta conversación?_

### 4. Líneas Vacías en el Contenido

**Problema:** Espacios en blanco entre el texto de la plantilla.

**Solución:** Usa guiones múltiples (----) para los saltos de párrafo.

**Ejemplo ✅:**
_Gracias por registrarte._

----

_Haz clic en el botón de abajo para completar tu registro._

### 5. Uso Excesivo de Variables

**Problema:** Usar demasiadas variables, lo que hace que el mensaje sea confuso.

**Solución:** Mantén las variables al mínimo y proporciona suficiente texto estático para mayor claridad.

**Ejemplo ❌ Incorrecto:** _Hola {{1}}, {{2}}, gracias por comprar {{3}}, {{4}}._

**Ejemplo ✅ Correcto:** _Hola {{1}}, gracias por comprar zapatos Nike. Tu pedido #{{2}} está en proceso._

### 6. Faltan Enlaces para Darse de Baja (Opt-Out)

**Problema:** No proporcionar a los usuarios una opción para cancelar la suscripción.

**Solución:** Incluye un enlace para darse de baja para evitar que los mensajes sean marcados como spam. Esto es especialmente importante para plantillas de marketing.

**Ejemplo:** _Si deseas dejar de recibir estos mensajes, haz clic aquí: [cancelar suscripción]._

### 7. Mezcla de Varios Idiomas

**Problema:** Una sola plantilla contiene diferentes idiomas.

**Solución:** Usa un solo idioma por plantilla. Si necesitas comunicarte en varios idiomas, crea plantillas separadas para cada uno.

### 8. Traducciones Inconsistentes

**Problema:** Las versiones en otros idiomas no coinciden con la plantilla en inglés.

**Solución:** Asegúrate de que todas las traducciones sean idénticas en significado y estructura.

### 9. Uso de Emojis en Botones de Respuesta Rápida

**Problema:** Emojis en botones de respuesta rápida (Quick Reply).

**Solución:** Evita usar emojis en el texto de los botones. Los botones solo deben contener texto plano.

### 10. Faltan Muestras de Medios

**Problema:** No se adjunta un archivo de ejemplo para plantillas que incluyen medios (imágenes, videos, documentos).

**Solución:** Adjunta siempre una imagen, video o documento de muestra cuando envíes plantillas con contenido multimedia.

## Límites de Caracteres para Plantillas

Exceder los límites de caracteres puede provocar el rechazo de tu plantilla. Asegúrate de respetar estos límites:


> Para las plantillas estándar, el cuerpo puede tener hasta 4096 caracteres. Sin embargo, al enviar para aprobación, el cuerpo está restringido a 1024 caracteres (cada {{n}} cuenta como 1 carácter).

| Elemento | Límite de Caracteres |
|---|---|
| **Encabezado (Texto)** | Hasta 60 caracteres |
| **Encabezado (Subtítulo para medios)** | Hasta 256 caracteres |
| **Cuerpo (Plantillas con medios)** | Hasta 1024 caracteres |
| **Cuerpo (Plantillas estándar)** | Hasta 4096 caracteres |
| **Pie de página** | Hasta 60 caracteres |
| **Texto del botón** | Hasta 20 caracteres |
| **Payload de respuesta rápida** | Hasta 256 caracteres |

## Ejemplos Prácticos de Plantillas Aprobadas vs Rechazadas



### ✅ Plantillas Correctas

**Confirmación de pedido (Utilidad):**
_Hola {{1}}, tu pedido #{{2}} ha sido confirmado. Recibirás una notificación cuando sea enviado. Gracias por tu compra._

**Recordatorio de cita (Utilidad):**
_Recordatorio: Tu cita con {{1}} está programada para el {{2}} a las {{3}}. Responde CONFIRMAR para confirmar._

**Oferta promocional (Marketing):**
_¡Hola {{1}}! Como cliente exclusivo, te ofrecemos un {{2}}% de descuento en tu próxima compra. Válido hasta {{3}}. Usa el código: {{4}}._

### ❌ Plantillas Incorrectas

**Datos sensibles:**
_Por favor, comparte tu número de tarjeta de crédito para procesar tu reembolso. ❌_

**Sin contexto:**
_¡Hola {{1}}! Tu {{2}} está listo para {{3}}. ❌_

**URL acortada:**
_Visita bit.ly/xyz para más información sobre tu pedido. ❌_

**Categoría incorrecta:**
Enviar un mensaje promocional como "Utilidad" para evitar restricciones. ❌

## Errores Adicionales Detectados por Meta y Sus Soluciones

Meta proporciona mensajes de error específicos cuando una plantilla es rechazada. A continuación, se presentan los errores más comunes y cómo resolverlos.

### Error: Variables Incorrectamente Formateadas

**Problema:** Las variables no utilizan el formato correcto de doble llave {{ }}.

**Solución:** Asegúrate de que todas las variables estén encerradas en dobles llaves: {{1}}, {{2}}, {{3}}. Nunca uses llaves simples o variables sin encerrar.

**Ejemplo ❌ Incorrecto:** `Hola {1}, tu pedido {2}`

**Ejemplo ✅ Correcto:** `Hola {{1}}, tu pedido {{2}}`

### Error: Caracteres Especiales en el Contenido

**Problema:** Uso de caracteres especiales como #, $, %, &, *, ~, `, etc., dentro del texto de la plantilla o en las variables.

**Solución:** Limita el uso de caracteres especiales. Si necesitas usarlos, asegúrate de que estén fuera de las variables y que sean parte del texto estático. Los caracteres especiales dentro de las variables causan rechazo automático.

### Error: Contenido que Viola la Política de Comercio

**Problema:** El mensaje promociona productos o servicios prohibidos por las políticas de comercio de WhatsApp, como servicios de apuestas, contenido para adultos, productos farmacéuticos sin receta, armas, tabaco, alcohol en regiones restringidas, o servicios financieros no regulados.

**Solución:** Revisa la lista completa de productos prohibidos en la Política de Comercio de WhatsApp. Si tu negocio opera en una industria regulada (salud, finanzas, juegos de azar), consulta las pautas específicas de tu sector. Considera trabajar con un asesor de cumplimiento normativo si tienes dudas.

### Error: Plantilla Demasiado Genérica

**Problema:** El mensaje es demasiado vago y no especifica claramente su propósito o la empresa que lo envía.

**Solución:** Incluye el nombre de tu empresa y especifica el propósito del mensaje. Una plantilla como "Gracias por tu interés" es demasiado genérica. En su lugar, usa "Gracias por tu interés en [Nombre de Empresa], {{1}}."

### Error: Faltan Datos del Remitente

**Problema:** La plantilla no identifica claramente quién envía el mensaje.

**Solución:** Incluye el nombre de tu empresa o marca en el encabezado o cuerpo del mensaje. Esto ayuda a los destinatarios a reconocer el mensaje y Reduce la probabilidad de que lo marquen como spam.

### Error: Uso Incorrecto de Mayúsculas

**Problema:** Uso excesivo de mayúsculas (TEXTO EN MAYÚSCULAS) que puede interpretarse como gritar o ser agresivo.

**Solución:** Usa mayúsculas solo cuando sea apropiado, como en nombres propios o acrónimos. Evita escribir mensajes completos en mayúsculas.

## Cómo Solucionar una Plantilla Rechazada

Si tu plantilla es rechazada, no puedes editarla directamente. En su lugar, sigue estos pasos:


### Identifica el motivo del rechazo

Revisa la notificación de rechazo que proporciona Meta. Identifica exactamente qué regla se violó. Los mensajes de rechazo suelen incluir un código de error y una descripción del problema.


> Los códigos de error comunes incluyen: ERROR_130472 (número de teléfono en un experimento), ERROR_131026 (mensaje no entregable), y errores de validación de plantilla como TEMPLATE_REJECTED o CONTENT_REJECTED.

### Duplica la plantilla rechazada

Ve a la sección de plantillas rechazadas, busca la plantilla, haz clic en los tres puntos (...) y selecciona "Duplicar plantilla". Esto creará una copia editable.

### Corrige los errores identificados

Realiza las correcciones necesarias basadas en el motivo del rechazo. Asegúrate de que el contenido cumpla con todas las políticas de Meta.

### Cambia el nombre de la plantilla

Usa un nombre descriptivo y diferente al original. Por ejemplo, cambia de "plantilla_014" a "confirmacion_pedido_v2".

### Vuelve a enviar para revisión

Una vez que hayas realizado todas las correcciones, envía la plantilla duplicada para su revisión.

## Mejores Prácticas para Evitar Rechazos


> Siguiendo estas mejores prácticas, mejorarás significativamente tus posibilidades de aprobación de plantillas.

### 1. Usa Variables con Contexto Adecuado

Siempre coloca las variables dentro de texto descriptivo que explique su propósito. Por ejemplo, en lugar de `{{1}} {{2}} {{3}}`, usa `Hola {{1}}, tu reserva para {{2}} el día {{3}} está confirmada.`

### 2. Nombres Descriptivos para tus Plantillas

Usa nombres que reflejen claramente el propósito de la plantilla, como `recordatorio_cita_medica` en lugar de `temp_123`. Esto ayuda tanto a los revisores como a tu equipo a identificar rápidamente la función de cada plantilla.

### 3. Categorización Precisa

Selecciona cuidadosamente la categoría (Marketing, Utilidad o Autenticación) que mejor se adapte al contenido de tu mensaje. Recuerda que si tu plantilla contiene elementos tanto de utilidad como de marketing, será clasificada como marketing.

### 4. Revisión Ortográfica y Gramatical

Antes de enviar, revisa minuciosamente el contenido en busca de errores ortográficos o gramaticales. Considera usar herramientas como Grammarly o LanguageTool para una revisión adicional.

### 5. Evita URLs Acortadas

Usa siempre URLs completas en tus plantillas. Si necesitas incluir un enlace, considera usar un botón CTA en lugar de texto con URL.

### 6. Mantén un Solo Idioma por Plantilla

Cada plantilla debe estar en un solo idioma. Si necesitas comunicarte en múltiples idiomas, crea plantillas separadas para cada uno.

### 7. Proporciona Opción de Exclusión (Opt-Out)

Para plantillas de marketing, incluye siempre una opción clara para que los usuarios puedan darse de baja. Esto ayuda a mantener una buena calificación de calidad y evita que los mensajes sean marcados como spam.

### 8. Mínimo de Variables Necesarias

Usa solo las variables estrictamente necesarias. Demasiadas variables pueden hacer que el mensaje sea confuso y aumentar la probabilidad de rechazo. Además, menos variables significan menos posibilidades de errores de formato.

## Casos de Uso: Ejemplos Reales de Plantillas Exitosas



### 🛒 E-commerce

**Notificación de envío (Utilidad):**
_Hola {{1}}, tu pedido {{2}} ha sido enviado. Número de seguimiento: {{3}}. Fecha estimada de entrega: {{4}}._

**Carrito abandonado (Marketing):**
_¡Hola {{1}}! Notamos que dejaste productos en tu carrito. Completa tu compra hoy y obtén {{2}}% de descuento. ¡Tu carrito te espera!_

### 🏥 Salud

**Confirmación de cita (Utilidad):**
_Hola {{1}}, tu cita con el Dr. {{2}} ha sido confirmada para el {{3}} a las {{4}}. Por favor, llega 15 minutos antes._

**Recordatorio de medicación (Marketing con opt-out):**
_Recordatorio: Toma tu medicación {{1}} a las {{2}}. Para más información, visita nuestro portal de pacientes. ¿No deseas recibir estos mensajes? Responde BAJA._

### 🏦 Finanzas

**Alerta de transacción (Utilidad):**
_Estimado {{1}}, se ha realizado una transacción de {{2}} en tu cuenta {{3}} el {{4}}. Si no reconoces esta transacción, contáctanos inmediatamente._

**Código OTP (Autenticación):**
_Tu código de verificación es {{1}}. No compartas este código con nadie. Válido por {{2}} minutos._

## Preguntas Frecuentes (FAQs)


### ¿Cuánto tiempo tarda la aprobación de una plantilla de WhatsApp?

El tiempo de aprobación varía según la carga de trabajo de Meta. Generalmente, puede tomar desde unas pocas horas hasta varios días hábiles. Las plantillas bien formateadas y con contenido claro tienden a aprobarse más rápido. Si tu plantilla permanece en revisión por más de 7 días, puedes contactar al soporte de Meta para obtener una actualización.

### ¿Puedo editar una plantilla después de que ha sido rechazada?

No, no puedes editar directamente una plantilla rechazada. Debes duplicarla, realizar las correcciones necesarias y enviar la copia para revisión. El proceso es: identificar el error → duplicar la plantilla → corregir → renombrar → reenviar.

### ¿Qué pasa si mi plantilla es aprobada pero luego la modifico?

Cualquier modificación a una plantilla aprobada requiere una nueva revisión por parte de Meta. La plantilla modificada quedará en estado "pendiente" hasta que sea revisada nuevamente. Durante este período, la versión anterior aprobada seguirá funcionando.

### ¿Las plantillas de autenticación tienen requisitos especiales?

Sí, las plantillas de autenticación solo pueden contener códigos OTP o de verificación y deben incluir una instrucción clara sobre no compartir el código. No pueden incluir contenido de marketing o promocional. Además, tienen límites de caracteres más estrictos y deben usar el formato de código adecuado.

### ¿Puedo usar el mismo contenido de plantilla para diferentes categorías?

No, cada categoría tiene requisitos específicos. Una plantilla diseñada como "Utilidad" no puede contener elementos promocionales. Si tu contenido tiene elementos de marketing, debes clasificarla como "Marketing". Intentar usar una categoría incorrecta resultará en rechazo.

### ¿Qué puedo hacer si mi plantilla se rechaza repetidamente?

Si una plantilla se rechaza varias veces, revisa cuidadosamente cada motivo de rechazo. Considera: 1) Simplificar el mensaje, 2) Reducir el número de variables, 3) Asegurarte de que el propósito sea claro, 4) Verificar que no haya violaciones de políticas, 5) Consultar la documentación oficial de Meta sobre plantillas. Si el problema persiste, contacta al soporte de Meta para obtener orientación específica.

### ¿Cómo afecta la calificación de calidad a la aprobación de plantillas?

La calificación de calidad de tu número de WhatsApp (alta, media, baja) puede influir en la revisión de tus plantillas. Los números con calificación baja tienen más probabilidades de que sus plantillas sean rechazadas o revisadas con mayor escrutinio. Mantén una buena calificación de calidad evitando que los usuarios marquen tus mensajes como spam y respondiendo a las conversaciones iniciadas por clientes.

## Guía de Verificación Previa al Envío (Checklist)

Antes de enviar cualquier plantilla para revisión, verifica los siguientes puntos:


> Usa esta lista de verificación para asegurarte de que tu plantilla cumple con todos los requisitos antes de enviarla. Esto te ahorrará tiempo y evitará rechazos innecesarios.

### ✅ Formato

- [ ] Las variables usan doble llave: {{1}}, {{2}}, {{3}}
- [ ] Las variables están numeradas secuencialmente (sin saltos)
- [ ] No hay caracteres especiales (#, $, %) dentro de las variables
- [ ] No hay líneas vacías en el contenido
- [ ] Los saltos de párrafo usan guiones (----) cuando es necesario
- [ ] No se exceden los límites de caracteres por sección

### ✅ Contenido

- [ ] El propósito del mensaje es claro
- [ ] No se solicitan datos sensibles (tarjetas, identificación nacional)
- [ ] No hay URLs acortadas (bit.ly, tinyurl, etc.)
- [ ] No hay errores ortográficos ni gramaticales
- [ ] El tono es profesional y respetuoso
- [ ] No hay lenguaje abusivo o amenazante
- [ ] La plantilla no es un duplicado exacto de otra existente
- [ ] Se incluye un solo idioma en toda la plantilla

### ✅ Categoría y Políticas

- [ ] La categoría seleccionada (Marketing, Utilidad, Autenticación) es correcta
- [ ] El contenido cumple con la Política de Comercio de WhatsApp
- [ ] Las plantillas de marketing incluyen opción de exclusión (opt-out)
- [ ] Las traducciones (si aplica) coinciden exactamente con el original
- [ ] Si es una plantilla con medios, se adjunta una muestra

### ✅ Botones y Elementos Interactivos

- [ ] Los botones de respuesta rápida no contienen emojis
- [ ] El texto de los botones no excede los 20 caracteres
- [ ] Los botones CTA tienen URLs válidas y completas
- [ ] Los payloads de respuesta rápida no exceden los 256 caracteres

## Tipos de Conversación y su Impacto en las Plantillas

Entender los tipos de conversación de WhatsApp es fundamental para usar correctamente las plantillas. WhatsApp clasifica las conversaciones en diferentes categorías, y cada una tiene implicaciones en el costo y los requisitos.

### Conversaciones Iniciadas por la Empresa

Son aquellas en las que la empresa envía el primer mensaje usando una plantilla aprobada. Estas conversaciones tienen un costo por conversación y están sujetas a las reglas de la ventana de 24 horas. Las plantillas de marketing, utilidad y autenticación pueden iniciar este tipo de conversación.

### Conversaciones Iniciadas por el Usuario

Ocurren cuando un cliente envía un mensaje a tu número de WhatsApp primero. En este caso, tienes una ventana de 24 horas para responder sin necesidad de usar una plantilla. Durante este período, puedes enviar mensajes libres (no requieren plantilla). Después de 24 horas, cualquier mensaje adicional debe usar una plantilla aprobada.

### Conversaciones de Servicio

Son conversaciones donde todos los mensajes se enmarcan en un contexto de servicio al cliente. WhatsApp ha establecido que ciertos tipos de mensajes de servicio no requieren plantilla si se envían dentro de la ventana de 24 horas después de la última interacción del usuario.

## Calificación de Calidad y su Relación con las Plantillas

La calificación de calidad de tu número de WhatsApp influye directamente en la aprobación de tus plantillas y en los límites de mensajería.


> Una calificación de calidad baja (LOW) puede resultar en límites de mensajería reducidos y un escrutinio más estricto de tus plantillas. Mantener una calificación alta es esencial para operar sin interrupciones.

### Factores que Afectan la Calificación:

1. **Tasa de bloqueos:** Cuántos usuarios bloquean tu número después de recibir mensajes
2. **Reportes de spam:** Cuántos usuarios marcan tus mensajes como spam
3. **Tasa de respuesta:** Qué tan frecuentemente respondes a los mensajes de los clientes
4. **Rechazo de plantillas:** Historial de plantillas rechazadas
5. **Incumplimiento de políticas:** Violaciones repetidas de las políticas de WhatsApp

### Cómo Mejorar tu Calificación:

1. Envía mensajes relevantes y esperados por tus clientes
2. Incluye opciones claras de exclusión voluntaria en todas las plantillas de marketing
3. Responde rápidamente a los mensajes entrantes de los clientes
4. Segmenta tu audiencia para evitar enviar mensajes irrelevantes
5. Revisa periódicamente las métricas de calidad en el Administrador de WhatsApp
6. Reduce la frecuencia de envío si notas un aumento en los reportes de spam
7. Usa plantillas de utilidad para mensajes transaccionales y de marketing para promociones

## Límites de Mensajería y su Relación con las Plantillas

Los límites de mensajería determinan cuántos destinatarios pueden recibir tus plantillas en un período de 24 horas. Estos límites están directamente vinculados a la calificación de calidad de tu número.

| Calificación | Límite de Mensajería | Descripción |
|---|---|---|
| **Alta (GREEN)** | 250,000+ destinatarios/día | Límite máximo, crecimiento automático |
| **Media (YELLOW)** | 50,000 destinatarios/día | Límite moderado, requiere mejorar calidad |
| **Baja (RED)** | 1,000 destinatarios/día | Límite restringido, riesgo de desactivación |

Para aumentar tus límites, mantén una calificación de calidad alta durante al menos 7 días. El sistema de Meta aumenta automáticamente los límites cuando se detecta un comportamiento positivo consistente.

## Conclusión

Evitar estos errores comunes durante la creación de tus plantillas de mensajes de WhatsApp aumentará significativamente tus posibilidades de aprobación. Recuerda siempre:

1. **Crea desde el Gestor de Plantillas** de E-SMART360 para aprovechar las validaciones automáticas
2. **Revisa cuidadosamente** el formato y contenido antes de enviar
3. **Elige la categoría correcta** según el propósito del mensaje
4. **Mantén un tono profesional** y evita contenido sensible
5. **Proporciona contexto** para todas las variables
6. **Incluye opciones de exclusión** en plantillas de marketing
7. **Respeta los límites de caracteres** establecidos por Meta

Si sigues estas pautas, tus plantillas deberían ser aprobadas sin problemas. Para obtener más información sobre cómo crear plantillas interactivas, consulta nuestra guía sobre plantillas de carrusel y formatos multimedia avanzados.


> **Actualización de políticas de Meta (2026-05-06)**
> Meta actualiza periódicamente sus políticas de revisión de plantillas. Te recomendamos revisar trimestralmente nuestras guías actualizadas para mantenerte al día con los cambios normativos.
