/*
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array
*/

function deepSum (arr) {
  // Code disini
  
   // Jika array kosong, kembalikan pesan
   if (arr.length === 0) {
    return 'No number';
  }

  // Variabel untuk menampung jumlah total
  let total = 0;

  // Looping level pertama (array terluar)
  for (let i = 0; i < arr.length; i++) {
    // Looping level kedua
    for (let j = 0; j < arr[i].length; j++) {
      // Looping level ketiga (array terdalam)
      for (let k = 0; k < arr[i][j].length; k++) {
        // Tambahkan setiap elemen ke total
        total = total + arr[i][j][k];
      }
    }
  }

  return total;
}

//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number

/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if (arrPenumpang.length == 0) {
    return []
  }

  let hasil = []

  // buat perulangan for each aja biar enak 
  arrPenumpang.forEach((a) => {
    let obj = {
      penumpang : a[0],
      narikDari : a[1],
      tujuan : a[2],
      bayar : 0
    }

    let ruteNarikDari = 0
    let tujuan = 0

    // buat perulangan di rute pakai for biasa aja 
    for (let i = 0; i < rute.length; i++) {
      // periksa jika objek naik dari apakah sama kalau sama simpen index nya 
      if (obj.narikDari == rute[i]) {
        // kalau sudah ketemu index nya simpen di varibel trus nantik di kurangi dan di kali 2000
        ruteNarikDari = i
      }
      if (obj.tujuan == rute[i]) {
        tujuan = i
      }
      let ongkos = (tujuan - ruteNarikDari) * 2000
      // kalau sudah masukkan di obj.yang properti nya bayar 
      obj.bayar = ongkos
    }
    

    // masukan objek di dalam aray hasil
    hasil.push(obj)
  });  


  return(hasil)
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
