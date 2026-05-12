---
title: "Enviar Notificaciones de Pedidos de WooCommerce a WhatsApp con Webhook Workflow"
description: "Guía completa y detallada para configurar el envío automático de notificaciones de pedidos de WooCommerce a WhatsApp usando Webhook Workflow en E-SMART360. Aprende a crear plantillas de mensaje con variables dinámicas, configurar el webhook, mapear datos reales, solucionar errores y optimizar la comunicación post-venta con tus clientes."
section: "ecommerce"
order: 210
audience: ["developer"]
platform: ["chatbots"]
useCase: ["ecommerce"]
source: "fulldoc"
sourceSlug: "enviar-notificaciones-de-pedidos-de-woocommerce-a-whatsapp-con-webhook-workflow-esmart360"
canonicalGroup: "enviar-notificaciones-de-pedidos-de-woocommerce-a-whatsapp-con-webhook-workflow"
tags: ["ecommerce"]
staging: true
---
# Enviar Notificaciones de Pedidos de WooCommerce a WhatsApp con Webhook Workflow


> Esta guía completa explica cómo enviar notificaciones de pedidos de WooCommerce a los clientes a través de WhatsApp. Al crear una plantilla de mensaje con variables (Lista de productos, Precio total, Fecha estimada de entrega), configurar un Webhook Workflow y conectarlo a WooCommerce, las empresas pueden notificar automáticamente a los clientes en WhatsApp cada vez que se realiza un nuevo pedido. Esta automatización mejora la comunicación con el cliente, aumenta la transparencia y optimiza la experiencia post-compra sin necesidad de programación.


> **Última actualización de esta guía (6 de mayo de 2026)**
> Esta guía ha sido actualizada con los últimos cambios en la integración de WooCommerce y WhatsApp a través de Webhook Workflow, incluyendo nuevas secciones sobre la regla de 24 horas de WhatsApp, calificación de calidad, límites de transmisión y solución de errores comunes.

## ¿Por qué enviar notificaciones de pedidos por WhatsApp?

Enviar la información de los pedidos a los clientes es una parte esencial para confirmarles su compra. En el pasado, el correo electrónico y los SMS eran los métodos más utilizados, pero hoy en día han quedado obsoletos. El correo electrónico resulta poco atractivo y rara vez se abre. Los SMS no son adecuados para contenido enriquecido ni para una comunicación bidireccional efectiva.

Aquí es donde WhatsApp se convierte en un canal revolucionario: es la plataforma de mensajería más utilizada del mundo, con tasas de apertura superiores al 98%, y permite enviar contenido interactivo, imágenes y enlaces.


> **Beneficios clave de notificar por WhatsApp:**
- **Tasa de apertura del 98%+** frente al 20% del email
- **Confirmación instantánea** al cliente nada más realizar el pedido
- **Mayor confianza y transparencia** con información detallada
- **Reducción de consultas post-venta** al tener toda la información disponible
- **Experiencia de cliente mejorada** con un canal que ya usan a diario
- **Envío de contenido enriquecido** como imágenes de productos y botones de acción
- **Comunicación bidireccional** permitiendo que los clientes respondan con preguntas
- **Automatización completa** sin intervención manual después de la configuración inicial

### Comparativa de canales de notificación

| Canal | Tasa de apertura | Costo por mensaje | Contenido enriquecido | Respuesta del cliente |
|-------|:----------------:|:-----------------:|:---------------------:|:---------------------:|
| WhatsApp | 98%+ | Bajo | ✅ Sí | ✅ Sí |
| Email | 20-25% | Muy bajo | ✅ Sí | ❌ No inmediata |
| SMS | 90%+ | Medio-Alto | ❌ Limitado | ✅ Sí |
| Notificación push | 60-70% | Gratuito | ✅ Sí | ✅ Limitada |

Como se puede observar, WhatsApp ofrece la mejor combinación de tasa de apertura, capacidad de contenido enriquecido y comunicación bidireccional a un costo competitivo.

## Requisitos previos

Antes de comenzar, asegúrate de contar con lo siguiente:


### Tener una cuenta activa en E-SMART360

Necesitas una cuenta activa con acceso al módulo de Webhook Workflow. Si aún no tienes una, puedes registrarte desde el panel principal. Una vez registrado, asegúrate de haber conectado tu número de WhatsApp Business a tu cuenta siguiendo el proceso de Embedded Signup.

### Tener WooCommerce instalado y funcionando

Tu tienda WooCommerce debe estar activa y funcionando correctamente. Necesitarás acceso al panel de administración de WordPress con permisos para gestionar webhooks y configuraciones avanzadas de WooCommerce.

### Contar con una plantilla de mensaje de WhatsApp aprobada por Meta

Para enviar mensajes proactivos a los clientes, necesitas una plantilla de mensaje aprobada por Meta. Las notificaciones de pedido deben usar una plantilla de tipo **Utilidad** o **Marketing** según el contenido. Las plantillas de tipo Utilidad son las más recomendadas para notificaciones transaccionales como confirmaciones de pedido.

### Navegador actualizado

Utiliza un navegador moderno como Google Chrome, Firefox o Edge para acceder al panel de E-SMART360. Asegúrate de tener las cookies y JavaScript habilitados.

---

## Video tutorial

Puedes seguir el proceso paso a paso con el video tutorial disponible en YouTube. El video muestra visualmente cada uno de los pasos descritos en esta guía, desde la creación de variables hasta la verificación del mensaje final en WhatsApp.


> **Video recomendado:** "Cómo enviar notificaciones de pedidos de WooCommerce a WhatsApp mediante Webhook Workflow" — disponible en el canal oficial de E-SMART360 en YouTube.

---

## Resumen del proceso

Para que WhatsApp pueda enviar mensajes a los clientes de WooCommerce, debes completar estos pasos en orden:

1. **Crear las variables** en el panel de Bot Manager de E-SMART360
2. **Crear la plantilla de mensaje** que se enviará como notificación de pedido
3. **Crear el Webhook Workflow** que conectará WooCommerce con WhatsApp
4. **Configurar el webhook en WooCommerce** para enviar los datos del pedido
5. **Capturar datos reales** de un pedido de prueba
6. **Configurar el mapeo de la respuesta** del webhook
7. **Probar el flujo completo** realizando un pedido de prueba

---

## Paso 1: Crear las variables en la plantilla de mensaje

Para personalizar las notificaciones, necesitas crear variables que se reemplazarán dinámicamente con los datos de cada pedido. Las variables que necesitarás son:

- **Lista de productos** — los productos incluidos en el pedido con sus cantidades y precios
- **Precio total** — el importe total del pedido
- **Fecha estimada de entrega** — la fecha estimada de llegada del pedido


### Accede al panel de Bot Manager

Inicia sesión en E-SMART360 y ve al menú **Bot Manager** en la barra lateral izquierda del panel de control. Se abrirá la página del gestor de bots de WhatsApp.

### Localiza la sección de variables de plantilla

En la parte inferior de la página, encontrarás la sección **"Template variable"** (Variables de plantilla). Esta sección te permite crear variables personalizadas que luego podrás insertar en tus plantillas de mensaje utilizando la sintaxis de doble llave `{{nombre_variable}}`.

### Crea la primera variable

Haz clic en el botón **"Create"** (Crear). Aparecerá un formulario emergente con un campo llamado **"Variable name"** (Nombre de variable). Escribe un nombre para la variable, por ejemplo `product_list`, y haz clic en **Save** (Guardar).

### Crea las variables restantes

Repite el proceso para crear tres variables en total:
- `product_list` — para la lista de productos
- `total_price` — para el precio total
- `estimated_delivery_date` — para la fecha estimada de entrega


> **¡Importante!** Las variables se crean una sola vez y pueden reutilizarse en múltiples plantillas de mensaje. Esto significa que si creas diferentes plantillas para distintos tipos de notificación, podrás usar las mismas variables en todas ellas.

---

## Paso 2: Crear la plantilla de mensaje

Ahora que tienes las variables creadas, puedes crear la plantilla de mensaje que se enviará como notificación de pedido. La plantilla debe ser aprobada por Meta antes de poder utilizarse.


### Abre el creador de plantillas

En la sección **"Message template settings"** (Configuración de plantillas de mensaje), haz clic en el botón **"Create"** (Crear). Aparecerá un formulario modal llamado **Message template** (Plantilla de mensaje).

### Completa los campos del formulario

- **Template name** (Nombre de la plantilla): Escribe un nombre descriptivo, por ejemplo `notificacion_pedido_woocommerce`
- **Template category** (Categoría): Selecciona **Utility** (Utilidad) para notificaciones transaccionales. Las categorías disponibles son:
  - **Marketing**: Para promociones y ofertas
  - **Utility**: Para confirmaciones de pedido, actualizaciones de cuenta y alertas
  - **Authentication**: Para códigos de verificación
- **Locale** (Idioma): Selecciona **es** para español
- **Message body** (Cuerpo del mensaje): Redacta el mensaje que recibirán los clientes
- **Footer text** (Texto de pie): Opcional. Texto pequeño al final del mensaje
- **Header**: Opcional. Puede incluir texto, imagen, video o documento
- **Buttons**: Opcional. Puedes añadir botones de acción (CTA URL, CTA Phone, Quick Reply)

### Ejemplo de cuerpo del mensaje

```
¡Hola {{1}}!

Tu pedido ha sido confirmado ✅

Productos: 
{{product_list}}

Total: {{total_price}}
Fecha estimada de entrega: {{estimated_delivery_date}}

Gracias por tu compra. ❤️
¡Te mantendremos informado sobre el estado de tu pedido!
```

### Guarda la plantilla

Haz clic en el botón **Save** (Guardar) para crear la plantilla. La plantilla se enviará automáticamente a Meta para su revisión y aprobación. El proceso de aprobación puede tardar desde unos minutos hasta varias horas dependiendo de la carga de Meta.

### Verifica el estado de aprobación

Haz clic en el botón **"Check status"** (Verificar estado) para comprobar si la plantilla ha sido aprobada por Meta. La plantilla debe tener estado **"Approved"** (Aprobada) para poder utilizarla. Si el estado es "Rejected" (Rechazada), deberás revisar y corregir los problemas señalados por Meta.



### Plantilla con botón CTA

Puedes mejorar tu plantilla añadiendo un botón de llamada a la acción (CTA):

```
¡Hola {{1}}!

Tu pedido #{{order_number}} ha sido confirmado ✅

Productos: {{product_list}}
Total: {{total_price}}

Haz clic en el botón para ver los detalles.
```
**Botón:** "Ver mi pedido" → URL de tu tienda

### ¿Plantilla rechazada?

Razones comunes de rechazo:
1. **Contenido engañoso**: Afirmaciones falsas o exageradas
2. **Formato incorrecto**: Variables mal colocadas o caracteres no permitidos
3. **Categoría incorrecta**: La categoría no coincide con el contenido
4. **Idioma inconsistente**: El locale y el idioma no coinciden

Para corregir: edita la plantilla, ajusta los problemas y guarda nuevamente para solicitar una nueva revisión.

### Consejos para crear plantillas efectivas

Las plantillas de mensaje son la base de tu comunicación con los clientes. Sigue estas recomendaciones para maximizar su efectividad:



### 📝 Recomendaciones de contenido

- **Sé claro y conciso**: Ve directo al punto
- **Usa un tono amigable pero profesional**
- **Incluye solo información relevante**
- **Limita el uso de emojis** a 1-2 por mensaje
- **Prueba diferentes versiones** para ver cuál funciona mejor
- **Personaliza cada mensaje** con el nombre del cliente

### ⚠️ Errores a evitar

- **No uses URLs acortadas** como bit.ly (pueden ser marcadas como spam)
- **Evita múltiples signos de exclamación** (¡¡¡Hola!!!)
- **No incluyas información engañosa**
- **Evita mayúsculas sostenidas** (ESCRIBIR ASÍ)
- **No solicites información sensible** como contraseñas
- **No combines categorías** (Marketing + Utility en un mismo mensaje)

---

## Paso 3: Crear el Webhook Workflow

El Webhook Workflow es el motor que conecta WooCommerce con WhatsApp. Cada vez que se crea un pedido en WooCommerce, se envía una notificación a la URL del webhook, que E-SMART360 procesa y convierte en un mensaje de WhatsApp personalizado.


### Accede al módulo Webhook Workflow

En el panel de control de E-SMART360, haz clic en el menú **"Webhook Workflow"** en la barra lateral izquierda.

### Crea un nuevo workflow

Se abrirá la página de Webhook Workflow con un botón **"Create"** (Crear). Haz clic en él. Aparecerá una sección llamada **"New workflow"** (Nuevo workflow) en la parte inferior de la página.

### Configura el workflow

- **Workflow name** (Nombre del workflow): Escribe un nombre descriptivo, por ejemplo `Notificaciones WooCommerce`
- **Select account** (Seleccionar cuenta): Elige la cuenta de WhatsApp que utilizarás
- **Message template** (Plantilla de mensaje): Selecciona la plantilla que creaste en el paso anterior

### Guarda y obtén la URL del webhook

Haz clic en **"Save workflow"** (Guardar workflow). Inmediatamente después de guardar, aparecerá una **URL de callback del webhook** que deberás copiar. Esta URL es exclusiva de tu workflow.


> **Importante:** Guarda esta URL de callback. La necesitarás en el siguiente paso para configurar WooCommerce. Sin esta URL, WooCommerce no podrá enviar los datos del pedido a E-SMART360.

---

## Paso 4: Configurar el webhook en WooCommerce

Ahora debes conectar tu tienda WooCommerce con E-SMART360 mediante un webhook. Un webhook es una URL que WooCommerce llama automáticamente cuando ocurre un evento específico — en este caso, cuando se crea un nuevo pedido.


### Accede al panel de administración de WordPress

Inicia sesión en tu panel de administración de WordPress, generalmente en `tudominio.com/wp-admin`.

### Ve a la configuración de WooCommerce

En el menú lateral izquierdo, ve a **WooCommerce → Settings** (Ajustes).

### Accede a la sección de Webhooks

Haz clic en la pestaña **"Advanced"** (Avanzado) y luego en **"Webhooks"**. Aparecerá una lista con un botón **"Add webhook"**.

### Añade un nuevo webhook

Haz clic en **"Add webhook"** y completa:

- **Name** (Nombre): `Notificaciones WhatsApp - Pedidos`
- **Status** (Estado): **Active**
- **Topic** (Tema): **"Order created"**
- **Delivery URL**: Pega la URL de callback de E-SMART360

### Guarda el webhook

Haz clic en **"Save webhook"** para activarlo.


> **Verificación rápida:** Después de guardar, puedes hacer clic en **"Send test"** disponible junto al webhook en la lista de WooCommerce. Esto enviará datos de muestra a la URL y te permitirá verificar que la conexión funciona.

---

## Paso 5: Proporcionar datos de muestra para el mapeo

Para que E-SMART360 sepa cómo interpretar los datos que envía WooCommerce, necesitas proporcionar datos de muestra reales y configurar el mapeo de campos.


### Captura la respuesta del webhook

Vuelve a E-SMART360 y haz clic en **"Capture Webhook Response"**. Aparecerá la página de **Webhook Response Mapping** con datos en bruto (raw data) en formato JSON.

### Ignora los datos de muestra iniciales

Los datos que aparecen inicialmente son datos de muestra genéricos. Aunque el webhook ya está configurado, estos datos de prueba no reflejan la estructura real de tu tienda.

### Genera un pedido real en WooCommerce

Ve a tu tienda WooCommerce, haz clic en **"Visit store"** y realiza un pedido como cliente:
1. Agrega productos al carrito
2. Completa el checkout con datos reales
3. Usa un número de teléfono válido para recibir la notificación de prueba
4. Completa el pedido

### Recupera los datos reales en E-SMART360

Vuelve a E-SMART360 y haz clic en **"Capture Webhook Response"** nuevamente. Espera entre 30 segundos y 2 minutos para que los datos reales aparezcan.


> Si los datos no aparecen después de varios minutos, verifica que:
1. El webhook en WooCommerce esté **activo**
2. La URL de entrega sea **exactamente** la misma
3. Hayas seleccionado el tema **"Order created"**
4. El pedido se haya completado exitosamente

---

## Paso 6: Configurar el mapeo de la respuesta del Webhook

Una vez que tengas los datos reales del pedido en formato JSON, configura el mapeo para que cada campo del pedido se asigne a la variable correcta.


### Configura el campo de número de teléfono

En **Webhook Response Mapping**, busca el campo **Phone Number**. En los datos en bruto (raw data), localiza el número de teléfono dentro del objeto **"billing"**. Haz clic en el campo Phone Number y selecciona la opción **billing → phone**.


> **Problema con el signo +:** WhatsApp no puede enviar mensajes a números con el signo `+`. Por ejemplo, `+521234567890` debe convertirse a `521234567890`.

### Crea un formateador para eliminar el signo +

1. En el campo del formateador junto a Phone Number, haz clic para crear uno nuevo
2. Nómbralo `eliminar_signo_mas`
3. Configura la regla: **"Remove first character"** — el carácter a eliminar es `+`
4. Guarda y selecciona este formateador

### Configura la lista de productos

En **Product List**, selecciona **line_items**. Crea un formateador llamado `formatear_lista_productos` que convierta el array en texto legible:

```
- Camiseta Algodón x2 - $39.98
- Jeans Clásico x1 - $49.99
```

### Configura el precio total

En **Total Price**, selecciona **total**. Crea un formateador llamado `formatear_precio` que añada el símbolo de moneda y dos decimales.

### Configura la fecha de entrega

En **Estimated Delivery Date**, selecciona **date_created**. Crea un formateador llamado `formatear_fecha` que convierta el formato ISO (2026-05-06T14:30:00) a DD/MM/AAAA.

### Guarda el workflow

Haz clic en **"Save workflow"**. Verás un mensaje de éxito confirmando que la configuración está completa.


> **Resumen del mapeo:**

| Campo de la plantilla | Ruta en JSON | Formateador |
|-----------------------|-------------|-------------|
| Phone Number | billing.phone | eliminar_signo_mas |
| Product List | line_items | formatear_lista_productos |
| Total Price | total | formatear_precio |
| Estimated Delivery Date | date_created | formatear_fecha |

---

## Paso 7: Probar el flujo completo

Ahora que todo está configurado, prueba el flujo completo para asegurarte de que funciona.


### Realiza un pedido de prueba

Ve a tu tienda WooCommerce y coloca un nuevo pedido usando un número de teléfono real. Incluye al menos 2 productos diferentes.

### Revisa el Webhook Report

En E-SMART360, ve a Webhook Workflow y selecciona **"View Report"**. Verás el registro del pedido procesado.

### Verifica el estado

El estado debe cambiar de **Pending** a **Completed**. También puedes ver la hora de procesamiento y el número de teléfono de destino.

### Comprueba la llegada del mensaje

Revisa WhatsApp en el número de teléfono que usaste. Deberías recibir el mensaje de notificación con todos los datos formateados correctamente.



### 📱 Ejemplo de notificación

**Mensaje que recibe el cliente:**

```
¡Hola María!

Tu pedido ha sido confirmado ✅

Productos: 
- Camiseta Algodón x2 - $39.98
- Jeans Clásico x1 - $49.99
- Gorra Deportiva x1 - $19.99

Total: $109.96
Fecha: 15/05/2026

Gracias por tu compra. ❤️
```

### 🛒 Otros eventos útiles

Puedes crear workflows para:

- **Order completed**: Notificación de envío
- **Order cancelled**: Cancelación
- **Order refunded**: Reembolso
- **Order on hold**: Pedido en espera

Cada uno con su propia plantilla y variables.

> **¡Felicidades!** Has completado la configuración. Ahora cada pedido en WooCommerce generará automáticamente una notificación en WhatsApp.

---

## Entendiendo la regla de 24 horas de WhatsApp

WhatsApp tiene una regla importante que controla cómo las empresas pueden enviar mensajes a los clientes. Esta regla ayuda a proteger a los usuarios del spam y mantiene los chats útiles y relevantes.

### ¿Qué es la regla de 24 horas?

Cuando un cliente envía un mensaje a tu negocio, tienes **24 horas** para responder con cualquier mensaje que quieras (mensaje gratuito dentro de la ventana de servicio al cliente). Después de 24 horas, solo puedes enviar mensajes utilizando **plantillas de mensaje aprobadas por Meta**.

### ¿Por qué existe esta regla?

- **Protege la privacidad** de los usuarios evitando mensajes no deseados
- **Fomenta respuestas rápidas** de las empresas
- **Ayuda a cumplir con las políticas** de WhatsApp

### ¿Qué sucede después de 24 horas?

Si la ventana de 24 horas se cierra, puedes:
- **Usar plantillas de mensaje aprobadas** para cosas como actualizaciones de pedidos, recordatorios o seguimiento de soporte
- Las plantillas de Utilidad (como las notificaciones de pedido) pueden enviarse incluso fuera de la ventana de 24 horas

### Cómo te ayuda E-SMART360 a cumplir con la regla

- **Muestra un contador regresivo** del tiempo restante
- **Envía alertas** antes de que la ventana expire
- **Soporta plantillas de mensaje** para enviar después de 24 horas
- **Facilita la creación de plantillas** personalizadas


> **Consejo:** Para notificaciones de pedido como la que estamos configurando, se utiliza una plantilla de tipo Utilidad. Esto significa que el mensaje puede enviarse incluso si han pasado más de 24 horas desde el último mensaje del cliente. Es una de las principales ventajas de las plantillas de Utilidad.

### Ejemplos prácticos de la regla de 24 horas

| Escenario | Acción permitida | Tipo de mensaje |
|-----------|-----------------|-----------------|
| Cliente pregunta por un producto | Responder libremente | Mensaje gratuito |
| Pasadas 24 horas desde el último mensaje | Solo plantillas aprobadas | Plantilla Utility |
| Cliente compra un producto | Enviar confirmación con plantilla | Plantilla Utility |
| Cliente abre un mensaje tuyo | Responder libremente por 24h | Mensaje gratuito |

---

## Calidad de mensajes en WhatsApp

WhatsApp asigna una **calificación de calidad** a cada número de teléfono empresarial. Esta calificación actúa como un indicador de salud de tus mensajes.

### Niveles de calificación

- **🟢 Verde**: Calidad alta
- **🟡 Amarillo**: Calidad media
- **🔴 Rojo**: Calidad baja

### ¿Por qué es importante?

- Determina si puedes aumentar tus límites de transmisión
- Refleja la efectividad de tus mensajes
- Guía tu estrategia de comunicación

### Factores que influyen en la calificación

**Interacciones positivas:** El usuario hace clic o responde
**Interacciones neutrales:** El usuario no interactúa
**Interacciones negativas:** El usuario bloquea tu número o reporta como spam

### Cómo mejorar tu calificación de calidad

1. **Sigue las políticas de WhatsApp Business**
2. **Envía mensajes solo a usuarios que hayan dado su consentimiento**
3. **Crea contenido personalizado y valioso**
4. **Gestiona la frecuencia de mensajes cuidadosamente**
5. **Monitorea las notificaciones de advertencia**
6. **Pausa las transmisiones temporalmente si la calificación es baja**
7. **Permite que la calificación se recupere** (generalmente una semana)

### Requisitos para aumentar el límite de mensajes

- Envía mensajes al 50% de tu límite actual de usuarios
- Mantén una calificación de calidad Media o Alta
- Ejemplo: Si tu límite es 1,000 usuarios, debes enviar a 500 usuarios únicos


> Si tu calificación de calidad es baja, es posible enviar mensajes, pero no se recomienda. El riesgo de que tu número sea bloqueado aumenta significativamente.

---

## Límites de transmisión y mensajes

WhatsApp establece límites de mensajes según el nivel de tu cuenta. Es importante conocerlos para planificar tu estrategia de notificaciones.

### Límites por nivel

| Nivel | Límite de usuarios | Límite de mensajes/día |
|-------|:------------------:|:----------------------:|
| Tier 1 | 1,000 usuarios | 1,000 mensajes |
| Tier 2 | 10,000 usuarios | 10,000 mensajes |
| Tier 3 | 100,000 usuarios | 100,000 mensajes |
| Tier 4 | Sin límite | Personalizado |

### Cómo aumentar tu nivel

1. Mantén una **calificación de calidad Media o Alta**
2. Envía mensajes al **50% de tu límite actual**
3. Solicita el aumento a través de Meta
4. Espera la aprobación (generalmente 24-72 horas)


> Para la mayoría de las tiendas WooCommerce, el Tier 1 (1,000 usuarios) es suficiente para empezar. A medida que crezca tu base de clientes, puedes solicitar aumentos.

---

## Solución de problemas

### Error: mensajes no se envían — método de pago (Código 131042)


### ¿Cómo solucionar el error de método de pago (Código 131042)?

Este error ocurre cuando hay un problema con el método de pago asociado a tu cuenta de WhatsApp Business.

**Síntoma:** En el Webhook Report aparece el error: "Message failed to send because there were one or more errors related to your payment method."

**Pasos para solucionarlo:**

1. **Accede a la configuración de pagos de Meta:**
   - Ve al panel de E-SMART360 y haz clic en el enlace a Meta WhatsApp Manager
   - En **Billings & Payments → Accounts**, haz clic en **WhatsApp Business Accounts**
   - Busca el WhatsApp Manager que coincida con tu Business ID

2. **Verifica el método de pago:**
   - Si no hay método de pago, haz clic en **(•••) → View details**
   - Completa ambos pasos: **Add payment info** y **Verify tax info**

3. **Verifica tu Facebook Business Manager:**
   - Ve al **Security Center** desde el panel de E-SMART360
   - Si tu negocio no está verificado, sigue el proceso de **"Start Verification"**
   - La verificación puede tardar entre **24 y 48 horas**


> Pagar tu suscripción a E-SMART360 NO cubre las tarifas de conversación de Meta. Debes añadir un método de pago separado en Meta WhatsApp Manager.


### Error: el webhook no captura la respuesta


### El webhook no captura la respuesta del pedido

Si los datos del pedido no aparecen en E-SMART360:

**Causas posibles:**
1. **URL incorrecta** — Verifica que la URL en WooCommerce sea exactamente la misma
2. **Webhook inactivo** — Revisa que el estado sea "Active"
3. **Tema incorrecto** — Asegúrate de haber seleccionado "Order created"
4. **Pedido no completado** — Si el pedido queda en "Pending payment", el webhook no se dispara
5. **Firewall o plugin de seguridad** — Algunos plugins bloquean llamadas salientes

**Solución:** Realiza un segundo pedido de prueba. Si el problema persiste, revisa los logs de WooCommerce en **WooCommerce → Status → Logs** y busca errores del webhook.

### Error: plantilla de mensaje rechazada


### ¿Por qué Meta rechazó mi plantilla?

Razones comunes y soluciones:

**1. Categoría incorrecta:** Usa **Utility** para notificaciones transaccionales, no Marketing.

**2. Contenido promocional:** Las plantillas Utility no deben contener lenguaje promocional. Ejemplos de lo que NO debes incluir:
- ❌ "¡Aprovecha esta oferta única!"
- ❌ "¡50% de descuento en tu próxima compra!"
- ✅ "Tu pedido #12345 ha sido confirmado."

**3. Variables mal formateadas:**
- Usa `{{nombre_variable}}` con guiones bajos
- Las variables `{{1}}`, `{{2}}` son obligatorias para Utility

**4. Sin propósito claro:** Debe ser obvio por qué el usuario recibe el mensaje.

**Para corregir:** Edita la plantilla, corrige los errores y guárdala nuevamente. Meta la revisará automáticamente.

### Error: el formateador no funciona correctamente


### Los datos aparecen con formato incorrecto en el mensaje

Si el mensaje que recibe el cliente tiene datos mal formateados:

**Lista de productos:**
- Verifica que el formateador extraiga `name`, `quantity` y `total`
- Prueba con 2 o más productos

**Precio total:**
- Asegúrate del símbolo de moneda correcto ($, €, £)
- Verifica 2 decimales

**Fecha:**
- Confirma la conversión de ISO a DD/MM/AAAA
- Asegúrate de usar `date_created` no `date_modified`

**Solución:** Edita el workflow, ajusta los formateadores y guarda nuevamente. Realiza otro pedido de prueba para verificar la corrección.

---

## Errores comunes y sus soluciones

A continuación se presentan los errores más frecuentes al configurar notificaciones de WooCommerce con WhatsApp y cómo solucionarlos.

### Error: número de teléfono no encontrado

Si el campo Phone Number no se mapea correctamente:


### El número de teléfono no se encuentra en los datos

**Causa:** El cliente no proporcionó un número de teléfono durante el checkout.

**Solución:**
1. Asegúrate de que el campo de teléfono sea **obligatorio** en tu checkout de WooCommerce
2. Verifica que el plugin de checkout no esté ocultando el campo de teléfono
3. Comprueba en los datos JSON qué campo contiene el teléfono (puede estar en `billing.phone` o en `shipping.phone`)

### Error: cuenta de WhatsApp no conectada


### La cuenta de WhatsApp no está vinculada a E-SMART360

**Solución:**
1. Ve al panel de configuración de WhatsApp en E-SMART360
2. Verifica que tu número esté conectado correctamente
3. Si es necesario, desconecta y vuelve a conectar la cuenta
4. Sigue el proceso de Embedded Signup para vincular tu número

**Recomendación:** Después de conectar la cuenta, espera 5-10 minutos antes de probar el envío de mensajes para que la sincronización se complete.

### Error: mensajes marcados como spam


### Los mensajes de notificación están siendo marcados como spam

Si los clientes reportan tus mensajes como spam o WhatsApp los bloquea:

**Causas comunes:**
1. El cliente no dio su consentimiento explícito para recibir mensajes
2. Demasiados mensajes en poco tiempo
3. Contenido del mensaje parece promocional en lugar de transaccional
4. El número no tiene una buena calificación de calidad

**Soluciones:**
1. **Obtén consentimiento explícito** durante el checkout (casilla de verificación)
2. **Respeta la frecuencia** de mensajes, no más de 1-2 por semana por cliente
3. **Usa contenido transaccional** en las notificaciones de pedido
4. **Monitorea tu calificación de calidad** en el panel de E-SMART360
5. Si la calificación es baja, **pausa los envíos** por una semana para permitir la recuperación

### Error: el plugin de WooCommerce no tiene la opción de webhook


### No encuentro la opción de Webhooks en WooCommerce

**Causa:** La opción de Webhooks está disponible desde WooCommerce 2.2+, pero puede estar oculta si usas un theme personalizado o plugins que modifican el menú.

**Solución:**
1. Asegúrate de tener WooCommerce actualizado a la última versión
2. Ve directamente a: **WooCommerce → Settings → Advanced → Webhooks**
3. Si no aparece, verifica que ningún plugin esté ocultando esta opción
4. Alternativamente, puedes acceder directamente mediante la URL: `tudominio.com/wp-admin/admin.php?page=wc-settings&tab=advanced&section=webhooks`

**Alternativa:** Si no puedes usar webhooks nativos, puedes instalar un plugin como **WooCommerce Webhook Custom** o usar **WP Webhooks** como solución alternativa.

---

## Preguntas frecuentes


### ¿Por qué debería enviar notificaciones de pedidos por WhatsApp?

Las notificaciones por WhatsApp tienen tasas de apertura mucho más altas que el correo electrónico (98%+ vs 20-25%), proporcionan confirmación instantánea al cliente y mejoran la confianza y la comunicación post-compra. Además, los clientes pueden responder directamente si tienen preguntas sobre su pedido, creando un canal de comunicación bidireccional eficiente.

### ¿Qué se necesita para enviar notificaciones de WooCommerce por WhatsApp?

Necesitas:
1. Una **plantilla de mensaje de WhatsApp aprobada** por Meta (categoría Utility)
2. Un **Webhook Workflow** configurado en E-SMART360
3. Un **webhook de WooCommerce** configurado para el evento "Order Created"
4. El **mapeo de datos** correcto dentro de E-SMART360 para que los campos del pedido se asignen a las variables de la plantilla
5. Una **cuenta de WhatsApp Business** conectada a E-SMART360

### ¿Qué variables debería usar en la plantilla?

Las variables recomendadas son:
- **Product List** — muestra los productos comprados con cantidades y precios
- **Total Price** — el importe total del pedido
- **Estimated Delivery Date** — la fecha prevista de entrega
Estas variables insertan dinámicamente los detalles del pedido en el mensaje de WhatsApp. También puedes añadir variables adicionales como `{{order_number}}` para el número de pedido o `{{payment_method}}` para el método de pago.

### ¿Cómo envía WooCommerce los datos del pedido a E-SMART360?

WooCommerce envía los datos del pedido a través de un webhook configurado en **WooCommerce → Settings → Advanced → Webhooks**. Cuando se crea un nuevo pedido, WooCommerce envía automáticamente los datos en formato JSON a la URL del webhook de E-SMART360. E-SMART360 procesa estos datos y los mapea a las variables de la plantilla de mensaje.

### ¿Puedo probar el webhook antes de ponerlo en producción?

Sí. Puedes realizar un pedido de prueba en WooCommerce y utilizar la función **"Capture Webhook Response"** de E-SMART360 para mapear y verificar los datos antes de activar el flujo completo. También puedes usar el botón **"Send test"** en WooCommerce para enviar datos de muestra.

### ¿Cuánto tiempo tarda en llegar la notificación de WhatsApp?

Después de realizar un pedido, el procesamiento del webhook puede tardar unos segundos. Una vez procesado, la notificación de WhatsApp se envía automáticamente. En la mayoría de los casos, el mensaje llega en menos de 30 segundos, aunque puede variar según la velocidad de tu servidor y la conexión con la API de WhatsApp.

### ¿Puedo enviar notificaciones cuando el pedido cambia de estado?

Sí. Puedes crear workflows adicionales para diferentes eventos de WooCommerce:
- **Order completed** — cuando el pedido se envía
- **Order cancelled** — cuando se cancela
- **Order refunded** — cuando se reembolsa
- **Order on hold** — cuando está en espera
Cada evento necesita su propio webhook en WooCommerce y su propia plantilla de mensaje en E-SMART360.

### ¿Qué hago si mi plantilla no se aprueba?

Si tu plantilla es rechazada, revisa las razones que Meta proporciona:
1. **Categoría incorrecta**: Usa Utility en lugar de Marketing
2. **Contenido engañoso**: Elimina afirmaciones exageradas
3. **Formato incorrecto**: Verifica la sintaxis de las variables
4. **Idioma incorrecto**: Asegúrate de que el locale coincida con el contenido
Corrige los problemas, edita la plantilla y solicita una nueva revisión. El proceso de aprobación suele ser más rápido en la segunda revisión.

### ¿Puedo personalizar el mensaje para cada cliente?

Sí, absolutamente. Usando las variables `{{1}}`, `{{product_list}}`, `{{total_price}}`, etc., cada mensaje se personaliza automáticamente con los datos específicos del pedido de cada cliente. También puedes añadir variables adicionales como `{{customer_name}}`, `{{order_number}}`, `{{shipping_address}}` para una personalización aún más profunda.

### ¿Qué pasa si el número de teléfono del cliente tiene el formato incorrecto?

El formateador que creaste para eliminar el signo `+` debería solucionar el problema más común. Sin embargo, si el número tiene otros problemas (como espacios, guiones o código de país incorrecto), es posible que necesites crear formateadores adicionales. WhatsApp requiere números en formato internacional sin el signo `+`, por ejemplo: `521234567890` para México.

### ¿Puedo usar esta misma configuración para Shopify?

Sí, E-SMART360 también soporta Shopify. El proceso es muy similar:
1. Crea la plantilla de mensaje y las variables
2. Crea un Webhook Workflow
3. En lugar de configurar un webhook en WooCommerce, configuras un webhook en Shopify para el evento **"Order creation"**
4. El mapeo de datos es similar, aunque la estructura JSON de Shopify es diferente a la de WooCommerce
Consulta la documentación de Webhook Workflow para Shopify para más detalles.

---

## Casos de uso avanzados

### Notificación de pedido con enlace de seguimiento

Puedes enriquecer tu notificación incluyendo un enlace de seguimiento si utilizas un plugin de envío en WooCommerce:

```
¡Hola {{1}}! 📦

Tu pedido #{{order_number}} está en camino.

Productos: {{product_list}}
Total: {{total_price}}

📮 Número de seguimiento: {{tracking_number}}
🔗 Dale clic aquí para rastrear: {{tracking_url}}

¡Gracias por tu compra! 🙏
```

### Recuperación de carritos abandonados

Puedes ampliar esta automatización para recuperar carritos abandonados. Cuando un cliente añade productos al carrito pero no completa la compra:

1. WooCommerce detecta el carrito abandonado (con plugins como WooCommerce Abandoned Cart Pro)
2. El plugin envía un webhook a E-SMART360
3. Se envía un mensaje automático al cliente recordándole su carrito

```
¡Hola {{1}}! 🛒

Vimos que dejaste algunos productos en tu carrito:
{{product_list}}

¡Completa tu compra ahora y recibe un descuento!
🔗 {{checkout_url}}

¡Te esperamos! 💫
```

### Notificación para pedidos contra reembolso (COD)

Para tiendas que aceptan pago contra reembolso, puedes crear una notificación especial:

```
¡Hola {{1}}!

Tu pedido #{{order_number}} ha sido confirmado.

Productos: {{product_list}}
Total a pagar: {{total_price}}

💰 Método de pago: Contra reembolso
📅 Fecha de entrega estimada: {{estimated_delivery_date}}

Por favor, ten el efectivo listo para la entrega.
¡Gracias! 🙌
```

### Notificación de envío parcial

Si envías productos por separado:

```
¡Hola {{1}}!

¡Buenas noticias! 🚀

Parte de tu pedido #{{order_number}} ha sido enviado:
{{shipped_items}}

El resto se enviará pronto. Te notificaremos.

📮 Seguimiento: {{tracking_number}}

¡Gracias por tu paciencia! 💪
```

---

## Conclusión

Configurar las notificaciones de pedidos de WooCommerce a través de WhatsApp con E-SMART360 es un proceso sencillo que transforma la comunicación post-venta de tu negocio. Siguiendo los pasos descritos en esta guía —crear la plantilla de mensaje, configurar el Webhook Workflow, conectar WooCommerce mediante webhook y mapear los datos correctamente— podrás enviar notificaciones automáticas y personalizadas a tus clientes cada vez que realicen un pedido.

Esta automatización no solo mejora la experiencia del cliente, sino que también:
- **Reduce la carga de trabajo** de tu equipo de soporte
- **Aumenta la confianza del cliente** con información oportuna
- **Mejora la tasa de retención** al mantener una comunicación proactiva
- **Elimina errores humanos** al automatizar completamente el proceso


> **¿Listo para implementarlo?** Inicia sesión en tu cuenta de E-SMART360 y comienza a configurar tu primer Webhook Workflow para WooCommerce hoy mismo. Tus clientes te lo agradecerán.

---


> **Historial de actualizaciones (6 de mayo de 2026)**
> - Versión inicial completa: guía paso a paso para enviar notificaciones de pedidos de WooCommerce a WhatsApp
- Secciones añadidas: regla de 24 horas, calificación de calidad, límites de transmisión, solución de errores comunes
- Ejemplos prácticos: notificaciones con enlace de seguimiento, carritos abandonados, pedidos COD, envío parcial
- FAQ ampliada con 10 preguntas frecuentes
