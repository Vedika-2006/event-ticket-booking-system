const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        this.innerHTML = "Booked";
        this.style.backgroundColor = "green";
    });
});
