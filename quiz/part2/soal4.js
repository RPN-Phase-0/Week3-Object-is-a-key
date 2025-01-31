/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
    // you can only write your code here!
    let arr = num.split('');
    let n = arr.length;
    let letakA, letakB;
    for(let i = 0; i < n; i++){
        if(arr[i] == 'a'){
            for(let j = i; j < n; j++){
                if(arr[j] == 'b' && Math.abs(i - j) >= 3) return true;
            }
        }else if(arr[i] == 'b'){
            for(let j = i; j < n; j++){
                if(arr[j] == 'a' && Math.abs(i - j) >= 3) return true;
            }
        }
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false