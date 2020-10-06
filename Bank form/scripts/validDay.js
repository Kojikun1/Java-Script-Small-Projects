let daychange = document.getElementsByClassName('daychange');
let agend3 = document.getElementsByClassName('td-space')[2];
let formdate = document.querySelector('form');
agend3.style.display = 'none';
formdate.onclick = function(){
        if(daychange[1].checked === true){
            agend3.style.display = 'block';   
        }else if( daychange[0].checked === true){
            agend3.style.display = 'none';
        };
};