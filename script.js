const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const resultDiv = document.getElementById('result');
const captureButton = document.getElementById('capture');

// Запрос доступа к камере
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error("Ошибка доступа к камере: ", error);
    });

// Обработка снимка
captureButton.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    resultDiv.innerHTML = "Снимок сделан!";
});
