function fpb(angka1, angka2) {
    let len = angka1 < angka2 ? angka1 : angka2;
    let gcd = 1;

    for (let i = 1; i < len; i++) {
        if (angka1 % i === 0 && angka2 % i === 0) {
            gcd = i;
        }
    }

    return gcd;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

// function findDivisors(num) {
//     const divisors = [];
//
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             divisors.push(i);
//         }
//     }
//
//     return divisors;
// }

// function fpb(angka1, angka2) {
//     const divisorsA = findDivisors(angka1);
//     const divisorsB = findDivisors(angka2);
//
//     let gcd = -1;
//
//     for (let i = 0; i < divisorsA.length; i++) {
//         for (let j = 0; j < divisorsB.length; j++) {
//             if (divisorsA[i] === divisorsB[j]) {
//                 gcd = divisorsA[i];
//             }
//         }
//     }
//
//     return gcd;
// }
