let timer;
let isRunning = false;
let minutes = 0;
let seconds = 0;

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById("start").addEventListener("click", function () {
    if (!isRunning) {
        timer = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
});

document.getElementById("pause").addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById("reset").addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    updateDisplay();
});

document.getElementById("set").addEventListener("click", function () {
    const inputMinutes = parseInt(document.getElementById("minutes").value, 10);
    if (!isNaN(inputMinutes)) {
        minutes = inputMinutes;
        seconds = 0;
        updateDisplay();
    }
});

// Initialize the display
updateDisplay();
