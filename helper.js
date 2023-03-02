const fs = require("fs");
const app = require("./app");
const axios = require('axios');

let storage = '/storage/0403-0201';

// Read Storage Path From Text File
try {
	const path = fs.readFileSync('path.txt','utf-8');
	// console.log(path)
	storage = path;
} catch (e) {
	console.log('\033[1;31m[!] Path not found\033[1;37m');
	console.log('[*] Please run this app by executing (python main.py)')
	process.exit(1);
}

// Read Folders and Files 
function readStorage(name) {
	let data;
	// Read root dir
	if(!name){
		data = fs.readdirSync(storage)
		.filter((file=>{
			return ! file.startsWith('.');
		}));
	}
	// Read Subfolders
	else{
		data = fs.readdirSync(`${storage}/${name}`)
		.filter((file=>{
			return ! file.startsWith('.');
		}));
	}
	// console.log(data);
	return data;
}


// Check file or directory
function checkFileOrDir(path) {
  try {
    const stats = fs.statSync(`${storage}/${path}`);
    if (stats.isFile()) {
      return 'file';
    } else if (stats.isDirectory()) {
      return 'directory';
    } else {
      return 'error';
    }
  } catch (err) {
    return 'error';
  }
}


// Get Request
function getData(url){
	let data = '';
	axios.get(url)
  .then(response => {
    const tunnels = response.data.tunnels;
    console.log(tunnels[0].public_url);
    data = tunnels[0].public_url
    return response
  })
  .catch(error => {
    //console.error(`Error retrieving public URL from ngrok endpoint: ${error}`);
    return null
  });
}


module.exports = {
	readStorage,
	checkFileOrDir,
	storage,
	getData
};