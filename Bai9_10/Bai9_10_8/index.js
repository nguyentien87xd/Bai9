let age=prompt("nhap so tuoi");
let b=age.indexOf(".");
if(age.indexOf(".")==-1){
    if(0<parseInt(age) && parseInt(age)<120){
        alert("la nguoi");
    }else{
        alert("la kieu float");
    }
}else{
    alert("la kieu float");
}