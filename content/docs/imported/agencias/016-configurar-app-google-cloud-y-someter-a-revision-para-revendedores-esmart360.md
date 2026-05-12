---
title: "Configurar una App de Google Cloud y Someterla a Revisión para Revendedores de E-SMART360"
description: "Guía completa para revendedores de E-SMART360 sobre cómo crear, configurar y verificar una aplicación en Google Cloud Console para habilitar la integración de Google Sheets, Google Drive, Google Contacts y Google Calendar en tus flujos de automatización y chatbot."
section: "agencias"
order: 118
audience: ["agencia"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "016-configurar-app-google-cloud-y-someter-a-revision-para-revendedores-esmart360"
canonicalGroup: "configurar-una-app-de-google-cloud-y-someterla-a-revision-para-revendedores-de"
tags: ["agencias"]
staging: true
---
> **Actualización importante sobre verificación de Apps de Google (2026-02-03)**
> A partir de febrero de 2026, Google ha actualizado sus requisitos de verificación para aplicaciones OAuth. Todos los revendedores deben completar el proceso de verificación descrito en esta guía para garantizar que sus usuarios finales puedan conectar sus cuentas de Google sin restricciones ni advertencias de seguridad. Las nuevas políticas exigen una justificación más detallada de cada alcance de datos solicitado.

## Resumen ejecutivo

Como **revendedor de E-SMART360**, necesitas crear y verificar tu propia aplicación de Google para habilitar funcionalidades clave como la integración con **Google Sheets, Google Drive, Google Contacts y Google Calendar**, tanto para ti como para tus usuarios finales.


> Si no completas este proceso, tus usuarios verán advertencias de "aplicación no verificada" al intentar conectar sus cuentas de Google, y las integraciones podrían dejar de funcionar correctamente. Google bloquea las aplicaciones no verificadas después de un período de gracia.

Este proceso incluye:

- **Crear un proyecto** en Google Cloud Console con la configuración adecuada
- **Habilitar las APIs** necesarias (Google Drive, Google Sheets, Google People y Calendar)
- **Configurar credenciales OAuth** con el tipo de aplicación correcto
- **Configurar la pantalla de consentimiento** con marca, políticas y términos
- **Someter la aplicación a verificación** de Google con los alcances y video demostrativo
- **Publicar la aplicación** para que esté disponible para todos los usuarios

Una vez verificada, todos tus clientes podrán conectar sus cuentas de Google a E-SMART360 usando tu aplicación de revendedor sin advertencias, permitiendo sincronización de datos fluida y acceso completo a funciones de automatización basadas en Google.

## ¿Por qué los revendedores necesitan su propia aplicación de Google?


> Cuando eres revendedor, tus clientes usarán **tu aplicación de Google** para conectarse. Google exige que esta aplicación sea propiedad, esté configurada y verificada por ti, no por E-SMART360. Cada revendedor debe tener su propia aplicación registrada y verificada independientemente.

E-SMART360 permite la integración nativa con servicios de Google para leer y escribir datos directamente desde tus flujos de chatbot y automatizaciones. Algunos casos de uso incluyen:



### Sincronización de Contactos

Importa y gestiona contactos desde Google Contacts para segmentar audiencias y personalizar mensajes de forma automática. Los contactos se sincronizan en tiempo real y puedes aplicar etiquetas y campos personalizados para una segmentación más precisa de tus campañas de marketing y comunicación.

### Automatización con Sheets

Lee datos de Google Sheets para enviar mensajes masivos personalizados utilizando variables dinámicas, o escribe respuestas de chatbot directamente en tus hojas de cálculo para su posterior análisis. Cada fila puede representar un cliente con su información personalizada para campañas de marketing.

### Calendario y Citas

Integra Google Calendar para programar recordatorios, confirmar citas y gestionar disponibilidad desde tus flujos conversacionales. El chatbot puede verificar disponibilidad y agendar automáticamente sin intervención manual.

### Drive y Archivos

Accede y comparte archivos de Google Drive directamente desde las conversaciones de WhatsApp, sin salir de la plataforma. Puedes adjuntar PDFs, imágenes y otros documentos en tus respuestas automáticas del chatbot.

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente:

- Una **cuenta de Google** (puede ser Gmail o Google Workspace)
- Acceso a **Google Cloud Console** ([console.cloud.google.com](https://console.cloud.google.com/))
- Una cuenta activa como **revendedor de E-SMART360**
- Una **cuenta de facturación** en Google Cloud (aunque el uso básico suele ser gratuito)
- Un **dominio web** donde alojar las políticas de privacidad y términos de servicio
- Acceso a un **canal de YouTube** para subir el video demostrativo


> Si nunca has usado Google Cloud Console antes, no te preocupes. Google otorga $300 en créditos gratuitos para nuevos usuarios, suficientes para cubrir cualquier costo asociado. La activación de la cuenta de facturación es necesaria solo para cumplir con los requisitos, no implica costos automáticos.

---

## Paso 1: Crear un proyecto en Google Cloud Console


### Acceder a Google Cloud Console

1. Abre tu navegador y ve a **Google Cloud Console**: [https://console.cloud.google.com/](https://console.cloud.google.com/)
2. Inicia sesión con tu cuenta de Google (la misma que usas para tu negocio de revendedor).
3. En la parte superior de la página, junto al logo de Google Cloud, haz clic en el selector de proyectos.
4. Verás una lista de tus proyectos existentes y la opción de crear uno nuevo.

### Crear un nuevo proyecto

1. En el selector de proyectos, haz clic en el botón **"Nuevo proyecto"** en la esquina superior derecha del panel.
2. Se abrirá un formulario con los siguientes campos:
   - **Nombre del proyecto**: Dale un nombre significativo, ej. "Integración E-SMART360 - [Tu Empresa]"
   - **Organización**: Selecciona tu organización si aplica (puedes dejarlo en blanco)
   - **Carpeta**: Opcional, para organizar proyectos dentro de una jerarquía
   - **Ubicación**: La ubicación de la organización (solo si tienes organización configurada)
3. Selecciona tu **Cuenta de facturación**. Si no has configurado una, deberás hacerlo.
4. Haz clic en el botón **"Crear"**.


> Elige un nombre de proyecto fácil de identificar, especialmente si gestionas varios proyectos. Recomendamos usar el nombre de tu empresa para que tus clientes reconozcan la aplicación.

### Seleccionar el proyecto creado

La creación tomará unos segundos. Una vez completada:
1. Vuelve al selector de proyectos en la barra superior.
2. Busca y **selecciona el proyecto** que acabas de crear.
3. El panel de control se actualizará para mostrar el nuevo proyecto activo.

---

## Paso 2: Habilitar las APIs necesarias

Para que E-SMART360 interactúe con los servicios de Google, debes habilitar las siguientes APIs:


### Ir a APIs y Servicios

1. Desde el panel de control de Google Cloud Console, abre el menú lateral (icono de tres líneas).
2. Navega a **"APIs & Services"** (API y Servicios).
3. Verás el panel de APIs habilitadas.

### Buscar y habilitar Google Drive API

1. En el menú lateral, haz clic en **"Biblioteca"** (Library).
2. En la barra de búsqueda, escribe **"Google Drive API"**.
3. Haz clic en el resultado de **Google Drive API** (icono de Drive).
4. Haz clic en el botón **"Habilitar"** (Enable).
5. Espera la confirmación "API habilitada correctamente".

### Buscar y habilitar Google Sheets API

1. Vuelve a la **Biblioteca**.
2. Busca **"Google Sheets API"**.
3. Haz clic en **Google Sheets API**.
4. Haz clic en **"Habilitar"**.

### Buscar y habilitar Google People API

1. Vuelve a la **Biblioteca**.
2. Busca **"Google People API"**.
3. Haz clic en **Google People API**.
4. Haz clic en **"Habilitar"**.

### Habilitar Google Calendar API (opcional)

1. Vuelve a la **Biblioteca**.
2. Busca **"Google Calendar API"**.
3. Haz clic en **Google Calendar API**.
4. Haz clic en **"Habilitar"**.


> Habilitar Calendar API desde el principio evita tener que repetir parte del proceso de verificación si decides agregarla después. Google recomienda incluir todos los alcances previstos desde la solicitud inicial.

> Una vez habilitadas, las APIs aparecerán como servicios activos en tu panel. Esto permite a E-SMART360 leer/escribir datos de hojas de cálculo, acceder a Contactos y gestionar eventos del calendario de forma segura, siempre bajo autorización del usuario.

---

## Paso 3: Crear credenciales OAuth

Este es el paso donde creas las credenciales que E-SMART360 usará para autenticarse en nombre de tus usuarios mediante el protocolo OAuth 2.0.

### 3.1: Iniciar la creación de credenciales


### Ir a Credenciales

1. En el menú lateral, navega a **"APIs & Services"** → **"Credenciales"**.
2. Verás una tabla con las credenciales existentes.
3. Haz clic en **"Crear credenciales"** → **"OAuth Client ID"**.

### Configurar pantalla de consentimiento

1. Google detectará que no has configurado la pantalla de consentimiento.
2. Aparecerá el mensaje: "Para crear un ID de cliente OAuth, primero debes configurar la pantalla de consentimiento".
3. Haz clic en **"Configurar pantalla de consentimiento"**.
4. Serás redirigido a la página de marca. Haz clic en **"Comenzar"**.
5. Completa el formulario:
   - **Nombre de la aplicación**: "Integración E-SMART360 de [Tu Empresa]"
   - **Correo de soporte**: Tu dirección de correo (debe ser monitoreada)
   - **Logotipo**: Opcional, recomendado para dar profesionalismo

### Seleccionar tipo de usuario

1. En la sección "Audiencia", selecciona **"Externo"** (External).
   - Esto permite que cualquier persona con cuenta de Google use tu aplicación.
2. Ingresa los datos de contacto del desarrollador.
3. Haz clic en **"Siguiente"** hasta llegar al paso final.
4. Acepta las **políticas de datos de usuario** marcando la casilla.
5. Haz clic en **"Continuar"** y luego en **"Crear"**.

### 3.2: Crear el cliente OAuth 2.0


### Crear el cliente OAuth

1. Después de configurar la pantalla de consentimiento, serás redirigido a la creación del cliente OAuth.
2. Si no, ve a **Credenciales** → **"Crear credenciales"** → **"OAuth Client ID"**.
3. En **"Tipo de aplicación"**, selecciona **"Aplicación web"** (Web Application).
4. En **"Nombre"**, asigna un nombre como "Cliente Web E-SMART360".

### Configurar URIs de redireccionamiento

1. Haz clic en **"+ Agregar URI"** en la sección "URIs de redireccionamiento autorizados".
2. **No adivines esta URL.** Debes obtenerla directamente de E-SMART360.
3. Abre una nueva pestaña e inicia sesión en tu panel de **E-SMART360**.
4. Ve a **Panel de Control → Configuración e Integraciones → Integración de Google**.
5. Copia la **"URI de redireccionamiento OAuth válida"**.
6. Pégala exactamente igual en Google Cloud Console.
7. Haz clic en **"Crear"**.


> La URI debe ser **exacta**, incluyendo el protocolo (https://), el dominio y la ruta. Cualquier diferencia, como una barra extra al final, hará que el flujo OAuth falle con el error "redirect_uri_mismatch".

### Guardar credenciales de forma segura

1. Google mostrará las credenciales:
   - **Client ID**: Identificador público
   - **Client Secret**: Clave secreta (se muestra solo una vez)
2. **Copia ambos valores** inmediatamente.
3. Pégalos en E-SMART360 en **Configuración → Integración de Google**.
4. Haz clic en **"Guardar"**.


> El **Client Secret** es sensible. Nunca lo compartas por correo, mensajes o chats. No lo incluyas en código JavaScript del lado del cliente. Si sospechas que se comprometió, genera uno nuevo inmediatamente desde Google Cloud Console.

---

## Paso 4: Someter la aplicación a revisión de Google

Google requiere verificación para aplicaciones OAuth que acceden a datos de usuario. **Sin verificación:**



### Consecuencias de NO verificar

- Advertencias de "aplicación no verificada" para todos los usuarios
- Acceso limitado solo a usuarios de prueba (máximo 100)
- Las integraciones pueden dejar de funcionar en producción
- Google puede bloquear la aplicación tras un período de gracia

### Beneficios de la verificación

- Experiencia de usuario limpia, sin advertencias
- Acceso ilimitado para todos tus clientes
- Cumplimiento total con políticas de Google
- Mayor confianza y mejores tasas de conversión

### 4.1: Configurar marca y políticas


### Ir a la pantalla de consentimiento

1. Menú lateral → **"APIs & Services"** → **"Pantalla de consentimiento OAuth"**.
2. Asegúrate de estar en la pestaña **"Marca"** (Branding).

### Subir el logo

1. Haz clic en "Seleccionar imagen" y elige un archivo.
2. Requisitos del logo:
   - Formato: PNG, JPG o GIF
   - Tamaño mínimo: 120x120 píxeles, máximo 1 MB
   - Proporción cuadrada recomendada
3. Previsualiza cómo se verá y haz clic en **"Guardar"**.

### Agregar URLs de políticas

Completa estos campos:

- **Dominio de la aplicación**: tudominio.com
- **URL de política de privacidad**: https://tudominio.com/politica-privacidad
- **URL de términos de servicio**: https://tudominio.com/terminos


> Si no tienes sitio web propio, puedes crear estas páginas rápidamente con Google Sites o consultar con el equipo de E-SMART360 sobre opciones disponibles mientras desarrollas tu presencia web.

### Publicar la aplicación

1. En el menú lateral, selecciona **"Audiencia"**.
2. Haz clic en **"Publicar aplicación"** (Publish App).
3. Lee la advertencia y haz clic en **"Confirmar"**.


> Publicar la aplicación no equivale a verificarla. Publicarla la hace visible para todos, pero aún mostrará advertencias hasta que Google la verifique. Es un paso necesario antes de la verificación.

### 4.2: Agregar y justificar alcances


### Ir a Acceso a Datos

1. En el menú lateral, selecciona **"Acceso a datos"** (Data Access).
2. Haz clic en **"Agregar o eliminar alcances"**.
3. Se abrirá un panel para buscar y seleccionar alcances.

### Agregar los alcances requeridos

Agrega cada uno de los siguientes:

| Alcance | Propósito |
|---|---|
| `https://www.googleapis.com/auth/userinfo.email` | Ver el correo electrónico del usuario |
| `https://www.googleapis.com/auth/userinfo.profile` | Ver información básica del perfil |
| `https://www.googleapis.com/auth/drive.file` | Acceder a archivos de Drive de la app |
| `https://www.googleapis.com/auth/spreadsheets` | Ver, editar, crear hojas de cálculo |
| `https://www.googleapis.com/auth/contacts` | Ver y gestionar contactos |
| `https://www.googleapis.com/auth/calendar` | Ver y gestionar eventos del calendario |

Para cada uno: busca, selecciona y haz clic en **"Agregar"**.


> **Explicación de alcances:**
- **userinfo.email/profile**: Identifican al usuario. Sin estos no se puede personalizar la experiencia.
- **drive.file**: Da acceso solo a archivos que el usuario abra con tu aplicación, no a todo Drive.
- **spreadsheets**: Para leer/escribir datos en Google Sheets.
- **contacts**: Para importar la libreta de contactos y segmentar audiencias.
- **calendar**: Para gestionar eventos, citas y recordatorios desde el chatbot.

### Justificar cada alcance

En el campo **"¿Cómo se usarán los alcances?"**, escribe una explicación detallada. Ejemplo adaptable:

> *"Nuestra plataforma utiliza estos alcances para automatizar la comunicación empresarial vía WhatsApp. userinfo.email y userinfo.profile identifican al usuario que autoriza la conexión. spreadsheets permite leer listas de contactos y datos de clientes para enviar mensajes personalizados, y escribir respuestas de chatbot para análisis posterior. contacts importa la libreta de contactos para segmentar sin subir archivos manualmente. calendar programa recordatorios automáticos de citas basados en interacciones de chatbot. drive.file accede exclusivamente a archivos que el usuario decida compartir. Todos los accesos ocurren bajo autorización explícita del usuario mediante OAuth estándar."*


> Una justificación genérica será rechazada. Explica **exactamente cómo** y **para qué** se usa cada alcance en tu aplicación. Sé específico y detallado para aumentar las probabilidades de aprobación rápida.

### 4.3: Crear y enviar video demostrativo

Google requiere un video grabado en pantalla que muestre la aplicación en funcionamiento.


### Preparar el entorno

Antes de grabar, ten listo:
1. Una cuenta de prueba de Google (no tu personal).
2. Una cuenta de prueba en E-SMART360 conectada a ella.
3. Una hoja de cálculo con datos de ejemplo (nombres, teléfonos).
4. Contactos de ejemplo en Google Contacts.
5. Un evento de prueba en Google Calendar.
6. Software de grabación (recomendamos OBS Studio, gratuito en https://obsproject.com).

### Grabar el video

Estructura recomendada (5-10 minutos):
1. **Inicio** (30s): Explica brevemente qué hace la aplicación.
2. **Flujo OAuth** (1-2min): Inicia sesión, navega a configuración, conecta Google, muestra pantalla de consentimiento con todos los alcances.
3. **Demostración Sheets** (2-3min): Muestra datos de clientes en una hoja, envía un mensaje personalizado, escribe una respuesta.
4. **Demostración Contactos** (1-2min): Importa contactos y mapea campos.
5. **Demostración Calendar** (1-2min): Crea un evento desde un flujo de chatbot y verifica que aparezca en Calendar.


> Asegúrate de que el audio se escuche bien o añade subtítulos. La calidad del video influye en la aprobación de la verificación.

### Subir a YouTube

1. Ve a [YouTube](https://www.youtube.com/), haz clic en el icono de la cámara → **"Subir video"**.
2. Selecciona el archivo grabado.
3. En visibilidad, elige **"No listado"** (Unlisted).
4. Completa título y descripción.
5. Publica y copia la URL (ej. https://youtu.be/XXXXXXXXXXX).

### Proporcionar el enlace

1. Vuelve a **Pantalla de consentimiento OAuth** → **Acceso a datos**.
2. Pega la URL del video en el campo correspondiente.
3. Haz clic en **"Guardar y continuar"**.

### 4.4: Enviar para verificación


### Ir al centro de verificación

1. En **Pantalla de consentimiento** → menú lateral → **"Centro de verificación"**.
2. Haz clic en **"Prepararse para la verificación"**.
3. Acepta los términos de Google.

### Responder el cuestionario

Preguntas típicas:
- ¿Manejas datos personales sensibles? (salud, religión, etc.)
- ¿Almacenas datos de usuario? (Sí, contactos y datos de clientes)
- ¿Cómo proteges los datos? (Encriptación en reposo y tránsito, roles de acceso)
- ¿Tienes proceso de eliminación de datos? (Sí, desde configuración de cuenta)
- ¿Cumples con leyes de protección? (Sí, GDPR y regulaciones locales)

Responde con honestidad. Google valora la transparencia.


> Si dudas sobre alguna respuesta, consulta con tu equipo legal o de cumplimiento antes de enviar. Las respuestas falsas pueden resultar en rechazo o suspensión.

### Enviar para revisión

1. Revisa que todo esté correcto:
   - Todos los alcances justificados
   - Video demostrativo accesible (pruébalo en incógnito)
   - URLs de políticas y términos funcionales
   - Logo visible
2. Haz clic en **"Enviar para verificación"**.
3. Google enviará un correo de confirmación.

---

## Tiempos de verificación


> La verificación suele tardar **3-7 días hábiles** para revisión básica. Puede demorar 2-3 semanas si se requieren aclaraciones adicionales o si la aplicación usa alcances restringidos como contacts.

Estados durante la verificación:

| Estado | Significado |
|---|---|
| **En revisión** | Google está evaluando tu solicitud |
| **Info solicitada** | Google necesita más detalles |
| **Aprobada** | Aplicación verificada correctamente |
| **Rechazada** | Revisa los motivos, corrige y reenvía |

---

## Después de la verificación


### Automatizaciones con Google Sheets

Tus usuarios pueden conectar sus cuentas y usar datos de hojas en flujos de chatbot para enviar mensajes personalizados, leer datos de campañas o registrar respuestas automáticamente.

### Sincronización de Contactos

Los contactos de Google se sincronizan automáticamente, permitiendo segmentación avanzada y campañas dirigidas sin importar archivos CSV manualmente. Se actualizan en tiempo real.

### Integración de Calendario

Los flujos de chatbot pueden leer y escribir eventos en Google Calendar, permitiendo confirmación de citas, recordatorios automáticos y gestión de disponibilidad sin intervención humana.

### Producción sin restricciones

Todos tus clientes pueden conectar sus cuentas sin advertencias de seguridad ni límites de usuarios de prueba. Las integraciones funcionan de manera estable y profesional.

---

## Integración práctica: Google Sheets y Contactos en E-SMART360

Aquí te mostramos cómo tus clientes usarán la integración una vez verificada tu aplicación:


### Iniciar sesión en E-SMART360

El usuario inicia sesión y va a **Configuración → Integración de Google Sheets**.

### Conectar cuenta de Google

Hacen clic en **"Conectar cuenta de Google"** y son redirigidos a la pantalla de consentimiento OAuth de **tu aplicación**, donde ven tu logo y la lista de permisos solicitados.

### Crear o seleccionar una hoja

Pueden:
- **Crear nueva hoja** desde E-SMART360, definiendo encabezados como teléfono, nombre, empresa.
- **Agregar hoja existente** pegando el ID de la hoja desde la URL de Google Sheets:

  1. Abre la hoja en Google Sheets.
  2. Copia el ID de la URL (la parte entre /d/ y /edit).
  3. Pégalo en E-SMART360 y haz clic en "Guardar".

### Configurar campos personalizados

Antes de importar contactos, el usuario debe crear campos personalizados que coincidan con los encabezados de la hoja:

1. Ve a **Gestor de Suscriptores → Campos personalizados**.
2. Crea campos como: "empresa", "interes", "ultima_compra".
3. Crea etiquetas para categorizar contactos (ej. "Clientes VIP", "Leads nuevos").

### Importar contactos

1. Ve a **Gestor de Suscriptores → Opciones → Importar suscriptores**.
2. Selecciona la hoja de Google correspondiente.
3. Elige la etiqueta para los nuevos contactos.
4. Mapea las columnas de la hoja con los campos de E-SMART360:
   - Número de teléfono → Teléfono
   - Nombre → Nombre del suscriptor
   - Empresa → Campo personalizado: empresa
5. Haz clic en **"Confirmar"**.
6. Los contactos aparecerán en tu gestor de suscriptores.

### Usar datos en automatizaciones

Los datos importados pueden usarse para:
- Enviar mensajes masivos **personalizados** con variables como {nombre}, {empresa}, {producto}.
- Disparar flujos de chatbot basados en cambios en la hoja de cálculo.
- Registrar respuestas de clientes automáticamente en Google Sheets.
- Segmentar audiencias usando etiquetas y campos personalizados.


> La integración con Google Sheets no solo sirve para importar contactos. También puedes **escribir datos en tiempo real**. Cada respuesta de cliente, cada interacción de chatbot, puede registrarse automáticamente en tu hoja de cálculo para análisis posterior.

---

## Casos de uso empresarial



### Recuperación de carritos abandonados

Un ecommerce almacena carritos abandonados en Google Sheets. El chatbot de E-SMART360 lee la hoja cada hora y envía un recordatorio personalizado por WhatsApp a cada cliente con el nombre del producto y un enlace de pago directo. Al final del día, escribe el estado de cada gestión en la misma hoja.

### Notificaciones de pedidos automatizadas

Cuando llega un nuevo pedido, se escribe automáticamente en Google Sheets. El chatbot detecta el nuevo registro y envía una notificación al cliente con su número de seguimiento y fecha estimada de entrega. Todo el proceso es automático y en tiempo real.

### Encuestas post-venta con registro en Sheets

Después de una compra, el chatbot envía una encuesta de satisfacción por WhatsApp. Las respuestas se registran automáticamente en Google Sheets junto con el nombre y teléfono del cliente, permitiendo análisis de satisfacción y detección temprana de problemas.

---

## Solución de problemas comunes


### Error: redirect_uri_mismatch

**Causa:** La URI de redireccionamiento registrada en Google Cloud no coincide exactamente con la que usa E-SMART360.

**Solución:** Vuelve a copiar la URI exacta desde **Panel de Control → Configuración e Integraciones → Integración de Google** y pégala en **Google Cloud Console → Credenciales → Editar Cliente OAuth → URIs de redireccionamiento autorizados**. Verifica que no haya espacios, barras extra o diferencias de mayúsculas/minúsculas.

Si el error persiste, elimina el cliente OAuth y crea uno nuevo asegurándote de pegar la URI exacta.

### Error: Aplicación no verificada

**Causa:** La aplicación no ha pasado el proceso de verificación de Google.

**Solución:** Completa todos los pasos de la **Sección 4** de esta guía. Mientras tanto, puedes agregar usuarios de prueba manualmente desde **Audiencia** en la pantalla de consentimiento para que puedan usar la aplicación sin verificación durante el desarrollo.

### Error: Alcance sensible no aprobado

**Causa:** Google considera contacts y calendar como alcances sensibles o restringidos. Si tu solicitud es rechazada, puede deberse a justificación insuficiente.

**Solución:** Asegúrate de que tu video demostrativo muestre claramente el uso de contactos y calendario. Verifica que tu política de privacidad describa explícitamente cómo manejas estos datos. Considera solicitar solo los alcances estrictamente necesarios inicialmente y agregar los más sensibles después.

**Alternativa:** Puedes solicitar la verificación primero solo con spreadsheets y drive.file, y luego agregar contacts/calendar en una segunda solicitud una vez aprobada la primera.

### Error: Se necesita cuenta de facturación

**Causa:** Algunas APIs requieren una cuenta de facturación activa.

**Solución:** Configura una cuenta de facturación en Google Cloud. El uso de las APIs de Google Drive, Sheets y People suele estar dentro del nivel gratuito. Google no te cobrará a menos que superes los límites generosos del uso gratuito. Solo necesitas la cuenta para habilitar las APIs.

### Error: Video de demostración rechazado

**Causa:** El video no muestra claramente el uso de todos los alcances solicitados.

**Solución:** Graba un nuevo video que incluya: (1) flujo de inicio de sesión OAuth desde cero, (2) una demostración clara de lectura/escritura en Google Sheets, (3) importación de contactos, (4) gestión de eventos de calendario si aplica. Asegúrate de que el video tenga audio explicativo o subtítulos, y que dure al menos 5 minutos. Sube el video como "No listado" y actualiza el enlace en la consola.

### Error: No puedo publicar la aplicación - botón gris

**Causa:** Faltan campos obligatorios en la configuración de la pantalla de consentimiento.

**Solución:** Verifica que hayas completado: nombre de la aplicación, correo de soporte, dominio de la aplicación, URL de política de privacidad y URL de términos de servicio. Todos estos campos son obligatorios para publicar.

### Mi aplicación fue rechazada, ¿qué hago?

**Causa:** Google identificó problemas en tu solicitud de verificación.

**Solución:** Google te proporcionará el motivo del rechazo por correo. Los motivos comunes incluyen: justificación insuficiente de alcances, video poco claro, política de privacidad incompleta, o inconsistencias en las respuestas del cuestionario. Lee atentamente el motivo, corrige cada punto señalado, y vuelve a enviar la solicitud desde el Centro de Verificación. No te desanimes, es común tener que iterar una o dos veces.

---

## Preguntas frecuentes


### ¿Puedo usar la aplicación predeterminada de E-SMART360?

No. Para configuraciones de **revendedor**, las integraciones de Google deben usar las credenciales de tu propia aplicación. Google exige que cada revendedor tenga su propia aplicación verificada para garantizar propiedad, seguridad y cumplimiento adecuados para todos los usuarios finales.

### ¿Qué APIs de Google debo habilitar obligatoriamente?

Debes habilitar: **Google Drive API**, **Google Sheets API** y **Google People API** como mínimo. **Google Calendar API** es opcional pero recomendada si planeas usar funciones de calendario en tus automatizaciones.

### ¿Qué tipo de aplicación OAuth debo seleccionar?

Selecciona **"Aplicación web"** (Web Application). Asegúrate de agregar la URI de redireccionamiento OAuth exacta desde E-SMART360. No selecciones "Aplicación de escritorio", "Android" o "iOS" porque no funcionarán correctamente.

### ¿Dónde encuentro la URI de redireccionamiento OAuth en E-SMART360?

En tu panel de E-SMART360, ve a **Panel de Control → Configuración e Integraciones → Integración de Google**. Allí verás la URI listada. Cópiala exactamente como aparece, sin agregar ni quitar nada.

### ¿Cuánto tarda la verificación de Google normalmente?

La verificación de Google suele tardar entre **3 y 7 días hábiles** para una revisión básica. Puede demorar entre 2 y 3 semanas si tu aplicación usa alcances sensibles como contacts o calendar, o si Google necesita información adicional. Monitorea el estado desde el Centro de Verificación en Google Cloud Console.

### ¿Puedo conectar varias cuentas de Google?

Sí, E-SMART360 permite conectar múltiples cuentas de Google. Esto es útil si gestionas diferentes proyectos o clientes desde una misma plataforma. Cada cuenta se conecta de forma independiente y puede tener sus propias hojas de cálculo y contactos asociados.

### ¿Necesito crear una aplicación diferente para cada cliente?

No necesariamente. Una sola aplicación de Google verificada puede ser usada por todos tus clientes como revendedor. Sin embargo, si tienes clientes con requisitos muy específicos o marcas completamente diferentes, puedes crear aplicaciones separadas para cada uno.

### ¿Qué formato deben tener los números de teléfono en Google Sheets?

Los números de teléfono deben ingresarse **sin caracteres especiales**, solo con el código de país y el número. Por ejemplo: 5215512345678 en lugar de +52 155 1234 5678. Si incluyes guiones, paréntesis o espacios, la importación podría fallar o generar errores en el envío de mensajes.

### ¿Puedo usar Google Sheets como base de datos en tiempo real para mi chatbot?

Sí, E-SMART360 puede leer y escribir en Google Sheets en tiempo real como parte de tus flujos de chatbot. Puedes configurar acciones que lean datos de una celda específica para personalizar respuestas, o que escriban las interacciones de los clientes automáticamente en tu hoja de cálculo para mantener un registro actualizado.

### ¿Cómo revoco el acceso de un usuario a mi aplicación de Google?

1. Ve a **Google Cloud Console** → **APIs & Services** → **Credenciales**.
2. Revisa el Client ID y Client Secret que compartiste.
3. Para revocar el acceso inmediato, puedes **regenerar el Client Secret** desde la misma página.
4. También puedes ir a **Pantalla de consentimiento OAuth** y eliminar usuarios específicos desde la sección de Audiencia.
5. Los usuarios también pueden revocar el acceso desde su propia cuenta de Google en **Seguridad → Aplicaciones de terceros con acceso a tu cuenta**.

### ¿Qué hago si Google cambia sus políticas de verificación?

Mantente actualizado revisando el [Centro de ayuda de verificación de Google](https://support.google.com/cloud/answer/9110914) periódicamente. E-SMART360 también comunicará cambios importantes a través de los canales oficiales para revendedores. Si Google actualiza sus requisitos, es posible que necesites volver a enviar tu aplicación para verificación con la nueva información.

---

## Buenas prácticas para mantener tu aplicación verificada

Una vez que tu aplicación esté verificada, es importante mantenerla en cumplimiento con las políticas de Google:

1. **Actualiza tu política de privacidad** regularmente para reflejar cualquier cambio en el manejo de datos.
2. **Monitorea los correos de Google** sobre cambios en las políticas de verificación.
3. **Revisa periódicamente** los alcances que tu aplicación solicita. Si has dejado de usar alguno, elimínalo.
4. **Mantén activa la cuenta de facturación** de Google Cloud para evitar que las APIs se deshabiliten.
5. **Actualiza el video demostrativo** si realizas cambios significativos en la interfaz de usuario o en el flujo de integración.
6. **Responde rápidamente** si Google solicita información adicional después de la verificación.

---

## Conclusión

Configurar y verificar tu propia aplicación de Google Cloud es un paso fundamental para cualquier **revendedor de E-SMART360** que quiera ofrecer integraciones completas de Google a sus clientes. Aunque el proceso puede parecer extenso al principio, una vez completado:

- Tus clientes podrán conectar sus cuentas de Google **sin advertencias de seguridad**
- Podrás ofrecer **automatizaciones avanzadas** con Google Sheets, Contacts, Drive y Calendar
- Tu negocio de reventa será **más profesional y confiable** frente a tus competidores
- Las integraciones funcionarán **sin interrupciones** en producción, sin límites de usuarios de prueba


> **¿Necesitas ayuda?** Si encuentras dificultades durante el proceso, el equipo de soporte de E-SMART360 está disponible para ayudarte. Abre un ticket desde tu panel de control indicando en qué paso tienes dudas y te guiaremos paso a paso.

---

## Recursos adicionales

- [Google Cloud Console](https://console.cloud.google.com/) — Centro de administración de proyectos de Google
- [Documentación de OAuth 2.0 de Google](https://developers.google.com/identity/protocols/oauth2) — Referencia oficial sobre el protocolo de autorización
- [Centro de ayuda de verificación de Google](https://support.google.com/cloud/answer/9110914) — Información oficial sobre el proceso de verificación de aplicaciones
- [Guía de campos personalizados y etiquetas](/recursos/campos-personalizados-etiquetas) — Cómo configurar campos personalizados en E-SMART360 para mapear datos de Google Sheets
- Video tutorial: [Cómo crear una aplicación de Google para Sheets](https://www.youtube.com/watch?v=5cSihdSZ4Uc) — Video paso a paso del proceso (recuerda crear tu propio video con tu aplicación para la verificación)

---

## Seguridad y buenas prácticas para tu aplicación de Google

Mantener tu aplicación segura es tan importante como configurarla correctamente. Sigue estas recomendaciones:

### Gestión de credenciales

- **Rota el Client Secret periódicamente**: Genera un nuevo Client Secret cada 6 meses desde Google Cloud Console.
- **No compartas credenciales por canales no seguros**: Nunca envíes tu Client Secret por correo electrónico, WhatsApp o mensajes de texto.
- **Usa cuentas de servicio para automatización**: Si necesitas acceso server-to-server, considera usar cuentas de servicio de Google en lugar de OAuth.
- **Almacena las credenciales de forma segura**: Usa un gestor de contraseñas empresarial para guardar Client ID y Client Secret.

### Monitoreo y auditoría

- **Revisa los registros de actividad**: Google Cloud Console ofrece registros de auditoría para rastrear el uso de APIs.
- **Monitorea el cuota de uso**: Cada API tiene límites de uso que puedes monitorear desde el panel de APIs.
- **Configura alertas**: Puedes configurar notificaciones para cuando te acerques a los límites de uso de las APIs.

### Cumplimiento y privacidad

- **Mantén tu política de privacidad actualizada**: Debe reflejar exactamente cómo manejas los datos de los usuarios.
- **Implementa procesos de eliminación de datos**: Tus usuarios deben poder solicitar la eliminación de sus datos en cualquier momento.
- **Documenta tu procesamiento de datos**: Mantén un registro de qué datos recopilas, cómo los usas y con quién los compartes.
- **Cumple con GDPR y regulaciones locales**: Si tienes usuarios en Europa, asegúrate de cumplir con el Reglamento General de Protección de Datos.

### Revocación de acceso de usuarios

Si necesitas revocar el acceso de un usuario específico:

1. El usuario puede revocar el acceso desde su cuenta de Google: **Seguridad → Aplicaciones de terceros con acceso a tu cuenta**.
2. Como administrador, puedes ir a **Google Cloud Console → APIs & Services → Credenciales** y regenerar el Client Secret para forzar que todos los usuarios se reconecten.
3. También puedes gestionar usuarios desde la sección **Audiencia** en la pantalla de consentimiento OAuth.

---

## Integración con Meta Business Manager para revendedores

Como revendedor de E-SMART360, es importante entender cómo se relaciona tu aplicación de Google con la infraestructura de Meta Business Manager para WhatsApp Business API.

### ¿Qué es Meta Business Manager?

Meta Business Manager es el centro de control donde se gestionan todos los activos digitales de tu negocio, incluyendo:

- Páginas de Facebook
- Cuentas de Instagram
- Cuentas publicitarias
- **Cuentas de WhatsApp Business (WABA)**
- Roles y permisos de usuarios

### ¿Cómo se relaciona con tu aplicación de Google?

Aunque la aplicación de Google se configura de forma independiente, ambas integraciones trabajan juntas en E-SMART360:

1. **Google App** → Se encarga de la autenticación y acceso a datos de Google (Sheets, Contacts, Calendar).
2. **Meta Business Manager** → Gestiona los números de teléfono y la infraestructura de mensajería de WhatsApp.
3. **E-SMART360** → Actúa como el puente entre ambas, permitiendo que los datos de Google se usen en flujos de WhatsApp.

### Cuentas de WhatsApp Business (WABA)

Cada WhatsApp Business Account puede gestionar:

- Hasta **25 números de teléfono** (para cuentas verificadas)
- Hasta **250 plantillas de mensajes**
- Diferentes departamentos, servicios o ubicaciones a través de números separados


> Si planeas usar la integración de Google Sheets para enviar mensajes masivos, asegúrate de que tu cuenta de WhatsApp Business esté verificada en Meta Business Manager para acceder a mayores límites de mensajería y funcionalidades completas.

### Tipos de cuentas de WhatsApp Business

- **Business Account (estándar)**: Muestra tu número de teléfono en la mayoría de las vistas, a menos que el cliente tenga tu contacto guardado.
- **Official Business Account (OBA)**: Muestra el nombre de tu negocio en todas las vistas e incluye una insignia de verificación verde. Requiere verificación empresarial a través de Meta.

---

## Configuración avanzada: Usar Google Sheets para flujos de chatbot

Una vez que tu aplicación de Google esté verificada y conectada, puedes aprovechar al máximo la integración creando flujos de chatbot que lean y escriban en Google Sheets en tiempo real.

### Leer datos de Google Sheets en un flujo

1. En el constructor de flujos de E-SMART360, agrega un nodo **"Leer de Google Sheets"**.
2. Selecciona la hoja de cálculo que configuraste previamente.
3. Define el rango de celdas a leer (ej. A2:C100).
4. Usa los datos leídos para personalizar mensajes con variables como `{{nombre}}`, `{{producto}}` o `{{empresa}}`.
5. El chatbot recorrerá cada fila de datos y enviará un mensaje personalizado a cada contacto.

### Escribir datos en Google Sheets desde un flujo

1. En el constructor de flujos, agrega un nodo **"Escribir en Google Sheets"**.
2. Selecciona la hoja de cálculo de destino.
3. Define qué datos escribir: respuesta del cliente, timestamp, datos capturados en la conversación.
4. Configura la fila donde se escribirá (puede ser una nueva fila al final o una fila específica).
5. El chatbot escribirá los datos automáticamente cuando se cumplan las condiciones del flujo.


> Este flujo bidireccional permite crear sistemas de gestión de clientes completamente automatizados: los datos llegan desde Google Sheets, se procesan en el chatbot, y los resultados se escriben de vuelta en la misma hoja para su análisis.

---

## Glosario de términos

| Término | Definición |
|---|---|
| **OAuth 2.0** | Protocolo de autorización que permite a aplicaciones acceder a datos de usuario sin compartir contraseñas |
| **Client ID** | Identificador público de tu aplicación OAuth, no es secreto |
| **Client Secret** | Clave secreta de tu aplicación OAuth, no debe compartirse |
| **Scope (Alcance)** | Permiso específico que tu aplicación solicita (ej. leer hojas de cálculo) |
| **Redirect URI** | URL a la que Google redirige después de que un usuario autoriza tu aplicación |
| **Consent Screen** | Pantalla que muestra a los usuarios los permisos que tu aplicación solicita |
| **WABA** | WhatsApp Business Account, la cuenta que vincula tu negocio con la API de WhatsApp |
| **Meta Business Manager** | Centro de administración de Meta para gestionar activos empresariales |
| **OBA** | Official Business Account, cuenta verificada con insignia verde en WhatsApp |
| **API** | Interfaz de programación que permite a aplicaciones comunicarse entre sí |

---


> **Historial de cambios (2026-05-06)**
> - Documento original creado para el ecosistema E-SMART360
- Incluye contenido complementario sobre integración práctica de Google Sheets, casos de uso empresarial y flujos de importación de contactos
- Se agregaron secciones de solución de problemas, preguntas frecuentes ampliadas y buenas prácticas de mantenimiento
