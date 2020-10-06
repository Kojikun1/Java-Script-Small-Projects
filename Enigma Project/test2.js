let a = [];
let c = "24682468";
let ca = c.split('');
let msg = '';
for(let i = 0; i < 8; i++){
    a[i] = '';
}
for(let i = 0 ; i < a.length; i++){
   a[i] = ca[i];
}
for(let i = 0 ; i < a.length; i++){
    msg += a[i] + " ";
 }
console.log(msg);
a.forEach(function(item, index, arr){
       arr[index] = item * 2;
});
msg = '';
for(let i = 0 ; i < a.length; i++){
    msg += a[i] + " ";
 }
console.log(msg);
