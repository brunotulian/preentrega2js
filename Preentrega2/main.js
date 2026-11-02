// === TIENDA DE REMERAS ===

let nombreUsuario = prompt("¡Hola! ¿Cual es tu nombre?");

// Alerta con los avisos de descuento
alert("¡Bienvenido/a a nuestra tienda de remeras, " + nombreUsuario + "!\n\n¡Aprovecha nuestras promos:\n- Comprando mas de $5,000 obtenes un 10% de descuento.\n- Comprando mas de $10,000 obtenes un 20% de descuento.");

let costoTotal = 0;
let continuarComprando = true;

// 1. Estructura de Repetición 
while (continuarComprando) {
    
    let cantidadIngresada = prompt("¿Cuantas remeras vas a llevar en este lote?");
    let precioIngresado = prompt("¿Cual es el precio unitario de las remeras?");

    let cantidadNumero = parseInt(cantidadIngresada);
    let precioNumero = parseFloat(precioIngresado);

    // 2. Estructura de Decisión y Combinación 
    if (isNaN(precioNumero) || isNaN(cantidadNumero) || precioNumero <= 0 || cantidadNumero <= 0) {
        // Errores
        alert("Error: Ingresaste valores invalidos. Este lote no se sumara al carrito.");
    } else {
        let subtotal = precioNumero * cantidadNumero;
        
        // If, else if y else para aplicar descuentos
        if (subtotal > 10000) {
            subtotal = subtotal * 0.80; // 20% de descuento
            alert("¡Felicitaciones! Tu compra supera los $10,000 y tiene un 20% de descuento.");
        } else if (subtotal > 5000) {
            subtotal = subtotal * 0.90; // 10% de descuento
            alert("¡Descuento aplicado! Tu compra supera los $5,000 y tiene un 10% de descuento.");
        } else {
            alert("El subtotal para este lote es: $" + subtotal.toFixed(2));
        }

        // Acumulamos el costo total con descuento si aplica
        costoTotal += subtotal;
        console.log("Lote agregado - Cantidad: " + cantidadNumero + " remeras | Subtotal con descuento: $" + subtotal.toFixed(2));
    }

    // Preguntamos  si desea agregar más remeras
    continuarComprando = confirm("¿Queres agregar otro lote de remeras?");
}

// Resultado Final e Interactividad
console.log("=== REGISTRO FIN DE COMPRA ===");
console.log("Cliente: " + nombreUsuario);
console.log("Monto total acumulado: $" + costoTotal.toFixed(2));

if (costoTotal > 0) {
    alert("¡Gracias por tu compra, " + nombreUsuario + "! El total final a pagar es: $" + costoTotal.toFixed(2));
} else {
    alert("No se registraron compras. ¡Esperamos verte pronto!");
}