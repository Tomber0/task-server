const express = require('express');
const app = express();
app.use('/static',express.static('static',{
    setHeaders:function(res,path){
        res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.set("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
        res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.set("X-Powered-By", ' 3.2.1')
        res.type("application/json");
        res.type("png");
    }
}));
app.listen(8080, () => {
    console.log('listening on port 8080')
})
