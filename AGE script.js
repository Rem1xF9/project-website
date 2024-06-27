function checkAge() {
    var ageInput = document.getElementById('age-input').value;
    if (parseInt(ageInput) >= 18) {
        window.location.href = 'MAIN index.html';
    } else {
        document.getElementById('message').textContent = 'Вы слишком молоды, доступ запрещен.';
    }
}