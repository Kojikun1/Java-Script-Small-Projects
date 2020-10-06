let msg = "mensagem love";
let msgT = msg.toUpperCase();
msgA = msgT.split('');
let n = "4565"
let nA = n.split('');
let b = '';
console.log(Array.isArray(msgA));
console.log(msgA);
msgA.forEach(function(item,index,arr){
    if(item == "A"){
         arr.splice(index, 1, nA[0]);
    }
    else if(item == "M")
        arr.splice(index, 1, nA[1]);
});
for(let i = 7; i <= 9; i++)
{
    b += msgA[i];
}
console.log(b);
msgA.forEach(function(item,index,arr){
    if(item == nA[0]){
         arr.splice(index, 1, "A");
    }
    else if(item == nA[1])
        arr.splice(index, 1, "M");
});
let c = '';
for(let i = 0; i < msgA.length; i++)
{
    c += msgA[i];
}
console.log(c);
