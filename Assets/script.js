
var timerPage = $('#currentDay')
var currentDay = dayjs().format('MMM D, YYYY');
var currentTime = dayjs().format('hh : mm : ss');
var curHour = dayjs().format('H')

// Sets all variables to military time to compare later

var hourNine = document.querySelector('#hour-9')
var hourNineValue = 9


var hourTen = document.querySelector('#hour-10')
var hourTenValue = 10

var hourEleven = document.querySelector('#hour-11')
var hourElevenValue = 11

var hourTwelve = document.querySelector('#hour-12')
var hourTwelveValue = 12

var hourOne = document.querySelector('#hour-1')
var hourOneValue = 13

var hourTwo = document.querySelector('#hour-2')
var hourTwoValue = 14

var hourThree = document.querySelector('#hour-3')
var hourThreeValue = 15

var hourFour = document.querySelector('#hour-4')
var hourFourValue = 16

var hourFive = document.querySelector('#hour-5')
var hourFiveValue = 17


// Shows time on top of page
timerPage.text(currentDay + ' at ' + currentTime);


// Run time to that it is constantly updating
function timerStart() {
  setInterval(function() {
    var today = dayjs().format('MMM D, YYYY');
    var time = dayjs().format('hh : mm : ss');
    timerPage.text(today + ' at ' + time);
  }, 1000);
  
 
}
// Checks if current hour is before, current, or after hour on time block.  I then set the class to the corresponding outcome
function checkTime() {

  if (curHour<hourNineValue){
hourNine.setAttribute('class','row time-block future')}

  else if(curHour==hourNineValue) {
hourNine.setAttribute('class','row time-block present')}

else if(curHour>hourNineValue) {
hourNine.setAttribute('class','row time-block past') }

if (curHour<hourTenValue){
  hourTen.setAttribute('class','row time-block future')}
  
    else if(curHour==hourTenValue) {
  hourTen.setAttribute('class','row time-block present')}
  
  else if(curHour>hourTenValue) {
  hourTen.setAttribute('class','row time-block past') }

if (curHour<hourElevenValue){
    hourEleven.setAttribute('class','row time-block future')}
    
      else if(curHour==hourElevenValue) {
    hourEleven.setAttribute('class','row time-block present')}
    
    else if(curHour>hourElevenValue) {
    hourEleven.setAttribute('class','row time-block past') }

if (curHour<hourTwelveValue){
      hourTwelve.setAttribute('class','row time-block future')}
      
        else if(curHour==hourTwelveValue) {
      hourTwelve.setAttribute('class','row time-block present')}
      
      else if(curHour>hourTwelveValue) {
      hourTwelve.setAttribute('class','row time-block past') }

if (curHour<hourOneValue){
        hourOne.setAttribute('class','row time-block future')}
        
          else if(curHour==hourOneValue) {
        hourOne.setAttribute('class','row time-block present')}
        
        else if(curHour>hourOneValue) {
        hourOne.setAttribute('class','row time-block past') }

if (curHour<hourTwoValue){
          hourTwo.setAttribute('class','row time-block future')}
          
            else if(curHour==hourTwoValue) {
          hourTwo.setAttribute('class','row time-block present')}
          
          else if(curHour>hourTwoValue) {
          hourTwo.setAttribute('class','row time-block past') }

if (curHour<hourThreeValue){
            hourThree.setAttribute('class','row time-block future')}
            
              else if(curHour==hourThreeValue) {
            hourThree.setAttribute('class','row time-block present')}
            
            else if(curHour>hourThreeValue) {
            hourThree.setAttribute('class','row time-block past') }

if (curHour<hourFourValue){
              hourFour.setAttribute('class','row time-block future')}
              
                else if(curHour==hourFourValue) {
              hourFour.setAttribute('class','row time-block present')}
              
              else if(curHour>hourFourValue) {
              hourFour.setAttribute('class','row time-block past') }

if (curHour<hourFiveValue){
                hourFive.setAttribute('class','row time-block future')}
                
                  else if(curHour==hourFiveValue) {
                hourFive.setAttribute('class','row time-block present')}
                
                else if(curHour>hourFiveValue) {
                hourFive.setAttribute('class','row time-block past') }



}

// Created button from class in HTML

var saveBtn = $('.btn')
var storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];


// when button is clicked it saves text by targeting the parents of button in HTML
saveBtn.on('click', function (event) {
  event.stopPropagation();

  var btnClicked = $(event.target);
  var parent = btnClicked.parent().parent()
  var parentId = btnClicked.parent().parent().attr('id')
  
  // If id or time block area is undefined, it sets the ID to correct text area
  if (parentId === undefined) {
    parentId = btnClicked.parent().attr('id')
    parent = btnClicked.parent()
  }

// Creates object to allow to get from local storage

  var task = parent.children().eq(1).val() || " ";

  var taskObj = {
    task: task,
    parent: parentId,
  };  

  // Loops through to check text area per ID and then splices the tasks

  for (i=0; i < storedTasks.length; i++ ) {
    if (taskObj.parent === storedTasks[i].parent) {
      storedTasks.splice(i, 1)
    }
  }
//  Pushes new task to keep storage
  storedTasks.push((taskObj));
  localStorage.setItem("tasks", (JSON.stringify(storedTasks)));
    
  memory()
});
// reloads all of the currently stored tasks upon broswer opening
function memory() {
  for (i=0; i < storedTasks.length; i++ ) {
    var id = storedTasks[i].parent
    var text = storedTasks[i].task
    $('#' + id).children().eq(1).val(text)
  }
  console.log(storedTasks);


}


memory()
checkTime()
timerStart()

