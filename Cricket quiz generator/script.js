const cricketQuestions = [
  {
    question: "How many players are there in a cricket team on the field?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "11",
  },
  {
    question:
      "How many runs are awarded for hitting the ball over the boundary without bouncing?",
    options: ["4", "5", "6", "8"],
    correctAnswer: "6",
  },
  {
    question: "What is the length of a cricket pitch?",
    options: ["20 yards", "22 yards", "24 yards", "26 yards"],
    correctAnswer: "22 yards",
  },
  {
    question: "Which country won the ICC Cricket World Cup 2023?",
    options: ["India", "England", "Australia", "New Zealand"],
    correctAnswer: "Australia",
  },
  {
    question: "What is a score of zero called in cricket?",
    options: ["Duck", "Goose", "Dot", "Blank"],
    correctAnswer: "Duck",
  },
  {
    question: "How many overs are played per side in a T20 match?",
    options: ["10", "20", "30", "50"],
    correctAnswer: "20",
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Ricky Ponting"],
    correctAnswer: "Sachin Tendulkar",
  },
  {
    question: "How many wickets does a team have in an innings?",
    options: ["8", "9", "10", "11"],
    correctAnswer: "10",
  },
  {
    question:
      "What is the maximum number of runs a batsman can score from a single legal delivery without extras?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6",
  },
  {
    question: "Which format of cricket is played over five days?",
    options: ["T20", "ODI", "Test", "The Hundred"],
    correctAnswer: "Test",
  },
  {
    question: "How many balls are there in one over?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "6",
  },
  {
    question: "Which player is famous for the helicopter shot?",
    options: ["Rohit Sharma", "MS Dhoni", "Virat Kohli", "AB de Villiers"],
    correctAnswer: "MS Dhoni",
  },
  {
    question:
      "What is it called when a bowler takes three wickets in three consecutive balls?",
    options: ["Triple", "Hat-trick", "Treble", "Three-fer"],
    correctAnswer: "Hat-trick",
  },
  {
    question: "Which fielding position is directly behind the wicketkeeper?",
    options: ["Slip", "Fine Leg", "Third Man", "Long Stop"],
    correctAnswer: "Long Stop",
  },
  {
    question:
      "How many runs is a boundary worth when the ball reaches the rope after bouncing?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question:
      "Who was the captain of India during the 2011 Cricket World Cup victory?",
    options: ["Virat Kohli", "Sourav Ganguly", "MS Dhoni", "Rahul Dravid"],
    correctAnswer: "MS Dhoni",
  },
  {
    question: "What does LBW stand for?",
    options: [
      "Leg Before Wicket",
      "Leg Behind Wicket",
      "Left Ball Wide",
      "Long Boundary Wicket",
    ],
    correctAnswer: "Leg Before Wicket",
  },
  {
    question: "Which country is known as the birthplace of cricket?",
    options: ["Australia", "India", "England", "South Africa"],
    correctAnswer: "England",
  },
  {
    question:
      "How many runs are awarded for a no-ball in limited-overs cricket?",
    options: ["0", "1", "2", "4"],
    correctAnswer: "1",
  },
  {
    question: "Which Indian batsman is known as the 'Hitman'?",
    options: ["Virat Kohli", "KL Rahul", "Rohit Sharma", "Shubman Gill"],
    correctAnswer: "Rohit Sharma",
  },
];

const quizForm = document.querySelector("form");
const resultDiv = document.getElementById("result");
const submitBtn = document.querySelector(".btn-primary");
const answerKey = {};
let count = 0;

const generateQuiz = () => {
  const randomQuestions = function () {
    const data = new Set();
    while (data.size < 5) {
      let index = Math.floor(Math.random() * cricketQuestions.length);
      data.add(cricketQuestions[index]);
    }
    return Array.from(data);
  };

  randomQuestions().forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("form-group");

    const para = document.createElement("p");
    para.textContent = `Q${index + 1}. ${question.question}`;
    questionDiv.appendChild(para);

    question.options.forEach((option) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.classList.add("option");
      input.type = "radio";
      input.name = `q${index + 1}`;
      input.value = option;
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      label.appendChild(document.createElement("br"));
      questionDiv.appendChild(label);
      answerKey[`q${index+1}`] = question.correctAnswer
    });
    quizForm.insertBefore(questionDiv, quizForm.querySelector(".btn"));
  });
};

generateQuiz();
console.log(answerKey);

const generateScore = ()=>{
    quizForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        const result = new FormData(quizForm);
        for(let [key,value] of result.entries()){
            if(answerKey[key] == value){
              count+=1;
            }
        }
        resultDiv.textContent = `Your Score is ${count} out of 5`;
        submitBtn.disabled = true;
    })
} 

quizForm.addEventListener('reset',()=>{
  count = 0;
  resultDiv.textContent = "";
  submitBtn.disabled = false;
})

generateScore();



