var express = require('express');
var app = express();

var session = require('express-session');

app.use(session({
    secret: 'this-is-my-secret',
    cookie: {maxAge: 14*24*60*60*1000}
}));

app.get('/', (req, res)=>{

    req.session.someAttribute = "digitalCrafts"
    res.send('hello world')
})

app.get('/test', (req, res)=>{
    res.send(req.session.someAttribute)
})

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})
