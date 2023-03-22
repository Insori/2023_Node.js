//callback 함수
//argument(전달 인자)로 넘겨받는 함수
//외부 함수에 의해서 호출되는 함수
//비동기 처리에 유용

function func_callback() {
    console.log("콜백함수 실행");
}
function fun_con(callback) {
    console.log("함수 실행");
    func_callback();
}

fun_con(func_callback);