$(function () {

});
// Ensures HTML and CSS loads first
$(document).ready(function () {

  // Displays the current date and time with dayjs
  var displayTime = document.querySelector("#currentDay");
  var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
  displayTime.textContent = currentTime;

  // Saves user input when clicking button to local storage
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });

  // Update time block classes depending on the current local time
  function updateBlockClasses() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  updateBlockClasses();

  // Display information from local storage in time blocks
  function displayTextFromStorage() {
    $(".time-block").each(function () {
      var blockHour = $(this).attr("id");
      $(this).children(".description").val(localStorage.getItem(blockHour));
    });
  }
  displayTextFromStorage();

});

