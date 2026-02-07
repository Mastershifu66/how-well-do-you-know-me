const questions=[
    {
        question:"where i am from?",
        answers:[
            {text: "china", correct:false},
            {text: "india", correct:true},
            {text: "japan", correct:false},
            {text: "uhh", correct:false},,
        
        ]
    },
    {
        question:"where i am from?",
        answers:[
            {text: "china", correct:false},
            {text: "india", correct:true},
            {text: "japan", correct:false},
            {text: "uhh", correct:false},,
        
        ]
    },
    {
        question:"where i am from?",
        answers:[
            {text: "china", correct:false},
            {text: "india", correct:true},
            {text: "japan", correct:false},
            {text: "uhh", correct:false},,
        
        ]
    },
];
 
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="NEXT";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    }); 
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showQuestion();

    }
    else{
        showScore();
    }
};
function showScore(){
    resetState;
    questionElement.innerHTML='You scored ${score} out of ${questions.length}!';
    nextButton.innerHTML="play again";
    nextButton.style.display="block";
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();

    }
    else{
        //modify the quiz
        startQuiz();
    }
})
startQuiz();