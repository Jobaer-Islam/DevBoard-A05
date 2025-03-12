const buttons = document.getElementsByClassName("btn-complete")
console.log(buttons);


for (const button of buttons) {
    button.addEventListener('click', function () {
        this.disabled = true
        if (this.disabled) {
            button.innerHTML = 'Completed'
            button.style.background = "gray"
        }

    })
}


document.getElementById("discover-card").addEventListener("click", function () {
    window.location.href = "qna.html";
});
