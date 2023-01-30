// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//displays the current date in the page header
var currentDay = dayjs().format('MMM D, YYYY')
var dayDisp = $('#currentDay')
dayDisp.text(currentDay)


var ids = [$('#hr-9'), $('#hr-10'), $('#hr-11'), $('#hr-12'), $('#hr-13'), $('#hr-14'), $('#hr-15'), $('#hr-16'), $('#hr-17')]
var retrievedInput = localStorage.getItem('userInput')
for (i = 0; i < ids.length; i++){
  ('.saveBtn').click(function(){
    var inputValue = $(this).siblings('.description').val()
    localStorage.setItem(hr-[i], inputValue);
  })
  ids[i].children('textarea').val(retrievedInput)
}

ids[0].children('.saveBtn').click(function(){
  var Input = $(this).children('.description').val()
  localStorage.setItem(this, Input)
})

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
  });
