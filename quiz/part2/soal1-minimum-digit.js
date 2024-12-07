function digitPerkalianMinimum(angka) {
    let minDigit = Number.MAX_VALUE;
    let curDigit = "";

    for (let i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            curDigit = String(angka / i) + String(i);

            if (curDigit.length < minDigit) {
                minDigit = curDigit.length;
            }
        }
    }

    return minDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
