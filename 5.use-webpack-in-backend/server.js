import express from 'express';
import path from 'path';
const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./index.html'));
});

const server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}.`);

});