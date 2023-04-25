//static  미들웨어
//이미지 파일, 자바스크립트 파일, css 파일 등

const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("<img src='/chicken.jpg' width='100%'>");
});
app.listen(9990, function() {
    console.log("9990 포트입니다.");
});
