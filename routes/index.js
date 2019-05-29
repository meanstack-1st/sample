var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.post('/signup',function(req,res){
	var fname=req.body.name;
	console.log(fname);
	var rname=req.body.b;
	console.log(rname);
	var gname=req.body.c;
	console.log(gname);
	var hname=req.body.d;
	console.log(hname);
	res.redirect("/");
});

module.exports = router;
