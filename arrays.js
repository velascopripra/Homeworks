//creo el array a, a partir de este se usarán las diferentes funciones
let miArray = [1, 2, 3, 4, 5];

// at()
console.log("Elemento en índice 2:", miArray.at(2));

// concat()
let nuevoArray = miArray.concat([6, 7, 8]);
console.log("Array después de concat:", nuevoArray);

// copyWithin()
miArray.copyWithin(2, 0);
console.log("Array después de copyWithin:", miArray);

// entries()
let iterador = miArray.entries();
console.log("Entries:");
for (let entrada of iterador) {
    console.log(entrada);
}

// every()
console.log("Todos son mayores a 0:", miArray.every(num => num > 0));

// fill()
miArray.fill(9, 1, 3);
console.log("Array después de fill:", miArray);

// filter()
let filtrados = miArray.filter(num => num > 3);
console.log("Filtrados mayores a 3:", filtrados);

// find()
let encontrado = miArray.find(num => num > 2);
console.log("Primer número mayor a 2:", encontrado);

// findIndex()
let indiceEncontrado = miArray.findIndex(num => num > 2);
console.log("Índice del primer número mayor a 2:", indiceEncontrado);

// findLast()
let ultimoEncontrado = miArray.findLast(num => num > 2);
console.log("Último número mayor a 2:", ultimoEncontrado);

// findLastIndex()
let ultimoIndice = miArray.findLastIndex(num => num > 2);
console.log("Último índice mayor a 2:", ultimoIndice);

// flat()
let arrayAnidado = [1, [2, 3], [4, 5]];
console.log("Array aplanado:", arrayAnidado.flat());

// flatMap()
console.log("FlatMap con duplicación:", miArray.flatMap(num => [num, num * 2]));

// forEach()
console.log("Usando forEach:");
miArray.forEach(num => console.log(num));

// includes()
console.log("¿Incluye el número 4?", miArray.includes(4));

// indexOf()
console.log("Índice del número 3:", miArray.indexOf(3));

// join()
console.log("Array como string:", miArray.join("-"));

// keys()
console.log("Keys del array:");
for (let clave of miArray.keys()) {
    console.log(clave);
}

// lastIndexOf()
console.log("Última aparición del número 3:", miArray.lastIndexOf(3));

// map()
let mapeado = miArray.map(num => num * 3);
console.log("Array mapeado por 3:", mapeado);

// pop()
console.log("Elemento eliminado con pop:", miArray.pop());
console.log("Array después de pop:", miArray);

// push()
miArray.push(6);
console.log("Array después de push:", miArray);

// reduce()
let suma = miArray.reduce((acc, num) => acc + num, 0);
console.log("Suma con reduce:", suma);

// reduceRight()
let sumaDerecha = miArray.reduceRight((acc, num) => acc + num, 0);
console.log("Suma con reduceRight:", sumaDerecha);

// reverse()
console.log("Array invertido:", miArray.reverse());

// shift()
console.log("Elemento eliminado con shift:", miArray.shift());
console.log("Array después de shift:", miArray);

// slice()
console.log("Slice de índice 1 a 3:", miArray.slice(1, 3));

// some()
console.log("¿Algún número mayor a 5?", miArray.some(num => num > 5));

// sort()
console.log("Array ordenado:", miArray.sort());

// splice()
miArray.splice(2, 1, 99);
console.log("Array después de splice:", miArray);

// toLocaleString()
console.log("Array con toLocaleString:", miArray.toLocaleString());

// toString()
console.log("Array con toString:", miArray.toString());

// unshift()
miArray.unshift(0);
console.log("Array después de unshift:", miArray);

// values()
console.log("Valores del array:");
for (let valor of miArray.values()) {
    console.log(valor);
}


let i = a.every(n => n > 0);
console.log("¿Todos los números son mayores que 0?:", i);

let j = a.findIndex(n => n == 77);
console.log("Posición del número 77:", j);
