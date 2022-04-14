function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (array[middle] === target) {
            return middle;
        }
        if (array[middle] < target) {
            start += 1;
        }
        if (array[middle] > target) {
            end -= 1;
        }
    }
    return 'not found';
}

const arr = [1, 2, 3, 4, 5];

console.log(binarySearch(arr, 4));

function binarySearchRecursive(array, target, start, end) {
    let middle = Math.floor((start + end) / 2);
    if (start > end) return 'not found';
    if (array[middle] === target) return middle;
    if (array[middle] > target) return binarySearchRecursive(array, target, start, middle - 1);
    if (array[middle] < target) return binarySearchRecursive(array, target, middle + 1, end);
}

const arr2 = [1, 2, 3, 4, 5];

console.log(binarySearchRecursive(arr2, 3, 0, arr2.length - 1));