console.log("Hola, Bienvenido a nuestro planificador de viajes.");
const IVA = 0.21; // IVA del 21%
console.log("El IVA aplicado a los costos de viaje es del 21%");
const codigoDescuento = "VIAJE2026"; // Código de descuento para el viaje   
console.log("Si tienes el código de descuento " + codigoDescuento + ", puedes aplicarlo al costo total del viaje.");
let  continuar = true; // Variable para controlar el bucle de repetición

while (continuar) {
    let entrada = prompt("Escribe 'cotizar' si quieres cotizar tu viaje o escribe 'salir' para terminar.");
    // Si el usuario presiona cancelar en el prompt, evitamos errores rompiendo el bucle
    if (entrada === null) {
        break;
    }
    // Convertimos a minúsculas para evitar problemas si escriben "Esc", "ESC", etc.
    let opcion = entrada.toLowerCase();
    if (opcion === "salir") {
        continuar = false;
        console.log("Gracias por usar nuestro planificador de viajes. ¡Hasta luego!");
        alert("Gracias por usar nuestro planificador de viajes. ¡Hasta luego!");
    }
    else if (opcion === "cotizar") {
        console.log("Iniciando cotización de viaje...");
        let nombre = prompt("¿Cuál es tu nombre?");
        console.log(`Hola ${nombre}, vamos a calcular el costo de tu viaje.`);
        let dias = parseInt(prompt("¿Cuántos días planeas viajar?"));
        console.log(`Días de viaje ingresados: ${dias}`);
        let costoDiario = parseFloat(prompt("¿Cuál es el costo estimado diario en alojamiento y comida?"));
        console.log(`Costo diario ingresado: $${costoDiario.toFixed(2)}`);
        // Validamos que los datos numéricos sean correctos
        if (isNaN(dias) || isNaN(costoDiario) || dias <= 0 || costoDiario <= 0) {
            alert("⚠️ Error: Debes ingresar números válidos para los días y el costo.");
            console.log("Intento de cotización fallido por datos inválidos.");
        } else {
            let costoTotal = dias * costoDiario;
            let codigoIngresado = prompt("¿Tienes un código promocional? (Déjalo en blanco si no tienes)");

            let descuento = 0;
            
            // CONDICIONAL SECUNDARIO para evaluar el código promocional dentro del bucle
            if (codigoIngresado === "") {
                console.log("No se ingresó ningún código promocional."); 
                alert("No se ingresó ningún código promocional. No se aplicará ningún descuento.");
            }else if (codigoIngresado === codigoDescuento) {
                descuento = costoTotal * 0.10;  
                console.log(`Código promocional válido. Se aplicará un descuento de $${descuento.toFixed(2)}.`);
                alert(`¡Felicidades ${nombre}! Se aplicará un descuento de $${descuento.toFixed(2)} a tu viaje.`);
            } else {
                console.log("Código promocional inválido. No se aplicará ningún descuento.");
                alert("⚠️ Código promocional inválido. No se aplicará ningún descuento.");
            } 

            // Cálculos finales con impuestos
            let costoConDescuento = costoTotal - descuento;
            let impuestos = costoConDescuento * IVA;
            let costoFinal = costoConDescuento + impuestos;

            // Salida de resultados por consola y alerta
            console.log(`--- Resumen del Viaje para ${nombre} ---`);
            console.log(`Días: ${dias} | Costo Diario: $${costoDiario.toFixed(2)}`);
            console.log(`Subtotal: $${costoTotal.toFixed(2)}`);
            if (descuento > 0) {
                console.log(`Descuento: -$${descuento.toFixed(2)}`);
            }
            console.log(`IVA (21%): $${impuestos.toFixed(2)}`);
            console.log(`COSTO TOTAL FINAL: $${costoFinal.toFixed(2)}`);
            console.log("------------------------------------------");

            alert(`Hola ${nombre}, el costo total de tu viaje (con IVA incluido) es de $${costoFinal.toFixed(2)}. Revisa la consola para ver el desglose.`);
        }
    } 
    else {
        alert("⚠️ Opción no válida. Escribe 'cotizar' para iniciar o 'ESC' para salir.");
    }
}

/**
 * Cosas que aprendí en esta entrega:
 * 1. Cómo usar bucles while para repetir acciones de forma controlada hasta que el usuario decida salir.
 * 2. Cómo validar entradas de usuario y manejar errores numéricos y de texto de manera efectiva.    
 * 3. Javascript es un hijueputa.Diferencia crucial en los condicionales: 
 *    - Si usamos 'if' independientes, el programa evalúa cada condición por separado (puede entrar en varias).
 *    - Si usamos una estructura encadenada de 'if...else if...else', funciona como un filtro de exclusión mutua: 
 *      en cuanto una condición se cumple, el programa entra en ella y descarta automáticamente el resto.
 */
 