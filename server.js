var express = require('express');
var path = require('path')
var app = express();
const { exec } = require('child_process');
const fs = require('fs') 
// ------------------------------------------------------
// Define Routes: Static
// ------------------------------------------------------
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/results', function (req, res) {
  console.log('/results called')
  var stdout = ''
  var stderr = ''
  exec('artillery run hello.yml | tee output.txt', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    stdout = `${stdout}`
    stderr = `${stderr}`
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    
    fs.readFile('output.txt', 'utf-8', (err, data) => { 
      console.log("reading file")
      if (err) throw err; 
      console.log(data);
      res.send(data) 
    }) 
  });
})
// ------------------------------------------------------
// listen for requests
// ------------------------------------------------------
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});