const output = document.querySelectorAll('.output');
const box = document.querySelectorAll('.box');

const xhttp = new XMLHttpRequest();


xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
       let data = JSON.parse(xhttp.responseText);
       
       for(let i = 0; i < data.length; i++){
           let status = data[i].status ? "Online" : 'Offline';
           if( status == 'Online'){
              box[i].style.backgroundColor = 'green';
           }else{
               box[i].style.backgroundColor = 'red';
           }
           output[i].innerHTML = `Name: ${data[i].nick}<br> ${status}`;
       }
    };
};
xhttp.open('GET','content.json',true);
xhttp.send();
