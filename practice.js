'use strict';
// // map() 新しい配列を作る
// // 配列をいてレートする
// // 要素１つずつに処理
// // 新しい配列を生成
// const array = [1 ,2, 4, 8];
// const resultArray = array.map(x => x*2);
// console.log(resultArray); // Array[2, 4, 8, 16]

// const obj = {
//   "hoge" : {test : "fuga"},
//   "foo" : {test : "bar"},
//   "fiz" : {test : "buzz"},  
// };
// console.log(obj);

// const objectArray = Object.keys(obj).map(key => {
//   const value = obj[key];
//   value['id'] = key;
//   console.log(value);
//   return value;
// });
// console.log(objectArray);


// // filter() 条件に合う要素を抽出
// // 配列をいてレートする
// // 条件がtrueの要素のみ返す
// const objectArray2 = [
//   { id: "hoge", text:"fuga"},
//   { id: "foo", text:"buzz"},
//   { id: "fiz", text:"bar"},
// ];

// const result = objectArray2.filter(object => {
//   return object.id === 'foo'
// });

// console.log(result);


// // findIndex() 要素が何番目か知る
// // 配列をいてレートする
// // 条件がtrueの要素が「何番目なのか」を返す

// const objectArray3 = [
//   { id: "hoge", text:"fuga"},
//   { id: "foo", text:"buzz"},
//   { id: "fiz", text:"bar"},
// ];

// const index = objectArray3.findIndex(object => {
//   return object.id === 'fiz';
// })

// console.log(index);

// // test() マッチする文字列か判定
// // 正規表現を使う
// // マッチする->trueを返す
// // マッチしない->falseを返す
// const torahack = 'torahack';
// const charahack = 'charahack';
// const regex = RegExp('tora*');

// console.log(regex.test(torahack));
// console.log(regex.test(charahack));

// console.log(/char*/.test(charahack));



// const arr = new Array(10000000).fill(0).map((v, i) => i);
// console.log(arr);
// const len = arr.length | 0;
// function addSum(v){
//   sum += v;
// }

// // for文の書き方
// // おすすめ for or Typed for
// // for
// for(let i = 0; i < len; i++){}
// // Typed for
// for(let i = 0; i < len; i = (i+1)|0){}


// var a ="asdfasd";
// var b = 'asdfas${a}';
// var c = `asdfasdf${b}`;
// console.log(a);
// console.log(b);
// console.log(c);


// // 
// const name = 5;
// try {
//   console.log(name.toUpperCase());
// } catch (e) {
//   console.log(e);
// }

// const posts = [
//   {
//     text: "Javascriptの勉強中",
//     likeCount: 0,
//     show(){
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     }
//   },
//   {
//     text: "プログラミング楽しい！",
//     likeCount: 0,
//     show(){
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     }
//   }
// ];
// // show(posts[0]);
// posts[0].show();
// posts[1].show();


class Post{

  constructor(text){
    this.text = text;
    this.likeCount = 0;
  }

  show(){
    console.log(`${this.text} - ${this.likeCount}いいね`);
  }

  like(){
    this.likeCount++;
  }

  // 静的メソッド
  // thisは使えない
  static showInfo(){
    console.log("Post class version 1.0");
  }
}

class SponsoredPost extends Post{

  constructor(text, sponsor){
    super(text);
    this.sponsor = sponsor;
  }

  show(){
    super.show();
    console.log(`${this.sponsor}です。`);
  }

}

const aaa = new SponsoredPost("test", "spo");
aaa.show();
aaa.like();
aaa.show();