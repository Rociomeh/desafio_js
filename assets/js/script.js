let cantidad = 0; //let es para definir una variable 
let precio = 400000;

precioInicialSpan = document.querySelector(".precio-inicial"); //precio base 
precioInicialSpan.innerHTML = precio; //iguala el precio base

function sumar() { 
    cantidad = cantidad + 1;
    console.log('Sumando', cantidad); //console.log imprime en la consola del navegador lo que se está ejecutando
    actualizarPrecioCantidad(); //actualiza el precio y la cantidad cada vez que se llama a la funcion sumar 
}

function restar() {
    cantidad = cantidad - 1;
    console.log('Restar', cantidad);
    actualizarPrecioCantidad(); //actualiza el precio y la cantidad cada vez que se llama a la funcion restar
}

function actualizarPrecioCantidad() {
    let precioTotal = precio * cantidad;
    precioSpan = document.querySelector(".precio-total"); //nombre de la clase en html
    precioSpan.innerHTML = precioTotal; //actualiza la clase precio-total con el precioTotal  

    let cantidadSpan = document.querySelector(".cantidad-total"); //definiendo valor a la cantidad  
    cantidadSpan.innerHTML = cantidad; 
}

