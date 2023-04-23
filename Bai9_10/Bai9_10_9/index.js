let a = parseInt(prompt("nhap canh a="));
let b = parseInt(prompt("nhap canh b="));
let c = parseInt(prompt("nhap canh c="));

if (a > 0 && b > 0 && c > 0) {
    if (a + b > c) {
        alert("la tam giac");

    } else if (a + c > b) {
        alert("la tam giac");

    } else if (b + c > a) {
        alert("la tam giac");

    } else {
        alert("khong phai la tam giac");

    }
} else {
    alert("khong phai la tam giac");
}