'use strict';

// {
//   const timer = document.getElementById("timer");
//   const start = document.getElementById("start");
//   const reset = document.getElementById("reset");
//   const stop = document.getElementById("stop");

//   let startTime;
//   let timeoutId;
//   let elapsedTime = 0;

//   function countUp(){

//     const d = new Date(Date.now() - startTime + elapsedTime);
//     const m = String(d.getMinutes()).padStart(2, '0');
//     const s = String(d.getSeconds()).padStart(2, '0');
//     const ms = String(d.getMilliseconds()).padStart(3, '0');

//     timer.textContent =`${m}:${s}:${ms}`;

//     timeoutId = setTimeout(() => {
//       countUp();
//     }, 10);
//   }

//   function setButtonStateInitial(){
//     start.classList.remove("inactive");
//     stop.classList.add("inactive");
//     reset.classList.add("inactive");
//   }
//   function setButtonStateRunning(){
//     start.classList.add("inactive");
//     stop.classList.remove("inactive");
//     reset.classList.add("inactive");
//   }
//   function setButtonStateStop(){
//     start.classList.remove("inactive");
//     stop.classList.add("inactive");
//     reset.classList.remove("inactive");
//   }

//   setButtonStateInitial();

//   start.addEventListener("click", () => {
//     if(start.classList.contains("inactive") === true){
//       return;
//     }
//     setButtonStateRunning();
//     startTime = Date.now();
//     countUp();
//   });
//   stop.addEventListener("click", () => {
//     if(stop.classList.contains("inactive") === true){
//       return;
//     }
//     setButtonStateStop();
//     clearTimeout(timeoutId);
//     elapsedTime += Date.now() - startTime;
//   });
//   reset.addEventListener("click", () => {
//     if(reset.classList.contains("inactive") === true){
//       return;
//     }
//     setButtonStateInitial();
//     elapsedTime = 0;
//     timer.textContent = "00:00:00";
//   });


// }

{
  const timer = document.getElementById("timer");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");

  let startTime;
  let runningTime;
  let saveTime = 0;

  const countStart = () => {
    const d = new Date(Date.now() - startTime + saveTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');

    timer.textContent = `${m}:${s}:${ms}`;

    runningTime = setTimeout(() => {
      countStart();
    }, 10);

  };

  const setButtonStateInitial = () => {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  };
  const setButtonStateRunning = () => {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  };
  const setButtonStateStop = () => {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  };


  start.addEventListener("click", () => {
    setButtonStateInitial();
    startTime = Date.now();
    countStart();
  });
  stop.addEventListener("click", () => {
    setButtonStateRunning();
    saveTime += Date.now() - startTime;
    clearTimeout(runningTime);
  });
  reset.addEventListener("click", () => {
    setButtonStateStop();
    timer.textContent = "00:00:00";
  });
}
