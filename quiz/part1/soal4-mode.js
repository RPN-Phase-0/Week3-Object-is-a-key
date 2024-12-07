function cariModus(arr) {
    let data = {}

    for (let i = 0; i < arr.length; i++) {
        if (data[arr[i]]) {
            data[arr[i]] += 1
        } else {
            data[arr[i]] = 1
        }
    }

    if (Object.keys(data).length === 1) {
        return -1;
    }

    let most = -1
    let mode = -1

    for (const value in data) {
        if (data[value] > 1 && data[value] > most) {
            most = data[value];
            mode = value;
        }
    }

    return Number(mode);
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
