function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  const result = [];

  for (let i = 0; i < arrPenumpang.length; i++) {
    const [penumpang, naikDari, tujuan] = arrPenumpang[i];

    const idxNaik = rute.indexOf(naikDari);
    const idxTurun = rute.indexOf(tujuan);

    const jumlahRute = idxTurun - idxNaik;
    const bayar = jumlahRute * 2000;

    result.push({
      penumpang: penumpang,
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: bayar,
    });
  }
  return result;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
