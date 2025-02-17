function ubahHuruf(kata) {
  let result = "";

  for (let i = 0; i < kata.length; i++) {
    let word = kata[i];

    let nextWord = String.fromCharCode(word.charCodeAt(0) + 1);
    result += nextWord;
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
