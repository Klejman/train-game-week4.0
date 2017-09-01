$(document).ready(function(){

  $("#my_audio").get(0).play();



  
$('gamePlayScreen').on()
$(this).hide();

$(".wrapper").click(function(){
$(this).hide();

})

//set and track overall points/score
var wins = 0;
$('#wins').text(wins);

var losses = 0;
$('#losses').text(losses);

//create game counter aka userScore tracking current game
var userScore= 0;

//game reset
function reset(){
  setValues();
  userScore= 0;
  $('#userScore').text(userScore); 
  function randomIntFromInterval(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
  }
  var numRandom = randomIntFromInterval(19,120);
  $('.value').text(numRandom);
  console.log(numRandom);
  $('#value').append(numRandom); 
}

//function that generates a random number

function randomIntFromInterval(min,max){
return Math.floor(Math.random()*(max-min+1)+min);
}

// assign variable the value of the random number generated by the function
var numRandom = randomIntFromInterval(19,120);

//display random number generated in span with id of value

$('.value').text(numRandom);
console.log(numRandom);
$('#value').append(numRandom);




//Goal: randomly assign the buttons aka thumbnails a numerical value 
//Steps Taken
// 1. set function named this function setValues
// 2. passing function named randomNum that takes in an element as a arguement
// 3. declare variable assigned to a random number between 1-12
// 4. assigning the html element the value of a random number 
// 5. query selector thumbnail class and iterate through each thumbnail and assigning it a numerical value

function setValues() {
function randomNum(index, element){
console.log(element)

let rand= Math.ceil(Math.random()* 12);
$(element).val(rand)
    }
$(".thumbnail").each(randomNum)
}
console.log($(".thumbnail"))
setValues();


//function that adds the numerical value assigned each button and display to #userScore
function addCharactersValue(currentValue, scoreValue) {
return currentValue + scoreValue;
}

$(".thumbnail").click(function(e) {
// each time a thumbnail is clicked add values together and display in the '#userScore' span
var score= parseInt(this.value);
console.log(score);
userScore= addCharactersValue(score, userScore);
$('#userScore').text(userScore);



//check if user score === randomNum
if (userScore === numRandom) {
wins++;
$('#wins').text(wins);
$('#userScore').text("You are a very useful engine!");
$("#winSound").get(0).play();
reset();

}

if (userScore > numRandom) {
losses++;
$('#losses').text(losses);  
$('#userScore').text("You have caused confusion & delay!");
$("#lossSound").get(0).play();
reset();

 }
});

});






 