// function calculateDays() {
//   let month = document.getElementById("monthInput").value;

//   let days = 0;

//   switch (month) {
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12":
//       days = 31;
//       break;
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//       days = 30;
//       break;
//     case "2":
//       days = 28;
//       break;
//     default:
//       days = 0;
//   }

//   let resultElement = document.getElementById("result");
//   if (days > 0) {
//     resultElement.innerText = "Tháng " + month + " có " + days + " ngày.";
//   } else {
//     resultElement.innerText = "Tháng không hợp lệ!";
//   }
// }





  function calculateDays(inputNumber) {
    let monthInput = document.getElementById("monthInput" + inputNumber);
    let month = monthInput.value;
  
    let days = 0;
  
    switch (month) {
      case "1":
      case "3":
      case "5":
      case "7":
      case "8":
      case "10":
      case "12":
        days = 31;
        break;
      case "4":
      case "6":
      case "9":
      case "11":
        days = 30;
        break;
      case "2":
        days = 28;
        break;
      default:
        days = 0;
    }
  
    let resultElement = document.getElementById("result" + inputNumber);
    if (days > 0) {
      resultElement.innerText = "Tháng " + month + " có " + days + " ngày.";
    } else {
      resultElement.innerText = "Tháng không hợp lệ!";
    }
  }