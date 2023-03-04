const fs = require("fs");

// set default storage
let storage = '/sdcard';

// Read Storage Path From Text File
try {
	const path = fs.readFileSync('path.txt','utf-8');
	storage = path;
} catch (e) {
	console.log('\033[1;31m[!] Path not found\033[1;37m');
	console.log('[*] Please run this app by executing (python main.py)');
	process.exit(1);
}


// Read Folders and Files from storage 
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
	return data;
}


/*
* Check whether a path file or
* directory
*/
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
    //console.log(err)
    return 'error';
  }
}


// Send Response based on stats
function sendResponse(req,res,stats){
	if(stats.includes('file')){
		res.sendFile(`/${storage}/${path_name}`);
	}
	else if(stats.includes('directory')){
		const content = readStorage(path_name);
		res.render('pages/subfolder.ejs',{
			content,
			name:path_name,
			storage
	   });
	}
	else{
	 	// res.render('utility/page_not_found.ejs');
	 	res.send("unable to read")
	}		
}


// Make path
function makePath(obj){
	const keys = Object.keys(obj);
	var path = '';
	keys.forEach((item) => {
		path += `${obj[item]}/`;
	});
	return path.slice(0,(path.length-1));
}

module.exports = {
	readStorage,
	checkFileOrDir,
	storage,
	sendResponse,
	makePath
};