let contas = document.getElementById('contas');
contas.addEventListener('click',function(){
   window.open('../index.html','_self');
});

let transf = document.getElementById('transf');
transf.addEventListener('click', function(){
    window.open('transferencias.html','_self');
});

let pag = document.getElementById('pag');
pag.addEventListener('click', function(){
    window.open('pagamentos.html', '_self');
});

let cons = document.getElementById('cons');

cons.addEventListener('click', function(){
   window.open('consultas.html', '_self');
});

let empres = document.getElementById('empres');
empres.addEventListener('click', function(){
    window.open('emprestimos.html', '_self');
 });