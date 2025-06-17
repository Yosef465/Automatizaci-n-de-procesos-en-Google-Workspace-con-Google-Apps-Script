# ============================
# Proyecto: Automatización Google Workspace con Apps Script
# Descripción: Este archivo documenta dos scripts desarrollados para automatizar
#              la gestión de usuarios y eventos dentro del entorno de Google Workspace.
# ============================

# ========================================
# SCRIPT 1: Notificación de rol asignado
# Archivo original: procesarUsuarios.gs
# Función: procesarUsuarios()
# Descripción: Envía un correo de bienvenida y rol asignado a cada usuario
#              listado en la hoja de cálculo "Usuarios Workspace" y actualiza su estado.
# ========================================

"""
function procesarUsuarios() {
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Usuarios Workspace");
  const datos = hoja.getDataRange().getValues();

  for (let i = 1; i < datos.length; i++) {
    const nombre = datos[i][0];  // Columna A: Nombre del usuario
    const correo = datos[i][1];  // Columna B: Correo electrónico
    const rol = datos[i][2];     // Columna C: Rol asignado
    const estado = datos[i][3];  // Columna D: Estado del usuario
    const accion = datos[i][4];  // Columna E: Estado del procesamiento

    // Validar si el usuario está activo y no ha sido notificado aún
    if (estado === "Activo" && accion !== "Procesado - Correo enviado") {
      const mensaje = `Hola ${nombre}, se te ha asignado el rol: ${rol}. Bienvenido al entorno de Google Workspace.`;

      // ENVÍO DE CORREO
      GmailApp.sendEmail(correo, "Notificación de rol asignado", mensaje);

      // Actualizar el estado como procesado
      hoja.getRange(i + 1, 5).setValue("Procesado - Correo enviado");
    }
  }
}
"""
