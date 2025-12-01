const questions = [
    {
        question: "Qual é o grande traço da personalidade do Clarêncio?",
        answers: [
            { id: 1, text: "Ele é muito sério", correct:false},
            { id: 2, text: "Ele é pessimista", correct:false},
            { id: 3, text: "Ele é extremamente otimista", correct:true},
            { id: 4, text: "Ele é muito tímido", correct:false},
        ]
    },
    {
        question: "Qual é o nome do melhor amigo radical do Clarêncio?",
        answers: [
            { id: 1, text: "Jeff", correct:false},
            { id: 2, text: "Smo", correct:false},
            { id: 3, text: "Sumo", correct:true},
            { id: 4, text: "Brady", correct:false},
        ]
    },
    {
        question: "Qual personagem é conhecido por ser muito organizado e inteligente?",
        answers: [
            { id: 1, text: "Sumo", correct:false},
            { id: 2, text: "Clarêncio", correct:false},
            { id: 3, text: "Jeff", correct:true},
            { id: 4, text: "Chad", correct:false},
        ]
    },
    {
        question: "Quem é o padrasto do Clarêncio?",
        answers: [
            { id: 1, text: "Sumo", correct:false},
            { id: 2, text: "Chadão", correct:true},
            { id: 3, text: "Jeff", correct:false},
            { id: 4, text: "David", correct:false},
        ]
    },
    {
        question: "Qual é o nome da mãe do Clarêncio?",
        answers: [
            { id: 1, text: "Mary", correct:true},
            { id: 2, text: "Karen", correct:false},
            { id: 3, text: "Diana", correct:false},
            { id: 4, text: "Olívia", correct:false},
        ]
    },
    {
        question: "O que Clarêncio mais gosta de fazer?",
        answers: [
            { id: 1, text: "Dormir", correct:false},
            { id: 2, text: "Comer biscoitos", correct:false},
            { id: 3, text: "Se divertir e explorar", correct:true},
            { id: 4, text: "Ficar sozinho", correct:false},
        ]
    },
    {
        question: "Qual dos amigos tem uma família muito grande e bagunceira?",
        answers: [
            { id: 1, text: "Jeff", correct:false},
            { id: 2, text: "Sumo", correct:true},
            { id: 3, text: "Clarêncio", correct:false},
            { id: 4, text: "Nathan", correct:false},
        ]
    },
    {
        question: "O que caracteriza o Jeff?",
        answers: [
            { id: 1, text: "É desorganizado", correct:false},
            { id: 2, text: "Consegue voar", correct:false},
            { id: 3, text: "É perfeccionista e organizado", correct:true},
            { id: 4, text: "É muito agressivo", correct:false},
        ]
    },
    {
        question: "Qual é o nome do garoto super competitivo da escola?",
        answers: [
            { id: 1, text: "Belson", correct:true},
            { id: 2, text: "Jeff", correct:false},
            { id: 3, text: "Sumo", correct:false},
            { id: 4, text: "Clarêncio", correct:false},
        ]
    },
    {
        question: "O que Clarêncio sempre tenta fazer com todos ao seu redor?",
        answers: [
            { id: 1, text: "Ignorar", correct:false},
            { id: 2, text: "Deixar felizes", correct:true},
            { id: 3, text: "Ser o líder", correct:false},
            { id: 4, text: "Assustar", correct:false},
        ]
    },
];


const questionElement = document.getElementById("title-quiz-clarencio-2");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-clarencio-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "proxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", SelectAnswer);
        answerButtons.appendChild(button);
    })
}

function SelectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const SelectedBtn = e.target;
    const iSCorrect = SelectedBtn.dataset.id == correctAnswer.id;
    if (iSCorrect) {
        SelectedBtn.classList.add("correct");
        score++;
    } else {
        SelectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "jogar novamente";
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
})

startQuiz();