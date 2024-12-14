
const questionContainers = document.querySelectorAll('.question-container');


questionContainers.forEach(container => {
    container.addEventListener('click', function() {
        console.log("You clicked on the question: ", container.querySelector('h4').textContent);
        
        const answerContainer = container.querySelector('.answer-container');
        const maximizeButton = container.querySelector('#maximize-button');
        const minimizeButton = container.querySelector('#minimize-button');

        if (answerContainer.style.display === 'none') {
            answerContainer.style.display = 'block';
            maximizeButton.style.display = 'none';
            minimizeButton.style.display = 'block';
        } else {
            answerContainer.style.display = 'none';
            maximizeButton.style.display = 'block';
            minimizeButton.style.display = 'none';
        }
    });
});