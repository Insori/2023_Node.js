const json = `{"result": true, "count":42}`;
const obj = JSON.parse(json);   //문자열을 JSON으로

console.log(obj.count);
//expected output: 42
console.log(obj.result);
//expected output: true

console.log(JSON.stringify({x:5,y:6})); //값 혹은 객체를 JSON 형대의 문자열로
//expected output: "{"x":5, "y":6}"