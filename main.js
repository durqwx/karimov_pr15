let intervalId;
const colorBox = document.getElementById('colorBox');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

startBtn.addEventListener('click', () => {
    startBtn.disabled = true; // Отключаем кнопку "Старт"
    stopBtn.disabled = false; // Включаем кнопку "Стоп"
    
    intervalId = setInterval(() => {
        colorBox.style.backgroundColor = getRandomColor();
    }, 500);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    startBtn.disabled = false; // Включаем кнопку "Старт"
    stopBtn.disabled = true; // Отключаем кнопку "Стоп"
});