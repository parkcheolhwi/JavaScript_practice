'use strict';
// //{
//   function createColumn(col) {
//     const source = [];
//     for (let i = 0; i < 15; i = (i +1) | 0)  source[i] = (i + 1) + (15 * col);
    
//     const column = [];
//     for (let i = 0; i < 5; i = (i +1) | 0) column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];

//     return column;
//   }

//   function createColumns() {
//     const columns = [];
//     for(let i = 0; i < 5; i++){
//       columns[i] = createColumn(i);
//     }
//     columns[2][2] = 'FREE';

//     return columns;
//   }

//   function renderBingo(columns){
//     for(let row = 0; row < 5; row++) {
//       const tr = document.createElement("tr");
//       for (let col = 0; col < 5; col++){
//         const td = document.createElement("td");
//         td.textContent = columns[row][col];
//         tr.append(td);
//       }
//       document.querySelector("tbody").append(tr);
//     }
//   }

//   const columns = createColumns();
//   renderBingo(columns);
// }


{
  // 配列をランダムにする
  const shuffleArray = arr => {
    for (let i = 0; i < arr.length; i = (i + 1) | 0) {
      const j = Math.floor(Math.random() * arr.length);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // 配列から五つのインデックスを取得する
  const selectArray = (arr) => {
    const colum = [];
    const num = 5;
    for (let i = 0; i < num; i = (i + 1) | 0) colum.push(arr[i]);
    return colum;
  }

  // カラムに使うlengthが５の配列の生成
  const createColumn = (col) =>{
    // col = 0 -> 1~15
    // col = 1 -> 16~30
    // col = 2 -> 31~45
    // col = 3 -> 46~60
    // col = 4 -> 61~75
    const sorces = [];
    for (let i = col * 15; i < (col * 15) + 15; i = (i + 1) | 0) sorces.push(i + 1);

    const shuffleColums = shuffleArray(sorces);  
    const createColumn = selectArray(shuffleColums);

    return createColumn;
  };

  // 5X5のビンゴテーブルを作成
  const createColumns = () => {
    const cols = [];
    for (let i = 0; i < 5; i = (i + 1) | 0) cols[i] = createColumn(i);

    cols[2][2] = "FREE";

    return cols;
  };

  // htmlに表示する
  ((cols) => {
    for(let row = 0; row < 5; row++) {
      const tr = document.createElement("tr");
        for (let col = 0; col < 5; col++){
          const td = document.createElement("td");
          td.textContent = cols[row][col];
           tr.append(td);
        }
      document.querySelector("tbody").append(tr);
    }
  })(createColumns());


}





