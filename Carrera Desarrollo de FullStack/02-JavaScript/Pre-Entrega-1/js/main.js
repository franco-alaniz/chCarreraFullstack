console.log("Hola, Bienvenido a nuestro planificador de viajes.");

const IVA = 0.21; // IVA del 21%

let nombre = prompt("¿Cuál es tu nombre?");
alert(`Hola, ${nombre}. Bienvenido a nuestro planificador de viajes.`);

let dias = parseInt(prompt("¿Cuántos días planeas viajar?"));
console.log(` ${nombre} planea viajar por ${dias} días.`);

let costoDiario = parseFloat(prompt("¿Cuál es el costo estimado diario en alojamiento y comida?"));
console.log(`El costo estimado diario es de $${costoDiario.toFixed(2)}.`);

let costoTotal = dias * costoDiario;
let impuestos = costoTotal * IVA;

console.log(`El costo total del viaje de ${nombre} antes de impuestos es de $${costoTotal.toFixed(2)}.`);
console.log(`El impuesto (IVA) aplicado al costo total es de $${impuestos.toFixed(2)}.`);

let costoTotalConIVA = costoTotal + impuestos;
console.log(`El costo total del viaje de ${nombre} con IVA es de $${costoTotalConIVA.toFixed(2)}.`);

alert(`Hola, ${nombre}. El costo total de tu viaje (con IVA incluido) es de $${costoTotalConIVA.toFixed(2)}.`);


/**
 * ==========================================
 * RESUMEN DE APRENDIZAJE - MÓDULO 1: JAVASCRIPT
 * ==========================================
 * 
 * 1. console.log(): Permite imprimir mensajes o resultados en la consola del navegador.
 * 2. prompt(): Despliega una ventana emergente para solicitar información al usuario.
 * 3. alert(): Despliega una ventana emergente para mostrar mensajes directos al usuario.
 * 4. parseInt() / parseFloat(): Convierten cadenas de texto (strings) en números enteros o decimales.
 * 5. toFixed(n): Formatea un número para limitar y mostrar una cantidad específica ('n') de decimales.
 * 6. Template Strings (comillas invertidas `` ` ``): Permiten insertar variables y expresiones 
 *    directamente dentro de un texto usando ${...}.
 */

// ==========================================
// EJEMPLOS PRÁCTICOS DE LO APRENDIDO
// ==========================================
/**
// Ejemplo A: Comillas normales (requieren concatenación manual con el operador +)
let usuario = "Juan";
console.log("Hola, usuario. ¿Cómo estás?"); // Resultado literal: Hola, usuario. ¿Cómo estás?
console.log("Hola, " + usuario + ". ¿Cómo estás?"); // Resultado correcto: Hola, Juan. ¿Cómo estás?

// Ejemplo B: Template Strings / Comillas invertidas (más limpio y moderno)
let nombre = "Juan";
let edad = 25;
console.log(`Hola, ${nombre}. El próximo año tendrás ${edad + 1} años.`);
// Resultado: Hola, Juan. El próximo año tendrás 26 años.
 */