// Función para cargar y manejar datos JSON
function cargarDatosJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          callback(null, data);
        } else {
          callback(new Error('No se pudo cargar los datos JSON'), null);
        }
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  }
  
  // Ejemplo de uso de la función
  cargarDatosJSON('datos.json', function(error, data) {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
      // Aquí puedes utilizar los datos cargados para mostrarlos en tu sitio web
    }
  });
  