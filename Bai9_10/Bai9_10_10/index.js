let kw=parseInt(prompt("nhap so dien"));
if(kw<0){
    alert("error");
} else if(kw>400){
    let result=kw*2587;
    alert("thanh tien"+result+"vnd");
}else if(kw<50){
    let result=kw*1484;
    alert("thanh tien"+result+"vnd");
}else if(kw>300){
    let result=kw*2503;
    alert("thanh tien"+result+"vnd");
}else if(kw<=100){
    let result=kw*1533;
    alert("thanh tien"+result+"vnd");
}else if(kw>200){
    let result=kw*2242;
    alert("thanh tien"+result+"vnd");
}else{
    let result=kw*1786;
    alert("thanh tien"+result+"vnd");
}