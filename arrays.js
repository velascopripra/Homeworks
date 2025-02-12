//creo el array a, a partir de este se usarán las diferentes funciones
let a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("Array inicial:", a);

a.sort((x, y) => x - y);
console.log("Ordenado de menor a mayor:", a);

a.push(99);
console.log("Se agregó 99 al final:", a);

a.pop();
console.log("Se eliminó el último elemento:", a);

a.reverse();
console.log("Se invirtió el orden:", a);

a.unshift(0);
console.log("Se agregó 0 al inicio:", a);

a.shift();
console.log("Se eliminó el primer elemento:", a);

a.splice(3, 1, 77);
console.log("Se reemplazó el elemento en la posición 3 con 77:", a);

let b = a.map(n => n * 2);
console.log("Cada elemento multiplicado por 2:", b);

let c = a.find(n => n > 5);
console.log("Primer número mayor a 5:", c);

let d = a.some(n => n < 3);
console.log("¿Algún número es menor que 3?:", d);

let e = a.includes(10);
console.log("¿El número 10 está en el array?:", e);

let f = a.filter(n => n % 2 == 0);
console.log("Números pares en el array:", f);

let g = a.reduce((t, n) => t + n, 0);
console.log("Suma de todos los elementos:", g);

let h = a.slice(2, 5);
console.log("Parte del array (posiciones 2 a 5):", h);

let i = a.every(n => n > 0);
console.log("¿Todos los números son mayores que 0?:", i);

let j = a.findIndex(n => n == 77);
console.log("Posición del número 77:", j);
