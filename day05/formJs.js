// formJs.js
const inputEls = document.querySelectorAll(".formRow input");
console.log(inputEls.length); // 3
for(let inputEl of inputEls){
    inputEl.addEventListener('focus', function(evt){
        evt.target.parentElement.classList.add('focusForm');
    });

    inputEl.addEventListener('blur', function(evt){
        let targerEl = evt.target;
        targerEl.parentElement.classList.remove('focusForm');
        if(targerEl.value == ''){
            targerEl.parentElement.classList.add('errForm');
        } else {
            targerEl.parentElement.classList.remove('errForm');
        }
    });
}