//Install express server
const express = require('express');
const path = require('path');
const csrf = require('csurf');

const app = express();

app.use(cookieParser('secretPassword'));
app.use(csrf());
app.use(function(req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  return next();
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Angular8ClientCrud'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/Angular8ClientCrud/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
