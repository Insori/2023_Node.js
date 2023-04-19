//npm init
//npm install express

//모듈 가져오기
const express = require('express');

//서버 생성하기
const app = express();

app.use(function(req, res) {
    let name = req.query.name;
    let area = req.query.area;

    res.send(`<h1>${name} : ${area}</h1>`)
    //http://localhost:8889/?name=abc11&area=bbc22
    //?name=abc&area=bbc
});

app.listen(8889, () => {
    console.log("port 8889로 실행합니다.");
});