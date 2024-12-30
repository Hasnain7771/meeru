// Variable to track question number
let questionNumber = 1;
let answers = [];
let score = 80;

const questions = [
  "What's the best thing about me?",
  "How do I make you feel when we're together?",
  "What do you think of our friendship?",
  "What's your favorite memory with me?",
  "How do you feel when you think about me?",
  "What would be your dream activity with me?",
  "What makes you laugh the most when you're with me?",
  "How do I inspire you to be better?",
  "What's one thing you love about our friendship?",
  "How would you describe our friendship in three words?",
  "What is something you admire most about me?",
  "What do you think is my best quality as a friend?",
  "How do you think I handle challenges in life?",
  "When was the last time I made you laugh really hard?",
  "What’s one thing you’d love to do with me that we haven’t done yet?",
  "What would you say is my greatest strength?",
  "What’s something you think I could improve on as a friend?",
  "If I could change one thing about myself, what do you think it should be?",
  "How would you feel if we didn’t talk for a week?",
  "Do you think I am a good listener? Why or why not?",
  "What’s something about me that surprises people when they first meet me?",
  "How would you describe my sense of humor?",
  "In what ways do you think I’ve made a positive impact on your life?",
  "If you had to choose one memory with me to relive, what would it be?"
];

// Function to go to the next question
function nextQuestion() {
  const answer = document.getElementById('answer').value;
  if (answer.trim() !== "") {
    answers.push(answer);
    score += calculateScore(answer);  // Add score based on answer
    document.getElementById('answer').value = ''; // Clear input

    questionNumber++;
    updateProgressBar(); // Update progress bar
    if (questionNumber < questions.length) {
      // Show next question
      document.getElementById('question-text').textContent = questions[questionNumber];
    } else {
      // All questions answered, show result
      showResult();
    }
  } else {
    alert("Please provide an answer before submitting!");
  }
}

// Function to calculate a score based on the response
function calculateScore(answer) {
  let scoreIncrease = 0;
  if (answer.toLowerCase().includes("best")) {
    scoreIncrease = 10;  // Example: Score increase if 'best' is mentioned
  } else if (answer.toLowerCase().includes("funny")) {
    scoreIncrease = 5;   // Example: Score increase if 'funny' is mentioned
  }
  return scoreIncrease;
}

// Function to update the progress bar
function updateProgressBar() {
  const progress = (questionNumber / questions.length) * 100;
  document.getElementById('progress').style.width = progress + "%";
}

// Function to show the result
function showResult() {
  let resultText = "Meeru, you are amazing! Here’s what I think:";
  resultText += "<ul>";
  answers.forEach(answer => {
    resultText += `<li>${answer}</li>`;
  });
  resultText += "</ul>";
  
  resultText += "<p>Your friendship score is: " + score + "!</p>";

  // Categorize the result based on the score
  if (score > 50) {
    resultText += "<p>You are an absolute star in my life! ❤️</p>";
  } else if (score > 30) {
    resultText += "<p>You're such a wonderful friend! 🌟</p>";
  } else {
    resultText += "<p>You mean a lot to me, Meeru! 💖</p>";
  }

  document.getElementById('result-text').innerHTML = resultText;
  document.getElementById('question-container').style.display = "none";
  document.getElementById('result-container').style.display = "block";
}

// Function to restart the quiz
function restart() {
  questionNumber = 0;
  answers = [];
  score = 0;
  document.getElementById('question-container').style.display = "block";
  document.getElementById('result-container').style.display = "none";
  document.getElementById('question-text').textContent = questions[questionNumber];
  document.getElementById('progress').style.width = "0%";  // Reset progress bar
}
