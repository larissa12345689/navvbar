const questions = [
    {
        question: "Qual é o nome verdadeiro do Irmão do Jorel?",
        answers: [
            { id: 1, text: "Juliano", correct:true},
            { id: 2, text: "Ninguém sabe", correct:true},
            { id: 3, text: "Marcelo", correct:false},
            { id: 4, text: "Fernando", correct:false},
        ]
    },
    {
        question: "Quem é a avó superprotetora e dramática do Irmão do Jorel?",
        answers: [
            { id: 1, text: "Vó Zilda", correct:false},
            { id: 2, text: "Vó Dulce", correct:false},
            { id: 3, text: "Vó Juju", correct:true},
            { id: 4, text: "Vó Mariangela", correct:false},
        ]
    },
    {
        question: "Qual é o nome da professora do Irmão do Jorel?",
        answers: [
            { id: 1, text: "Professora Fabiana", correct:false},
            { id: 2, text: "Professora Adelaide", correct:true},
            { id: 3, text: "Professora Romilda", correct:false},
            { id: 4, text: "Professora Lurdinha", correct:false},
        ]
    },
    {
        question: "Qual é o personagem famoso por sempre dizer 'abacate, come abacate bem' Irmão do Jorel!'?",
        answers: [
            { id: 1, text: "Nico", correct:false},
            { id: 2, text: "Billy Doidão", correct:false},
            { id: 3, text: "Lara", correct:false},
            { id: 4, text: "vovó juju", correct:true},
        ]
    },
    {
        question: "Como se chama o cachorro da família?",
        answers: [
            { id: 1, text: "Bethoven", correct:false},
            { id: 2, text: "Tosh", correct:true},
            { id: 3, text: "Churros", correct:false},
            { id: 4, text: "Bolacha", correct:false},
        ]
    },
    {
        question: "Qual é a paixão do Irmão do Jorel?",
        answers: [
            { id: 1, text: "Ana Catarina", correct:true},
            { id: 2, text: "Lara", correct:false},
            { id: 3, text: "Sara", correct:false},
            { id: 4, text: "Rita", correct:false},
        ]
    },
    {
        question: "Qual é o irmão famoso, estiloso e popular da família?",
        answers: [
            { id: 1, text: "Nico", correct:false},
            { id: 2, text: "Jorel", correct:true},
            { id: 3, text: "Carlinhos", correct:false},
            { id: 4, text: "Edmilson", correct:false},
        ]
    },
    {
        question: "Qual é o personagem que usa roupas brilhantes e fala de maneira teatral?",
        answers: [
            { id: 1, text: "Professor Girafales", correct:false},
            { id: 2, text: "Steve Magal", correct:false},
            { id: 3, text: "Carlos Felino", correct:true},
            { id: 4, text: "Hermes", correct:false},
        ]
    },
    {
        question: "Como é o estilo de Jorel?",
        answers: [
            { id: 1, text: "Tímido e quieto", correct:false},
            { id: 2, text: "quieto, super estiloso e popular", correct:true},
            { id: 3, text: "Gamer viciado", correct:false},
            { id: 4, text: "Medroso e inseguro", correct:false},
        ]
    },
    {
        question: "O que deixa Irmão do Jorel sempre inseguro?",
        answers: [
            { id: 1, text: "Ser o mais novo", correct:false},
            { id: 2, text: "A pressão da família", correct:false},
            { id: 3, text: "A fama do Jorel", correct:true},
            { id: 4, text: "A escola difícil", correct:false},
        ]
    },
];

const questionElement = document.getElementById("title-quiz-irmao-2");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-irmao-btn")

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