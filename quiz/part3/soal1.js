function changeMe(arr) {
    // you can only write your code here!
    if (arr.length === 0) {
        return "";
    }
    let result = "";
    let currentYear = 2023;

    for (let i = 0; i < arr.length; i++) {
        let firstName = arr[i][0];
        let lastName = arr[i][1];
        let gender = arr[i][2];
        let birthYear = arr[i][3];

        if (birthYear === undefined) {
        result += `${firstName} ${lastName}: { firstName: '${firstName}', lastName: '${lastName}', gender: '${gender}', age: 'Invalid Birth Year' }\n`;
        } else {
        let age = currentYear - birthYear;
        result += `${firstName} ${lastName}: { firstName: '${firstName}', lastName: '${lastName}', gender: '${gender}', age: ${age} }\n`;
        }
    }
    return result;
  }
  
  // TEST CASES
  console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  //intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.
  
//   changeMe([]); // ""