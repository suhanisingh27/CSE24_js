//type of
var num=10;
console.log(num);
console.log(typeof(num));
num=false;

//symbol
const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("true");
}
else{
    console.log("false");
}
    
//loop
var count;
document.write("Starting loop"+"<br/>")
for(count=0;count<9;count++)
{
    document.write("current count="+count);
}


