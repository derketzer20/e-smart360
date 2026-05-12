---
title: "Guía Completa para Crear Plantillas de Mensaje en WhatsApp"
description: "Aprende a crear, configurar y aprobar plantillas de mensajes para WhatsApp Business API utilizando E-SMART360. Cubre tipos de plantillas, componentes, variables, categorías, directrices de formato y mejores prácticas para evitar rechazos."
section: "broadcasting"
order: 226
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "guia-para-crear-plantillas-de-mensaje-en-whatsapp.md"
canonicalGroup: "para-crear-plantillas-de-mensaje-en-whatsapp"
tags: ["broadcasting"]
staging: true
---
import { Callout, Steps, Expandable, Columns, Card, Tabs, Tab, CodeGroup, CodeGroupItem, Update } from '@components';

# Guía Completa para Crear Plantillas de Mensaje en WhatsApp


> Las plantillas de mensaje son esenciales para la comunicación proactiva con tus clientes a través de WhatsApp Business API. Con E-SMART360, puedes gestionar todo el ciclo de vida de las plantillas: creación, envío a revisión, aprobación y envío masivo.

## Introducción

WhatsApp Business API te permite enviar mensajes a tus clientes de manera proactiva, es decir, iniciar conversaciones sin necesidad de que ellos te hayan escrito primero. Sin embargo, para hacerlo, es obligatorio utilizar **plantillas de mensaje preaprobadas** por WhatsApp.

Estas plantillas son mensajes estructurados que pueden incluir texto, imágenes, videos, documentos y botones interactivos. Una vez aprobadas, puedes utilizarlas para enviar notificaciones, recordatorios, promociones, alertas y mucho más.


> Ten en cuenta que solo los mensajes iniciados por la empresa (proactivos) requieren plantillas aprobadas. Las respuestas a mensajes iniciados por clientes pueden enviarse libremente dentro de la ventana de 24 horas de la conversación.

## ¿Qué es una Plantilla de Mensaje?

Una plantilla de mensaje es un formato de mensaje predefinido que debe ser aprobado por Meta (WhatsApp) antes de poder utilizarse. Estas plantillas permiten a las empresas comunicarse de forma profesional y consistente con sus clientes.

### ¿Por qué Necesitas una Plantilla de Mensaje?

- Para iniciar conversaciones con tus clientes cuando ellos no han iniciado el contacto
- Para enviar recordatorios de citas o pagos
- Para notificar actualizaciones de envíos
- Para compartir ofertas promocionales
- Para verificar cuentas o códigos de autenticación

Las plantillas de mensaje se aprueban a nivel de cuenta de WhatsApp Business y están vinculadas al número de teléfono registrado.


> Desde E-SMART360, puedes crear, editar y enviar plantillas a revisión directamente desde tu panel de control. El proceso es ágil y no requiere conocimientos técnicos avanzados.

## Tipos de Plantillas de Mensaje

WhatsApp ofrece diferentes categorías de plantillas, cada una diseñada para un propósito específico:

### 1. Marketing

Las plantillas de marketing están diseñadas para promocionar productos, servicios o campañas. Pueden incluir ofertas especiales, anuncios de nuevos productos, invitaciones a eventos o contenido informativo general.

**Características:**
- Pueden contener imágenes, videos y botones
- Ideales para campañas promocionales
- Sujeto a límites de calidad y alcance según la reputación de tu número

### 2. Utilidad

Las plantillas de utilidad facilitan transacciones o brindan información específica sobre una cuenta o pedido. Son las más comunes en entornos empresariales.

**Ejemplos de uso:**
- Confirmación de pedidos
- Actualización de estado de envío
- Estados de cuenta bancarios
- Alertas de seguridad
- Recordatorios de citas


### Ver más ejemplos de plantillas de utilidad

- Notificación de pago recibido
  - Confirmación de reserva
  - Actualización de membresía
  - Alerta de vencimiento de suscripción
  - Código de verificación (OTP)

### 3. Autenticación

Las plantillas de autenticación se utilizan para verificar la identidad de los usuarios mediante códigos de un solo uso (OTP). Generalmente contienen un código numérico que el usuario debe ingresar para completar un proceso de verificación.


> Las plantillas de autenticación tienen reglas muy estrictas: solo pueden contener un código, el nombre de la empresa y una instrucción breve. No se permite incluir contenido promocional ni enlaces.

### 4. Servicio (Free-form)

Aunque las plantillas de servicio existen para seguimiento de consultas, la mayoría de las interacciones de servicio al cliente ocurren dentro de la ventana de 24 horas posterior al mensaje del cliente, donde no se requiere plantilla.

## Categorías de Plantillas

Al crear una plantilla, debes clasificarla en una de las siguientes categorías:

| Categoría | Descripción | Tasa de apertura típica |
|-----------|-------------|------------------------|
| **Marketing** | Promociones, ofertas, anuncios | 70-85% |
| **Utilidad** | Transacciones, notificaciones, alertas | 85-95% |
| **Autenticación** | Verificación OTP, códigos de acceso | 95%+ |

## Estructura de una Plantilla de Mensaje

Las plantillas de mensaje en WhatsApp se componen de las siguientes partes:


### Encabezado (Opcional)

Puede ser de tres tipos: texto, imagen/video/documento o sin encabezado. El texto del encabezado tiene un límite de 60 caracteres.
  
### Cuerpo (Obligatorio)

Es el contenido principal del mensaje. Debe ser claro, conciso y relevante. Las plantillas de marketing pueden tener hasta 1024 caracteres, mientras que las de utilidad y servicio tienen un límite de 1024 caracteres también.
  
### Pie de página (Opcional)

Texto pequeño que aparece al final del mensaje. Límite de 60 caracteres. Ideal para incluir el nombre de la empresa o un aviso legal breve.
  
### Botones (Opcional)

Puedes agregar botones para hacer la plantilla interactiva: botones de llamada a la acción (visitar sitio web, llamar por teléfono) o botones de respuesta rápida (texto personalizado).
  

> Aunque el encabezado, el pie de página y los botones son opcionales, te recomendamos utilizarlos para crear mensajes más atractivos y efectivos. Una plantilla bien estructurada mejora la experiencia del cliente y aumenta las tasas de interacción.

### Límites de Caracteres por Componente



### Encabezado

- Texto: 60 caracteres
    - Imagen/Video: sin límite de texto
    - Sin encabezado: N/A
  
### Cuerpo

- Marketing: 1024 caracteres
    - Utilidad: 1024 caracteres
    - Incluye variables ({{1}}, {{2}}, etc.)
  
### Pie de página

- Máximo: 60 caracteres
    - Texto plano únicamente
    - Sin formato especial
  
#### Límites Específicos para Plantillas con Medios

Cuando utilizas plantillas con archivos multimedia, ten en cuenta estos límites adicionales:

| Tipo de Medio | Límite de Tamaño | Formato | Texto Máximo |
|--------------|------------------|---------|--------------|
| **Imagen** | 5 MB | JPG, PNG | 1024 caracteres |
| **Video** | 16 MB | MP4 | 1024 caracteres |
| **Documento** | 100 MB | PDF, DOCX, XLSX, etc. | 1024 caracteres |


> Los límites de tamaño aplican al medio en sí, no al texto de la plantilla. El cuerpo del mensaje (texto) puede tener hasta 1024 caracteres independientemente del tipo de medio adjunto.

## Variables o Placeholders en Plantillas

Las variables —también llamadas placeholders o parámetros— te permiten personalizar cada mensaje sin crear una plantilla nueva. Se representan con llaves dobles y números: `{{1}}`, `{{2}}`, `{{3}}`, etc.

### Ejemplo de Plantilla con Variables

```
Hola {{1}}, tu pedido #{{2}} ha sido enviado.
Fecha estimada de entrega: {{3}}.
Gracias por confiar en nosotros.
```

En este ejemplo:
- `{{1}}` = Nombre del cliente
- `{{2}}` = Número de pedido
- `{{3}}` = Fecha de entrega estimada

### Buenas Prácticas con Variables


> - Usa variables claras en la plantilla y completa cada una al enviar
  - Limita el número de variables para evitar errores (máximo recomendado: 5-6)
  - Prueba la plantilla con datos reales antes de enviarla masivamente
  - Asegúrate de que los valores quepan visualmente en el mensaje

> - No uses como variables palabras completas o frases — usa solo datos variables como nombres, números, fechas
  - No dejes variables vacías al enviar — el mensaje mostrará un espacio en blanco o podría ser rechazado
  - No incluyas variables en el encabezado si usas imagen/video — solo aplica para encabezados de texto

## Directrices para la Creación de Plantillas

Para que tu plantilla sea aprobada por WhatsApp, debe cumplir con las políticas de Meta. Aquí tienes las directrices más importantes:

### Directrices Generales

1. **Precisión**: La plantilla debe representar con precisión el mensaje que enviarás. No puedes crear una plantilla con un propósito y usarla para otro.
2. **Claridad**: El mensaje debe ser claro y fácil de entender. Evita ambigüedades.
3. **Consentimiento**: Asegúrate de tener el consentimiento de los usuarios para recibir mensajes.
4. **Idoneidad del contenido**: No se permite contenido inapropiado, engañoso o ilegal.

### Directrices para Plantillas de Marketing

- Deben incluir una opción clara para darse de baja (opt-out)
- No pueden contener información falsa o engañosa
- Deben cumplir con las leyes locales de publicidad y protección al consumidor
- El tono debe ser promocional pero no agresivo
- No está permitido el uso de emojis excesivos

### Directrices para Plantillas de Utilidad

- Deben estar directamente relacionadas con una transacción o servicio existente
- El contenido debe ser factual y directo
- No deben incluir lenguaje promocional o de marketing
- No pueden utilizarse para re-engagement si el contenido principal no es transaccional


### Ver directrices completas para plantillas de utilidad

**✅ Aceptado (Utilidad):**
  - "Tu pedido #1234 ha sido enviado. Llegará el 15 de mayo."
  - "Recordatorio: tienes una cita médica el 20/05/2026 a las 10:00 AM."
  - "Tu factura de $50.00 ya está disponible. Fecha de vencimiento: 30/05/2026."

  **❌ Rechazado (no es utilidad):**
  - "¡Gracias por tu compra! Aprovecha nuestro 20% de descuento en tu próxima compra."
  - "Tu pedido ha llegado. Por cierto, tenemos nuevos productos que te encantarán."

> Las plantillas de utilidad no deben incluir contenido promocional. Incluso una línea de marketing adicional al final de un mensaje de utilidad puede causar el rechazo de la plantilla o la limitación del alcance de tu número.

## Cómo Crear una Plantilla de Mensaje en E-SMART360

Sigue estos pasos para crear tu primera plantilla de mensaje en la plataforma E-SMART360:


### Accede al módulo de plantillas

Inicia sesión en tu cuenta de E-SMART360. En el menú lateral, busca y selecciona la opción "Plantillas de Mensaje" o "Message Templates" dentro de la sección de WhatsApp Business API.
  
### Haz clic en 'Nueva Plantilla'

Busca el botón que dice "Crear Plantilla" o "Nueva Plantilla". Se abrirá un formulario con los campos necesarios para definir tu plantilla.
  
### Configura los datos básicos

Completa los siguientes campos:
    - **Nombre**: Elige un nombre descriptivo. Solo puede contener letras minúsculas, números y guiones bajos (ej: `bienvenida_nuevo_cliente`).
    - **Idioma**: Selecciona el idioma de la plantilla (español, inglés, etc.).
    - **Categoría**: Elige entre Marketing, Utilidad o Autenticación.
  
### Diseña el contenido de la plantilla

Completa los componentes disponibles:
    1. **Encabezado** (opcional): Puedes elegir entre texto, imagen, video o documento.
    2. **Cuerpo** (obligatorio): Escribe el mensaje principal usando texto plano y variables `{{1}}`, `{{2}}`, etc.
    3. **Pie de página** (opcional): Agrega texto pequeño complementario.
    4. **Botones** (opcional): Agrega botones de acción o respuesta rápida.
  
### Agrega variables si es necesario

Si tu plantilla necesita personalización, usa las variables `{{1}}`, `{{2}}` en el cuerpo del mensaje. E-SMART360 te permite gestionar estas variables fácilmente desde el editor.
  
### Revisa y envía a aprobación

Antes de enviar, utiliza el botón de "Vista Previa" para ver cómo se verá el mensaje. Si todo está correcto, haz clic en "Enviar a Revisión". El proceso de aprobación puede tomar desde unos minutos hasta 24-48 horas en algunos casos.
  
### Espera la aprobación de WhatsApp

Una vez enviada, la plantilla pasa por el proceso de revisión de Meta. Recibirás una notificación en E-SMART360 cuando sea aprobada o rechazada. Si es rechazada, podrás ver el motivo y editarla para reenviarla.
  
### Cómo Crear una Plantilla desde el Administrador de WhatsApp y Sincronizarla con E-SMART360

Si prefieres crear plantillas directamente desde el Administrador de WhatsApp de Meta, puedes hacerlo y luego sincronizarlas con E-SMART360.


### Crea la plantilla en el Administrador de WhatsApp

Ve a [business.facebook.com](https://business.facebook.com), accede al Administrador de WhatsApp de tu negocio y dirígete a la sección "Plantillas de Mensaje". Crea tu plantilla siguiendo las mismas directrices mencionadas anteriormente.
  
### Espera la aprobación en Meta

El proceso de revisión en el Administrador de WhatsApp funciona igual. La plantilla será evaluada por Meta y recibirás una notificación de aprobación o rechazo.
  
### Sincroniza con E-SMART360

En tu panel de E-SMART360, busca la opción "Sincronizar Plantillas" o "Sync Templates". Esto importará automáticamente todas las plantillas aprobadas desde tu cuenta de WhatsApp Business al sistema de E-SMART360 para que puedas usarlas en tus campañas.
  

> La sincronización bidireccional entre el Administrador de WhatsApp y E-SMART360 te permite trabajar desde la interfaz que prefieras. Si creas una plantilla en un lado, sincroniza para tenerla disponible en el otro.

## Cómo Crear y Usar Plantillas de Carrusel con Medios

E-SMART360 también soporta plantillas de carrusel, que te permiten mostrar múltiples imágenes en un solo mensaje, cada una con su propio encabezado, descripción y botones.

### ¿Qué son las Plantillas de Carrusel?

Las plantillas de carrusel son un tipo especial de plantilla de marketing que permite incluir hasta **10 tarjetas** (cards) en un solo mensaje. Cada tarjeta puede contener:

- **Una imagen o video** como encabezado
- **Un título** (texto corto)
- **Una descripción** (texto más largo)
- **Botones personalizados** por tarjeta

### Casos de Uso Ideales para Carrusel

- Catálogo de productos destacados
- Menú de restaurante con imágenes
- Listado de propiedades inmobiliarias
- Galería de servicios profesionales
- Ofertas especiales múltiples


> Las plantillas de carrusel solo están disponibles para la categoría **Marketing**. No pueden utilizarse como plantillas de utilidad o autenticación.

### Requisitos para Plantillas de Carrusel

| Elemento | Requisito |
|----------|-----------|
| Número de tarjetas | Mínimo 1, máximo 10 |
| Imagen por tarjeta | Obligatoria (JPG o PNG, máximo 5 MB) |
| Título por tarjeta | Máximo 60 caracteres |
| Descripción por tarjeta | Máximo 1024 caracteres |
| Botones por tarjeta | Hasta 2 botones (CTA o respuesta rápida) |

## Razones Comunes por las que las Plantillas Son Rechazadas (y Cómo Solucionarlas)

El proceso de revisión de Meta puede ser exigente. Estas son las causas más frecuentes de rechazo y cómo evitarlas:

### 1. Contenido Engañoso o Falso

**Problema**: La plantilla contiene afirmaciones que no son ciertas o que no pueden verificarse.

**Solución**: Revisa que toda la información sea precisa. No uses superlativos sin respaldo ("mejor", "número uno", "garantizado") a menos que tengas evidencia concreta.

### 2. Falta de Opción para Darse de Baja (Opt-out)

**Problema**: Las plantillas de marketing no incluyen una forma clara para que los usuarios dejen de recibir mensajes.

**Solución**: Agrega texto como "Responde STOP para cancelar" o "Para darte de baja, haz clic aquí". Esta opción es obligatoria para plantillas de marketing.

### 3. Contenido Inapropiado

**Problema**: La plantilla incluye lenguaje ofensivo, contenido para adultos, violencia, drogas, armas, apuestas, o cualquier otro contenido restringido por las políticas de Meta.

**Solución**: Revisa las políticas de Meta para WhatsApp Business API y asegúrate de que tu contenido cumpla con todas las normas. Si tu negocio opera en una industria regulada (salud, finanzas, alcohol), consulta las políticas específicas.

### 4. Formato Incorrecto

**Problema**: Errores de mayúsculas, puntuación excesiva, espacios inconsistentes o formato no estándar.

**Solución**: 
- No uses MAYÚSCULAS SOSTENIDAS en todo el mensaje
- Evita múltiples signos de exclamación o interrogación seguidos (¡¡¡!!!)
- Revisa que los saltos de línea y espacios sean consistentes
- No uses caracteres especiales no estándar

### 5. Uso Incorrecto de Emojis

**Problema**: Demasiados emojis o emojis utilizados de manera inapropiada.

**Solución**: Limita los emojis a 1-2 por plantilla. Úsalos solo cuando aporten claridad o tono al mensaje, no como decoración excesiva.

### 6. Errores en las Variables

**Problema**: Las variables `{{1}}`, `{{2}}` no se usan correctamente o el ejemplo no es claro.

**Solución**: Proporciona ejemplos de valores reales en la vista previa. Asegúrate de que las variables no rompan la estructura gramatical del mensaje.


### Más razones de rechazo y cómo solucionarlas

**7. Categoría incorrecta**
  Si tu plantilla es promocional pero la clasificaste como utilidad, será rechazada. Revisa la categoría antes de enviar.

  **8. Violación de derechos de autor**
  No uses imágenes, texto o marcas registradas sin permiso. WhatsApp rechazará automáticamente cualquier plantilla que infrinja derechos de propiedad intelectual.

  **9. URL no verificada**
  Si incluyes enlaces, el dominio debe estar verificado en tu cuenta de WhatsApp Business. Enlaces acortados no verificados también pueden causar rechazo.

  **10. Sin relación con el negocio**
  La plantilla debe estar directamente relacionada con los productos o servicios que ofreces. No crees plantillas para contenido ajeno a tu negocio.

## Cómo Entender los Rechazos de Plantillas y Solucionarlos

Cuando una plantilla es rechazada, WhatsApp proporciona un código de error que indica el motivo. Estos son algunos de los códigos más comunes:

| Código | Significado | Solución |
|--------|-------------|----------|
| **REJECTED** | Rechazo por incumplimiento de políticas | Revisa las directrices de Meta y corrige el contenido |
| **PENDING_DELETION** | Plantilla marcada para eliminación por calidad | Revisa las métricas de calidad y mejora el contenido |
| **REINSTATE_APPROVED** | Plantilla reinstalada tras apelación | Vuelve a usar la plantilla aprobada |
| **IN_APPEAL** | Plantilla en proceso de apelación | Espera la resolución de Meta |


> Si una plantilla es rechazada repetidamente por el mismo motivo, tu cuenta de WhatsApp Business podría ser penalizada con límites de mensajes reducidos o incluso la desactivación del número. Es crucial entender y corregir los motivos de rechazo.

### Pasos para Solucionar una Plantilla Rechazada

1. **Identifica el motivo**: Lee cuidadosamente el mensaje de rechazo que recibirás en E-SMART360.
2. **Edita la plantilla**: Realiza los cambios necesarios según el motivo indicado.
3. **Vuelve a enviar**: Una vez corregida, envía la plantilla a revisión nuevamente.
4. **Apela si es necesario**: Si crees que el rechazo fue un error, puedes apelar la decisión desde el panel de E-SMART360.

## Plantillas para Reiniciar Conversaciones Fuera del Horario Laboral

Una estrategia avanzada es usar plantillas específicas para retomar conversaciones después de que el horario laboral haya terminado. Cuando un cliente te escribe fuera de tu horario, puedes:

1. Responder dentro de la ventana de 24 horas diciendo que te pondrás en contacto al siguiente día hábil
2. Usar una plantilla de utilidad al siguiente día hábil para retomar la conversación


> Crea una plantilla de utilidad con un mensaje como: "Hola {{1}}, gracias por contactarnos ayer. Estamos aquí para ayudarte. ¿En qué podemos asistirte hoy?" Esta es una forma efectiva de retomar conversaciones pendientes.

## Categorías de Conversación y su Impacto en las Plantillas

Es importante entender cómo WhatsApp categoriza las conversaciones, ya que esto afecta los costos y los límites de mensajes:

| Tipo de Conversación | Categoría | ¿Requiere Plantilla? |
|---------------------|-----------|---------------------|
| Iniciada por el cliente | Servicio | No |
| Iniciada por la empresa (marketing) | Marketing | Sí |
| Iniciada por la empresa (transaccional) | Utilidad | Sí |
| Iniciada por la empresa (autenticación) | Autenticación | Sí |

Cada categoría de conversación tiene un costo diferente en la API de WhatsApp. Las conversaciones de utilidad suelen tener tarifas más bajas que las de marketing.


> Con E-SMART360, puedes hacer un seguimiento detallado de tus conversaciones activas, incluyendo la categoría, el costo y el tiempo restante de la ventana de 24 horas.

## Ejemplos Prácticos de Plantillas

### Ejemplo 1: Notificación de Envío (Utilidad)



### Vista previa

📦 Tu pedido ha sido enviado
    
    Hola María, tu pedido #4582 ha sido enviado y está en camino.
    
    Fecha estimada de entrega: 15 de mayo de 2026
    
    Gracias por confiar en nosotros.
    
    TiendaEjemplo
  
### Estructura

**Encabezado**: 📦 Tu pedido ha sido enviado
    **Cuerpo**: Hola {{1}}, tu pedido #{{2}} ha sido enviado y está en camino. Fecha estimada de entrega: {{3}}.
    **Pie de página**: Gracias por confiar en nosotros.
    **Categoría**: Utilidad
  
### Ejemplo 2: Oferta Promocional (Marketing)



### Vista previa

🎉 Oferta especial para ti
    
    Hola Carlos, tenemos una oferta exclusiva para ti: 20% de descuento en toda nuestra colección de verano.
    
    Usa el código: VERANO20
    
    Válido hasta el 31 de mayo de 2026.
    
    Responde STOP para cancelar
  
### Estructura

**Encabezado**: 🎉 Oferta especial para ti
    **Cuerpo**: Hola {{1}}, tenemos una oferta exclusiva para ti: {{2}} de descuento en toda nuestra colección de verano. Usa el código: {{3}}. Válido hasta el {{4}}.
    **Pie de página**: Responde STOP para cancelar
    **Categoría**: Marketing
  
### Ejemplo 3: Código de Verificación (Autenticación)



### Vista previa

Código de verificación
    
    Tu código de acceso es: 847291
    
    No compartas este código con nadie.
    
    MiEmpresa
  
### Estructura

**Encabezado**: Código de verificación
    **Cuerpo**: Tu código de acceso es: {{1}}. No compartas este código con nadie.
    **Pie de página**: MiEmpresa
    **Categoría**: Autenticación
  
## Buenas Prácticas para Maximizar la Aprobación



### ✅ Hacer

- Usar lenguaje claro y directo
    - Incluir siempre la opción de darse de baja en marketing
    - Mantener un tono profesional
    - Probar la plantilla con vista previa antes de enviar
    - Usar la categoría correcta según el propósito
    - Mantener un historial de calidad alto en tu número
  
### ❌ No Hacer

- Usar mayúsculas sostenidas en todo el texto
    - Incluir contenido engañoso o falso
    - Agregar emojis excesivos o inapropiados
    - Usar variables sin contexto claro
    - Confundir categorías (marketing vs utilidad)
    - Incluir URLs no verificadas en tu cuenta
  
## Gestión del Ciclo de Vida de las Plantillas

Las plantillas de mensaje tienen un ciclo de vida que debes gestionar activamente:


### Creación

Define la plantilla con nombre, categoría, idioma y contenido.
  
### Envío a revisión

La plantilla se envía a Meta para su evaluación. Este proceso puede tomar desde minutos hasta 48 horas.
  
### Aprobación

Una vez aprobada, la plantilla está disponible para su uso inmediato en campañas y mensajes.
  
### Uso y monitoreo

Utiliza la plantilla en tus comunicaciones. Monitorea las métricas de calidad en E-SMART360 para asegurar que mantiene buena reputación.
  
### Actualización o eliminación

Si necesitas modificar una plantilla, crea una nueva versión. Las plantillas aprobadas no pueden editarse; deben ser reemplazadas. También puedes eliminar plantillas que ya no uses.
  

> **Política de actualización de plantillas (2026-04-15)**
> A partir de abril de 2026, WhatsApp permite actualizar plantillas aprobadas mediante la creación de nuevas versiones sin perder el historial de uso. E-SMART360 soporta esta funcionalidad para que puedas mantener la continuidad en tus comunicaciones.

## Preguntas Frecuentes


### ¿Cuánto tiempo tarda la aprobación de una plantilla?

El tiempo de aprobación puede variar desde unos pocos minutos hasta 48 horas. En la mayoría de los casos, las plantillas bien estructuradas y que cumplen con las políticas se aprueban en menos de 24 horas. Las plantillas de categoría Marketing suelen tardar un poco más que las de Utilidad.

### ¿Puedo editar una plantilla después de aprobada?

No, una vez que una plantilla es aprobada por WhatsApp, no se puede editar directamente. Debes crear una nueva versión de la plantilla o una plantilla completamente nueva con los cambios deseados. E-SMART360 te permite crear versiones actualizadas fácilmente.

### ¿Cuántas plantillas puedo tener?

WhatsApp no establece un límite fijo en la cantidad de plantillas que puedes tener, pero sí aplica un límite en la velocidad de creación (rate limit). Puedes tener decenas o cientos de plantillas activas, siempre que cumplan con las políticas. E-SMART360 te permite gestionar un número ilimitado de plantillas.

### ¿Qué hago si mi plantilla es rechazada por 'categoría incorrecta'?

Revisa el contenido de tu plantilla: si es promocional, debe ser Marketing. Si es transaccional, debe ser Utilidad. Si es un código de verificación, debe ser Autenticación. Corrige la categoría y vuelve a enviarla. No intentes usar la categoría de Utilidad para contenido promocional, ya que será rechazada.

### ¿Puedo usar plantillas en varios idiomas?

Sí, debes crear una plantilla separada para cada idioma que necesites. WhatsApp requiere que especifiques el idioma al crear la plantilla, y el contenido debe estar íntegramente en ese idioma. No se permite mezclar idiomas en una misma plantilla, excepto en nombres propios o términos técnicos.

### ¿Qué sucede si una plantilla tiene baja calidad o genera muchos bloqueos?

Si una plantilla tiene una calificación de calidad baja (menor a 3.0) o genera un alto número de bloqueos por parte de los usuarios, WhatsApp puede limitar su alcance o incluso suspenderla. Monitorea regularmente las métricas de calidad desde E-SMART360 y actualiza las plantillas problemáticas.

## Resumen y Conclusión

Crear plantillas de mensaje efectivas para WhatsApp Business API es un proceso que combina conocimiento técnico, cumplimiento normativo y estrategia de comunicación. Con E-SMART360, tienes todas las herramientas necesarias para:

1. **Crear** plantillas profesionales en minutos
2. **Gestionar** todo el ciclo de vida desde un solo lugar
3. **Monitorear** la calidad y el rendimiento de tus plantillas
4. **Optimizar** tus comunicaciones basándote en datos reales


> Recuerda que la clave del éxito está en crear plantillas que aporten valor real a tus clientes, respetando sus preferencias de comunicación y cumpliendo con las políticas de WhatsApp. Una buena estrategia de plantillas mejora la experiencia del cliente, aumenta la tasa de conversión y fortalece la relación con tu audiencia.

---



### 📚 Recursos relacionados

- Guía de límites de mensajes en WhatsApp Business API
    - Cómo gestionar la calidad de tus plantillas
    - Estrategias de marketing con WhatsApp
    - Tipos de conversaciones y sus costos
  
### 🚀 Próximos pasos

1. Accede a tu panel de E-SMART360
    2. Ve a "Plantillas de Mensaje"
    3. Crea tu primera plantilla usando esta guía
    4. Envíala a revisión y espera la aprobación
    5. ¡Comienza a enviar mensajes a tus clientes!
