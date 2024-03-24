/*
 Dado un array de números enteros positivos, donde cada uno
 representa unidades de bloques apilados, debemos calcular cuantas unidades
 de agua quedarán atrapadas entre ellos.
 
 - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
 
   💧💧💧🪣💧💧
   💧💧💧🪣💧💧
   🪣💧💧🪣💧💧
   🪣💧🪣🪣💧🪣
   🪣💧🪣🪣💧🪣
   🪣💧🪣🪣🪣🪣
 
   Representando bloque con 🪣︎ y agua con 💧, quedarán atrapadas 7 unidades
   de agua. Suponemos que existe un suelo impermeable en la parte inferior
   que retiene el agua.
 */

/*

[3, 1, 2, 4, 0, 1, 3]

  💧💧💧💧💧💧💧
  💧💧💧💧💧💧💧
  💧💧💧🪣💧💧💧
  🪣💧💧🪣💧💧🪣
  🪣💧🪣🪣💧💧🪣
  🪣🪣🪣🪣💧🪣🪣
  Quedan 8


  [5, 3, 7, 2, 7, 4, 5, 9, 1, 2]

  💧💧💧💧💧💧💧🪣💧💧
  💧💧💧💧💧💧💧🪣💧💧
  💧💧🪣💧🪣💧💧🪣💧💧
  💧💧🪣💧🪣💧💧🪣💧💧
  🪣💧🪣💧🪣💧🪣🪣💧💧
  🪣💧🪣💧🪣🪣🪣🪣💧💧
  🪣🪣🪣💧🪣🪣🪣🪣💧💧
  🪣🪣🪣🪣🪣🪣🪣🪣💧🪣
  🪣🪣🪣🪣🪣🪣🪣🪣🪣🪣
  Quedan 13

*/



const waterBlocks = (value) => {

  const blocks = [...value];

  let acummWater = 0;

  blocks.forEach((current, index) => {
    let leftMax = 0;
    let rightMax = 0;

    const leftSlice = blocks.slice(0, index === blocks.length ? index + 1 : index);

    if (leftSlice.length > 0) {
      leftMax = Math.max(...leftSlice);
    }

    const rightSlice = blocks.slice(index + 1);

    if (rightSlice.length > 0) {
      rightMax = Math.max(...rightSlice);
    }
    const minHeight = Math.min(leftMax, rightMax);

    acummWater += (minHeight - current < 0) ? 0 : minHeight - current;
  });

  return acummWater;
};

console.log(waterBlocks([5, 3, 7, 2, 7, 4, 5, 9, 1, 2]));
