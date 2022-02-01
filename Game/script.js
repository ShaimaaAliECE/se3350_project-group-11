

//Start button/restart button
const startButton = document.getElementById('start-btn')
//Button for advancing after getting step complete. Not used currently
const nextButton = document.getElementById('next-btn')


var questionContainerElements = [document.getElementById('question-container'),  document.getElementById('question-container2'), document.getElementById('question-container3'),  document.getElementById('question-container4'),document.getElementById('question-container5'), document.getElementById('question-container6') ]
//const questionElement = document.getElementById('question')

var answerButtonsElements = [document.getElementById('answer-buttons'), document.getElementById('answer-buttons2'), document.getElementById('answer-buttons3'), document.getElementById('answer-buttons4'), document.getElementById('answer-buttons5'), document.getElementById('answer-buttons6')]

//Keeps track of what step the user is on
var step

//Arrays for each array of numbers at each step.
var numbers = []

//An array to store sorted arrays. To check if the user ordered correctly
var sorted = []

//For step 3. Is either 3 or 4 for when the split is uneven. 
var split

//Just a variable to be incremented for the sorting step
var correct = 0


startButton.addEventListener('click', startGame)
/*nextButton.addEventListener('click', () => {
  setNextLevel()
})*/

function startGame() {
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

//Generates random integer from 1-20
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
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
  }

  else if (x == 2){
    var nums2 = []
    //takes the top two and bottom three of the top half
    for(i=0; i<2;i++){
      nums.push(numbers[1][i])
      nums2.push(numbers[1][i+2])
    }
    nums2.push(numbers[1][4])
    questionContainerElements[2].classList.remove('hide')
    questionContainerElements[3].classList.remove('hide')
    numbers.push(nums)
    split = 3
    showQuestion(2)
    numbers.push(nums2)
    //Sorts the top half
    sorted = numbers[1].sort(function(a, b){return a - b})
    split = 4
    step++
    x++
  }

  else if (x == 4){
    //Takes the bottom half of the ten numbers
    for(i=0; i<5;i++){
      nums.push(numbers[0][i+5])
    }
    numbers.push(nums)
  }

  else if (x == 5){
    var nums2 = []
    //takes the top two and bottom three of the bottom half
    for(i=0; i<2;i++){
      nums.push(numbers[4][i])
      nums2.push(numbers[4][i+2])
    }
    nums2.push(numbers[4][4])
    questionContainerElements[2].classList.remove('hide')
    questionContainerElements[3].classList.remove('hide')
    numbers.push(nums)
    split = 3
    showQuestion(5)
    numbers.push(nums2)
    //Sorts the bottom half
    sorted = numbers[4].sort(function(a, b){return a - b})
    split = 4
    step++
    correct = 0
    x++
  }

  else if (x == 7){
    //Sorts all ten numbers
    sorted = numbers[0].sort(function(a, b){return a - b})
    correct = 0
  }

  showQuestion(x)

}

//Shows the numbers on the screen. Works for multiuple steps because of the naming scheme of the buttons
function showQuestion(x) {

  if (x<7){
    const nums = numbers[x]
    var z = 0
    for ( y in nums){
      var button
      if (x==2 || x==3 || x==5 || x==6){ 
            button = document.getElementById(`btn${split}${z}`)
            button.addEventListener('click', selectAnswer)
          }
      else { 
            button = document.getElementById(`btn${step}${z}`)
            button.addEventListener('click', selectAnswer)
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


//Removes click listeners from previous steps
function resetState() {
  clearStatusClass(document.body)
  var y
  if (step ==2||step ==1||step == 8){y = 0}
  if (step ==3){y=1}
  if (step ==6){y=4}

  if (step <4||step==6||step==8){
    Array.from(answerButtonsElements[y].children).forEach(button => {
      clearStatusClass(button)
      button.removeEventListener('click', selectAnswer)
      if (step >2){ button.innerText = ""}
    })
  }
 
  nextButton.classList.add('hide')

}

//Checks if the selected answer is correct.
function selectAnswer(e) {
  const selectedButton = e.target
  const num = selectedButton.innerText
  
  if (num == numbers[0][5]&&step==1){
    //setStatusClass(document.body, num)
    //setStatusClass(selectedButton, num)
    setNextLevel(1)
  }
  if ((num == numbers[1][2]||num == numbers[1][3])&&step==2){
    setNextLevel(2)
  }

  if (step ==4){
    const num2 = Array.from(answerButtonsElements[1].children)[correct]
    if (num == sorted[0]){
      num2.innerText = num
      correct++
      sorted.shift()
      selectedButton.innerText = ""
    }
    if (sorted.length == 0){
      questionContainerElements[2].classList.add('hide')
      questionContainerElements[3].classList.add('hide')
      setNextLevel(4)
    }
  }

  if ((num == numbers[4][2]||num == numbers[4][3])&&step==5){
    setNextLevel(5)
  }

  if (step ==7){
    const num2 = Array.from(answerButtonsElements[4].children)[correct]
    if (num == sorted[0]){
      num2.innerText = num
      correct++
      sorted.shift()
      selectedButton.innerText = ""
    }
    if (sorted.length == 0){
      questionContainerElements[2].classList.add('hide')
      questionContainerElements[3].classList.add('hide')
      setNextLevel(7)
    }
  }

  if (step > 7){
 
    const num2 = Array.from(answerButtonsElements[0].children)[correct]
    if (num == sorted[0]){
      num2.innerText = num
      correct++
      sorted.shift()
      selectedButton.innerText = ""
    }
    if (sorted.length == 0){
      questionContainerElements[1].classList.add('hide')
      questionContainerElements[4].classList.add('hide')
    }
  }
    /*else{Array.from(answerButtonsElements[0].children).forEach(button => {
      //setStatusClass(button, button.dataset.num)
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    })}
    else{
      Array.from(answerButtonsElements[1].children).forEach(button => {
      //setStatusClass(button, button.dataset.num)
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    })}*/
  
  
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// made some comments 