function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let key = array[i];
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

let arr = [12, 9, 3, 7, 14, 11];

console.log(insertionSort(arr));