'use strict';

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  //const result = ["大吉", "中吉", "凶", "末吉"];
  // const result = ["大吉", "大吉", "大吉", "大吉", "凶"];
  // btn.textContent = result[Math.floor(Math.random() * result.length)];

  const n = Math.random();
  if (n < 0.05){
    btn.textContent = "大吉"; // 5%
  } else if ( n < 0.2) {
    btn.textContent = "中吉"; // 15%
  } else {
    btn.textContent = "凶"; // 80%
  }

  // const num = Math.floor(Math.random() * result.length);
  // btn.textContent = result[num];
  // switch(num){
  //   case 0:
  //     btn.textContent = "大吉";
  //     break;
  //   case 1:
  //     btn.textContent = "中吉";
  //     break;
  //   case 2:
  //     btn.textContent = "凶";
  //     break;
  // }
});