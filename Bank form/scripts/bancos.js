let banco = document.getElementById('banco');
function bank(){
    for(let i = 0; i < bancos.length; i++){
        let x = new Option(bancos[i],i);
        banco.options.add(x);
    };
};
bank();
let tconta = document.getElementById('tconta');
let tcontas = ["Conta-Corrente", "Conta-Poupança", 
"Conta-Internacional", "Conta-Salário"];
for(let i = 0; i < tcontas.length; i++ ){
    let x = new Option(tcontas[i],i);
    tconta.options.add(x);
};

let = checkB = document.getElementById('checkB');
checkB.addEventListener('click', function(){
   if(checkB.checked == true){
    console.log("checked");
    banco.innerHTML = '';
    for(let i = 0; i < bancos2.length; i++){
        let x = new Option(bancos2[i],i);
        banco.options.add(x);
    };
   }
   else{
      console.log("unchecked");
      banco.innerHTML = '';
      bank();
   };
});