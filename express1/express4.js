//모듈 가져오기
const express = require('express');

//서버 생성하기
const app = express();

app.use(function(req, res, next) {
    console.log("첫 번째");
    next();
});

app.use(function(req, res, next) {
    console.log("두 번째");
    next();
});

app.use(function(req, res, next) {
    let name = req.query.name;
    let area = req.query.area;
    console.log("세 번째");

    res.send(`<h1>${name} : ${area}</h1>`);
});

app.listen(8889, () => {
    console.log("port 8889로 실행합니다.");
});