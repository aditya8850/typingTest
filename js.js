const sentences =
    `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump.`;
let seconds = 3;
let timer;
let result = document.querySelector('#result');

const sentence = document.getElementById('sentence');
sentence.textContent = '';
const input = document.getElementById('input');
const start = document.getElementById('start-btn');
const timerEle = document.getElementById('timer');
const retry = document.getElementById('retry-btn');
let wordsCount = 0;
let charactersCount = countCharacters(sentences);

start.addEventListener('click', () => {
    input.disabled = false;
    sentence.textContent = sentences;

    addTimer();
});


function addTimer() {
    timerEle.innerHTML = `Time: ${seconds}s`;
    startTimer(); // Start the timer
}



// Modify the startTimer function to show the result element and the retry button when the timer reaches zero
function startTimer() {
    timer = setInterval(() => {
        seconds--;
        timerEle.textContent = `Time: ${seconds}s`;
        if (seconds <= 0) {
            clearInterval(timer);
            input.disabled = true;
            start.disabled = true;
            result.style.display = "flex"; // Show the result element
            // Show the retry button
            displayResult();
        }
    }, 1000);
}


retryBtn()
function retryBtn() {
    retry.addEventListener('click', function () {
        seconds = 30; // Reset the timer
        result.style.display = "none"; // Hide the result
        input.disabled = false;
        input.value = "";
        start.disabled = false;
        addTimer()
    })
};
function countWords(sentence) {
    return sentence.split(/\s+/).filter(word => word !== '').length;
};


function countCharacters(sentence) {
    return sentence.replace(/\s/g, '').length;
};

function displayResult() {
    const typedText = input.value.trim();
    const typedWordsCount = countWords(typedText);
    const typedCharactersCount = countCharacters(typedText);
    const typingSpeed = (typedWordsCount / (30 - seconds)) * 60; // Words per minute
    const accuracyPercentage = (typedCharactersCount / charactersCount) * 100;
    
    document.querySelector('#speed').textContent = typingSpeed.toFixed(2);
    document.querySelector('#accuracy').textContent = accuracyPercentage.toFixed(2);

    
    result.style.display = "block";
   
};

