//cookie parser 미들웨어 -> 요청 쿠키를 추출할 수 있다.
//request 객체와 response 객체에 cookies 속성과 cookie라는 메서드가 부여된다.

const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(cookieParser());
app.get('/getCookie',(request, response) => {
    response.send(request.cookies);
});
app.get('/setCookie', (request, response) => {
    //쿠키 생성
    response.cookie("st1", "abc");
    response.cookie("st2", {
        name : 'Andy',
        age : 20
    });
    response.redirect("/getCookie");    //getCookie로 넘어가도록
});
app.listen(9999, function() {
    console.log("9999 포트입니다.");
});
