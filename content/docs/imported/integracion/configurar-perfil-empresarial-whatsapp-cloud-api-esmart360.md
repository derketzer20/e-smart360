---
title: "Configuración del Perfil Empresarial en WhatsApp Cloud API"
description: "Guía completa para cambiar y optimizar la foto de perfil, descripción, sitio web, dirección, correo electrónico y estado de tu cuenta de WhatsApp Cloud API desde el panel de E-SMART360. Aprende paso a paso cómo mantener un perfil profesional actualizado y cumple con las políticas de WhatsApp Business."
section: "integracion"
order: 183
audience: ["developer"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "configurar-perfil-empresarial-whatsapp-cloud-api-esmart360"
canonicalGroup: "configuracion-del-perfil-empresarial-en-whatsapp-cloud-api"
tags: ["integracion"]
staging: true
---
# Configuración del Perfil Empresarial en WhatsApp Cloud API

Mantener un perfil empresarial profesional y actualizado en WhatsApp Cloud API es esencial para generar confianza con tus clientes. A diferencia de WhatsApp común, la Cloud API no puede gestionarse desde la aplicación móvil, por lo que E-SMART360 ha implementado una funcionalidad completa dentro de su panel de control para que puedas administrar toda la información de tu perfil de negocio de manera sencilla.


> **Nota importante:** En una cuenta personal de WhatsApp puedes configurar el estado, dirección y otros datos desde la app. Con WhatsApp Cloud API, estos cambios deben realizarse a través del panel de administración, ya que la conexión es mediante la API oficial de Meta. E-SMART360 centraliza todas estas opciones para que no tengas que navegar entre múltiples interfaces.

## ¿Por Qué es Importante el Perfil Empresarial?

Tu perfil de WhatsApp Business es mucho más que una simple tarjeta de presentación digital. Es la primera impresión que muchos clientes potenciales tendrán de tu negocio. Un perfil bien configurado:

- **Genera confianza inmediata:** Los usuarios confían más en perfiles completos con foto, descripción y datos verificables.
- **Facilita el contacto directo:** Al incluir tu sitio web, email y dirección, los clientes pueden contactarte por múltiples canales sin salir de WhatsApp.
- **Aumenta la tasa de conversión:** Los perfiles completos tienen tasas de respuesta y conversión más altas porque el cliente siente que está hablando con una empresa legítima.
- **Cumple con las políticas de Meta:** WhatsApp exige que los negocios tengan información verificable. Un perfil incompleto puede generar restricciones en el envío de mensajes.
- **Mejora la calificación de calidad:** Meta evalúa la integridad de tu perfil como parte del sistema de calidad de la cuenta. Una calificación baja puede afectar los límites de mensajería.


> **Actualización importante (27 Mayo 2025)**
> E-SMART360 ha optimizado la sincronización del perfil empresarial. Ahora los cambios realizados desde el panel se reflejan en tiempo real en WhatsApp Manager, y viceversa. Ya no es necesario esperar minutos para ver los cambios aplicados.

## Acceder a la Configuración del Perfil desde E-SMART360

E-SMART360 te ofrece dos formas de gestionar tu perfil empresarial: directamente desde el panel de control y a través de WhatsApp Manager de Meta. La opción desde el panel es la más rápida y la recomendada para la mayoría de los usuarios.

### Paso a Paso Desde el Panel de E-SMART360

Para comenzar a personalizar la información de tu empresa en WhatsApp, sigue estos pasos:


### Accede a las cuentas conectadas

Desde el panel de control de E-SMART360, dirígete a la sección **WhatsApp | Cuentas Conectadas**. Allí verás un listado de todas las cuentas de WhatsApp Cloud API que has vinculado a la plataforma. Cada cuenta estará identificada por su número telefónico y el nombre del negocio asociado.

### Selecciona Configuración de Perfil

Junto a la cuenta de WhatsApp Cloud API que deseas modificar, haz clic en el botón **"Configuración de Perfil"** (Profile Settings). Se abrirá un formulario con todos los campos disponibles para editar. Este formulario carga la información actual de tu perfil para que puedas ver qué datos están configurados antes de modificarlos.

### Completa la información

El formulario te permite modificar los siguientes campos:

- **Estado (About):** Un texto breve de hasta 139 caracteres que aparece en el perfil de tu negocio. Es el espacio ideal para un mensaje promocional o una descripción rápida.
- **Dirección:** La ubicación física completa de tu empresa. Incluye calle, número, ciudad, estado y código postal si aplica.
- **Descripción:** Un párrafo descriptivo de hasta 512 caracteres sobre tu negocio, sus productos o servicios.
- **Correo electrónico:** El email de contacto principal para que los clientes puedan escribirte.
- **Sitio web:** La URL completa de tu página web corporativa, incluyendo https://
- **Vertical/Industria:** La categoría o rubro de tu negocio. Las opciones incluyen comercio electrónico, educación, salud, servicios financieros, entretenimiento, restaurantes, viajes, tecnología, entre otras.

### Guarda los cambios

Una vez que hayas ingresado o actualizado la información, haz clic en **Guardar**. El sistema validará automáticamente los datos y, si todo está correcto, los cambios se reflejarán inmediatamente en el perfil de WhatsApp de tu empresa. Cuando un cliente haga clic en tu perfil desde WhatsApp, podrá ver toda esta información de manera organizada.


> **Consejo:** Mantén tu estado (About) actualizado con promociones activas, horarios especiales o mensajes de temporada. Es un espacio breve pero de alto impacto visual. Combínalo con emojis estratégicos para captar la atención: 🎄 para Navidad, 🚚 para envíos gratis, 🔥 para ofertas especiales, etc.

### Validación Automática de la Información

Cuando guardes los cambios, E-SMART360 realiza una validación automática de los campos para asegurarse de que cumplan con los requisitos de WhatsApp Cloud API. Esto incluye:

- **Formato de URL:** El sitio web debe comenzar con http:// o https:// y tener una estructura de dominio válida.
- **Formato de email:** Debe cumplir con el estándar de direcciones de correo electrónico.
- **Longitud de descripción:** No debe exceder los 512 caracteres permitidos.
- **Longitud del estado:** Debe estar dentro del límite de 139 caracteres.
- **Campo vertical:** Debe coincidir con una de las industrias predefinidas por Meta.

Si algún campo no pasa la validación, el sistema te mostrará un mensaje de error específico indicando exactamente qué debes corregir. Esto evita que guardes información que luego sería rechazada por WhatsApp.

### Tabla Resumen de Campos del Perfil

| Campo | Descripción | Límite de Caracteres | ¿Obligatorio? |
|-------|-------------|---------------------|---------------|
| Nombre del negocio | Nombre comercial visible | 3-100 | Sí |
| About / Estado | Mensaje breve en el perfil | 139 | No |
| Descripción | Texto descriptivo del negocio | 512 | No |
| Sitio web | URL corporativa | 2048 | No |
| Correo electrónico | Email de contacto | 320 | No |
| Dirección | Ubicación física | 256 | No |
| Vertical / Industria | Categoría del negocio | — | No |
| Foto de perfil | Imagen representativa | 5 MB (archivo) | No |

## Personalización de Marca y Funcionalidad White Label

### Marca en la Sección About

Para los usuarios del plan gratuito de E-SMART360, la sección **About** del perfil incluirá una mención de la plataforma como parte del texto de estado. Esto se puede eliminar al suscribirte a cualquiera de nuestros planes premium.


> **Planes premium de E-SMART360:** Los planes pagos no solo eliminan la marca de la sección About, sino que también aumentan el límite de suscriptores y desbloquean funciones avanzadas como:

- **Respuestas con IA (AI Reply):** Automatiza respuestas inteligentes usando modelos de lenguaje avanzados que entienden el contexto de cada conversación.
- **Transmisiones y respuestas automáticas ilimitadas:** Envía campañas masivas sin restricciones de cantidad.
- **Workflows con Webhook ilimitados:** Conecta E-SMART360 con cualquier sistema externo para automatizar procesos complejos.
- **Cuentas de bot ilimitadas:** Crea todos los bots que necesites para WhatsApp, Facebook, Instagram y Telegram.
- **Campañas de secuencia ilimitadas:** Diseña flujos de mensajes automatizados con múltiples pasos.
- **Chat en vivo completo:** Gestión de conversaciones en tiempo real con asignación de agentes, etiquetas y estadísticas.

Consulta los planes disponibles en la sección de precios de E-SMART360 para más detalles.

### Configuración para Revendedores White Label

Si eres un usuario del programa White Label de E-SMART360, puedes personalizar completamente el texto de marca que aparece en la sección About de tus clientes. Esta es una herramienta poderosa para construir tu propia identidad de marca. Así es como se configura:



### Desde el Panel General

1. Ve a **Configuración** desde el panel de control de E-SMART360.
2. Selecciona la pestaña **General**.
3. Localiza el campo **"TEXTO DE COPYRIGHT EN ABOUT DE WHATSAPP"**.
4. Ingresa el texto de marca que deseas que aparezca (por ejemplo, "Impulsado por TuMarca").
5. Guarda los cambios con el botón correspondiente.
6. Este texto se aplicará automáticamente a todas las nuevas conexiones.

### Configuración por Paquete

Como revendedor, es posible que no quieras que tu marca aparezca en todos los paquetes. Desde la sección **Paquetes** en el panel de administración, puedes controlar esto de manera granular:

- **Por paquete específico:** Activa o desactiva la marca usando el interruptor **"Mostrar Marca"**.
- **Flexibilidad comercial:**
  - **Paquetes básicos o gratuitos:** Mantén tu marca visible, promocionando tu agencia.
  - **Paquetes premium:** Desactiva la marca para que el cliente final tenga un perfil 100% limpio.
  - **Planes intermedios:** Usa la ausencia de marca como argumento de venta para upsell.

> **Para revendedores White Label:** La personalización de marca en el About de WhatsApp es una herramienta estratégica de posicionamiento. Cada vez que uno de tus clientes se comunica con sus propios clientes, tu nombre está presente. Configúrala antes de invitar usuarios. Si ya tienes usuarios activos, los cambios aplican desde la próxima sincronización de perfil.

## Cómo Cambiar la Foto de Perfil desde WhatsApp Manager

Además de la configuración desde el panel de E-SMART360, también puedes realizar cambios directamente desde el WhatsApp Manager de Meta. Esta opción es especialmente útil si necesitas actualizar la foto de perfil o realizar ajustes avanzados.

### Guía Completa Paso a Paso


### Inicia sesión en WhatsApp Manager

Accede a tu cuenta de [WhatsApp Manager](https://business.facebook.com/wa/manage/home/) con las credenciales de tu negocio. Utiliza la cuenta de Facebook Business Manager que tienes vinculada a tu número de WhatsApp Business API. Si no tienes una cuenta de Business Manager, deberás crear una primero.

### Ve a Números de Teléfono

En el menú lateral izquierdo, navega a **Account tools** y luego selecciona **Phone numbers**. Esta sección contiene todos los números telefónicos asociados a tu cuenta. Aquí puedes ver el estado de cada número (conectado, pendiente, desconectado), el nombre de perfil asociado, la calificación de calidad y el nivel de mensajería.

### Selecciona el número a configurar

Busca el número telefónico específico que deseas actualizar en la lista. Si tienes múltiples números registrados, identifica el correcto por su número y nombre asociado. Haz clic en el icono de **Settings** (Configuración) que aparece junto al número seleccionado.

### Accede al perfil

Dentro del menú de configuración del número, haz clic en **Profile** (Perfil). Aquí encontrarás todas las opciones disponibles para editar la imagen y la información de tu empresa. Esta pantalla muestra un resumen visual previo de cómo se verá tu perfil para los clientes.

### Actualiza la foto de perfil

Haz clic en **Change Profile Picture** (Cambiar foto de perfil). Se abrirá un selector de archivos. Sube una imagen que cumpla con estos requisitos:

| Especificación | Requisito |
|----------------|-----------|
| Formato | JPG o PNG |
| Tamaño mínimo | 192 x 192 px |
| Tamaño recomendado | 640 x 640 px |
| Relación de aspecto | 1:1 (cuadrado) |
| Peso máximo | 5 MB |
| Contenido | Logo o imagen corporativa |


> **Recomendaciones para la foto de perfil:**
- Usa siempre el logo oficial de tu empresa, no una foto personal.
- El logo debe ser legible incluso reducido al tamaño de miniatura en los chats.
- Evita imágenes con exceso de texto que se vuelva ilegible al escalar.
- Mantén consistencia con los colores de tu marca.
- Si actualizas tu logo corporativo, cambia la foto de perfil inmediatamente.
- No uses imágenes con bordes blancos excesivos; aprovecha el espacio cuadrado completo.

### Actualiza la descripción del negocio

Edita el campo **Business Description**. Una buena descripción debe:

- Ser concisa pero informativa (máximo 512 caracteres).
- Incluir tu propuesta de valor única.
- Mencionar tus productos o servicios principales.
- Usar un tono profesional y cercano según tu marca.
- Estar en el idioma de tu mercado objetivo.

**Ejemplo:** *"Cafetería de especialidad con más de 10 años de experiencia. Ofrecemos granos recién tostados, métodos de preparación alternativos, catas guiadas y suscripciones mensuales. Envíos a todo el país en 24-48 horas. Visítanos en nuestras 3 sucursales o pide en línea."*

Guarda los cambios al finalizar.

### Agrega o actualiza el sitio web

Desplázate hasta **Website** e ingresa la URL completa de tu página corporativa. Si ya tienes una registrada, puedes editarla. Requisitos:

- Incluye el protocolo https://
- Asegúrate de que el dominio esté activo
- Usa tu dominio principal, no páginas internas
- Si tienes tienda online, usa la URL de tu tienda


> **Nota:** WhatsApp mostrará este enlace como botón clickeable en el perfil de tu negocio. Asegúrate de que sea una URL accesible públicamente. Si tu sitio está en mantenimiento, espera a que esté operativo para agregarlo.

### Edita información adicional

Completa los campos de dirección física y correo electrónico:

- **Address:** Dirección completa y verificable: calle, número, colonia, ciudad, estado y código postal. Útil si tienes locales físicos.
- **Email:** Correo corporativo (ej: contacto@tunegocio.com). Evita correos personales (@gmail.com, @yahoo.com) que restan profesionalismo.

Haz clic en **Save** en cada sección para aplicar los cambios.


> **Beneficio clave:** Al mantener todos estos datos actualizados, cualquier cliente que vea tu perfil desde WhatsApp tendrá acceso inmediato a tu ubicación, sitio web y datos de contacto. Esto acelera la decisión de compra y aumenta la credibilidad de tu negocio.

### Diferencias entre el Panel de E-SMART360 y WhatsApp Manager

| Aspecto | Panel E-SMART360 | WhatsApp Manager |
|---------|-----------------|------------------|
| Acceso | Dashboard E-SMART360 | Portal Meta Facebook |
| Foto de perfil | Próximamente | Disponible |
| Estado (About) | Disponible | No disponible |
| Descripción | Disponible | Disponible |
| Sitio web | Disponible | Disponible |
| Email | Disponible | Disponible |
| Dirección | Disponible | Disponible |
| Vertical | Disponible | No disponible |
| Marca White Label | Configurable | No aplica |
| Velocidad de cambios | Inmediata | Puede tomar minutos |
| Validación automática | Sí | Manual |

## Optimización del Nombre Comercial en WhatsApp

El nombre que aparece en tu perfil de WhatsApp Business es literalmente la primera impresión que tendrán tus clientes. Un nombre bien optimizado genera confianza, cumple con las políticas de WhatsApp y asegura la aprobación de Meta.



### Principios Clave

- **Representación precisa:** El nombre debe reflejar exactamente el nombre real de tu negocio.
- **Claridad y simplicidad:** Evita símbolos, abreviaturas confusas o términos genéricos.
- **Cumplimiento normativo:** Sigue las reglas de la plataforma para asegurar la aprobación.
- **Consistencia multiplataforma:** El nombre debe coincidir con el usado en tu web y redes sociales.

### Ejemplos de Formato

| Correcto ✓ | Incorrecto ✗ |
|------------|-------------|
| Pastelería Jennifer | PASTELERÍA JENNIFER |
| Green Leaf Café | Green_Leaf* Cafe! |
| ModaExpress | Moda Express 123 |
| Tech Solutions MX | TechSoluciones |
| Café de Altura | CAFEdeALTURA |

### Recomendaciones Detalladas para la Aprobación

1. **Identidad comercial:** Usa tu nombre comercial completo y registrado. "Jennifer's Cupcake Bakery" es efectivo; solo "Comida" o "Pasteles" será rechazado.

2. **Capitalización adecuada:** Escribe con mayúscula inicial y minúsculas. "Sunny Day Florist" es correcto; "SUNNY DAY FLORIST" será rechazado por considerarse gritar.

3. **Formato limpio:** El espaciado debe coincidir con el nombre real del negocio. Sin emojis, puntuación excesiva ni guiones bajos.

4. **Longitud y estructura:** Mínimo 3 caracteres. Puedes incluir país/región, departamento (ej: "Atención al Cliente") o indicadores de prueba.

5. **Consistencia de marca:** El nombre debe coincidir con tu sitio web y otras plataformas. Evita abreviaturas a menos que sean ampliamente reconocidas (ej: IBM, 3M).


### Visibilidad del nombre según el tipo de cuenta

**Cuenta API estándar:**
- El nombre aparece junto al número de teléfono.
- Verificación básica sin sello verde.
- El número telefónico es visible para el usuario.

**Cuenta verificada (Green Tick):**
- El nombre se muestra sin el número de teléfono visible.
- Incluye sello verde de verificación (green tick).
- Requiere presencia orgánica sólida en medios de comunicación.
- El negocio debe ser bien establecido y reconocido.
- Menciones pagadas en medios no cuentan para este propósito.
- El nombre debe coincidir exactamente con el registrado en Business Manager.


## Estrategias para un Perfil Profesional

### Cómo Redactar un Estado (About) Efectivo

El estado de WhatsApp es ese texto breve debajo del nombre de tu negocio. Con solo 139 caracteres, cada palabra cuenta:



### Estado Promocional

🔥 Oferta válida hoy: 20% OFF en toda la tienda con el código BIENVENIDO20. ¡No te lo pierdas! 🛒

### Estado Descriptivo

📍 Tienda física: Lun-Sáb 9am-8pm. Envíos gratis a todo México en compras mayores a $500.

### Estado de Temporada

🎄 Horarios especiales: 24Dic 9am-2pm, 25Dic cerrado. ¡Felices fiestas y gracias por tu preferencia!

### Cómo Redactar una Descripción de Negocio Impactante

Con 512 caracteres disponibles, tu descripción debe contar tu historia. Sigue esta estructura:

1. **Apertura impactante** (2 líneas): ¿Qué haces y por qué eres diferente?
2. **Propuesta de valor** (2-3 líneas): ¿Qué beneficios obtiene el cliente?
3. **Diferenciación** (1-2 líneas): ¿Por qué elegirte a ti?
4. **Llamada a la acción** (última línea): ¿Qué debe hacer el cliente?

**Ejemplo completo:**

*"En ModaExpress creemos que la moda debe ser accesible para todos. Desde 2018 ofrecemos ropa de tendencia con los mejores precios del mercado. Nuestra colección incluye más de 500 prendas para hombre, mujer y niños, con renovación semanal. Envíos gratis a todo el país, devoluciones sin costo y atención personalizada vía WhatsApp. ¡Descubre tu próximo outfit favorito!"*

## Solución de Problemas Comunes


### La foto de perfil no se actualiza en WhatsApp

Esto se debe al caché de WhatsApp. La foto puede tardar entre 5 y 30 minutos en actualizarse en todos los dispositivos. Si pasa más tiempo:

1. Verifica que la imagen cumpla con los requisitos (JPG/PNG, cuadrado, menor a 5 MB).
2. Confirma que hiciste clic en **Save** después de subir la imagen.
3. Cierra y vuelve a abrir WhatsApp en tu teléfono para forzar actualización.
4. Si persiste, desconecta y reconecta el número desde E-SMART360.

### El estado (About) no se guarda

Posibles causas y soluciones:

1. **Longitud excesiva:** Límite de 139 caracteres. Cuenta tu texto cuidadosamente.
2. **Contenido no permitido:** Evita URLs, teléfonos o contenido que viole políticas.
3. **Sincronización:** Espera 2-3 minutos y reintenta.
4. **Error de conexión:** Verifica tu internet y recarga el panel de E-SMART360.

### El nombre del negocio fue rechazado por Meta

Razones comunes de rechazo:

1. **Nombre genérico:** "Comida", "Ropa", "Tienda" sin identificación específica.
2. **Mayúsculas inapropiadas:** Todo en mayúsculas.
3. **Caracteres especiales:** Símbolos, emojis o puntuación excesiva.
4. **Inconsistencia:** No coincide con Business Manager o sitio web.

**Solución:** Revisa las reglas de nomenclatura de WhatsApp, corrige y solicita revisión desde WhatsApp Manager.

### La descripción se ve cortada o incompleta

La descripción tiene límite de 512 caracteres. Si se ve incompleta:

1. Cuenta los caracteres (incluyendo espacios).
2. Reduce manteniendo la información esencial.
3. Pon lo más importante al inicio.
4. No incluyas información que ya está en otros campos (email, web).

### Error: 'Profile update failed due to invalid parameters'

Este error ocurre cuando uno o más campos contienen datos que no cumplen requisitos. Causas comunes:

1. El nombre contiene caracteres especiales no permitidos.
2. La URL del sitio web no incluye protocolo (http:// o https://).
3. El email tiene formato incorrecto.
4. La descripción excede 512 caracteres.

**Solución:** Revisa cada campo según las especificaciones en la tabla de campos y corrige.

## Gestión de Múltiples Perfiles

Si gestionas varios números de WhatsApp Cloud API para diferentes marcas, departamentos o sucursales, cada número tiene su propio perfil independiente. Puedes:

- Tener diferentes fotos de perfil para cada marca.
- Personalizar descripción y estado según el propósito de cada número.
- Configurar distintos sitios web y correos.
- Aplicar la marca de revendedor independientemente por número.


> **Convención de nombres:** Crea nombres claros como "Tu Empresa - Ventas" o "Tu Empresa - Soporte" para que los clientes identifiquen rápidamente cada área.

## Políticas de Contenido del Perfil

WhatsApp Cloud API tiene políticas estrictas sobre el contenido del perfil:

### Contenido Permitido
- Información veraz y verificable sobre tu negocio.
- Descripciones precisas de productos y servicios.
- URLs de sitios legítimos y activos.
- Emojis moderados solo en el estado (About).
- Información legal de tu empresa.

### Contenido Prohibido
- Información falsa o engañosa.
- Nombres de marca que no te pertenecen.
- Contenido ilegal, violento o para adultos.
- URLs acortadas o enlaces a sitios maliciosos.
- Información personal no relacionada con el negocio.
- Teléfonos adicionales en estado o descripción.

### Consecuencias del Incumplimiento
- Rechazo automático del cambio.
- Restricción temporal de la función de perfil.
- En casos graves, suspensión de cuenta.
- Pérdida de calificación de calidad del número.

## Integración con Otras Funciones de E-SMART360



### Respuestas Automáticas

Cuando un cliente te contacta, ve tu perfil completo. Combínalo con respuestas automáticas que complementen con horarios actualizados y FAQs.

### Chat en Vivo

Los agentes ven el perfil del negocio mientras atienden. Un perfil actualizado ayuda a los agentes a tener contexto inmediato.

### Campañas de Secuencia

Tus campañas pueden referenciar la información del perfil, por ejemplo: "Visita nuestro sitio web, disponible en nuestro perfil de WhatsApp".

### Webhooks y Automatización

Conecta la actualización del perfil con webhooks para notificar a tu equipo cada vez que se modifica información importante.

## Preguntas Frecuentes


### ¿Puedo cambiar el nombre de mi negocio después de haberlo configurado?

Sí, puedes modificarlo desde WhatsApp Manager. Meta revisa cada cambio, por lo que puede tomar horas en reflejarse. Cada cambio debe cumplir con las políticas de nombres comerciales.

### ¿Qué hago si mi descripción no se guarda en el panel de E-SMART360?

Verifica que no excedas 512 caracteres y que no incluya URLs acortadas. Cierra sesión, vuelve a iniciarla y reintenta. Como último recurso, haz el cambio desde WhatsApp Manager.

### ¿La foto de perfil se actualiza automáticamente en todos los chats?

Sí, se propaga a todos los contactos automáticamente. Puede tomar 5-30 minutos por el caché. El cliente puede necesitar reiniciar la app para ver la nueva imagen.

### ¿Puedo tener diferentes perfiles para diferentes números?

Sí, cada número tiene su propio perfil independiente. Ideal para manejar múltiples marcas o departamentos desde una misma cuenta de E-SMART360.

### ¿Qué requisitos necesita mi nombre para obtener el Green Tick?

Presencia mediática orgánica, empresa establecida y verificable, presencia en múltiples plataformas, coincidencia exacta con Business Manager. Las menciones pagadas no cuentan.

### ¿Cuánto tardan en aplicarse los cambios?

Desde E-SMART360: instantáneo (1-2 segundos). Desde WhatsApp Manager: 30 segundos a 5 minutos. Propagación a clientes: hasta 30 min adicionales por caché.

### ¿Puedo usar emojis en el estado (About)?

Sí, están permitidos y recomendados. Máximo 2-3 emojis. No uses emojis en el nombre comercial ni en la descripción.

### ¿E-SMART360 notifica a mis clientes cuando cambio el perfil?

No, los cambios son silenciosos. Si el cambio es significativo, usa un broadcast o campaña de secuencia para informar a tus contactos.

### ¿Cómo afecta el perfil a la calificación de calidad de mi número?

Meta evalúa la integridad del perfil. Un perfil completo contribuye positivamente. Uno incompleto puede ser negativo si se combina con otros indicadores.

### ¿Qué hago si mi perfil fue desactivado?

1. Revisa el email de tu Business Manager. 2. Corrige la infracción. 3. Solicita revisión desde WhatsApp Manager. 4. Mientras tanto, no fuerces cambios. 5. Contacta al soporte de E-SMART360 si necesitas ayuda.

### ¿Puedo usar el mismo número para perfil personal y empresarial?

No. Una vez registrado en Cloud API, no puede usarse simultáneamente con WhatsApp Personal. Usa un número dedicado exclusivamente para tu negocio.

## Ejemplos Prácticos Completos



### Caso 1: Tienda de Ropa Online

**Escenario:** "ModaExpress" quiere configurar su perfil profesional.

**Configuración recomendada:**
- **Nombre:** ModaExpress
- **Estado:** 🚚 Envíos gratis hoy. ¡Compra ahora!
- **Descripción:** Tienda de ropa online, más de 500 prendas para hombre, mujer y niños. Envíos a todo el país en 24-72 horas. Devoluciones gratuitas hasta 30 días.
- **Sitio web:** https://mueblexpressejemplo.com/tienda
- **Correo:** contacto@mueblexpressejemplo.com
- **Dirección:** Av. Reforma 456, Col. Juárez, CDMX

**Resultado:** Los clientes ven un perfil completo que les permite conocer la tienda, visitar el sitio web y encontrar la dirección sin preguntar.

### Caso 2: Agencia White Label

**Escenario:** Agencia "GrowthLab" revende E-SMART360 con su marca.

**Estrategia:**
- Texto copyright: "Powered by GrowthLab"
- Paquete básico: marca visible
- Paquete premium: perfil 100% limpio

**Beneficio:** La marca se usa como herramienta de upsell y diferenciación.

### Caso 3: Restaurante Local

**Escenario:** "La Trattoria Bella" quiere atraer clientes locales.

**Configuración:**
- **Nombre:** La Trattoria Bella
- **Estado:** 🍝 Hoy: 2x1 en pastas artesanales. Válido hasta 8pm.
- **Descripción:** Cocina italiana desde 1995. Pastas artesanales, pizzas al horno de leña, vinos importados. Reservaciones vía WhatsApp.
- **Dirección:** Calle del Sol 234, Col. Centro

**Resultado:** Clientes encuentran dirección y promociones desde el perfil.

### Caso 4: Consultoría Profesional

**Escenario:** Consultor independiente de mentoría empresarial.

**Configuración:**
- **Nombre:** Carlos Mendoza - Mentoría Empresarial
- **Estado:** 📅 Agenda tu sesión gratuita de descubrimiento.
- **Descripción:** Consultor con 15+ años ayudando a startups y PYMEs. Especialista en estrategia comercial y transformación digital.
- **Sitio web:** https://consultorejemplo.com/agenda
- **Correo:** carlos@consultorejemplo.com

**Resultado:** Perfil profesional que comunica autoridad y facilita la contratación.

## Mejores Prácticas y Checklist de Verificación

### Checklist Diario
- [ ] El estado (About) refleja promociones o info del día.
- [ ] El enlace al sitio web funciona correctamente.
- [ ] Sin errores en el panel de E-SMART360.

### Checklist Semanal
- [ ] La foto de perfil sigue siendo relevante y de alta calidad.
- [ ] La descripción está actualizada con nuevos productos/servicios.
- [ ] El estado refleja promociones semanales activas.

### Checklist Mensual
- [ ] Revisar que toda la información de contacto siga vigente.
- [ ] Verificar que la dirección física sigue siendo correcta.
- [ ] Comprobar que el correo electrónico recibe mensajes.
- [ ] Evaluar si el nombre comercial sigue siendo el correcto.
- [ ] Revisar nuevas industrias o verticales aplicables.

## Tabla Comparativa: Perfiles en Diferentes Plataformas

| Elemento | WhatsApp Cloud API | WhatsApp Business (app) | WhatsApp Personal |
|----------|-------------------|------------------------|-------------------|
| Foto de perfil | ✓ desde Manager | ✓ desde app | ✓ desde app |
| Nombre del negocio | ✓ configurable | ✓ configurable | Nombre personal |
| Descripción | ✓ hasta 512 chars | ✓ hasta 512 chars | ✗ |
| About / Estado | ✓ hasta 139 chars | ✓ hasta 139 chars | ✓ hasta 139 chars |
| Dirección | ✓ configurable | ✓ configurable | ✗ |
| Horario comercial | ✗ | ✓ | ✗ |
| Catálogo productos | ✓ vía API | ✓ | ✗ |
| Sitio web | ✓ configurable | ✓ configurable | ✗ |
| Correo electrónico | ✓ configurable | ✓ configurable | ✗ |
| Categoría / Vertical | ✓

## Conclusión

Configurar y mantener actualizado el perfil empresarial de tu WhatsApp Cloud API es un paso fundamental para proyectar una imagen profesional y generar confianza entre tus clientes. Con E-SMART360, tienes dos caminos para lograrlo:

1. **Directamente desde el panel de E-SMART360:** La opción más rápida y conveniente, con validación automática, integración White Label y todas las funciones centralizadas.
2. **Desde WhatsApp Manager de Meta:** Ideal para cambios específicos como la foto de perfil o ajustes avanzados no disponibles en otros paneles.

Ambos métodos son complementarios y te permiten mantener tu perfil siempre actualizado. Establece una rutina mensual para revisar y actualizar la información de tu perfil, especialmente el estado y las promociones. Un perfil completo no solo mejora tu imagen profesional, sino que optimiza la calificación de calidad de tu número, reduce consultas repetitivas y facilita que los clientes confíen en tu negocio.


> **¿Listo para optimizar tu perfil?** Accede al panel de E-SMART360, dirígete a Cuentas Conectadas de WhatsApp y comienza a personalizar tu perfil empresarial hoy mismo. Tus clientes notarán la diferencia desde el primer mensaje.
