var express = require('express');
var path = require('path')
var app = express();
const { exec } = require('child_process');
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
    

    res.send(stdout + '\n' + stderr)
  });

})
// ------------------------------------------------------
// listen for requests
// ------------------------------------------------------
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});