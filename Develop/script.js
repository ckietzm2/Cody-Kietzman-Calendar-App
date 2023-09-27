// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


var timerP = $('#currentDay')
var startDay = dayjs().format('MMM D, YYYY');
var startTime = dayjs().format('hh : mm : ss');
var curHour = dayjs().format('H')


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





timerP.text(startDay + ' at ' + startTime);

function timerStart() {
  setInterval(function() {
    var today = dayjs().format('MMM D, YYYY');
    var time = dayjs().format('hh : mm : ss');
    timerP.text(today + ' at ' + time);
  }, 1000);
  
 
}

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



timerStart()
checkTime()


