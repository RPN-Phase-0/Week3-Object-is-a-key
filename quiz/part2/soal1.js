function digitPerkalianMinimum(angka) {
    let digitMin = Infinity;
    
    for (let i = 1; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) {
            let hasilBagi = angka / i;
            let total = String(i).length + String(hasilBagi).length;
            if (digitMin > total) {
                digitMin = total;
            }
        }
    }
    return digitMin;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2