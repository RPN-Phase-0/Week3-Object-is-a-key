function naikAngkot(arrPenumpang) {
    const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    const result = [];

    let xIndex = 0;
    let yIndex = 0;

    for (const passenger of arrPenumpang) {
        for (let i = 0; i < rute.length; i++) {
            const route = rute[i];
            if (passenger[1] === route) {
                xIndex = i;
            }
            if (passenger[2] === route) {
                yIndex = i;
            }
        }

        result.push({
            penumpang: passenger[0],
            naikDari: passenger[1],
            tujuan: passenger[2],
            bayar: 2000 * Math.abs(xIndex - yIndex)
        })
    }

    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([]));
//[]
