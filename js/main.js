const quizData = [
    {
        question: "Что согласно Конституции РФ является «уникальным наследием ее многонационального народа»?",
        a: "1) Литература",
        b: "2) Спорт",
        c: "3) Культура",
        d: "4) Традиционный образ жизни",
        correct: "c",
    },
    {
        question: "Согласно ст. 65 Конституции РФ в состав РФ входят республики, края, области, автономные округа, автономная область, города федерального \nзначения. Сколько городов федерального значения в России?",
        a: "1) 89",
        b: "2) 24",
        c: "3) 4",
        d: "4) 3",
        correct: "d",
    },
    {
        question: "Какой орган исполнительной власти осуществляет функции по реализации гос и фед программ в сфере межнациональных отношений, социальной и культурной адаптации и интеграции иностранных граждан в РФ?",
        a: "1) Министерство внутренних дел",
        b: "2) Министерство здравоохранения",
        c: "3) Министерство финансов",
        d: "4) Федеральное агентство по делам национальностей",
        correct: "d",

    },
    {
        question: "Какие из перечисленных народов являются коренными для Ленинградской области (Санкт-Петербургской губернии)?",
        a: "1) Эстонцы, белорусы",
        b: "2) Цыгане, чуваши",
        c: "3) Латыши, литовцы",
        d: "4) Ижора, водь",
        correct: "d",

    },
    {
        question: "Одним из компонентов праздничного женского костюма русских Санкт-Петербургской губернии был штофник. Что это?",
        a: "1) Головной убор",
        b: "2) Парчовая душегрея",
        c: "3) Шелковый сарафан",
        d: "4) Нагрудное украшение",
        correct: "c",

    },
    {
        question: "Где располагалась «татарская слобода» Санкт-Петербурга, сложившаяся в начале ХVIII в.?",
        a: "1) Выборгская сторона",
        b: "2) Петроградская (Петербургская) сторона",
        c: "3) Район реки Охты",
        d: "4) Адмиралтейская сторона",
        correct: "b",

    },
    {
        question: "Как называется язык ашкеназов – европейских евреев?",
        a: "1) Иврит",
        b: "2) Идиш",
        c: "3) Ладино",
        d: "4) Ашкенази",
        correct: "b",

    },
    {
        question: "Какую религию исповедуют цыгане (русска рома), проживающие в Санкт-Петербурге?",
        a: "1) Православие",
        b: "2) Католицизм",
        c: "3) Язычество",
        d: "4) Индуизм",
        correct: "a",

    },
    {
        question: "Как называется национальный летний праздник ингерманландских финнов?",
        a: "1) Лиго",
        b: "2) День Калевалы",
        c: "3) Юханнус",
        d: "4) Троица",
        correct: "c",

    },
    {
        question: "К какому языку принадлежат такие привычные для жителей Кубани слова как: аул, сакля, джигит, кунак и шашлык?",
        a: "1) Тюркский (татарский) язык",
        b: "2) Адыгейский язык",
        c: "3) Армянский язык",
        d: "4) Украинский язык",
        correct: "a",

    }

];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}
var t;
          function up() {
              var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop); // size
              if(top > 0) {
                  window.scrollBy(0,-80);
                  t = setTimeout('up()',15);
              } else clearTimeout(t);
              return false;
          }

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы ответили на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Пройти повторно</button>
            `;
        }
    }
});
