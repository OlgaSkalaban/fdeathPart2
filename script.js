"use strict";
//функция-конструктор для создания тасков
function Task(taskTitle, taskText, taskPriority) {
    this.title = taskTitle;
    this.text = taskText;
    this.priority = taskPriority;
}
// массивы для тасков
let completedTasks = [];
let plannedTasks = [];

function checkPriority {
    let radioButtons = document.getElementsByName("gridRadios");
    for(let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked == true) return radioButtons[i].value;
    }
}

// событие нажать кнопку Add task

let task = new Task(inputTitle.value, inputText.value, checkPriority());

plannedTasks.push(task);




