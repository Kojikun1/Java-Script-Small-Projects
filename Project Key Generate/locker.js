let eKey = document.getElementById('ekey');
let inputKey = document.getElementById('input-key');
let img = document.getElementById('img-locker');
let msg = document.getElementById('msg');

let lkey = localStorage.getItem('keyItem');

eKey.addEventListener('click', function(){
    if(inputKey.value === lkey){
        img.src = 'img/117-512.png';
        msg.innerHTML = 'Unlocked'
        msg.style.color = 'green';
        msg.style.marginLeft = '140px';
    }
    else{
        msg.style.color = 'red';
        img.src = 'img/116-512.png';
        img.style.transform = 'scale(1.1)';
        setTimeout(function(){
            img.style.transform = 'scale(1.0)';
        },100);
    }
});
window.onload = function(){
    inputKey.value = '';
}