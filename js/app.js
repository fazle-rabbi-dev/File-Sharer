const express = require("express");
const app = express();
const {
	readStorage,
	checkFileOrDir,
	storage,
	sendResponse,
	makePath
} = require("./helper.js");
const axios = require('axios');

// Set public folder
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));


/*====================================*/
// DRY:-)!
function makeEndpoint(amount){
	let endpoint = '';
	for(let i=1;i<=amount;i++){
		endpoint += `/:name${i}`;
	}
	return endpoint;
}

// DRY:-)!
function makeResponse(req,res) {
	// Get path name
	path_name = makePath(req.params);
	// Getting info about path
	const stats = checkFileOrDir(path_name);
	// Send response based on stats
	sendResponse(req,res,stats);	
}
/*====================================*/


// Home Page/1st directory
app.route('/')
.get(async(req,res) => {
   // Let print someone open this link
   console.log("\033[1;92m[*] Someone opened your link")
   
   try {
    const response = await axios.get('https://api.ipify.org/?format=json');
    const publicIp = response.data.ip;
    console.log('\033[1;93m'+`[*] From this ip address: ${publicIp}`);
  } catch (error) {
    console.error("\033[1;91m[*] Error while getting ip address");
    //res.status(500).send('Error getting public IP address');
  }
   
   content = readStorage();
   res.render('home.ejs',{
		content,
		storage
   });
});


// 1st sub directory
app.get('/:name1', (req,res) => {
	makeResponse(req,res);
});


// 2nd sub directory
app.get(makeEndpoint(2), (req,res) => {
	makeResponse(req,res);
});


// 3rd sub directory
app.get(makeEndpoint(3), (req,res) => {
	makeResponse(req,res);
});


// 4th sub directory
app.get(makeEndpoint(4), (req,res) => {
	makeResponse(req,res);
});


// 5th sub directory
app.get(makeEndpoint(5), (req,res) => {
	makeResponse(req,res);
});


// 6th sub directory
app.get(makeEndpoint(6), (req,res) => {
	makeResponse(req,res);
});


// 7th sub directory
app.get(makeEndpoint(7), (req,res) => {
	makeResponse(req,res);
});


// 8th sub directory
app.get(makeEndpoint(8), (req,res) => {
	makeResponse(req,res);
});


// 9th sub directory
app.get(makeEndpoint(9), (req,res) => {
	makeResponse(req,res);
});


// 10th sub directory
app.get(makeEndpoint(10), (req,res) => {
	makeResponse(req,res);
});


// 11th sub directory
app.get(makeEndpoint(11), (req,res) => {
	makeResponse(req,res);
});


// 12th sub directory
app.get(makeEndpoint(12), (req,res) => {
	makeResponse(req,res);
});


// 13th sub directory
app.get(makeEndpoint(13), (req,res) => {
	makeResponse(req,res);
});


// 14th sub directory
app.get(makeEndpoint(14), (req,res) => {
	makeResponse(req,res);
});


// 15th sub directory
app.get(makeEndpoint(15), (req,res) => {
	makeResponse(req,res);
});


// 16th sub directory
app.get(makeEndpoint(16), (req,res) => {
	makeResponse(req,res);
});


// 17th sub directory
app.get(makeEndpoint(17), (req,res) => {
	makeResponse(req,res);
});


// 18th sub directory
app.get(makeEndpoint(18), (req,res) => {
	makeResponse(req,res);
});


// 19th sub directory
app.get(makeEndpoint(19), (req,res) => {
	makeResponse(req,res);
});


// 20th sub directory
app.get(makeEndpoint(20), (req,res) => {
	makeResponse(req,res);
});


module.exports = app;