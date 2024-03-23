/*
 Los primeros dispositivos móviles tenían un teclado llamado T9
 con el que se podía escribir texto utilizando únicamente su
 teclado numérico (del 0 al 9).

 Crea una función que transforme las pulsaciones del T9 a su
 representación con letras.
 - Debes buscar cuál era su correspondencia original
 - Cada bloque de pulsaciones va separado por un guión.
 - Si un bloque tiene más de un número, debe ser siempre el mismo.
 - Ejemplo:
     Entrada: 6-666-88-777-33-3-33-888
     Salida: MOUREDEV
 */

const t9Mapping = {
  '1': '.,¿?¡!-_',
  '2': 'ABC',
  '3': 'DEF',
  '4': 'GHI',
  '5': 'JKL',
  '6': 'MNO',
  '7': 'PQRS',
  '8': 'TUV',
  '9': 'WXYZ',
  '0': ' ',
}

const t9Keyboard = (value) => {

  const keyMap = value.split('-');

  let text = '';

  for (let value of keyMap) {
    const key = value[0];
    const word = t9Mapping[key].slice(value.length - 1, value.length)

    text += word;
  }

  return text;
};

console.log(t9Keyboard('6-666-88-777-33-3-33-888'));
console.log(t9Keyboard('44-666-555-2-0-6-88-66-3-666-111111'));
