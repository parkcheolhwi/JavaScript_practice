// DB
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
const assert = require('assert');

// 接続先URL
const url = 'mongodb://localhost:27017';

// 追加オプション
// MongoClient用オプション設定
const connectOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}



// ユーザーリスト
exports.list = (req, res) => {

  MongoClient.connect(url, connectOption, (err, client) => {
    if(err) throw err;
  
    var dbo = client.db("mydb");

    dbo.collection("users").find({}).toArray(function(err, result) {
      if (err) throw err;

      res.status(200).render("list", {results : result});
      
      client.close();
    });
    
    assert.equal(null, err);
  
  });
};

// 登録FORM
exports.createForm = (req, res) => {
  res.render("createForm");
};

// ユーザー登録
exports.create = (req, res) => {
  MongoClient.connect(url, connectOption, (err, client) => {
    if(err) throw err;
  
    var dbo = client.db("mydb");

    let createData = {
      "name" : req.body.name,
      "gender" : req.body.gender,
      "tel" : req.body.tel,
      "grade" : req.body.grade,
      "score" : req.body.score
    }; 

    dbo.collection("users").insertOne(createData, function(err, result) {
      if (err) throw err;

      res.status(200).redirect("/");
      
      client.close();
    });
    assert.equal(null, err);
  
  });
};

// ユーザー詳細
exports.detail = (req, res) => {
  MongoClient.connect(url, connectOption, (err, client) => {
    if(err) throw err;
  
    var dbo = client.db("mydb");

    dbo.collection("users").find({"_id" : new mongo.ObjectId(req.params.id)}).toArray(function(err, result) {
      if (err) throw err;

      res.status(200).render("detail", {result : result});
      
      client.close();
    });
    
    assert.equal(null, err);
  
  });
};

// ユーザー更新FORM
exports.updateForm = (req, res) => {
  MongoClient.connect(url, connectOption, (err, client) => {
    if(err) throw err;
  
    var dbo = client.db("mydb");

    dbo.collection("users").find({"_id" : new mongo.ObjectId(req.params.id)}).toArray(function(err, result) {
      if (err) throw err;

      res.status(200).render("updateForm", {result : result});
      
      client.close();
    });
    
    assert.equal(null, err);
  
  });
  
};

// ユーザー更新
exports.update = (req, res) => {
  MongoClient.connect(url, connectOption, (err, client) => {
    if(err) throw err;
  
    var dbo = client.db("mydb");
    var updateData = {
      $set : {
      "name" : req.body.name,
      "gender" : req.body.gender,
      "tel" : req.body.tel,
      "grade" : req.body.grade,
      "score" : req.body.score
      }
    };

    dbo.collection("users").updateOne({"_id" : new mongo.ObjectId(req.params.id)}, updateData, function(err, result) {
      if (err) throw err;

      res.status(200).redirect("/");
      
      client.close();
    });
    
    assert.equal(null, err);
  
  });
};

// ユーザー削除
exports.delete = (req, res) => {
  MongoClient.connect(url, connectOption, (err, client) => {
    if(err) throw err;
  
    var dbo = client.db("mydb");

    dbo.collection("users").deleteOne({"_id" : new mongo.ObjectId(req.params.id)}, function(err, result) {
      if (err) throw err;

      res.status(200).redirect("/");
      
      client.close();
    });
    
    assert.equal(null, err);
  
  });
};