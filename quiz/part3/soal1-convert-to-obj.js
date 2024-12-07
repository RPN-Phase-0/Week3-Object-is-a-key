function changeMe(arr) {
    if (!arr.length) {
        return "";
    }

    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        obj[`${arr[i][0]} ${arr[i][1]}`] = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: typeof(arr[i][3]) === 'number' ? 2024 - arr[i][3] : "Invalid Birth Year"
        };
    }

    console.log(obj);
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]);
// ""
