// day02.js
function objClick(obj){
    alert('클릭!!'); // 경고알림 출력
    console.log(obj);
    // 클릭이 일어난 객체의 텍스트값을 h1태그의 텍스트로 사용
    //document.getElementById('id01').innerText = obj.innerText;
    document.querySelector('#id01').innerText = obj.innerText;
}