// var MongoClient = require('mongodb').MongoClient,
//     settings = require('./settings');
// MongoClient.connect("mongodb://"+settings.host+"/"+settings.db, function(err, db) {
//     if (err) { return console.dir(err); }
//     console.log("connected to db");
//     db.collection("users", function(err, collection) {
//         var docs = [
//             {name: "taguchi", score: 40},
//             {name: "fkoji", score: 80},
//             {name: "dotinstall", score: 60}
//         ];
//         /*
//         collection.find({name: "taguchi"}).toArray(function(err, items) {
//             console.log(items);
//         });
//         */
//         var stream = collection.find().stream();
//         stream.on("data", function(item) {
//             console.log(item);
//         });
//         stream.on("end", function() {
//             console.log("finished.")
//         });
//     });
// });


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/* 接続先URL */
const url = 'mongodb://localhost:27017';

/**
 * 追加オプション
 * MongoClient用オプション設定
 */
const connectOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

/**
 * データベース接続
 * データベース接続用の引数追加
 */
MongoClient.connect(url, connectOption, (err, client) => {
  if(err) throw err;

  var dbo = client.db("mydb");
  dbo.collection("users").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    client.close();
  });
  
  /* Errorがあれば処理を中断 */
  assert.equal(null, err);

});