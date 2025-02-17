function changeMe(arr) {
    const tahun = 2023;

    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];
        const firstName = person[0];
        const lastName = person[1];
        const gender = person[2];
        const year = person[3];

        const birthDay = year ? tahun - year : 'Invalid Birth Year'

        console.log(`${i + 1}. ${firstName} ${lastName}`);
        console.log({
            firstName : firstName,
            lastName : lastName,
            gender : gender,
            age : birthDay
        })        
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  //intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

  changeMe([]); // ""