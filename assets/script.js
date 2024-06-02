/* variables */

const questions = [
    {
        question: "Who won the first World Cup in history?",
        answers: [
            { text: "Brazil", correct: false },
            { text: "Uruguay", correct: true },
            { text: "Argentina", correct: false },
            { text: "England", correct: false },
        ]
    },
    {
        question: "When was the World Cup in Sweden?",
        answers: [
            { text: "1954", correct: false },
            { text: "1962", correct: false },
            { text: "1958", correct: true },
            { text: "1968", correct: false },
        ]
    },
    {
        question: "Who is the leading goal scorer in World Cup history?",
        answers: [
            { text: "Ronaldo Nazario", correct: false },
            { text: "Miroslav Klose", correct: true },
            { text: "Gerd Muller", correct: false },
            { text: "Just Fontaine", correct: false },
        ]
    },
    {
        question: "Which country has won the most World Cups?",
        answers: [
            { text: "Uruguay", correct: false },
            { text: "Brazil", correct: true },
            { text: "Italy", correct: false },
            { text: "Germany", correct: false },
        ]
    },
    {
        question: "Which player played most games in World Cup football?",
        answers: [
            { text: "Maradona", correct: false },
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Lionel Messi", correct: true },
            { text: "Pele", correct: false },
        ]
    },
    {
        question: "Who is the player with most World Cup Championships?",
        answers: [
            { text: "Maradona", correct: false },
            { text: "Ronaldo", correct: false },
            { text: "Daniel Pasarela", correct: false },
            { text: "Pele", correct: true },
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('buttons-answer');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');

/*functions*/

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        if (currentQuestion && currentQuestion.answers) {
            const questionNo = currentQuestionIndex + 1;
            questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

            currentQuestion.answers.forEach(answer => {
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("button");
                answerButtons.appendChild(button);
                if (answer.correct) {
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener("click", selectAnswer);
            });
        }
    }
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    scoreElement.textContent = `Score: ${score}`;
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();