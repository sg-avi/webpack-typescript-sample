var express = require('express')
var app = express()

app.use('/', express.static('dist'))

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
