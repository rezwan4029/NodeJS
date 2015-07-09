: mkdir Rest

* Check if following things are present and fine
	**node -v**
	**npm -v**
	**mongo**

/Rest: npm init
/Rest: npm install express --save

Create server.js file 

var express = require('express')
var app = express()

app.get('/', function(req, res){
   res.send('Its working!');
});

app.listen(3000);

// Check if its working.
	run node server.js 
	localhost:3000
	
Now install mongoose 

npm install --save mongoose

npm install --save mongoose node-restful body-parser
sudo npm install -g nodemon

Now, 
	nodemon server.js
This will keep always running the app in case we change in app server will restart

*In Postman :
	chrome-extension://fdmmgilgnpjigdojojpjoooidkmcomcm/index.html
	URL : http://localhost:3000/api/users/
	In Headers: set Header = Content-Type Value = application/json	
