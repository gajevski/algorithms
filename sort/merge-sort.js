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
function merge(leftArray, rightArray) {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        let leftElement = leftArray[leftIndex];
        let rightElement = rightArray[rightIndex];
        if (leftElement < rightElement) {
            sortedArray.push(leftElement);
            leftIndex++;
        } else {
            sortedArray.push(rightElement);
            rightIndex++;
        }
    }
    return [...sortedArray, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
}

// 1. if array length is <= 1 return array
// 2. else find middle of the array
// 3. split array into left and right 
// 4. merge the left and right problems with merge function
function mergeSort(array) {
    if (array.length <= 1) return array;
    let middle = Math.floor(array.length / 2);
    let leftArray = array.slice(0, middle);
    let rightArray = array.slice(middle, array.length);

    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    )
}


let arr = [12, 9, 3, 7, 14, 11];

console.log(mergeSort(arr));