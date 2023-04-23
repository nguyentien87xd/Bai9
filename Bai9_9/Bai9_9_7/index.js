let vnd=parseInt(prompt("nhap vao so doanh thu:"));

if(vnd<10000000){
    alert("khong co doanh thu");
} else if(vnd>1000000000){
    let result=vnd*10/100;
    alert("hoa hong cua ban la:" + result);
}else{
    let result=vnd*5/100;
    alert("hoa hong cua ban la"+result);
}