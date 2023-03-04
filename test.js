/*
>> This is just for testing
>> some code!
*/


function makeEndpoint(amount){
	let endpoint = '';
	for(let i=1;i<=amount;i++){
		endpoint += `/:name${i}`;
	}
	return endpoint;
}

console.log(makeEndpoint(5));


