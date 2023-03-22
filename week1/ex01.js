console.log("node.js 실행하기");
파일명 = 'ex01'
console.log('cmd에서 node '+파일명+'를 입력해봐요~');
console.log(`cmd에서 node ${파일명}을 입력해봐요~`);

console.log('-------------------------------------------');


//일반형
// - (매개변수) => {함수코드}
func_arrow1 = (str) => {
    return "출력1: "+str
};
//매개변수가 하나일 때는 () 생략 가능
// - 매개변수 => {함수코드}
func_arrow2 = str => {
    return "출력2: "+str
};
//함수코드가 return문 하나일 경우 괄호 및 return 생략 가능
// - 매개변수 => 반환값
func_arrow3 = str => "출력3: "+str
console.log(func_arrow1('fa1'));
console.log(func_arrow2('fa2'));
console.log(func_arrow3('fa3'));

/* arrow function과 function의 차이점은
    this에서 차이가 있으므로 그래도 대체할 수는 없다. */

console.log('-------------------------------------------');

function scopeTest(someVal) {
    //정의되지 않은 변수 typeof
    console.log("1: ", typeof test_none);
    //함수 범위 테스트 ( 곧 블럭 안에서 정의 될 변수)
    console.log("2-1: ", typeof test_in_var);   // => underfined
    console.log("2-2: ", typeof test_in_let);   // => underfined
    if(someVal) {
        //블럭 단위 함수 테스트
        console.log("3-1: ", typeof test_in_var);   // => underfined
            //var의 경우에는 호이스팅 될 때 값이 underfined로 초기화 된다.
        console.log("3-2: ", typeof test_in_let);   // throws 'ReferenceError'
            //let이나 const의 경우에는 일시적 사각지대(TDZ: Temporal Dead Zone)에 놓여진다
        var test_in_var;
        let test_in_let;
        console.log("3-3: ", typeof test_in_let);   // => underfined
    }
}
scopeTest(true);