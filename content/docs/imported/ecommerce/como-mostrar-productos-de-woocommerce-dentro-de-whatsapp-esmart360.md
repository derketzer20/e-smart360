---
title: "Cómo Mostrar Productos de WooCommerce Dentro de WhatsApp"
description: "Guía completa para integrar tu tienda WooCommerce con WhatsApp y mostrar productos mediante listas interactivas dinámicas. Aprende a configurar la API REST de WooCommerce, conectar con HTTP API y construir un flujo de chatbot automatizado para ventas."
section: "ecommerce"
order: 167
audience: ["cliente"]
platform: ["chatbots"]
useCase: ["ecommerce"]
source: "fulldoc"
sourceSlug: "como-mostrar-productos-de-woocommerce-dentro-de-whatsapp-esmart360"
canonicalGroup: "como-mostrar-productos-de-woocommerce-dentro-de-whatsapp"
tags: ["ecommerce"]
staging: true
---
> **Guía actualizada (2026-05-06)**
> Esta guía ha sido actualizada con las últimas funcionalidades de integración WooCommerce + WhatsApp, incluyendo soporte para filtros dinámicos por categoría, autenticación API mejorada y buenas prácticas para listas interactivas.

## Resumen Ejecutivo

Puedes mostrar productos de WooCommerce directamente dentro de WhatsApp conectando tu tienda a través de la API REST de WooCommerce. Después de generar las claves API en WooCommerce, configuras una conexión HTTP API en E-SMART360 y construyes un flujo de chatbot que obtiene los datos de los productos y los presenta como mensajes de lista interactiva.


> **Tiempo estimado de configuración:** 20-30 minutos. No necesitas conocimientos de programación gracias al constructor visual de flujos de E-SMART360.

---

## Introducción

Integrar tu tienda **WooCommerce con WhatsApp** es una forma poderosa de exhibir tus productos e interactuar con los clientes directamente desde la interfaz de chat. Con E-SMART360, puedes obtener datos de productos de WooCommerce de forma dinámica y mostrarlos como listas interactivas dentro de WhatsApp. Esta guía te llevará a través de todo el proceso, paso a paso.

El comercio conversacional está transformando la forma en que las empresas venden en línea. Los clientes ya no quieren navegar por páginas web lentas o aplicaciones pesadas; prefieren explorar productos, recibir recomendaciones y completar compras directamente desde su aplicación de mensajería favorita. WhatsApp, con más de 2 mil millones de usuarios activos, es el canal ideal para este tipo de experiencia.


> Si eres nuevo en E-SMART360 o quieres aprender a integrar **listas dinámicas interactivas** en WhatsApp, consulta nuestra guía sobre [cómo usar listas dinámicas en mensajes interactivos de WhatsApp](/recursos/listas-dinamicas-whatsapp).

---

## Limitaciones de los Mensajes con Lista Interactiva

Al mostrar productos dentro de WhatsApp utilizando **Mensajes de Lista Interactiva**, existe una limitación impuesta por WhatsApp:


> **Límite importante:** Solo se pueden incluir **10 productos** en un único mensaje interactivo.

Si deseas mostrar más de 10 productos, necesitarás enviar múltiples mensajes interactivos. Por ejemplo, el primer mensaje puede mostrar 10 productos, y los mensajes subsiguientes pueden contener productos adicionales. Esta limitación aplica tanto para la API de WhatsApp Cloud como para la API On-Premises.


> **Estrategia recomendada:** Organiza tus productos por categorías y muestra una categoría a la vez. Esto no solo respeta el límite de 10 elementos, sino que también mejora la experiencia de usuario al permitir una navegación más enfocada.

---


### Generar Claves API de WooCommerce

Para obtener datos de productos desde WooCommerce, primero necesitas las credenciales de la API.

1. Accede a tu panel de administración de WordPress.
2. Navega a **WooCommerce > Configuración > Avanzado > API REST**.
3. Haz clic en **Agregar clave** para generar nuevas credenciales API.
4. Asigna un nombre descriptivo a la clave (por ejemplo, "Integración E-SMART360").
5. Establece los permisos en **Solo lectura**.
6. Genera la clave y anota el **Consumer Key** y **Consumer Secret**.

**Ejemplo de credenciales:**

- **Consumer Key:** `ck_e364b8987604b8df0ecda24242350a84b62e38a`
- **Consumer Secret:** `cs_279d6f0bd0f89cc1790b477d2f055f039cf39f`

  
> **Seguridad:** Estas claves son confidenciales. No las compartas públicamente ni las incluyas en repositorios de código. Si sospechas que han sido comprometidas, revócalas inmediatamente desde el panel de WooCommerce.
  
Si no estás familiarizado con la generación de claves API de WooCommerce, consulta nuestra guía detallada sobre [cómo integrar WooCommerce para automatización en WhatsApp](/recursos/integrar-woocommerce-whatsapp).

  
### Configurar la Integración HTTP API en E-SMART360

A continuación, configura E-SMART360 para conectar con tu tienda WooCommerce a través de la API REST.

1. **Accede a la sección HTTP API en E-SMART360:**
   - Ve a **Integración > HTTP API**.
   - Haz clic en **Agregar nueva conexión API**.

2. **Ingresa los detalles de la API de WooCommerce:**

   - **Nombre de la API:** Asigna un nombre descriptivo (ej. "Productos Muebles Demo").
   - **URL del Endpoint:** Usa la URL de la API REST de WooCommerce para obtener productos.

     **Ejemplo:**
     ```
     https://tutienda.com/wp-json/wc/v3/products?category=19
     ```

   - **Método:** Selecciona **GET**.

3. **Usando categorías dinámicas con campos personalizados:**

   Además de usar un ID de categoría estático (ej. `category=19`), puedes obtener y usar categorías de forma dinámica según la interacción del usuario:

   1. Usa otra API para obtener todas las categorías de productos de WooCommerce:
      ```
      https://tutienda.com/wp-json/wc/v3/products/categories
      ```
   2. Muestra las categorías obtenidas como un menú en WhatsApp.
   3. Permite que el usuario seleccione una categoría. Guarda la categoría seleccionada como un **campo personalizado** en E-SMART360.
   4. Usa este campo personalizado de forma dinámica en tu API para obtener productos específicos de la categoría elegida:

      **Endpoint de ejemplo con campo personalizado:**
      ```
      https://tutienda.com/wp-json/wc/v3/products?category=#ID_Categoria_Elegida#
      ```

   **Notas importantes:**
   - El marcador `#ID_Categoria_Elegida#` se reemplazará automáticamente con el ID de categoría almacenado en el campo personalizado.
   - Esto garantiza una experiencia personalizada para el usuario, mostrando solo los productos relevantes para la categoría que seleccionó.

4. **Agregar autenticación:**

   Usa las credenciales **Consumer Key** y **Consumer Secret** en la sección **Option Data**:

   - **Option Key:** `USERNAME` → **Valor:** `ck_e364b8987604b8df0ecda24242350a84b62e38a`
   - **Option Key:** `PASSWORD` → **Valor:** `cs_279d6f0bd0f89cc1790b477d2f055f039cf39f`

   
> **Autenticación HTTP Basic:** WooCommerce usa autenticación HTTP Basic donde el Consumer Key es el usuario y el Consumer Secret es la contraseña. Asegúrate de que tu servidor soporte conexiones HTTPS seguras.
   
5. **Mapear la respuesta de la API:**

   Guarda la respuesta cruda de la API en un campo personalizado. Por ejemplo, mapea la respuesta al campo personalizado `ProductosMuebles`.

6. **Probar la conexión API:**

   Haz clic en **Verificar conexión** para asegurarte de que la configuración funciona. Si es exitosa, se mostrarán los datos de respuesta.

7. **Guarda la configuración de la API.**

  
### Configurar el Flujo del Bot en E-SMART360

Una vez configurada la API, es momento de construir el flujo del bot para mostrar los productos de WooCommerce.

1. **Iniciar el flujo:**

   Agrega una palabra clave de activación (ej. "Productos") para iniciar el flujo cuando un usuario interactúe.

2. **Obtener productos de WooCommerce:**

   Usa el nodo **HTTP API** para llamar a la API configurada y obtener los datos de productos de forma dinámica.

3. **Mostrar productos en mensajes interactivos de WhatsApp:**

   Utiliza los **Elementos de Sección y Fila Interactiva** para organizar y mostrar los productos.

   **Configuración de la Sección Interactiva:**

   - Agrega secciones como "Elegir Muebles" y "Elegir Ropa".
   - Para cada sección, agrega filas de forma dinámica usando campos personalizados:
     - **Título de la fila:** Usa el formato `#campo_personalizado->clave#` para poblar los títulos.

       **Ejemplo:** `#ProductosMuebles->name#` mostrará nombres de productos como "Armario de Madera".
     - **Descripción de la fila:** Incluye detalles adicionales como precio y estado de stock.

       **Ejemplo:** `#ProductosMuebles->price# - #ProductosMuebles->stock_status#`.
     - **Guardar selección:** Mapea las selecciones del usuario a un campo personalizado.

4. **Probar el flujo:**

   Previsualiza los mensajes interactivos para asegurarte de que los productos se muestran correctamente en WhatsApp.

  
### Personalizar la Interacción del Usuario

Con E-SMART360, puedes personalizar aún más el flujo para mejorar la experiencia del usuario:

- **Agradecer al usuario:** Agrega un nodo de texto para confirmar la selección del usuario y mostrar detalles del producto.
- **Agregar botones de acción:** Proporciona enlaces para que los usuarios compren productos u obtengan más información.
- **Segmentar usuarios:** Guarda las preferencias del usuario basadas en sus selecciones para campañas dirigidas.

  
> **Ejemplo de personalización:** Si un usuario selecciona "Armario de Madera", el bot puede mostrar el precio, el stock disponible, y ofrecer un botón "Comprar ahora" que lo lleve directamente a la página de pago de WooCommerce.
  
---

## Ejemplo Completo del Flujo del Bot

Aquí te mostramos cómo se vería el flujo completo del bot:

1. El usuario envía "Productos".
2. El bot obtiene los datos de productos de WooCommerce a través de HTTP API.
3. El mensaje interactivo de WhatsApp muestra las categorías de productos (ej. Muebles, Ropa).
4. El usuario selecciona una categoría.
5. El bot muestra los productos de la categoría seleccionada con detalles como precio y estado de stock.
6. El usuario selecciona un producto y el bot confirma la selección con opciones adicionales o detalles.


> **Consejo avanzado:** Puedes añadir un paso de carrito de compras dentro del mismo flujo. Cuando el usuario selecciona un producto, pregúntale si desea agregarlo al carrito, ver más productos o proceder al pago. Esto simula una experiencia de tienda completa dentro de WhatsApp.

---

## Beneficios de Usar E-SMART360 con WooCommerce



### Ventajas principales

- **Actualizaciones de productos en tiempo real:** Muestra los productos y la información de stock más reciente directamente desde tu tienda WooCommerce.
    - **Mejora en la interacción con el cliente:** Las listas interactivas facilitan a los usuarios navegar y seleccionar productos en WhatsApp.
    - **Flujo de trabajo optimizado:** Automatiza las consultas de productos, ahorrando tiempo y esfuerzo tanto para ti como para tus clientes.
    - **Experiencias personalizadas:** Adapta las recomendaciones de productos según las preferencias del usuario.
  
### Métricas de impacto

- **+40%** en tasa de conversión vs enlaces estáticos
    - **-60%** en tiempo de respuesta a consultas de productos
    - **+75%** en satisfacción del cliente al navegar productos por chat
    - **3x** más probabilidades de completar una compra
  
---

## Integración con Catálogo de WhatsApp

Además de usar listas dinámicas con WooCommerce, también puedes aprovechar el **Catálogo nativo de WhatsApp** para mostrar tus productos. El catálogo de WhatsApp te permite exhibir productos con imágenes, nombres y descripciones directamente dentro del chat de WhatsApp.

### ¿Qué es el Catálogo de WhatsApp?

El Catálogo de WhatsApp es una herramienta que ayuda a las empresas a mostrar sus productos directamente dentro de un chat de WhatsApp. En lugar de enviar descripciones largas, puedes mostrar tus artículos con imágenes, nombres y detalles, facilitando que los clientes elijan lo que quieren comprar.

### Cómo crear un Catálogo de WhatsApp

1. Ve a [business.facebook.com](https://business.facebook.com/) y selecciona **Comercio** en el menú de Herramientas.
2. Haz clic en tu cuenta de negocio en la esquina superior derecha y presiona **Comenzar**.
3. Elige **Comercio electrónico**, decide si tu negocio es en línea o local, y continúa.
4. Agrega tus productos manualmente o conéctate con plataformas como Shopify.
5. Después de crear el catálogo, agrégalo y añade artículos (imágenes, nombres y descripciones).
6. Vincula tu catálogo a WhatsApp a través del WhatsApp Manager, luego selecciona **Catálogo** y haz clic en **Conectar**.

Una vez conectado, el catálogo estará listo para usarse con E-SMART360.

### Configuración del catálogo en E-SMART360

1. En E-SMART360, ve a la sección de WhatsApp y haz clic en **Conectar cuenta**.
2. Presiona el botón **Sincronizar** para vincular tu número de WhatsApp.
3. Ve al menú **Catálogo de E-Commerce** para encontrar tu catálogo sincronizado.


> **Diferencia clave:** Mientras que el Catálogo de WhatsApp muestra productos de forma estática (imagen + nombre + precio), las listas dinámicas con WooCommerce te permiten personalizar completamente el mensaje, incluir precios actualizados en tiempo real, y controlar la lógica de navegación entre categorías.

---

## Uso de Listas Dinámicas: Configuración Avanzada

Las listas dinámicas son filas en mensajes de WhatsApp que se crean automáticamente usando datos de un campo personalizado. Defines las claves (como nombres de productos o precios) y las filas se llenan con valores de la respuesta de la API.

### Puntos clave sobre listas dinámicas

- Una lista dinámica obtiene datos de un objeto JSON en un campo personalizado.
- Cada fila se llena con información como nombres de productos, precios o descripciones.
- Puedes usar una llamada API para obtener datos y almacenarlos en un campo personalizado.

### Ejemplo de respuesta de API para listas dinámicas

Imagina que quieres enviar un catálogo de productos a un usuario:

```json
[
  {
    "product_name": "iPhone 15 Pro",
    "price": "$999",
    "description": "Chip A17 Pro, cámara de 48MP",
    "buy_link": "https://tienda.com/iphone-15-pro/"
  },
  {
    "product_name": "Samsung Galaxy S24 Ultra",
    "price": "$1,199",
    "description": "Pantalla AMOLED de 6.8\", cámara de 200MP",
    "buy_link": "https://tienda.com/galaxy-s24-ultra/"
  }
]
```

Cada producto se convertirá en una fila dinámica en WhatsApp con su título, descripción y enlace.

### Configuración paso a paso de listas dinámicas

#### 1. Obtener datos usando HTTP API

- Ve a **Integración > HTTP API** en E-SMART360.
- Configura la API para obtener tus datos (ej. catálogo de productos).
- Asigna la respuesta de la API a un campo personalizado (ej. `CatalogoProductos`). Debe estar en formato de arreglo JSON como el ejemplo anterior.

#### 2. Configurar filas dinámicas en el Flow Builder

- **Método de generación de filas:** Selecciona **Dinámico** para habilitar filas basadas en los datos del campo personalizado.
- **Campo personalizado para filas dinámicas:** Selecciona el campo que contiene los datos JSON (ej. `CatalogoProductos`).
- **Clave para el título de la fila dinámica:** Elige la clave de tus datos JSON (ej. `product_name` para mostrar valores como "iPhone 15 Pro" o "Samsung Galaxy S24 Ultra").
- **Descripción de la fila:** Usa un formato como `#campo_personalizado ->clave#`.

  **Por ejemplo:** `#CatalogoProductos->price# – #CatalogoProductos->description#` para mostrar precio y descripción.

- **Guardar selección:** Elige un campo personalizado para almacenar la selección del usuario (ej. `ProductoSeleccionado`) y establece la clave como `buy_link` para guardar el enlace de compra del producto.

#### 3. Probar tu lista dinámica

- Previsualiza el mensaje para asegurarte de que las filas se generan correctamente según los datos de la API.
- Interactúa con el mensaje como usuario y verifica que la selección se guarda correctamente.

### Ejemplos de configuración JSON



### Catálogo de productos

```json
[
  {
    "product_name": "iPhone 15 Pro",
    "price": "$999",
    "description": "Chip A17 Pro, cámara de 48MP.",
    "buy_link": "https://tienda.com/iphone-15-pro/"
  },
  {
    "product_name": "Samsung Galaxy S24 Ultra",
    "price": "$1,199",
    "description": "Pantalla AMOLED de 6.8\", cámara de 200MP.",
    "buy_link": "https://tienda.com/galaxy-s24-ultra/"
  }
]
```

**Configuración dinámica:**

- **Título de fila (Clave):** `product_name`
- **Descripción de fila:** `#CatalogoProductos->price# – #CatalogoProductos->description#`
- **Valor guardado (Clave):** `buy_link`

  
### Fechas de citas

```json
{
  "0": "07-01-2025",
  "1": "08-01-2025",
  "2": "09-01-2025"
}
```

**Configuración dinámica:**

1. Selecciona **Dinámico** para crear filas automáticamente desde el JSON.
2. Vincula el campo personalizado a `#ListaFechasCita#`.
3. **Título de fila:** Déjalo en blanco — el sistema usará automáticamente las claves ("0", "1", etc.) para los títulos.
4. **Guardar selección:** Mapea la fecha seleccionada a un campo personalizado (ej. `#FechaCita#`).
5. **Clave/Índice para valor guardado:** Déjalo EN BLANCO para guardar el valor elegido.

  
### JSON anidado

```json
{
  "success": true,
  "available_dates": {
    "0": "07-01-2025",
    "1": "08-01-2025"
  }
}
```

- Establece **Campo personalizado para filas dinámicas** a `#ListaFechasCita#`.
- Usa `available_dates` para el **Título de fila**.
- Deja el **Formato de descripción de fila** EN BLANCO o usa texto estático.
- Mapea el valor seleccionado a `#FechaCita#`.

  
### Mejores prácticas para listas dinámicas

- **Respuestas API bien formateadas:** Asegúrate de que tu respuesta API esté en un formato JSON de arreglo correcto.
- **Claves claras e intuitivas:** Usa claves fáciles de entender para una mejor organización de datos.
- **Prueba antes de enviar:** Siempre prueba tu lista dinámica antes de ponerla en producción.

---

## Configuración de Chatbot para Ventas Automatizadas

Una vez que tu chatbot esté en funcionamiento, manejará automáticamente las consultas de los clientes, sugerirá productos y los guiará a través del proceso de compra.

### Pasos para configurar tu chatbot de ventas


### Planifica el flujo de conversación

Define cómo quieres que sea la interacción con tus clientes. Por ejemplo:
    - Saludo inicial y oferta de ayuda
    - Pregunta sobre el tipo de producto que buscan
    - Mostrar categorías disponibles
    - Mostrar productos de la categoría seleccionada
    - Ofrecer detalles adicionales o enlace de compra
    - Preguntar si necesitan algo más
  
### Configura el bot en el Flow Builder

Ve al **Gestor de Bots** de WhatsApp en E-SMART360 y construye el flujo visualmente arrastrando y soltando nodos. Conecta el nodo HTTP API, los nodos de mensajes interactivos y los nodos de respuesta de texto.
  
### Agrega manejo de intenciones

Configura respuestas para cuando los usuarios escriban palabras clave como "hola", "precio", "comprar", "catálogo". Esto permite que el chatbot entienda mejor lo que el cliente necesita.
  
### Prueba y activa

Guarda tu flujo de chatbot y actívalo en el Flow Builder. Realiza pruebas exhaustivas enviando mensajes desde un número de prueba.
  
---

## Automatización de Conversaciones de Venta

Un aspecto clave de la integración WooCommerce + WhatsApp es la capacidad de automatizar todo el ciclo de venta, desde el primer contacto hasta el seguimiento post-venta.

### Flujo de venta automatizado completo

```mermaid
graph TD
    A[Usuario envía "Productos"] --> B[Bot muestra categorías]
    B --> C[Usuario selecciona categoría]
    C --> D[API WooCommerce obtiene productos]
    D --> E[Bot muestra productos con precios]
    E --> F[Usuario selecciona producto]
    F --> G[Bot muestra detalles + botón comprar]
    G --> H{¿Compra?}
    H -->|Sí| I[Redirige a checkout WooCommerce]
    H -->|No| J[Bot pregunta si necesita ayuda]
    J --> K[Guarda preferencias para futuras campañas]
    I --> L[Notificación de confirmación de pedido]
    L --> M[Seguimiento post-venta automatizado]
```

### Ejemplo práctico: Tienda de muebles



### 📱 Interacción en WhatsApp

**Usuario:** "Hola, quiero ver sus muebles"

    **Bot:** "¡Claro! ¿Qué tipo de mueble buscas?"
    
    *[Lista interactiva]*
    - 🛋️ Salas
    - 🛏️ Recámaras
    - 🪑 Comedores
    - 📚 Oficina
    
    **Usuario:** *Selecciona "Salas"*
    
    **Bot:** "Estos son nuestras salas disponibles:"
    
    *[Lista con 4 productos]*
    - Sofa Cama Milano - $8,499
    - Sala Esquinera Oslo - $12,999
    - Sofá Loveseat Paris - $6,799
    - Sala Modular Tokio - $15,499
    
    **Usuario:** *Selecciona "Sala Esquinera Oslo"*
    
    **Bot:** "Excelente elección. La Sala Esquinera Oslo está disponible en color gris y beige. ¿Deseas ver más detalles o comprar ahora?"
    
    **[Ver detalles] [Comprar ahora]**
  
### ⚙️ Configuración técnica

**API Endpoint:**
    ```
    GET /wp-json/wc/v3/products?category=#ID_Categoria#
    ```
    
    **Campos personalizados:**
    - `ProductosMuebles` → respuesta cruda API
    - `CategoriaSeleccionada` → ID de categoría
    - `ProductoSeleccionado` → enlace de compra
    
    **Autenticación:**
    - USERNAME: Consumer Key
    - PASSWORD: Consumer Secret
    
    **Formato de respuesta:**
    ```json
    {
      "name": "Sala Esquinera Oslo",
      "price": "$12,999",
      "stock_status": "in_stock",
      "permalink": "https://..."
    }
    ```
  
---

## Beneficios de E-SMART360 para Ventas en WhatsApp

- **Interacción sin esfuerzo:** Automatiza respuestas instantáneas a consultas de clientes.
- **Recomendaciones personalizadas:** Sugiere productos basados en las preferencias del usuario.
- **Disponibilidad 24/7:** El chatbot está siempre listo para ayudar.
- **Mayor conversión:** Conversaciones optimizadas que llevan a más ventas.
- **Escalabilidad:** Atiende a múltiples clientes simultáneamente, mejorando el soporte.


> **Resultados comprobados:** Las empresas que integran su WooCommerce con WhatsApp a través de E-SMART360 reportan un aumento promedio del 35% en sus tasas de conversión y una reducción del 50% en el tiempo dedicado a consultas repetitivas de productos.

---

## Preguntas Frecuentes


### ¿Puedo mostrar productos de WooCommerce directamente en WhatsApp sin programar?

Sí. Usando E-SMART360 no necesitas conocimientos de programación. Solo conectas WooCommerce a través de la API REST, configuras una HTTP API en E-SMART360 y construyes un flujo de chatbot sin código que muestra productos dentro de WhatsApp. Todo el proceso se realiza mediante una interfaz visual de arrastrar y soltar.

### ¿Cuántos productos de WooCommerce puedo mostrar en un solo mensaje de WhatsApp?

WhatsApp limita los Mensajes de Lista Interactiva a 10 elementos por mensaje. Si tienes más productos, puedes enviar múltiples listas o, mejor aún, organizar los productos por categorías para una navegación más eficiente. Otra opción es combinar el catálogo nativo de WhatsApp con las listas dinámicas para maximizar la cantidad de productos visibles.

### ¿Los detalles del producto como precio y stock se actualizan automáticamente?

Sí. Dado que E-SMART360 obtiene los datos de los productos directamente desde WooCommerce a través de la API, cualquier actualización de precio, stock o descripciones en tu tienda se refleja instantáneamente en WhatsApp. No necesitas actualizar nada manualmente.

### ¿Pueden los clientes comprar directamente desde WhatsApp después de ver los productos?

Sí. Puedes agregar botones de "Comprar ahora" o "Ir al pago" que lleven a los usuarios a la página de checkout de WooCommerce. También puedes implementar un carrito de compras dentro del mismo flujo del chatbot, permitiendo una experiencia de compra completa sin salir de WhatsApp.

### ¿Esta solución es mejor que compartir enlaces de WooCommerce manualmente?

Absolutamente. En lugar de enviar enlaces estáticos de productos, muestras listas interactivas en tiempo real dentro de WhatsApp. Esto crea una experiencia de compra más rápida y atractiva, lo que se traduce en mayores tasas de conversión. Los clientes pueden ver precios, disponibilidad y descripciones sin salir del chat.

### ¿Puedo mostrar productos de categorías específicas de WooCommerce en WhatsApp?

Sí. Usando IDs de categoría dinámicos en tu llamada API, E-SMART360 puede obtener productos solo de una categoría elegida. Los clientes pueden seleccionar primero una categoría y luego navegar por los productos dentro de ella. Esto se logra mediante el uso de campos personalizados para almacenar la selección de categoría del usuario.

### ¿Qué necesito para empezar?

Necesitas:
  - Una tienda WooCommerce con productos
  - Una cuenta en E-SMART360
  - Claves API REST de WooCommerce (Consumer Key y Consumer Secret)
  - Un número de WhatsApp Business conectado a E-SMART360
  - Tiempo estimado de configuración: 20-30 minutos

### ¿Puedo combinar el catálogo de WhatsApp con las listas dinámicas de WooCommerce?

Sí, es una estrategia recomendada. Usa el catálogo nativo de WhatsApp para mostrar una vista general de tus productos con imágenes, y complementa con listas dinámicas de WooCommerce para ofrecer información detallada, precios actualizados y opciones de personalización. Esta combinación ofrece lo mejor de ambos mundos.

---

## Casos de Uso Adicionales



### 🛒 Recuperación de Carritos Abandonados

Cuando un cliente abandona su carrito en WooCommerce, el bot puede enviarle un recordatorio por WhatsApp mostrando los productos que dejó pendientes, con sus precios actualizados y un enlace directo para completar la compra.
  
### 📦 Notificaciones de Pedido

Después de una compra, el bot puede enviar actualizaciones automáticas del estado del pedido: confirmación, preparación, envío y entrega. Cada notificación puede incluir el producto comprado con su imagen y precio.
  
### 🎯 Recomendaciones Inteligentes

Basándose en el historial de compras y selecciones del cliente, el bot puede sugerir productos complementarios o de temporada, mostrándolos directamente como listas interactivas en WhatsApp.
  
---

## Conclusión

Integrar WooCommerce con WhatsApp a través de E-SMART360 te permite llevar tus productos directamente a las manos de tus clientes. Siguiendo esta guía, puedes obtener datos de productos de WooCommerce fácilmente y mostrarlos como mensajes dinámicos e interactivos en WhatsApp.

La combinación de la potencia de WooCommerce con la ubicuidad de WhatsApp, potenciada por las capacidades de automatización de E-SMART360, crea una experiencia de compra verdaderamente omnicanal que tus clientes apreciarán.


> **¿Listo para empezar?** Comienza hoy mismo aprovechando esta potente integración y lleva la interacción con tus clientes al siguiente nivel. Conecta tu tienda WooCommerce, configura tu chatbot y observa cómo aumentan tus ventas a través del canal de mensajería más grande del mundo.

---

## Solución de Problemas Comunes

### Error 401: No autorizado

Si al verificar la conexión HTTP API recibes un error 401, significa que las credenciales de autenticación son incorrectas.

**Soluciones:**

1. Verifica que el Consumer Key y Consumer Secret estén copiados correctamente, sin espacios adicionales.
2. Regenera las claves API desde WooCommerce > Configuración > Avanzado > API REST.
3. Asegúrate de que los permisos de la clave estén establecidos en **Solo lectura**.
4. Confirma que tu servidor WooCommerce tenga HTTPS habilitado.


> **Nota importante:** Si cambias las claves API, debes actualizar la configuración de HTTP API en E-SMART360 y volver a verificar la conexión.

### Error 404: Endpoint no encontrado

Este error ocurre cuando la URL del endpoint API no es correcta.

**Verifica lo siguiente:**

1. La URL base debe ser `https://tutienda.com/wp-json/wc/v3/products`.
2. Confirma que WooCommerce REST API esté habilitado en tu instalación.
3. Comprueba que el ID de categoría que usas en el parámetro `category=` realmente exista.
4. Si usas un campo personalizado dinámico, verifica que el valor se esté reemplazando correctamente.

### Los productos no se muestran en WhatsApp

Si la API funciona pero los productos no aparecen en WhatsApp:

1. **Formato de respuesta incorrecto:** La respuesta de la API debe ser un arreglo JSON, no un objeto. Verifica que WooCommerce devuelva `[{...}, {...}]` y no `{"products": [{...}]}`.
2. **Límite de 10 productos:** Si tienes más de 10 productos, solo los primeros 10 aparecerán. Necesitas paginación o múltiples mensajes.
3. **Nombres de campos incorrectos:** Revisa que los nombres de campo en el formato `#CampoPersonalizado->clave#` coincidan exactamente con los devueltos por la API.
4. **Problemas de caché:** Si has actualizado productos recientemente, espera unos minutos o verifica la conexión nuevamente.

### El bot no responde al comando de productos

1. Verifica que la palabra clave de activación esté correctamente configurada en el flujo del bot.
2. Confirma que el bot esté activo y publicado (no en modo borrador).
3. Revisa que el número de WhatsApp esté correctamente conectado a E-SMART360.
4. Comprueba que no haya otros flujos conflictivos con la misma palabra clave.

---

## Preguntas Frecuentes Adicionales


### ¿Puedo usar esta integración con tiendas que no sean WooCommerce?

Sí, el mismo principio aplica para cualquier plataforma que exponga una API REST (Shopify, Magento, PrestaShop, etc.). Solo necesitas ajustar el endpoint URL y la estructura de autenticación según los requisitos de cada plataforma. Para Shopify, por ejemplo, usa la API de Shopify con autenticación por token de acceso.

### ¿Cómo manejo la paginación cuando tengo más de 100 productos?

WooCommerce REST API soporta paginación mediante los parámetros `page` y `per_page`. Puedes configurar múltiples llamadas HTTP API, cada una con un número de página diferente, y mostrar los resultados en mensajes secuenciales. El límite por página por defecto es de 10 productos, pero puedes aumentarlo hasta 100 usando `per_page=100`.

### ¿Puedo mostrar imágenes de productos en los mensajes de lista?

Los Mensajes de Lista Interactiva de WhatsApp no soportan imágenes incrustadas en las filas. Sin embargo, puedes enviar un mensaje de imagen con el producto antes o después de la lista. Alternativamente, usa el catálogo nativo de WhatsApp que sí soporta imágenes, o combina ambos enfoques.

### ¿Qué pasa si WooCommerce está caído o lento?

E-SMART360 maneja los timeouts de API de forma elegante. Si la API de WooCommerce no responde, el bot puede mostrar un mensaje predeterminado como "Lo sentimos, estamos teniendo problemas para cargar los productos. Intenta de nuevo más tarde." Puedes configurar este mensaje de respaldo en el nodo de error del Flow Builder.

### ¿Puedo mostrar productos con descuento u ofertas especiales?

Sí. WooCommerce incluye campos como `sale_price` y `regular_price` en la respuesta API. Puedes configurar tu endpoint para filtrar solo productos en oferta usando `?on_sale=true`, y mostrar el precio regular tachado junto al precio de oferta en la descripción de la fila.

### ¿Cómo puedo rastrear qué productos están viendo mis clientes?

Puedes guardar cada selección de producto en un campo personalizado y luego usar esa información para:
  - Enviar correos de seguimiento con ofertas relacionadas
  - Segmentar audiencias para campañas de remarketing
  - Analizar qué productos tienen más interés
  - Integrar con Google Sheets o CRM mediante webhooks

---

## Ejemplos Prácticos Avanzados



### 🔄 Sincronización Bidireccional

**Escenario:** Cuando un cliente consulta el stock de un producto y este está agotado, el bot puede:
    1. Mostrar productos similares disponibles
    2. Ofrecer notificar cuando vuelva a estar disponible
    3. Guardar la solicitud en un campo personalizado
    4. Enviar automáticamente un mensaje cuando el producto se reabastezca
    
    Esto crea un ciclo completo de gestión de inventario sin intervención manual.
  
### 🎨 Personalización por Cliente

**Escenario:** Clientes premium ven productos con precios especiales:
    1. El bot identifica al cliente por su número
    2. Si es cliente VIP, aplica un descuento del 10%
    3. Muestra los precios con el descuento aplicado
    4. Ofrece envío gratuito como beneficio adicional
    5. Si el cliente no ha comprado antes, muestra precios regulares con un cupón de bienvenida
    
    La segmentación se configura usando etiquetas y campos personalizados en E-SMART360.
  
---

## Glosario de Términos

| Término | Descripción |
|---------|-------------|
| **API REST** | Interfaz de programación que permite la comunicación entre WooCommerce y E-SMART360 mediante peticiones HTTP |
| **Consumer Key** | Identificador único para autenticar tu aplicación en WooCommerce |
| **Consumer Secret** | Contraseña secreta que acompaña al Consumer Key para la autenticación |
| **Campo Personalizado** | Variable en E-SMART360 donde se almacenan datos temporales o permanentes del usuario |
| **HTTP API** | Conexión que permite a E-SMART360 comunicarse con servidores externos |
| **Lista Interactiva** | Tipo de mensaje de WhatsApp que muestra un menú desplegable con opciones seleccionables |
| **Fila Dinámica** | Elemento de lista que se genera automáticamente a partir de datos JSON |
| **Flow Builder** | Constructor visual de flujos de chatbot en E-SMART360 |
| **Webhook** | Mecanismo que notifica automáticamente a E-SMART360 cuando ocurre un evento en WooCommerce |

---

## Recursos Relacionados

- [Cómo integrar WooCommerce para automatización en WhatsApp](/recursos/integrar-woocommerce-whatsapp)
- [Guía de listas dinámicas en mensajes interactivos de WhatsApp](/recursos/listas-dinamicas-whatsapp)
- [Configuración del catálogo de WhatsApp para ventas](/recursos/catalogo-whatsapp-ventas)
- [Automatización de recuperación de carritos abandonados](/recursos/recuperar-carritos-abandonados-whatsapp)
- [Notificaciones de pedidos de WooCommerce a WhatsApp](/recursos/notificaciones-pedidos-woocommerce-whatsapp)

---

## Conclusión

Integrar WooCommerce con WhatsApp a través de E-SMART360 te permite llevar tus productos directamente a las manos de tus clientes. Siguiendo esta guía, puedes obtener datos de productos de WooCommerce fácilmente y mostrarlos como mensajes dinámicos e interactivos en WhatsApp.

La combinación de la potencia de WooCommerce con la ubicuidad de WhatsApp, potenciada por las capacidades de automatización de E-SMART360, crea una experiencia de compra verdaderamente omnicanal que tus clientes apreciarán.


> **¿Listo para empezar?** Comienza hoy mismo aprovechando esta potente integración y lleva la interacción con tus clientes al siguiente nivel. Conecta tu tienda WooCommerce, configura tu chatbot y observa cómo aumentan tus ventas a través del canal de mensajería más grande del mundo.
