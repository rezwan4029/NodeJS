var readline = require('readline'); // adding readline module and accessing it with a variable readline

var Input = readline.createInterface({
	input :  process.stdin,
	output : process.stdout
});

Input.question('What is your name?',function(ans){
	console.log('Welcome ' + ans + ' to NodJS!');
	Input.close();
	process.stdin.destroy();
});