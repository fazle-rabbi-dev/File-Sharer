/*
>> This is just for testing
>> some code!
*/

const express = require("express");
const app = express();
const PORT = 5000;

app.get('/', (req,res) => {
   res.send('Hello');
});

app.listen(PORT, (err)=>{
   if(!err){
      console.log('Server started at http://localhost'+PORT);
   }
});
