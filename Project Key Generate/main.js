let gkey = document.getElementById('gkey');
let arr = [];
let output = document.getElementById('output');
let p = true;
gkey.addEventListener('click',function(){
    if(p == true){
        for(let i = 0; i < 18 ; i++){
            let x = Math.floor(Math.random() * 10);
            arr.push(x);
        }
        let n = '';
        for(let i = 0; i < arr.length; i++){
            n += arr[i];
        }
        output.value = n;
        p = false;
        localStorage.setItem('keyItem', n);
    }
    else{
         alert('You can not create another key');
    };
});
window.onload = function(){
    output.value = '';
}
let btnCopy = document.getElementById('copy-btn');
btnCopy.onclick = function(){
    output.select();
    document.execCommand('copy');
    clearSelection()
};
