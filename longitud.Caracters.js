// 1 PRIMER CASO PRACTICO 

function longitudCadenasArray(datos) {

    // verifica si datos es un array de lo contrario lanza un error
    if (!Array.isArray(datos)) {
      throw new Error("El argumento debe ser un array");
    }; 
    
    // Se itera cada dato dentro de datos y verifica si es una cadena de texto 
    return datos.map(dato => {
      if (typeof dato !== 'string') {
        throw new Error("Todos los elementos del array deben ser cadenas de texto");
      }
      return dato.length;
    });
  }; 
  
  try {
    
    const longitudes = longitudCadenasArray(['Carlos', 'Pedro', 'Elisenda'])
    console.log(longitudes); 


  } catch (error) {
    console.error(error.message);
  }; 
