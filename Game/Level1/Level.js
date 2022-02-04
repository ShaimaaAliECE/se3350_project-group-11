//Start button/restart button
const startButton = document.getElementById('start-btn')

//Button for advancing after getting step complete. Not used currently
const nextButton = document.getElementById('next-btn')


var questionContainerElements = [
    document.getElementById('question-container'),
    document.getElementById('question-container2'),
    document.getElementById('question-container3'),
    document.getElementById('question-container4'),
    document.getElementById('question-container5'),
    document.getElementById('question-container6') ]
//const questionElement = document.getElementById('question')

var answerButtonsElements = [
`document.getElementById('answer-buttons'),
document.getElementById('answer-buttons2'),
document.getElementById('answer-buttons3'),
document.getElementById('answer-buttons4'),
document.getElementById('answer-buttons5'),
document.getElementById('answer-buttons6')`]

//Keeps track of what step the user is on
var step

//Arrays for each array of numbers at each step.
var numbers = []

startButton.addEventListener('click', startGame)

function startGame() {
    alert("How to play: select the correct option. a wrong attempt will turn red")
    step = 1
    resetState()
    startButton.classList.add('hide')
    questionContainerElements[0].classList.remove('hide')
  
    //Clears the array if it is a restart
    for(x=0; x<7;x++){
      numbers.pop()
    }
    
    fillArray()
  }

  function fillArray() {
    var nums = []
    //Keeps adding to array until it is 10 long
    while (nums.length < 10){
      var x = getRndInteger(1,21)
      var e = false
  
      //Checks if new integer is already in array. Does not add if so
      for (y in nums){
        if (x == nums[y]){
         var e = true
        }
      }
      if (e == false){
        nums.push(x)
      }
    }
    numbers.push(nums)
    showQuestion(0)
    alert("Step 1: Split the list of numbers evenly. Click the number below where you want to split")
  }
  
  function showQuestion(x) {

    if (x<7){
      const nums = numbers[x]
      var z = 0
      for ( y in nums){
        var button
        if (x==2 || x==3 || x==5 || x==6){ 
              button = document.getElementById(`btn${split}${z}`)
            }
        else { 
              button = document.getElementById(`btn${step}${z}`)
            }
        button.innerText = nums[y]
        z++
        button.addEventListener('click', selectAnswer)
      }
    }
    else {
      Array.from(answerButtonsElements[1].children).forEach(button => {
        button.addEventListener('click', selectAnswer)
      })
      Array.from(answerButtonsElements[4].children).forEach(button => {
        button.addEventListener('click', selectAnswer)
      })
    }
  
  }
  function setNextLevel(x) {
    var nums = []
    step++
    resetState()
  
    if (x == 1){
      //Takes the top half of the ten numbers
      for(i=0; i<5;i++){
        nums.push(numbers[0][i])
      }
      questionContainerElements[1].classList.remove('hide')
      questionContainerElements[4].classList.remove('hide')
      numbers.push(nums)
      alert("Step 2: Split the list of numbers as evenly as possible. Click the number below where you want to split")
    }
}
