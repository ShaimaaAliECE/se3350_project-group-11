//Work in progress to make elements appear dynamically

//Start button/restart button
const startButton = document.getElementById('start-btn')
//Button for advancing after getting step complete. Not used currently
const nextButton = document.getElementById('next-btn')

//This code snippet determines the amount of divs are needed to hold the divisions made by the merge sort
let elementAmount = 20;
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
      div.classList.add('pleaseWork');
      if(i==0)
      {
      let div2 = document.createElement("div");
      div2.classList.add('btn-grid');
      div2.id="question-container"+divIdCounter;
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
          counter++;
          divIdCounter=divIdCounter+1;
          div.appendChild(div2);
        }

      }
      document.body.insertBefore(div,document.getElementById('Hello'));
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
  var x = getRndInteger(1,elementAmount+1)
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
var masterArray = [[],[],[],[],[],[]];
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
createButtons(elementAmount,"00","question-container0");

//khash


//Generates random integer from 1-20
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


//David selected answer version
//This checks if the button clicked is the middle button in its group, if it is then 
let selectButtonCounter = 0;
function selectButton(e) {
  const selectedButton = e.target
  //get middle buttons
  let position = masterArray[parseInt(selectedButton.id.substring(0,1))][parseInt(selectedButton.id.substring(1,2))];
  //let length = masterArray;
  //let leggnth = `${position}`

  console.log(position)

  //This is for the case that single cell is chosen
  if(position.length==1)
  {
    arr = masterArray[parseInt(selectedButton.id.substring(0,1))];
    lowestNum = 100;
    for (let i=0;i<arr.length;i++)
    {
      if(arr[i][0]<lowestNum)
        lowestNum = arr[i][0]
    }
    console.log(lowestNum);
    console.log("you've chosen a single cell!");
    if(selectedButton.innerHTML==lowestNum)
    {
      console.log("you've selected correct")
      selectedButton.innerHTML="";
      //let x = masterArray[parseInt(selectedButton.id.substring(0,1))].splice(parseInt(selectedButton.id.substring(1,2)),1);
      //masterArray[parseInt(selectedButton.id.substring(0,1))-1][0].push(x[0][0]);
      //console.log(masterArray);
    }
    return;
  }


  if(position.length%2==0)
  {
    if(selectedButton.innerHTML==position[position.length/2] || selectedButton.innerHTML==position[position.length/2 - 1])
      //console.log("Correct!")
      splitArray(selectedButton.id)
  }
  else if (selectedButton.innerHTML==position[Math.floor(position.length/2)])
    //console.log("Correct!")
    splitArray(selectedButton.id)
  else
    console.log("Incorrect!")
  //Based on counter gets the value the button array length in button array, get the middle values, then check if its correct

  console.log(masterArray);
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