let numPhone = parseInt(prompt("nhap so phut:"));
if (numPhone <= 50) {
    let result = numPhone * 600 + 25000;
    alert("result" + result);
} else if (numPhone > 200) {
    let result = (50 * 600) + (400 * 150) + (numPhone - 200) * 200 + 25000;
    alert("result" + result);
} else {
    let result = (50 * 600) + (numPhone - 50) * 400 + 25000;
    alert("result" + result);
}