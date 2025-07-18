# 📊 Automatización de Procesos en Google Workspace con Google Apps Script

Este proyecto demuestra cómo automatizar e integrar servicios del ecosistema de **Google Workspace** usando **Google Apps Script**, facilitando la colaboración, productividad y eficiencia de los flujos de trabajo.

---

## 📌 Objetivos del Proyecto

- Automatizar la gestión de eventos mediante Google Sheets.
- Notificar a los usuarios vía correo electrónico y Google Chat cuando se registren nuevos eventos.
- Crear automáticamente eventos en Google Calendar.
- Evaluar el uso de **activadores automáticos** para ejecutar funciones sin intervención manual.

---

## ⚙️ Funcionalidades Desarrolladas

### 1. Integración con Google Sheets
- Lectura dinámica de datos desde una hoja de cálculo.
- Procesamiento de columnas como título, fecha y descripción.
- Validación básica de datos y actualización del estado.

### 2. Automatización de Notificaciones
- Envío de correos automáticos personalizados con los detalles del evento.
- (Opcional) Notificación automática por Webhook a Google Chat.

### 3. Integración con Google Calendar
- Creación automática de eventos con fecha, hora y descripción personalizadas.
- Confirmación mediante correo y visualización directa en Calendar.

### 4. Activadores Automáticos (Triggers)
- Activador al **editar** la hoja (onEdit).

---

## 🛠️ Tecnologías Utilizadas

- Google Apps Script
- Google Sheets API
- Gmail API
- Google Calendar API
- Google Chat Webhooks (opcional)
  
---

## 🏗️ Desarrollo del Proyecto

### 🔧 1. Simulación del entorno y usuarios

Se creó un entorno de prueba en Google Workspace con **cuentas demo** y una cuenta real para comprobar la funcionalidad.

![Simulación del entorno](./images/simulacion_entorno.png)

---

### 🔐 2. Descripción de roles y políticas básicas

Se definieron roles y permisos según jerarquías (lector, editor, administrador), para garantizar seguridad.

![Descripción de roles](./images/Descripcion_roles.png)

---

### 🔒 3. Políticas básicas de seguridad

Se aplicaron políticas de acceso restringido, regsitro de acciones, ect.

![Políticas básicas](./images/politicas_basicas.png)

---

### 📬 4. Pruebas de script: Notificación por correo

El script envió correctamente un correo con los detalles del evento.

**Correo Enviado:**

![Correo enviado](./images/correo_enviado.png)

**Correo Recibido (Cuenta real):**

![Correo recibido](./images/notificacion_roles.jpg)

---

### 📅 5. Creación del Evento en Google Calendar

Se implementó una función que genera automáticamente un evento desde Google Sheets.

**Ejecución de la función:**

![Ejecución del código](./images/evento_ceado01.png)

**Evento creado exitosamente en Calendar:**

![Evento en Calendar](./images/evento_creado.png)

---

### ⏱️ 6. Configuración de Activadores

Se configuraron activadores para ejecutar automáticamente el script al editar la hoja o en intervalos definidos.

**Configuración del activador:**

![Activador](./images/activador_evento.png)

**Creación de evento de prueba desde hoja de cálculo:**

![Edición hoja](./images/evento_prueba_activador.png)

**Confirmación automática:**

![Confirmación](./images/confirmacion_activador_evento.png)

---

## 📁 Estructura del Repositorio

```plaintext
📦 Proyecto Workspace Automation
 ├── Código.js              # Funciones de procesamiento principal
 ├── eventos.js            # Funciones de envío de correos y creación de eventos
 ├── README.md             # Documentación del proyecto
 └── /imagenes             # Carpeta con evidencia visual del desarrollo

