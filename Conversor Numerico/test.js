let string = "0123456789";
string = string.split('');

console.log(typeof Number(string[4]));

console.log(string[6] === 6);

console.log(string[6] == 6);

for(let i = string.length - 1; i >= 0; i--){
    console.log(string[i]);
}