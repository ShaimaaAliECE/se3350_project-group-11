

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionContainerElement2 = document.getElementById('question-container2')
const questionContainerElement3 = document.getElementById('question-container3')
const questionContainerElement4 = document.getElementById('question-container4')
const questionContainerElement5 = document.getElementById('question-container5')
const questionContainerElement6 = document.getElementById('question-container6')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answerButtonsElement2 = document.getElementById('answer-buttons2')
const answerButtonsElement3 = document.getElementById('answer-buttons3')
const answerButtonsElement4 = document.getElementById('answer-buttons4')
const answerButtonsElement5 = document.getElementById('answer-buttons5')
const answerButtonsElement6 = document.getElementById('answer-buttons6')

var currentQuestionIndex

var nums1 = []
var nums2 = []
var nums3 = []
var nums4 = []
var nums5 = []
var nums6 = []
var nums7 = []

var sorted = []
var split
var correct = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  setNextQuestion()
})

function startGame() {
  currentQuestionIndex = 1
  resetState()
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  for(x=0; x<10;x++){
    nums1.pop()
  }
  
  fillArray()
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function fillArray() {
  while (nums1.length < 11){
    var x = getRndInteger(1,21)
    var e = false
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
  currentQuestionIndex++
  resetState()
  for(i=0; i<5;i++){
    nums2.push(nums1[i])
    nums5.push(nums1[i+5])
  }

  if (currentQuestionIndex ==2){
    questionContainerElement2.classList.remove('hide')
    questionContainerElement5.classList.remove('hide')
    showQuestion(nums2)
  }
  if (currentQuestionIndex ==3){
    for(i=0; i<2;i++){
      nums3.push(nums2[i])
    }
    questionContainerElement3.classList.remove('hide')
    split = 3
    showQuestion2(nums3)
    currentQuestionIndex++
  }
  if (currentQuestionIndex ==4){
    for(i=2; i<5;i++){
      nums4.push(nums2[i])
    }
    questionContainerElement4.classList.remove('hide')
    split = 4
    showQuestion2(nums4)
    sorted = nums2.sort(function(a, b){return a - b})
  }
  if (currentQuestionIndex ==5){
    showQuestion(nums5)
  }
  if (currentQuestionIndex ==6){
    for(i=0; i<2;i++){
      nums6.push(nums5[i])
    }
    questionContainerElement3.classList.remove('hide')
    split = 3
    showQuestion2(nums6)
    currentQuestionIndex++
  }
  if (currentQuestionIndex ==7){
    for(i=2; i<5;i++){
      nums7.push(nums5[i])
    }
    questionContainerElement4.classList.remove('hide')
    split = 4
    showQuestion2(nums7)
    sorted = nums5.sort(function(a, b){return a - b})
    correct = 0
  }
  if (currentQuestionIndex ==8){
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

function showQuestion(numbers) {
  var x = 0
  for ( y in numbers){
    const button = document.getElementById(`btn${currentQuestionIndex}${x}`)
    button.innerText = numbers[y]
    x++
    button.addEventListener('click', selectAnswer)
  }

}

function showQuestion2(numbers) {
  var x = 0
  for ( y in numbers){
    const button = document.getElementById(`btn${split}${x}`)
    button.innerText = numbers[y]
    x++
    button.addEventListener('click', selectAnswer2)
  }

}

function resetState() {
  clearStatusClass(document.body)
  if (currentQuestionIndex ==2||currentQuestionIndex ==1){
    Array.from(answerButtonsElement.children).forEach(button => {
      clearStatusClass(button)
      button.removeEventListener('click', selectAnswer)
    })
  }
  if (currentQuestionIndex ==3){
    Array.from(answerButtonsElement2.children).forEach(button => {
      clearStatusClass(button)
      button.removeEventListener('click', selectAnswer)
      button.innerText = ""
    })
  }

  if (currentQuestionIndex ==6){
    Array.from(answerButtonsElement5.children).forEach(button => {
      clearStatusClass(button)
      button.removeEventListener('click', selectAnswer)
      button.innerText = ""
    })
  }

  if (currentQuestionIndex ==8){
    Array.from(answerButtonsElement.children).forEach(button => {
      clearStatusClass(button)
      button.removeEventListener('click', selectAnswer)
      button.innerText = ""
    })
  }
 
  nextButton.classList.add('hide')

}

function selectAnswer(e) {
  const selectedButton = e.target
  const num = selectedButton.innerText
  if (currentQuestionIndex ==1){
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
  if (currentQuestionIndex ==2){
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

  if (currentQuestionIndex ==5){
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

function selectAnswer2(e) {
  const selectedButton = e.target
  const num = selectedButton.innerText
  if (currentQuestionIndex ==4){
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
  if (currentQuestionIndex ==7){
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

  if (currentQuestionIndex ==8){
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

