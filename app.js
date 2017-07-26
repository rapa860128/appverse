const express = require("express");
const app = express()
const mysql = require("mysql")
const bodyParser= require('body-parser')

app.use("/bootstrap",express.static(__dirname+"/bootstrap"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')

con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"12345678",
	database:"empresas"
});


app.listen(4700,function(){
console.log("Listening on Port 4700...");
});

app.get("/",function(req,res){
con.query("select Id_Registro, RFC, PricipalName, BusinessName, Phone, Email, CAST(CreatedDate as char(10)) as CreatedDate from t_datos",function(e,r){
	res.render("index.ejs",{datos:r});
});
});

app.get("/new",function(req,res){
	res.render("new.ejs",{});
});

app.post("/save",function(req,res){
	console.log(req.body.t_datos.RFC)
	var RFC = req.body.t_datos.RFC;
	var PricipalName = req.body.t_datos.PricipalName;
	var BusinessName = req.body.t_datos.BusinessName;
	var Phone = req.body.t_datos.Phone;
	var Email = req.body.t_datos.Email;	
	con.query("insert into t_datos (RFC,PricipalName,BusinessName,Phone,Email,CreatedDate) value (\""+RFC+"\",\""+PricipalName+"\",\""+BusinessName+"\",\""+Phone+"\",\""+Email+"\",NOW())",function(e,r){
	});
	res.redirect("/");
});

app.get("/edit/:id",function(req,res){
con.query("select Id_Registro, RFC, PricipalName, BusinessName, Phone, Email from t_datos where Id_Registro="+req.params.id,function(e,r){
	res.render("edit.ejs",{datos:r[0]});
});
});

app.post("/update",function(req,res){
	console.log(req.body.datos.RFC)
	var Id_Registro = req.body.datos.Id_Registro;
	var RFC = req.body.datos.RFC;
	var PricipalName = req.body.datos.PricipalName;
	var BusinessName = req.body.datos.BusinessName;
	var Phone = req.body.datos.Phone;
	var Email = req.body.datos.Email;	
	con.query("update t_datos set RFC=\""+RFC+"\",PricipalName=\""+PricipalName+"\",BusinessName=\""+BusinessName+"\",Phone=\""+Phone+"\",Email=\""+Email+"\" where Id_Registro="+Id_Registro,function(e,r){
	});
	res.redirect("/edit/"+Id_Registro);
});

app.get("/delete/:id",function(req,res){
	con.query("delete from t_datos where Id_Registro="+req.params.id,function(e,r){
	});
	res.redirect("/");
});