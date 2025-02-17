function cariModus(arr) {
  const frekuensi = {};
  for (const num of arr) {
    frekuensi[num] = (frekuensi[num] || 0) + 1;
  }

  let maxFrekuensi = 0;
  for (const key in frekuensi) {
    if (frekuensi[key] > maxFrekuensi) {
      maxFrekuensi = frekuensi[key];
    }
  }

  if (maxFrekuensi === 1 || maxFrekuensi === arr.length) {
    return -1;
  }

  for (const num of arr) {
    if (frekuensi[num] === maxFrekuensi) {
      return num;
    }
  }
}

// TEST CASES
// console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1
