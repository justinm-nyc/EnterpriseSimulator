var express = require('express');
var path = require('path')
const cors = require('cors');

var app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.timeout = 0;

// ------------------------------------------------------
// Define Routes: Static
// ------------------------------------------------------

var routes = require("./routes/routes.js")(app);
// ------------------------------------------------------
// listen for requests
// ------------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

