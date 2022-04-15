function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallest]) {
                smallest = j;
            }
        }
        let temp = array[i];
        array[i] = array[smallest];
        array[smallest] = temp;
    }
    return array;
}

const arr = [3, 1, 5, 2, 4, 8, 6, 7, 9, 10];

console.log(selectionSort(arr));