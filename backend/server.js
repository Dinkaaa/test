var express = require('express');
var graphQL = require('express-graphql');
var schema = require('./data/schema');

var graphql = require('graphql');
var cors = require('cors');

var app = express();

//app.use();
app.use(cors());
app.use('/graphql', graphQL({ schema: schema, pretty: true }));

app.listen(3000, function(){
    console.log('server start');
});


var query1 = '{getUser(id:"4"){name projects{name}}}';
var query2 = '{users{name id}}';
graphql.graphql(schema, query1).then(function(result){
    console.log(JSON.stringify(result, null, ' '));
});
graphql.graphql(schema, query2).then(function(result){
    console.log(JSON.stringify(result, null, ' '));
});