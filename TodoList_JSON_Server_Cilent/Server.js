var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());


app.post('/', function(request, response) {
 console.log("233333333");
  console.log(request.body);      // your JSON
  response.send(response.body);    // echo the result back

fs.readFile('./TodoItem.json', 'utf-8', function(err, data) {
	if (err) throw err

	var arrayOfObjects = JSON.parse(data);
    	arrayOfObjects.TodoItem.push(
        /*{
		name: "Mikhail",
		age: 24
	    }*/
        request.body
    );

fs.writeFile('./TodoItem.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
	if (err) throw err
	console.log('Done!');
});
 
});
  

  
});
app.listen(8000,'localhost');


