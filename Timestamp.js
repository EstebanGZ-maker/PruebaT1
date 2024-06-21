//5- Dar la fecha y hora exactas un timestamp igual a 1000 en la zona horaria de Moscú

const timestamp = 1000;
const date = new Date(timestamp);

// Se crea un formateador de fecha y hora para la zona horaria de Moscú
const formateador  = {
  timeZone: "Europe/Moscow",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour24: true
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", formateador );

// Formatear la fecha y hora
const formattedDate = dateFormatter.format(date);


console.log(`Fecha y hora del timestamp ${timestamp} en la zona horaria de Moscú es: ${formattedDate}`);