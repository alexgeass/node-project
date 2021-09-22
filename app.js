const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '.'),{
repo: 'https://github.com/alexgeass/TiendaOnline.git'}, function(err) {
console.log(err);
console.log("Se ha subido a gh-pages correctamente");
});