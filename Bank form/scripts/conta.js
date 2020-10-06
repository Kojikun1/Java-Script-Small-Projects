let conta = document.getElementById('conta');
let dig = document.getElementById('dig');
let titu = document.getElementById('titular');
let test = false;
conta.onfocus = function(){
   test = true;
};
document.addEventListener('keyup', function(){
       let x = conta.value;
       let valor = x.split('');
       if(test == true){
        if(isNaN(x) == true){
            conta.value = '';
        }else if(valor.length === 9){
          dig.focus();
        };
       };
});

dig.addEventListener('focus', function(){
    dig.addEventListener('keypress', function(){
        let x = dig.value;
        let v = x.split('');
       if(v.length > 0){
           dig.value = '';
       };
});
});
window.onload = function(){
    conta.value = '';
    titu.value = '';
    dig.value = '';
    checkB.checked = false;
};