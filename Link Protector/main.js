let counter = document.getElementById('counter');
let box = document.getElementsByClassName('box1')[0];
let cont = 10;
let ag = 45;
let link = document.getElementById('link');
let x = document.createElement('a');
x.textContent = "Link";
x.setAttribute('href', "https://www.google.com");
x.setAttribute('target', "_blank");

window.addEventListener('load',function(){
       let t = setInterval(() => {
           counter.textContent = cont;
           box.style.transform = `translate(-50%,-50%) rotate(${ag}deg)`;
           box.style.transition = "0.5s";
           cont--;
           ag += 45;
           if(cont < 9){
            counter.style.left = '45%';
           }
        if(cont < 0){
        box.style.transform = `translate(-50%,-50%) rotate(360deg)`;
        clearInterval(t);
        link.textContent = "";
        link.appendChild(x);
        x.style.display = "block";
           }
       },1000);
     
});