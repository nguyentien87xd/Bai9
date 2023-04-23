let a=parseInt(prompt("nhap aX^2"));
let b=parseInt(prompt("nhap bX"));
let c=parseInt(prompt("nhap c"));
let d=parseInt(prompt("=d"));

let denta=b*b - 4*a*(c-d);
if(denta<0){
    alert("phuong trinh vo nghiem");
} else if(denta=0){
    let result=(-b)/(2*a);
    alert("phuong trinh co nghiem kep X1=X2="+result);
}else{
    let x1=((-b)+Math.sqrt(denta))/(2*a);
    let x2=((-b)-Math.sqrt(denta))/(2*a);
    alert("phuong trinh co 2 nghiem x1="+x1+"  x2="+x2);
}

