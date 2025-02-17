function cariMedian(arr) {
    arr.sort((a, b) => a - b)

    var n = arr.length
    var m = Math.floor(n / 2)
    var isOdd = n % 2 === 1

    return isOdd ? arr[m] : (arr[m - 1] + arr[m]) / 2
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
