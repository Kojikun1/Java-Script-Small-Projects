let pdt = document.getElementById('produto');
let valor = document.getElementById('valor');
let btn1 = document.getElementById('add-p');
let btn2 = document.getElementById('add-v');
let msg = document.getElementById('msg');
let dados = document.getElementById('dados');
let dados2 = document.getElementById('dados2');
let btnClean = document.getElementById('clean');
let calc = document.getElementById('calc');
let remove1 = document.getElementById('remove1');
let remove2 = document.getElementById('remove2');
let ul = document.createElement('ul');
let ul2 = document.createElement('ul');
let focus1 = false;
let focus2 = false;
dados.appendChild(ul);
dados2.appendChild(ul2);
btn1.addEventListener("click", addList);
function addList(){
    if(pdt.value == ''){
       msg.innerHTML = "Digite um valor valido";
       pdt.value = '';
    }
    else if(isNaN(pdt.value) == false){
       msg.innerHTML = "O valor digitado e um numero";
       pdt.value = '';
    }
    else{
        let li = document.createElement('li');
        let text = document.createTextNode(pdt.value);
        li.appendChild(text);
        ul.appendChild(li);
        msg.innerHTML = "";
        pdt.value = '';
        valor.focus();
        
    }
}
let b = ul.childNodes;
let a = ul2.childNodes;
btnClean.onclick = function(){
    pdt.value = '';
    valor.value = '';
    msg.innerHTML = '';
    for(let i = b.length - 1; i >= 0; i--)
    {
        b[i].remove();
    }
    for(let i = a.length - 1; i >= 0; i--)
    {
        a[i].remove();
    }
}
btn2.addEventListener("click", addList2);
function addList2(){
    let n = valor.value.replace(',','.');
    if(n == ''){
       msg.innerHTML = "Digite um valor valido";
       valor.value = '';
    }else if(isNaN(n) == true){
       msg.innerHTML = "O valor digitado não é um numero";
       valor.value = '';
    }else{
        let li = document.createElement('li');
        let text = document.createTextNode("R$ " + valor.value);
        li.appendChild(text);
        ul2.appendChild(li);
        msg.innerHTML = "";
        valor.value = '';
        pdt.focus();
    };
};
let sum = 0;
calc.onclick = function(){
    let li = document.createElement('li');
    if(a.length === 0){
        msg.innerHTML = "Nenhum Valor para Calcular";
        return;
    }
    a.forEach(function(item){
        let x = item.textContent;
         console.log(x.substring(0,5));
        if(x.substring(0,5) === "TOTAL"){
            return;
        }
        console.log("is Executing");
        let aux =  x.substring(3,x.length);
        sum += Number(aux);
   });
    let text = document.createTextNode("TOTAL R$ " + sum.toFixed(2));
    li.appendChild(text);
    ul2.appendChild(li);
    msg.innerHTML = "";
    sum = 0;
};
remove1.onclick = function(){
    b[b.length - 1].remove();
}
remove2.onclick = function(){
    a[a.length - 1].remove();
}
pdt.onfocus = function(){
    focus1 = true;
    focus2 = false;
};
valor.onfocus = function(){
    focus2 = true;
    focus1 = false;
};
window.addEventListener("keydown", function(event){
        if(event.key == "Enter" || event.code == "Enter"
        || event.code == "NumpadEnter"){
            if(focus1) {
                addList();
                console.log("focus produto");
            }else if(focus2){
                addList2();
                console.log("focus valor");
            }; 
        }
});
window.onload = function(){
    pdt.value = '';
    valor.value = '';
};


