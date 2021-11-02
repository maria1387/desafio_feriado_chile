$(document).ready(function(){
	//boton donde muestra la informacion
	$(".container").hide();
	$("button").click(function(){
		$(".container").toggle();
	  });
// Método ajax() para solicitar datos a la API
$.ajax({
type:"GET",
url:"https://www.feriadosapp.com/api/holidays.json",
dataType:"json",
success: function(datosApi) {
console.log(datosApi.data)
var valor =  ''
 // Ciclo ForEach para generar cada fila de la tabla
datosApi.data.forEach(element => {
	valor +=  
`<tr> <td>${element.id}</td><td>${element.date}</li>
<td>${element.title}</td><td>${element.extra}</td>
<td>${element.law}</td><td>${element.law_id}</td><tr>` }
);

$("#table").show();
$("#prueba2").html(valor);


},

});
});

