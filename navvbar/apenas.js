const questions = [
    {
        question: "Qual é a função de Mordecai e Rigby no parque?",
        answers: [
            { id: 1, text: "zeladores", correct:true},
            { id: 2, text: "jardineiros", correct:false},
            { id: 3, text: "seguranças", correct:false},
            { id: 4, text: "apenas moram no parque", correct:false},
        ]
    },
    {
        question: "Qual é o bordão mais famoso do Benson quando fica bravo",
        answers: [
            { id: 1, text: "Saiam daqui!", correct:false},
            { id: 2, text: "façam suas tarefas", correct:false},
            { id: 3, text: "saiam fora!", correct:false},
            { id: 4, text: "vocês estão despedidos!", correct:true},
        ]
    },
    {
        question: "Qual personagem sempre fala sobre a própria mãe",
        answers: [
            { id: 1, text: "Parulito", correct:false},
            { id: 2, text: "Fantasmão", correct:false},
            { id: 3, text: "Benson", correct:false},
            { id: 4, text: "Musculoso", correct:true},
        ]
    },
    {
        question: "Por qual característica Pairulito é reconhecido?",
        answers: [
            { id: 1, text: "alguém a se ter muito medo", correct:false},
            { id: 2, text: "uma pessoa muito elegante e esnobe", correct:false},
            { id: 3, text: "ser muito grosseiro", correct:false},
            { id: 4, text: "cabeça absurdamente enorme e inocência", correct:true},
        ]
    },
    {
        question: "Quem é a paixão do Mordecai?",
        answers: [
            { id: 1, text: "Louise", correct:false},
            { id: 2, text: "Margaret", correct:true},
            { id: 3, text: "CJ", correct:false},
            { id: 4, text: "Ammie", correct:false},
        ]
    },
    {
        question: "Quem é o melhor amigo inseparável do Rigby?",
        answers: [
            { id: 1, text: "Mordecai.", correct:true},
            { id: 2, text: "Marlon", correct:false},
            { id: 3, text: "Musheer", correct:false},
            { id: 4, text: "Matt", correct:false},
        ]
    },
    {
        question: "Qual é a bebida favorita de Mordecai e Rigby?",
        answers: [
            { id: 1, text: "café", correct:false},
            { id: 2, text: "suco vermelho", correct:false},
            { id: 3, text: "milkshake", correct:false},
            { id: 4, text: "refrigerante", correct:true},
        ]
    },
    {
        question: "Qual personagem é conhecido por flutuar e dizer “Óóóó!?",
        answers: [
            { id: 1, text: "cavalo do futuro", correct:false},
            { id: 2, text: "rei das festas", correct:false},
            { id: 3, text: "fantasmão ", correct:true},
            { id: 4, text: "CJ", correct:false},
        ]
    },
    {
        question: "A animação é conhecida por:",
        answers: [
            { id: 1, text: "piadas muito leves e infantis", correct:false},
            { id: 2, text: "retratar a vida de camponeses", correct:false},
            { id: 3, text: "Ser muito aleatória,e com muito humor. ", correct:true},
            { id: 4, text: "ter a animação muito realista", correct:false},
        ]
    },
    {
        question: "Rigby dorme em um(a)?",
        answers: [
            { id: 1, text: "trampolim", correct:true},
            { id: 2, text: "caixa de papelão", correct:false},
            { id: 3, text: "lixeiro", correct:false},
            { id: 4, text: "tapete", correct:false},
        ]
    },
]

const questionElement = document.getElementById("title-quiz-apenas-2");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-apenas-btn")

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