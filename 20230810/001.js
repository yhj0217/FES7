const person = {
  name: "재현",
  age: 20,
  gender: "male",
};

const props = Object.keys(person);

for (let i = 0; i < props.length; i++) {
  console.log(`key: ${props[i]} , value: ${person[props[i]]}`);
}
let input;

do {
  input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");
