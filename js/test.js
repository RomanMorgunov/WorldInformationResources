var questionsArray = ['Что делает оператор «%»', 'Обозначения оператора «НЕ»', 'Обозначение оператора «ИЛИ»', 'Обозначение оператора «И»', 'Как сделать инкрементацию числа', 'Как сделать декрементация числа', 'Чему будет равен с, если int a = 10; int b = 4; int c = a % b', 'Чему будет равен с, если int a = 10; int b = 4; bool c = (a == 10 && b == 4)', 'Чему будет равен с, если int a = 0; int c = a—', 'Чему будет равен с, если int a = 0; int c = —a', 'Чему равен d, если int a = 0; int b = a++; int c = 0; int d = a + b + c + 3', 'Как называется оператор «?:»', 'Какой оператор возвращает значение из метода?'];
var answersArray = [['Возвращает тригонометрическую функцию', 'Возвращает остаток от деления', 'Возвращает тригонометрическую функцию', 'Ни чего из выше перечисленного'], ['No', 'Not', '!=', '!'], ['||', '!', 'or', '!='], ['%', 'and', '&&', 'Все выше перечисленные'], ['—', '%%', '!=', '++'], ['!=', '—', '%%', '++'], ['2', '11', '3', '1'], ['14', 'true', 'false', 'null'], ['1', 'null', '-1', '0'], ['0', '1', 'null', '-1'], ['5', '4', '6', '3'], ['Прямой оператор', 'Вопросительный', 'Тернарный оператор', 'Территориальный оператор'], ['end', 'out', 'veni', 'return']];
var correctAnswersArray = [1, 3, 0, 2, 3, 1, 0, 1, 3, 3, 1, 2, 3];

var correctAnswersCount = 0;

function getQuestionAmount() {
    return questionsArray.length;
}

function getCurrentIndexQuestion() {
    var index = document.getElementById('question-number').innerText;
    return --index;
}

function incrementCurrentIndexQuestion() {
    document.getElementById('question-number').innerText++;
}

function onLoad() {
    document.getElementById('question-amount').innerText = getQuestionAmount();
    fillQuestionAndAnswers(getCurrentIndexQuestion())
}

function toAnswer(indexAnswer) {
    var indexQuestion = getCurrentIndexQuestion();
    checkAnswer(indexAnswer, indexQuestion);

    incrementCurrentIndexQuestion();
    var newIndexQuestion = getCurrentIndexQuestion();
    if (newIndexQuestion !== getQuestionAmount()) {
        fillQuestionAndAnswers(newIndexQuestion);
    }
    else {
        hideItem('quiz');

        fiilResult();
        showItem('your-result');
    }
}

function fillQuestionAndAnswers(indexQuestion) {
    document.getElementById('question-title').innerText = questionsArray[indexQuestion];
    document.getElementById('answers-0').innerText = answersArray[indexQuestion][0];
    document.getElementById('answers-1').innerText = answersArray[indexQuestion][1];
    document.getElementById('answers-2').innerText = answersArray[indexQuestion][2];
    document.getElementById('answers-3').innerText = answersArray[indexQuestion][3];
}

function checkAnswer(indexAnswer, indexQuestion) {
    if (indexAnswer === correctAnswersArray[indexQuestion]) {
        correctAnswersCount++;
    }
}

function hideItem(id) {
    var d = document.getElementById(id).style.display;
    document.getElementById(id).style.display = 'none';
}

function showItem(id) {
    document.getElementById(id).style.display = 'block';
}

function fiilResult() {
    document.getElementById('question-number-result').innerText = correctAnswersCount;
    document.getElementById('question-amount-result').innerText = getQuestionAmount();
}