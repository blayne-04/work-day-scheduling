//wraps all the code so it takes place after the dom is loaded
$(document).ready(function() {
//global variable for hours
  var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
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
for (var i = 0; i < hours.length; i++) {
  var hour = hours[i];
  var item = localStorage.getItem('hr-' + hour);
  $('#hr-' + hour).children('textarea').val(item);
} 
// adds classes depending on the time of day
    var timeOfDay = dayjs().format('H')
    for (var i = 0; i < hours.length; i++){
      var hour = hours[i]
      if(timeOfDay < hour){
        $('#hr-' + hour).addClass('future')
      } else if (timeOfDay > hour) {
        $('#hr-' + hour).addClass('past')
      } else {
        $('#hr-' + hour).addClass('present')
      }
    }
})