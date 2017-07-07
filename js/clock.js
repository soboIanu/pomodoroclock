var minutes = "";
var secondes = "";

$("#minutesDownSession").on("click", function () {
  minutes = parseInt($("#minutesSession").text());
    if (minutes === 0) {

  } else {
    $("#minutesSession").text(minutes - 1);
  }
});

$("#minutesUpSession").on("click", function () {
  minutes = parseInt($("#minutesSession").text());
    if (minutes === 0) {

  } else {
    $("#minutesSession").text(minutes + 1);
  }
});

$("#minutesDownBreak").on("click", function () {
  minutes = parseInt($("#minutesBreak").text());
    if (minutes === 0) {

  } else {
    $("#minutesBreak").text(minutes - 1);
  }
});

$("#minutesUpBreak").on("click", function () {
  minutes = parseInt($("#minutesBreak").text());
    if (minutes === 0) {

  } else {
    $("#minutesBreak").text(minutes + 1);
  }
});
