let msg = document.getElementById('msg');
let gnrt = document.getElementById('gnrt');
let output = document.getElementById('output');
let btnCopy = document.getElementById('btn-copy');
let code = document.getElementById('code');
// key for Generate the Code //
let key0 = "8x4y5k6j7hqb3v9c2m1oputrezl";
let key = key0.toUpperCase().split('');
// alphabet for replace //
let alpha0 = "abcdefghijklmnopqrstuvwxyz ";
let alpha = alpha0.toUpperCase().split('');
// function for generate Encryted or Decrypted Mensage//
function gCode(x){
        let code2, code1, msgX;
    if(x == 0){
        code2 = key;
        code1 = alpha;
        msgX = msg.value;
    }else if(x == 1){
        code1 = key;
        code2 = alpha;
        msgX = code.value;
    }
    let msgA = msgX.toUpperCase().split('');
    msgA.forEach(function(item,index,arr){
       switch(item){
           case code1[0]:
              arr.splice(index, 1, code2[0]);
             break;
           case code1[1]:
              arr.splice(index, 1, code2[1]);
             break;
           case code1[2]:
              arr.splice(index, 1, code2[2]);
             break;
           case code1[3]:
              arr.splice(index, 1, code2[3]);
             break;
           case code1[4]:
              arr.splice(index, 1, code2[4]);
             break;
           case code1[5]:
               arr.splice(index, 1, code2[5]);
              break;
           case code1[6]:
              arr.splice(index, 1, code2[6]);
             break;
           case code1[7]:
              arr.splice(index, 1, code2[7]);
             break;
           case code1[8]:
              arr.splice(index, 1, code2[8]);
             break;
           case code1[9]:
              arr.splice(index, 1, code2[9]);
             break;
           case code1[10]:
              arr.splice(index, 1, code2[10]);
             break;
           case code1[11]:
              arr.splice(index, 1, code2[11]);
             break;
           case code1[12]:
              arr.splice(index, 1, code2[12]);
             break;
           case code1[13]:
              arr.splice(index, 1, code2[13]);
             break;
           case code1[14]:
              arr.splice(index, 1, code2[14]);
             break;
           case code1[15]:
              arr.splice(index, 1, code2[15]);
             break;
           case code1[16]:
              arr.splice(index, 1, code2[16]);
             break;
           case code1[17]:
              arr.splice(index, 1, code2[17]);
             break;
           case code1[18]:
              arr.splice(index, 1, code2[18]);
             break;
           case code1[19]:
              arr.splice(index, 1, code2[19]);
             break;
           case code1[20]:
              arr.splice(index, 1, code2[20]);
             break;
           case code1[21]:
              arr.splice(index, 1, code2[21]);
             break;
           case code1[22]:
              arr.splice(index, 1, code2[22]);
             break;
           case code1[23]:
              arr.splice(index, 1, code2[23]);
             break;
           case code1[24]:
              arr.splice(index, 1, code2[24]);
             break;
           case code1[25]:
              arr.splice(index, 1, code2[25]);
             break;
           case code1[26]:
              arr.splice(index, 1, code2[26]);
             break;
       }
    });
    let finalMsg = '';
    for(let i = 0; i < msgA.length; i++){
        finalMsg += msgA[i];
    }
      output.innerHTML = finalMsg;
}
btnCopy.addEventListener('click', outputCopy)
function outputCopy(){
      let aux = document.createElement('input');
      aux.setAttribute('value', output.innerHTML);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand('copy');
      document.body.removeChild(aux);
}
window.onload = function(){
        msg.value = '';
        output.innerHTML = '';
        code.value = '';
}