const questions = [
    {
        question: "Quem é a menina de cabelos escuros de Meu Amigãozão?",
        answers: [
            { id: 1, text: "Lara", correct:false},
            { id: 2, text: "Luna", correct:false},
            { id: 3, text: "Lola", correct:false},
            { id: 4, text: "Lili", correct:true},
        ]
    },
    {
        question: "Qual é o nome do amigãozão azul e grandão?",
        answers: [
            { id: 1, text: "Golias", correct:true},
            { id: 2, text: "Nessa", correct:false},
            { id: 3, text: "Bongo", correct:false},
            { id: 4, text: "Rauru", correct:false},
        ]
    },
    {
        question: "Qual é o amigãozão da personagem Lili?",
        answers: [
            { id: 1, text: "Kiko", correct:false},
            { id: 2, text: "Nessa", correct:true},
            { id: 3, text: "Bongo", correct:false},
            { id: 4, text: "Pow", correct:false},
        ]
    },
    {
        question: "Quem é o amigãozão do Yuri?",
        answers: [
            { id: 1, text: "Kuko", correct:false},
            { id: 2, text: "Pow", correct:false},
            { id: 3, text: "Golias", correct:true},
            { id: 4, text: "Nessa", correct:false},
        ]
    },
    {
        question: "O que os amigãozões representam para as crianças?",
        answers: [
            { id: 1, text: "amigos de carne e osso", correct:false},
            { id: 2, text: "Animais de estimação reais", correct:false},
            { id: 3, text: "Amigos imaginários gigantes", correct:true},
            { id: 4, text: "sonhos", correct:false},
        ]
    },
    {
        question: "Qual personagem é conhecido por ser medroso?",
        answers: [
            { id: 1, text: "Felipe", correct:false},
            { id: 2, text: "Yuri", correct:true},
            { id: 3, text: "Lili", correct:false},
            { id: 4, text: "Pow", correct:false},
        ]
    },
    {
        question: "Qual é a característica principal da Lili?",
        answers: [
            { id: 1, text: "É muito mandona", correct:false},
            { id: 2, text: "É muito séria", correct:false},
            { id: 3, text: "É criativa e sonhadora", correct:true},
            { id: 4, text: "É a mais velha", correct:false},
        ]
    },
    {
        question: "O que os amigãozões fazem pelas crianças?",
        answers: [
            { id: 1, text: "Ajudam a enfrentar medos e aprender lições", correct:true},
            { id: 2, text: "Dão poderes mágicos", correct:false},
            { id: 3, text: "Levam para outros planetas", correct:false},
            { id: 4, text: "Resolvem problemas sozinhos", correct:false},
        ]
    },
    {
        question: "Onde as aventuras normalmente acontecem?",
        answers: [
            { id: 1, text: "Na imaginação das crianças", correct:true},
            { id: 2, text: "No fundo do mar", correct:false},
            { id: 3, text: "Em outra galáxia", correct:false},
            { id: 4, text: "No parque da cidade", correct:false},
        ]
    },
    {
        question: "O que o desenho ensina?",
        answers: [
            { id: 1, text: "Competição acima da amizade", correct:false},
            { id: 2, text: "Amizade, sentimentos e convivência", correct:true},
            { id: 3, text: "Como fazer experiências químicas", correct:false},
            { id: 4, text: "Como ser o mais forte", correct:false},
        ]
    },
];


const questionElement = document.getElementById("title-quiz-meu-2");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-meu-btn")

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