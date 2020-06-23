const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('quiz-results');
const submitButton = document.getElementById('quiz-submit');

const questions = [
    {
        question: "Which of these functions will output a desired message onto the console?",
        answers: {
            a: "print()",
            b: "log()",
            c: "writeln()",
            d: "cout()",
        },
        correct: "a"
    },
    {
        question: "What is required at the end of every line in Python?",
        answers: {
            a: "Semicolon [;]",
            b: "Comma [,]",
            c: "Dot [.]",
            d: "Nothing [ ]",
        },
        correct: "d"
    },
    {
        question: "What function is required when creating a new class?",
        answers: {
            a: "start()",
            b: "__init__()",
            c: "__define__()",
            d: "class()",
        },
        correct: "b"
    },
    {
        question: "Which of these is the correct output for print(2 + 'hello')?",
        answers: {
            a: "TypeError: unsupported operand type(s) for +: 'int' and 'str'",
            b: "2hello",
            c: "hello 2",
            d: "2 + 'hello'",
        },
        correct: "a"
    },
    {
        question: "How can you install an external package for Python?",
        answers: {
            a: "python install &lt;packagename&gt;",
            b: "Unzip and drag the package to your Python folder.",
            c: "pip install &lt;packagename&gt;",
            d: "install &lt;packagename&gt;",
        },
        correct: "c"
    },
];

let showQuiz = () => {
    var output = []
    questions.forEach((question, index) => {
        var answerOut = []
        for (ans in question.answers) {
            answerOut += `
            <label>
            <input type="radio" name="question${index}" value="${ans}"> ${ans}. ${question.answers[ans]}
            </label>
            `;
        };
       output += `
       <div class="question">${index + 1}. &nbsp;${question.question}</div>
       <div class="answer">${answerOut}</div><br>
       `;
    });
    quizContainer.innerHTML = output
};

let showResults = () => {
    var correctAnswers = 0;
    var congratSentence = "";
    const answerContainers = quizContainer.querySelectorAll('.answer');
    questions.forEach((question, index) => {
        const currentAnswerCont = answerContainers[index];
        const getAnswers = currentAnswerCont.querySelectorAll(`input[name=question${index}]`);
        for (let i = 0; i < getAnswers.length; i++) {
            if (getAnswers[i].value === question.correct && getAnswers[i].checked) {
                getAnswers[i].parentElement.style.backgroundColor = "#d4e157";
                getAnswers[i].parentElement.style.color = "#ffffff";
                getAnswers[i].parentElement.style.fontWeight = "800";
                getAnswers[i].parentElement.style.borderBottom = "none";
                correctAnswers++;
            } else {
                getAnswers[i].parentElement.style.backgroundColor = "#e57373";
                getAnswers[i].parentElement.style.borderBottom = "none";
                getAnswers[i].parentElement.style.color = "#ffffff";
            }
        };
    });
    switch(correctAnswers) {
        case 1:
            congratSentence = "Keep trying, and you'll get there!";
            break;
        case 2:
            congratSentence = "That could use some improvement... Take a look at our tutorials and try again!";
            break;
        case 3:
            congratSentence = "So close, yet so far away from perfection... Keep it going!";
            break;
        case 4:
            congratSentence = "Almost there! You just need a bit of improvement!";
            break;
        case 5:
            congratSentence = "You got all 5 questions right! Congratulations!";
    }
    resultsContainer.innerHTML = "Your results: " + correctAnswers + "/" + questions.length + " questions. " + congratSentence 
};

showQuiz();