const questions = [
    {
        question: "Quem é o protagonista?",
        answers: [
            { id: 1, text: "Kelsey", correct:false},
            { id: 2, text: "J.P.", correct:false},
            { id: 3, text: "Greg", correct:true},
            { id: 4, text: "O Rei do Bosque", correct:false},
        ]
    },
    {
        question: "Qual é o lugar onde as crianças vivem suas aventuras?",
        answers: [
            { id: 1, text: "O parque aquático", correct:false},
            { id: 2, text: "O Bosque do Riacho", correct:true},
            { id: 3, text: "O quintal da Kelsey", correct:false},
            { id: 4, text: "Uma escola abandonada", correct:false},
        ]
    },
    {
        question: "Qual é a arma improvisada da Kelsey?",
        answers: [
            { id: 1, text: "Um galho de árvore", correct:false},
            { id: 2, text: "Uma espada de canos pvc", correct:true},
            { id: 3, text: "Um galho em forma de espada", correct:false},
            { id: 4, text: "Uma espada de papelão", correct:false},
        ]
    },
    {
        question: "Qual é o nome do periquito de estimação da Kelsey?",
        answers: [
            { id: 1, text: "Frogbert", correct:false},
            { id: 2, text: "Mortimer", correct:true},
            { id: 3, text: "Sir Sapo", correct:false},
            { id: 4, text: "Riachinho", correct:false},
        ]
    },
    {
        question: "Qual é o traço mais marcante do J.P.?",
        answers: [
            { id: 1, text: "É muito sério", correct:false},
            { id: 2, text: "É o mais velho e atrapalhado", correct:true},
            { id: 3, text: "É muito competitivo", correct:false},
            { id: 4, text: "É extremamente tímido", correct:false},
        ]
    },
    {
        question: "Qual é o grande objetivo do Greg nos episódios?",
        answers: [
            { id: 1, text: "Construir uma torre no bosque", correct:false},
            { id: 2, text: "Manter a turma unida e viver aventuras", correct:true},
            { id: 3, text: "Ser o rei do riacho", correct:false},
            { id: 4, text: "Vencer campeonatos", correct:false},
        ]
    },
    {
        question: "Quem governa o bosque no início da série?",
        answers: [
            { id: 1, text: "As Garotas do Chá Gelado", correct:false},
            { id: 2, text: "O Rei do Riacho", correct:true},
            { id: 3, text: "Os Escoteiros do Lodo", correct:false},
            { id: 4, text: "A Kelsey", correct:false},
        ]
    },
    {
        question: "O que Greg usa para mapear o bosque?",
        answers: [
            { id: 1, text: "Uma bússola mágica", correct:false},
            { id: 2, text: "Um mapa gigante feito à mão", correct:true},
            { id: 3, text: "Um livro antigo de mapas", correct:false},
            { id: 4, text: "fotos no celular", correct:false},
        ]
    },
    {
        question: "Como é a personalidade da Kelsey?",
        answers: [
            { id: 1, text: "Silenciosa e medrosa", correct:false},
            { id: 2, text: "Aventureira e dramática", correct:true},
            { id: 3, text: "Muito preguiçosa", correct:false},
            { id: 4, text: "Super competitiva", correct:false},
        ]
    },
    {
        question: "O que o trio mais gosta de fazer no bosque?",
        answers: [
            { id: 1, text: "Construir barcos", correct:false},
            { id: 2, text: "Inventar histórias e explorar", correct:true},
            { id: 3, text: "Organizar campeonatos", correct:false},
            { id: 4, text: "Lutar contra monstros reais", correct:false},
        ]
    },
];

const questionElement = document.getElementById("title-quiz-greg-2");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-greg-btn")

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