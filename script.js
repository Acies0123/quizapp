const quizData = [
  {
    question: "Memory test in which a series of numbers is read to subjects, who are then asked to recall the numbers in order",
    a: "Serial 7",
    b: "MMSE",
    c: "Letter sequencing",
    d: "Digit span test",
    e: "Words Recall test",
    correct: "d",
  },
  {
    question: "Psychological effects of memory and forgetting include",
    a: "sense of loss",
    b: "Depression",
    c: "Poor self efficacy",
    d: "Low self esteem",
    e: "All of the above",
    correct: "e",
  },
  {
    question: "Which test is used to test severity of depression",
    a: "Chi-square",
    b: "T-square",
    c: "pearsoncorellation coefficient",
    d: "spearman coefficient",
    e: "unsure",
    correct: "e",
  },
  {
    question: "Which is not an excitatory neurotransmitter?",
    a: "Glutamate",
    b: "glycine",
    c: "aspartate",
    d: "homocysteine",
    e: "N-methyl-stg",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()
  
  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
}

function  deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)  
}

function getSelected() {
  let answer

  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
        answer = answerEl.id
    }
  })

    return answer
}
 
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
 
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
          <h2> You answered ${score}/${quizData.length} questions correctly</h2>
          
          <button onclick="location.reload()">Reload</button>`
    }
}
})