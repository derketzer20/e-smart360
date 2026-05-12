---
title: "Razones Comunes de Rechazo de Plantillas de Mensajes de WhatsApp"
description: "Guía completa sobre las causas más frecuentes por las que las plantillas de mensajes de WhatsApp son rechazadas por Meta, junto con soluciones detalladas, límites de caracteres, ejemplos prácticos y mejores prácticas para garantizar la aprobación."
section: "broadcasting"
order: 257
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "razones-comunes-rechazo-plantillas-whatsapp"
canonicalGroup: "razones-comunes-de-rechazo-de-plantillas-de-mensajes-de-whatsapp"
tags: ["broadcasting"]
staging: true
---
# Razones Comunes de Rechazo de Plantillas de Mensajes de WhatsApp


> **Actualización: Políticas de revisión de Meta (2025-06-18)**
> Este artículo ha sido actualizado con las últimas directrices de revisión de plantillas de WhatsApp de Meta, incluyendo nuevos criterios sobre variables, contenido multimedia y categorización de plantillas.

Las plantillas de mensajes de WhatsApp son necesarias para enviar mensajes a un suscriptor fuera de la ventana de 24 horas desde la última interacción con tu chatbot de WhatsApp.

También se conocen como **mensajes iniciados por la empresa**. Puedes enviar una plantilla de mensaje a cualquier número de WhatsApp en cualquier momento. Estas plantillas se utilizan principalmente para:

- Informar a los clientes sobre nueva información
- Enviar mensajes promocionales masivos
- Enviar códigos OTP
- Confirmaciones de pedidos y transacciones
- Recordatorios de citas
- Notificaciones de actualización de servicios

Antes de enviar una plantilla de mensaje de WhatsApp, es necesario crearla y enviarla para su revisión. Una vez que se obtiene la aprobación de Facebook o Meta, puedes usar estas plantillas de mensajes de WhatsApp.


> La creación de plantillas de mensajes de WhatsApp requiere atención al detalle y cumplimiento normativo. Cada plantilla es revisada por Meta para garantizar que cumple con las políticas de comercio y uso aceptable. Una plantilla rechazada no solo retrasa tus comunicaciones, sino que también puede afectar la calidad de tu cuenta.

## ¿Por qué es importante que tus plantillas sean aprobadas?

Las plantillas aprobadas te permiten:

1. **Iniciar conversaciones** con clientes fuera de la ventana de 24 horas
2. **Mantener una comunicación consistente** con campañas de marketing, notificaciones y mensajes transaccionales
3. **Proteger la calidad de tu cuenta**, ya que los rechazos frecuentes pueden reducir tu límite de mensajes
4. **Evitar bloqueos** por parte de Meta si se detectan infracciones reiteradas

A continuación, analizaremos los errores más comunes que debes evitar al crear tus plantillas de mensajes de WhatsApp.

---

## Formas de crear plantillas de mensajes

Puedes crear plantillas de mensajes de **dos maneras**:



### Desde E-SMART360

### Accede al Gestor de Plantillas

Desde el panel de control de E-SMART360, navega hasta la sección de Plantillas de WhatsApp. Allí encontrarás un editor intuitivo que te guiará en cada paso.
    
### Completa los campos

Define el nombre, la categoría, el idioma y el contenido de la plantilla (encabezado, cuerpo, pie de página y botones).
    
### Revisa y envía

La plataforma verificará automáticamente errores de formato antes de enviar la plantilla a Meta para su revisión.
    

### Desde WhatsApp Business Manager

### Crea la plantilla en Meta

Accede al Administrador de WhatsApp Business de Meta y crea la plantilla siguiendo sus formularios.
    
### Sincroniza en E-SMART360

Una vez creada y aprobada, sincronízala con E-SMART360 para comenzar a usarla en tus campañas.
    
### Mapea las variables

Si la plantilla contiene variables ({{1}}, {{2}}), mapea los campos dentro de E-SMART360 para que se rellenen automáticamente con los datos de tus contactos.
    

> Recomendamos crear las plantillas desde el Gestor de Plantillas de E-SMART360, ya que la plataforma verifica automáticamente los errores de formato más comunes y te ofrece sugerencias en tiempo real. Sin embargo, en algunos casos, ciertas cuentas de WhatsApp pueden experimentar demoras en la revisión al crear plantillas vía API. Si esto ocurre, te sugerimos crear la plantilla directamente en el Administrador de WhatsApp y luego sincronizarla.

---

## Tipos de causas de rechazo

Existen dos categorías principales de rechazo de plantillas:



### Problemas de Formato

Errores en la estructura técnica de la plantilla: variables mal formateadas, caracteres especiales incorrectos, numeración no secuencial, o espacios en blanco no permitidos.

### Problemas de Contenido

Infracciones a las políticas de contenido de Meta: solicitud de datos sensibles, lenguaje abusivo, duplicados, errores ortográficos, uso de acortadores de URL o selección incorrecta de categoría.

---

## Problemas de Formato

Si creas la plantilla desde E-SMART360, no necesitas preocuparte por los problemas de formato. La plataforma verifica automáticamente estos errores y te da sugerencias si cometes algún error.

Sin embargo, es importante que los conozcas para entender qué revisa Meta:


### 1. Variables faltantes o llaves desbalanceadas

Las variables deben usar el formato correcto con dobles llaves: **{{1}}**. 

  **❌ Incorrecto:** `Hola {1}, gracias por tu compra` (falta una llave)
  **❌ Incorrecto:** `Hola {{1, gracias` (llave de cierre faltante)
  **✅ Correcto:** `Hola {{1}}, gracias por tu compra {{2}}`

  Meta rechazará cualquier plantilla donde las variables no estén correctamente formateadas con dobles llaves `{{ }}`.

### 2. Caracteres especiales en variables

Los parámetros variables **no deben contener caracteres especiales** como #, $, %, &, *, etc.

  **❌ Incorrecto:** `{{1#}}, {{$2}}, {{3%}}`
  **✅ Correcto:** `{{1}}, {{2}}, {{3}}`

  Utiliza solo números dentro de las llaves. Los caracteres especiales pueden interferir con el sistema de procesamiento de Meta.

### 3. Variables no secuenciales

Las variables deben numerarse de forma **secuencial y sin saltos**.

  **❌ Incorrecto:** `{{1}}, {{2}}, {{4}}, {{5}}` (falta {{3}})
  **✅ Correcto:** `{{1}}, {{2}}, {{3}}, {{4}}`

  Meta espera que las variables sigan una secuencia numérica lógica. Si defines {{1}} y {{2}} pero no usas {{3}} y en su lugar usas {{4}}, la plantilla será rechazada por formato incorrecto.

### 4. Espacios en blanco en el contenido

Las líneas vacías dentro del cuerpo de la plantilla no están permitidas.

  **❌ Incorrecto:** Usar líneas en blanco para separar párrafos.
  **✅ Correcto:** Usa guiones (----) para separar secciones o contenido.

  Ejemplo de formato correcto:
  ```
  Gracias por registrarte.
  ----
  Haz clic en el botón de abajo para completar tu registro.
  ```

---

## Problemas de Contenido

### 1. Violación de la Política Comercial de WhatsApp

Si la plantilla contiene contenido que infringe la [Política Comercial de WhatsApp](https://www.whatsapp.com/legal/commerce-policy/), será rechazada automáticamente. Esto incluye:

- Promoción de productos restringidos (armas, drogas, tabaco, etc.)
- Contenido para adultos o explícito
- Servicios financieros no regulados
- Contenido engañoso o fraudulento


> Asegúrate de revisar la Política Comercial de WhatsApp antes de enviar cualquier plantilla. Las infracciones reiteradas pueden resultar en la suspensión de tu cuenta.

### 2. Solicitud de datos sensibles

No solicites **identificadores sensibles** a los usuarios. Ejemplos de datos prohibidos:

- Números de tarjetas de pago
- Números de cuentas bancarias
- Números de identificación nacional (DNI, pasaporte, etc.)
- Credenciales de acceso (contraseñas, PIN)
- Información médica protegida

**❌ Incorrecto:** "Por favor, comparte tu número de tarjeta de crédito para continuar, {{1}}."
**✅ Correcto:** "Para verificar tu pago, visita tu página de cuenta, {{1}}."

### 3. Contenido abusivo o amenazante

El contenido **abusivo, amenazante u hostil** no está permitido. Esto incluye:

- Amenazar a un cliente con acciones legales
- Avergonzar públicamente a un cliente
- Lenguaje agresivo o intimidatorio
- Insultos o descalificaciones


> Mantén siempre un tono profesional y respetuoso en todas tus plantillas. Las comunicaciones comerciales deben ser cordiales y constructivas.

### 4. Plantillas duplicadas

Si envías una plantilla con el **mismo texto en el cuerpo y pie de página** que una plantilla existente, será rechazada como duplicado.

**❌ Incorrecto:** Enviar "plantilla_ofertas_01" y "plantilla_ofertas_02" con el mismo contenido.
**✅ Correcto:** Modifica ligeramente el contenido y usa un **ID de plantilla diferente**.

Para evitar duplicados:
- Cambia al menos algunas palabras o frases
- Usa nombres descriptivos y únicos: `confirmacion_pedido_001` en lugar de `template_014`
- Añade variaciones en el contenido promocional

### 5. Mala redacción: errores ortográficos y gramaticales

Los errores ortográficos o gramaticales son una causa común de rechazo. Una plantilla con mala redacción da una imagen poco profesional y puede ser malinterpretada.


> Revisa siempre el contenido antes de enviarlo. Usa correctores ortográficos y, si es posible, pide a otra persona que revise la plantilla. En E-SMART360, puedes previsualizar la plantilla antes de enviarla a revisión.

### 6. Uso de acortadores de URL

No uses **URLs acortadas** en tus plantillas de mensajes. Ejemplos de acortadores prohibidos:

- bit.ly
- short.ly
- tinyurl.com
- ow.ly
- Cualquier otro servicio de acortamiento de enlaces

**❌ Incorrecto:** "Visita bit.ly/oferta-especial para más información."
**✅ Correcto:** Usa la URL completa o agrega el enlace como un botón de CTA (Call to Action).

### 7. Categoría incorrecta

Elegir la **categoría equivocada** puede resultar en el rechazo de la plantilla. Existen tres categorías principales:



### Utilidad

Mensajes transaccionales sobre una compra, suscripción o transacción específica.
  
  **Ejemplos:** Confirmaciones de pedido, recibos de pago, recordatorios de citas, actualizaciones de envío, notificaciones de cancelación.

  **Requisitos:** Deben ser funcionales y no promocionales. Si una plantilla contiene contenido de utilidad y marketing, se clasificará como marketing.

### Marketing

Mensajes promocionales o de divulgación que no están vinculados a una transacción específica.

  **Ejemplos:** Ofertas especiales, bienvenida a nuevos suscriptores, invitaciones a eventos, recomendaciones de productos, solicitudes de opinión.

  **Requisitos:** Mayor flexibilidad en el contenido, pero deben incluir una opción de exclusión voluntaria (opt-out).

### Autenticación

Mensajes para verificar la identidad del usuario mediante códigos de un solo uso.

  **Ejemplos:** Códigos OTP para inicio de sesión, verificación de dos factores, confirmación de cambios de cuenta.

  **Requisitos:** Solo pueden contener el código de autenticación y una breve instrucción. No pueden incluir contenido de marketing.

> Seleccionar la categoría incorrecta es uno de los errores más frecuentes. Por ejemplo, marcar una plantilla de marketing como "utilidad" para intentar obtener una aprobación más rápida resultará en un rechazo. Sé preciso en la categorización.

### 8. Variables sin contexto

Las variables colocadas **sin texto circundante** que explique su propósito serán rechazadas.

**❌ Incorrecto:** `{{1}} {{2}} {{3}}` (variables sueltas sin contexto)
**✅ Correcto:** `Hola {{1}}, tu pedido {{2}} ha sido confirmado el {{3}}.`

Siempre proporciona contexto para cada variable. El revisor debe entender claramente qué tipo de información reemplazará cada variable.

### 9. Nombre de plantilla poco claro

Los nombres **genéricos o vagos** como "Template_003" o "plantilla_nueva" serán rechazados.

**❌ Incorrecto:** `Template_001`, `plantilla_prueba`, `nueva`
**✅ Correcto:** `confirmacion_pedido_003`, `recordatorio_cita_medica`, `otp_inicio_sesion`

Usa nombres descriptivos que reflejen claramente el propósito de la plantilla. Esto ayuda a los revisores de Meta a entender rápidamente el uso previsto.

### 10. Texto usado como variables

Colocar **texto dentro de las llaves** `{{ }}` en lugar de números no está permitido.

**❌ Incorrecto:** `Hola {{nombre}}, tu {{producto}} está listo.`
**✅ Correcto:** `Hola {{1}}, tu {{2}} está listo.`

Las variables deben ser exclusivamente numéricas. El sistema de Meta no procesa correctamente variables con texto interno.

### 11. Exceder los límites de caracteres

Cada sección de la plantilla tiene límites específicos de caracteres que deben respetarse:

| Sección | Límite de Caracteres |
|---------|---------------------|
| Encabezado (texto) | 60 caracteres |
| Encabezado (subtítulo en multimedia) | 256 caracteres |
| Cuerpo (plantillas estándar) | 4096 caracteres |
| Cuerpo (plantillas multimedia) | 1024 caracteres |
| Cuerpo (para aprobación) | 1024 caracteres |
| Pie de página | 60 caracteres |
| Texto de botones | 20 caracteres |
| Payload de respuesta rápida | 256 caracteres |


> Durante el envío para aprobación, el cuerpo está restringido a 1024 caracteres (cada {{n}} cuenta como 1 carácter). Una vez aprobada, las plantillas estándar pueden usar hasta 4096 caracteres al enviar mensajes reales.

### 12. Mezcla de múltiples idiomas

Una plantilla que contenga **diferentes idiomas** será rechazada.

**❌ Incorrecto:** "Hola {{1}}, thank you for your purchase. Visita nuestra tienda."
**✅ Correcto:** Elige un solo idioma por plantilla y mantén la consistencia en todo el contenido.

Si necesitas comunicarte en varios idiomas, crea plantillas separadas para cada idioma.

### 13. Traducciones inconsistentes

Las versiones en otros idiomas deben **coincidir exactamente en significado** con la plantilla original en inglés.


> Si traduces una plantilla, asegúrate de que el mensaje sea idéntico en significado. Cualquier discrepancia entre la versión original y la traducción puede causar el rechazo de ambas.

### 14. Emojis en botones de respuesta rápida

El uso de **emojis en botones de respuesta rápida** no está permitido.

**❌ Incorrecto:** Botón que dice "🎉 Ver oferta"
**✅ Correcto:** Botón que dice "Ver oferta"

Los botones deben contener solo texto sin emojis ni caracteres especiales.

### 15. Uso excesivo de variables

Demasiadas variables pueden hacer que el mensaje sea **confuso y poco claro**.

**❌ Incorrecto:** `Hola {{1}}, {{2}}, gracias por comprar {{3}}, {{4}}, {{5}}.`
**✅ Correcto:** `Hola {{1}}, gracias por comprar Nike shoes.`

Mantén las variables al mínimo y proporciona suficiente texto estático para que el mensaje sea claro incluso sin los valores reemplazados.

### 16. Falta de enlace de exclusión voluntaria (opt-out)

Para plantillas de marketing, es obligatorio proporcionar a los usuarios una **opción para darse de baja** o excluirse de comunicaciones futuras.


> Sin una opción de exclusión voluntaria, los usuarios pueden marcar tus mensajes como spam, lo que afectará negativamente la calidad de tu cuenta y tus límites de mensajes.

---

## Cómo solucionar una plantilla rechazada

Si tu plantilla es rechazada, **no puedes editarla directamente**. En su lugar, sigue estos pasos:


### Ve a la sección de Rechazadas

En el panel de plantillas de E-SMART360, localiza la pestaña o filtro de plantillas rechazadas.

### Duplica la plantilla

Busca la plantilla rechazada, haz clic en los tres puntos (•••) y selecciona **Duplicar plantilla**. Esto creará una copia que podrás modificar.

### Corrige los errores

Revisa la lista de causas de rechazo y corrige cada error identificado. Si no estás seguro del motivo, verifica los detalles del rechazo en la sección de revisión.

### Vuelve a enviar

Una vez corregida, envía la nueva plantilla para su revisión. Si todo está en orden, Meta la aprobará en un plazo de 24 a 48 horas.

---

## Ejemplos prácticos de plantillas exitosas



### Utilidad: Confirmación de Pedido

**Categoría:** Utilidad
  
  **Cuerpo:**
  ```
  Hola {{1}},
  ¡Gracias por tu compra!
  Tu pedido #{{2}} ha sido confirmado.
  Total: ${{3}}
  Fecha estimada de entrega: {{4}}
  ----
  Puedes dar seguimiento a tu pedido desde tu cuenta.
  ```
  
  **Botones:** "Ver mi pedido"

### Marketing: Oferta Especial

**Categoría:** Marketing
  
  **Cuerpo:**
  ```
  ¡Hola {{1}}!
  Tenemos una oferta especial para ti.
  ----
  Obtén un 20% de descuento en tu próxima compra.
  Usa el código: BIENVENIDO20
  ----
  Válido hasta el {{2}}.
  Si no deseas recibir más ofertas, responde STOP.
  ```
  
  **Botones:** "Ver ofertas", "Comprar ahora"

---

## Preguntas Frecuentes


### ¿Cuánto tiempo tarda Meta en aprobar una plantilla?

Generalmente, Meta tarda entre 24 y 48 horas en revisar y aprobar una plantilla. Sin embargo, en algunos casos puede demorar hasta 72 horas. Si tu plantilla permanece en estado "pendiente" por más de una semana, te recomendamos crearla directamente en el Administrador de WhatsApp Business de Meta y luego sincronizarla con E-SMART360.

### ¿Puedo usar variables en el encabezado de la plantilla?

Sí, puedes usar variables en el encabezado de texto. El límite es de 60 caracteres. Para encabezados multimedia (imagen, video o documento), no se admiten variables en el archivo adjunto, pero sí en el texto del subtítulo o caption (hasta 256 caracteres).

### ¿Qué ocurre si envío una plantilla con la categoría incorrecta?

Meta rechazará la plantilla si la categoría no coincide con el contenido. Por ejemplo, si envías una plantilla promocional como "utilidad", será rechazada. Debes seleccionar la categoría que mejor describa el propósito real del mensaje. Si una plantilla contiene tanto contenido de utilidad como de marketing, Meta la clasificará automáticamente como marketing.

### ¿Las plantillas aprobadas caducan o deben renovarse?

Las plantillas aprobadas no caducan, pero Meta puede desactivarlas si detectan cambios en las políticas o si la calidad de la cuenta disminuye. También se desactivan si no se usan durante un período prolongado. Recomendamos revisar periódicamente el estado de tus plantillas en el panel de E-SMART360.

### ¿Puedo usar el mismo ID de plantilla después de un rechazo?

No. Una vez que una plantilla es rechazada, no puedes reutilizar el mismo ID. Debes duplicar la plantilla (lo que generará un nuevo ID), corregir los errores y enviarla nuevamente. El ID anterior queda asociado al registro de la plantilla rechazada.

### ¿Cómo afecta el rechazo de plantillas a la calidad de mi cuenta?

Los rechazos reiterados pueden afectar negativamente la calificación de calidad de tu cuenta de WhatsApp Business. Una calificación baja reduce tus límites de mensajes y, en casos extremos, puede llevar a la suspensión de tu número. Es importante revisar cuidadosamente cada plantilla antes de enviarla.

---

## Plantillas para reiniciar conversaciones fuera del horario laboral

Una situación común en la comunicación empresarial es que los clientes inicien conversaciones fuera del horario laboral. Para estos casos, es útil tener plantillas específicas que permitan retomar la conversación de forma natural cuando el equipo esté disponible.

### Características de las plantillas para reinicio de conversaciones

- **Mantienen el contexto** de la conversación anterior
- **Establecen expectativas** sobre los tiempos de respuesta
- **Ofrecen una transición suave** entre el chatbot y el agente humano
- **Preservan la calidad** del servicio al cliente

### Estructura recomendada

```
Hola {{1}},

Gracias por contactarnos. Recibimos tu mensaje anterior y queremos retomar nuestra conversación.

Lamento la demora en responder. ¿Te gustaría continuar donde lo dejamos?
```


> Las plantillas para reiniciar conversaciones son especialmente útiles cuando se combinan con chatbots que operan 24/7. El chatbot puede recopilar información básica y luego una plantilla bien diseñada permite al agente humano retomar la conversación con todo el contexto necesario.

---

## Limitaciones por tipo de plantilla

No todas las plantillas son iguales. Dependiendo del tipo de contenido que incluyan, existen diferentes restricciones:



### Plantillas de Texto

**Cuerpo:** Hasta 4096 caracteres (estándar)
  **Variables:** Hasta 15 por plantilla
  **Encabezado:** Texto de 60 caracteres máx.

### Plantillas Multimedia

**Cuerpo:** Hasta 1024 caracteres
  **Multimedia:** Imagen, video o documento
  **Caption:** Hasta 256 caracteres
  Requieren una muestra del archivo multimedia al enviarse.

### Plantillas con Botones

**Botones CTA:** URL o número de teléfono
  **Respuesta rápida:** Hasta 3 botones
  **Texto botón:** Máximo 20 caracteres
  Sin emojis en botones.

### Requisitos para plantillas multimedia

Cuando tu plantilla incluye contenido multimedia, debes:

1. **Adjuntar una muestra** del archivo (imagen, video o documento) al enviar la plantilla para revisión
2. **Asegurar que el archivo cumpla** con los requisitos de formato de Meta
3. **Verificar que el caption o subtítulo** no exceda los 256 caracteres
4. **No incluir variables** dentro del archivo multimedia (solo en el texto)


> La falta de una muestra multimedia es una de las causas más comunes de rechazo en plantillas con imágenes o videos. Siempre adjunta un archivo de ejemplo representativo.

---

## Cómo gestionar la calidad de tus plantillas

La calificación de calidad de tu cuenta de WhatsApp está directamente relacionada con el desempeño de tus plantillas. Para mantener una buena calificación:

### Monitoreo continuo

1. **Revisa las métricas** de tus plantillas en el panel de E-SMART360
2. **Identifica patrones** de rechazo para corregirlos sistemáticamente
3. **Elimina plantillas** que ya no uses para mantener el inventario limpio
4. **Actualiza plantillas** antiguas cuando cambien las políticas de Meta

### Señales de alerta

| Señal | Posible causa | Acción recomendada |
|-------|---------------|--------------------|
| Muchos rechazos seguidos | Incumplimiento de políticas | Revisar las políticas de Meta |
| Plantillas en revisión prolongada | Problemas con la API de Meta | Crear desde el Administrador de WhatsApp |
| Calidad de cuenta baja | Quejas de usuarios o spam | Mejorar contenido y segmentación |
| Límite de mensajes reducido | Mala calidad general | Detener campañas y revisar procesos |


> Una buena práctica es mantener un registro de todas tus plantillas, sus estados y las fechas de aprobación. Esto te permite identificar rápidamente qué plantillas están funcionando y cuáles necesitan ser actualizadas o reemplazadas.

---

## Errores adicionales que debes conocer

Además de los errores principales ya mencionados, existen otras causas menos comunes pero igualmente importantes:


### Uso de mayúsculas excesivas

El uso excesivo de mayúsculas (similar a "gritos" en línea) puede ser considerado como contenido agresivo o spam.

  **❌ Incorrecto:** "¡OFERTA IMPERDIBLE! DESCUENTO DEL 50%"
  **✅ Correcto:** "Oferta especial: 50% de descuento en tu próxima compra"

### Solicitar acciones imposibles

No solicites a los usuarios que realicen acciones que técnicamente no pueden hacer desde WhatsApp.

  **❌ Incorrecto:** "Haz clic aquí para abrir" (sin enlace)
  **✅ Correcto:** Usa un botón CTA con URL o proporciona la URL completa en el mensaje

### Exceso de signos de puntuación

El uso repetitivo de signos de exclamación o interrogación puede ser visto como spam.

  **❌ Incorrecto:** "¡¡¡Gran oferta!!! ¿¿¿Estás listo???"
  **✅ Correcto:** "Gran oferta. ¿Estás listo?"

---

## Ejemplo completo de flujo de trabajo con plantillas

A continuación, un caso práctico que muestra cómo gestionar las plantillas de principio a fin:

### Caso: Tienda de comercio electrónico

**1. Identificar necesidades de plantillas**

| Propósito | Categoría | Prioridad |
|-----------|-----------|-----------|
| Confirmación de pedido | Utilidad | Alta |
| Notificación de envío | Utilidad | Alta |
| Carrito abandonado | Marketing | Media |
| Ofertas semanales | Marketing | Media |
| Código OTP de inicio de sesión | Autenticación | Alta |

**2. Crear las plantillas en E-SMART360**

Para la confirmación de pedido:
- Nombre: `confirmacion_pedido_tienda`
- Categoría: Utilidad
- Idioma: Español
- Cuerpo: "Hola {{1}}, tu pedido #{{2}} ha sido confirmado. Total: ${{3}}. Recibirás una notificación cuando sea enviado."

**3. Enviar a revisión**
- E-SMART360 valida el formato automáticamente
- No hay errores de sintaxis
- Se envía la plantilla a Meta

**4. Monitorear el estado**


> En el panel de E-SMART360 puedes ver el estado de cada plantilla: Aprobada, Pendiente, Rechazada o Desactivada. Si alguna es rechazada, el sistema muestra el motivo para que puedas corregirlo rápidamente.

**5. Usar las plantillas aprobadas**

Una vez aprobadas, las plantillas están listas para usarse en:
- Campañas de broadcast masivo
- Automatizaciones de chatbot
- Notificaciones transaccionales vía API
- Respuestas automáticas a acciones del usuario

---

## Resumen de mejores prácticas


> Para maximizar tus posibilidades de aprobación, sigue estas reglas de oro:
  
  1. **Usa nombres descriptivos** para tus plantillas
  2. **Mantén las variables secuenciales** y con formato correcto {{1}}, {{2}}
  3. **Proporciona contexto** para cada variable
  4. **Respeta los límites de caracteres** de cada sección
  5. **Elige la categoría correcta** (utilidad, marketing o autenticación)
  6. **Evita errores ortográficos** y gramaticales
  7. **No uses acortadores de URL** ni enlaces sospechosos
  8. **Incluye opción de exclusión voluntaria** en plantillas de marketing
  9. **No solicites datos sensibles** como tarjetas de crédito o contraseñas
  10. **Usa E-SMART360** para crear tus plantillas y beneficiarte de las validaciones automáticas

---


> **Documentación actualizada (2025-06-18)**
> Esta guía se mantiene actualizada con las últimas políticas de revisión de plantillas de Meta. Las reglas de formato y contenido pueden cambiar periódicamente; consulta la documentación oficial de Meta para conocer actualizaciones recientes.
