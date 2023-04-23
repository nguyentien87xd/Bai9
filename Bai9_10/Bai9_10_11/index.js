let money=parseInt(prompt("nhap so tien hang thang"));

if(money>0){
    if(money<=5){
        let result=money*5/100;
        alert("thue thu nhap hang thang ="+result +"trieu vnd");
    }else if(money>80){
        let result=money*35/100 -9.85;
        alert("thue thu nhap hang thang ="+result +"trieu vnd");
    }else if(money<=10){
        let result=money*10/100 -0.25;
        alert("thue thu nhap hang thang ="+result +"trieu vnd");
    }else if(money>52){
        let result=money*30/100 -5.85;
        alert("thue thu nhap hang thang ="+result +"trieu vnd");
    }else if(money<=18){
        let result=money*15/100 -0.75;
        alert("thue thu nhap hang thang ="+result +"trieu vnd");
    }else if(money>32){
        let result=money*25/100 -3.25;
        alert("thue thu nhap hang thang ="+result +"trieu vnd");
    }else{     
            let result=money*20/100 -1.65;
            alert("thue thu nhap hang thang ="+result +"trieu vnd");      
    }
}else{
    alert("nhap lai");
}