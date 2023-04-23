let a=parseInt(prompt("nhap so thu 1"));
let b=parseInt(prompt("nhap so thu 2"));
let c= parseInt(prompt("nhap so thu 3"));
let result=(a+b+c)/3;

if(result<=3){
    alert("o lai lop");
} else if(result>8){
    alert("hoc gioi");
}else if(result<5){
    alert("kem");
}else if(result<7){
    alert("trung binh");
}else{
    alert("kha");
}