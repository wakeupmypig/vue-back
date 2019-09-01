let http = require('http');
let users = [
    {id:1,name:'zf1'},
    {id:2,name:'zf2'},
    {id:3,name:'zf3'}
];
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    if(req.url === '/api/users'){
        res.end(JSON.stringify(users))
    }else{
        res.end(`Not found`);
    }
}).listen(3000);