const readLineSync = require('readline-sync');
let userName = readLineSync.question("Whats your name?\n");
console.log("Hey Welcome " + userName +  " ,Do u Know Ajay");


let score  = 0;


function playQuizz(question , answer){
  let userAns = readLineSync.question(question+ "\n");
  if(userAns.toLowerCase() === answer){
    score++
  console.log("Right Ans , Your Score is " + score)
  }else{
    console.log("Wronge, Ans is "+ answer)
    console.log("your score is " + score);
  }
}


let questions = [
  {
    question : "1) What's my name?\n (a)Ajay (b)Jay (c)Vijay (d)Joy\n",
    answer : "a",
  },
  {
    question : "2)Who is Ajay?\n (a)Doctor (b)Engineer \n",
    answer : "b",
  },
  {
    question : "3)Where does he live?\n (a)Surat (b) Banglore (c)Noida (d)Delhi\n",
    answer : "a",
  },
  {
    question : "2)What he do?\n (a)Web development (b)Anoride development (c) Cyber Security (d) Testing\n",
    answer : "a",
  },
  {
    question : "2)Which language does he love?\n (a)Java (b)JavaScript \n",
    answer : "b",
  },
]

for(let i=0;i<questions.length;i++){
  let question = questions[i].question;
  let ans = questions[i].answer;
  playQuizz(question , ans);
}
console.log("Your score is  " + score)