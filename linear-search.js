// WYSZUKIWANIE LINIOWE

const array = [1, 2, 3, 4, 5];

function search(array, length, target) {
  let result = 'not found';
  for (let i = 0; i < length; i++) {
    if (array[i] === target) {
      result = i;
    }
  }
  return `${target} found at index ${result}`;
}

console.log(search(array, array.length, 5));

// LEPSZE WYSZUKIWANIE LINIOWE

const array = [1, 2, 3, 4, 5];

function search(array, length, target) {
  for (let i = 0; i < length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
}

console.log(search(array, array.length, 5));

// WYSZUKIWANIE LINIOWE Z WARTOWNIKIEM

const array = [1, 2, 3, 4, 5];

function search(array, length, target) {
  const last = array[length - 1];
  array[length - 1] = target;
  let i = 0;
  while (array[i] !== target) i++;
  array[length - 1] = last;
  if (i < length - 1 || array[length - 1] === target) console.log(i);
  else console.log('Not found');
}

search(array, array.length, 1);
