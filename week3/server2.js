//노드 서버 파일로 읽어서 가져오기

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile("./server2_html.html", (err, data) => {
        if(err) {
            throw err;
        }
        res.statusCode = 200;   //statusCode가 200이면 성공
        res.setHeader("Content-Type", "text/html");
        res.end(data);
    });
});

server.listen(8088);
//이벤트
server.on('listening', () => {
    console.log("8088번 포트에서 서버가 대기 중입니다.");
});

server.on('error', (error) => {
    console.error(error);
});