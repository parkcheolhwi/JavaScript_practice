'use strict';

// function update(){
//   //document.querySelector("h1").textContent = "Changed!";
//   // document.querySelectorAll("p").forEach((p, index) => {
//   //   p.textContent = `${index}番目のp`;
//   // });
//   document.getElementById("target").textContent = "Changed!";
  
// }
// document.querySelector("button").addEventListener("click", () => {
  // const targetNode = document.getElementById("target");

  // targetNode.className = "my-color";
  // if (targetNode.classList.contains("my-color") ){
  //   targetNode.classList.remove("my-color");
  // }else{
  //   targetNode.classList.add("my-color");
  // }

  //targetNode.classList.toggle("my-color");

  // targetNode.textContent = targetNode.dataset.translation;

  // const item2 = document.createElement("li");
  // item2.textContent = "item2";

  // const ul = document.querySelector("ul");
  // ul.appendChild(item2);

  // const item0 = document.querySelectorAll("li")[0];
  // const copy = item0.cloneNode(true); // copy

  // const ul = document.querySelector("ul");
  // const item2 = document.querySelectorAll("li")[2];
  // ul.insertBefore(copy, item2);

  // const itme = document.querySelectorAll("li")[1];

  // document.querySelector("ul").removeChild(itme);

  // const li = document.createElement("li");
  // const text = document.querySelector("input");
  // li.textContent = text.value;

  // document.querySelector("ul").append(li);

  // text.value="";
  // text.focus();

  // const li = document.createElement("li");
  // const color = document.querySelector("select");
  // console.log(color);
  // li.textContent = `${color.value} - ${color.selectedIndex}`;
  // document.querySelector("ul").append(li);

  // const colors = document.getElementsByName("color");
  // let selectedColor;
  
  // colors.forEach(color => {
  //   if(color.checked === true) {
  //     selectedColor = color.value;
  //   }
  // });
  

  // const li = document.createElement("li");
  // li.textContent = selectedColor;
  // document.querySelector("ul").append(li);

  // const colors = document.querySelectorAll("input");
  // const li = document.createElement("li");
  // let selectedColor = new Array();
  // colors.forEach(color => {
  //   if(color.checked === true) {
  //     selectedColor.push(color.value);
  //   }
  // });

  // li.textContent = selectedColor.join("/");
  // document.querySelector("ul").append(li);
// });


// document.querySelector("button").addEventListener("mousemove", () =>{
//   console.log("double click");
// });

// document.addEventListener("mousemove", e =>{
//   console.log(e.clientX, e.clientY);
// });
// document.addEventListener("keydown", e =>{
//   if(e.key == "Delete") alert("delete");
//   console.log(e.key);
// });

// const text = document.querySelector("textarea");

// text.addEventListener("focus", () =>{
//   console.log("focus");
// })
// text.addEventListener("blur", () =>{
//   console.log("blur");
// })
// text.addEventListener("input", () =>{
//   const content = document.querySelector("p");
//   content.textContent = text.value;
// })
// text.addEventListener("change", () =>{
//   console.log("change");
// })


// document.querySelector("form").addEventListener("submit", e =>{
//   e.preventDefault();
//   console.log("submit");
// }) ;

// document.querySelector("ul").addEventListener("click", e => {
//   if(e.target.nodeName === "LI"){
//     e.currentTarget.classList.toggle("done");
//   }
// });