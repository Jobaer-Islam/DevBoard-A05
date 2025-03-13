const buttons = document.getElementsByClassName("btn-complete")
const task = document.getElementById("task");
const checkTask = document.getElementById("check-task");
const transaction = document.getElementById("history");


const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();


for (const button of buttons) {
    button.addEventListener('click', function () {

        this.disabled = true
        if (this.disabled) {
            button.innerHTML = 'Completed'
            button.style.background = "gray"
            alert("Task is completed");

            let taskAssign = parseInt(task.innerText);
            task.innerText = taskAssign + 1;
            if (task.innerText == 11) {
                alert("All tasks are Finish")
            }

            let taskCheck = parseInt(checkTask.innerText);
            checkTask.innerText = taskCheck - 1;


            const p = document.createElement("p");
            p.innerText = `You have Completed The Task at ${hours}:${minutes}:${seconds}`

            transaction.appendChild(p);


        }




    })
}

document.getElementById("clear-history").addEventListener("click", function () {
    transaction.innerHTML = "";
})

const theme = document.getElementById('colorButton');
let bgTheme = document.getElementById("bg-color");
let lastColor = "";
theme.onclick = function () {
    let randomColor = "";
    do {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        randomColor = `rgb(${red}, ${green}, ${blue})`;
    } while (randomColor === lastColor);

    bgTheme.style.backgroundColor = randomColor;
    lastColor = randomColor;
};

document.getElementById("discover-card").addEventListener("click", function () {
    window.location.href = "qna.html";
});


document.getElementById("back-desk").addEventListener("click", function () {
    window.location.href = "index.html";
});

const desk = document.getElementById("back-desk");
console.log(desk)

