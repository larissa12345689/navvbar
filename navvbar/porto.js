const questions = [
    {
        question: "Qual é o nome da protagonista de Porto Papel?",
        answers: [
            { id: 1, text: "Mariana", correct:false},
            { id: 2, text: "Matilde", correct:true},
            { id: 3, text: "Camila", correct:false},
            { id: 4, text: "Sara", correct:false},
        ]
    },
    {
        question: "Com quem Matilde mora em Porto Papel?",
        answers: [
            { id: 1, text: "Com sua mãe", correct:false},
            { id: 2, text: "Com seu avô", correct:true},
            { id: 3, text: "Com seu irmão", correct:false},
            { id: 4, text: "Com seu tio", correct:false},
        ]
    },
    {
        question: "O que acontece com Matilde todos os dias?",
        answers: [
            { id: 1, text: "Ela muda de casa", correct:false},
            { id: 2, text: "Ela ganha um poder diferente", correct:true},
            { id: 3, text: "Ela troca de escola", correct:false},
            { id: 4, text: "Ela vira outra pessoa", correct:false},
        ]
    },
    {
        question: "Como é o mundo de Porto Papel?",
        answers: [
            { id: 1, text: "Feito de massinha", correct:false},
            { id: 2, text: "Feito de madeira", correct:false},
            { id: 3, text: "Feito de papel", correct:true},
            { id: 4, text: "Feito de metal", correct:false},
        ]
    },
    {
        question: "Quem é o melhor amigo da Matilde?",
        answers: [
            { id: 1, text: "Carlos", correct:true},
            { id: 2, text: "Boris", correct:false},
            { id: 3, text: "Noah", correct:false},
            { id: 4, text: "Zac", correct:false},
        ]
    },
    {
        question: "Qual é a atitude típica de Carlos?",
        answers: [
            { id: 1, text: "É dramático e exagerado", correct:true},
            { id: 2, text: "É muito tímido", correct:false},
            { id: 3, text: "É agressivo", correct:false},
            { id: 4, text: "É muito sério", correct:false},
        ]
    },
    {
        question: "O que Matilde precisa fazer para controlar seus poderes?",
        answers: [
            { id: 1, text: "Ignorá-los completamente", correct:false},
            { id: 2, text: "Entender seus sentimentos e como funcionam", correct:true},
            { id: 3, text: "Usar uma pulseira mágica", correct:false},
            { id: 4, text: "Dormir bem", correct:false},
        ]
    },
    {
        question: "Qual é o maior medo de Matilde?",
        answers: [
            { id: 1, text: "Perder o controle dos poderes", correct:true},
            { id: 2, text: "Ficar invisível para sempre", correct:false},
            { id: 3, text: "Mudar de cidade", correct:false},
            { id: 4, text: "Que a escola feche", correct:false},
        ]
    },
    {
        question: "O que os poderes diários da Matilde costumam causar?",
        answers: [
            { id: 1, text: "Problemas e confusões", correct:true},
            { id: 2, text: "Lutas épicas", correct:false},
            { id: 3, text: "Viagens no tempo", correct:false},
            { id: 4, text: "Desastres na cidade inteira", correct:false},
        ]
    },
    {
        question: "O que Matilde aprende ao longo da série?",
        answers: [
            { id: 1, text: "Que deve esconder seus poderes", correct:false},
            { id: 2, text: "Que deve se mudar para outra cidade", correct:false},
            { id: 3, text: "Que deve entender quem ela é e como se sente", correct:true},
            { id: 4, text: "Que precisa ser perfeita o tempo todo", correct:false},
        ]
    },
];

const questionElement = document.getElementById("title-quiz-porto-2");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-porto-btn")

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