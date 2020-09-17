'use strict';

{
    let t = 0;
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
    // const g = ctx.createRadialGradient(
    //   canvas.width/2, canvas.height/2, 50,
    //   canvas.width/2, canvas.height/2, 500
    // );
    
    // g.addColorStop(0, "#f00");
    // g.addColorStop(0.3, "#0f0");
    // g.addColorStop(1, "#00f");
    // ctx.fillStyle = g;
    // //ctx.fillRect(0, 0, 600, 240);
    // ctx.fillRect(0, 0, canvas.width, canvas.height);


    //影の付け方
    // ctx.shadowOffsetX = 4;
    // ctx.shadowOffsetY = 4;
    // ctx.shadowBlur = 4;
    // ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    // ctx.fillRect(50, 50, 50, 50);

    // 線を引く
    // ctx.beginPath();
    // ctx.moveTo(50, 50);
    // ctx.lineTo(100, 50);
    // ctx.setLineDash([5, 10]) //点線
    // //ctx.closePath();
    // ctx.stroke();
    // //ctx.fill();

    // ctx.beginPath();
    // ctx.moveTo(50, 100);
    // ctx.lineTo(100, 100);
    // ctx.setLineDash([]) //実線
    // //ctx.closePath();
    // ctx.stroke();
    // //ctx.fill();

    // ctx.beginPath();
    // ctx.moveTo(50, 150);
    // ctx.lineTo(100, 150);
    // ctx.lineWidth = 16;
    // ctx.lineCap ="round";
    // //ctx.closePath();
    // ctx.stroke();
    // //ctx.fill();

    //円弧
    // ctx.beginPath();
    // //ctx.arc(x, y, r, start, end);
    // //ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    // ctx.arc(100, 100, 50, 0, 180 / 180 * Math.PI, true);
    // //ctx.stroke();
    // ctx.fill();


    //ctx.ellipse(x, y, rx, ry, rotation, start, end);
    //ctx.ellipse(100, 100, 50, 30, 0, 0, 2 * Math.PI);
    // ctx.rect(50, 50, 50, 50);
    // ctx.stroke();


    //textを入れる
    // ctx.beginPath();
    // ctx.moveTo(0, 100);
    // ctx.lineTo(canvas.width, 100);
    // ctx.moveTo(100, 0);
    // ctx.lineTo(100, canvas.height);
    // ctx.stroke();

    // ctx.font ="bold 64px Verdana";
    // ctx.textAlign ="right";
    // ctx.textBaseline = "top";
    // //ctx.fillText("Tokyo", 100, 100, 100);
    // ctx.strokeText("Tokyo", 100, 100, 100);


    // img入れる
    // const img = document.createElement("img");
    // img.src="img/logo.png";
    // img.addEventListener("load", () => {
    //   //ctx.drawImage(img,0,0, 40, 40);
    //   //const pattern = ctx.createPattern(img, "repeat");
    //   const pattern = ctx.createPattern(img, "repeat-x");
    //   ctx.fillStyle = pattern;
    //   ctx.fillRect(0, 0, canvas.width, canvas.height);
    // })
    
    // imgの一部を表示する
    // const img = document.createElement("img");
    // img.src="img/sprite.png";
    // img.addEventListener("load", () => {
    //   //ctx.drawImage(img, 0, 0);
    //   ctx.drawImage(
    //     img,
    //     // sx, sy, sw, sh
    //     70*2, 70, 70, 70,
    //     // dx, dy, dw, dh
    //     0, 0, 35, 35
    //   );
    // })

    // キャラクター生成
    // ctx.fillStyle = "pink";
    // ctx.fillRect(0, 0, 200, 200);

    // ctx.beginPath();
    // ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "black";
    // ctx.fill();

    // ctx.beginPath();
    // ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "skyblue";
    // ctx.fill();

    // ctx.save();

    // ctx.scale(0.5, 0.5);
    // ctx.translate(400, 0);
    // ctx.rotate(45 / 180 * Math.PI);

    // ctx.fillStyle="olive";
    // ctx.fillRect(0, 0, 200, 200);

    // ctx.beginPath();
    // ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "black";
    // ctx.fill();

    // ctx.beginPath();
    // ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "skyblue";
    // ctx.fill();

    // ctx.restore();

    // ctx.fillStyle = "black";
    // ctx.fillRect(80, 120, 40, 40);


    //　アニメーション
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    // ctx.beginPath();
    // ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = 'black';
    // ctx.fill();

    // ctx.beginPath();
    // ctx.ellipse(80 + Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.ellipse(120 + Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = 'skyblue';
    // ctx.fill();

    // t++;
    // setTimeout(draw, 10);


    //高解像度ディスプレイへの対応
    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 240;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_WIDTH * dpr;
    canvas.height = CANVAS_HEIGHT * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = CANVAS_WIDTH + "px";
    canvas.style.height = CANVAS_HEIGHT + "px";
    ctx.font = 'bold 48px Verdana';
    ctx.strokeText('Tokyo', 100, 100);
  }

  draw();
}

