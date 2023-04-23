$(document).ready(function() {
  var puzzlePieces = [
    "path/to/piece1.jpg",
    "path/to/piece2.jpg",
    "path/to/piece3.jpg",
    "path/to/piece4.jpg"
    // thêm các miếng ảnh khác ở đây
  ];
  var positions = [1, 2, 3, 4]; // định vị trí ban đầu của các miếng ảnh

  // Hàm shuffle array để xáo trộn vị trí của các miếng ảnh
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Hàm để hiển thị các miếng ảnh trên trang web
  function displayPuzzlePieces() {
    shuffle(positions);
    for (var i = 0; i < puzzlePieces.length; i++) {
      $("#puzzle-container").append(
        '<div class="puzzle-piece" data-position="' +
          positions[i] +
          '" style="background-image:url(' +
          puzzlePieces[i] +
          ')"></div>'
      );
    }
  }

  // Hàm để kiểm tra xem các miếng ảnh đã đúng vị trí để tạo thành bức tranh hoàn chỉnh hay chưa
  function checkPuzzle() {
    var correctPositions = [1, 2, 3, 4]; // vị trí đúng của các miếng ảnh
    var currentPositions = [];
    $(".puzzle-piece").each(function() {
      currentPositions.push(parseInt($(this).attr("data-position")));
    });
    if (JSON.stringify(currentPositions) == JSON.stringify(correctPositions)) {
      alert("Bạn đã hoàn thành bức tranh!");
    } else {
      alert("Hãy thử lại!");
    }
  }

  // Gọi hàm hiển thị các miếng ảnh trên trang web
  displayPuzzlePieces();
 // Khi người dùng click vào một miếng ảnh, chuyển đổi nó với một miếng ảnh khác
 $(".puzzle-piece").on("click", function() {
  var currentPosition = parseInt($(this).attr("data-position"));
  var nextPosition;
  if (currentPosition == 4) {
    nextPosition = 1;
  } else {
    nextPosition = currentPosition + 1;
  }
  var nextPiece = $(".puzzle-piece[data-position='" + nextPosition + "']");
  var tempImage = $(this).css("background-image");
  $(this).css("background-image", nextPiece.css("background-image"));
  nextPiece.css("background-image", tempImage);
  $(this).attr("data-position", nextPosition);
  nextPiece.attr("data-position", currentPosition);
});

// Khi người dùng click vào nút kiểm tra, kiểm tra xem các miếng ảnh đã đúng vị trí hay chưa
$("#check-puzzle-button").on("click", function() {
  checkPuzzle();
});
});





let done = false;

for (let i = 0; i < 3; i++) {
  if (done) {    break;  }  for (let j = 0; j < 3; j++) {    if (i * j >= 4) {      done = true;      break;    }

    console.log(i, j);  }}