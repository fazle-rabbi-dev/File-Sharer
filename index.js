#!/bin/node
const app = require('./app.js');
const PORT = process.env.PORT || 3000;
const fs = require("fs");
const os = require('os');
const axios = require("axios");
const ngrok = require('ngrok');
const http = require('http');
const { exec } = require('child_process');

// Colors
const red = '\x1b[1;91m';
const green = '\x1b[1;92m';
const yellow = '\x1b[1;33m';
const blue = '\x1b[1;94m';
const pink = '\x1b[1;95m';
const cyan = '\x1b[1;96m';
const white = '\x1b[1;37m';

// Function to display animation while checking
function displayAnimation(text) {
  const animation = ['|', '/', '-', '\\'];
  let i = 0;
  return setInterval(() => {
    process.stdout.write('\r'+ text + animation[i]);
    i = (i + 1) % animation.length;
  }, 250);
}

// Check whether device connected to internet or not!
async function checkInternetConnection() {
	try {
		let interval_id = displayAnimation('🌏 Checking internet connection ');
		const res = await axios.get('https://google.com');
		if(res.status == 200){
			clearInterval(interval_id);
			console.log(green+'\n\n[✔] Internet connection is active');
			console.log(white+'\n[✔] Make sure you have enabled hotspot on your device.Else remote link will not generate!\n');
		}
	} catch (e) {
		console.log('[!] No internet connection');
		console.log('[!] Turn on your internet connection');
		console.log('[!] Also turn on your hotspoy else remote link will note generate');
		process.exit(1);
	}
}

// Set template engine
app.set('engine','ejs');

// 404 - Error handler
app.use((req,res,next) => {
	res.render('utility/page_not_found.ejs');
	// res.send('404')
});

// Server side error handler
app.use((err,req,res,next)=>{
	console.log(err);
	res.status(500)
	.json({Message:"There is an server side error"});
});

// Get ip
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
async function startApp(){
	await checkInternetConnection();
	
	// Start animation while starting ngrok server
	let interval_id = displayAnimation(cyan+'[*] Starting ngrok server '+white);
	
	// Get ngrok url
	let url = '';
	try {
		url = await ngrok.connect(PORT);
		clearInterval(interval_id);
	} catch (e) {
		clearInterval(interval_id);
		console.log(red+"\n[!] Maybe your hotspot is turned off.Please enable it and run this app again.\n"+white);
		process.exit(1);
	}
	
	// Finally listen app
	app.listen(PORT, (err)=>{
	   if(!err){
			console.log('\n');
			console.log(`${white}[✔] Server started successful${white}`);
			console.log(`${white}[*] Local Url   : ${cyan}http://localhost:${PORT}`);
			console.log(`${white}[*] Hotspot Url : ${cyan}http://${getIp()}:${PORT}`);
			console.log(`${white}[*] Remote Url  : ${cyan}${url}`);
			console.log('\n');
			console.log(`${red}[!] For stop press (Ctrl+C)`);
	   }
	   else{
			console.log("🤖 Unable to start server!");
	   }
	});  
}

// startApp();

app.listen(PORT,(err)=>{
	if(err){
		console.log(err)
		
		return;
	}
	console.log('Sever started..')
	
})
