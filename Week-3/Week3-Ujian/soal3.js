function highestScore(students) {
  // Code disini
  let result = {};
  
  for(let i = 0; i < students.length; i++) {
    let nama = students[i].name;
    let skor = students[i].score;
    let kelas = students[i].class;

    if (!result[kelas] || skor > result[kelas].score) {
      result[kelas] = { name: nama, score: skor, class: kelas };
    }

  }

  return result;
  
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 90, //85
      class: "foxes",
    },
    {
      name: "Alexei",
      score: 85, //90
      class: "wolves",
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes",
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves",
    },
  ])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

// console.log(
//   highestScore([
//     {
//       name: "Alexander",
//       score: 100,
//       class: "foxes",
//     },
//     {
//       name: "Alisa",
//       score: 76,
//       class: "wolves",
//     },
//     {
//       name: "Vladimir",
//       score: 92,
//       class: "foxes",
//     },
//     {
//       name: "Albert",
//       score: 71,
//       class: "wolves",
//     },
//     {
//       name: "Viktor",
//       score: 80,
//       class: "tigers",
//     },
//   ])
// );

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
