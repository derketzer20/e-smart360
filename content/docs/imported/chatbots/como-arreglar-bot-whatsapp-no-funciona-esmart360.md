---
title: "Cómo Arreglar un Bot de WhatsApp que No Funciona"
description: "Guía completa paso a paso para solucionar problemas con tu bot de WhatsApp en E-SMART360: configuración de webhook, suscripción de eventos, errores de pago, diagnóstico de mensajes fallidos y mantenimiento preventivo."
section: "chatbots-omnicanal"
order: 155
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "como-arreglar-bot-whatsapp-no-funciona-esmart360"
canonicalGroup: "como-arreglar-un-bot-de-whatsapp-que-no-funciona"
tags: ["chatbots-omnicanal", "chatbots"]
staging: true
---
> **Actualización importante (2026-05-08)**
> Se han agregado nuevos pasos para diagnosticar mensajes fallidos usando la bandeja de entrada y el informe de campañas. Los eventos `smb_app_state_sync` y `smb_message_echoes` son ahora obligatorios para todas las cuentas nuevas.

> Si tu bot de WhatsApp no responde a los mensajes, el problema más común es una configuración incorrecta del webhook o eventos no suscritos en el Panel de Meta Developers. Sigue esta guía completa para diagnosticar y resolver el problema rápidamente.

## ¿Por qué mi bot de WhatsApp no funciona?

Hay múltiples razones por las que un bot de WhatsApp puede dejar de funcionar. Antes de entrar en soluciones detalladas, es importante entender las causas más frecuentes:



### 🔗 Problemas de conexión

- Webhook mal configurado o URL incorrecta
- Token de verificación no coincide
- Eventos no suscritos en Meta Developers
- Token de acceso expirado
- El servidor webhook no es accesible públicamente

### 💳 Problemas de facturación

- Método de pago no agregado en Meta WhatsApp Manager
- Business Manager no verificado
- Datos fiscales incompletos
- WhatsApp Manager suspendido
- Límite de gasto alcanzado

### 📊 Problemas de límites

- Límite de mensajes diarios alcanzado
- Calidad de cuenta baja (más bloqueos que respuestas)
- Rate limiting por exceso de envíos
- Cuenta en revisión por Meta

### ⚙️ Problemas de configuración

- Plantilla de mensaje rechazada
- Número de teléfono no registrado correctamente
- Webhook timeout (respuesta lenta del servidor)
- API version desactualizada

## Sección 1: Configurar el Webhook Correctamente

El webhook es el mecanismo mediante el cual Meta se comunica con tu plataforma E-SMART360. Cada vez que un usuario envía un mensaje a tu número de WhatsApp, Meta envía una notificación HTTP a tu webhook. Si esta comunicación falla, tu bot simplemente no responde.


> Un webhook es una URL pública en tu servidor que recibe datos en tiempo real cuando ocurre un evento. En el caso de WhatsApp Business API, cada mensaje entrante, actualización de estado o notificación se envía como una solicitud POST a tu webhook. Sin un webhook funcional, el bot es como un teléfono descolgado: no escucha ni responde.

### 1.1 Acceder a Meta Developer Dashboard

El primer paso es acceder al panel de desarrolladores de Meta donde configuras tu aplicación de WhatsApp.


### Inicia sesión en Meta Developers

Ve a developers.facebook.com e inicia sesión con la cuenta de Facebook que administra tu negocio. Esta debe ser la misma cuenta que usaste para crear tu aplicación de WhatsApp Business.

### Selecciona tu aplicación

En el panel superior derecho, selecciona la aplicación de WhatsApp que creaste para tu negocio. Si tienes varias, elige la que está vinculada al número de teléfono que usas en E-SMART360.


> Si no ves ninguna aplicación, ve a **Mis aplicaciones** y busca entre las aplicaciones creadas. Si aún no has creado una, consulta nuestra guía de cómo crear una aplicación en Meta Developers.

### Navega a WhatsApp Configuration

En el menú lateral izquierdo, busca y haz clic en **WhatsApp**, luego en la pestaña **Configuration**. Aquí es donde verás todos los ajustes de conexión: la URL del webhook, el token de verificación y los eventos suscritos.

### 1.2 Ingresar la URL del Webhook Correcta


### Obtén tu URL de webhook desde E-SMART360

Dentro de tu panel de E-SMART360, navega a **Configuración → Canales → WhatsApp → Webhook**. Allí encontrarás una URL similar a esta:

```
https://tudominio.com/webhook/whatsapp-webhook
```


> Cada cuenta tiene una URL de webhook única. No uses la URL de otra cuenta ni tampoco inventes una. La URL debe terminar específicamente en /webhook/whatsapp-webhook o la ruta que E-SMART360 te indique.

### Copia la URL en Meta Developers

En el panel de Meta Developers, dentro de **WhatsApp → Configuration**, busca el campo **Callback URL**. Pega allí la URL que copiaste de E-SMART360.

### Ingresa el token de verificación

En el campo **Verify Token**, ingresa exactamente:

```
8450385012773603920
```


> El token de verificación es sensible a mayúsculas y minúsculas. Un solo carácter diferente hará que la verificación falle. Si en E-SMART360 ves un token diferente, usa ese en lugar del ejemplo.

### Haz clic en Verify and Save

Presiona el botón **Verify and Save**. Meta intentará contactar a tu webhook usando el token que ingresaste. Si la URL es accesible y el token coincide, verás un mensaje verde de éxito.

Si aparece un error, las causas posibles son:
- La URL no es accesible públicamente (no uses localhost ni IPs privadas)
- El token no coincide exactamente
- El servidor webhook no está corriendo
- El certificado SSL es inválido o expiró
- Hay un firewall bloqueando las solicitudes de Meta

### 1.3 Solucionar problemas de verificación del webhook

Si la verificación falla, aquí tienes las soluciones para cada caso:


### Error: URL not reachable

Meta no puede contactar tu servidor. Posibles causas:

1. **Tu servidor está caído**: Verifica que tu servidor esté funcionando y accesible.
2. **Firewall bloqueando**: Asegúrate de que las IPs de Meta no estén bloqueadas.
3. **SSL inválido**: Meta solo acepta URLs HTTPS con certificados SSL válidos. No uses HTTP.
4. **DNS incorrecto**: Verifica que tu dominio apunte al servidor correcto.

Para probar si tu webhook es accesible, puedes usar herramientas como curl:
```bash
curl -X GET "https://tudominio.com/webhook/whatsapp-webhook?hub.mode=subscribe&hub.verify_token=8450385012773603920&hub.challenge=test123"
```
Si recibes una respuesta con el challenge, tu webhook es accesible.

### Error: Verify token does not match

El token que ingresaste en Meta no coincide con el que espera tu webhook.

1. Ve a **E-SMART360 → Configuración → WhatsApp → Webhook**.
2. Copia el token exacto que aparece allí (puede ser diferente al de ejemplo).
3. Pégalo exactamente igual en Meta Developers, respetando mayúsculas, minúsculas y caracteres especiales.
4. Vuelve a intentar la verificación.

## Sección 2: Suscribir los Eventos del Webhook

Una vez que el webhook está verificado, el siguiente paso es asegurarse de que los eventos correctos estén suscritos. Sin los eventos adecuados, tu bot puede estar configurado pero no recibir los mensajes entrantes.


> Muchos usuarios configuran la URL del webhook correctamente pero olvidan suscribir los eventos. El resultado es un bot que no responde a pesar de que todo parece estar bien en la configuración.

### 2.1 Eventos obligatorios

En la sección **Webhook Fields** de Meta Developers, asegúrate de que los siguientes eventos muestren el estado **Subscribed**:



### Eventos esenciales

- **messages** ⭐ — Recibir mensajes entrantes
- **message_echoes** ⭐ — Copia de mensajes enviados
- **message_deliveries** — Confirmaciones de entrega
- **message_reads** — Confirmaciones de lectura

### Eventos para sincronización

- **history** — Historial de conversaciones
- **smb_app_state_sync** — Sincronización de estado
- **smb_message_echoes** — Echo para Small Business API
- **message_template_status_update** — Estado de plantillas

### 2.2 Cómo suscribir eventos


### Localiza la sección Webhook Fields

En la página **WhatsApp → Configuration**, baja hasta **Webhook Fields**. Allí verás una lista de eventos disponibles.

### Administra los eventos

Haz clic en el botón **Manage** que está al lado de **Webhook Fields**. Se abrirá una ventana con todos los eventos disponibles.

### Activa los eventos necesarios

Busca cada uno de estos eventos y actívalos:

- `messages`
- `message_echoes`
- `message_deliveries`
- `message_reads`
- `history`
- `smb_app_state_sync`
- `smb_message_echoes`
- `message_template_status_update`
- `account_alerts`
- `account_review_update`


> Después de activarlos, vuelve a la página de Configuration y verifica que cada uno aparezca como "Subscribed" con un indicador verde.

### 2.3 ¿Qué hace cada evento?


### Explicación detallada de cada evento

- **messages**: Se activa cuando un usuario te envía un mensaje. Sin este evento, el bot no sabe que alguien le escribió.
- **message_echoes**: Meta envía una copia de cada mensaje que tu bot envía. Útil para tracking y registro.
- **message_deliveries**: Te notifica cuándo un mensaje llega al teléfono del destinatario.
- **message_reads**: Te notifica cuándo el destinatario leyó el mensaje (doble check azul).
- **history**: Permite sincronizar el historial de conversaciones cuando conectas un número existente.
- **smb_app_state_sync**: Sincroniza el estado de la aplicación con Meta, asegurando que el bot esté activo.
- **smb_message_echoes**: Similar a message_echoes pero específico para cuentas Small Business API.
- **message_template_status_update**: Te alerta si una plantilla de mensaje es aprobada, rechazada o modificada.
- **account_alerts**: Notificaciones sobre cambios importantes en tu cuenta.
- **account_review_update**: Actualizaciones sobre el proceso de revisión de tu aplicación.

## Sección 3: Configurar el Método de Pago

Uno de los errores más frustrantes y comunes es el **Error 131042**: Message failed to send because there were one or more errors related to your payment method. Este error detiene por completo el envío de mensajes.


> Pagar tu suscripción mensual en E-SMART360 **NO cubre** las tarifas de conversación que cobra Meta. Necesitas tener un método de pago configurado directamente en **Meta WhatsApp Manager** para que los mensajes puedan enviarse. Sin este paso, tu bot estará en modo solo recibir pero no podrá responder.

### 3.1 Causas del Error 131042

1. **Método de pago no conectado**: La tarjeta de crédito no se agregó o el proceso quedó incompleto.
2. **Datos fiscales faltantes**: En países como India, necesitas ingresar el número GST después de agregar la tarjeta.
3. **Business Manager no verificado**: Meta requiere que tu empresa esté verificada para operar.
4. **WhatsApp Manager suspendido**: Por incumplimiento de políticas o actividad sospechosa.
5. **Límite de gasto alcanzado**: Revisa que no hayas superado el límite configurado.

### 3.2 Solución 1: Verificar que el método de pago esté agregado


### Abre la configuración de pagos

Ve a **Meta Business Manager → Configuración empresarial → Facturación y pagos → Cuentas**.


> Puedes usar el enlace directo de configuración de pagos si ya tienes sesión iniciada en Meta Business Manager. Solo el propietario de la cuenta puede acceder a esta sección.

### Encuentra tu WhatsApp Business Account

Dentro de la sección **Accounts**, haz clic en **WhatsApp Business Accounts**. Busca el WhatsApp Manager que coincida con el ID de negocio que ves en **E-SMART360 → Configuración → WhatsApp → Información de la cuenta**.

### Revisa si hay método de pago

Si ves **Add Payment Method**, significa que no hay ningún método configurado. Pero no hagas clic directamente ahí. En su lugar, haz clic en los tres puntos al lado y selecciona **View details**.

### Completa ambos pasos de configuración

En la página de detalles, verás dos secciones que debes completar:

1. **Add payment info**: Ingresa los datos de tu tarjeta de crédito (Visa, Mastercard, American Express).
2. **Verify tax info**: Si tu país lo requiere, completa la información fiscal (por ejemplo, GST para India, RFC para México, IVA para Argentina).


> A veces los usuarios agregan la tarjeta pero olvidan la información fiscal, y los mensajes siguen fallando. Asegúrate de que ambas secciones estén completas con el check verde.

### 3.3 Solución 2: Verificar el Business Manager

Si el método de pago está configurado pero los mensajes aún fallan, el problema puede ser que tu **Facebook Business Manager** no esté verificado.


### Accede al Security Center

Ve a **Meta Business Manager → Seguridad**. Selecciona el Business Manager correcto si tienes varios.

### Revisa el estado de verificación

Si tu empresa está verificada, verás una etiqueta **Verified** en verde. Si no, verás un botón **Start Verification**.

### Inicia el proceso de verificación

Si ves Start Verification, haz clic y sigue los pasos:

1. Sube documentos de tu empresa (registro mercantil, identificación fiscal, etc.)
2. Espera 24-48 horas mientras Meta revisa los documentos
3. Recibirás una notificación cuando la verificación esté completa


> Meta acepta: registro de empresa, licencia comercial, certificado de impuestos, identificación oficial del representante legal. Los documentos deben estar en inglés o traducidos por un traductor certificado.

### 3.4 Solución 3: WhatsApp Manager suspendido

En casos extremos, Meta puede suspender tu WhatsApp Manager por:

- Envío de mensajes masivos no solicitados (spam)
- Alto índice de bloqueos por parte de usuarios
- Incumplimiento de las políticas de Meta
- Reclamos de usuarios contra tu número


> Si tu WhatsApp Manager está suspendido, verás un mensaje de advertencia en **WhatsApp Manager**. Deberás apelar la suspensión siguiendo las instrucciones de Meta, lo cual puede tomar desde 48 horas hasta varias semanas. Durante este tiempo, tu bot no podrá enviar mensajes.

## Sección 4: Diagnosticar Mensajes Fallidos

Si tu bot funciona pero algunos mensajes no se entregan, puedes usar las herramientas de diagnóstico integradas para identificar la causa raíz.

### 4.1 Usar el informe de campañas


### Identifica un número fallido

En tu panel de E-SMART360, ve a **Transmisiones → Informes**. Abre el informe de una campaña reciente y busca números con estado **Failed** o **Fallido**.

### Confirma el número emisor

Ve a **Bandeja de entrada → Conversaciones**. Busca el número que usaste para enviar los mensajes. Verifica que sea el número correcto vinculado a tu WhatsApp Business API.

### Busca el mensaje específico

Usa el buscador en la parte superior de la bandeja de entrada. Ingresa el número del destinatario **sin el signo +** . Por ejemplo, si el número es +521234567890, busca `521234567890`.

### Revisa el código de error

Busca el mensaje en la conversación. Si no se entregó, verás un **tick rojo** junto al mensaje. Pasa el cursor sobre el tick rojo para ver el código de error.



### Errores comunes

- **131042**: Error de método de pago
- **131026**: Mensaje no entregable
- **131005**: Límite de mensajes alcanzado
- **130472**: Número inválido o bloqueado
- **130429**: Rate limiting (demasiadas solicitudes)

### Errores de plantilla

- **131047**: Plantilla rechazada
- **131048**: Plantilla en revisión
- **131049**: Categoría de plantilla incorrecta
- **132001**: Idioma no soportado
- **132015**: Componente de plantilla inválido

### Consulta el directorio oficial de Meta

Copia el código de error exacto (ej: 131042) y búscalo en el directorio oficial de códigos de error de Meta.


> Presiona Ctrl + F (Cmd + F en Mac) y pega el código de error. La página de Meta tiene una explicación detallada de cada error y las posibles soluciones.

### 4.2 Interpretar los estados de los mensajes

Cada mensaje que envías pasa por varios estados. Entenderlos te ayudará a diagnosticar problemas:



### Estados de envío

- **Enviado**: El mensaje salió de tu servidor hacia Meta.
- **Aceptado**: Meta recibió el mensaje y lo está procesando.
- **Entregado**: El mensaje llegó al teléfono del destinatario (doble check gris).
- **Leído**: El destinatario abrió el mensaje (doble check azul).
- **Fallido**: El mensaje no se pudo entregar (tick rojo).

### Causas de fallo

- **Método de pago**: Error 131042 — Revisa la Sección 3.
- **Número inválido**: El número no existe o no tiene WhatsApp.
- **Número bloqueó tu cuenta**: El usuario te bloqueó.
- **Límite alcanzado**: Superaste el límite diario de mensajes.
- **Cuenta suspendida**: WhatsApp Manager suspendido por Meta.

## Sección 5: Token de Acceso y Autenticación

El token de acceso es como la llave que permite a E-SMART360 comunicarse con la API de WhatsApp en tu nombre. Si la llave expira o es inválida, el bot no puede funcionar.

### 5.1 Token temporal vs permanente



### Token temporal

- **Duración**: 24 horas
- **Generación**: Meta Developers → WhatsApp → API Setup
- **Uso**: Pruebas y desarrollo
- **Riesgo**: Deja de funcionar cada 24 horas

### Token permanente

- **Duración**: Ilimitado (hasta que lo revoques)
- **Generación**: Meta Business Manager → Usuarios del sistema
- **Uso**: Producción
- **Ventaja**: No expira, no requiere renovación manual

### 5.2 Cómo generar un token permanente


### Crea un usuario del sistema

Ve a **Meta Business Manager → Usuarios → Usuarios del sistema → Agregar**. Dale un nombre descriptivo como WhatsApp Bot Token.

### Asigna permisos

En la sección de permisos, asigna:
- **WhatsApp Account**: Lectura y escritura
- **Apps**: Tu aplicación de WhatsApp

### Genera el token

Después de crear el usuario, ve a la sección **Tokens** y haz clic en **Generar token**. Selecciona tu aplicación de WhatsApp y los permisos necesarios.

### Configura el token en E-SMART360

Copia el token generado y pégalo en **E-SMART360 → Configuración → WhatsApp → Token de Acceso**. Guarda los cambios.


> Para entornos de producción, siempre usa un token permanente. Esto evita que el bot deje de funcionar porque el token expiró a las 2 de la mañana.

## Sección 6: Límites de Mensajes y Calidad de Cuenta

WhatsApp Business API tiene límites de mensajes que varían según la calidad de tu cuenta. Entender cómo funcionan te ayudará a evitar que tu bot se detenga inesperadamente.

### 6.1 Límites por nivel de calidad

Meta clasifica las cuentas en diferentes niveles según su calidad:



### Nivel 1 (Inicio)

- **Límite**: Hasta 1,000 conversaciones por día
- **Requisito**: Cuenta nueva o en período de prueba
- **Calificación**: Sin calificación aún

### Nivel 2 (Medio)

- **Límite**: Hasta 10,000 conversaciones por día
- **Requisito**: Calidad media durante 7 días
- **Calificación**: Verde o amarillo

### Nivel 3 (Alto)

- **Límite**: Hasta 100,000 conversaciones por día
- **Requisito**: Calidad alta durante 14 días
- **Calificación**: Verde

### 6.2 Cómo mejorar la calidad de tu cuenta


> Si tu calidad baja a Roja, Meta reducirá tu límite a solo 50 conversaciones por día. En casos extremos, tu número puede ser bloqueado permanentemente.

**Recomendaciones para mantener alta calidad:**

1. **Solo envía a usuarios que hayan dado su consentimiento**: Nunca compres listas de números aleatorios.
2. **Ofrece una opción para darse de baja**: Incluye un mensaje como Responde STOP para no recibir más mensajes.
3. **Personaliza los mensajes**: Los mensajes genéricos tienen más probabilidad de ser reportados como spam.
4. **Respeta los horarios**: No envíes mensajes fuera del horario laboral (recomendado: 8:00 AM - 8:00 PM).
5. **Mantén relevancia**: Si un usuario no interactúa, deja de enviarle promociones.


### Cómo revisar la calidad de mi cuenta

En E-SMART360, puedes ver la calidad de tu cuenta en **Configuración → WhatsApp → Calidad de cuenta**. Allí verás un indicador:

- **Verde**: Calidad buena, sin problemas
- **Amarillo**: Calidad media, revisa tus prácticas de envío
- **Rojo**: Calidad baja, riesgo de bloqueo

También puedes verlo directamente en **Meta WhatsApp Manager → Dashboard de calidad**.

### 6.3 Tipos de conversaciones y costos asociados

Es importante entender que no todas las conversaciones de WhatsApp cuestan lo mismo. Meta clasifica las conversaciones en diferentes categorías:



### Conversaciones de Marketing

- **Iniciadas por**: El negocio
- **Requiere**: Plantilla aprobada
- **Ventana**: 72 horas
- **Costo**: Tarifa completa
- **Ejemplo**: Promociones, ofertas, newsletters

### Conversaciones de Utilidad

- **Iniciadas por**: El negocio
- **Requiere**: Plantilla de utilidad aprobada
- **Ventana**: 72 horas
- **Costo**: Tarifa reducida
- **Ejemplo**: Confirmaciones de pedido, facturas, alertas de entrega

### Conversaciones de Servicio

- **Iniciadas por**: El usuario
- **Requiere**: Respuesta dentro de la ventana de 24 horas
- **Ventana**: 24 horas
- **Costo**: Tarifa más baja
- **Ejemplo**: Atención al cliente, respuestas a consultas

### Conversaciones de Autenticación

- **Iniciadas por**: El negocio
- **Requiere**: Plantilla de autenticación
- **Ventana**: 72 horas
- **Costo**: Tarifa única por código OTP
- **Ejemplo**: Códigos de verificación, autenticación de dos factores

> Siempre que sea posible, responde dentro de la ventana de servicio de 24 horas iniciada por el usuario. Las conversaciones de servicio tienen tarifas más bajas que las de marketing, y además no requieren plantillas aprobadas.

## Sección 7: Solución de Problemas Específicos

### 7.1 El bot no responde a NINGÚN mensaje

Si el bot no responde absolutamente a nada:

1. **Verifica la URL del webhook**: Sigue la Sección 1, asegúrate de que aparezca Verified en verde.
2. **Revisa eventos suscritos**: Sigue la Sección 2, especialmente `messages`.
3. **Prueba el token**: Ve a **WhatsApp → API Setup** y usa la herramienta Send Message para enviar un mensaje de prueba.
4. **Revisa los logs del servidor**: En E-SMART360, ve a **Registros → Webhook** para ver si están llegando las solicitudes de Meta.


> Puedes usar curl para verificar que Meta pueda contactar tu webhook:
```bash
curl -I "https://tudominio.com/webhook/whatsapp-webhook"
```
Si recibes un código HTTP 200, el webhook está respondiendo.

### 7.2 El bot responde pero algunos mensajes no se entregan

1. **Revisa el método de pago**: Ve a la Sección 3.
2. **Verifica que el número destino tenga WhatsApp**: No todos los números tienen WhatsApp activo.
3. **Revisa si el usuario te bloqueó**: Si un usuario te bloqueó, los mensajes fallarán silenciosamente.
4. **Revisa el límite diario**: Puede que hayas alcanzado el límite de tu plan.
5. **Verifica el tipo de conversación**: Si intentas iniciar una conversación de marketing sin una plantilla aprobada, el mensaje fallará.

### 7.3 Respuestas duplicadas

El bot envía la misma respuesta dos veces.


### Soluciones para respuestas duplicadas

1. **Implementa protección de idempotencia**: En el webhook, registra el message_id de cada solicitud y no proceses duplicados.
2. **Revisa timeouts**: Si tu servidor tarda más de 30 segundos en responder, Meta reintenta el envío causando duplicados.
3. **Verifica eventos**: Asegúrate de no tener dos webhooks configurados en la misma aplicación.
4. **Optimiza el rendimiento**: Si el servidor es lento, considera actualizar el plan de hosting o usar un servidor más rápido.

### 7.4 Error 131005: System overloaded

Este error significa que la API de WhatsApp está sobrecargada o tu cuenta alcanzó el límite.


### Cómo resolver error 131005

1. **Espera unos minutos**: El error suele ser temporal. Espera 5-10 minutos e intenta de nuevo.
2. **Reduce el volumen**: Si estás haciendo broadcasting masivo, divide los envíos en lotes más pequeños (máximo 500 mensajes por lote).
3. **Implementa backoff**: Configura tu sistema para que reintente automáticamente con retardo exponencial (esperar 1 minuto, luego 2, luego 4, etc.).
4. **Revisa tu límite**: Verifica cuál es tu límite actual en Meta WhatsApp Manager.

### 7.5 Error 131026: Message undeliverable


> Este error significa que el mensaje no pudo ser entregado al destinatario. A diferencia del 131042, este no es un problema de configuración sino del destinatario.

Causas y soluciones:

1. **Número inválido**: El número no existe en WhatsApp. Verifica el formato.
2. **Usuario bloqueó tu cuenta**: Si el usuario te bloqueó, no hay solución excepto respetar su decisión.
3. **Número apagado**: El teléfono está apagado o sin conexión. Meta reintentará automáticamente durante 30 días.
4. **WhatsApp no instalado**: El usuario no tiene WhatsApp en ese número.

### 7.6 Error 131047: Plantilla rechazada

Las plantillas de mensaje pueden ser rechazadas por Meta si no cumplen con sus políticas. Si intentas enviar un mensaje con una plantilla rechazada, verás este error.


### Razones comunes de rechazo de plantillas

1. **Falta de opción de exclusión**: Las plantillas de marketing deben incluir una forma para que el usuario se dé de baja.
2. **Lenguaje engañoso**: No uses frases como Has ganado o Última oportunidad si no son ciertas.
3. **Caracteres especiales excesivos**: Demasiados emojis, signos de exclamación o mayúsculas pueden causar rechazo.
4. **URLs acortadas**: Meta prefiere URLs completas y visibles.
5. **Contenido prohibido**: No se permiten mensajes sobre criptomonedas, apuestas, contenido para adultos, etc.

**Solución**: Revisa las razones del rechazo en Meta WhatsApp Manager, corrige el contenido y vuelve a enviar la plantilla para aprobación.

## Ejemplos Prácticos de Casos Reales



### Caso 1: Tienda de ropa online

**Problema**: El bot dejó de responder después de 3 meses funcionando bien.

**Diagnóstico**:
- Webhook: Verificado correctamente
- Eventos: Todos suscritos
- Token: Expirado (usaban token temporal)

**Solución**: Generaron un token permanente desde Meta Business Manager y lo configuraron en E-SMART360. El bot volvió a funcionar inmediatamente.

**Lección**: Siempre usa token permanente para producción. Programa recordatorios si usas token temporal.

### Caso 2: Agencia de marketing

**Problema**: Mensajes no se entregan, aparece el error 131042.

**Diagnóstico**:
- Webhook: Verificado
- Token: Válido
- Método de pago: No configurado

**Solución**: Agregaron tarjeta de crédito y verificaron el Business Manager en Meta. Tardó 48 horas. Después de eso, todos los mensajes empezaron a entregarse.

**Lección**: El error 131042 es el más común en cuentas nuevas. Configura el pago ANTES de lanzar el bot.

### Caso 3: Restaurante local

**Problema**: El bot responde muy lento, hasta 2 minutos por mensaje.

**Diagnóstico**:
- Webhook: Verificado
- Eventos: Suscritos
- Servidor: Hosting compartido de bajo rendimiento

**Solución**: Migraron a un servidor VPS con mejor rendimiento. El tiempo de respuesta bajó a menos de 2 segundos.

**Lección**: El rendimiento del servidor afecta directamente la experiencia del bot.

### Caso 4: Empresa de servicios financieros

**Problema**: Después de una campaña masiva, el bot dejó de funcionar.

**Diagnóstico**:
- Límite diario: Alcanzado (enviaron 15,000 mensajes en una hora)
- Calidad de cuenta: Bajó a amarilla
- WhatsApp Manager: En revisión por spam

**Solución**: Esperaron 24 horas para que se restableciera el límite y espaciaron los envíos en lotes de 500 cada 10 minutos. La calidad volvió a verde después de 7 días.

**Lección**: No envíes grandes volúmenes de una sola vez
a la vez. Divide siempre en lotes y respeta los límites de tu plan.

## Preguntas Frecuentes


### ¿Por qué mi bot de WhatsApp dejó de funcionar de repente si antes funcionaba bien?

Las causas más comunes de fallo repentino son:

1. **Token expirado**: Si usas un token temporal, expira cada 24 horas. Solución: genera un token permanente (Sección 5).
2. **Método de pago**: La tarjeta de crédito pudo haber expirado o ser rechazada. Solución: verifica en Meta Business Manager (Sección 3).
3. **Cambios en el webhook**: Si cambiaste de servidor o dominio, la URL del webhook puede haber cambiado. Solución: actualiza la URL en Meta Developers (Sección 1).
4. **Límite de mensajes**: Si hiciste una campaña grande, pudiste alcanzar el límite diario. Solución: espera 24 horas.
5. **Problemas con el servidor**: Tu servidor puede estar caído o tener problemas de conexión. Solución: revisa los logs del servidor.

### ¿Cuánto tiempo tarda en reflejarse un cambio en la configuración del webhook?

Los cambios en la URL del webhook, token de verificación o eventos suscritos se reflejan **inmediatamente** después de hacer clic en Verify and Save o después de guardar los cambios en los eventos. No hay tiempo de propagación. Si después de guardar sigues viendo problemas, refresca la página de Configuration y verifica que los cambios se hayan aplicado correctamente.

### ¿Qué hago si mi bot responde pero con mucho retraso (más de 10 segundos)?

El retraso en las respuestas generalmente se debe a:

1. **Servidor lento**: Si usas hosting compartido, considera migrar a un VPS o servidor dedicado.
2. **Webhook timeout**: Meta espera una respuesta en menos de 30 segundos. Si tu servidor tarda más, Meta reintenta causando duplicados.
3. **Código ineficiente**: Revisa la lógica de tu bot. Consultas lentas a bases de datos o llamadas a APIs externas pueden ralentizar la respuesta.
4. **Alto volumen**: Si estás procesando muchos mensajes simultáneamente, el servidor puede saturarse.

La solución ideal es optimizar el código del bot, usar caché para respuestas frecuentes y escalar el servidor si es necesario. E-SMART360 recomienda un tiempo de respuesta inferior a 2 segundos para una experiencia óptima.

### ¿Puedo usar el mismo webhook para varias cuentas de WhatsApp?

No. Cada cuenta de WhatsApp Business API necesita su propia URL de webhook exclusiva. Si usas la misma URL para varias cuentas, los mensajes se mezclarán y el bot no podrá identificar correctamente de qué cuenta proviene cada mensaje. En E-SMART360 puedes gestionar múltiples cuentas desde un solo panel, y cada una tendrá su webhook único asignado automáticamente.

### ¿Qué significa el error Account suspended y cómo lo resuelvo?

El error Account Suspended significa que Meta suspendió tu WhatsApp Manager. Las causas comunes son:

1. **Spam**: Envío de mensajes no solicitados en masa.
2. **Alto índice de bloqueos**: Más del 5% de los usuarios bloquean tu número.
3. **Incumplimiento de políticas**: Contenido prohibido o prácticas engañosas.
4. **Múltiples quejas**: Usuarios reportan tu número como spam.

Para resolverlo:

1. Ve a **Meta WhatsApp Manager** y busca el mensaje de suspensión.
2. Lee los motivos específicos de la suspensión.
3. Prepara una apelación explicando las medidas correctivas que tomarás.
4. Envía la apelación desde el panel. Meta responderá en 48 horas a 2 semanas.
5. Mientras tanto, considera usar un número de respaldo si tienes uno.

### ¿Cómo calcula Meta las tarifas de conversación?

Meta cobra por **conversación**, no por mensaje individual. Una conversación es una ventana de 24 horas (servicio) o 72 horas (marketing/utilidad/autenticación) que se abre cuando:

- **Marketing**: El negocio envía el primer mensaje usando una plantilla de marketing.
- **Utilidad**: El negocio envía el primer mensaje usando una plantilla de utilidad.
- **Servicio**: El usuario envía el primer mensaje.
- **Autenticación**: El negocio envía un código de autenticación.

Dentro de esa ventana, todos los mensajes que se intercambien pertenecen a la misma conversación y solo se cobra una tarifa. Las tarifas varían según el país del destinatario y el tipo de conversación. Puedes ver las tarifas actualizadas en el sitio oficial de Meta.

## Resumen y Checklist Final

Antes de contactar a soporte, verifica esta lista:

- [ ] La URL del webhook está verificada en Meta Developers
- [ ] El token de verificación coincide exactamente
- [ ] Los eventos `messages`, `message_echoes`, `message_deliveries` están suscritos
- [ ] El método de pago está configurado en Meta WhatsApp Manager
- [ ] El Business Manager está verificado
- [ ] El token de acceso es permanente (no temporal)
- [ ] El servidor webhook responde en menos de 30 segundos
- [ ] No has alcanzado el límite diario de mensajes
- [ ] La calidad de la cuenta está en verde o amarillo
- [ ] Las plantillas de mensaje están aprobadas por Meta


> Si todos los puntos están verificados y tu bot sigue sin funcionar, contacta a nuestro equipo de soporte en E-SMART360. Incluye una captura de pantalla de la configuración del webhook y el código de error exacto que aparece en los mensajes fallidos.

---

*¿Te fue útil esta guía? En E-SMART360 estamos comprometidos con ayudarte a mantener tu bot de WhatsApp funcionando sin problemas. Si tienes más preguntas, no dudes en consultar nuestra documentación o contactar a nuestro equipo de soporte.*
