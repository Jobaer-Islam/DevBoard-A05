const buttons = document.getElementsByClassName("btn-complete")
const task = document.getElementById("task");
const checkTask = document.getElementById("check-task");


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





        }




    })
}



document.getElementById("discover-card").addEventListener("click", function () {
    window.location.href = "qna.html";
});

