//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let newWord = '';
    for (let i = 0; i < kata.length; i++) {
        // const element = alphabet[i];
        for (let j = 0; j < alphabet.length; j++) {
            // const element = alphabet[j];
            if(kata[i] === alphabet[j]) {
                // console.log(kata[i], alphabet[j + 1])
                newWord += alphabet[j + 1]
            }
        }
    }
    return newWord;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu