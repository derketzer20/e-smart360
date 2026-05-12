---
title: "Transferencia de Chat al Cliente mediante Unirse al Chat y Mensaje de Firma"
description: "Aprende a gestionar transferencias de conversaciones entre agentes usando Unirse al Chat y Mensajes de Firma en el chat en vivo de E-SMART360. Guía completa con configuración paso a paso, casos de uso, mejores prácticas y ejemplos prácticos para equipos de soporte multicanal."
section: "chatbots-omnicanal"
order: 269
audience: ["cliente"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "transferencia-chat-cliente-via-unirse-chat-mensaje-firma-esmart360"
canonicalGroup: "transferencia-de-chat-al-cliente-mediante-unirse-al-chat-y-mensaje-de-firma"
tags: ["chatbots-omnicanal", "chatbots"]
staging: true
---
> El chat en vivo de E-SMART360 introduce las funcionalidades **Unirse al Chat** y **Mensaje de Firma** para hacer que el soporte al cliente en equipo sea más rápido, claro y profesional. Unirse al Chat permite a los agentes tomar el control de conversaciones activas de forma fluida, mientras que los Mensajes de Firma notifican al cliente cuando un nuevo agente se suma, garantizando transparencia y responsabilidad en cada interacción.

## Visión General

"Unirse al Chat" y "Mensaje de Firma" son dos potentes funcionalidades del chat en vivo de E-SMART360 diseñadas para mejorar el trabajo en equipo, aumentar la eficiencia del soporte al cliente y asegurar transiciones de comunicación fluidas. Estas funciones permiten a los miembros del equipo unirse o abandonar conversaciones de manera organizada, manteniendo un registro claro de quién atiende cada interacción y cuándo ocurren los cambios.

En una **bandeja compartida de equipo**, donde múltiples agentes colaboran para gestionar conversaciones provenientes de WhatsApp, Facebook Messenger, Instagram, Telegram y Chat Web, estas funciones juegan un papel crucial para mantener la profesionalidad y la consistencia. Cuando un agente se une a un chat, los demás pueden ver quién se ha incorporado, lo que permite una colaboración sin fricciones y evita que dos agentes respondan al mismo cliente simultáneamente.


> Activar la función de Mensaje de Firma también habilita la opción **Unirse al Chat**, garantizando que solo los agentes que se hayan unido a la conversación puedan responder mensajes del cliente. Sin unirse, los agentes pueden ver pero no responder directamente, asegurando responsabilidad y comunicación organizada.

---

## ¿Qué es el Chat en Vivo de E-SMART360?

El chat en vivo de E-SMART360 es una bandeja compartida integral que centraliza todos los canales de comunicación con el cliente en un solo lugar. Desde esta bandeja, los miembros del equipo pueden enviar y recibir mensajes, asignar etiquetas a clientes específicos y gestionar conversaciones de forma eficiente sin necesidad de cambiar entre aplicaciones.



### Canales Soportados

- **WhatsApp**: Comunicación personalizada utilizando la API oficial de WhatsApp Business
- **Facebook Messenger**: Respuestas profesionales con firmas personalizadas para cada agente
- **Instagram**: Consistencia de marca en los mensajes directos de Instagram
- **Telegram**: Interacciones mejoradas con firmas personalizadas por agente
- **Chat Web**: Toque profesional en el soporte en tiempo real de tu sitio web

### Beneficios Clave de la Bandeja Compartida

- Centraliza todas las conversaciones en un solo panel de control
- Los agentes pueden ver quién está atendiendo cada chat en tiempo real
- Historial completo de transferencias entre agentes con marcas de tiempo
- Notificaciones automáticas al cliente cuando cambia de agente
- Seguimiento de responsabilidad en cada interacción
- Asignación de etiquetas y campos personalizados para organizar clientes

### Estructura del Panel de Chat en Vivo

El panel de chat en vivo de E-SMART360 está dividido en tres secciones principales que trabajan en conjunto para ofrecer una experiencia de soporte completa.

**1. Sección de Lista de Suscriptores**

Aquí es donde ves todos tus suscriptores de todos los canales. Esta sección incluye:

- **Barra de búsqueda**: Localiza rápidamente un suscriptor por su nombre o número de teléfono
- **Búsqueda avanzada con filtros**: Ordena suscriptores por **Etiquetas** (selecciona una etiqueta del menú desplegable para ver solo los suscriptores con esa etiqueta) o por **Secuencias** (filtra por secuencias de mensajes automatizados a las que están suscritos)
- **Ordenación de resultados**: Puedes ordenar por **Respuesta reciente del suscriptor** (muestra los suscriptores que te han respondido recientemente) o **Comunicación reciente** (muestra los suscriptores a los que has respondido recientemente)
- **Vistas predefinidas**: Para gestionar la bandeja compartida, las vistas incluyen **Míos** (chats asignados al agente actual), **Todos los chats** (todas las conversaciones del equipo), **No leídos**, **Archivados**, **Bloqueados** y **Resueltos**

**2. Sección de Ventana de Chat**

Es aquí donde chateas directamente con los clientes. Las funcionalidades incluyen:

- **Marcar y gestionar chats**: Marca cualquier chat como no leído o archívalo para referencia futura
- **Recordatorio de seguimiento**: Programa una hora para responder a un cliente cuando no puedes hacerlo de inmediato
- **Traducir mensajes**: Traduce mensajes al idioma de tu preferencia con un solo clic
- **Enviar Mensajes de Firma**: Antes de unirte a un chat, marca la opción de enviar una firma para que el cliente sepa qué agente lo está atendiendo
- **Reescribir con IA**: Mejora la gramática y el tono de tus mensajes automáticamente
- **Enviar Flows o Plantillas**: Envía secuencias predefinidas de mensajes o flujos de bot directamente desde el chat
- **Respuestas Preparadas**: Usa respuestas predefinidas para preguntas frecuentes o escenarios comunes
- **Compartir archivos adjuntos**: Arrastra y suelta múltiples archivos simultáneamente

**3. Sección de Acciones del Chat**

Esta sección te ayuda a gestionar conversaciones y colaborar con tu equipo:

- **Botón de Acción**: Suscribir o cancelar suscripción de clientes, pausar o reanudar respuestas del bot, restablecer flujos de entrada de usuario, borrar el historial del chat y abandonar el chat
- **Asignar un agente**: Asigna un agente específico a un suscriptor; el agente recibe una notificación automática de la asignación
- **Añadir etiquetas**: Las etiquetas funcionan como categorías para organizar a los clientes; puedes añadir múltiples etiquetas si es necesario
- **Campos personalizados**: Recopila datos esenciales del cliente para proporcionar una asistencia más personalizada y contextual
- **Añadir notas internas**: Guarda información importante sobre el cliente que otros agentes puedan necesitar durante una transferencia
- **Verificar la ventana de 24 horas**: Un contador regresivo muestra cuánto tiempo tienes para responder antes de que el chat se cierre según la política de chat abierto de WhatsApp

### Funcionamiento de la Colaboración en la Bandeja Compartida

La función de colaboración en equipo de E-SMART360 permite asignar agentes específicos para gestionar clientes particulares. Esto es especialmente útil cuando:

- Se necesita un seguimiento especializado para ciertos clientes
- Los clientes VIP deben tener un agente dedicado
- Se requiere distribución equitativa de la carga de trabajo entre los miembros del equipo
- Los agentes tienen diferentes habilidades lingüísticas o conocimientos técnicos

Las vistas disponibles facilitan la organización del trabajo en equipo: los agentes pueden filtrar por sus chats asignados, ver todos los chats del equipo, o enfocarse solo en conversaciones no leídas o archivadas.

---

## ¿Cómo Mejora la Función "Unirse al Chat" el Soporte al Cliente?

La función **Unirse al Chat** es un botón que un agente debe presionar para poder enviar un mensaje al cliente. Este mecanismo asegura que solo agentes autorizados respondan, manteniendo el control sobre quién interviene en cada conversación y evitando respuestas duplicadas o confusiones entre los miembros del equipo.

Al hacer clic en la opción "Unirse al Chat", el panel del chat en vivo se recarga automáticamente. Tras la recarga, el nuevo agente puede tomar el control de la conversación y comenzar a enviar mensajes al cliente. Todos los agentes en el equipo pueden ver visualmente que este agente se ha unido al chat.


> **¿Por qué es importante esta función?** En equipos de soporte con múltiples agentes, sin la función Unirse al Chat, varios agentes podrían responder al mismo cliente simultáneamente, causando confusión y una mala experiencia. Esta función garantiza que solo un agente tenga control activo sobre la conversación en cada momento.

### Flujo Completo de la Transferencia

A continuación se detalla el flujo paso a paso de cómo funciona una transferencia de conversación utilizando Unirse al Chat y Mensaje de Firma:


### El agente actual identifica la necesidad de transferencia

El agente actual detecta que la conversación requiere la intervención de otro miembro del equipo, ya sea por especialización técnica, cambio de turno o solicitud expresa del cliente. Puede tratarse de una consulta compleja, una queja que requiere escalación o simplemente una petición del cliente de hablar con otro miembro del equipo.

### El agente actual informa al cliente

Antes de realizar la transferencia, el agente actual informa al cliente que será transferido a otro agente especializado. Esta comunicación previa prepara las expectativas del cliente y evita confusiones. Por ejemplo: _"Un momento, por favor. Voy a transferirte con [nombre del nuevo agente], quien podrá ayudarte mejor con tu consulta."_

### El nuevo agente localiza la conversación

El nuevo agente revisa la bandeja compartida y localiza la conversación que debe atender. Las etiquetas y notas internas ayudan a identificar rápidamente el contexto de la consulta.

### El nuevo agente hace clic en 'Unirse al Chat'

El nuevo agente hace clic en el botón **Unirse al Chat**, visible para todos los miembros del equipo que tengan acceso a esa conversación. Este botón aparece automáticamente para cualquier agente que no esté actualmente participando en el chat.

### El panel se recarga automáticamente

Tras hacer clic en "Unirse al Chat", el panel del chat en vivo se recarga automáticamente. El nuevo agente ahora puede tomar el control de la conversación y todos los miembros del equipo pueden ver quién se ha unido.

### Se envía el Mensaje de Firma (opcional)

El nuevo agente tiene la opción de marcar la casilla **Enviar mensaje de firma al suscriptor** antes de comenzar a escribir. Esto envía un mensaje predefinido al cliente informándole que ahora está siendo atendido por un nuevo agente. El mensaje puede incluir el nombre del agente usando variables dinámicas como `[Nombre]`.

### El agente anterior puede abandonar el chat

Una vez completada la transferencia, el agente anterior puede abandonar el chat haciendo clic en la opción **Abandonar Chat**. La conversación ya no aparecerá en su lista activa, manteniendo el panel ordenado y permitiendo que el nuevo agente gestione sin confusiones.

### Casos de Uso de la Función Unirse al Chat


### Cliente solicita hablar con otro miembro del equipo

En ocasiones, los clientes piden específicamente hablar con un agente diferente. Esto puede ocurrir porque necesitan un nivel de conocimiento más profundo sobre un tema técnico, porque ya han tenido una interacción previa positiva con otro miembro del equipo, o simplemente porque sienten que su problema no está siendo comprendido. La función Unirse al Chat permite realizar esta transición de forma inmediata y profesional, sin que el cliente tenga que repetir su problema desde el principio. El nuevo agente recibe el contexto completo de la conversación, lo que acelera la resolución y mejora la experiencia del cliente.

### Cliente frustrado que necesita una nueva perspectiva

Cuando un cliente está molesto y el agente actual no ha podido resolver el problema, la situación puede volverse tensa. La frustración del cliente puede aumentar si siente que el agente no puede ayudarle. En estos casos, transferir la conversación a un nuevo agente permite un "reinicio" en la comunicación. El nuevo agente llega con una mentalidad fresca y puede abordar el problema desde otro ángulo. El cliente percibe que su caso está siendo tomado con seriedad al ser escalado a otro miembro del equipo, lo que mejora significativamente su experiencia. El Mensaje de Firma con el nombre del nuevo agente humaniza la transición y genera confianza.

### Escalación a un agente especializado

Ciertas consultas requieren conocimientos específicos que no todos los agentes poseen: problemas técnicos avanzados que necesita un ingeniero de soporte, cuestiones de facturación complejas que debe manejar el departamento de finanzas, o decisiones de cuenta que solo puede tomar un supervisor o gerente. Unirse al Chat permite escalar rápidamente la conversación al miembro del equipo adecuado sin pérdida de contexto ni tiempo. El agente especializado recibe el historial completo y puede comenzar a resolver desde el primer mensaje, sin necesidad de pedir al cliente que explique nuevamente su situación.

### Cambio de turno entre agentes

En equipos que trabajan por turnos (turno matutino, vespertino y nocturno), es común que un agente deba retirarse al final de su jornada laboral dejando conversaciones activas sin resolver. Unirse al Chat permite que el agente del siguiente turno tome el control de las conversaciones activas de forma ordenada, asegurando que ningún cliente quede sin respuesta durante la transición entre turnos. Esto es particularmente importante en equipos de soporte 24/7 que atienden clientes en diferentes zonas horarias.

### Manejo de múltiples canales simultáneamente

Un equipo puede tener agentes especializados por canal. Por ejemplo, un agente experto en WhatsApp pero con menos experiencia en Instagram. Cuando un cliente contacta por Instagram con una consulta compleja, el agente de Instagram puede transferir la conversación a un agente con más experiencia en la resolución de ese tipo de consultas, o bien un agente de WhatsApp puede unirse a la conversación de Instagram para ayudar. La función Unirse al Chat funciona de forma transversal en todos los canales soportados por E-SMART360.

### Manejo de picos de demanda estacionales

Durante temporadas de alta demanda como Black Friday, Cyber Monday o Navidad, el volumen de consultas puede dispararse. En estos escenarios, los agentes de otros departamentos pueden unirse temporalmente al equipo de soporte utilizando Unirse al Chat para tomar conversaciones activas, sin necesidad de configuración compleja. Al finalizar el pico de demanda, estos agentes simplemente dejan de unirse a nuevos chats, retornando a sus funciones habituales.

---

## ¿Qué es un Mensaje de Firma?

Un Mensaje de Firma es un mensaje corto predefinido que se envía automáticamente cuando un nuevo agente se une a la conversación. Este mensaje informa al cliente que ahora está comunicándose con otro miembro del equipo, garantizando una transición suave, transparente y profesional.

El nuevo agente debe seleccionar la opción **Enviar mensaje de firma al suscriptor** antes de hacer clic en Unirse al Chat. Al hacerlo, se enviará al cliente un mensaje personalizado indicando que el nuevo agente está ahora conectado con él.


> **Ejemplos de Mensajes de Firma:**
- _"Hola, soy [Nombre], agente de soporte de E-SMART360. ¿Cómo puedo ayudarte hoy?"_
- _"Buenos días, soy [Nombre] del equipo de soporte técnico especializado. Estoy aquí para resolver tu consulta."_
- _"Hola, te habla [Nombre], especialista en facturación. He revisado tu caso y vamos a solucionarlo juntos."_
- _"¡Hola! Soy [Nombre], asesor de ventas. Cuéntame, ¿qué producto te interesa?"_

### Beneficios del Mensaje de Firma



### Transparencia Total

El cliente siempre sabe qué agente lo está atendiendo en cada momento. Esto elimina la confusión de hablar con "alguien" sin saber quién es, y genera confianza al poner un nombre y un rostro a la conversación.

### Toque Personalizado

Al incluir el nombre del agente y opcionalmente su cargo o especialidad, el cliente recibe una atención más humana y personalizada. El mensaje puede adaptarse al tono de la marca para mantener la consistencia.

### Reducción de Ansiedad

Durante una transferencia, el cliente puede sentir incertidumbre sobre si su mensaje fue recibido o si lo están ignorando. El Mensaje de Firma elimina esta incertidumbre al anunciar activamente el cambio de agente.

---

## Cómo Personalizar el Mensaje de Firma

Puedes personalizar el Mensaje de Firma desde la configuración del Gestor de Bot de E-SMART360. A continuación se detalla el proceso completo paso a paso:


### Accede al Panel de Configuración

Inicia sesión en tu cuenta de E-SMART360. Desde el panel principal de control, navega hasta la sección **Gestor de Bot** y luego selecciona la pestaña **Configuración** en el menú lateral de navegación.

### Habilita los Mensajes de Firma

Dentro del panel de Configuración, localiza la sección **Configuración de Mensaje de Firma**. Activa el interruptor **Habilitar Mensaje de Firma** para activar esta funcionalidad. Al hacerlo, también se habilitará automáticamente la función Unirse al Chat.

### Define el mensaje por defecto del equipo

En el campo **Mensaje de Firma Predeterminado**, escribe el mensaje que deseas que se muestre cuando un agente se une al chat sin una firma personalizada. Por ejemplo: _"Hola, soy [Nombre], agente de soporte de E-SMART360. Estoy aquí para ayudarte."_ Utiliza el marcador dinámico **[Nombre]** para que se complete automáticamente con el nombre del agente que se une a la conversación.

### Personaliza la firma por cada agente (opcional)

Cada agente puede personalizar su propia firma individual desde su perfil de cuenta. Para ello: Haz clic en el icono de tu cuenta en la esquina superior derecha del panel. Selecciona **Configuración de Miembro** y luego ve a **Cuenta**. En el campo de firma, escribe un mensaje personalizado que puede incluir información específica como el nombre completo, cargo, departamento o un saludo especial que refleje su personalidad y estilo de comunicación.

### Configura el Indicador de Escritura (opcional)

Puedes activar el **Indicador de Escritura** en la configuración de Mensaje de Firma. Cuando está activado, muestra automáticamente "escribiendo..." en WhatsApp cuando: un agente comienza a redactar una respuesta, un agente hace clic en el chat aunque aún no haya comenzado a escribir, o el bot prepara una respuesta automática. Esto indica proactivamente al cliente que un agente está comprometido con su caso, especialmente útil durante las transferencias cuando puede haber una breve pausa entre la salida de un agente y la entrada del siguiente.

### Configura el control de respuestas del bot

Puedes deshabilitar las respuestas automáticas del bot cuando los Mensajes de Firma están activados. Esto permite interacciones exclusivamente humanas durante la transferencia, evitando que el bot envíe mensajes automáticos no deseados mientras un agente humano está gestionando activamente la conversación.

### Guarda los cambios

Después de configurar todas las opciones deseadas, haz clic en el botón **Guardar Cambios** para asegurar que tu configuración se aplique correctamente. Los cambios son efectivos de inmediato y se aplican a todas las nuevas transferencias que ocurran a partir de ese momento.


> **Importante:** Al habilitar los Mensajes de Firma, también se activa automáticamente la opción **Unirse al Chat**. Esto significa que los agentes deben unirse a una conversación antes de poder responder a los mensajes del cliente. No es posible tener Mensajes de Firma activados sin tener también Unirse al Chat activo, ya que ambas funciones están diseñadas para trabajar en conjunto y garantizar la responsabilidad en las comunicaciones. Si desactivas los Mensajes de Firma, ten en cuenta que la opción Unirse al Chat también se verá afectada.

### Personalización Avanzada del Mensaje de Firma

Además de la configuración básica, E-SMART360 ofrece opciones avanzadas para personalizar aún más los mensajes de firma y adaptarlos a las necesidades específicas de cada equipo.

**Campos Dinámicos Personalizados**

Puedes utilizar campos dinámicos como `[Nombre]`, `[Apellido]`, `[Cargo]` o `[Departamento]` en el mensaje de firma. Estos campos se auto-completan automáticamente con la información del perfil de cada agente, asegurando que cada interacción sea personalizada sin necesidad de editar manualmente cada firma. Los campos disponibles incluyen:

| Campo Dinámico | Descripción | Ejemplo de Salida |
|---------------|-------------|-------------------|
| `[Nombre]` | Nombre del agente | Carlos Mendoza |
| `[Apellido]` | Apellido del agente | Mendoza |
| `[NombreCompleto]` | Nombre completo del agente | Carlos Mendoza García |
| `[Cargo]` | Cargo o puesto del agente | Supervisor de Soporte |
| `[Departamento]` | Departamento al que pertenece | Facturación |
| `[Email]` | Correo electrónico del agente | c.mendoza@miempresa.com |

**Múltiples Plantillas de Firma por Tipo de Interacción**

Para equipos con diferentes departamentos o tipos de interacción, es posible crear múltiples plantillas de firma:

| Tipo de Interacción | Ejemplo de Firma Personalizada |
|---------------------|-------------------------------|
| Soporte Técnico | _"Hola, soy [Nombre] del equipo de soporte técnico. He revisado tu caso y voy a ayudarte a resolverlo."_ |
| Ventas y Atención Comercial | _"¡Hola! Soy [Nombre], asesor de ventas de E-SMART360. Cuéntame, ¿qué producto o servicio te interesa?"_ |
| Facturación y Cobros | _"Buen día, soy [Nombre] del departamento de facturación. Revisemos juntos los detalles de tu consulta."_ |
| Postventa y Satisfacción | _"Hola [Cliente], soy [Nombre] de atención postventa. ¿Cómo ha sido tu experiencia con nuestro servicio?"_ |
| Gerencia o Supervisión | _"Hola, soy [Nombre], supervisor del equipo. He tomado personalmente tu caso para darte una solución."_ |

---

## Funcionalidades Adicionales Relacionadas

### Indicador de Escritura

El indicador de escritura es una funcionalidad complementaria que mejora la experiencia del cliente durante las transferencias. Cuando está activado, el cliente ve "escribiendo..." en WhatsApp tan pronto como:

- Un agente comienza a redactar una respuesta
- Un agente hace clic en el chat (incluso antes de comenzar a escribir)
- El bot de E-SMART360 prepara una respuesta para el cliente

Esta funcionalidad es especialmente valiosa durante las transferencias porque indica al cliente que alguien está atendiendo su caso, reduciendo la ansiedad durante la breve pausa entre la transferencia del agente anterior y la respuesta del nuevo agente.

### Traducción de Mensajes en Tiempo Real

Dentro del panel de chat, los agentes pueden hacer clic en el botón **Traducir** debajo de cualquier mensaje para traducirlo al idioma de su preferencia. Esta función es invaluable para equipos internacionales que atienden clientes en múltiples idiomas, permitiendo que la transferencia entre agentes incluya la traducción automática del historial de la conversación. Los idiomas soportados incluyen español, inglés, portugués, francés, alemán, italiano y muchos más.

### Reescribir con IA

E-SMART360 incluye la opción de **Reescribir con IA** que permite a los agentes redactar un mensaje y luego mejorarlo automáticamente. Esta herramienta corrige errores gramaticales, mejora el tono profesional y ajusta la claridad del mensaje. Es particularmente útil en el primer mensaje que envía un agente después de una transferencia, ya que ayuda a causar una buena impresión desde el primer momento.

### Temporizador de Reactivación Automática

Puedes configurar un temporizador de reactivación automática del bot para asegurar seguimientos oportunos con los clientes. Si un agente finaliza su intervención y abandona el chat, el bot puede reactivarse después de un período determinado para continuar con la automatización. Por ejemplo, si el cliente no responde en 5 minutos después de la transferencia, el bot puede enviar un mensaje de seguimiento automático preguntando si necesita ayuda adicional.

### Respuestas Preparadas

E-SMART360 permite crear un banco de respuestas preparadas que los agentes pueden utilizar durante las conversaciones. Estas respuestas son particularmente útiles durante las transferencias porque permiten al nuevo agente enviar rápidamente mensajes predefinidos como:

- _"Gracias por esperar. He revisado tu caso y estoy listo para ayudarte."_
- _"Soy [Nombre], el nuevo agente asignado. Continúo con la gestión de tu caso."_
- _"Antes de continuar, déjame confirmar los datos de tu consulta..."_

---

## Probando tu Mensaje de Firma

Antes de implementar la configuración en tu equipo de producción, es recomendable realizar pruebas para verificar que todo funciona correctamente:


### Inicia sesión con dos cuentas de agente

Abre el panel de E-SMART360 en dos sesiones de navegador diferentes o en dos pestañas de incógnito. Inicia sesión con la cuenta del agente A en una y con la cuenta del agente B en la otra.

### El agente A inicia una conversación

El agente A localiza un cliente de prueba en la bandeja compartida y comienza una conversación normal, enviando algunos mensajes para establecer contexto.

### El agente B localiza la conversación

El agente B revisa la bandeja compartida, encuentra la conversación activa del agente A y verifica que el botón **Unirse al Chat** está visible.

### El agente B se une al chat con firma

El agente B hace clic en "Unirse al Chat", activa la opción "Enviar mensaje de firma al suscriptor" y confirma. Verifica que el panel se recarga correctamente.

### Verifica el mensaje de firma

El agente B verifica que el cliente recibe el mensaje de firma con el nombre correcto del agente B. Si se usaron variables dinámicas, confirma que se reemplazaron correctamente.

### El agente A abandona el chat

El agente A hace clic en "Abandonar Chat" y verifica que la conversación desaparece de su lista de chats activos.

### Repite la prueba con firmas personalizadas

Configura una firma personalizada para el agente B desde su perfil de cuenta y repite la prueba para verificar que la firma personalizada prevalece sobre la firma por defecto del equipo.


> Realiza pruebas con varios agentes para asegurarte de que las firmas personalizadas de cada miembro del equipo se muestren correctamente. También verifica que el indicador de escritura funcione en los dispositivos de los clientes durante el proceso de transferencia. Si tu equipo atiende en varios idiomas, prueba la traducción de mensajes durante el proceso de transferencia.

---

## Mejores Prácticas para Transferencias de Chat Exitosas



### Comunicación Clara

- Informa siempre al cliente antes de transferirlo a otro agente
- Explica brevemente por qué se realiza la transferencia
- Menciona el nombre del nuevo agente si es posible
- Asegúrate de que el Mensaje de Firma incluya nombre y rol del agente
- Usa un tono amable y tranquilizador durante la transición
- Evita jerga técnica que el cliente pueda no entender
- Pregunta al cliente si está de acuerdo con la transferencia antes de realizarla

### Contexto Completo

- Revisa el historial completo de la conversación antes de unirte
- Lee las notas internas que otros agentes hayan añadido
- No hagas que el cliente repita su problema desde el principio
- Usa los campos personalizados para mantener contexto adicional sobre el cliente
- Si es necesario, añade una nota interna detallada para el nuevo agente
- Incluye en las notas el nivel de satisfacción del cliente y cualquier promesa hecha

### Seguimiento Posterior

- El agente original puede hacer un seguimiento breve para asegurar la satisfacción del cliente
- Usa las notas internas para dejar instrucciones claras y detalladas
- Verifica que el cliente haya recibido correctamente el Mensaje de Firma
- Confirma que el nuevo agente tiene acceso a toda la información necesaria antes de retirarte
- Realiza una breve reunión post-turno si hubo transferencias complejas durante el día
- Documenta los casos de transferencia para mejorar los protocolos del equipo

### Optimización del Equipo

- Define claramente los roles y especialidades de cada agente en el equipo
- Establece protocolos escritos sobre cuándo y cómo transferir una conversación
- Capacita a todo el equipo en el uso correcto de Unirse al Chat y Mensajes de Firma
- Revisa periódicamente el registro de transferencias para identificar patrones y áreas de mejora
- Solicita feedback a los clientes después de las transferencias para medir la satisfacción
- Ajusta las plantillas de firma según el feedback recibido
- Reconoce y premia las transferencias bien ejecutadas para fomentar buenas prácticas

---

## Monitoreo y Registro de Transferencias

Una de las ventajas más importantes de la función Unirse al Chat es la capacidad de monitoreo que ofrece a los administradores del equipo.

### ¿Qué puede ver el administrador?

El administrador del equipo tiene acceso a un registro completo de todas las transferencias, que incluye:

| Información | Descripción |
|-------------|-------------|
| **Agente que transfiere** | Quién inició el proceso de transferencia y abandonó el chat |
| **Agente que recibe** | Quién se unió al chat para tomar el control de la conversación |
| **Marca de tiempo** | La hora y fecha exacta de cada acción de unión y abandono |
| **Historial cronológico** | Un registro completo de todas las interacciones y transferencias |
| **Duración de la intervención** | Cuánto tiempo cada agente estuvo activo en la conversación |
| **Canal de origen** | Si la conversación ocurrió en WhatsApp, Facebook, Instagram, Telegram o Chat Web |
| **Estado final** | Si la conversación fue resuelta, archivada o sigue activa después de la transferencia |


> **¿Sabías que...?** El registro de transferencias también puede utilizarse para evaluar el rendimiento del equipo. Por ejemplo, puedes identificar qué agentes resuelven más consultas sin necesidad de transferencia, o qué tipos de consultas requieren escalación con más frecuencia. Esta información te permite ajustar la capacitación del equipo y optimizar la asignación de recursos.

### Análisis de Métricas de Transferencia

Los administradores pueden utilizar los datos de transferencia para mejorar continuamente el servicio:

- **Tasa de transferencia por agente**: Identifica qué agentes transfieren más conversaciones y por qué
- **Tiempo promedio de transferencia**: Mide cuánto tarda un nuevo agente en unirse después de la solicitud
- **Satisfacción post-transferencia**: Correlaciona las transferencias con las calificaciones de satisfacción del cliente
- **Motivos de transferencia más comunes**: Categoriza las transferencias para identificar necesidades de capacitación
- **Canales con más transferencias**: Detecta qué canales generan más necesidad de escalación

---

## Tabla Comparativa: Con y Sin Funciones de Transferencia

Para entender mejor el valor de Unirse al Chat y Mensajes de Firma, compara la experiencia del cliente en ambos escenarios:

| Aspecto | Sin Unirse al Chat | Con Unirse al Chat y Mensaje de Firma |
|---------|-------------------|--------------------------------------|
| **Coordinación del equipo** | Varios agentes pueden responder al mismo tiempo | Solo el agente que se ha unido puede responder |
| **Experiencia del cliente** | Confusa, puede recibir respuestas de varios agentes | Clara, sabe siempre quién lo atiende |
| **Transparencia** | El cliente no sabe cuándo cambia de agente | El cliente recibe notificación con el nombre del nuevo agente |
| **Responsabilidad** | Difícil de rastrear quién atendió cada parte | Registro completo de quién atendió, cuándo y por cuánto tiempo |
| **Velocidad de resolución** | Lenta, hay que coordinar manualmente quién responde | Rápida, cualquier agente puede unirse y tomar el control al instante |
| **Satisfacción del cliente** | Menor, por la confusión y las repeticiones innecesarias | Mayor, por la transparencia y la fluidez de la comunicación |
| **Historial de auditoría** | Limitado o inexistente | Completo, con marcas de tiempo precisas |
| **Capacitación de nuevos agentes** | Curva de aprendizaje lenta sin guía clara | Los nuevos agentes pueden unirse a chats de agentes experimentados para aprender |

---

## Escenarios de Transferencia Recomendados

No todas las situaciones requieren una transferencia. A continuación se presentan los escenarios recomendados y no recomendados para usar Unirse al Chat:

### ✅ Cuándo Transferir

- **Consultas técnicas complejas**: Cuando un cliente tiene un problema que requiere conocimientos especializados que el agente actual no posee. Por ejemplo, un problema de integración de API que debe resolver un ingeniero de soporte.
- **Escalación por política**: Cuando la política de la empresa requiere que ciertas decisiones sean tomadas por un supervisor o gerente. Por ejemplo, aprobar un reembolso fuera de la política estándar.
- **Cambio de turno o relevo**: Cuando el horario laboral del agente actual termina y otro agente debe continuar con la conversación.
- **Solicitud del cliente**: Cuando el cliente pide expresamente hablar con otra persona, ya sea un supervisor, un agente específico o alguien del departamento de ventas.
- **Cliente frustrado o molesto**: Cuando la relación entre el cliente y el agente actual se ha deteriorado y un nuevo agente puede restablecer la comunicación.
- **Múltiples especialidades necesarias**: Cuando un cliente tiene una consulta que abarca varias áreas (técnica, comercial y de facturación) y cada parte debe ser atendida por el especialista correspondiente.

### ❌ Cuándo NO Transferir

- **Pereza o desinterés**: No transfieras una conversación solo porque no quieres atender al cliente. Cada agente debe esforzarse por resolver antes de transferir.
- **Falta de comunicación**: No transfieras sin informar al cliente sobre lo que está sucediendo. La falta de comunicación genera desconfianza.
- **Sin contexto**: No transfieras una conversación sin proporcionar contexto al nuevo agente a través de notas internas o campos personalizados.
- **Múltiples transferencias innecesarias**: Evita transferir a un cliente a múltiples agentes si el problema puede ser resuelto por el primero. Cada transferencia innecesaria alarga el tiempo de resolución.
- **Sin previo aviso**: No transfieras sin antes preguntar al cliente si está de acuerdo con ser transferido a otro agente.

---

## Integración con Otras Funcionalidades de E-SMART360

### Unirse al Chat y Flujos Automatizados

La función Unirse al Chat se integra perfectamente con los flujos automatizados de E-SMART360. Cuando un bot detecta que una conversación requiere intervención humana, puede marcar automáticamente el chat para que un agente se una. Por ejemplo:

1. Un cliente interactúa con un bot automatizado respondiendo preguntas frecuentes
2. El bot detecta que la consulta del cliente es demasiado compleja para responder automáticamente
3. El bot etiqueta la conversación como "Requiere agente" y la pone en la bandeja compartida
4. Un agente humano ve la etiqueta, hace clic en **Unirse al Chat** y toma el control
5. El agente envía un Mensaje de Firma personalizado: _
_Hola, soy [Nombre], agente de soporte. He visto tu consulta y estoy aquí para ayudarte personalmente."_

6. El agente resuelve la consulta con acceso al historial completo de la interacción con el bot.

Este flujo combinado de automatización e intervención humana permite manejar grandes volúmenes de consultas sin sacrificar la calidad del servicio.

### Unirse al Chat y Campañas de Marketing

Cuando se ejecuta una campaña de marketing multicanal, el volumen de consultas entrantes puede aumentar significativamente. Unirse al Chat permite:

- Distribuir las consultas entrantes de la campaña entre varios agentes del equipo
- Que un agente dedicado a la campaña se una a todas las conversaciones relacionadas
- Medir la efectividad de la campaña mediante el registro de transferencias y tiempos de respuesta
- Asignar agentes con conocimiento específico del producto o servicio promocionado

### Unirse al Chat y WhatsApp Flows

Los WhatsApp Flows de E-SMART360 permiten crear formularios interactivos dentro de WhatsApp. Cuando un cliente completa un flow y su consulta requiere seguimiento humano:

1. El flow recopila la información necesaria del cliente
2. La conversación se marca automáticamente para atención de agente
3. El agente que se une al chat tiene acceso inmediato a los datos del flow
4. El Mensaje de Firma puede incluir referencia al flow completado: _"Hola [Cliente], soy [Nombre]. Recibí la información que enviaste a través del formulario y estoy listo para ayudarte."_

---

## Ejemplos Prácticos y Casos de Uso Avanzados



### 🛒 Tienda de E-commerce - Gestión de Pedidos

**Situación:** Un cliente contacta por WhatsApp preguntando sobre el estado de su pedido. El agente de soporte inicial verifica el número de seguimiento y descubre que el paquete lleva 5 días de retraso. El cliente está visiblemente molesto y solicita hablar con un supervisor.

**Solución con E-SMART360:**
1. El agente actual responde: _"Comprendo tu frustración. Permíteme transferirte con un supervisor que podrá revisar personalmente tu caso."_
2. El supervisor localiza la conversación y hace clic en **Unirse al Chat**
3. Activa la opción **Enviar mensaje de firma**: _"Hola [Cliente], soy Carlos, supervisor del equipo de soporte. Voy a revisar personalmente tu caso y te daré una solución."_
4. El indicador de escritura se activa automáticamente, mostrando al cliente actividad inmediata
5. El supervisor revisa el historial y las notas internas para entender el contexto completo
6. El supervisor ofrece una solución concreta: reembolso parcial del 20% o envío urgente sin costo adicional
7. El cliente acepta la solución y el agente original abandona el chat tras confirmar que la transferencia fue exitosa

**Resultado:** El cliente se siente escuchado y valorado. La intervención del supervisor demuestra que la empresa se preocupa por sus clientes. El problema se resuelve en menos de 10 minutos.

### 🏥 Clínica Médica - Atención al Paciente

**Situación:** Un paciente escribe por Telegram preguntando sobre los resultados de sus análisis de laboratorio. El primer agente es personal administrativo que puede confirmar la recepción de los resultados, pero no está autorizado a interpretarlos médicamente.

**Solución con E-SMART360:**
1. El agente administrativo responde: _"Buenos días, sus resultados ya están disponibles en nuestro sistema."_
2. Explica que un profesional de la salud podrá revisarlos con él para garantizar una interpretación adecuada
3. El médico responsable localiza la conversación y hace clic en **Unirse al Chat**
4. Su mensaje de firma personalizado dice: _"Hola, soy el Dr. Martínez. He revisado tus resultados y los comentaremos juntos."_
5. El agente administrativo añade una nota interna con los datos relevantes del paciente
6. El médico ofrece una explicación detallada de los resultados y recomienda los siguientes pasos
7. El agente administrativo abandona la conversación

**Resultado:** Transición profesional y transparente que mantiene la confianza del paciente. El paciente recibe atención del profesional adecuado sin tener que repetir su historia.

### 🏢 Empresa de Software - Soporte Técnico Especializado

**Situación:** Un cliente empresarial reporta por Facebook Messenger un error crítico en el sistema de facturación que está impidiendo emitir facturas a sus propios clientes. El primer agente de soporte es de nivel básico y solo puede resolver problemas comunes.

**Solución con E-SMART360:**
1. El agente de nivel básico identifica que el problema requiere un ingeniero de soporte técnico
2. Registra una nota interna detallada con los pasos que ya intentó y los mensajes de error exactos
3. Etiqueta la conversación como "Crítico - Facturación" para priorizar la atención
4. Informa al cliente: _"He documentado tu caso y lo estoy escalando a nuestro equipo de ingeniería. Te atenderá [nombre del ingeniero]."_
5. El ingeniero de soporte hace clic en **Unirse al Chat** y su firma dice: _"Hola, soy [Nombre] del equipo de ingeniería. Ya revisé las notas y estamos trabajando en la solución."_
6. El ingeniero resuelve el problema en 20 minutos aplicando un parche temporal mientras desarrolla la solución permanente
7. El cliente queda satisfecho y el agente original abandona el chat

**Resultado:** Escalación rápida y eficiente. El cliente recibe atención del especialista correcto sin demoras innecesarias.

### 🎓 Institución Educativa - Admisiones y Matrícula

**Situación:** Un estudiante potencial contacta por Instagram preguntando sobre el proceso de admisión para un programa de maestría. El primer agente es de admisiones generales y puede proporcionar información básica, pero el estudiante tiene preguntas muy específicas sobre convalidación de estudios internacionales.

**Solución con E-SMART360:**
1. El agente de admisiones responde las preguntas generales sobre plazos y requisitos
2. Detecta que las preguntas sobre convalidación requieren al coordinador académico
3. Informa al estudiante: _"Tus preguntas sobre convalidación son muy importantes. Permíteme transferirte con el coordinador académico que es el especialista en este tema."_
4. El coordinador académico se une al chat con una firma personalizada: _"Hola, soy el coordinador académico. Con gusto resolveré todas tus dudas sobre convalidación de estudios."_
5. El coordinador proporciona información detallada y personalizada sobre el proceso de convalidación
6. El estudiante recibe toda la información que necesita y procede con su solicitud de admisión
7. El agente de admisiones abandona el chat

**Resultado:** El estudiante recibe atención especializada sin tener que buscar otro canal de contacto. La institución educativa demuestra profesionalismo y organización.

---

## Preguntas Frecuentes Adicionales


### ¿Se puede usar Unirse al Chat en todos los planes de E-SMART360?

La disponibilidad de la función Unirse al Chat y Mensajes de Firma depende del plan contratado. Generalmente está disponible en los planes que incluyen funcionalidades de bandeja compartida y chat en vivo. Consulta la página de precios de E-SMART360 para verificar la disponibilidad en tu plan específico. En los planes superiores, también están disponibles funcionalidades avanzadas como firmas personalizadas por agente y temporizador de reactivación automática.

### ¿Qué sucede si dos agentes intentan unirse al mismo chat simultáneamente?

El sistema de E-SMART360 maneja esta situación de forma inteligente. Solo el primer agente que hace clic en "Unirse al Chat" obtiene el control de la conversación. El segundo agente verá que otro miembro del equipo ya está participando y puede optar por esperar o unirse a otra conversación. Esto evita conflictos y garantiza que siempre haya un solo agente activo por conversación.

### ¿Puedo configurar diferentes Mensajes de Firma para diferentes canales?

Sí, es posible configurar mensajes de firma específicos por canal. Por ejemplo, puedes tener un tono más formal para WhatsApp empresarial y un tono más casual para Instagram. Esta configuración se realiza desde el Gestor de Bot, seleccionando el canal específico y configurando el mensaje de firma correspondiente. Cada canal puede tener su propia plantilla de firma predeterminada.

### ¿Los mensajes de firma cuentan para los límites de la ventana de 24 horas de WhatsApp?

Sí, los Mensajes de Firma enviados a través del canal de WhatsApp sí cuentan dentro de la ventana de 24 horas de conversación abierta. Es importante tener esto en cuenta para la gestión del tiempo de respuesta. E-SMART360 muestra un contador regresivo de la ventana de 24 horas en el panel de chat para que los agentes puedan monitorear el tiempo restante.

### ¿Puedo desactivar la función de Mensaje de Firma sin afectar Unirse al Chat?

No, ambas funciones están vinculadas. Al desactivar los Mensajes de Firma, también se desactiva la opción Unirse al Chat, y los agentes podrán responder sin necesidad de unirse previamente a la conversación. Esto permite un funcionamiento más libre pero con menos control sobre quién responde cada conversación. Evalúa cuidadosamente si tu equipo necesita el control adicional que proporciona Unirse al Chat antes de desactivar esta función.

### ¿Cómo afecta el Mensaje de Firma a la experiencia en el Chat Web?

En el Chat Web de E-SMART360, el Mensaje de Firma se muestra como un mensaje especial dentro de la conversación, generalmente destacado visualmente para indicar que es una notificación de sistema. El cliente puede ver claramente el nombre del nuevo agente y el mensaje de bienvenida. Esto aporta un toque profesional que mejora la percepción de la marca.

### ¿Se pueden programar transferencias automáticas basadas en reglas?

Actualmente, la transferencia mediante Unirse al Chat es un proceso manual iniciado por los agentes. Sin embargo, E-SMART360 permite configurar reglas de asignación automática basadas en etiquetas, palabras clave o capacidades del agente. Por ejemplo, si un cliente escribe "hablar con supervisor", el sistema puede asignar automáticamente la conversación a un agente con rol de supervisor, quien luego puede unirse al chat siguiendo el flujo estándar.

### ¿El historial de transferencias se puede exportar?

Sí, los administradores pueden exportar el historial de transferencias y los registros de actividad del chat en formato CSV o Excel para su análisis posterior. Esto es útil para generar reportes de productividad, auditorías de calidad o análisis de tendencias en el equipo de soporte. Los reportes exportables incluyen todas las marcas de tiempo, nombres de agentes y estados de las conversaciones.

---

## Resolución de Problemas Comunes

A continuación se presentan algunos problemas comunes que pueden surgir al utilizar Unirse al Chat y Mensajes de Firma, junto con sus soluciones:

### El botón "Unirse al Chat" no aparece

**Posibles causas y soluciones:**
- **Los Mensajes de Firma no están habilitados**: Ve a la configuración del Gestor de Bot y activa la opción **Habilitar Mensaje de Firma**
- **El agente ya está participando en la conversación**: Si el agente ya se unió al chat, el botón desaparece. Verifica si ya estás participando activamente
- **Permisos insuficientes**: El rol del agente puede no tener permisos para unirse a conversaciones. Consulta con el administrador del equipo

### El Mensaje de Firma no se envía

**Posibles causas y soluciones:**
- **La opción no fue seleccionada**: Asegúrate de marcar la casilla **Enviar mensaje de firma al suscriptor** antes de unirte al chat
- **El mensaje está vacío**: Verifica que hayas configurado un mensaje de firma en la configuración del Gestor de Bot o en tu perfil personal
- **Error temporal**: Recarga el panel e intenta nuevamente. Si el problema persiste, contacta al soporte de E-SMART360

### La variable [Nombre] no se reemplaza correctamente

**Posibles causas y soluciones:**
- **El perfil del agente está incompleto**: Verifica que el nombre del agente esté correctamente configurado en su perfil de cuenta
- **Formato incorrecto**: Asegúrate de usar el formato correcto de la variable, por ejemplo `[Nombre]` o `[#User-Name#]` según la configuración de tu sistema

---

## Conclusión

Configurar los Mensajes de Firma y utilizar la función Unirse al Chat en E-SMART360 es un proceso sencillo que mejora significativamente la comunicación y colaboración de tu equipo. Con solo unos pocos pasos, puedes garantizar profesionalismo, consistencia y un toque personal en cada interacción con el cliente. Esto es particularmente importante en una **bandeja compartida de equipo**, donde mantener un tono y una marca unificados es esencial para ofrecer una experiencia de cliente coherente.

**En resumen, estas funcionalidades te permiten:**

- **Mejorar la velocidad de resolución** de problemas del cliente mediante transferencias rápidas y organizadas entre los miembros adecuados del equipo
- **Mantener transparencia** informando al cliente sobre cada cambio de agente durante el proceso de soporte
- **Asegurar la responsabilidad** del equipo con un registro claro y auditable de quién atiende cada conversación en cada momento
- **Personalizar la experiencia** con firmas adaptadas a cada agente y a cada situación de comunicación
- **Facilitar la colaboración** entre múltiples agentes sin perder el contexto ni el historial de la conversación
- **Optimizar los recursos del equipo** distribuyendo las cargas de trabajo según las especialidades y disponibilidad de cada agente

La función Unirse al Chat es invaluable para equipos con múltiples miembros de soporte, permitiendo transiciones fluidas entre agentes mientras se mantiene el flujo de la conversación. El Mensaje de Firma mejora aún más la experiencia del cliente al mantenerlo informado sobre las transferencias entre agentes, garantizando que nunca se sienta perdido o ignorado durante el proceso.

¿Listo para configurar tu Mensaje de Firma y optimizar las transferencias de tu equipo? Inicia sesión en tu cuenta de E-SMART360 y configúralo hoy mismo para equipar a tu equipo con las mejores herramientas de colaboración en soporte al cliente.

---


> **Actualización: Indicadores de Escritura en WhatsApp Cloud API (2025-06-19)**
> Se ha añadido la funcionalidad de indicador de escritura que complementa los Mensajes de Firma. Cuando un agente hace clic en el chat o comienza a escribir, el cliente ve "escribiendo..." en WhatsApp, mejorando la experiencia durante las transferencias y reduciendo la ansiedad del cliente durante los cambios de agente.

Próximamente: integración con IA predictiva para sugerir automáticamente el mejor agente para cada transferencia basándose en el historial de conversaciones y la especialización de cada miembro del equipo.
