const questions = [
    {
        question: "qual emissora de tv exibiu a animação pela primeira vez?",
        answers: [
            { id: 1, text: "Nickelodeon", correct:false},
            { id: 2, text: "Discovery Kids", correct:false},
            { id: 3, text: "Cartoon Network", correct:true},
            { id: 4, text: "TV Cultura", correct:false},
        ]
    },
    {
        question: "Onde Nicole trabalha e quem é seu chefe?",
        answers: [
            { id: 1, text: "Supermercado de Welmore, Larry", correct:false},
            { id: 2, text: "fabrica de arco-íris, Sr. Yoshida", correct:true},
            { id: 3, text: "Secretaria, Charlie", correct:false},
            { id: 4, text: "indústria de cosméticos, Sr. Kreese", correct:false},
        ]
    },
    {
        question: "Quais personagens foram engolidos pelo vácuo?",
        answers: [
            { id: 1, text: "Sarah e Ritch", correct:false},
            { id: 2, text: "Bob e Molly", correct:false},
            { id: 3, text: "Massami e Molly", correct:false},
            { id: 4, text: "Rob e Molly", correct:true},
        ]
    },
    {
        question: "Onde Darwin foi comprado por Ricardo?",
        answers: [
            { id: 1, text: "loja de animais", correct:false},
            { id: 2, text: "vendedor ambulante", correct:false},
            { id: 3, text: "foi um presente.", correct:false},
            { id: 4, text: "van mágica", correct:true},
        ]
    },
    {
        question: "qual o par romântico de Gumball e Darwin?",
        answers: [
            { id: 1, text: "Penny e Carrie", correct:true},
            { id: 2, text: "Carmen e Sarah", correct:false},
            { id: 3, text: "Penny e Terrie", correct:false},
            { id: 4, text: "Carmen e Susie", correct:false},
        ]
    },
    {
        question: "no eisódeo piloto(episódio de teste lançado em 2008) Gumball e Darwin eram:",
        answers: [
            { id: 1, text: "misturando cartum com a realidade e sendo Gumball em 2D e Darwin realista.", correct:true},
            { id: 2, text: "muito diferentes sendo Gumball um coelho e Darwin sendo um peixe comum.", correct:false},
            { id: 3, text: "muito realistas sendo uma das primeiras ideias para o desenho.", correct:false},
            { id: 4, text: "totalmente cartunescos, tendo sua proposta inicial revitalizada ao longo dos anos.", correct:false},
        ]
    },
    {
        question: "qual o nome completo da Nicole?",
        answers: [
            { id: 1, text: "Nicole Matthew Watterson", correct:false},
            { id: 2, text: "Nicole Richard Watterson", correct:false},
            { id: 3, text: "Nicole Watterson", correct:false},
            { id: 4, text: "Doutora Nicole Watterson", correct:true},
        ]
    },
    {
        question: "Qual o enrredo PRINCIPAL da animação?",
        answers: [
            { id: 1, text: "As aventuras da inconvencional família Watterson. ", correct:false},
            { id: 2, text: "O vácuo e o fato implícito de que estão em um desenho animado.", correct:true},
            { id: 3, text: "o casamento de Ricardo e Nicole Watterson. ", correct:false},
            { id: 4, text: "Toda realidade do desenho ser apenas uma ilusão criada por Gumball.", correct:false},
        ]
    },
    {
        question: "Anais não quis mais ser amiga de Billy pelo fato de:",
        answers: [
            { id: 1, text: "Ele na verdade estar apaixonado por ela.", correct:false},
            { id: 2, text: "Ele ser muito chato e se achar por ser mais inteligente que ela.", correct:false},
            { id: 3, text: "Ele não gostar de Daisy a burrinha", correct:true},
            { id: 4, text: "Ele ser de uma família rica e esnobe.", correct:false},
        ]
    },
    {
        question: "Qual o verdadeiro nome de Gumball?",
        answers: [
            { id: 1, text: "Zac", correct:true},
            { id: 2, text: "Matt", correct:false},
            { id: 3, text: "Dan", correct:false},
            { id: 4, text: "Max", correct:false},
        ]
    },
]

const questionElement = document.getElementById("title-quiz-gumball-2");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-gumball-btn")

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