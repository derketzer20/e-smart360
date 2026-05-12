---
title: "Indicadores de Escritura en WhatsApp Cloud API: Mejora la Experiencia en Tiempo Real"
description: "Aprende cómo activar y usar los indicadores de escritura en WhatsApp Cloud API para simular interacciones humanas con tus clientes. Guía completa con configuración paso a paso para bots y asistentes de IA en E-SMART360."
section: "integracion"
order: 228
audience: ["developer"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "indicadores-de-escritura-en-whatsapp-cloud-api-esmart360"
canonicalGroup: "indicadores-de-escritura-en-whatsapp-cloud-api-mejora-la-experiencia-en-tiempo-real"
tags: ["integracion"]
staging: true
---
# Indicadores de Escritura en WhatsApp Cloud API: Mejora la Experiencia en Tiempo Real

<Update title="Novedad: Indicadores de escritura en WhatsApp Cloud API" date="22 de abril de 2025" />

**Nueva funcionalidad: Indicadores de Escritura en WhatsApp Cloud API — mejora la interacción en tiempo real**

Meta ha lanzado una potente funcionalidad de experiencia de usuario para desarrolladores y empresas que utilizan la **WhatsApp Cloud API**: los **Indicadores de Escritura** (Typing Indicators). Esta mejora permite simular una interacción similar a la humana mostrando un estado de "escribiendo…" mientras se prepara una respuesta. A continuación, exploramos cómo funciona, por qué es importante y cómo implementarlo en tu chatbot o flujo de automatización de WhatsApp.


> **Disponible para todos los usuarios de WhatsApp Cloud API.** Los indicadores de escritura son compatibles tanto con bots automatizados como con agentes de chat en vivo. Solo debes activar la función desde el panel de configuración.

---

## ¿Qué es la Funcionalidad de Indicador de Escritura?

El **Indicador de Escritura** permite que tu cuenta de WhatsApp Business muestre un estado de "escribiendo…" a los usuarios **después de recibir un mensaje**, brindando una experiencia de chat más natural y atractiva. Es ideal para agentes de soporte en vivo o bots que necesitan unos segundos para responder.

```mermaid
flowchart LR
    A[Cliente envía mensaje] --> B[Servidor recibe mensaje]
    B --> C[Activar indicador de escritura]
    C --> D[Mostrar "escribiendo..." al cliente]
    D --> E[Preparar respuesta]
    E --> F[Enviar respuesta al cliente]
    F --> G[Indicador se desactiva automáticamente]
    G --> A
```

---

## ¿Por Qué Usar Indicadores de Escritura?

- **Mejora la experiencia del usuario**: los clientes saben que su mensaje está siendo procesado.
- **Reduce las tasas de abandono**: la señal de escritura transmite capacidad de respuesta y mantiene al usuario comprometido.
- **Sensación humana**: agrega realismo a las respuestas del bot o del agente.


> **Importante:** el indicador de escritura dura un máximo de **25 segundos**, o hasta que envíes la respuesta, lo que ocurra primero. Si la respuesta tarda más de 25 segundos, el indicador se desactivará automáticamente.

---

## Cómo Usar los Indicadores de Escritura en E-SMART360

### Configuración en Respuestas del Bot

En tu **Flujo de Bot**, ahora puedes activar la opción "Mostrar escritura" para cada bloque de mensaje.


### Accede al Gestor de Bots

Ve a **Gestor de Bots → Respuestas del Bot**.
  
### Activa el indicador de escritura

Busca la opción "Mostrar escritura" y actívala.
  
### Configura el tiempo de retardo

Establece el retardo deseado en segundos (por ejemplo, 1-3 segundos). Esto simula el tiempo que el bot "piensa" antes de responder.
  
### Guarda la configuración

Guarda los cambios para que el bot simule un tiempo de respuesta natural.
  
Consejo: esto es excelente cuando quieres que el chatbot parezca estar pensando o recuperando datos antes de responder.

### Configuración en el Asistente de IA

Dentro del panel de configuración del **Asistente de IA** en **Gestor de Bots → Asistente de IA**, encontrarás la opción:


### Activar indicador de escritura en IA

Busca la opción **Activar Indicador de Escritura**. Esta configuración permite que el Asistente de IA simule escritura mientras prepara una respuesta.
  
### Funciona con respuestas de respaldo

Funciona incluso cuando la IA está configurada como respaldo o manejando todas las consultas.
  
### Combínalo con retardos de respuesta

Puedes usar esta opción junto con los retardos para suavizar los tiempos de generación prolongados.
  

> **Ideal para mejorar la experiencia de usuario** cuando la IA necesita tiempo para procesar intenciones o memoria contextual. Un retardo de 1-2 segundos combinado con el indicador de escritura crea una experiencia mucho más natural que una respuesta instantánea que "no se siente humana".

---

## Mejores Prácticas para el Uso de Indicadores de Escritura



### ✅ Recomendado

- Retardo de 1-3 segundos para respuestas de bot simples
    - Activar indicador para consultas que requieren búsqueda en base de datos
    - Usar con IA cuando procesa contexto o múltiples intenciones
    - Combinar con retardos en mensajes de seguimiento automáticos
  
### ❌ No Recomendado

- Retardos superiores a 5 segundos en respuestas simples
    - Activar indicador cuando no hay demora real (resta naturalidad)
    - Usar junto con retardos en mensajes de solo texto
    - Desactivar completamente el indicador en todos los escenarios
  
---

## ¿Cómo funciona técnicamente el Indicador de Escritura?

El indicador de escritura utiliza el endpoint `POST /{{phone-number-id}}/messages` de la WhatsApp Cloud API con el tipo de mensaje `action` y el campo `action` establecido en `typing_on` o `typing_off`. Cuando activas esta función en tu bot, la plataforma envía automáticamente estas señales a la API en los momentos adecuados.

### Comportamiento técnico



### typing_on

Señal que indica al cliente que el bot o agente está escribiendo. Se envía inmediatamente después de recibir el mensaje del cliente si el indicador está activado. La duración máxima es de 25 segundos, tras los cuales se desactiva automáticamente si no se envía una respuesta.
  
### typing_off

Señal que detiene el indicador de escritura. Se envía automáticamente al enviar la respuesta al cliente. También puedes enviarlo manualmente si necesitas detener el indicador sin enviar una respuesta.
  
> **Límites de la API:** la WhatsApp Cloud API permite enviar señales de escritura con una frecuencia razonable. No se recomienda enviar typing_on y typing_off en ciclos rápidos, ya que esto podría resultar en una mala experiencia para el usuario y potencialmente ser marcado como comportamiento anómalo por Meta.

---

## Guía Completa de Configuración Paso a Paso

### Paso 1: Accede al panel de bots


### Inicia sesión en E-SMART360

Accede a tu panel de control con tus credenciales. Una vez dentro, verás el menú principal con todas las secciones disponibles.
  
### Navega al Gestor de Bots

En el menú lateral, busca y haz clic en **Gestor de Bots**. Esta sección centraliza todas las configuraciones relacionadas con tus chatbots.
  
### Selecciona el bot o flujo a configurar

Puedes tener múltiples bots y flujos. Selecciona aquel al que deseas agregar el indicador de escritura.
  
### Configura el indicador por bloque de mensaje

Dentro del flujo, cada bloque de mensaje tiene su propia configuración de indicador de escritura. Actívalo donde tenga sentido, no en todos los bloques.
  
### Prueba la configuración

Envía un mensaje de prueba desde otro número de WhatsApp para verificar que el indicador de escritura se muestra correctamente antes de implementarlo con clientes reales.
  
### Paso 2: Configura el Asistente de IA

El Asistente de IA de E-SMART360 puede entrenarse con FAQs, URLs y archivos para proporcionar respuestas precisas y contextuales. El indicador de escritura es especialmente útil aquí porque la IA necesita tiempo para procesar la consulta y generar una respuesta coherente.


### Ve a Configuración del Asistente de IA

Navega a **Gestor de Bots → Asistente de IA**.
  
### Activa el indicador de escritura

Localiza la opción **Activar Indicador de Escritura** y actívala. Esta configuración permite que el Asistente de IA simule escritura mientras prepara una respuesta.
  
### Elige el modo de operación de la IA

Selecciona si la IA manejará **todas las consultas** o actuará solo como **respaldo** cuando las reglas predefinidas no encuentren coincidencia.
  
### Ajusta el retardo de respuesta

Define un retardo de 1 a 5 segundos para dar tiempo a que la IA procese la información y genere una respuesta adecuada.
  
### Guarda y prueba

Guarda la configuración y realiza pruebas para verificar que el indicador de escritura y las respuestas de IA funcionan correctamente.
  
---

## Entrenamiento del Asistente de IA para Respuestas con Indicador de Escritura

El rendimiento del indicador de escritura está directamente relacionado con la calidad y velocidad del entrenamiento de tu Asistente de IA. Un asistente bien entrenado genera respuestas más rápido, lo que permite retardos más cortos y una mejor experiencia general.

### Cómo entrenar tu Asistente de IA


### Crea una campaña de entrenamiento

Ve a **Panel de Control → Configuración → Campaña de Entrenamiento de IA**. Haz clic en **Crear** para iniciar una nueva campaña. Ingresa un nombre y un mensaje de inicio para definir el rol y tono del bot.
  
### Entrena con FAQs

Las FAQs son ideales para respuestas rápidas y estructuradas. Son más eficientes en consumo de tokens y generan respuestas más rápidas, lo que permite retardos de solo 1-2 segundos en el indicador de escritura.
  
### Entrena con URLs

Si tu negocio tiene información en páginas web (términos, políticas, precios), puedes entrenar al asistente extrayendo contenido directamente desde la URL. La velocidad de respuesta dependerá de la cantidad de contenido extraído.
  
### Entrena con archivos

Sube archivos PDF, Word o TXT con información relevante de tu negocio. El asistente procesará el contenido y podrá responder preguntas basadas en esa información. El indicador de escritura será más notable aquí, ya que el procesamiento de archivos grandes puede tomar más tiempo.
  

> **Optimización de velocidad:** para que el indicador de escritura funcione de manera óptima, entrena a tu asistente con FAQs estructuradas en lugar de respuestas completas (raw response). Las FAQs se procesan más rápido y permiten retardos más cortos, mejorando la experiencia del usuario.

---

## Configuración de Respuestas Sin Coincidencia y su Relación con el Indicador

Cuando un cliente envía un mensaje que no coincide con ninguna regla predefinida en tu bot, puedes configurar una respuesta de "sin coincidencia" que puede incluir el indicador de escritura.


### Configuración de respuesta sin coincidencia con indicador de escritura

Para configurar una respuesta cuando el bot no encuentra coincidencia:
  
  1. Ve a **Gestor de Bots → Botones de Acción → Sin Coincidencia**
  2. Selecciona **Respuesta de IA** como tipo de respuesta
  3. Vincula la campaña de entrenamiento de IA que quieres utilizar
  4. Activa **Respuesta Sin Coincidencia** en la configuración
  5. Activa el **Indicador de Escritura** para que el bot muestre "escribiendo..." mientras la IA procesa la consulta
  6. Guarda la configuración

---

## Estrategias Avanzadas con Indicadores de Escritura

### 1. Secuencias de Ventas con Sensación Humana

Cuando configures secuencias de ventas automatizadas en WhatsApp, el indicador de escritura marca la diferencia entre una interacción robótica y una conversación genuina. Por ejemplo, en una secuencia de seguimiento:



### Sin indicador

El cliente pregunta por el precio de un producto. Inmediatamente recibe la respuesta: "El precio es $25". La interacción se siente mecánica y fría.
  
### Con indicador activado

El cliente pregunta por el precio. Aparece "escribiendo..." durante 2 segundos. Luego recibe: "¡Gracias por tu interés! El precio de este producto es $25. ¿Te gustaría conocer más detalles o realizar tu pedido ahora mismo?" La experiencia se siente más personal y atenta.
  
### 2. Atención al Cliente con Transiciones Suaves

Cuando un chatbot necesita transferir una conversación a un agente humano, el indicador de escritura puede mantener al cliente informado mientras se realiza la transición.


### El bot recibe la solicitud de transferencia

El cliente solicita hablar con un agente humano.
  
### Se activa el indicador de escritura

El bot muestra "escribiendo..." durante 2-3 segundos mientras procesa la transferencia.
  
### Se envía mensaje de transición

El bot envía: "Entendido, te transferiré con un agente especializado. Por favor, espera un momento."
  
### Asignación al equipo de soporte

El chat se asigna al agente disponible, quien ya tiene el contexto de la conversación.
  
### 3. Respuestas Automáticas con Datos Personalizados

Cuando utilizas datos de Google Sheets para personalizar respuestas, el indicador de escritura es especialmente útil porque el bot necesita tiempo para consultar la información.


### Ejemplo práctico: consulta de saldo

**Escenario:** Un cliente escribe "¿Cuál es mi saldo actual?"
  
  1. El bot recibe el mensaje
  2. Activa el indicador de escritura (3 segundos)
  3. Consulta el saldo en la base de datos mediante la integración con Google Sheets
  4. Responde: "Hola Juan, tu saldo actual es de $1,250. ¿Necesitas algo más?"

---

## Integración con el Chat en Vivo y Bandeja Compartida

Los indicadores de escritura no solo mejoran la experiencia con bots, sino también en el **Chat en Vivo** y la **Bandeja Compartida** para equipos de soporte.

### Cómo se integra con el flujo de atención al cliente



### Agente escribiendo

Cuando un agente humano está redactando una respuesta en la Bandeja Compartida, el indicador de escritura se muestra automáticamente al cliente, indicando que su mensaje está siendo atendido.
  
### Recordatorios de seguimiento

La función de **Recordatorio de Seguimiento** te permite programar recordatorios para responder a clientes. Combinado con indicadores de escritura, cuando retomas una conversación pendiente, el cliente ve que estás "escribiendo" y sabe que recibirá atención.
  
### Asignación de agentes

Cuando un chat se asigna a un agente específico, este puede activar el indicador de escritura al comenzar a atender, incluso si el bot ya había respondido previamente con sus propios indicadores.
  
---

## Preguntas Frecuentes


### ¿Cuánto dura el indicador de escritura en WhatsApp Cloud API?

El indicador de escritura dura un máximo de **25 segundos**, o hasta que se envíe la respuesta, lo que ocurra primero. Si necesitas más tiempo, puedes reactivar el indicador periódicamente mientras el bot o agente prepara la respuesta. Sin embargo, lo recomendable es mantener las respuestas dentro de los 25 segundos para una experiencia óptima.

### ¿El indicador de escritura consume más recursos de la API?

El envío del indicador de escritura es una llamada ligera a la API de WhatsApp Cloud API. Su impacto en los límites de mensajería es mínimo, pero cada activación cuenta como una interacción. Se recomienda usarlo estratégicamente y no en cada interacción si tienes límites de mensajería ajustados.

### ¿Se puede desactivar el indicador de escritura para mensajes específicos?

Sí. En el panel de configuración de E-SMART360, puedes activar o desactivar el indicador de escritura por bloque de mensaje en tu flujo de bot. Esto te permite tener control granular: activarlo solo en respuestas que requieren procesamiento y desactivarlo en mensajes instantáneos como confirmaciones rápidas.

### ¿Funciona el indicador con todos los tipos de mensaje?

Sí, el indicador de escritura funciona con todos los tipos de mensaje compatibles con WhatsApp Cloud API: texto, imágenes, videos, documentos, plantillas, listas, botones CTA y mensajes interactivos. Se activa igual independientemente del tipo de respuesta que el bot vaya a enviar.

### ¿El indicador de escritura funciona si la IA está configurada como respaldo?

Sí, funciona en ambos modos: cuando la IA maneja todas las consultas y cuando la IA actúa solo como respaldo cuando las reglas predefinidas no encuentran coincidencia. La configuración del indicador en el Asistente de IA es independiente del modo de operación.

### ¿Pueden ver los agentes humanos que el bot está 'escribiendo'?

No, el indicador de escritura solo es visible para el cliente final que está conversando. Los agentes humanos en la Bandeja Compartida no ven el indicador del bot, pero sí ven el estado de "escribiendo" de otros agentes humanos en la misma conversación.

---

## Casos de Uso Prácticos



### 🛒 E-commerce: Consultas de inventario

Un cliente pregunta: "¿Tienen este producto en talla M?"
    
    - El bot activa el indicador de escritura (2 segundos)
    - Consulta el inventario en tiempo real mediante la integración con WooCommerce o Shopify
    - Responde: "Sí, tenemos la talla M disponible en 3 colores. ¿Te gustaría ver las opciones?"
    
    El indicador de escritura hace que el cliente espere con la seguridad de que su consulta está siendo procesada, reduciendo la probabilidad de que abandone la conversación.
  
### 🏥 Salud: Verificación de citas

Un paciente escribe: "Necesito confirmar mi cita del jueves"
    
    - El bot activa el indicador de escritura (3 segundos)
    - Consulta el sistema de citas mediante la API de Google Calendar
    - Responde: "Hola María, tienes una cita confirmada para el jueves 15 a las 10:00 AM con el Dr. García. ¿Necesitas reprogramarla?"
    
    La pausa natural con el indicador de escritura transmite que el bot está verificando la información, no solo generando una respuesta genérica.
  
### 🏦 Finanzas: Consulta de movimientos

Un cliente escribe: "Muéstrame mis últimos movimientos"
    
    Configuración recomendada: retardo de 3-4 segundos con indicador activado. El tiempo de consulta a la base de datos financiera justifica la espera y el indicador de escritura evita que el cliente piense que el chat se ha congelado.
  
### 🎓 Educación: Información de cursos

Un estudiante pregunta: "¿Cuándo inicia el próximo curso de marketing digital?"
    
    El bot consulta el calendario académico mediante integración HTTP API y responde con los detalles. El indicador de escritura de 2 segundos hace que la experiencia sea fluida y profesional.
  
---

## Configuración Recomendada Según el Tipo de Respuesta

| Tipo de Respuesta | ¿Activar Indicador? | Retardo Recomendado | Motivo |
|---|---|---|---|
| Confirmación rápida ("Sí", "Gracias") | No | 0 seg | Respuesta inmediata no requiere pausa |
| Respuesta de bot con datos estáticos | Sí | 1-2 seg | Simula procesamiento de información |
| Consulta a base de datos / Google Sheets | Sí | 2-3 seg | Tiempo de consulta justifica la espera |
| Respuesta de IA Generativa | Sí | 2-5 seg | La generación de contenido toma tiempo |
| Transferencia a agente humano | Sí | 2-3 seg | Prepara al cliente para la transición |
| Mensajes broadcast o masivos | No | 0 seg | No hay interacción en tiempo real |


> **Resumen:** los indicadores de escritura son una herramienta sencilla pero poderosa para humanizar tus automatizaciones en WhatsApp. Combínalos con retardos estratégicos y verás una mejora notable en la percepción de tus clientes. Recuerda que la clave está en el equilibrio: ni respuestas demasiado instantáneas que parezcan robóticas, ni esperas excesivas que frustren al usuario.

---

## Integración con el Chat en Vivo y Bandeja Compartida

El indicador de escritura también juega un papel importante en el **Chat en Vivo** y la **Bandeja Compartida** para equipos de soporte. Cuando varios agentes atienden conversaciones simultáneamente, el indicador ayuda a coordinar quién está respondiendo y evita respuestas duplicadas.

### Funcionalidades del Chat en Vivo relacionadas con el indicador



### Asignación de agentes

Cuando asignas un agente a un chat específico, ese agente puede ver qué otros agentes están escribiendo en el mismo chat. Esto evita que dos agentes respondan al mismo cliente simultáneamente. El indicador de escritura del bot se desactiva automáticamente cuando un agente humano toma el control de la conversación.
  
### Notificaciones de seguimiento

La función de **Recordatorio de Seguimiento** te permite programar una hora para responder a un cliente. Cuando ese momento llega y retomas la conversación, el indicador de escritura se activa para que el cliente sepa que estás respondiendo. Esto es especialmente útil para clientes que han contactado fuera del horario laboral.
  
### Cómo gestionar la transición bot-agente humano


### El bot atiende la consulta inicial

El bot responde automáticamente con indicador de escritura activado. El cliente experimenta una respuesta rápida y natural.
  
### El cliente solicita atención humana

Cuando el cliente pide hablar con un agente humano (por ejemplo, "Necesito hablar con una persona"), el bot detecta la intención.
  
### El bot transfiere la conversación

El bot activa el indicador de escritura, envía un mensaje de transición y asigna automáticamente el chat a un agente disponible.
  
### El agente humano toma el control

El agente ve el historial completo de la conversación y puede continuar desde donde el bot se detuvo. El indicador de escritura del bot se desactiva y ahora refleja el estado del agente humano.
  
### El agente puede pausar o reanudar respuestas del bot

Durante la atención manual, el agente puede pausar las respuestas automáticas del bot para evitar interferencias, y reanudarlas cuando finalice la atención.
  
---

## Solución de Problemas Comunes


### El indicador de escritura no se muestra

**Posibles causas y soluciones:**
  
  1. **Configuración desactivada:** verifica que hayas activado el indicador de escritura tanto en el flujo del bot como en el Asistente de IA.
  2. **Límite de 25 segundos:** si la respuesta tarda más de 25 segundos, el indicador se desactivará automáticamente. Optimiza tus respuestas para que se generen más rápido.
  3. **Problemas de conexión:** verifica que tu conexión a internet y la API de WhatsApp Cloud API estén funcionando correctamente.
  4. **Versión de API desactualizada:** asegúrate de estar usando una versión compatible de la API. Los indicadores de escritura están disponibles en versiones recientes de la WhatsApp Cloud API.
  5. **Número no verificado:** si tu número de WhatsApp no está verificado correctamente, algunas funciones pueden no estar disponibles.

### El indicador de escritura parpadea o aparece y desaparece rápidamente

Esto puede ocurrir si hay un conflicto entre la configuración del bot y del Asistente de IA. Por ejemplo, si el bot tiene una respuesta inmediata configurada y el Asistente de IA también intenta activar el indicador. Revisa ambas configuraciones y asegúrate de que no haya duplicidad. Se recomienda usar el indicador de escritura solo en una capa (bot O asistente de IA), no en ambas simultáneamente.

### El bot responde demasiado lento incluso sin indicador de escritura

**Posibles causas:**
  
  - El bot está configurado con un retardo excesivo (más de 5 segundos)
  - El Asistente de IA tiene una campaña de entrenamiento muy grande que tarda en procesar
  - Hay problemas de conectividad entre E-SMART360 y la API de WhatsApp
  - El servidor tiene alta demanda en ese momento
  
  **Soluciones:** reduce el retardo a 1-2 segundos, optimiza tus campañas de entrenamiento de IA y verifica tu conexión a internet.

### Error 130472: el número del usuario es parte de un experimento

Este error de WhatsApp indica que el número de teléfono del destinatario está participando en un experimento de Meta. No está relacionado directamente con el indicador de escritura, pero puede afectar la entrega de mensajes. Si ves este error, verifica el estado del número en el administrador de WhatsApp y contacta a soporte de Meta si el problema persiste.

---

## Escenarios de Implementación por Industria

### E-commerce y Retail

Cuando un cliente consulta disponibilidad de productos o estado de su pedido, el indicador de escritura es crucial para mantenerlo comprometido mientras el bot consulta el inventario o el sistema de pedidos.


### Ejemplo: Consulta de estado de pedido en WooCommerce

**Flujo completo:**
  
  1. Cliente escribe: "¿En qué va mi pedido #12345?"
  2. Bot activa indicador de escritura (2 segundos)
  3. Bot consulta el estado del pedido mediante la integración con WooCommerce
  4. Bot responde: "¡Hola! Tu pedido #12345 está actualmente en **tránsito**. La fecha estimada de entrega es el 25 de mayo. ¿Necesitas rastrear el envío o tienes alguna otra pregunta?"
  5. Si el cliente necesita más detalles, el bot puede transferir la conversación a un agente humano
  
  **Sin indicador de escritura:** el cliente envía el mensaje y recibe una respuesta instantánea que puede parecer genérica, reduciendo la confianza en que el bot realmente consultó su pedido específico.

### Servicios Financieros

Las consultas financieras requieren precisión y suelen involucrar datos sensibles. El indicador de escritura añade una capa de profesionalismo.



### 💰 Consulta de saldo

**Configuración ideal:** retardo de 2-3 segundos con indicador activado.
    
    **Flujo:**
    1. Cliente: "¿Cuál es mi saldo?"
    2. Bot activa indicador (3 segundos)
    3. Bot consulta API bancaria
    4. Bot responde: "Tu saldo actual es de $5,432. Los últimos movimientos son: ..."
    
    La pausa natural con el indicador hace que el cliente sienta que la información es verificada en tiempo real.
  
### 📊 Historial de transacciones

**Configuración ideal:** retardo de 3-4 segundos con indicador activado.
    
    **Flujo:**
    1. Cliente: "Quiero ver mis transacciones de este mes"
    2. Bot activa indicador (3 segundos)
    3. Bot consulta API financiera
    4. Bot responde con resumen y ofrece detalles
    
    Las transacciones financieras pueden tardar en recuperarse; el indicador evita que el cliente sospeche que el bot no está procesando su solicitud.
  
### Salud

En el sector salud, la confianza y la precisión son fundamentales. El indicador de escritura ayuda a transmitir que el bot está verificando cuidadosamente la información antes de responder.


### Paciente envía consulta médica básica

"¿Cuáles son los horarios de consulta del Dr. Martínez?"
  
### Bot activa indicador de escritura

2 segundos de indicador mientras consulta la base de datos de horarios.
  
### Bot responde con información verificada

"El Dr. Martínez atiende los lunes, miércoles y viernes de 9:00 AM a 2:00 PM. ¿Te gustaría agendar una cita?"
  
### Ofrece agendar cita

Si el paciente acepta, el bot puede usar WhatsApp Flows para recoger los datos necesarios y agendar la cita automáticamente.
  
### Educación

Las instituciones educativas pueden usar el indicador de escritura para que los estudiantes sientan que sus consultas académicas son atendidas con seriedad.



### 📚 Consulta de calificaciones

**Flujo:**
    1. Estudiante: "¿Qué nota saqué en el examen final?"
    2. Bot activa indicador (2 segundos)
    3. Bot consulta sistema académico
    4. Bot responde: "Tu calificación en el examen final de Matemáticas es 85/100. ¡Buen trabajo!"
    
    El indicador de escritura da tiempo para que el bot acceda al sistema de calificaciones sin que parezca una respuesta automatizada genérica.
  
### 📅 Información de cursos

**Flujo:**
    1. Estudiante: "¿Cuándo empieza el próximo curso de programación?"
    2. Bot activa indicador (2 segundos)
    3. Bot consulta calendario académico
    4. Bot responde con fechas y requisitos
  
---

## Uso del Indicador de Escritura con Bots de Palabras Clave

Si has configurado un bot basado en palabras clave, el indicador de escritura se comporta de manera ligeramente diferente. Cuando el usuario escribe una palabra clave específica, el bot reconoce la intención casi instantáneamente, por lo que el indicador puede ser más corto (1 segundo) o incluso omitirse.

### Cuándo activar el indicador en bots de palabras clave


### Recomendaciones para bots de palabras clave

**Activar indicador (1 segundo):**
  - Cuando la palabra clave activa una secuencia de varios mensajes
  - Cuando la palabra clave requiere confirmación antes de ejecutar una acción
  - Cuando la palabra clave activa una integración externa (Zapier, webhook, etc.)
  
  **No activar indicador:**
  - Cuando la palabra clave solo devuelve un mensaje de texto corto
  - Cuando la palabra clave es un comando de navegación ("menú", "volver", "ayuda")
  - Cuando la palabra clave activa una respuesta inmediata sin procesamiento adicional

---

## Automatización de Respuestas con el Indicador de Escritura en Secuencias

Las secuencias automáticas de seguimiento pueden beneficiarse del indicador de escritura para crear una experiencia más natural. Por ejemplo, en una secuencia de ventas:


### Ejemplo de secuencia de ventas con indicadores de escritura

**Paso 1:** El cliente muestra interés en un producto
  
  - Bot responde inmediatamente (sin indicador): "¡Excelente elección! Te cuento más sobre este producto."
  
  **Paso 2 (2 horas después):** El bot envía un seguimiento automático
  
  - El bot activa el indicador de escritura (2 segundos)
  - Bot envía: "Hola de nuevo, quería saber si tienes alguna duda adicional sobre el producto que viste ayer. ¡Estoy aquí para ayudarte!"
  
  **Paso 3 (24 horas después):** Último seguimiento
  
  - El bot activa el indicador de escritura (3 segundos)
  - Bot envía: "Como último recordatorio, hoy es el último día de nuestro descuento especial. ¿Te gustaría aprovecharlo?"
  
  El uso estratégico del indicador de escritura en los seguimientos hace que cada mensaje se sienta personal y no como un envío masivo automatizado.

---

## Preguntas Frecuentes Adicionales


### ¿Puedo usar el indicador de escritura con mensajes broadcast o campañas masivas?

No, el indicador de escritura solo funciona en conversaciones uno a uno dentro de la ventana de 24 horas. Los mensajes broadcast o campañas masivas no activan el indicador de escritura, ya que no hay una interacción en tiempo real. Para campañas masivas, WhatsApp utiliza otros mecanismos de entrega que no incluyen indicadores de escritura.

### ¿El indicador de escritura afecta la calificación de calidad de mi número de WhatsApp?

No directamente. El indicador de escritura es una característica de experiencia de usuario que no afecta los algoritmos de calificación de calidad de WhatsApp. Sin embargo, mejorar la experiencia del usuario puede reducir indirectamente los bloqueos y reportes de spam, lo que a su vez puede mejorar tu calificación de calidad. Recuerda que la calificación de calidad se basa en factores como la tasa de bloqueos, reportes y la relación de conversaciones iniciadas vs. respondidas.

### ¿Puedo tener diferentes configuraciones de indicador para diferentes canales (WhatsApp, Instagram, Messenger)?

Sí. E-SMART360 te permite configurar los indicadores de escritura de forma independiente para cada canal. Esto es útil porque los tiempos de respuesta esperados pueden variar entre plataformas. Por ejemplo, en WhatsApp los usuarios esperan respuestas más rápidas (1-2 segundos de indicador), mientras que en Instagram o Facebook Messenger pueden tolerar esperas ligeramente mayores (2-4 segundos). Configura cada canal según las expectativas de sus usuarios.

### ¿El indicador de escritura funciona si uso la Bandeja Compartida Multicanal?

Sí, funciona perfectamente con la Bandeja Compartida Multicanal que integra WhatsApp, Instagram y Facebook Messenger en una sola interfaz. Cuando un agente humano está atendiendo un chat a través de la Bandeja Compartida, el indicador de escritura se muestra automáticamente al cliente, independientemente del canal desde el que se haya contactado. Esto asegura una experiencia uniforme en todos los canales.

### ¿Cómo afecta el indicador de escritura al consumo de tokens de IA?

El indicador de escritura en sí mismo no consume tokens de IA, ya que es una señal separada que se envía a la API de WhatsApp. Sin embargo, el tiempo que el indicador está activo puede influir en cómo el usuario interactúa: si el indicador es muy largo (más de 5 segundos), el usuario podría enviar otro mensaje antes de recibir la respuesta, lo que obligaría a la IA a procesar información adicional y consumir más tokens. Por eso se recomienda mantener retardos cortos (1-3 segundos).

---

## Conclusión

Los indicadores de escritura son una característica relativamente simple de implementar, pero su impacto en la experiencia del usuario es significativo. Al simular una pausa natural antes de responder, humanizan la interacción con chatbots y asistentes de IA, haciendo que los clientes se sientan escuchados y atendidos.

**Puntos clave para recordar:**
- El indicador dura máximo 25 segundos
- Actívalo estratégicamente, no en todas las respuestas
- Combínalo con retardos de 1-3 segundos para una experiencia natural
- Úsalo tanto en bots como en Asistentes de IA
- En la Bandeja Compartida, ayuda a coordinar respuestas entre agentes
- Cada canal (WhatsApp, Instagram, Messenger) puede tener su propia configuración


> **¿Listo para implementarlo?** Activa los indicadores de escritura en tu panel de E-SMART360 y comienza a ofrecer una experiencia de chat más humana y profesional a tus clientes. La diferencia es notable desde el primer mensaje.
