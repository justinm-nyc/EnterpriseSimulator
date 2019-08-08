var express = require('express');
var path = require('path')
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs')
const axios = require('axios') 
var app = express();

app.use(cors());
// ------------------------------------------------------
// Define Routes: Static
// ------------------------------------------------------
// app.get('/TESTcurl', (req, res) => {
//   console.log("INSERT INTO ATP BEING CALLED")
//   exec('curl -k -X GET  https://n7e66hassyjctz6usooyjodide.apigateway.us-phoenix-1.oci.customer-oci.com/v9/artillery-static-insert', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     stdout = `${stdout}`
//     stderr = `${stderr}`
//     new_data = stdout
  
//     console.log(stdout)
//     res.send(stdout)
//     });

//   }),
  

// app.get('/results-test', (req, res) => {
//   console.log('/results-test called')

//   var vus = req.params.vus
//   var duration = req.params.duration

//   var staticJson = '{ "config": { "target": "https://artillery.io", "phases": [ {"duration": 6, "arrivalRate": 100 }],"defaults": {"headers": {"x-my-service-auth": "987401838271002188298567"}}}, "scenarios": [{"flow": [{"get": {"url": "/docs"}}]}]}';

//   var newJSONPT1 = staticJson.replace("{{durationAmount}}", duration);
//   var newJSONPT2 = newJSONPT1.replace("{{arrivalRate}}", vus);
  
//   console.log(newJSONPT2);

//   fs.writeFile('run-enterprise.yml', newJSONPT2, (err) => { 
//     // In case of a error throw err. 
//     if (err) throw err; 
//   }); 

//   var stdout = ''
//   var stderr = ''

//   exec('artillery run run-enterprise.yml | tee output.txt', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     stdout = `${stdout}`
//     stderr = `${stderr}`
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
    
//     fs.readFile('output.txt', 'utf-8', (err, data) => { 
//       console.log("reading file")
//       if (err) throw err; 
//       console.log(data);
//       res.send(data) 
//     }) 
//   });
  
// });

// app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/results/static/:vus/:duration', function (req, res) {
  console.log('/results/static called')

  var vus = req.params.vus
  var duration = req.params.duration

  var staticJson = '{ "config": { "target": "https://artillery.io", "phases": [ {"duration": {{durationAmount}}, "arrivalRate": {{arrivalRate}} }],"defaults": {"headers": {"x-my-service-auth": "987401838271002188298567"}}}, "scenarios": [{"flow": [{"get": {"url": "/docs"}}]}]}';

  var newJSONPT1 = staticJson.replace("{{durationAmount}}", duration);
  var newJSONPT2 = newJSONPT1.replace("{{arrivalRate}}", vus);
  
  console.log(newJSONPT2);

  fs.writeFile('run-enterprise.yml', newJSONPT2, (err) => { 
    // In case of a error throw err. 
    if (err) throw err; 
  }); 

  var stdout = ''
  var stderr = ''

  exec('artillery run run-enterprise.yml | tee output.txt', (error, stdout, stderr) => {
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


var routes = require("./routes/routes.js")(app);
// ------------------------------------------------------
// listen for requests
// ------------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
app.timeout = 0;