let inputLink = document.getElementById('inputlink');
let generator = document.getElementById('generator');

let output = document.getElementById('output');

let qrCode = new QRCode(output,{
    text: "https://www.google.com/",
	width: 180,
	height: 180,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
})

generator.addEventListener('click', function(){
       let text = inputLink.value;
       if(text == "" || !isNaN(text) || !text.includes('http')){
           alert('Digite um link Valido')
       }else{
           qrCode.clear();
           qrCode.makeCode(text);
       };
});

window.addEventListener('load', () => {
    inputLink.value = "";
})
