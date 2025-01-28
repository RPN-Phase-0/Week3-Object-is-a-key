function highestScore(students) {
  const objHighest = {};

  for (let i = 0; i < students.length; i++) {
    const studentClass = students[i].class;
    const studentName = students[i].name;
    const studentScore = students[i].score;

    if (!objHighest[studentClass]) {
      objHighest[studentClass] = {
        name: studentName,
        score: studentScore,
      };
    }

    if (studentScore > objHighest[studentClass].score) {
      objHighest[studentClass] = {
        name: studentName,
        score: studentScore,
      };
    }
  }

  return objHighest;
}

// TEST CASE
console.log(highestScore([
  { name: 'Dimitri', score: 90, class: 'foxes' },
  { name: 'Alexei', score: 85, class: 'wolves' },
  { name: 'Sergei', score: 74, class: 'foxes' },
  { name: 'Anastasia', score: 78, class: 'wolves' }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
  { name: 'Alexander', score: 100, class: 'foxes' },
  { name: 'Alisa', score: 76, class: 'wolves' },
  { name: 'Vladimir', score: 92, class: 'foxes' },
  { name: 'Albert', score: 71, class: 'wolves' },
  { name: 'Viktor', score: 85, class: 'tigers' }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}