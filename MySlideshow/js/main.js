'use strict';

// {
//   const images = [
//     'img/pic00.png',
//     'img/pic01.png',
//     'img/pic02.png',
//     'img/pic03.png',
//     'img/pic04.png',
//     'img/pic05.png',
//     'img/pic06.png',
//     'img/pic07.png',
//   ];

//   let currentIndex = 0;

//   const mainImage = document.getElementById("main");
//   mainImage.src = images[currentIndex];

//   images.forEach((image, index) => {
//     const img = document.createElement("img");
//     img.src = image;
    
//     const li = document.createElement("li");
//     if(index === currentIndex){
//       li.classList.add("current");
//     }

//     li.addEventListener("click", () => {
//       mainImage.src = image;
//       const thumbnails = document.querySelectorAll(".thumbnails > li");
//       thumbnails[currentIndex].classList.remove("current");
//       currentIndex = index;
//       thumbnails[currentIndex].classList.add("current");
//     });

//     li.appendChild(img);

//     document.querySelector(".thumbnails").appendChild(li);
//   });

//   const next = document.getElementById("next");
//   next.addEventListener("click", () => {
//     let target = currentIndex + 1;
//     if (target === images.length){
//       target = 0;
//     }
//     document.querySelectorAll(".thumbnails > li")[target].click();
//   });

//   const prev = document.getElementById("prev");
//   prev.addEventListener("click", () => {
//     let target = currentIndex - 1;
//     if (target < 0){
//       target = images.length -1;
//     }
//     document.querySelectorAll(".thumbnails > li")[target].click();
//   });

//   let timeoutId;
//   function playSlideshow(){
    
//     timeoutId = setTimeout(() => {
//       next.click();
//       playSlideshow();
//     }, 1000);
//   };

//   let isPlaying = false;

//   const play = document.getElementById("play");
//   play.addEventListener("click", () => {
//     if(isPlaying === false){
//       playSlideshow()
//       play.textContent = "Pause";
//     }else{
//       clearTimeout(timeoutId);
//       play.textContent = "Play";
//     }
//     isPlaying = !isPlaying;
//   });
// }

{
  // imageの配列
  const images = [
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
  ];

  // 配列のインデックス
  let index = 0;

  // メインイメージを表示
  const main = document.getElementById("main");
  main.src = images[index];

  // リストイメージを表示
  images.forEach((image, i) => {
    
    // li, imgタグ生成
    const li = document.createElement("li");
    let img = document.createElement("img");
    
    // imgの属性をimage配列の値としてliの中に入れる
    img.src = image;
    li.appendChild(img);

    // 初期値として０番を塗ります。
    if(index === i) li.classList.add("current");

    // liをクリックするイベント
    li.addEventListener("click", () => {
      li.classList.add("current");
      main.src = image;
      document.querySelectorAll(".thumbnails > li")[index].classList.remove("current");
      index = i;
      document.querySelectorAll(".thumbnails > li")[index].classList.add("current");
    });

    // ulタグ中に入れます。
    document.getElementsByClassName("thumbnails")[0].append(li);
  });


  // nextクリックすると
  document.getElementById("next").addEventListener("click", () => {
    
    let target = index + 1;
    if(target === images.length) target = 0;
    
    document.querySelectorAll(".thumbnails > li")[target].click();
  });

  // prevクリックすると
  document.getElementById("prev").addEventListener("click", () => {
    let target = index - 1;
    if(target === -1) target = images.length -1;
    
    document.querySelectorAll(".thumbnails > li")[target].click();
  });

  // 1秒ごとに繰り返す
  let timeoutId;
  function playSlideShow(){
    timeoutId = setTimeout(() => {
      document.getElementById("next").click();
      playSlideShow();
    }, 1000);
  };

  // playボタンをクリックする
  let playing = false;
  document.getElementById("play").addEventListener("click", () => {
    if(playing === false){
        playSlideShow()
        play.textContent = "Pause";
        playing = true;
      }else{
        clearTimeout(timeoutId);
        play.textContent = "Play";
        playing = false;
      }
  });


}