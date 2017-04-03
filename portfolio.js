var express = require('express');
var fortune = require('./lib/fortune.js');

var app = express();

//set up handlebars view Engine
var handlebars =require('express-handlebars')
	.create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

//Setting the port

app.set('port', process.env.PORT || 3000);

//adding static middleware

app.use(express.static(__dirname + '/public'));

//Main Page

app.get('/' , function(req,res){
	res.render('home',{fortune:fortune.getFortune()});
});

//Education Page

app.get('/education',function(req,res){
	res.render('education');
});

//Skills Page

app.get('/skills',function(req,res){
	res.render('skills');
});

//work page

app.get('/work',function(req,res){
	res.render('work');
});

//contact page

app.get('/contact',function(req,res){
	res.render('contact');
});

//Custom 404 Page

app.use(function(req,res){
	res.status(404);
	res.render('404');
});

//custom 500 Page

app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'),function(){
	console.log('Express started on http://localhost' +
	app.get('port') +'; press ctrl-c to terminate');

});