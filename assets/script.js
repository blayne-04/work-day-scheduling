// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
//displays the current date in the page header
var currentDay = dayjs().format('MMM D, YYYY')
var dayDisp = $('#currentDay')
dayDisp.text(currentDay)

//saves the users text input to a key corresponding to the savebtns parent id
  $('.saveBtn').click(function(){
    var inputValue = $(this).siblings('.description').val()
    let id = $(this).parent().attr('id')
    localStorage.setItem(id, inputValue);
  })
//list of localstorage keys and values for reference
  for (var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log( key + " = " + value);
  }
//adds local storage values to corresponding text areas
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (var i = 0; i < hours.length; i++) {
  var hour = hours[i];
  var item = localStorage.getItem('hr-' + hour);
  $('#hr-' + hour).children('textarea').val(item);
}

$(function () {
  console.log()
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
  });
})