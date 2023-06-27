// Put Everything in a function so it doesn't render till the page loads
$(function () {
   // Add a listener for click events on the save button
   $(".saveBtn").on("click", function () {
    // Get the user input from the corresponding textarea
    var userInput = $(this).siblings(".description").val();
    // Get the id of the parent time-block div
    var timeBlockId = $(this).parent().attr("id");
    // Save the user input in localStorage using the time block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });
// Compares the current hour to the id of the time block, and changes the class acordingly
  var currentHour = dayjs().format("H");
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (timeBlockHour == currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });
// Retrives any comments from local storage and makes sure they're applied to the right code block
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var userInput = localStorage.getItem(timeBlockId);
    $(this).find(".description").val(userInput);
  });
// Displays current date at the top of the screen
  $("#currentDay").text(dayjs().format("MMMM D, YYYY"));
});
