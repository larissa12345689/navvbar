const questions = [
    {
        question: "Quais são os nomes das Meninas Superpoderosas?",
        answers: [
            { id: 1, text: "Lindinha, Docinho e Florzinha", correct:true},
            { id: 2, text: "Margarida, Rosa e Lilás", correct:false},
            { id: 3, text: "Âmbar, Jade e Rubi", correct:false},
            { id: 4, text: "Mel, Nina e Lola", correct:false},
        ]
    },
    {
        question: "Qual é o ingrediente acidental que deu origem às Meninas Superpoderosas?",
        answers: [
            { id: 1, text: "Pó Químico Z", correct:false},
            { id: 2, text: "Xarope X", correct:false},
            { id: 3, text: "Elemento X", correct:true},
            { id: 4, text: "Fórmula N", correct:false},
        ]
    },
    {
        question: "Quem criou as Meninas Superpoderosas?",
        answers: [
            { id: 1, text: "Professor Utônio", correct:true},
            { id: 2, text: "Dr. Williams", correct:false},
            { id: 3, text: "Sr. Fígado", correct:false},
            { id: 4, text: "Doutor Baxter", correct:false},
        ]
    },
    {
        question: "Qual das meninas é conhecida como a líder do grupo?",
        answers: [
            { id: 1, text: "Lindinha", correct:false},
            { id: 2, text: "Docinho", correct:false},
            { id: 3, text: "Florzinha", correct:true},
            { id: 4, text: "Princesa", correct:false},
        ]
    },
    {
        question: "Qual é o vilão mais famoso do desenho?",
        answers: [
            { id: 1, text: "Ele", correct:false},
            { id: 2, text: "Fuzzy Confusão", correct:false},
            { id: 3, text: "Macaco Louco", correct:true},
            { id: 4, text: "Gangue Gangrena", correct:false},
        ]
    },
    {
        question: "Qual é a característica da Lindinha?",
        answers: [
            { id: 1, text: "É muito forte e mal-humorada", correct:false},
            { id: 2, text: "É sensível, doce e ama animais", correct:true},
            { id: 3, text: "É a mais rápida", correct:false},
            { id: 4, text: "É a mais velha", correct:false},
        ]
    },
    {
        question: "Qual das meninas é conhecida por ser mais brava e durona?",
        answers: [
            { id: 1, text: "Florzinha", correct:false},
            { id: 2, text: "Docinho", correct:true},
            { id: 3, text: "Lindinha", correct:false},
            { id: 4, text: "Arlequina", correct:false},
        ]
    },
    {
        question: "Qual cidade as Meninas Superpoderosas protegem?",
        answers: [
            { id: 1, text: "Beach City", correct:false},
            { id: 2, text: "Springfield", correct:false},
            { id: 3, text: "Townsville", correct:true},
            { id: 4, text: "Metroville", correct:false},
        ]
    },
    {
        question: "Qual é o nome do prefeito de Townsville?",
        answers: [
            { id: 1, text: "Prefeito Junior", correct:false},
            { id: 2, text: "Prefeito Cabeçudo", correct:false},
            { id: 3, text: "Prefeito", correct:true},
            { id: 4, text: "Prefeito Mandarino", correct:false},
        ]
    },
    {
        question: "Quem sempre ajuda o Prefeito no trabalho?",
        answers: [
            { id: 1, text: "A vice-prefeita", correct:false},
            { id: 2, text: "A assistente Srt. Bellum", correct:true},
            { id: 3, text: "Florzinha", correct:false},
            { id: 4, text: "O professor Utônio", correct:false},
        ]
    },
];





const questionElement = document.getElementById("title-quiz-meninas-2");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-meninas-btn")

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