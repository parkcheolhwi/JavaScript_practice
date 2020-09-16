'use strict';

// {
//   const question = document.getElementById("question");
//   const choices = document.getElementById("choices");
//   const btn = document.getElementById("btn");
//   const result = document.getElementById("result");
//   const scoreLabel = document.querySelector("#result>p");

//   const quizSet = shuffle([
//     {
//       q:"世界で一番大きい湖は?",
//       c:["カスピ海", "カリブ海", "琵琶湖"]
//     },
//     {
//       q:"2の８乗は?",
//       c:["256", "64", "1024"]
//     },
//     {
//       q:"次のうち、最初にリリースされた言語は?",
//       c:["Python", "Java", "HTML"]
//     },
//   ]);

//   let currentNum = 0;
//   let isAnswered;
//   let score = 0;
  
  
//   function shuffle(arr){
//     for(let i = arr.length - 1; i > 0; i--){
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[j], arr[i]] = [arr[i], arr[j]];
//     }
//     return arr;
//   }

//   function checkAnswer(li){
//     if (isAnswered === true) {
//       return false;
//     }

//     isAnswered = true;

//     if(li.textContent === quizSet[currentNum].c[0]){
//       li.classList.add("correct");
//       score++;
//     }else{
//       li.classList.add("wrong");
      
//     }

//     btn.classList.remove("disabled");
//   }



//   function setQuiz(){
//     isAnswered = false;

//     question.textContent = quizSet[currentNum].q;

//     while (choices.firstChild) {
//       choices.removeChild(choices.firstChild);
//     }
  
//     const shuffledChoices = shuffle([...quizSet[currentNum].c]);

//     shuffledChoices.forEach(choice => {
//       const li = document.createElement("li");
//       li.textContent = choice;
//       li.addEventListener("click", () => {
//         checkAnswer(li);
//       });
//       choices.appendChild(li);
//     });

//     if(currentNum === quizSet.length - 1){
//       btn.textContent = "Show Score";
//     }
//   }


//   btn.addEventListener("click", () => {
//     if(btn.classList.contains("disabled")){
//       return;
//     }

//     btn.classList.add("disabled");

//     if(currentNum === quizSet.length -1) {
//       scoreLabel.textContent = `Score : ${score} / ${quizSet.length}`;
//       result.classList.remove("hidden");
//     }else{
//       currentNum++;
//       setQuiz();
//     }
//   });
//   setQuiz();
// }

{
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");

  let problemCnt = 0;
  let btnCheck;
  let answerCnt = 0;

  const quizSet = shuffleArray([
    {question : "Q1", answerList : ["a1", "b1", "c1"]},
    {question : "Q2", answerList : ["a2", "b2", "c2"]},
    {question : "Q3", answerList : ["a3", "b3", "c3"]},
    {question : "Q4", answerList : ["a4", "b4", "c4"]},
    {question : "Q5", answerList : ["a5", "b5", "c5"]}
  ]);


  // 配列を混ぜる
  function shuffleArray(arr) {
    for (let i = 0; i < arr.length; i = (i + 1) | 0){
      let num = Math.floor(Math.random() * arr.length);
      [arr[i], arr[num]] = [arr[num], arr[i]];
    }
    return arr;
  };


  const setQuiz = () => {
    while(choices.firstChild) choices.removeChild(choices.firstChild);
    
    //問題表示
    question.textContent = quizSet[problemCnt].question;

    //選択肢リスト
    const list = shuffleArray([...quizSet[problemCnt].answerList]);
    list.forEach((answer) => {
      const li = document.createElement("li");
      li.textContent = answer;
      li.addEventListener("click", () => {
        if(btnCheck) return;
        
        btnCheck = true;

        if(quizSet[problemCnt].answerList[0] === li.textContent){
          answerCnt++;
          li.classList.add("correct");
        }else{
          li.classList.add("wrong");
        }

        btn.classList.remove("disabled");
      });
      choices.append(li);
    });

    if(problemCnt === quizSet.length -1){
      btn.textContent = "Show Score";
    }
  };

  // ボタンクリックイベント
  btn.addEventListener("click", () => {

    if(btn.classList.contains("disabled")) return;

    btnCheck = false;
    btn.classList.add("disabled");

    if(problemCnt === quizSet.length - 1){
      document.querySelector("#result>p").textContent = `score : ${answerCnt} / ${quizSet.length}`;
      result.classList.remove("hidden");
     }else{
      problemCnt++;
      setQuiz();
    }
  });

  setQuiz();
}