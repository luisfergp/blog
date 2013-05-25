
/**
 * Module dependencies.
 */


var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , count = require('./count')
  , partials = require('express-partials');


var app = express();

app.use(partials());

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(count.getCount);
//app.use(count.count_mw());
app.use(app.router);  //calculo de rutas
app.use(express.static(path.join(__dirname, 'public')));


// development only
//if ('development' == app.get('env')) {
  //app.use(express.errorHandler());
//}

app.configure('development', function(){
 app.use(express.errorHandler());
});



app.locals.count_mw = function () {
return count.count_mw();
}


app.get('/video', routes.video);
app.get('/', routes.index);

//app.get('/visitas', function(req,res){res.send('Numero de Visitas:  ' + count);});
app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
