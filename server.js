const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url === '/foo'){
        res.write('tbd foo page');
        res.end();
    }
    else if (req.url === '/bar'){
        res.write('bar page');
        res.end();
    }
    else if (req.url === '/bazz'){
        res.write('bazz page');
        res.end();
    }
    else{
        res.statusCode = 404;
        res.write('This Page Doesnt Exist');
        res.write('This page doesnt exist!');
        res.end();
    }
    

});

const port = process.env.PORT || 3000;
server.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})