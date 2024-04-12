function Quiz(listofQuestions)
{
    this.score = 0;
    this.questions = listofQuestions;
    this.questionIndex = 0
}
Quiz.prototype.isEnded = function()
{
return this.questionIndex == this.questions.length
}
Quiz.prototype.checkOptionWithAnswer = function(answer) {
if(this.getQuestionByIndex().isCorrectAnswer(answer)) {
    this.score++;
}
this.questionIndex++;
}
Quiz.prototype.getQuestionByIndex = function()
{
return this.questions[this.questionIndex]
}
function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.isCorrectAnswer = function(choice){
 return this.answer == choice;
}
function showProgress() {
let elem = document.getElementById("progress")
let questionNum = quiz.questionIndex +1;
elem.innerHTML = "Question" +questionNum + "of" +quiz.questions.length
}
function showScores(){
let heading = document.querySelector("h1")
}
function handleBtnClick(id, choice)
{

}
function loadQuestions()
{
if(quiz.isEnded())
{
    showScores()
}else{
    let elem = document.getElementById("question")
    elem.innerHTML = quiz.getQuestionByIndex().text;

    let choices = quiz.getQuestionByIndex().choices;
    for(let i=0; i<choices.length; i++)
    {
     let elem = document.getElementById("btn" +i);
     elem.innerHTML = choices[i];
     handleBtnClick("btn"+i ,choices[i]);
    }
    showProgress();
}
}
let quetionList = [
    newQuestion("Javascript supports" ,["Functions" ,"XHTML","CSS","HTML"],"Functions"),
    newQuestion("Which Language used for Styling web pages" ,["HTML" ,"JQuery","CSS","XML"],"Functions"),
    newQuestion("Which is not a JS FrameWork" ,["Angular" ,"JQuery","Django","NodeJS"],"Functions"),
    newQuestion("Which is used to connect DB" ,["PHP" ,"HTML","JS","All"],"Functions"),
    newQuestion("Javascript is a " ,["Language" ,"Programming Language","Development","All"],"Functions")
]

 let quiz = new Quiz(questionList) 
 
 loadQuestions();
  
