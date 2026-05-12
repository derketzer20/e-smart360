---
title: "Cómo Migrar tu Cuenta de WhatsApp Existente a la WhatsApp Cloud API"
description: "Guía completa para migrar tu número de teléfono de WhatsApp Messenger o WhatsApp Business App a la WhatsApp Cloud API de Meta. Incluye instrucciones paso a paso, respaldo de datos, eliminación de cuenta, verificación, configuración inicial en E-SMART360, comparativas detalladas, casos de uso y solución de problemas."
section: "integracion"
order: 102
audience: ["developer"]
platform: ["chatbots"]
useCase: []
source: "fulldoc"
sourceSlug: "004-migrar-cuenta-whatsapp-existente-a-cloud-api-esmart360"
canonicalGroup: "como-migrar-tu-cuenta-de-whatsapp-existente-a-la-whatsapp-cloud-api"
tags: ["integracion"]
staging: true
---
# Cómo Migrar tu Cuenta de WhatsApp Existente a la WhatsApp Cloud API


> **Actualización importante (3 de marzo de 2026)**
> Esta guía ha sido actualizada para reflejar los cambios más recientes en el proceso de migración de WhatsApp Cloud API de Meta. Asegúrate de seguir cada paso con atención para evitar errores comunes. La migración correcta es el primer paso para desbloquear todo el potencial de automatización y escalabilidad que ofrece la plataforma.

## Resumen

Esta guía explica cómo migrar tu número de teléfono existente a la WhatsApp Cloud API de Meta y por qué este movimiento es importante para el crecimiento de tu negocio. No se trata solo de cambiar de sistema, sino de establecer una configuración adecuada de WhatsApp Cloud API que se conecte con integraciones de CRM, integraciones de API de comercio electrónico y otras soluciones de integración de API.

Con la integración de API personalizada adecuada y los beneficios de una API unificada para integraciones B2B, las empresas pueden automatizar seguimientos, centralizar datos de clientes y convertir conversaciones en ingresos medibles.


> La WhatsApp Cloud API es la solución oficial de API alojada por Meta que permite a las empresas enviar, recibir y automatizar mensajes de WhatsApp a escala. A diferencia de la aplicación estándar de WhatsApp Business, soporta automatización, conexiones con CRM e integración de API de comercio electrónico, lo que la hace ideal para negocios en crecimiento que necesitan comunicación estructurada y un ROI medible.

## ¿Qué es la WhatsApp Cloud API y por qué tu negocio la necesita?

La WhatsApp Cloud API es la plataforma oficial de mensajería empresarial proporcionada por Meta. Está alojada directamente en los servidores de Meta (en la nube), lo que significa que no necesitas mantener servidores propios ni preocuparte por la infraestructura técnica. A diferencia de las aplicaciones móviles de WhatsApp, la Cloud API está diseñada específicamente para empresas que necesitan manejar un alto volumen de conversaciones, automatizar procesos y trabajar en equipo.

Antes de profundizar en la migración, es importante entender las diferencias entre las tres soluciones que ofrece Meta para mensajería.

### WhatsApp Messenger (App para uso personal)

WhatsApp Messenger es la aplicación original diseñada para chatear con amigos y familiares. Con más de 2 mil millones de usuarios a nivel global, es conocida por ser rápida, segura y fácil de usar.

Con WhatsApp Messenger puedes:
- Enviar mensajes privados de texto y voz
- Compartir notas de voz y archivos multimedia
- Hacer llamadas de voz y video
- Chatear en grupos de hasta 1024 participantes

Sin embargo, para uso empresarial tiene limitaciones importantes. No puedes configurar respuestas automáticas, gestionar mensajes con tu equipo ni enviar mensajes en lote. Solo funciona con un número en un teléfono. Si tienes muchos clientes, se vuelve complicado rápidamente y es muy difícil escalar.

### WhatsApp Business App (App para pequeños negocios)

La aplicación WhatsApp Business está diseñada para pequeñas y medianas empresas. Funciona como el WhatsApp normal pero incluye funciones adicionales para comunicarte con los clientes más fácilmente.

Con WhatsApp Business App puedes:
1. Crear un perfil de negocio con dirección, horario de atención y una breve descripción.
2. Usar respuestas rápidas para enviar mensajes comunes de forma más rápida.
3. Organizar tus chats con etiquetas como "nuevo cliente", "pedido completo" o "pendiente de pago".
4. Configurar mensajes automáticos para saludar a nuevos contactos o responder cuando no estás disponible.
5. Acceder a estadísticas básicas sobre mensajes enviados, entregados y leídos.

La aplicación se ve y se siente igual que WhatsApp normal, por lo que es fácil de usar. Pero sigue funcionando solo en un número de teléfono y un dispositivo. Es ideal para negocios pequeños que atienden personalmente a sus clientes. No es adecuada para equipos grandes o empresas que necesitan manejar muchos mensajes simultáneamente.

### WhatsApp Business API (Cloud API)

La WhatsApp Business API está diseñada para empresas en crecimiento y grandes organizaciones que necesitan gestionar muchos chats a la vez. No viene con su propia aplicación móvil; en su lugar, se conecta a otras herramientas como tu CRM, software de atención al cliente o plataformas como E-SMART360.

Con la API, las empresas pueden:
1. Enviar respuestas automáticas mediante chatbots inteligentes que entienden el contexto de la conversación.
2. Asignar chats a diferentes miembros del equipo con roles y permisos específicos.
3. Ejecutar campañas de mensajería a gran escala utilizando plantillas aprobadas por Meta.
4. Integrar WhatsApp con sistemas CRM, ERP y plataformas de comercio electrónico para centralizar los datos.
5. Gestionar múltiples números de teléfono desde un solo panel de control.
6. Acceder a análisis avanzados sobre el rendimiento de las conversaciones y campañas.

Para los clientes, la experiencia es la misma: los mensajes aparecen en su chat normal de WhatsApp. Pero detrás de escena, tu empresa tiene mucho más poder para organizar, automatizar y escalar la gestión de conversaciones.


> **Nota importante**: No puedes usar el mismo número de teléfono tanto para la aplicación móvil de WhatsApp Business como para la WhatsApp Cloud API. La decisión de migrar debe ser definitiva para ese número.

## Beneficios clave de migrar a WhatsApp Cloud API

Ahora que entiendes las diferencias, veamos los beneficios específicos de dar el salto a la Cloud API.

### Escalabilidad sin límites

La Cloud API permite manejar un volumen mucho mayor de mensajes que la aplicación móvil. Puedes enviar campañas masivas, automatizar respuestas y gestionar conversaciones con múltiples agentes desde una plataforma centralizada. Mientras que la aplicación móvil se vuelve inmanejable con más de 50 conversaciones diarias, la Cloud API puede manejar miles sin esfuerzo.

### Automatización inteligente

Conecta tu WhatsApp con chatbots, flujos de trabajo automatizados y sistemas CRM. Programa respuestas automáticas, envía notificaciones transaccionales y califica leads sin intervención manual. Los chatbots pueden responder a los clientes automáticamente, manejar muchos mensajes a la vez y enviar chats a los miembros del equipo adecuados. Incluso pueden detectar clientes enfadados o con urgencia y derivarlos inmediatamente a un agente humano.

### Confiabilidad oficial de Meta

Alojada directamente por Meta, la Cloud API ofrece mejor disponibilidad, menor latencia y actualizaciones automáticas. No dependes de servidores locales ni de infraestructura propia. Esto significa menos tiempo de inactividad y una experiencia más fluida tanto para tu equipo como para tus clientes.

### Integración unificada

Centraliza tus operaciones de comunicación. La Cloud API se integra con CRM, plataformas de comercio electrónico como WooCommerce y Shopify, herramientas de marketing como Google Sheets y Zapier, pasarelas de pago y mucho más, todo desde un solo panel de control.

### Capacidades exclusivas de la Cloud API

1. **Automatización de atención al cliente**: Los chatbots pueden responder preguntas comunes, recopilar leads y brindar soporte 24/7 sin intervención humana. Esto libera a tu equipo para concentrarse en tareas de mayor valor estratégico.

2. **Recorridos de conversación personalizados**: Los chatbots pueden guiar a los clientes a través de procesos complejos: reservar una cita, realizar una compra o solicitar soporte técnico, todo dentro de WhatsApp.

3. **Conversaciones enriquecidas**: Envía imágenes, videos, botones interactivos, documentos PDF, catálogos de productos y más. Las conversaciones son más dinámicas y efectivas.

4. **Ciclo completo del cliente**: Usa WhatsApp para cada etapa del recorrido del cliente: desde la captación de leads mediante anuncios Click-to-WhatsApp hasta el soporte postventa y las campañas de fidelización.

5. **Múltiples campañas simultáneas**: Inicia varias campañas de marketing o soporte al mismo tiempo. Segmenta tu audiencia y envía el mensaje correcto a la persona correcta en el momento adecuado.

6. **Integración con anuncios de Facebook e Instagram**: Convierte tus campañas publicitarias en chats instantáneos de WhatsApp con solo un clic. Esto genera más leads calificados y acelera el ciclo de ventas.

7. **Conexión con herramientas existentes**: Vincula WhatsApp con tu CRM, ERP, correo electrónico o sistema de helpdesk. Tu equipo ve todos los canales en un solo lugar.

8. **Soporte multi-idioma**: Utiliza herramientas de IA para comunicarte con clientes en su propio idioma, expandiendo tu negocio a nuevos mercados.


> **¿Sabías que...?** Los negocios que utilizan WhatsApp Cloud API a través de E-SMART360 reportan una reducción promedio del 60% en el tiempo de respuesta a clientes y un aumento del 35% en la tasa de conversión de leads en los primeros 3 meses después de la migración.

## Tabla comparativa completa

| Característica | WhatsApp Messenger | WhatsApp Business App | WhatsApp Cloud API |
|---|---|---|---|
| Propósito principal | Uso personal | Pequeños negocios locales | Empresas en crecimiento |
| Volumen de mensajes | Manual, muy limitado | Manual, moderado | Automatizado, miles/día |
| Respuestas automáticas | No | Sí, básicas | Sí, avanzadas con IA |
| Chatbots inteligentes | No | No | Sí, integración completa |
| Equipos múltiples | No (1 dispositivo) | No (1 dispositivo) | Sí, multiagente |
| Integración CRM / API | No | No | Sí, conexión vía API |
| Campañas masivas | No | No | Sí, plantillas aprobadas |
| Alojamiento | Local (teléfono) | Local (teléfono) | Nube de Meta |
| Costo | Gratuito | Gratuito | Por conversación |
| Múltiples números | No | No | Sí |
| Análisis e informes | No | Básicos | Avanzados |
| Perfil de negocio | No | Sí, básico | Sí, completo |
| Catálogo de productos | No | No | Sí |
| Automatización flujos | No | No | Sí |

## Requisitos previos antes de migrar

Antes de comenzar, asegúrate de cumplir con todos los requisitos. Una preparación adecuada evitará problemas y retrasos.

### Requisitos del número de teléfono

La elección del número es una de las decisiones más importantes. Una vez registrado en la Cloud API, el número queda bloqueado permanentemente.


> Una vez que registres tu número en la WhatsApp Cloud API, no podrás usarlo simultáneamente en WhatsApp Messenger o WhatsApp Business App. El número queda bloqueado para uso exclusivo con la Cloud API. Tampoco se puede "degradar" para volver a usarlo en las aplicaciones móviles.

**Criterios de elegibilidad:**
- **Número válido**: Debe ser real, capaz de recibir llamadas o SMS para verificación.
- **Propiedad**: Debe pertenecer a tu negocio o tener autorización para uso comercial.
- **No usado en Cloud API**: No debe haber sido registrado previamente en la WhatsApp Business API.
- **Sin números cortos**: Los códigos cortos (3-6 dígitos) no son compatibles.
- **Verificable**: Debe poder recibir llamadas o SMS para verificación de identidad.

### Números recomendados vs. números a evitar



### ✅ Números Recomendados

- Números de línea fija empresarial dedicados
    - Números móviles corporativos
    - Líneas de oficina con acceso directo
    - Números verificables (reciben llamadas/SMS)
    - Números no vinculados a cuentas personales
  
### ❌ Números a Evitar

- Números compartidos sin titular claro
    - Números temporales o prepago desechable
    - Números detrás de sistemas IVR complejos
    - Números activos en WhatsApp de uso personal
    - Números que no reciben llamadas/SMS
  
### Preparación técnica

1. Confirma la propiedad empresarial del número.
2. Verifica que pueda recibir llamadas o SMS.
3. Si está en uso, elimina la cuenta de WhatsApp existente.
4. Revisa los códigos de país y área.
5. Realiza una copia de seguridad completa de tus datos.


> **Advertencia crítica**: Cuando eliminas tu cuenta de WhatsApp, tu historial de chats y archivos multimedia se eliminarán permanentemente. Es fundamental hacer una copia de seguridad antes de comenzar.

## Proceso de migración paso a paso

Si ya tienes una cuenta de WhatsApp activa con el número que deseas usar, debes migrarla antes de registrarla en la Cloud API.

### ¿Por qué es necesario eliminar la cuenta previa?

Cuando intentamos agregar un número en WhatsApp Cloud API que ya está registrado, aparece este error:

> "Este número está registrado en una cuenta de WhatsApp existente. Para usar este número, desconéctalo de la cuenta existente. Luego, regresa a esta página y vuelve a ingresar el número. Nota: Puede tomar hasta 3 minutos para que el número esté disponible."


> Este error es completamente normal. Indica que el número está asociado a una cuenta activa y debe liberarse antes de registrarlo en la Cloud API.

### Paso 1: Realiza una copia de seguridad de tus conversaciones

Antes de eliminar cualquier cuenta, protege tus datos importantes.

#### Copia de seguridad en Android

1. Abre WhatsApp en tu dispositivo Android.
2. Toca los tres puntos verticales en la esquina superior derecha.
3. Ve a **Ajustes** → **Chats** → **Copia de seguridad de chats**.
4. Toca el botón **GUARDAR** (Back Up Now).
5. Espera a que el proceso se complete.
6. Asegúrate de tener espacio suficiente en Google Drive.
7. Consejo: Configura copias de seguridad programadas (diarias, semanales o mensuales).

#### Copia de seguridad en iOS (iPhone)

1. Abre WhatsApp en tu iPhone.
2. Ve a **Ajustes** → **Chats** → **Copia de seguridad**.
3. Toca **Hacer copia ahora** (Back Up Now).
4. Verifica que iCloud tenga espacio suficiente.
5. Si tienes muchos archivos multimedia, la copia puede tardar varios minutos.

#### Exportar conversaciones individuales importantes

1. Abre el chat que deseas exportar.
2. Toca el nombre del contacto o grupo en la parte superior.
3. Desplázate hacia abajo y selecciona **Exportar chat**.
4. Elige si deseas incluir archivos multimedia.
5. Guarda el archivo .txt en un lugar seguro: correo electrónico, Google Drive, Dropbox, etc.


> **Recomendación**: Exporta especialmente los chats con información crítica: confirmaciones de pedidos, datos de clientes, conversaciones con proveedores, acuerdos comerciales e historial de soporte técnico.

### Paso 2: Elimina tu cuenta de WhatsApp actual

Una vez respaldada la información, procede a eliminar la cuenta.


> Este paso es irreversible. Verifica dos veces que tu copia de seguridad se haya completado correctamente antes de continuar.

**Instrucciones detalladas:**

1. Abre **WhatsApp Messenger** o **WhatsApp Business App** en tu teléfono.

2. Ve a **Ajustes** (Settings):
   - Android: tres puntos verticales → Ajustes.
   - iPhone: ícono de engranaje en la esquina inferior derecha.

3. Selecciona **Cuenta** (Account).


> ¿No encuentras "Cuenta"? En algunos dispositivos, puede estar en un submenú. Usa la función de búsqueda dentro de Ajustes escribiendo "Cuenta" o "Account".

4. Desplázate hacia abajo y toca **Eliminar mi cuenta** (Delete My Account).

5. Selecciona el código de país e ingresa el número de teléfono completo.

6. Toca el botón **Eliminar mi cuenta**.

7. En el siguiente paso, toca **SIGUIENTE** y luego confirma tocando **Eliminar mi cuenta** nuevamente.


> **¿Qué sucede con los mensajes entrantes durante la migración?** Cualquier mensaje enviado a este número se pondrá en cola. Una vez que completes el registro en la Cloud API, esos mensajes comenzarán a llegar a tu nueva bandeja de entrada. No perderás mensajes entrantes importantes.

### Paso 3: Espera y verifica la disponibilidad del número

Después de eliminar la cuenta, espera de **3 a 4 minutos** antes de intentar agregar el número a la WhatsApp Cloud API.


> El tiempo de espera de 3 minutos es el estándar de Meta para liberar el número. En algunos casos puede ser inmediato, pero recomendamos esperar al menos 3 minutos. En casos muy raros, puede tomar hasta 24 horas.

### Paso 4: Registra tu número en WhatsApp Cloud API a través de E-SMART360

1. Inicia sesión en tu panel de control de **E-SMART360**.
2. Navega a **Canales** → **WhatsApp**.
3. Haz clic en **Conectar nuevo número** o **Agregar número**.
4. Ingresa el número que acabas de liberar, con código de país completo (ej: +521234567890).
5. Completa la verificación de Meta (llamada o SMS con código).
6. Configura ajustes iniciales: nombre del negocio, categoría, horario.
7. ¡Listo! Tu número ya está conectado a la WhatsApp Cloud API.


> **¡Migración completada con éxito!** Ahora puedes disfrutar de todos los beneficios de la WhatsApp Cloud API: chatbots automatizados, mensajes masivos, integración con CRM, bandeja compartida multiagente y análisis detallados.

## Después de la migración: configuración inicial

Una vez migrado el número, te recomendamos estos pasos:

### Pasos recomendados

1. **Configura tu perfil de negocio**: Foto de perfil, nombre, descripción, horario, dirección y sitio web. En E-SMART360, ve a Ajustes > Perfil de WhatsApp.

2. **Crea tu chatbot automatizado**: Configura un chatbot básico con el editor visual de E-SMART360. No requiere programación.

3. **Conecta tu CRM o ERP**: Sincroniza clientes, conversaciones y tickets de soporte automáticamente.

4. **Crea plantillas de mensajes**: Necesarias para mensajes proactivos. Deben ser aprobadas por Meta.

5. **Invita a tu equipo**: Agrega miembros a la bandeja compartida con roles y permisos específicos.

6. **Configura respuestas fuera de horario**: Mensajes automáticos para cuando tu equipo no esté disponible.

7. **Revisa los reportes**: E-SMART360 incluye paneles de análisis de conversaciones, tiempos de respuesta y más.

### Integraciones disponibles



### E-commerce

WooCommerce, Shopify. Sincroniza pedidos, envíos y carritos abandonados.
  
### Automatización

Zapier, Google Sheets, Make, Pabbly. Flujos de trabajo sin código.
  
### Formularios y CMS

WordPress, Elementor, WPForms, Google Forms. Notificaciones automáticas.
  
## Ejemplos prácticos y casos de uso

### Caso 1: Tienda online que automatizó notificaciones

Una tienda de ropa online migró su número de WhatsApp Business App a la Cloud API usando E-SMART360.

**Antes**: El dueño enviaba manualmente confirmaciones de pedido. Atendía 30 pedidos al día y dedicaba 2 horas solo a notificaciones.

**Después**: Las confirmaciones, actualizaciones de envío y carritos abandonados se envían automáticamente. El equipo maneja 200 pedidos diarios.

**Resultados**:
- 80% menos tiempo en notificaciones
- 25% más recuperación de carritos abandonados
- 40% mejora en satisfacción del cliente (NPS)

### Caso 2: Agencia inmobiliaria multiagente

Una agencia con 15 agentes migró su número principal a la Cloud API.

**Antes**: Los leads llegaban al teléfono personal del gerente, quien los reenviaba manualmente. Tiempo de respuesta: 4 horas.

**Después**: Los leads se asignan automáticamente al agente disponible. Los chatbots califican leads antes de pasarlos a los agentes.

**Resultados**:
- Tiempo de respuesta: de 4 horas a menos de 5 minutos
- 40% más conversión de leads a visitas
- 25% más ventas cerradas

## Checklist post-migración



### ✅ Primeros 3 días

- [ ] Perfil de negocio completo
    - [ ] Verificar recepción de mensajes
    - [ ] Mensaje de bienvenida automático
    - [ ] Respuestas rápidas (mínimo 2)
    - [ ] Invitar equipo a bandeja compartida
    - [ ] Horarios y respuestas fuera de horario
  
### 📊 Primera semana

- [ ] Conectar CRM
    - [ ] Crear plantillas para aprobación Meta
    - [ ] Chatbot de preguntas frecuentes
    - [ ] Revisar análisis de conversaciones
    - [ ] Capacitar al equipo
    - [ ] Configurar etiquetas y categorías
  
## Solución de problemas comunes

### Error: "Este número está registrado en una cuenta de WhatsApp existente"

**Causa**: El número aún está vinculado a una cuenta activa.

**Solución**:
1. Verifica que completaste la eliminación de cuenta.
2. Espera al menos 3-4 minutos.
3. Confirma que no hayas vuelto a iniciar sesión.
4. Repite el proceso si es necesario.

### Error: "No se puede verificar el número"

**Causa**: El número no puede recibir llamadas o SMS.

**Solución**:
1. Verifica cobertura de red.
2. Comprueba códigos de país y área.
3. Solicita un nuevo código de verificación.
4. Si está detrás de un IVR, usa un número directo alternativo.

### Error: "El número no está disponible" después de esperar

**Causa**: Meta procesa la liberación o la eliminación no se completó.

**Solución**:
1. Espera 5-10 minutos adicionales.
2. Verifica que el número se haya eliminado intentando iniciar sesión.
3. Repite la eliminación si sigue activo.
4. Contacta a soporte E-SMART360 si persiste después de 24 horas.

### Error: Verificación empresarial rechazada

**Causa**: Documentación incorrecta o incompleta.

**Solución**:
1. Asegura que el nombre comercial coincida con documentos oficiales.
2. Proporciona documentación clara y completa.
3. Verifica que el número esté correctamente verificado.
4. Completa el perfil de negocio en WhatsApp.

## Preguntas frecuentes


### ¿Puedo migrar mi número de WhatsApp existente a WhatsApp Business Cloud API?

Sí, puedes migrar tu número existente a WhatsApp Business Cloud API. Primero debes eliminar el número de la aplicación móvil siguiendo el proceso descrito en esta guía. Una vez que la cuenta se elimina y esperas de 3 a 4 minutos, el mismo número puede registrarse en la Cloud API a través de E-SMART360.

### ¿Pierdo mis chats de WhatsApp al migrar a Cloud API?

Sí. Cuando eliminas tu cuenta de WhatsApp, el historial de conversaciones y archivos multimedia se eliminan permanentemente. Es esencial hacer una copia de seguridad antes de comenzar. Puedes exportar chats individuales como archivos .txt o usar iCloud/Google Drive.

### ¿Por qué las empresas deberían cambiarse a WhatsApp Cloud API?

WhatsApp Cloud API ofrece escalabilidad superior, confiabilidad al estar alojada por Meta, integraciones con CRM y plataformas de automatización, chatbots inteligentes, mensajería masiva, soporte multiagente y análisis avanzados. Con E-SMART360 obtienes todo esto sin los altos costos de los BSP tradicionales.

### ¿Es WhatsApp Cloud API mejor que la app estándar de WhatsApp Business?

Sí, para empresas que necesitan automatización y escalabilidad. La app Business está diseñada para mensajería manual en negocios pequeños. La Cloud API soporta chatbots, mensajería masiva, integración CRM, multiagente y análisis. Si gestionas más de 50 conversaciones al día, la Cloud API es la opción correcta.

### ¿Puedo conectar WhatsApp Cloud API con mi CRM?

Sí. A través de la integración de API, WhatsApp Cloud API sincroniza automáticamente datos de clientes, rastrea conversaciones, asigna leads a equipos de ventas y activa seguimientos. E-SMART360 facilita esta conexión sin necesidad de programación compleja.

### ¿Puedo usar un número internacional?

Sí, siempre que el código de país y área estén especificados correctamente. El número debe poder recibir llamadas o SMS para la verificación. No hay restricciones geográficas más allá de los requisitos técnicos estándar de Meta.

### ¿Qué pasa si mi número está detrás de un sistema IVR?

Los sistemas IVR a veces interceptan las llamadas automatizadas de verificación. Recomendamos usar un número directo que pueda recibir llamadas o SMS sin intermediarios. Si no es posible, contacta al soporte de E-SMART360 para opciones alternativas.

### ¿Puedo registrar múltiples números en la Cloud API?

Sí, cada número debe estar vinculado a una cuenta separada de WhatsApp Business API. En E-SMART360, puedes gestionar todos tus números desde un solo panel, facilitando la administración de varias líneas de negocio o departamentos.

### ¿Una vez registrado, el número queda bloqueado permanentemente?

Sí. Una vez registrado, queda bloqueado permanentemente para esa cuenta. No se permiten cambios después de la configuración inicial ni se puede "degradar" para usar en WhatsApp Business App o Messenger. Elige cuidadosamente tu número desde el principio.

### ¿Qué beneficios ofrece una API unificada para integraciones B2B?

Gestión centralizada de datos, distribución automatizada de leads, comunicación sincronizada entre plataformas y mejores informes. En lugar de múltiples herramientas desconectadas, operas desde un sistema integrado. Con E-SMART360, todo está disponible desde un solo panel.

## Artículos relacionados

- **Configurar la WhatsApp Cloud API con E-SMART360**: Pasos para la configuración inicial después de la migración.
- **Ajustes del perfil de negocio en WhatsApp Cloud API**: Personaliza tu perfil comercial, foto, descripción y sitio web.
- **Registrar número de teléfono en WhatsApp Cloud API para negocio verificado**: Proceso adicional para negocios verificados.
- **Guía completa de plantillas de mensajes**: Crea y gestiona plantillas aprobadas por Meta.
- **Cómo crear un Administrador de Negocios de Meta**: Configura tu Business Manager.

También puedes ver nuestro video tutorial "Cómo migrar tu número de WhatsApp existente a una cuenta de WhatsApp Business" donde mostramos cada paso en tiempo real.

## Nota final

La migración a WhatsApp Cloud API es uno de los pasos más importantes que puede dar un negocio en crecimiento para profesionalizar su comunicación con los clientes. Con E-SMART360, todo el proceso es sencillo y no requiere conocimientos técnicos avanzados. Una vez migrado, tendrás acceso a un ecosistema completo de herramientas de automatización, análisis y gestión que transformarán la forma en que te comunicas con tus clientes.

Recuerda siempre hacer una copia de seguridad antes de migrar y elegir cuidadosamente el número que vas a utilizar, ya que la decisión es permanente.

---

*¿Tienes preguntas adicionales? Déjalas en los comentarios y nuestro equipo te responderá con gusto.*

## Temas avanzados para después de la migración

Una vez completada la migración, hay varios conceptos importantes que debes conocer para aprovechar al máximo la WhatsApp Cloud API.

### Límites de mensajería (Messaging Tiers)

Meta asigna a cada número de WhatsApp Business API un nivel de mensajería que determina cuántos mensajes puedes enviar por día. Estos niveles se basan en la calidad y antigüedad de tu número.

| Nivel | Límite diario | Requisito |
|---|---|---|
| Trial | 250 mensajes/día | Números nuevos sin verificar |
| Tier 1 | 1,000 mensajes/día | Número verificado, calidad media |
| Tier 2 | 10,000 mensajes/día | Número verificado, calidad alta |
| Tier 3 | 100,000 mensajes/día | Número verificado, calidad muy alta |
| Tier 4 | Sin límite | Número verificado, calidad excepcional |

Al migrar tu número existente, comenzarás desde cero en los niveles de mensajería. Es normal empezar en Trial y subir gradualmente a medida que acumulas conversaciones de alta calidad.

**¿Cómo subir de nivel?**
- Mantén una calificación de calidad alta (verde).
- Mantén bajas las tasas de bloqueo y denuncia de spam (idealmente menos del 0.05%).
- Acumula conversaciones voluntarias (iniciadas por clientes).
- Usa plantillas aprobadas para mensajes proactivos.

### Calificación de calidad (Quality Rating)

Meta evalúa constantemente la calidad de las conversaciones de tu número. La calificación puede ser:

- **Verde (alta)**: Funcionamiento normal. Puedes escalar libremente.
- **Amarilla (media)**: Revisa tus mensajes. Algo está afectando la experiencia del cliente. Tus límites pueden verse afectados.
- **Roja (baja)**: Riesgo de restricción o bloqueo. Meta puede limitar severamente tu capacidad de enviar mensajes.

**Factores que afectan la calidad:**
- Clientes que bloquean tu número después de recibir mensajes.
- Clientes que marcan tus mensajes como spam.
- Mensajes con alta tasa de "no leídos" o ignorados.
- Contenido que viola las políticas de Meta.


> **Consejo**: Después de migrar, enfócate en enviar mensajes relevantes y valiosos para tus clientes. Segmenta tu audiencia, respeta los horarios de atención y siempre ofrece una opción para dejar de recibir mensajes. Esto mantendrá tu calificación de calidad en verde.

### Tipos de conversaciones y costos

Entender los tipos de conversación es crucial para controlar los costos de la Cloud API:

| Tipo de conversación | Cuándo ocurre | Costo |
|---|---|---|
| **Iniciada por usuario** | El cliente te escribe primero | Tarifa menor (ventana de 24h) |
| **Iniciada por empresa (Marketing)** | Usas plantilla de marketing | Tarifa mayor |
| **Iniciada por empresa (Utility)** | Usas plantilla de utilidad (confirmaciones, recordatorios) | Tarifa media |
| **Iniciada por empresa (Service)** | Usas plantilla de servicio para seguimiento | Tarifa menor |


> Las conversaciones iniciadas por el usuario tienen una ventana abierta de 24 horas donde puedes responder sin costo adicional por conversación. Después de 24 horas, debes iniciar una nueva conversación usando una plantilla aprobada.

### Regla de las 24 horas

Una de las reglas más importantes de WhatsApp es la ventana de 24 horas. Cuando un cliente te envía un mensaje, tienes 24 horas para responder libremente dentro de esa conversación. Después de ese período:

1. La ventana de atención al cliente se cierra.
2. Para volver a contactar al cliente, debes usar una plantilla de mensaje aprobada por Meta.
3. Se inicia una nueva conversación con un costo asociado.

**Estrategias para gestionar la ventana de 24 horas:**
- Configura respuestas automáticas para mantener la conversación activa.
- Programa recordatorios antes de que cierre la ventana.
- Usa chatbots para calificar leads y recopilar información dentro de la ventana gratuita.
- Para clientes de alto valor, extiende la conversación con seguimientos valiosos.

### Cómo configurar tu perfil de negocio en WhatsApp Cloud API

El perfil de negocio es tu carta de presentación en WhatsApp. Configúralo correctamente desde el principio:

**Elementos del perfil:**
- **Foto de perfil**: Logo de tu empresa, preferiblemente cuadrado y de alta resolución.
- **Nombre del negocio**: Debe coincidir con el nombre registrado en Meta Business Manager.
- **Descripción**: Breve texto explicando qué hace tu negocio (máximo 512 caracteres).
- **Correo electrónico**: Dirección de contacto para que los clientes te escriban.
- **Sitio web**: URL de tu página principal.
- **Dirección física**: Ubicación de tu negocio (opcional pero recomendado).
- **Horario de atención**: Días y horas en que tu equipo está disponible.
- **Categoría**: Clasificación de tu negocio (ventas, soporte, marketing, etc.).


> En E-SMART360, puedes modificar todos estos elementos desde el panel de control en cualquier momento. Los cambios se reflejan instantáneamente en el perfil de WhatsApp de tu negocio.

### Cómo crear y gestionar plantillas de mensajes

Las plantillas son mensajes prediseñados que deben ser aprobados por Meta antes de usarse. Son obligatorias para iniciar conversaciones con clientes que no te han escrito primero.

**Tipos de plantillas:**
1. **Marketing**: Promociones, ofertas, anuncios de nuevos productos.
2. **Utility**: Confirmaciones de pedido, actualizaciones de envío, recordatorios de citas, verificación de cuentas.
3. **Service**: Seguimiento postventa, encuestas de satisfacción, notificaciones de resolución de tickets.

**Requisitos para la aprobación:**
- El contenido debe ser claro y útil para el destinatario.
- No debe contener información engañosa o falsa.
- Debe incluir una opción para darse de baja (opt-out).
- El lenguaje debe ser profesional y respetuoso.
- No puede incluir enlaces acortados o sospechosos.


> Las plantillas de tipo Utility suelen aprobarse más rápido que las de Marketing. Te recomendamos empezar con plantillas de utilidad para confirmaciones y notificaciones, y luego agregar plantillas de marketing más complejas.

### Cómo gestionar múltiples números desde E-SMART360

Si tu negocio maneja varias líneas o departamentos, puedes registrar múltiples números en la Cloud API y gestionarlos todos desde un solo panel:

1. Cada número debe estar vinculado a una cuenta de WhatsApp Business API separada.
2. En E-SMART360, verás todos tus números listados en la sección Canales > WhatsApp.
3. Puedes asignar diferentes agentes, chatbots y flujos a cada número.
4. Los reportes agregan datos de todos tus números para una visión unificada.

**Casos de uso comunes:**
- Un número para ventas y otro para soporte técnico.
- Diferentes números para distintas sucursales o regiones.
- Un número para marketing y otro para transacciones.
- Números separados para diferentes marcas o líneas de productos.

### Cómo integrar WhatsApp con tu sitio web (Click to WhatsApp)

Una de las integraciones más poderosas es agregar un botón de WhatsApp en tu sitio web que inicie una conversación directa con tu negocio:

**Opciones de implementación:**
1. **Botón flotante de WhatsApp**: Aparece en todas las páginas de tu sitio.
2. **Enlace directo**: Un enlace que abre WhatsApp con un mensaje predefinido.
3. **Widget de E-SMART360**: Chat widget completo que integra WhatsApp y webchat.
4. **Anuncios Click to WhatsApp**: Anuncios en Facebook e Instagram que abren WhatsApp.


> La migración a WhatsApp Cloud API abre un mundo de posibilidades para tu negocio. Con E-SMART360, puedes implementar todas estas funcionalidades sin conocimientos técnicos avanzados. Empieza poco a poco, automatiza lo básico primero, y luego expande tus capacidades gradualmente.

## Guía rápida de referencia

### Resumen del proceso de migración en 4 pasos


### Paso 1: Respaldar

Haz copia de seguridad de tus chats (iCloud/Google Drive). Exporta conversaciones importantes como archivos .txt.
  
### Paso 2: Eliminar

Ve a Ajustes > Cuenta > Eliminar mi cuenta en WhatsApp. Confirma tu número y la eliminación.
  
### Paso 3: Esperar

Espera 3-4 minutos para que Meta libere el número. Verifica que ya no esté activo.
  
### Paso 4: Registrar

En E-SMART360, ve a Canales > WhatsApp > Conectar número. Ingresa el número, verifica con código y configura.
  
### Errores comunes que debes evitar

1. **No hacer copia de seguridad**: Es el error más grave. Los chats se pierden permanentemente.
2. **No esperar los 3 minutos**: Intentar registrar el número inmediatamente causará errores.
3. **Registrar un número personal**: Una vez migrado, no podrás usarlo en WhatsApp personal.
4. **No configurar el perfil de negocio**: Un perfil incompleto reduce la confianza del cliente.
5. **No revisar las políticas de Meta**: El incumplimiento puede resultar en restricciones o bloqueos.
6. **Usar el mismo número para Cloud API y Business App**: Es técnicamente imposible.
7. **No capacitar al equipo**: La bandeja compartida requiere que todos los agentes sepan usarla.

### Términos clave que debes conocer

| Término | Definición |
|---|---|
| **WhatsApp Cloud API** | Plataforma de mensajería empresarial alojada por Meta |
| **WABA** | WhatsApp Business Account (Cuenta de WhatsApp Business) |
| **Business Manager** | Panel de administración de Meta para gestionar cuentas comerciales |
| **Embedded Signup** | Proceso simplificado de registro desde un BSP como E-SMART360 |
| **Plantilla (Template)** | Mensaje prediseñado aprobado por Meta para comunicación proactiva |
| **Conversación** | Ventana de 24 horas de intercambio de mensajes entre empresa y cliente |
| **Quality Rating** | Calificación de calidad del número asignada por Meta |
| **Messaging Tier** | Nivel de mensajería que determina el límite diario de mensajes |
| **BSP** | Business Solution Provider (Proveedor de Soluciones Empresariales) |
| **Green Tick** | Verificación empresarial de WhatsApp (palomita verde) |
| **Opt-out** | Opción para que el cliente deje de recibir mensajes |
| **CTA** | Call to Action (llamado a la acción, botones interactivos) |

## Preguntas adicionales


### ¿Cuánto tiempo toma la aprobación de plantillas de mensajes?

La aprobación de plantillas por parte de Meta puede tomar desde unas pocas horas hasta varios días. Las plantillas de tipo Utility (confirmaciones, recordatorios) suelen aprobarse más rápido que las de Marketing. Te recomendamos crear y enviar tus plantillas con anticipación para evitar demoras en tus campañas. E-SMART360 te notificará automáticamente cuando una plantilla sea aprobada o rechazada.

### ¿Qué hago si mi número es bloqueado después de la migración?

Si tu número es bloqueado o restringido por Meta después de la migración, sigue estos pasos:
  1. Revisa tu calificación de calidad en el panel de E-SMART360.
  2. Identifica qué mensajes están causando problemas (altas tasas de bloqueo o spam).
  3. Ajusta tu estrategia de mensajería: segmenta mejor tu audiencia, reduce la frecuencia.
  4. Si el bloqueo es por error, apela a través del Administrador de Negocios de Meta.
  5. Contacta al soporte de E-SMART360 para asistencia personalizada.

### ¿Puedo migrar un número que ya está en la Cloud API desde otro proveedor?

Sí, es posible migrar un número que ya está registrado en la Cloud API desde otro BSP a E-SMART360. El proceso es diferente al descrito en esta guía e implica:
  1. Eliminar el número de la cuenta del proveedor anterior.
  2. Esperar a que Meta libere el número (puede tomar hasta 72 horas).
  3. Registrar el número nuevamente a través de E-SMART360.
  
  Consulta nuestra guía específica "Cómo migrar desde otro BSP a E-SMART360" para instrucciones detalladas.

### ¿Puedo recuperar mi número después de migrarlo a la Cloud API?

No. Una vez que migras un número a la WhatsApp Cloud API, queda bloqueado permanentemente y no puede volver a usarse en WhatsApp Messenger o WhatsApp Business App. Esta es una política de Meta. Por eso recomendamos usar un número nuevo y dedicado para la Cloud API, y solo migrar un número existente si es absolutamente necesario.

### ¿Cómo afecta la migración a mis contactos guardados?

Tus contactos guardados en el dispositivo no se ven afectados por la migración. Sin embargo, si eliminas tu cuenta de WhatsApp, perderás la lista de contactos que solo existía dentro de la aplicación (no en la agenda del teléfono). Tus contactos sincronizados con la agenda telefónica permanecerán intactos. Los contactos en E-SMART360 se gestionan de forma independiente a través del sistema de suscriptores.
