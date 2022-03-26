//Work in progress to make elements appear dynamically

//Start button
const startButton = document.getElementById('start-btn')

function startGame(){
  startButton.classList.add('hide');
  document.getElementsByClassName("0")[0].classList.remove('hide');
  countUp();
}
startButton.addEventListener("click",startGame);

let numWrongAttempts = 0;

const correctAudio = document.getElementById('correct-audio');
const wrongAudio = document.getElementById('wrong-audio');
const winningAudio = document.getElementById('winning-audio');
const gameoverAudio = document.getElementById('gameover-audio');

function flashGreen() {
  document.body.classList.add('green')
  window.setTimeout(function() {
    document.body.classList.remove('green')
  }, 500)
}
function flashRed() {
  document.body.classList.add('red')
  window.setTimeout(function() {
    document.body.classList.remove('red')
  }, 500)
}

var instructionContainerElement = document.getElementById('instructionContainer');
var instructionElementText = document.querySelector('[data-instruction-message-text]');
var restartContainerElement = document.getElementById('restartContainer');
var restartElementText = document.querySelector('[ data-message-text]');
var okButton = document.getElementById('ok-button');
var restartButton = document.getElementById('restart-button');

restartButton.addEventListener('click',() => {
  restartContainerElement.classList.remove('show');
  restartGame();
});

function wrongSelection(){
  numWrongAttempts++;

  //when the user exceeds 3 wrong choice call a function to do something ... 
  if(numWrongAttempts == 3)
  {
    gameOver();
  }
  wrongAudio.play();
  flashRed();
}

//This is code for the timer
let timeSecond = 0;
const timeH = document.querySelector("h1");
let counter;
let timeElapsed;

displayTime(timeSecond);

function countUp()
{
  timeSecond = 0;
  counter = setInterval(() => {
    timeSecond++;
    displayTime(timeSecond)
  }, 1000);
} 

function endCountUp()
{
  clearInterval(counter)
}

function countDown()
{
  setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
      endCount();
      clearInterval(countDown);
    }
  }, 1000);
}


function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Time out";
  document.body.className = "timeOut";
  setTimeout(function () {

    window.location.reload();
  
    }, 4000);
  
}



//This code snippet determines the amount of divs are needed to hold the divisions made by the merge sort
let deleteButtonList = []
const elementAmount = 20;
const elementAmountReset = elementAmount;
let elmnts = elementAmount;
let divAmount = 1;
while(true)
{
    elmnts = Math.ceil(elmnts/2);
    divAmount++;
    if(elmnts==1)
        break;
}
console.log(divAmount);


//(`${"hide"}`)
var divIdCounter = 1;
var divId = "question-containerr"+divIdCounter;
function addDiv(){
  for(let i=0; i<divAmount;i++)
  {
      let div = document.createElement("div");
      div.classList.add('pleaseWork');
      let div2 = document.createElement("div");
      div2.classList.add('btn-grid');
      if(i==0)
        //div2.setAttribute('id',"question-containerr");
        div2.id="question-containerr";
      else
        //div2.setAttribute('id',"question-containerr"+divIdCounter);
        div2.id="question-containerr"+divIdCounter;
      divIdCounter= divIdCounter+1;
      div.appendChild(div2);
      if(i>0)
      {
        let div2 = document.createElement("div");
        div2.classList.add('btn-grid');
        //div2.setAttribute('id',"question-containerr"+divIdCounter)
        div2.id = "question-containerr"+divIdCounter;
        divIdCounter= divIdCounter+1;
        //divIdCounter=divIdCounter+1;
        div.appendChild(div2);
      }
      document.body.insertBefore(div,document.getElementById('Hello'));
  }
}

var divIdCounter = 0;
var divId = "question-container"+divIdCounter;
function addDiv2(){
  for(let i=0; i<divAmount;i++)
  {
      let div = document.createElement("div");
      div.classList.add(i);
      if(i==0)
      {
      div.classList.add("hide");
      let div2 = document.createElement("div");
      div2.classList.add('btn-grid');
      div2.id="question-container00";//+divIdCounter;
      div2.setAttribute("data-sorted","false");
      divIdCounter= divIdCounter+1;
      div.appendChild(div2);
      }
      if(i>0)
      {
        let counter=0;
        let exp = Math.pow(2,i);
        for(let j=0;j<exp;j++)
        {
          let div2 = document.createElement("div");
          div2.classList.add('btn-grid');
          //div2.setAttribute('id',"question-containerr"+divIdCounter)
          //div2.id = "question-container"+divIdCounter;
          div2.id = "question-container"+i.toString()+counter.toString();
          div2.setAttribute("data-sorted","false");
          counter++;
          divIdCounter=divIdCounter+1;
          div.appendChild(div2);
        }

      }
      //document.getElementsByClassName("sidenav")[0]
      document.body.insertBefore(div,document.getElementsByClassName("controls")[0]);
  }
}


//document.body.onload = addDiv();

document.body.onload = addDiv2();

var questionContainerElements = [document.getElementById('question-container'),  document.getElementById('question-container2'), document.getElementById('question-container3'),  document.getElementById('question-container4'),document.getElementById('question-container5'), document.getElementById('question-container6') ]
//const questionElement = document.getElementById('question')
var questionContainerElementsVer2 = [];
function doThis(){
for(let i=0;i<(divAmount*2-1);i++)
{
  let id = "";
  if(i==0)
    id = "question-container0";
  else
    id = "question-container"+(i+1);
  console.log(id);
  questionContainerElementsVer2.push(document.getElementById(id))
}
console.log(questionContainerElementsVer2);
}
doThis();

var buttonArray = []
while (buttonArray.length < elementAmount){
  var x = getRndInteger(1,51)
  var e = false

  //Checks if new integer is already in array. Does not add if so
  for (y in buttonArray){
    if (x == buttonArray[y]){
     var e = true
    }
  }
  if (e == false){
    buttonArray.push(x)
  }
}
var masterArray = [[],[],[],[],[],[],[],[]];
masterArray[0][0] = buttonArray;
var buttonArrayCounter=0;
function createButtons(totalButtons,idNum,container){
  let arr = masterArray[parseInt(idNum.substring(0,1))][parseInt(idNum.substring(1,2))];
  console.log(arr);
  for(let i =0;i<totalButtons;i++)
  {
    let but = document.createElement("button");
    but.className="btn"
    but.id = idNum
    //but.innerHTML = buttonArray[i];
    
    but.innerHTML = arr[i];
    but.addEventListener("click",selectButton);
    document.getElementById(container).appendChild(but);
    //Keeps adding to array until it is 10 long
    
  }
}
createButtons(elementAmount,"00","question-container00");

function randomizer(){
  var randomizerArray = []
  while (randomizerArray.length < elementAmount){
    var x = getRndInteger(1,elementAmount+1)
    var e = false

    //Checks if new integer is already in array. Does not add if so
    for (y in randomizerArray){
      if (x == randomizerArray[y]){
      var e = true
      }
    }
    if (e == false){
      randomizerArray.push(x)
    }
  }
  return randomizerArray;
}

//This function will change a div to sorted this will allow
//Left off here, this needs to go back a level, then cycle through divs, if its unsorted then change it to sorted.
function changeDivToSorted(id)
{
  let level = parseInt(id.substring(0,1))-1;
  let list = document.getElementsByClassName(level);
  let div = list[0];
  list = div.getElementsByTagName("*");
  for(let i=0;i<list.length;i++)
  {
    if(list[i].childElementCount==1)
    {
      list[i].setAttribute("data-sorted","true")
    }
    if(list[i].getAttribute("data-sorted")=="false")
    {
      list[i].setAttribute("data-sorted","true")
      break;
    }
  }
}

function deleteButton(id){
  let but = document.getElementById(id);
  let container = but.parentElement.parentElement;
  but.parentNode.removeChild(but);
  console.log(buttonCheck(container));
  if(buttonCheck(container)==true)
  {
    changeDivToSorted(id);
  }
}

//Checks if a div has no buttons, will be used in the deletebutton function, if no buttons are found then it means that something has just been fully sorted
function buttonCheck(container){
  let check = true;
  let list = document.getElementsByClassName(container.className);
  let div = list[0];
  div = div.getElementsByTagName("*");
  for (let i = 0;i<div.length;i++)
  {
    let buttons = document.getElementById(div[i].id).getElementsByTagName("*");
    for(let j = 0;j<buttons.length;j++)
    {
      if(buttons[j].nodeName=="BUTTON")
      {
        check = false;
        break
      }
    }
  }
  return check;
}

//This function changes a button's id if the button below it has been deleted (making it's id the deleted button's id).
//This function allows the game to keep working if buttons are deleted, won't work with out it.
function changeButtonIds(deletedButtonID)
{
	//Check if there is a button below it
  let elem = document.getElementById(parseInt(deletedButtonID.substring(0,1)+(parseInt(deletedButtonID.substring(1,2))+1).toString()));
	if(elem==null)
	{
		return;
	}
	else
  {
    elem.id = deletedButtonID;
  }
}

function changeSortedButtonIds(deletedButtonID)
{
	//Check if there is a button below it
  let arrLength = masterArray[parseInt(deletedButtonID.substring(0,1))][parseInt(deletedButtonID.substring(1,2))].length
	if(arrLength<1)
	{
		return;
	}
	else
  {
    while(true)
    {
      let elem = document.getElementById(parseInt(deletedButtonID.substring(0,1)+(parseInt(deletedButtonID.substring(1,2))+1).toString()));
      if(elem==null)
      {
        break;
      }
      else
      {
        elem.id = deletedButtonID;
      }
    }
  }
}



//khash


//Generates random integer from 1-20
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


//David selected answer version
//This checks if the button clicked is the middle button in its group, if it is then

let twoArr = [];
let twoArrCheck = false;
let newLowestNum = -1;
let selectButtonCounter = 0;
function selectButton(e) {
  answer = checkAnswer();
  console.log(answer);
  const selectedButton = e.target
  //get middle buttons
  let position = masterArray[parseInt(selectedButton.id.substring(0,1))][parseInt(selectedButton.id.substring(1,2))];
  //let length = masterArray;
  //let leggnth = `${position}`

  console.log(position)

  //This is for the case that single cell is chosen
  if(position.length==1)
  {

    let lastArrays = masterArray[parseInt(selectedButton.id.substring(0,1))-1];
    let lastArray = [];
    for(let i = 0;i<lastArrays.length;i++)
    {
      if(lastArrays[i].length>1)
      {
        lastArray = lastArrays[i];
        break;
      }

    }

    /*let lastArray = masterArray[parseInt(selectedButton.id.substring(0,1))-1][0];
    for(let i = 0;i<2;i++)
    {
      twoArr.push(lastArray[i])
    }*/
    twoArr.sort(function(a, b){return b - a});
    console.log(twoArr);
    if(lastArray.length==3)
    {
      console.log("this can't be sorted yet");
      return;
    }
    let arr = masterArray[parseInt(selectedButton.id.substring(0,1))];
    lowestNum = 100;
    for (let i=0;i<arr.length;i++)
    {
      if(arr[i][0]<lowestNum)
        lowestNum = arr[i][0]
    }
    console.log("lowestNum is "+lowestNum+", newLowestNum is "+newLowestNum);
    console.log("you've chosen a single cell!");
    if(selectedButton.innerHTML==lowestNum & selectedButton.innerHTML==answer[0].innerHTML || selectedButton.innerHTML==lowestNum & selectedButton.innerHTML==answer[1].innerHTML)
    {
      //twoArrCheck=true
      //twoArr.pop();
      //newLowestNum = twoArr[0];
      //console.log(twoArr[0]);
      console.log("you've selected correct")
      deleteButtonList.push(selectedButton.id)
      console.log(masterArray[parseInt(selectedButton.id.substring(0,1))].splice(parseInt(selectedButton.id.substring(1,2)),1));
      deleteButton(selectedButton.id);
      changeButtonIds(selectedButton.id);
      //console.log(masterArray);
      selectedButton.innerHTML="";
      //let x = masterArray[parseInt(selectedButton.id.substring(0,1))].splice(parseInt(selectedButton.id.substring(1,2)),1);
      //masterArray[parseInt(selectedButton.id.substring(0,1))-1][0].push(x[0][0]);
      //console.log(masterArray);
      flashGreen();
      correctAudio.play();
      clearAnswer();
      return;
    }
    
    if(selectedButton.innerHTML!=lowestNum)
    {
      console.log("Incorrect Choice")
      wrongSelection();
    }
    
    if(selectedButton.innerHTML==newLowestNum)
    {
      twoArrCheck=false
      twoArr.length = 0;
      deleteButtonList.push(selectedButton.id)
      newLowestNum = -1
      console.log("you've selected correct")
      //console.log(masterArray[parseInt(selectedButton.id.substring(0,1))].splice(parseInt(selectedButton.id.substring(1,2)),1));
      //console.log(masterArray);
      selectedButton.innerHTML="";
      //let x = masterArray[parseInt(selectedButton.id.substring(0,1))].splice(parseInt(selectedButton.id.substring(1,2)),1);
      //masterArray[parseInt(selectedButton.id.substring(0,1))-1][0].push(x[0][0]);
      //console.log(masterArray);
      deleteButton();
    }
  }

  else if(position.length%2==0)
  {
    if((selectedButton.innerHTML==position[position.length/2]&&selectedButton.innerHTML==answer[0].innerHTML) || (selectedButton.innerHTML==position[position.length/2 - 1] &&selectedButton.innerHTML==answer[1].innerHTML))
      {//console.log("Correct!")
        splitArray(selectedButton.id)
        flashGreen();
        correctAudio.play();
      }
    else
    {
      console.log("Incorrect!")
      wrongSelection();
    }
  }
  else if (selectedButton.innerHTML==position[Math.floor(position.length/2)]&&selectedButton.innerHTML==answer[0].innerHTML)
    {//console.log("Correct!")
      splitArray(selectedButton.id)
      flashGreen();
      correctAudio.play();
    }
  else
  {
    console.log("Incorrect!")
    wrongSelection();
  }
  //Based on counter gets the value the button array length in button array, get the middle values, then check if its correct

  console.log(masterArray);
  clearAnswer();
}


//This should should be called by a button click, still getting it to work with the button id (buttonArray is used and thats kinda hard coded still).
//This splits the last list and adds the two newly added ones into masterArray
function splitArray(num)
{
  //num is [num,#] in the masterArray, we will use this value to go another level into the master array, and add a new array

  //This variable makes it easier to access the array that will be split
  var numArray = masterArray[parseInt(num.substring(0,1))][parseInt(num.substring(1,2))]

  if(numArray.length%2==0)
  {
    let list = []
    let list2 = []
    for(let i =0;i<numArray.length/2;i++)
    {
      list.push(numArray[i])
    }
    console.log("you just made this delete right after ")
    console.log(parseInt(num.substring(0,1))+1)
    if (typeof masterArray[parseInt(num.substring(0,1))+1] == "undefined")
      console.log(parseInt(num.substring(0,1))+1)
    if(masterArray[parseInt(num.substring(0,1))+1].length == "0")
      masterArray[parseInt(num.substring(0,1))+1][0] = list
    else
      masterArray[parseInt(num.substring(0,1))+1][masterArray[parseInt(num.substring(0,1))+1].length] = list
    
    yPos = masterArray[parseInt(num.substring(0,1))+1].length-1;
    id = (parseInt(num.substring(0,1))+1).toString() + yPos.toString();
    console.log(id);
    console.log("question-container"+(parseInt(num.substring(0,1)+2)));
    createButtons(list.length,id,"question-container"+id);
    for(let i =numArray.length/2;i<numArray.length;i++)
    {
      list2.push(numArray[i])
    }
    masterArray[parseInt(num.substring(0,1))+1][masterArray[parseInt(num.substring(0,1))+1].length] = list2
    console.log(list)
    console.log(list2)
    console.log(masterArray)
    yPos = masterArray[parseInt(num.substring(0,1))+1].length-1;
    id = (parseInt(num.substring(0,1))+1).toString() + yPos.toString();
    console.log(id);
    createButtons(list2.length,id,"question-container"+id);
    console.log(numArray.length);
  }
  else
  {
    let list = []
    let list2 = []
    let half = Math.floor(numArray.length/2);
    for(let i =0;i<half;i++)
    {
      list.push(numArray[i])
    }
    console.log("you just made this delete right after ")
    console.log(parseInt(num.substring(0,1))+1)
    if (typeof masterArray[parseInt(num.substring(0,1))+1] == "undefined")
      console.log(parseInt(num.substring(0,1))+1)
    if(masterArray[parseInt(num.substring(0,1))+1].length == "0")
      masterArray[parseInt(num.substring(0,1))+1][0] = list
    else
      masterArray[parseInt(num.substring(0,1))+1][masterArray[parseInt(num.substring(0,1))+1].length] = list
    
    yPos = masterArray[parseInt(num.substring(0,1))+1].length-1;
    id = (parseInt(num.substring(0,1))+1).toString() + yPos.toString();
    console.log(id);
    console.log("question-container"+(parseInt(num.substring(0,1)+2)));
    createButtons(list.length,id,"question-container"+id);
    for(let i = half;i<numArray.length;i++)
    {
      list2.push(numArray[i])
    }
    masterArray[parseInt(num.substring(0,1))+1][masterArray[parseInt(num.substring(0,1))+1].length] = list2
    console.log(list)
    console.log(list2)
    console.log(masterArray)
    yPos = masterArray[parseInt(num.substring(0,1))+1].length-1;
    id = (parseInt(num.substring(0,1))+1).toString() + yPos.toString();
    console.log(id);
    createButtons(list2.length,id,"question-container"+id);
    console.log(numArray.length);
  }
}

let btnGridDivs = document.getElementsByClassName("btn-grid");
for(let i=0;i<btnGridDivs.length;i++)
{
  const mutationObserver = new MutationObserver(entries =>{
    let x = btnGridDivs[i].id.substring(18, 19);
    let y = btnGridDivs[i].id.substring(19, 20);
    masterArray[parseInt(x)][parseInt(y)].sort(function(a, b){return a - b});
    let sortedList = masterArray[parseInt(x)][parseInt(y)];
    let buttonList = btnGridDivs[i].getElementsByTagName("button");
    for(let j=0;j<buttonList.length;j++)
    {
      buttonList[j].innerHTML=sortedList[j]
      buttonList[j].removeEventListener("click", selectButton);
      buttonList[j].addEventListener("click", sortedSelectButton);
      console.log(buttonList[j].innerHTML)
    }
    console.log(masterArray);
  })
  let parent = document.getElementById(btnGridDivs[i].id)
  
  mutationObserver.observe(parent,{attributes:true})
}


function sortedSelectButton(e){

  let x = id.substring(0,1)

  let answer = checkAnswer();
  //forget about the part where it needs to check if all of the divs are sorted already, assume it to be true
  const selectedButton = e.target;
  id = selectedButton.id

  let div0 = selectedButton.parentElement.parentElement;
  let divs0 = div0.getElementsByTagName("div");
  for(let i=0;i<divs0.length;i++)
  {
    if (divs0[i].getAttribute("data-sorted")=="false" && divs0[i].childElementCount>2)
    {
      console.log("this is incorrect");
      wrongSelection();
      return;
    }
  }


  let div = selectedButton.parentElement.parentElement;
  let divs = div.getElementsByTagName("div");
  let buttons = []
  for(let i=0;i<divs.length;i++)
  {
    if(divs[i].getAttribute("data-sorted")=="false")
      continue;
    let list = divs[i].getElementsByTagName("button")
    if(typeof list != "undefined")
    {
      for(let j=0;j<list.length;j++)
      {
        buttons.push(list[j]);
      }
    }
  }
  //at this point buttons contains all the buttons needed for this to work
  let sortedArray = [];
  for(let i=0;i<buttons.length;i++)
  {
    sortedArray.push(parseInt(buttons[i].innerHTML));
  }
  sortedArray.sort(function(a, b){return a - b});
  if(selectedButton.innerHTML==sortedArray[0])
  {
    if(masterArray[parseInt(selectedButton.id.substring(0,1))][parseInt(selectedButton.id.substring(1,2))].length==1)
      masterArray[parseInt(selectedButton.id.substring(0,1))].splice(parseInt(selectedButton.id.substring(1,2)),1)
    else
    {
      let index = masterArray[parseInt(selectedButton.id.substring(0,1))][parseInt(selectedButton.id.substring(1,2))].indexOf(parseInt(selectedButton.innerHTML))
      masterArray[parseInt(selectedButton.id.substring(0,1))][parseInt(selectedButton.id.substring(1,2))].splice(index,1);
    }
    flashGreen();
    correctAudio.play();
    deleteButton(selectedButton.id);
    //changeButtonIds(selectedButton.id);
    changeThisName(selectedButton.id)
    if(sortedArray.length==1)
    {
      //masterArray[parseInt(selectedButton.id.substring(0,1))]=[];
      for(let i=0;i<divs.length;i++)
      {
        if(divs[i].getAttribute("data-sorted")=="true")
          divs[i].setAttribute("data-sorted","false")
      }
    }
  }
  else
  {
    console.log("incorrect");
    wrongSelection();
  }
  clearAnswer();
  isGameDone();
}

function changeThisName(id)
{
  check = true;
  if(masterArray[parseInt(id.substring(0,1))].length==1)
  {
    if(parseInt(id.substring(1,2))==0)
    {
      while(check==true)
      {
      //left off need to get this all #1 id'd buttons to #0 how do i do that?
      let elem = document.getElementById(parseInt(id.substring(0,1)+(parseInt(id.substring(1,2))+1).toString()));
      if(elem==null)
        check=false;
      elem.id = parseInt(id.substring(0,1)).toString()+parseInt(id.substring(1,2)).toString();
      }
    }
  }
}


let targetButton = [];
function checkAnswer()
{
  for(let i=divAmount-1;i>=0;i--)
  {
    let arr = document.getElementsByClassName(i);
    let div = arr[0];
    let containers = div.getElementsByClassName("btn-grid");
    let buttons = [];
    let breakCheck = false;
    for(let j=0;j<containers.length;j++)
    {
      if(containers[j].childElementCount>=2 && containers[j].getAttribute("data-sorted")=="false")
      {
        buttons = containers[j].getElementsByTagName("button");
        //this is your target button
        targetButton.push(buttons[Math.floor(buttons.length/2)]);
        if(containers[i].childElementCount%2==0)
        {
          targetButton.push(buttons[(buttons.length/2)-1]);
        }
        breakCheck=true;
        break;
      }
    }
    if(breakCheck==true)
    {
      breakCheck = false;
      break;
    }/*
    for(let j=0;j<containers.length;j++)
    {
      if(containers[j].childElementCount>1 && containers[j].getAttribute("data-sorted")=="true")
      {
        buttons = containers[j].getElementsByTagName("button");
        //this is your target button
        targetButton.push(buttons[Math.floor(buttons.length/2)]);
        if(containers[j].childElementCount%2==0)
        {
          targetButton.push(buttons[Math.ceil(buttons.length/2)]);
        }
        breakCheck=true;
        break;
      }
    }
    if(breakCheck==true)
    {
      breakCheck = false;
      break;
    }*/
  }
  if(typeof targetButton[1]!="undefined")
    console.log(targetButton[0].innerHTML+" and "+ targetButton[1].innerHTML);
  else
  console.log(targetButton[0].innerHTML);

  return targetButton;
}
function clearAnswer()
{
  targetButton = [];
}

function isGameDone(){
  if((document.getElementById("question-container00").getAttribute("data-sorted")=="true"))
  {
    console.log("You Won!!!")
    gameEndingMessage();
  }
}

//khash
//displays the instructions to be shown to the user

function showInstruction(instructions)
{
  instructionContainerElement.classList.add('show');
  instructionElementText.innerText = instructions;

}

function showGameEnding(gameEndingText)
{
  console.log("inside showGameEnding")
  restartContainerElement.classList.add('show');
  restartElementText.innerText = gameEndingText;
}

function gameEndingMessage()
{
  endCountUp();
  winningAudio.play();
  if(numWrongAttempts == 0)
  {
    showGameEnding("Awsome! \n Perfect Score! \n Time Elasped: " + timeSecond);
  }
  else{
    showGameEnding("Good Job! \n Number of Wrong Selections: " +numWrongAttempts +"\n Time Elapsed: " +timeSecond);
  }
  

}

function gameOver()
{
  console.log("inside gameOver")
  gameoverAudio.play();
  endCountUp();
  showGameEnding("3 Wrong selections \n Game Over !");
}

function restartGame()
{
  window.location.reload();
}

//khash

