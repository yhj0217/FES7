const menu = [
  { name: "아메리카노", price: 2000 },
  { name: "카페라떼", price: 2500 },
  { name: "카페모카", price: 2800 },
  { name: "핫초코", price: 3000 },
  { name: "과일주스", price: 3500 },
];

let input = 0;

while (input !== -1) {
  input = parseInt(
    prompt(
      "메뉴를 선택해주세요 : 아메리카노 : 1 / 카페라떼: 2 / 카페모카 : 3 / 핫초코 : 4 / 과일주스 : 5 / 종료하기 : -1 "
    )
  );
  switch (input) {
    case 1:
      console.log(`메뉴: ${menu[0].name} , 가격: ${menu[0].price}`);
      break;
    case 2:
      console.log(`메뉴: ${menu[1].name} , 가격: ${menu[1].price}`);
      break;
    case 3:
      console.log(`메뉴: ${menu[2].name} , 가격: ${menu[2].price}`);
      break;
    case 4:
      console.log(`메뉴: ${menu[3].name} , 가격: ${menu[3].price}`);
      break;
    case 5:
      console.log(`메뉴: ${menu[4].name} , 가격: ${menu[4].price}`);
      break;
    case -1:
      console.log("종료합니다");
    default:
      console.log("잘못된 입력입니다.");
  }
}
