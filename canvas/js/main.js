'use strict';

{
  function draw(){
    const canvas = document.querySelector("canvas");
    
    // ブラウザがcanvasをサポートされてるか確認
    if(typeof canvas.getContext === "undefined"){
      return;
    }
    const ctx = canvas.getContext("2d");

    // 塗りつぶし色
    //ctx.fillStyle = "pink";
    // 枠線の色
    //ctx.strokeStyle = "#f00";
    // 線の太さ
    //ctx.lineWidth = 8;
    
    // ctx.lineJoin = "round";
    // ctx.lineJoin = "bevel";

    // 塗りつぶしの
    // ctx.fillRect(x, y, width, height);
    //ctx.fillRect(50, 50, 50, 50);
    
    // 線だけ
    // ctx.fillRect(x, y, width, height);
    //ctx.strokeRect(50, 50, 50, 50);
    
    // ctx.fillStyle = "skyblue";
    // ctx.strokeStyle = "#00b";
    
    // ctx.fillRect(70, 70, 50, 50);
    // ctx.strokeRect(70, 70, 50, 50);


    // グラデーション
    // ctx.createLinearGradient(x0, y0, x1, y1);
    // const g = ctx.createLinearGradient(0, 0, canvas.width, 0);
    
    // 円形のグラデーション
    // const g = ctx.createRadialGradient(
    //   x0, y0, r0,
    //   x1, y1, r1
    // );
    const g = ctx.createRadialGradient(
      canvas.width/2, canvas.height/2, 50,
      canvas  , y1, r1
    );
    
    g.addColorStop(0, "#f00");
    g.addColorStop(0.3, "#0f0");
    g.addColorStop(1, "#00f");
    ctx.fillStyle = g;
    //ctx.fillRect(0, 0, 600, 240);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  draw();
}