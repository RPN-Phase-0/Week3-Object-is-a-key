//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    var faktor = [];
    for (var i = 1; i <= angka1; i++) {
        if (angka1 % i == 0) {
            faktor.push(i);
        }
    }
    var fpb = 0;
    for (var j = 0; j < faktor.length; j++) {
        if (angka2 % faktor[j] == 0) {
            fpb = Math.max(fpb, faktor[j]);
        }
    }
    return fpb;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1