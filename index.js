#!/bin/node
const app = require('./app.js');
const PORT = process.env.PORT || 3000;
const readline = require('readline');
const fs = require("fs");
const os = require('os');
const {getData} = require("./helper.js");
const axios = require("axios");


// Set template engine
app.set('engine','ejs');


// 404 - Error handler
app.use((req,res,next) => {
	res.send('404 - Page not found');
});


// Server side error handler
app.use((err,req,res,next)=>{
	console.log(err);
	res.status(500)
	.json({Message:"There is an server side error"});
});

function getIp(){
	// Get network interfaces
	const networkInterfaces = os.networkInterfaces();
	
	// Find the IP address of the first network interface that is not the loopback interface
	const ipAddress = Object.values(networkInterfaces)
	  .flat()
	  .filter(iface => iface.family === 'IPv4' && !iface.internal)[0]
	  .address;
	
	return ipAddress;
}

// Start app
const red = '\x1b[1;91m';
const green = '\x1b[1;92m';
const white = '\x1b[1;37m';
const yellow = '\x1b[1;33m';
function startApp(){
	// const REMOTE_URL = getData('http://localhost:4040/api/tunnels');
	console.log(white);
	const url = 'http://localhost:4040/api/tunnels';
	// Call Ngrok Api For Get Public/Remote Url
	axios.get(url)
  .then(response => {
    const tunnels = response.data.tunnels;
    let REMOTE_URL = tunnels[0].public_url;
    
		app.listen(PORT, (err)=>{
		   if(!err){
				console.log('\n');
				console.log(`${green}✅ Server started successful${white}`);
				console.log(`${white}[*] Local Url   : ${yellow}http://localhost:${PORT}`);
				console.log(`${white}[*] Hotspot Url : ${yellow}http://${getIp()}:${PORT}`);
				console.log(`${white}[*] Remote Url  : ${yellow}${REMOTE_URL}`);
				console.log('\n');
				console.log(`${red}[!] For stop press (Ctrl+C)`);
		   }
		   else{
				console.log("🤖 Unable to start server!");
		   }
		});
    
  })
  .catch(error => {
    console.log(`${red}🚨 Oops! something went wrong.Look like you are trying to run this app incurrectly.Please read the instruction from ${yellow}https://github.com/fh-rabbi/File-Sharer${white} and run this app currectly.${white}`);
  });
	
}

startApp();
