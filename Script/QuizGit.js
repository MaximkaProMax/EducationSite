const quizForm = document.querySelector('#quiz');
const resultsDiv = document.querySelector('#results');

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const answers = ['b', 'b', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
    let score = 0;

    for (let i = 1; i <= answers.length; i++) {
        const answer = event.target[`q${i}`].value;

        if (answer === answers[i - 1]) {
            score++;
        }
    }

    const percentage = Math.round(score / answers.length * 100);

    resultsDiv.innerHTML = `Вы набрали ${score} из ${answers.length} (${percentage}%) правильных ответов.`;
});
