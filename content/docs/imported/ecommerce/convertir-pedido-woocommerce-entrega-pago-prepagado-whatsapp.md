---
title: "Convertir Pedidos WooCommerce Contra Entrega (COD) en Pedidos Prepagados vía WhatsApp"
description: "Guía completa para automatizar la conversión de pedidos contra reembolso en WooCommerce a pedidos prepagados usando el flujo de trabajo Webhook de E-SMART360. Incluye configuración de plantillas, mapeo de datos, condicionales y envío de mensajes con códigos de descuento."
section: "ecommerce"
order: 189
audience: ["cliente"]
platform: ["chatbots"]
useCase: ["ecommerce"]
source: "fulldoc"
sourceSlug: "convertir-pedido-woocommerce-entrega-pago-prepagado-whatsapp"
canonicalGroup: "convertir-pedidos-woocommerce-contra-entrega-cod-en-pedidos-prepagados-via-whatsapp"
tags: ["ecommerce"]
staging: true
---
<Update title="Actualización reciente" date="2026-02-09" />
Guía actualizada con el flujo completo de Webhook Workflow, incluyendo nuevas funcionalidades de Callback API y postbacks interactivos.

## Resumen Ejecutivo

La funcionalidad de **Webhook Workflow** de E-SMART360 permite convertir automáticamente pedidos **Contra Reembolso (COD)** de WooCommerce en **pedidos prepagados**. Cuando un cliente realiza un pedido COD, WooCommerce activa un webhook que envía los datos del pedido en tiempo real a E-SMART360. La plataforma verifica el método de pago, formatea el número de teléfono, mapea los detalles del producto, aplica condiciones personalizadas y envía una plantilla de mensaje de WhatsApp con un código promocional para incentivar al cliente a cambiar de COD a pago prepagado.


> **¿Por qué convertir pedidos COD a prepagados?** Los pedidos contra reembolso tienen una alta tasa de cancelación y fraude. Al incentivarlos a prepagar, reduces el riesgo, mejoras tu flujo de caja y aumentas la rentabilidad de tu tienda online.

## Requisitos Previos

Antes de comenzar con la configuración, asegúrate de tener lo siguiente:


### Cuenta activa en E-SMART360

Debes tener una cuenta activa con acceso al panel de control y al módulo de Webhook Workflow.

### Tienda WooCommerce activa con webhooks habilitados

Tu tienda WooCommerce debe estar funcionando correctamente y tener acceso a la configuración de webhooks en el panel de administración de WordPress.

### Número de WhatsApp Business conectado

Asegúrate de tener un número de WhatsApp Business conectado a E-SMART360. Sigue la guía de conexión si aún no lo has hecho.

### Plantilla de mensaje WhatsApp aprobada

Necesitas una plantilla de mensaje de WhatsApp aprobada por Meta para poder enviar mensajes proactivos. Puedes crearla desde el panel de E-SMART360 y solicitar su aprobación.

## Descripción General del Proceso

El flujo completo consta de las siguientes etapas:

1.  **Creación de la plantilla de mensaje** en E-SMART360 con variables para productos y código de descuento.
2.  **Creación del Webhook Workflow** que conecta WooCommerce con E-SMART360.
3.  **Configuración del webhook en WooCommerce** para enviar datos de pedidos entrantes.
4.  **Captura y mapeo de datos** para extraer número de teléfono, productos y detalles del pedido.
5.  **Configuración de condiciones** para que solo se active con métodos COD.
6.  **Configuración de retardo** para enviar el mensaje minutos después del pedido.
7.  **Prueba y verificación** del flujo completo.


> **Tiempo estimado:** La configuración completa toma aproximadamente 20-30 minutos. La aprobación de la plantilla de WhatsApp puede demorar hasta 48 horas.

## Paso 1: Crear la Plantilla de Mensaje en E-SMART360

Las plantillas de mensaje de WhatsApp son el núcleo de cualquier automatización de comunicación en E-SMART360. WhatsApp Business API exige que todos los mensajes proactivos —es decir, aquellos que se envían fuera de la ventana de conversación de 24 horas— utilicen plantillas previamente aprobadas por Meta. Por eso, el primer paso es crear una plantilla que incluya variables dinámicas como el listado de productos y el código de descuento.


> **Tipos de plantillas disponibles:** WhatsApp clasifica las plantillas en tres categorías: **Marketing** (promociones y ofertas), **Utilidad** (confirmaciones de pedidos, actualizaciones de estado) y **Autenticación** (códigos OTP). Para nuestra estrategia de conversión COD a prepago, la categoría recomendada es **Marketing**, ya que incentivamos al cliente a realizar una acción comercial.

### 1.1 Acceder al Gestor de Mensajes

Desde el panel de control de E-SMART360, dirígete al menú **Bot Manager** en la barra lateral izquierda. Al hacer clic, se abrirá la página de gestión del bot de WhatsApp con varias opciones. La que nos interesa es **Message Template**.

### 1.2 Crear Variables de Plantilla

Antes de redactar el mensaje, es altamente recomendable crear primero las variables que utilizarás. Esto asegura que cuando estés escribiendo el cuerpo del mensaje, puedas insertar las variables directamente sin tener que salir del editor.

1.  Desplázate hasta la sección **Template Variable**, generalmente ubicada debajo del área de creación de plantillas.
2.  Haz clic en **Create**.
3.  Ingresa un nombre para la primera variable, por ejemplo `product_list` para el listado de productos.
4.  Haz clic en **Save**.
5.  Repite el proceso para `discount_code` para el código promocional.
6.  Si tu mensaje incluirá el total del pedido, crea también `total_price`.


> Las variables se insertan en el cuerpo del mensaje usando dobles llaves, por ejemplo: `{{product_list}}`. Estas serán reemplazadas dinámicamente con los datos reales del pedido cuando se envíe el mensaje. Puedes crear tantas variables como necesites, pero recuerda que el cuerpo del mensaje tiene un límite de 1024 caracteres.

### 1.3 Redactar la Plantilla de Mensaje

1.  Desplázate hacia arriba hasta la sección **Message Template Settings**.
2.  Haz clic en el botón **Create**. Aparecerá un formulario modal llamado **Message Template**.
3.  Completa los campos del formulario:

    | Campo | Descripción | Ejemplo |
    |-------|-------------|---------|
    | **Template Name** | Nombre único para identificar la plantilla. Debe ser descriptivo | `cod_to_prepaid_offer` |
    | **Message Body** | Cuerpo del mensaje con las variables que creaste | `¡Gracias por tu pedido {{product_list}}! Paga ahora y obtén un {{discount_code}} de descuento.` |
    | **Footer Text** | Texto opcional que aparece al pie del mensaje | `Válido por 24 horas · Ofrecido por [Tu Tienda]` |
    | **Button Text** | Texto del botón de llamada a la acción (CTA) | `Pagar Ahora` |


> **Errores comunes que causan rechazo de plantillas:**
1. Usar mayúsculas excesivas o signos de exclamación repetidos (¡¡¡).
2. Promocionar contenido restringido (alcohol, tabaco, productos financieros no regulados).
3. Incluir URLs acortadas (bit.ly, tinyurl). Usa URLs completas.
4. Incluir información de contacto personal (números de teléfono, correos) en el cuerpo.
5. No tener un propósito claro de la categoría seleccionada (Marketing vs Utilidad).

### 1.4 Agregar Botones de Respuesta Rápida (Opcional pero Altamente Recomendado)

Los botones de respuesta rápida permiten que el cliente interactúe directamente desde el mensaje sin tener que escribir texto. Esto mejora la tasa de conversión significativamente.

1.  En el formulario de creación, activa la opción **Quick Reply**.
2.  Aparecerán campos para definir hasta 3 botones.
3.  Puedes agregar botones como:
    - **Botón 1:** "✅ Pagar Ahora" — con postback asociado a la confirmación de pago.
    - **Botón 2:** "💬 Hablar con Asesor" — opcional para quienes tengan dudas.
    - **Botón 3:** "❌ Cancelar Pedido" — con postback asociado a la cancelación.


### Configurar botones en la plantilla

En el modal de creación, desplázate hasta la sección de botones. Selecciona el tipo **Quick Reply** y escribe el texto de cada botón. Ejemplo:
- Botón 1: "✅ Pagar Ahora" (tipo: postback, valor: confirm_payment)
- Botón 2: "❌ Cancelar Pedido" (tipo: postback, valor: cancel_order)

### Guardar la plantilla

Revisa que todos los campos estén correctos. Haz clic en **Save**. La plantilla quedará registrada con estado "Pendiente" o "En revisión".

### Verificar estado de aprobación

En la lista de plantillas, haz clic en **Check status** para verificar si la plantilla fue aprobada. El proceso puede tomar desde unos minutos hasta 48 horas hábiles. Mientras esperas, puedes continuar con los siguientes pasos de configuración.

## Paso 2: Crear el Webhook Workflow

El Webhook Workflow es el mecanismo central que conecta WooCommerce con E-SMART360 y automatiza el envío de mensajes. Piensa en él como un puente que recibe los datos de tu tienda, los procesa según tus reglas y ejecuta acciones en WhatsApp automáticamente.


> **¿Qué es un webhook?** Un webhook es una notificación automática que envía un sistema a otro cuando ocurre un evento específico. En nuestro caso, WooCommerce notifica a E-SMART360 cada vez que se crea un pedido nuevo, enviando todos los detalles del pedido en formato JSON.

### 2.1 Acceder a Webhook Workflow

1.  En el panel de control de E-SMART360, haz clic en el menú **Webhook Workflow** ubicado en la barra lateral izquierda.
2.  Se abrirá la página de gestión de workflows, con una lista de workflows existentes (si los hay) y un botón **Create** en la parte superior.
3.  Haz clic en **Create**.
4.  Aparecerá una sección expandible llamada **New Workflow** en la parte inferior de la página.

### 2.2 Configurar el Workflow

Completa los campos del nuevo workflow. Cada campo es importante para el correcto funcionamiento:

| Campo | Descripción | Ejemplo de valor |
|-------|-------------|------------------|
| **Workflow Name** | Nombre descriptivo para identificar este flujo | `Conversor COD a Prepago` |
| **Select WhatsApp Account** | Cuenta de WhatsApp desde la que se enviará el mensaje | Tu número de WhatsApp Business |
| **Select Message Template** | Plantilla de mensaje creada en el Paso 1 | `cod_to_prepaid_offer` |
| **Select Sender ID** (opcional) | Identificador del remitente si usas múltiples cuentas | Déjalo por defecto si solo tienes una |


> Al seleccionar la plantilla, la plataforma reconocerá automáticamente las variables definidas (product_list, discount_code) y las asociará con los campos que mapearemos más adelante. Si la plantilla tiene botones de respuesta rápida, también se detectarán automáticamente.

### 2.3 Obtener la URL del Webhook

Una vez que hayas completado los campos básicos, aparecerá una **Webhook Callback URL** en la interfaz. Esta URL es única para tu workflow y es el punto de conexión que WooCommerce usará para enviar los datos.

```
https://api.esmart360.com/webhook/workflow/{workflow_id}
```



#### Ejemplo de URL

```
https://api.esmart360.com/webhook/workflow/wf_a1b2c3d4e5f6
```

> **No compartas esta URL con terceros.** Es privada de tu cuenta y cualquier persona que la tenga podría enviar datos a tu workflow, lo que podría generar falsos positivos en los reportes o incluso enviar mensajes no deseados.

## Paso 3: Configurar el Webhook en WooCommerce

Ahora debes configurar WooCommerce para que envíe los datos de los pedidos nuevos a E-SMART360.

### 3.1 Acceder a Configuración de WooCommerce

Desde el panel de administración de WordPress:

1.  Ve a **WooCommerce > Settings**.
2.  Selecciona la pestaña **Advanced**.
3.  Haz clic en **Webhooks**.
4.  Verás una lista de webhooks existentes (si los hay).

### 3.2 Agregar un Nuevo Webhook

1.  Haz clic en **Add Webhook**.
2.  Completa los campos:

    | Campo | Valor |
    |-------|-------|
    | **Name** | Un nombre descriptivo, ej: `E-SMART360 COD Converter` |
    | **Status** | Activo |
    | **Topic** | Selecciona **Order Created** |
    | **Delivery URL** | Pega la Webhook Callback URL que copiaste de E-SMART360 |
    | **Secret** | Déjalo en blanco (opcional) |

3.  Haz clic en **Save Webhook**.

## Paso 4: Capturar Datos del Webhook

Una vez configurado el webhook, necesitas capturar datos reales de un pedido para poder mapear los campos correctamente.

### 4.1 Generar un Pedido de Prueba

1.  Ve a tu tienda WooCommerce y realiza un pedido de prueba usando el método **Contra Reembolso (COD)**.
2.  Asegúrate de que el pedido se complete exitosamente.

### 4.2 Capturar la Respuesta del Webhook

1.  Vuelve a E-SMART360 y haz clic en **Capture Webhook Response**.
2.  Aparecerá la página de **Webhook Response Mapping** con datos de muestra.
3.  Haz clic en **Connection details** y espera unos momentos.
4.  Los datos reales del pedido que acabas de realizar deberían aparecer.


> Los datos de muestra (sample data) son automáticos cuando se crea el webhook. Pero para el mapeo real necesitas datos genuinos de un pedido. Si no ves datos reales, verifica que el webhook en WooCommerce esté activo y que la URL de entrega sea correcta.

## Paso 5: Configurar el Mapeo de Datos

Con los datos reales capturados, ahora debes indicarle a E-SMART360 qué campos corresponden a qué variable.

### 5.1 Mapear el Número de Teléfono

1.  Haz clic en el campo **Name**.
2.  Se desplegará una lista de opciones extraídas de los datos del pedido.
3.  Selecciona **billing -> phone number**.


> **Problema conocido:** WhatsApp no puede enviar mensajes a números que tengan el signo más (+) al inicio. El formato internacional (ej: +521234567890) debe limpiarse.

### 5.2 Crear un Formateador para el Teléfono

Para eliminar el signo `+` automáticamente:

1.  En la sección **Data Formatter**, haz clic en **New**.
2.  Completa los campos:
    - **Name:** `Remove Plus Sign`
    - **Action:** Selecciona **Remove Characters**
    - **Characters to Remove:** `+`
3.  Haz clic en **Save Formatter**.
4.  Selecciona este formateador en el campo de teléfono.

### 5.3 Mapear el Listado de Productos

1.  En el campo **Product list**, selecciona **line_items**.
2.  Los `line_items` contienen un array con cada producto del pedido.
3.  Para mostrar los productos correctamente, crea otro formateador.

### 5.4 Crear un Formateador para el Listado de Productos

1.  Haz clic en **New** en la sección Data Formatter.
2.  Completa:
    - **Name:** `Format Product List`
    - **Action:** Selecciona **Concat List Items**
    - **Glue:** `, ` (coma y espacio)
    - **Position:** `name` (para extraer solo el nombre del producto)
3.  Haz clic en **Save Formatter**.
4.  Selecciona este formateador en el campo de lista de productos.

### 5.5 Mapear el Código de Descuento

Si tu plantilla incluye un código de descuento, puedes:

1.  Usar una variable estática: escribe el código directamente en el campo correspondiente.
2.  O crear una regla dinámica que genere un código único por pedido.


> Para generar códigos de descuento dinámicos, puedes usar las integraciones de API HTTP de E-SMART360 para conectar con tu sistema de cupones de WooCommerce y generar un cupón único por cada pedido COD.

## Paso 6: Configurar el Retardo del Mensaje

No quieres enviar el mensaje inmediatamente después del pedido, sino darle unos minutos al cliente.

1.  Busca la opción **Send message with a delay**.
2.  Selecciona la unidad de tiempo: **Minutes**.
3.  Ingresa el valor: `5` (envía el mensaje 5 minutos después del pedido).


> **¿Por qué 5 minutos?** Este tiempo le da al cliente la oportunidad de completar su proceso de compra sin sentir presión inmediata. Puedes ajustar este valor según tu estrategia comercial. Algunas tiendas usan 10 o 15 minutos para campañas más suaves.

## Paso 7: Configurar Condiciones para Pedidos COD

Este es el paso más importante. Solo queremos enviar el mensaje a clientes que hayan seleccionado **Contra Reembolso (COD)** como método de pago.

### 7.1 Activar la Condición

1.  Activa la opción **Send message based on Conditions**.
2.  Haz clic en **Add rule**.

### 7.2 Configurar la Regla

Aparecerán tres campos:

1.  **Select Data Field:** Debes seleccionar el campo que contiene el método de pago. En los datos del pedido, busca algo como `payment_method` o `payment_method_title`. Selecciona `payment_method`.
2.  **Select Operator:** Elige **Equal (=)**.
3.  **Put Value:** Escribe `cod` (en minúsculas, que es el slug del método de pago contra reembolso en WooCommerce).

### 7.3 Explicación de la Regla

| Componente | Descripción |
|------------|-------------|
| **Data Field** | `payment_method` |
| **Operador** | `Equal (=)` |
| **Valor** | `cod` |
| **Efecto** | Solo se enviará el mensaje si el método de pago es COD |


> Si tu WooCommerce tiene otros métodos de pago personalizados, asegúrate de usar el slug correcto. Puedes verificarlo en WooCommerce > Settings > Payments.

### 7.4 Guardar el Workflow

Haz clic en **Save Workflow**. Verás un mensaje de confirmación de que el workflow se ha guardado exitosamente.

## Paso 8: Agregar Postbacks para Interacción del Cliente (Mejora Avanzada)

Para ir más allá del envío básico, puedes agregar postbacks que permitan al cliente confirmar su intención de pago directamente desde WhatsApp.

### 8.1 Crear Postbacks

Los postbacks son respuestas automáticas que se activan cuando el cliente presiona un botón en el mensaje.

1.  Ve a **Bot Manager > Postback**.
2.  Haz clic en **Create Postback** para el botón **"Sí, pagar ahora"**.
3.  Configura el **Start Bot Flow**:
    - **Title:** `Confirmar pago prepago`
    - **Text Element:** Escribe un mensaje de confirmación, ej: "¡Excelente! Te hemos enviado el enlace de pago seguro. Tu pedido será procesado en cuanto completes el pago."
4.  Haz clic en **Save**.
5.  Repite el proceso para el botón **"Cancelar pedido"** con un mensaje como: "Hemos cancelado tu pedido. Si cambias de opinión, siempre puedes realizar un nuevo pedido."

### 8.2 Configurar Callback APIs para Acciones en WooCommerce

Para que los botones realmente modifiquen el estado del pedido en WooCommerce, necesitas Callback APIs:

1.  Ve a **Callback APIs** > **New**.
2.  Para el botón de **Confirmar pago**:
    - **Name:** `Confirmar pedido COD a prepago`
    - **Action:** Selecciona **WooCommerce Order Note Update**
    - **Store:** Selecciona tu tienda integrada
    - **Note:** Escribe: "Cliente confirmó conversión a prepago vía WhatsApp"
3.  Haz clic en **Save Callback API**.
4.  Repite para **Cancelar pedido**:
    - **Name:** `Cancelar pedido COD`
    - **Action:** **WooCommerce Order Note Update**
    - **Note:** "Pedido cancelado por cliente vía WhatsApp"
5.  Asigna estas Callback APIs a los respectivos botones en la configuración del Webhook Workflow.


> **Resultado:** Cuando el cliente presiona "✅ Pagar Ahora", se agrega una nota al pedido en WooCommerce indicando que el cliente confirmó el pago. Cuando presiona "❌ Cancelar Pedido", se registra la cancelación. Todo automáticamente desde WhatsApp.

## Paso 9: Probar el Flujo Completo

Antes de poner el flujo en producción, es fundamental realizar pruebas exhaustivas para asegurarte de que todo funciona correctamente. Una prueba fallida puede significar perder oportunidades de conversión o enviar mensajes incorrectos a los clientes.

### 9.1 Realizar un Pedido de Prueba

1.  Abre tu tienda WooCommerce en modo incógnito o en un navegador diferente al que usas como administrador.
2.  Agrega al menos 2 productos diferentes al carrito (para probar el formateador de lista de productos).
3.  Procede al pago y selecciona **Contra Reembolso (COD)** como método de pago.
4.  Ingresa un número de teléfono real al que tengas acceso para recibir el mensaje de WhatsApp.
5.  Completa la compra y toma nota del número de pedido.

### 9.2 Verificar el Envío del Mensaje

1.  Espera el tiempo de retardo configurado (en nuestro ejemplo, 5 minutos).
2.  Revisa el teléfono del cliente de prueba. Deberías recibir un mensaje de WhatsApp con:
    - Los nombres de los productos ordenados.
    - El código de descuento promocional.
    - Los botones de respuesta rápida (si los configuraste).
3.  Si configuraste botones, pruébalos presionando "✅ Pagar Ahora" o "❌ Cancelar Pedido".
4.  Ve al panel de E-SMART360 y haz clic en **Workflow Report**. Aquí verás:
    - Si el workflow se ejecutó correctamente.
    - El estado del envío del mensaje (enviado, entregado, leído, fallido).
    - Los datos que se utilizaron para construir el mensaje.

### 9.3 Probar Escenarios Adicionales

Para asegurarte de que las condiciones funcionan correctamente, realiza estas pruebas adicionales:



### Escenario 1: Pedido con tarjeta de crédito

1. Realiza un pedido usando tarjeta de crédito o débito.
2. Verifica que **NO** se envíe ningún mensaje de WhatsApp.
3. Confirma en Workflow Report que no haya ejecuciones para este pedido.
4. Esto confirma que la regla (payment_method = cod) funciona correctamente.

### Escenario 2: Pedido COD sin botones

1. Crea un pedido COD sin configurar postbacks (solo con el mensaje básico).
2. Verifica que el mensaje se envíe correctamente.
3. Confirma que no haya errores en el reporte.
4. Esto valida que la configuración mínima funciona.

### 9.4 Verificar la Integridad de los Datos en el Mensaje

| Elemento | Qué verificar | Posible problema |
|----------|---------------|------------------|
| **Nombre del producto** | ¿Aparece correctamente en el mensaje? | El formateador de lista de productos no está configurado o está mal configurado |
| **Código de descuento** | ¿Se muestra el código promocional? | La variable discount_code no se está reemplazando |
| **Número de teléfono** | ¿El mensaje llegó al número correcto? | El campo billing->phone está mapeado incorrectamente |
| **Sin + en el número** | ¿Se eliminó el signo más correctamente? | El formateador de teléfono no se aplicó o está mal configurado |
| **Total del pedido** (si aplica) | ¿Coincide con el total real? | El campo total no se está mapeando correctamente |

### 9.5 Prueba de Postbacks y Callbacks (Funcionalidad Avanzada)

Si configuraste postbacks y Callback APIs:

1.  Realiza un pedido COD de prueba.
2.  Cuando recibas el mensaje, presiona el botón **"✅ Pagar Ahora"**.
3.  Verifica que:
    - Recibas un mensaje de confirmación automática.
    - Se agregue una nota al pedido en WooCommerce.
    - El estado del pedido pueda actualizarse (si configuraste el cambio de estado).
4.  Repite el proceso con el botón **"❌ Cancelar Pedido"** y verifica la cancelación.


> Si no recibes el mensaje, verifica estos puntos en orden:
1. Que la plantilla esté **aprobada** por WhatsApp. Ve a Bot Manager > Message Template > Check Status.
2. Que el webhook en WooCommerce esté **Activo** y la URL de entrega sea correcta.
3. Que el número de teléfono tenga el **formato internacional correcto** (sin +, sin espacios).
4. Que los **permisos de la API de WooCommerce** permitan conexiones externas (Settings > Advanced > REST API).
5. Que el **método de pago** en Meta WhatsApp Manager esté configurado y activo.
6. Que tu **Facebook Business Manager** esté verificado (revisa Security Center en E-SMART360).

## Estrategias de Descuento Recomendadas

La efectividad de esta estrategia depende en gran medida del incentivo que ofrezcas. Aquí hay algunas ideas:



### Descuento por Porcentaje

Ofrece un 5-10% de descuento si el cliente paga en las próximas 24 horas.
**Ejemplo de mensaje:**
"¡Tu pedido {{product_list}} está confirmado! Paga ahora en línea y obtén un **10% de descuento** con el código: **PAGA10**. Válido por 24 horas."

### Envío Gratis

Si el umbral de envío gratis es alto, ofrécelo como incentivo para el prepago.
**Ejemplo de mensaje:**
"Convierte tu pedido a prepago y recibe **envío gratis**. Usa el código **ENVIOGRATIS**. ¡Ahorra en tu compra!"

### Producto Adicional

Ofrece un pequeño producto o muestra gratis al prepagar.
**Ejemplo de mensaje:**
"Paga tu pedido {{product_list}} en línea y llévate **un regalo sorpresa** adicional. Código: **REGALO1**."

## Ejemplos Prácticos de Uso



### Ejemplo 1: Tienda de Ropa

**Situación:** Cliente agrega 2 camisetas ($40) con COD. Se envía WhatsApp automático:
"¡Gracias por tu pedido **Camiseta Blanca, Camiseta Azul**! Paga ahora y obtén un **15% de descuento** con el código: **MODA15**. Válido por 24 horas."
**Resultado:** El cliente hace clic, paga en línea. La tienda ahorra costos de logística inversa.

### Ejemplo 2: Tienda de Electrónicos

**Situación:** Cliente pide un cargador ($25) con COD. Se envía WhatsApp automático:
"Recibimos tu pedido **Cargador Rápido USB-C**. Conviértelo a prepago y obtén **ENVÍO GRATIS** a todo el país con el código **ENVIOFREE**."
**Resultado:** El cliente paga, recibe seguimiento del envío. La tienda reduce el riesgo de fraude en productos pequeños.

## Caso de Uso Adicional: Confirmación de Pedidos COD con Postbacks

Además de convertir pedidos a prepagados, E-SMART360 permite **confirmar pedidos COD existentes** mediante un flujo de doble confirmación. Esto reduce los pedidos falsos y las entregas fallidas.


### Crear plantilla con botones de confirmación

Crea una plantilla que pregunte: "¿Confirmas tu pedido {{product_list}} por un total de {{total_price}}?" con botones "Confirmar Pedido" y "Cancelar Pedido".

### Mapear precio total

En el mapeo de datos, además del teléfono y productos, agrega un campo **Total Price** mapeado a la variable `total` del webhook de WooCommerce.

### Configurar Callback API de confirmación

Crea un callback API que agregue una nota al pedido: "Pedido confirmado por cliente vía WhatsApp" y opcionalmente cambie el estado del pedido a "processing".

### Configurar Callback API de cancelación

Crea otro callback API para cancelar: "Pedido cancelado por cliente vía WhatsApp" y cambiar estado a "cancelled".

### Asignar callbacks en el workflow

En la configuración del Webhook Workflow, asigna cada callback API al botón correspondiente.


> **Beneficio clave:** Este flujo de confirmación reduce hasta un 40% los pedidos falsos en tiendas WooCommerce según datos de nuestra comunidad de usuarios. El cliente reafirma su intención de compra y tú evitas costos de logística innecesarios.

## Solución de Problemas Comunes

A continuación, los errores más frecuentes y sus soluciones:


### Error: El webhook no captura datos reales

**Causa posible:** El webhook en WooCommerce no está activo o la URL de entrega es incorrecta.

**Solución:**
1. Verifica que el webhook en WooCommerce > Settings > Advanced > Webhooks esté marcado como **Active**.
2. Confirma que la URL de entrega coincida exactamente con la URL de callback de E-SMART360.
3. Verifica que los permisos de la API REST de WooCommerce permitan conexiones externas (Settings > Advanced > REST API).
4. Haz un pedido de prueba adicional y espera 30 segundos antes de hacer clic en Connection Details.

### Error: El mensaje de WhatsApp no se envía

**Causa posible:** La plantilla no está aprobada o hay problemas con el método de pago.

**Solución:**
1. Verifica el estado de la plantilla en Bot Manager > Message Template > Check Status.
2. Asegúrate de tener un método de pago configurado en WhatsApp Manager para cubrir las tarifas de conversación.
3. Revisa que el Facebook Business Manager esté verificado (Security Center en E-SMART360).
4. Confirma que el número de WhatsApp esté activo y conectado correctamente.

### Error 131042: Problema con el método de pago de WhatsApp

**Causa:** Error relacionado con el método de pago de Meta asociado a tu cuenta de WhatsApp Business.

**Soluciones:**
1. Ve a E-SMART360 > Payment Methods y selecciona el Facebook Business Manager correcto.
2. En Meta WhatsApp Manager, ve a Billing > Accounts > WhatsApp Business Accounts.
3. Selecciona el WhatsApp Manager que coincide con tu Business ID de E-SMART360.
4. Haz clic en los tres puntos (•••) > View Details.
5. Completa ambos pasos: agregar información de pago y verificar información fiscal.
6. También verifica que tu Facebook Business Manager esté verificado en Security Center.

### Error: El número de teléfono contiene signo +

**Causa:** Los webhooks de WooCommerce envían el número con formato internacional (+521234567890), que WhatsApp rechaza.

**Solución:**
1. En el mapeo de datos, crea un formateador como se explicó en el Paso 5.2.
2. Si el problema persiste, agrega otro formateador que elimine espacios y guiones.
3. Prueba manualmente formando el número sin el + para confirmar que el formateador funciona.

### Error: Los productos no aparecen en el mensaje

**Causa:** El formateador del listado de productos no está correctamente configurado.

**Solución:**
1. Verifica que el campo **Product list** esté mapeado a `line_items`.
2. Asegúrate de que el formateador use la acción **Concat List Items** y la posición `name`.
3. Prueba con un pedido que tenga 2 o más productos para verificar que el concatenado funciona.
4. Si usas variables personalizadas, asegúrate de que los nombres coincidan exactamente.

## Preguntas Frecuentes


### ¿Qué es el Webhook Workflow de E-SMART360?

El **Webhook Workflow** es una funcionalidad que permite enviar mensajes automatizados de WhatsApp basados en datos en tiempo real recibidos de plataformas externas como WooCommerce, Shopify o páginas de Facebook. Actúa como un puente entre tu tienda online y la mensajería de WhatsApp, permitiendo automatizaciones complejas sin necesidad de programación.

### ¿Cómo convierte E-SMART360 los pedidos COD en prepagados?

Cuando se realiza un pedido COD en WooCommerce, un webhook envía los datos del pedido a E-SMART360. La plataforma verifica el método de pago y, si es COD, envía un mensaje de WhatsApp con un código de descuento o promoción para incentivar al cliente a pagar en línea. El flujo es 100% automático una vez configurado.

### ¿Qué plataformas se usan en esta integración?

Este flujo de trabajo utiliza **tres plataformas**: WooCommerce como tienda online, E-SMART360 como plataforma de automatización de mensajes, y WhatsApp como canal de comunicación con el cliente. No se requiere ningún software adicional.

### ¿Necesito plantillas de mensaje de WhatsApp?

**Sí, es obligatorio.** WhatsApp Business API exige que todos los mensajes proactivos (enviados fuera de la ventana de 24 horas) usen plantillas aprobadas por Meta. Debes crear y obtener aprobación de una plantilla en E-SMART360 antes de usarla en un Webhook Workflow. El proceso de aprobación puede tomar desde minutos hasta 48 horas.

### ¿Puedo controlar cuándo se envía el mensaje de WhatsApp?

**Sí.** E-SMART360 permite configurar un retardo personalizado. Puedes enviar el mensaje:
- **Inmediatamente** después del pedido.
- **Con retardo** de 1 a 1440 minutos (24 horas).
Esto te permite elegir el momento óptimo para contactar al cliente sin ser invasivo.

### ¿Cómo identifica E-SMART360 los pedidos COD?

E-SMART360 utiliza el **mapeo de respuesta del webhook** para leer el campo del método de pago de los datos del pedido de WooCommerce. Aplica una condición que activa el envío del mensaje solo cuando el método de pago es COD. Puedes configurar reglas adicionales para filtrar otros criterios como el monto mínimo del pedido.

### ¿Por qué es necesario formatear el número de teléfono?

WhatsApp no acepta números de teléfono que comiencen con el signo más (+). WooCommerce envía los números en formato internacional completo (ej: +521234567890). E-SMART360 incluye un formateador que elimina automáticamente el signo más, los espacios y los guiones para que el mensaje pueda entregarse correctamente.

### ¿Puedo incluir los detalles de los productos en el mensaje de WhatsApp?

**Sí.** Puedes mapear los `line_items` de WooCommerce y el listado de productos dentro de la plantilla de WhatsApp utilizando variables y formateadores. El mensaje mostrará dinámicamente los nombres de los productos ordenados, separados por comas o en el formato que elijas.

### ¿Este flujo de trabajo es completamente automático?

**Sí, completamente.** Una vez configurado, todo el proceso —desde la creación del pedido en WooCommerce hasta la entrega del mensaje de WhatsApp— se ejecuta automáticamente sin intervención manual. Además, los postbacks y callbacks permiten que la respuesta del cliente también se procese automáticamente en WooCommerce.

### ¿Qué límites de mensajería debo considerar?

WhatsApp Business API impone límites según el nivel de calidad de tu cuenta:
- **Tier 1:** 1,000 conversaciones/día (cuentas nuevas).
- **Tier 2:** 10,000 conversaciones/día.
- **Tier 3:** 100,000 conversaciones/día.
- **Tier 4:** Ilimitado (cuentas verificadas con alta calidad).

Asegúrate de monitorear la calidad de tus mensajes desde el panel de E-SMART360 para mantener un rating alto y evitar restricciones.

## Mejores Prácticas para la Tasa de Conversión de COD a Prepago

La efectividad de esta automatización depende de varios factores. Aquí compartimos las mejores prácticas basadas en la experiencia de cientos de tiendas que usan E-SMART360.

### 1. Timing del Mensaje

El momento en que envías el mensaje es crucial. Basado en análisis de datos:

| Momento del envío | Tasa de conversión estimada |
|-------------------|----------------------------|
| Inmediato (0 min) | 15-20% |
| 5 minutos después | 25-35% |
| 15 minutos después | 30-40% |
| 1 hora después | 20-25% |
| 24 horas después | 5-10% |


> **Recomendación:** Configura un retardo de entre 5 y 15 minutos. Esto le da tiempo al cliente para "aterrizar" después de la compra pero sin que se olvide del pedido.

### 2. Contenido del Mensaje

- **Sé específico con el descuento:** En lugar de "tienes un descuento", di "obtén un 10% de descuento" o "recibe envío gratis".
- **Usa el nombre del cliente:** Si tu webhook de WooCommerce incluye el nombre del cliente (`billing->first_name`), agrégalo como variable en la plantilla.
- **Crea urgencia:** Incluye frases como "Válido por 24 horas" o "Oferta exclusiva post-compra".
- **Menciona los productos:** Personalizar el mensaje con los nombres de los productos aumenta la relevancia.

### 3. Estrategias de Segmentación

No todos los pedidos COD son iguales. Considera segmentar tus mensajes:

- **Por monto del pedido:** Ofrece descuentos mayores para pedidos de alto valor.
- **Por tipo de cliente:** Clientes recurrentes pueden responder mejor a un descuento menor que nuevos clientes.
- **Por producto:** Productos con alto margen pueden soportar descuentos más agresivos.
- **Por hora del día:** Los mensajes enviados por la mañana (8-10 AM) tienen mejor tasa de apertura.

## Reglas de Broadcast y Límites de Mensajería

Es importante conocer los límites que WhatsApp Business API impone para evitar bloqueos o restricciones en tu cuenta.

### Límites de Conversación

WhatsApp clasifica los mensajes en conversaciones con diferentes tarifas y límites:

| Tipo de Conversación | Cuándo aplica | Costo aproximado |
|---------------------|---------------|------------------|
| **Marketing** | Mensajes proactivos con fines promocionales (nuestro caso) | Más alto |
| **Utilidad** | Confirmaciones de pedidos, notificaciones de envío | Medio |
| **Servicio** | Respuestas dentro de la ventana de 24 horas iniciada por el cliente | Más bajo |
| **Autenticación** | Códigos OTP y verificación de identidad | Variable |


> **Importante:** Si tu plantilla es de categoría Marketing y el cliente no ha interactuado en las últimas 24 horas, se abrirá una conversación de tipo Marketing. Asegúrate de tener saldo suficiente en tu método de pago de Meta para cubrir estas conversaciones.

### Límites por Tier

Los límites de mensajería se actualizan según el nivel (tier) de tu cuenta de WhatsApp:

- **Tier 1 (Inicial):** Hasta 1,000 conversaciones por día. Ideal para tiendas pequeñas.
- **Tier 2:** Hasta 10,000 conversaciones por día. Para tiendas en crecimiento.
- **Tier 3:** Hasta 100,000 conversaciones por día. Para negocios establecidos.
- **Tier 4:** Límite ilimitado. Para cuentas verificadas con alta calificación de calidad.


> Para subir de tier, mantén una calificación de calidad alta (verde) y un bajo número de bloqueos por parte de los usuarios. E-SMART360 te permite monitorear tu calificación desde el panel de control.

### Reglas de Frecuencia (Frequency Capping)

Meta aplica límites de frecuencia para evitar que los usuarios reciban demasiados mensajes promocionales. Esto se conoce como **Frequency Capping**:

- Un usuario no puede recibir más de cierto número de mensajes de marketing en un período.
- Si un usuario bloquea tu número o marca un mensaje como spam, tu calificación de calidad se reduce.
- Los mensajes con botones de "dejar de recibir" u "opt-out" ayudan a mantener una buena calificación.

## Causas Comunes de Rechazo de Plantillas y Cómo Evitarlas

Uno de los mayores desafíos al configurar este flujo es la aprobación de la plantilla de WhatsApp. Aquí están las causas más frecuentes de rechazo y cómo evitarlas:


### Plantilla marcada como 'Contenido promocional excesivo'

**Problema:** La plantilla usa demasiados signos de exclamación, mayúsculas o lenguaje exagerado como "¡OFERTA INCREÍBLE!!!".

**Solución:** Usa un tono profesional pero amigable. En lugar de "¡OFERTA IMPERDIBLE!", usa "Te ofrecemos un descuento especial en tu pedido". Evita más de un signo de exclamación por frase.

### Plantilla rechazada por 'Formato de URL incorrecto'

**Problema:** Incluir URLs acortadas (bit.ly, tinyurl, etc.) o URLs que redirigen a páginas no seguras (HTTP en lugar de HTTPS).

**Solución:** Usa siempre URLs completas y seguras (HTTPS). Si necesitas un enlace de pago, usa el dominio completo de tu tienda. Ejemplo correcto: `https://tutienda.com/checkout/pay/12345`.

### Plantilla rechazada por 'Variables incorrectas'

**Problema:** Las variables ({{product_list}}) se usan al inicio del mensaje, en el footer o en lugares no permitidos.

**Solución:** Las variables solo pueden ir en el cuerpo del mensaje. Evita ponerlas al inicio del texto. Además, asegúrate de que los nombres de las variables no contengan espacios ni caracteres especiales.

### Plantilla rechazada por 'Sin propósito claro'

**Problema:** La categoría seleccionada (Marketing vs Utilidad) no coincide con el contenido del mensaje.

**Solución:** Si tu mensaje invita a realizar una transacción (pagar un pedido), es claramente **Marketing**. Si solo informa del estado del pedido sin pedir ninguna acción, es **Utilidad**. No intentes clasificar una plantilla de marketing como utilidad para ahorrar costos, ya que será rechazada.

## Uso de Google Sheets para Personalización Avanzada

Si necesitas un nivel de personalización más allá de las variables estándar de WooCommerce, puedes combinar el Webhook Workflow con datos de Google Sheets.

### Flujo Avanzado: Códigos de Descuento Únicos desde Google Sheets

1. **Prepara una hoja de cálculo** en Google Sheets con códigos de descuento pre-generados.
2. **Conecta Google Sheets a E-SMART360** usando la integración nativa.
3. **Configura un disparador** que, al recibir un pedido COD, busque el siguiente código disponible en la hoja.
4. **Asigna ese código** como valor de la variable `{{discount_code}}` en lugar de un valor estático.
5. **Marca el código como usado** en la hoja para evitar reutilización.


> La integración con Google Sheets permite automatizaciones mucho más sofisticadas. Por ejemplo, puedes segmentar clientes por ciudad y ofrecer descuentos locales, o ajustar el porcentaje de descuento según el historial de compras del cliente.

## Integración con WhatsApp Flows para Pagos Dentro del Chat

Una funcionalidad avanzada disponible en E-SMART360 es **WhatsApp Flows**, que permite crear formularios interactivos dentro del chat de WhatsApp. Puedes combinar esta funcionalidad con tu flujo de conversión COD a prepago:

1. En el mensaje de WhatsApp, en lugar de un botón de respuesta rápida, usa un botón **CTA URL** que abra un formulario de pago.
2. **WhatsApp Flows** permite al cliente:
   - Seleccionar método de pago (tarjeta, transferencia, PayPal).
   - Ingresar datos de facturación.
   - Aplicar el código de descuento.
   - Confirmar el pago sin salir de WhatsApp.


### Crear un Flow en E-SMART360

Ve a Bot Manager > WhatsApp Flows. Crea un nuevo Flow con los campos necesarios: nombre, correo, método de pago, y un campo oculto para el código de descuento.

### Asociar el Flow a la plantilla

En la plantilla de mensaje, configura un botón CTA que abra el Flow. El botón puede decir "Pagar Ahora" y abrir el formulario directamente en WhatsApp.

### Configurar el webhook del Flow

Cuando el cliente complete el Flow, E-SMART360 puede enviar los datos a un webhook externo. Configura un callback que actualice el pedido en WooCommerce como prepagado y registre el pago.


> Esta integración avanzada permite una experiencia completamente fluida: el cliente recibe la oferta, hace clic, llena el formulario de pago y completa la transacción, todo dentro de WhatsApp, sin abrir páginas web externas.

## Gestión de Reportes y Monitoreo

Una vez que el flujo esté operativo, es importante monitorear su rendimiento:

### Cómo Leer el Workflow Report

El reporte de ejecución del workflow (accesible desde **Workflow Report**) muestra:

| Indicador | Qué significa |
|-----------|---------------|
| **Total de ejecuciones** | Número total de pedidos que activaron el webhook |
| **Ejecuciones exitosas** | Mensajes que se enviaron correctamente |
| **Ejecuciones fallidas** | Mensajes que no pudieron enviarse (con código de error) |
| **Tasa de conversión** | Porcentaje de clientes que hicieron clic en "Pagar Ahora" vs los que recibieron el mensaje |
| **Tasa de cancelación** | Porcentaje de clientes que cancelaron desde el mensaje |

### Configuración de Alertas

Puedes configurar notificaciones para recibir alertas cuando:

- La tasa de fallos supere el 10%.
- Una plantilla sea rechazada o desaprobada.
- El workflow no se ejecute durante más de 24 horas (posible problema con WooCommerce).
- La calificación de calidad de WhatsApp baje de amarillo a rojo.

## Próximos Pasos y Lecturas Relacionadas

Una vez que hayas configurado este flujo, puedes explorar otras automatizaciones complementarias para potenciar tu tienda:



### Recuperación de Carritos Abandonados

Configura un Webhook Workflow para enviar recordatorios a clientes que agregaron productos pero no completaron la compra. Puedes combinar esta automatización con la de COD para una estrategia completa de recuperación de ventas.

### Notificaciones de Estado de Pedido

Automatiza el envío de mensajes cuando el pedido cambie de estado: procesando, enviado, entregado. Esta es una de las automatizaciones mejor valoradas por los clientes finales.

### Verificación de Pedidos COD con Confirmación

Implementa un flujo de doble confirmación para pedidos COD que pregunte al cliente si realmente realizó el pedido. Esto reduce las entregas fallidas hasta un 40% y los pedidos fraudulentos.

## Conclusión

La conversión de pedidos COD a prepagados mediante Webhook Workflow es una de las automatizaciones más rentables que puedes implementar en tu tienda WooCommerce. No solo reduces el riesgo de fraude y cancelaciones, sino que mejoras la experiencia del cliente al ofrecerle incentivos personalizados directamente en WhatsApp, el canal de comunicación más utilizado del mundo.

E-SMART360 facilita este proceso con una interfaz visual intuitiva que no requiere conocimientos de programación. En cuestión de minutos puedes tener operativo un flujo que antes requería desarrollo personalizado, integraciones complejas y múltiples herramientas.

### Resumen de Beneficios

| Métrica | Antes de E-SMART360 | Después de E-SMART360 |
|---------|---------------------|-----------------------|
| Tasa de conversión COD a prepago | 0% (sin automatización) | 25-40% |
| Tiempo de configuración | 2-3 días (programación manual) | 20-30 minutos |
| Fraude en pedidos COD | Alto (sin verificación) | Reducido significativamente |
| Satisfacción del cliente | Media (sin seguimiento) | Alta (comunicación automatizada) |
| Costo operativo | Alto (intervención manual) | Mínimo (completamente automatizado) |

### ¿Qué Sigue?

1. **Configura este flujo** siguiendo los pasos de esta guía.
2. **Monitorea los resultados** durante la primera semana.
3. **Ajusta el mensaje y el descuento** según la tasa de respuesta.
4. **Expande a otros flujos** como recuperación de carritos o notificaciones.


> **¿Listo para implementarlo?** Inicia sesión en E-SMART360, dirígete a Webhook Workflow y comienza tu primera automatización. Si tienes preguntas o necesitas ayuda personalizada, revisa nuestra base de conocimiento o contacta a nuestro equipo de soporte técnico. ¡Estamos aquí para ayudarte a transformar tu negocio!
