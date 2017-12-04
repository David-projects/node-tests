const express = require('express');


var app = express();

app.get('/',(req,res) => {
    res.status(404).send({
    error:'Page not found.',
    name:'Todo App v1.0'
    });
});

app.get('/users',(req,res) => {
    res.send([
    {
        name:'test user',
        age:56
    },{
        name:'David',
        age:46
    },{
        name:'Sissi',
        age:36
    }
    ]);
});

app.listen(3000);

module.exports.app = app;