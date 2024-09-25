document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("response");

    if (name === "" || email === "" || message === "") {
        response.innerText = "Пожалуйста, заполните все поля!";
    } else if (!email.includes("@")) {
        response.innerText = "Пожалуйста, введите корректный email!";
    } else if (message.length < 10) {
        response.innerText = "Сообщение должно содержать минимум 10 символов!";
    } else {
        response.innerText = "Спасибо за обратную связь, " + name + "!";
    }
});