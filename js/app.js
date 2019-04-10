/**
La paginA debe calcular la segunda potencia del número
ingresado al hacer "click" en el botón.
*
* 1. Recuperar la referencia del botón
* 2. Asignar el evento click 
* 3. Crear una función que se ejecute con el evento
* 4. Dentro de la función hacer los calculos y mostrar el resultado
*/

$("#btn1").click(function(ev){
	ev.preventDefault(); //evita que el formulario se envie al servidor
	/**
	 * 4.1 Recuperar el valor ingresado por el usuario y guardar en una variable
	 * 4.2 Realizar el cálculo y guardar en una variable 2
	 * 4.3 Mostrar resultado
	*/

	let ingresado = $("#n1").val();
	let result = ingresado * ingresado;

	

	console.log(result);

	//cargar el resultado en el párrafo

	//$(".res1").html(`${ingresado}<sup>2</sup> = ${result}`);

	$(".res1").html(ingresado+"<sup>2</sup> = "+result);

	$(".res1").css( "border", "solid 3px rebeccapurple" )

});