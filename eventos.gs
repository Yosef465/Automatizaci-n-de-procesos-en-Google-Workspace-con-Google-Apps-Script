# ========================================
# SCRIPT 2: Creación de eventos desde Google Sheets
# Archivo original: eventos.gs
# Función: crearEventosDesdeHoja()
# Descripción: Lee los datos de la hoja "Eventos", genera eventos en Google Calendar
#              y envía una confirmación por correo electrónico.
# ========================================

"""
function crearEventosDesdeHoja() {
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Eventos");
  const datos = hoja.getDataRange().getValues();

  for (let i = 1; i < datos.length; i++) {
    const [nombre, fecha, hora, descripcion] = datos[i];

    // Validación de datos obligatorios
    if (!nombre || !fecha || !hora) continue;

    // Convertir la fecha a objeto Date
    const fechaEvento = new Date(fecha);
    
    // Formatear la hora si no es string
    let horaTexto = typeof hora === "string" ? hora : Utilities.formatDate(new Date(hora), Session.getScriptTimeZone(), "HH:mm");
    const [horaStr, minutoStr] = horaTexto.split(":");

    // Asignar hora y minutos a la fecha
    fechaEvento.setHours(parseInt(horaStr));
    fechaEvento.setMinutes(parseInt(minutoStr));
    fechaEvento.setSeconds(0);

    // Crear evento de 1 hora en Google Calendar
    const evento = CalendarApp.getDefaultCalendar().createEvent(
      nombre,
      fechaEvento,
      new Date(fechaEvento.getTime() + 60 * 60 * 1000),
      { description: descripcion }
    );

    Logger.log("Evento creado: " + evento.getTitle());

    // Enviar correo de confirmación al usuario activo del script
    MailApp.sendEmail({
      to: Session.getActiveUser().getEmail(),
      subject: "Nuevo evento creado",
      body: `Evento: ${nombre}\nFecha y hora: ${fechaEvento.toLocaleString()}\nDescripción: ${descripcion}`
    });
  }
}
"""
