const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const alertError = document.getElementById('outputError');
const btnOp = document.getElementById('converter');
const btnClean = document.getElementById('clean');
const btnRadio = document.querySelectorAll("input[name='operation']");
const radioBox = document.getElementsByClassName('radio-box')[0];
let aux = 1;
btnOp.addEventListener('click', convertNum);
function convertNum(){
        if(aux === 1){
            console.log('operação 1');
            let numDec = input1.value;
            if(numDec === '' || numDec < 0 || isNaN(numDec)){
                alertError.innerHTML = 'Digite numero Decimal Valido';
            }else{
                alertError.innerHTML = '';
                let result = [];
                while(numDec > 0){
                    result.unshift(numDec % 2);
                    numDec = parseInt(numDec / 2);
                };
                input2.value = result.join('');
            };
        }else if(aux === 2){
           let numBin = input1.value;
           let regex = new RegExp(/[2-9]/);
           if(regex.test(numBin) || numBin == '' || isNaN(numBin)){ 
               alertError.innerHTML = 'Digite um Numero Binario Valido';
            }else{
                alertError.innerHTML = '';
                let result = 0;
                let dec = 1;
                numBin = numBin.split('');
                for(let i = numBin.length - 1; i >= 0; i--){
                    result += numBin[i] == 1 ? dec : 0;
                    dec = dec * 2;
                };
                input2.value = result;
            };
        };
};
radioBox.addEventListener('click', () => {
    let label1 = document.getElementById('label1');
    let label2 = document.getElementById('label2');
     for(key of btnRadio){
         if(key.checked){
             if(key.value == '1'){
                 label1.innerHTML = 'Decimal: ';
                 label2.innerHTML = 'Binario: ';
                 aux = 1;
             }else if(key.value == '2'){
                label1.innerHTML = 'Binario: ';
                label2.innerHTML = 'Decimal: ';
                aux = 2;
             };
         };
     };
});

btnClean.addEventListener('click',Clean);

window.addEventListener('load', Clean);

function Clean(){
    input1.value = '';
    input2.value = '';
    btnRadio[0].checked = true;
    outputError.innerHTML = '';
    aux = 1;
    document.getElementById('label1').innerHTML = 'Decimal: ';
    document.getElementById('label2').innerHTML = 'Binario: ';
};