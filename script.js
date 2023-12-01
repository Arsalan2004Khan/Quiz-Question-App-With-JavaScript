
let = vQuestionNumber = 0;

let vMainContainer = document.getElementById("iMainContainer");

function Quiz (){

vMainContainer.innerHTML="";

let = vQuestions = [

// 1 tiger
{
question: "How Many Tigers?",
image: "images/1Tiger.png",
options:["One" , "Two" , "Three" , "Four" , "Five" , "Six"],
answer: "One"
} ,

// 2 tiger

{
question: "How Many Tigers?",
image: "images/2Tiger.jpeg",
options:["One" , "Two" , "Three" , "Four" , "Five" , "Six"],
answer: "Two"
} ,

// 3 tiger

{
question: "How Many Tigers?",
image: "images/3Tiger.png",
options:["One" , "Two" , "Three" , "Four" , "Five" , "Six"],
answer: "Three"
} ,


// 4 tiger

{
question: "How Many Tigers?",
image: "images/4Tiger.jpeg",
options:["One" , "Two" , "Three" , "Four" , "Five" , "Six"],
answer: "Four"
} ,

// 5 tiger

{
question: "How Many Tigers?",
image: "images/5Tiger.jpeg",
options:["One" , "Two" , "Three" , "Four" , "Five" , "Six"],
answer: "Five"
} ,

// 6 tiger

{
question: "How Many Tigers?",
image: "images/6Tiger.jpeg",
options:["One" , "Two" , "Three" , "Four" , "Five" , "Six"],
answer: "Six"
} 

];

if(vQuestionNumber === vQuestions.length){
vMainContainer.innerHTML="";
vMainContainer.className = "cMainContainer";
vMainContainer.innerHTML="This Is End Of Test";
};

let vh3 = document.createElement("h3");
vh3.innerHTML = vQuestions[vQuestionNumber].question;

let vImage = document.createElement("img");
vImage.src = vQuestions[vQuestionNumber].image;

vMainContainer.appendChild(vh3);
vMainContainer.appendChild(vImage);

let vResult = document.createElement("div");
vResult.id="iResult";
vMainContainer.appendChild(vResult);


for( let i=0; i<6; i++){

let vInput = document.createElement("input");
vInput.type="radio";
vInput.name = "OneGroup"

let vLable = document.createElement("lable");
vLable.textContent = vQuestions[vQuestionNumber].options[i];

vMainContainer.appendChild(vInput);
vMainContainer.append(vLable);

vInput.addEventListener("click" , abc)

function abc (){
if( vLable.textContent === vQuestions[vQuestionNumber].answer){
// alert("Ah haa");
vResult.innerHTML="Correct";
vResult.setAttribute("class" , 'tickcss');
} else {
(vLable.textContent != vQuestions[vQuestionNumber].answer)
    // alert("Ohh Noo");
    vResult.innerHTML="Wrong";
vResult.setAttribute("class" , 'crosscss');
}

vQuestionNumber++;
setTimeout(function (){Quiz()},500);
//Quiz();

}

}

}


console.log(vMainContainer);
