const http = require('http');
const fs = require('fs').promises;

const path = require('path');
const url = require('url');

const server = http.createServer(async (req, res) => {
    try {
        console.log("URL 부분 : ", req.url);

        if(req.url == '/favicon.ico') {
            res.writeHead(404);
            res.end();
        }

        //지정된 폴더의 파일 리스트를 읽어와서 본문 안에 넣기
        const menuFolder = path.join(__dirname, './textFile');
        console.log("내가 읽고 싶은 폴더 : ", menuFolder);
        const fileList = fs.readdir(menuFolder); //readdir을 활용해서 해당 폴더의 내용을 가져옴
        //요소 만들기
        let fileListText = '<ul>';
        await fileList.then((file_list) => {
            let ii = 0;
            console.log("fileList", file_list);
            while(ii < file_list.length) {
                let dateData = file_list[ii].replace("menu_","").replace(".txt","");
                fileListText += `<li><a href="/?date=${dateData}">${dateData}</a></li>`;
                ii+=1;
            }
        });
        console.log("log", fileListText);
        fileListText += '</ul>';

        const searchParms = new URL(req.url, "http://localhost:8089").searchParams;
        console.log("searchParms", searchParms);
        
        const param_date = searchParms.get("date") || "null";

        const fileName = path.join(__dirname, `./textFile/menu_${param_date}.txt`);
        let fileData = await fs.readFile(fileName);
        let fileDataString = fileData.toString().replace(/\r/g, '<br>');
        console.log("텍스트 : ",fileDataString);

        const template = `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title> 급식 메뉴 </title>
                </head>
                <body>
                    <h1><a href="/">급식 메뉴</a></h1>    
                    ${fileListText}
                    <br>
                    ${fileDataString}
                </body>    
            </html>
        `
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.end(template);
    }catch(err) {
        console.error(err);
        res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
});

server.listen(8089);
server.on('listening', () => {
    console.log("8089번 포트에서 서버 대기 중입니다.");
})