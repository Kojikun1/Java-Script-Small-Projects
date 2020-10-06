let array = [
    ["uxt", "bnc", "trv", 'vx'],
    ["40", "50", "60", "70"],
    ["80", "90", "100", '120'],
    ["xxx", "sss", "www", 'mmm']
];
//console.log(array[0][3]);

const name = x => "Welcome " + x;
//console.log(name('Koji'));
const test = (x, y) => { let b = x + y; console.log(b)};
//test(40,50);
let a = "name";
let c = `welcome ${a}`;

//console.log(c);

let test2 = function(x,l){
    let  r = x * l;
    return r;
};
(function(){
    console.log("PrintIt");
    console.log(test2(20,40));
})();
let n = 0;
function print(){
    let t = setTimeout(function(){
        console.log("PrintIt " + n++);
        print();
    },500);
    if(n > 20){
       clearTimeout(t);
    }
};

const klx = x => {let r = x * 0.1; console.log("10% do valor: " + r);}
let nx = [400, 500, 600];
let nl = [700, 800, 900];
let ml = [100, 200, 300];
let ll = nx.concat(nl,ml);
//console.log(ll);
ll.splice(0,1,150);
//console.log(ll);//

let k = 10;
let h = 20;
let z;
k == h ? z = "true": z = "false";
console.log(z);