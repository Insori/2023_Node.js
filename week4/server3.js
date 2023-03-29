//url path를 이용해서 다른 파일 가져오기
//http://localhost:8001 => 기본은 index로 설정
//http://localhost:8001/index
//http://localhost:8001/math

const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const server = http.createServer(async(req, res) => {
    try {
        console.log("URL : ", req.url);
        let fileSet = req.url;

        if(req.url == '/fabicon.ico') {
            return res.writeHead(404);
        }else if(req.url == '/') {
            fileSet = "index";
        }
        
        res.writeHead(200, {'Content-Type' : 'text/html;charset-utf-8'});
        
        console.log("fileSet : ", fileSet, "__dirname", __dirname);
        console.log("경로 : ",path.join(__dirname, "./htmlFile/", fileSet + ".html"));
        const data = await fs.readFile(path.join(__dirname,"./htmlFile/", fileSet + ".html"));
        // const data = await fs.readFile(`./htmlFile/${fileSet}.html`);
        res.end(data);
    }catch(err) {
        console.error(err);
        res.writeHead(500, {'Content-Type' : 'text/plain;charset-utf-8'});
        res.end(err.message);
    }
});

server.listen(8001);
//이벤트
server.on('listening', () => {
    console.log("8001번 포트에서 서버가 대기 중입니다.");
});

server.on('error', (error) => {
    console.error(error);
});