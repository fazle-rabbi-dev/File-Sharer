const express = require("express");
const app = express();
const {
	readStorage,
	checkFileOrDir,
	storage
} = require("./helper.js");

// Set public folder
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// Home Page/1st directory
app.route('/')
.get((req,res) => {
   content = readStorage();
   
   // res.render("pages/login.ejs")
   
   res.render('home.ejs',{
		content,
		storage
   });
})
// For user authentication
.post((req,res) => {
	// username = req.body.username
	// password = req.body.password
	console.log(req.body);
	res.send('ok');
});


// 2nd directory
app.get('/:name', (req,res) => {
	const {name} = req.params;
	const query = req.query;
	path_name = name;

	// Getting info about path
	const stats = checkFileOrDir(path_name);

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
	 	res.render('utility/page_not_found.ejs');
	}	
});

// 3rd directory
app.get('/:name/:name2', (req,res) => {
	let {name,name2} = req.params;
	const query = req.query;
	path_name = name+'/'+name2;

	// Getting info about path
	const stats = checkFileOrDir(path_name);

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
		res.render('utility/page_not_found.ejs');
	}
});


// 4th directory
app.get('/:name/:name2/:name3', (req,res) => {
	let {name,name2,name3} = req.params;
	const query = req.query;
	path_name = `${name}/${name2}/${name3}`;

	// Getting info about path
	const stats = checkFileOrDir(path_name);

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
		res.render('utility/page_not_found.ejs');
	}
});


// 5th directory
app.get('/:name/:name2/:name3/:name4', (req,res) => {
	let {name,name2,name3,name4} = req.params;
	const query = req.query;
	path_name = `${name}/${name2}/${name3}/${name4}`;

	// Getting info about path
	const stats = checkFileOrDir(path_name);

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
		res.render('utility/page_not_found.ejs');
	}
});


// 6th directory
app.get('/:name/:name2/:name3/:name4/:name5', (req,res) => {
	let {
		name,name2,name3,
		name4,name5
	} = req.params;
	const query = req.query;
	path_name = `${name}/${name2}/${name3}/${name4}/${name5}`;

	// Getting info about path
	const stats = checkFileOrDir(path_name);

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
		res.render('utility/page_not_found.ejs');
	}
});

// 7th directory
app.get('/:name/:name2/:name3/:name4/:name5/:name6', (req,res) => {
	let {
		name,name2,name3,
		name4,name5,name6
	} = req.params;
	const query = req.query;
	path_name = `${name}/${name2}/${name3}/${name4}/${name5}/${name6}`;

	// Getting info about path
	const stats = checkFileOrDir(path_name);

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
		res.render('utility/page_not_found.ejs');
	}
});


module.exports = app;