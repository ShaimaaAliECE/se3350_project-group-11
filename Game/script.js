

//Start button/restart button
const startButton = document.getElementById('start-btn')
//Button for advancing after getting step complete
const nextButton = document.getElementById('next-btn')

//Constants for containers for the numbers at each step, probably unecisarry I just built off the existing code
const questionContainerElement = document.getElementById('question-container')
const questionContainerElement2 = document.getElementById('question-container2')
const questionContainerElement3 = document.getElementById('question-container3')
const questionContainerElement4 = document.getElementById('question-container4')
const questionContainerElement5 = document.getElementById('question-container5')
const questionContainerElement6 = document.getElementById('question-container6')
//const questionElement = document.getElementById('question')

//Constant for the set of numbers at each step
const answerButtonsElement = document.getElementById('answer-buttons')
const answerButtonsElement2 = document.getElementById('answer-buttons2')
const answerButtonsElement3 = document.getElementById('answer-buttons3')
const answerButtonsElement4 = document.getElementById('answer-buttons4')
const answerButtonsElement5 = document.getElementById('answer-buttons5')
const answerButtonsElement6 = document.getElementById('answer-buttons6')

//Keeps track of what step the user is on
var step

//Arrays for each set of numbers. nums1 is the randomly generated one and all others are populated with some subset of nums1
var nums1 = []
var nums2 = []
var nums3 = []
var nums4 = []
var nums5 = []
var nums6 = []
var nums7 = []

//An array to store sorted arrays. To check if the user ordered correctly
var sorted = []

//For step 3. Is either 3 or 2 for when the spplit is uneven
var split

//Just a variable to be incremented for the sorting step
var correct = 0


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  setNextQuestion()
})

function startGame() {
  step = 1
  resetState()
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')

  //Clears the array if it is a restart
  for(x=0; x<10;x++){
    nums1.pop()
  }
  
  fillArray()
}

//Generates random integer from 1-20
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function fillArray() {
  //Keeps adding to array until it is 10 long
  while (nums1.length < 11){
    var x = getRndInteger(1,21)
    var e = false

    //Checks if new integer is already in array. Does not add if so
    for (y in nums1){
      if (x == nums1[y]){
       var e = true
      }
    }
    if (e == false){
      nums1.push(x)
    }
  }
  showQuestion(nums1)
}




function setNextQuestion() {
  step++
  resetState()

  //Splits the initial array in half
  for(i=0; i<5;i++){
    nums2.push(nums1[i])
    nums5.push(nums1[i+5])
  }

  if (step ==2){
    questionContainerElement2.classList.remove('hide')
    questionContainerElement5.classList.remove('hide')
    showQuestion(nums2)
  }
  if (step ==3){
    //Stores top 2 of the second array
    for(i=0; i<2;i++){
      nums3.push(nums2[i])
    }
    questionContainerElement3.classList.remove('hide')
    split = 3
    showQuestion2(nums3)
    step++
  }

  if (step ==4){
    //Stores bottom 3 of the second array
    for(i=2; i<5;i++){
      nums4.push(nums2[i])
    }
    questionContainerElement4.classList.remove('hide')
    split = 4
    showQuestion2(nums4)
    //Sorts the second array
    sorted = nums2.sort(function(a, b){return a - b})
  }
  if (step ==5){
    showQuestion(nums5)
  }
  if (step ==6){
    for(i=0; i<2;i++){
      nums6.push(nums5[i])
    }
    questionContainerElement3.classList.remove('hide')
    split = 3
    showQuestion2(nums6)
    step++
  }
  if (step ==7){
    for(i=2; i<5;i++){
      nums7.push(nums5[i])
    }
    questionContainerElement4.classList.remove('hide')
    split = 4
    showQuestion2(nums7)
    sorted = nums5.sort(function(a, b){return a - b})
    correct = 0
  }
  if (step ==8){
    Array.from(answerButtonsElement2.children).forEach(button => {
      button.addEventListener('click', selectAnswer2)
    })

    Array.from(answerButtonsElement5.children).forEach(button => {
      button.addEventListener('click', selectAnswer2)
    })

    sorted = nums1.sort(function(a, b){return a - b})
    correct = 0
  
  }

}

//Shows the numbers on the screen. Works for multiuple steps because of the naming scheme of the buttons
function showQuestion(numbers) {
  var x = 0
  for ( y in numbers){
    const button = document.getElementById(`btn${step}${x}`)
    button.innerText = numbers[y]
    x++
    button.addEventListener('click', selectAnswer)
  }

}

//Same as  the above but for uneven array
function showQuestion2(numbers) {
  var x = 0
  for ( y in numbers){
    const button = document.getElementById(`btn${split}${x}`)
    button.innerText = numbers[y]
    x++
    button.addEventListener('click', selectAnswer2)
  }

}

//Removes click listeners from previous steps
function resetState() {
  clearStatusClass(document.body)
  if (step ==2||step ==1){
    Array.from(answerButtonsElement.children).forEach(button => {
      clearStatusClass(button)
      button.removeEventListener('click', selectAnswer)
    })
  }
  if (step ==3){
    Array.from(answerButtonsElement2.children).forEach(button => {
      clearStatusClass(button)
      button.removeEventListener('click', selectAnswer)
      button.innerText = ""
    })
  }

  if (step ==6){
    Array.from(answerButtonsElement5.children).forEach(button => {
      clearStatusClass(button)
      button.removeEventListener('click', selectAnswer)
      button.innerText = ""
    })
  }

  if (step ==8){
    Array.from(answerButtonsElement.children).forEach(button => {
      clearStatusClass(button)
      button.removeEventListener('click', selectAnswer)
      button.innerText = ""
    })
  }
 
  nextButton.classList.add('hide')

}

//Checks if the selected answer is correct. For splitting
function selectAnswer(e) {
  const selectedButton = e.target
  const num = selectedButton.innerText
  if (step ==1){
    if (num == nums1[5]){
      setStatusClass(document.body, num)
      setStatusClass(selectedButton, num)
      nextButton.classList.remove('hide')
    }
    else{Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.num)
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    })}
  }
  if (step ==2){
    if (num == nums2[2]){
      setStatusClass(document.body, num)
      setStatusClass(selectedButton, num)
      nextButton.classList.remove('hide')
    }
    else if (num == nums2[3]){
      setStatusClass(document.body, num)
      setStatusClass(selectedButton, num)
      nextButton.classList.remove('hide')
    }
    else{Array.from(answerButtonsElement2.children).forEach(button => {
      setStatusClass(button, button.dataset.num)
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    })}
  }

  if (step ==5){
    if (num == nums5[2]){
      setStatusClass(document.body, num) 
      setStatusClass(selectedButton, num)
      nextButton.classList.remove('hide')
    }
    else if (num == nums5[3]){
      setStatusClass(document.body, num)
      setStatusClass(selectedButton, num)
      nextButton.classList.remove('hide')
    }
    else{Array.from(answerButtonsElement2.children).forEach(button => {
      setStatusClass(button, button.dataset.num)
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    })}
  }
}

//Same as above but for ordering not splitting
function selectAnswer2(e) {
  const selectedButton = e.target
  const num = selectedButton.innerText
  if (step ==4){
    const num2 = Array.from(answerButtonsElement2.children)[correct]
    if (num == sorted[0]){
      num2.innerText = num
      correct++
      sorted.shift()
      sorted.shift()
      selectedButton.innerText = ""
    }
    if (sorted.length == 0){
      questionContainerElement3.classList.add('hide')
      questionContainerElement4.classList.add('hide')
      nextButton.classList.remove('hide')
    }
  }
  if (step ==7){
    const num2 = Array.from(answerButtonsElement5.children)[correct]
    if (num == sorted[0]){
      num2.innerText = num
      correct++
      sorted.shift()
      sorted.shift()
      sorted.shift()
      sorted.shift()
      selectedButton.innerText = ""
    }
    if (sorted.length == 0){
      questionContainerElement3.classList.add('hide')
      questionContainerElement4.classList.add('hide')
      nextButton.classList.remove('hide')
    }
  }

  if (step ==8){
    const num2 = Array.from(answerButtonsElement.children)[correct]
    if (num == sorted[0]){
      num2.innerText = num
      correct++
      sorted.shift()
    }
    if (sorted.length == 0){
      questionContainerElement2.classList.add('hide')
      questionContainerElement5.classList.add('hide')
      nextButton.classList.remove('hide')
    }
  }
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

