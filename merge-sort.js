// Merge sort as a recursive algorithm, must have a base case.
// In this case it is an array of length 1 (single element).
// If we have more than one element then we need to split the problem into two smaller subproblems.
// We then perform a recursive mergeSort for the left problem and a mergeSort for the right problem.
// We then merge the left and right problems using the merge function

// 1. create empty array to hold the results
// 2. set left and right index variables to 0
// 3. while left index < left array length and right index < right array length do:
//    3a. assign left element to left array [left index] and to right element assign right array [right index]
//    3b. if left element < right element push it to array, increment left index
//    3c. else push right element to the array and increment right index
// 4. return deconstructed array, deconstructed sliced left array(left index), deconstructed sliced right array(right index)
function merge(leftArr, rightArr) {
    let sortedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        let leftElement = leftArr[leftIndex];
        let rightElement = rightArr[rightIndex];

        if (leftElement < rightElement) {
            sortedArr.push(leftElement);
            leftIndex++;
        } else {
            sortedArr.push(rightElement);
            rightIndex++;
        }
    }

    return [...sortedArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

// 1. if array is <= 1 return array
// 2. else find middle of the array
// 3. split array into left and right 
// 4. merge the left and right problems with merge function
function mergeSort(array) {
    if (array.length <= 1) return array;

    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

let arr = [12, 9, 3, 7, 14, 11];

console.log(mergeSort(arr));