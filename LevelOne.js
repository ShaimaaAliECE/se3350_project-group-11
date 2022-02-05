

//Start button/restart button
const startButton = document.getElementById('start-btn')
//Button for advancing after getting step complete. Not used currently
const nextButton = document.getElementById('next-btn')

const btn1 = document.getElementById('btn15');
const btn2 = document.getElementById('btn22');
const btn5 = document.getElementById('btn52');
const btn4 = document.getElementById('btn41');

const btn30 = document.getElementById('btn30');
const btn31 = document.getElementById('btn31');
const btn40 = document.getElementById('btn40');
const btn41 = document.getElementById('btn41');
const btn42 = document.getElementById('btn42');

const btn20 = document.getElementById('btn20');
const btn21 = document.getElementById('btn21');
const btn23 = document.getElementById('btn23');
const btn24 = document.getElementById('btn24');

const btn50 = document.getElementById('btn50');
const btn51 = document.getElementById('btn51');
const btn53 = document.getElementById('btn53');
const btn54 = document.getElementById('btn54');

let nextButtonValues = [];
/*nextButtonValues.push(btn1);
nextButtonValues.push(btn2);
nextButtonValues.push(btn4);
nextButtonValues.push(btn5);*/
nextButtonValues.push(btn2);
nextButtonValues.push(btn1);


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

//arr will be used to store sorted array values
let arr = [];
//buttons is used to store the buttons that will be selected 
let buttons = [];
//lastButtonSet is used to store the buttons that will be selected at the last step
let lastButtonSet = [];

lastButtonSet.push(btn20);
lastButtonSet.push(btn21);
lastButtonSet.push(btn2);
lastButtonSet.push(btn23);
lastButtonSet.push(btn24);
lastButtonSet.push(btn50);
lastButtonSet.push(btn51);
lastButtonSet.push(btn5);
lastButtonSet.push(btn53);
lastButtonSet.push(btn54);

let nextCounter = 0;

//console.logs are used for my own debugging theyre randomly all over the place
nextButton.addEventListener('click', () => {
  nextCounter++;
  console.log(nextCounter)

  //next button Values was used before I used counter but this can be redone so its more consistent with the rest of the event listner
  if(nextButtonValues.length>0){
    selectAnswer(nextButtonValues.pop())
    console.log(nextButtonValues.length)
  }

  //adds buttons and their values to buttons and arr
  if(nextCounter==2)
  {

    arr.push(btn30.innerText);
    arr.push(btn31.innerText);
    arr.push(btn40.innerText);
    arr.push(btn41.innerText);
    arr.push(btn42.innerText);
    //Sorts arrays
    arr.sort(function(a, b){return a - b});
  
    buttons.push(btn30);
    buttons.push(btn31);
    buttons.push(btn40);
    buttons.push(btn41);
    buttons.push(btn42);

  }


  if(nextCounter>2&&nextCounter<8)
  {
    console.log(arr)
    //This will check the first value of arr, the break later will exit the loop so only one answer is selected per click
    for(let x in arr)
    {
      console.log("Checking for " + arr[x] + "in arr.")

      //This loops through buttons if the inner text matches with arr than the button will be selected.
      for(let y in buttons)
      {
        console.log("Checking" + buttons[y].innerText + "for match.")
        if(buttons[y].innerText==arr[x])
        {
          console.log(buttons[y].innerText + " " + arr[x])
          selectAnswer(buttons[y])

          //Removes the answer from the arr array
          arr.splice(x,1)
          break
        }
      }
      break
    }
  }

  //similar code to counter==2
  if(nextCounter==7)
  {
    selectAnswer(btn5);

    //createArrays(arr,buttons);
    arr.push(btn30.innerText);
    arr.push(btn31.innerText);
    arr.push(btn40.innerText);
    arr.push(btn41.innerText);
    arr.push(btn42.innerText);

    arr.sort(function(a, b){return a - b});

    console.log(buttons+" "+arr)
  }

  // similar to if(counter>2&&counter<8)
  if(nextCounter>8 &&nextCounter<14)
  {
    console.log(arr)
    for(let x in arr)
    {
      console.log("Checking for " + arr[x] + "in arr.")
      for(let y in buttons)
      {
        console.log("Checking" + buttons[y].innerText + "for match.")
        if(buttons[y].innerText==arr[x])
        {
          console.log(buttons[y].innerText + " " + arr[x])
          selectAnswer(buttons[y])

          //buttons.splice(y,1)
          arr.splice(x,1)
          break
        }
      }
      break
    }
  }

  //Everything generally repeats, should of used funcitons, will do that later maybe
  if (nextCounter==13)
  {
  
    buttons.push(btn30);
    buttons.push(btn31);
    buttons.push(btn40);
    buttons.push(btn41);
    buttons.push(btn42);

    arr.push(btn20.innerText);
    arr.push(btn21.innerText);
    arr.push(btn2.innerText);
    arr.push(btn23.innerText);
    arr.push(btn24.innerText);
    arr.push(btn50.innerText);
    arr.push(btn51.innerText);
    arr.push(btn5.innerText);
    arr.push(btn53.innerText);
    arr.push(btn54.innerText);
    arr.sort(function(a, b){return a - b});
  }

  if (nextCounter>14)
  {
    for(let x in arr)
    {
      console.log("Checking for " + arr[x] + "in arr.")
      for(let y in lastButtonSet)
      {
        console.log("Checking" + lastButtonSet[y].innerText + "for match.")
        if(lastButtonSet[y].innerText==arr[x])
        {
          console.log(lastButtonSet[y].innerText + " " + arr[x])
          selectAnswer(lastButtonSet[y])

          //buttons.splice(y,1)
          arr.splice(x,1)
          break
        }
      }
      break
    }
  }

})

//Early attempt
/*
function createArrays(x,y)
{

  x.push(btn30.innerText);
  x.push(btn31.innerText);
  x.push(btn40.innerText);
  x.push(btn41.innerText);
  x.push(btn42.innerText);
  console.log(x);

  y.push(btn30);
  y.push(btn31);
  y.push(btn40);
  y.push(btn41);
  y.push(btn42);
  
  x.sort(function(a, b){return a - b});
}

function answerStep3(){
  let arr = [];
  let buttons = [];

  arr.push(btn30.innerText);
  arr.push(btn31.innerText);
  arr.push(btn40.innerText);
  arr.push(btn41.innerText);
  arr.push(btn42.innerText);
  console.log(arr);

  buttons.push(btn30);
  buttons.push(btn31);
  buttons.push(btn40);
  buttons.push(btn41);
  buttons.push(btn42);
  
  arr.sort(function(a, b){return a - b});
  for(let x in arr)
  {
    for(let y in buttons)
    {
      if(buttons[y].innerText==arr[x])
      {
        selectAnswer(buttons.pop(buttons[y]))
        break
      }
    }
    break
  }
}
*/

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
  alert("Step 1: Split the list of numbers evenly. Click the number below where you want to split")
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
    alert("Step 3: Select the numbers in order from smallest to largest")
  }

  else if (x == 4){
    //Takes the bottom half of the ten numbers
    for(i=0; i<5;i++){
      nums.push(numbers[0][i+5])
    }
    numbers.push(nums)
    alert("Step 4: Split the list of numbers as evenly as possible. Click the number below where you want to split")
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
    alert("Step 5: Select the numbers in order from smallest to largest")
  }

  else if (x == 7){
    //Sorts all ten numbers
    sorted = numbers[0].sort(function(a, b){return a - b})
    correct = 0
    alert("Step 6: Select the numbers in order from smallest to largest")
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
  //clearStatusClass(document.body)
  var y
  if (step ==2||step ==1||step == 8){y = 0}
  if (step ==3){y=1}
  if (step ==6){y=4}

  if (step <4||step==6||step==8){
    Array.from(answerButtonsElements[y].children).forEach(button => {
      
      button.removeEventListener('click', selectAnswer)
      if (step >2){ button.innerText = ""}
    })
  }

 
 
  //nextButton.classList.add('hide')

}

//Checks if the selected answer is correct.
function selectAnswer(e) {
  const selectedButton = e
  const num = selectedButton.innerText
  setStatusClass(selectedButton, false)
  
  if (num == numbers[0][5]&&step==1){
    setStatusClass(selectedButton, true)
    setNextLevel(1)
  }
  else if ((num == numbers[1][2]||num == numbers[1][3])&&step==2){
    setStatusClass(selectedButton, true)
    clearStatusClass(0)
    setNextLevel(2)
  }

  else if (step ==4){
    const num2 = Array.from(answerButtonsElements[1].children)[correct]
    if (num == sorted[0]){
      setStatusClass(selectedButton, true)
      clearStatusClass(1)
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

  else if ((num == numbers[4][2]||num == numbers[4][3])&&step==5){
    setStatusClass(selectedButton, true)
    clearStatusClass(2)
    clearStatusClass(3)
    setNextLevel(5)
  }

  else if (step ==7){
    const num2 = Array.from(answerButtonsElements[4].children)[correct]
    if (num == sorted[0]){
      setStatusClass(selectedButton, true)
      clearStatusClass(4)
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
      setStatusClass(selectedButton, true)
      num2.innerText = num
      correct++
      sorted.shift()
      selectedButton.innerText = ""
    }
    if (sorted.length == 0){
      questionContainerElements[1].classList.add('hide')
      questionContainerElements[4].classList.add('hide')
      setStatusClass(document.body, true)
      Array.from(answerButtonsElements[0].children).forEach(button => {
        setStatusClass(button, true)
      })
    }
  }
  
}

function setStatusClass(element, correct) {
  //clearStatusClass(element)
  if (correct) {
    element.classList.remove('wrong')
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(x) {
  Array.from(answerButtonsElements[x].children).forEach(button => {
    button.classList.remove('correct')
    button.classList.remove('wrong')
  })
}

// made some comments !