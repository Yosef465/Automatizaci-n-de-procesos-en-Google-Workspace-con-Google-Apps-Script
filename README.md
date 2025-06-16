# Automatización de Procesos en Google Workspace con Google Apps Script

Este proyecto demuestra la automatización e integración de servicios dentro del ecosistema de Google Workspace, utilizando Google Apps Script para mejorar la productividad y la colaboración.

## 📌 Objetivos del Proyecto

- Integrar Google Sheets, Gmail, Google Chat y Google Calendar mediante un script personalizado.
- Automatizar tareas como la lectura de datos, envío de notificaciones y creación de eventos.
- Validar la ejecución automática de funciones a través de activadores (triggers).

---

## ⚙️ Funcionalidades Desarrolladas

### 1. Integración con Google Sheets
- Lectura de filas con información de eventos (título, fecha, descripción).
- Cálculos y validación básica de datos.
- Actualización del estado de las filas procesadas.

### 2. Automatización de Notificaciones
- Envío de correos electrónicos automáticos con el detalle del evento.
- (Opcional) Envío de mensajes a Google Chat vía Webhook.

### 3. Integración con Google Calendar
- Creación automática de eventos a partir de la información extraída de Google Sheets.
- Configuración personalizada de fecha, título y descripción.

### 4. Activadores (Triggers)
- Activador principal: `onEdit` para ejecutar automáticamente la función al detectar cambios en la hoja de cálculo.
- (Opcional) Activador por tiempo para escaneo periódico de nuevos datos.

---

## 🛠️ Tecnologías Utilizadas

- **Google Apps Script**
- **Google Sheets**
- **Gmail API**
- **Google Calendar API**

---

## 🧪 Pruebas Realizadas

- Se añadieron nuevas filas a la hoja "Eventos" para probar:
  - Creación correcta del evento.
  - Envío del correo automático con la información.
  - Actualización del estado del evento en la hoja.
- Se validó que el trigger `onEdit` ejecutara automáticamente el script.

---

## 📁 Estructura del Script

```plaintext
📦 Proyecto Apps Script
 ├── Código.gs              # Lógica de lectura y procesamiento de la hoja
 ├── eventos.gs            # Función de creación de eventos y notificaciones
 └── Triggers configurados # Activador al editar hoja
