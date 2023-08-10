const studentList = [
  {
    id: 1,
    name: "원범",
    score: "great",
  },
  {
    id: 2,
    name: "김진",
    score: "so cute",
  },
  {
    id: 3,
    name: "혜원",
    score: "good good",
  },
  {
    id: 4,
    name: "재현",
    score: "too cool for school",
  },
];

studentList.forEach(function (value) {
  console.log(value.name);
});

const scores = [];
studentList.forEach(function (s) {
  scores.push(`${s.score}` + "♥");
});
