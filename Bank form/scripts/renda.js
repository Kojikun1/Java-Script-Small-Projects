let renda = document.getElementsByClassName('renda');
let form = document.querySelector('form');
let btnSolicit = document.getElementById('solicit');
let validRenda = document.getElementById('valid-renda');
let x = '';
form.onclick = function(){
    for(let i = 0; i < renda.length; i++){
        if(renda[i].checked === true){
            x  = renda[i].value;
            validForm();
        }
    };
};
btnSolicit.style.display = 'none';
function validForm(){
    switch(x){
        case '01':
            validRenda.innerHTML = "Emprestimo Não Disponivel"
            validRenda.style.color = 'red';
            btnSolicit.style.display = 'none';
            break;
        case '02':
            validRenda.innerHTML = "Emprestimo Não Disponivel"
            validRenda.style.color = 'red';
            btnSolicit.style.display = 'none';
            break;
        case '03':
            validRenda.innerHTML = "Emprestimo Não Disponivel"
            validRenda.style.color = 'red';
            btnSolicit.style.display = 'none';
            break;
        case '04':
            validRenda.innerHTML = "Disponivel"
            validRenda.style.color = 'green';
            btnSolicit.style.display = 'block';
            break;
        case '05':
            validRenda.innerHTML = "Disponivel"
            validRenda.style.color = 'green';
            btnSolicit.style.display = 'block';
            break;
        case '06':
            validRenda.innerHTML = "Disponivel"
            validRenda.style.color = 'green';
            btnSolicit.style.display = 'block';
            break;
    };
};
btnSolicit.onclick = () => { alert('Successfull')};
window.onload = function(){
    for(let i = 0; i < renda.length; i++){
     renda[i].checked = false;
};
};