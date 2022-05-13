$("#boton-mascota").on("click", getPets);

function getPets() {
  $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",

    success: function (respuesta) {
    console.log(respuesta.results);

      var listaMascota = $("#listaMascota");
      
      $("#listaMascota").empty();
      $.each(respuesta.results, function (_index, elemento) {     
        listaMascota.append(
        "<div>" +
            "<img src='" +
            elemento.image.first+
            "'/>" +
        "</div>"
        );
      });
    },
    error: function () {
      console.log("No se ha podido obtener la información");
    },
  });
}