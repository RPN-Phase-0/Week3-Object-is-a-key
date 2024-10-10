/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, 
Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, 
yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    let minDigits = Infinity; 

    for (let i = 1; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) { 
            const faktor1 = i;
            const faktor2 = angka / i;
            
            const totalDigits = String(faktor1).length + String(faktor2).length;
            
            if (totalDigits < minDigits) {
                minDigits = totalDigits;
            }
        }
    }

    return minDigits; 

  }
  
//   // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2

//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let arr = str.split('');

  // buat perulngan untuk mengetahui index parameter
  // memeriksa sampai l doang
  for (let i = 0; i < arr.length - 1; i++) {
    // memeriksa sampai  
    for (let a = 0; a < arr.length - 1 - i; a++) {
      if (arr[a] > arr[a + 1]) {
        // Tukar posisi aika elemen sebelumnya lebih besar dari elemen sesudahnya
        let temp = arr[a]; 
        arr[a] = arr[a + 1];
        arr[a + 1] = temp;
      }
    }
  }

  return arr.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!

  // penyimpanan kalimat menjadi aray 
  let kata = kalimat.split("")

  // perulangan for untuk mencari index yang menggunakan huruf besar 
  for (let i = 0; i < kalimat.length; i++) {
    if (kata[i] == kata[i].toUpperCase()) {
      kata[i] = kata[i].toLowerCase()
    } else {
      kata[i] = kata[i].toUpperCase()
    }
  }

  return kata.join("");
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
