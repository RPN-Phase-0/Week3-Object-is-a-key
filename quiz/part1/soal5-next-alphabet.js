function ubahHuruf(kata) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let result = "";

    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (kata[i] === alphabet[j]) {
                result += alphabet[j + 1];
            }

            if (kata[i] === 'z') {
                result += 'a';
                break;
            }
        }
    }

    return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zebra')); // afcsb
