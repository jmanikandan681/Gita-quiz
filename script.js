const questions = [
  {
    q: "Who spoke Bhagavad Gita?",
    options: ["Krishna", "Arjuna", "Vyasa", "Brahma"],
    answer: "Krishna"
  },
  {
    q: "How many chapters are in Bhagavad Gita?",
    options: ["16", "18", "20", "12"],
    answer: "18"
  }
];
let current = 0;
let score = 0;

function startGame() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.q;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => selectAnswer(option);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(option) {
  const correct = questions[current].answer;
  const feedback = document.getElementById("feedback");

  if (option === correct) {
    score++;
    document.getElementById("correct-sound").play();
    feedback.innerText = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    document.getElementById("wrong-sound").play();
    feedback.innerText = "❌ Wrong!";
    feedback.style.color = "red";
  }

  document.getElementById("score").innerText = score;

  setTimeout(() => {
    feedback.innerText = "";
    current++;

    if (current < questions.length) {
      loadQuestion();
    } else {
      endGame();
    }
  }, 1000);
}

function endGame() {
  document.getElementById("game").style.display = "none";
  document.getElementById("end-screen").style.display = "block";
  document.getElementById("final-score").innerText = score;
}
