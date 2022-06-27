let quizData;
let data = JSON.parse(localStorage.getItem('quizDataLocal'))
if (Array.isArray(data) && data.length > 0) 
    quizData = data;

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    validateSelection();
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                                <button onclick="location.reload()">Reload</button>`;
        }
    }
});

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function moveToHome() {
    let text = "Are you sure to want to leave this page!";
    if (confirm(text) == true) {
        location.href='../index.html';
    }
}

function validateSelection() {
    if(getSelected() == undefined) {
        let messageLabel = document.getElementById('message');
        messageLabel.setAttribute("class", "error");
        messageLabel.innerHTML = "(&cross;) Kindly select an option";
    } else {
        message.innerHTML = "";
    }
}

function isEmptyQList() {
    if(quizData.length == 0) {
        alert("There is no questions in the list. Please add questions first.");
    }
    else location.href = '/html/play.html';
}
