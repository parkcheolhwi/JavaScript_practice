'use strict';
// {
//   class Panel {
//     constructor(){
//       const section = document.createElement("section");
//       section.classList.add("panel");

//       this.img = document.createElement("img");
//       this.img.src = this.getRandomImage();

//       this.timeoutId = undefined;

//       this.stop = document.createElement("div");
//       this.stop.textContent = "STOP";
//       this.stop.classList.add("stop", "inactive");
//       this.stop.addEventListener("click", () => {
//         if(this.stop.classList.contains("inactive")) return;
//         this.stop.classList.add("inactive");
//         clearTimeout(this.timeoutId);

//         panelsLeft--;

//         if(panelsLeft === 0){
//           spin.classList.remove("inactive");
//           panelsLeft = 3;
//           checkResult();
//         }
//       });
    
//       section.appendChild(this.img);
//       section.appendChild(this.stop);

//       const main = document.querySelector("main");
//       main.appendChild(section);
//     }

//     getRandomImage(){
//       const images = [
//         "img/seven.png",
//         "img/bell.png",
//         "img/cherry.png",
//       ];

//       return images[Math.floor(Math.random() * images.length)];
//     }

//     spin() {
//       this.img.src = this.getRandomImage();
//       this.timeoutId = setTimeout(() => {
//         this.spin();
//       }, 50)
//     }

//     isUnmatched(p1, p2){
//       return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
//     }

//     unmatch(){
//       this.img.classList.add("unmatched");
//     }

//     activate(){
//       this.img.classList.remove("unmatched");
//       this.stop.classList.remove("inactive");
//     }

//   }


//   function checkResult(){
//     if(panels[0].isUnmatched(panels[1], panels[2])){
//       panels[0].unmatch();
//     }
//     if(panels[1].isUnmatched(panels[0], panels[2])){
//       panels[1].unmatch();
//     }
//     if(panels[2].isUnmatched(panels[1], panels[0])){
//       panels[2].unmatch();
//     }
//   }

//   const panels = [
//     new Panel(),
//     new Panel(),
//     new Panel()
//   ];

//   let panelsLeft = 3;


//   const spin = document.getElementById("spin");
//   spin.addEventListener("click", () => {
//     if(spin.classList.contains("inactive")) return;
//     spin.classList.add("inactive");
//     panels.forEach(panel => {
//       panel.activate();
//       panel.spin();
//     });
//   });
// }


{
  class Panel{
    constructor(){
      // section 生成
      const section = document.createElement("section");
      section.classList.add("panel");

      // imgタグ生成
      this.img = document.createElement("img");
      this.img.src = "img/seven.png";

      // stopボタン生成
      this.stop = document.createElement("div");
      this.stop.textContent = "STOP";
      this.stop.classList.add("stop", "inactive");
      this.stop.addEventListener("click", () => {
        if(this.stop.classList.contains("inactive")) return;
        this.stop.classList.add("inactive");

        clearTimeout(this.timeoutId);
  
        resultCnt--;

        if(resultCnt === 0){
          spin.classList.remove("inactive");
          resultCnt = 3;
        }
      });

      // mainの中に表示する
      section.append(this.img);
      section.append(this.stop);
      document.querySelector("main").append(section);
    }

   
    // 写真を繰り返しながら表示
    spin(image){
      this.img.src = image[Math.floor(Math.random() * images.length)];
      this.timeoutId = setTimeout(() => {
        this.spin(image);
      }, 50);
    }

    
    active(){
      this.stop.classList.remove("inactive");
    }
  }


  const images = ["img/seven.png", "img/cherry.png", "img/bell.png"];
  const panels = [new Panel(), new Panel(), new Panel()];
  let resultCnt = 3;

  // SPINのクリックイベント
  document.getElementById("spin").addEventListener("click", () => {
    if(document.getElementById("spin").classList.contains("inactive")) return;
    document.getElementById("spin").classList.add("inactive");
    
    panels.forEach(panel => {
      panel.active();
      panel.spin(images);
    });
  });
}