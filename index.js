var express = require('express');
var app = express();
const port = 3000;
app.use('/assets', express.static(__dirname + '/public/app/assets'));
app.use('/app', express.static(__dirname + '/public/app'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || port, function () {
  console.log(`App listening on port ${process.env.PORT || port}`);
});