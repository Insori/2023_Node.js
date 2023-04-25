//morgan 미들웨어 - 외부 모듈이어서 설치해야 함
//웹 요청이 들어왔을 때 로그를 출력하는 미들웨어

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));    //어떤 식으로 로그를 설정할 건지 정함 - common dev short tiny
app.use(function(req, res) {
    res.send("<h1>morgan Test</h1>");
});
app.listen(9990, function() {
    console.log("9990 포트입니다.");
});
