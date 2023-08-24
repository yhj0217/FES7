let age = prompt("나이를 입력해주세요");

if (age >= 18) {
  console.log("안녕하세요!");
} else if (age >= 10) {
  console.log("안녕! 반가워 꼬마친구!");
} else console.log("부럽다....");


let grade = prompt("성적을 입력해주세요");

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else
    console.log("강해져서 돌아와라");

    const grade = prompt("성적을 입력해주세요");
    const result = (grade >= 90) ? console.log("A") :
    (grade >= 80) ? console.log("B") :
    (grade >= 70) ? console.log("C") :
    (grade >= 60) ? console.log("D") : console.log("강해져서 돌아와라");

    switch(grade) (grade >= 90) {
        console.log("A");
      } else if (grade >= 80) {
        console.log("B");
      } else if (grade >= 70) {
        console.log("C");
      } else if (grade >= 60) {
        console.log("D");
      } else
          console.log("강해져서 돌아와라");

    switch (true) {
        case score >= 90:
            console.log("A");
            break;
        case score >= 80:
            console.log("B");
            break;
        case score >= 70:
            console.log("C");
            break;
        case score >= 60:
            console.log("D");
            break;
        default:
            console.log("강해져서 돌아와라");
    }