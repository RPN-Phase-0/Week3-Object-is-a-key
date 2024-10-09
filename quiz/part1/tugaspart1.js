//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    // you can only write your code here!
    if (angka < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) {
            return false; 
        }
    }
    
    return true; 
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false

//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!

    let iniFpb = ""

    for (let i = 0; i < Math.min(angka1,angka2); i++) {
        
        if (angka1 % i == 0 && angka2 % i == 0) {
            iniFpb = i
        }
    }

    return iniFpb;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1

function cariMedian(arr) {
    // you can only write your code here!

    let Cek = Math.floor(arr.length / 2)

    if (arr.length % 2 !== 0) {
        return Cek;
    } else {
        return (arr[Cek - 1] + arr[Cek]) / 2;
    }

  }

  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
