function showTask(status) {
    let tasksList = document.getElementById(`${status+'Tasks'}`);
    let tasksListName = tasksList.previousElementSibling;
    tasksList.innerHTML = '';

    let dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.innerHTML = (status === 'current') ? 
    `<button type="button" id="complete" class="btn btn-success w-100">Complete</button>
    <button type="button" id="edit" class="btn btn-info w-100 my-2">Edit</button>
    <button type="button" id="delete" class="btn btn-danger w-100">Delete</button>` :
    `<button type="button" id="delete" class="btn btn-danger w-100">Delete</button>`;   
    
    let isDoneValue = (status === 'current') ? false : true;
    tasksList.innerHTML = toDoTasks.filter(task => task.isDone === isDoneValue).map(elem => `
    <li class="list-group-item d-flex w-100 mb-2" style="background-color:${elem.color}" data-id="${elem.id}">
        <div class="w-100 mr-2">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${elem.title}</h5>
                <div>
                    <small class="mr-2">${elem.priority + ' priority'}</small>
                    <small>${elem.creationDate}</small>
                </div>
            </div>
            <p class="mb-1 w-100">${elem.text}</p>
        </div>
        <div class="dropdown m-2 dropleft">
            <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div id="dropdownMenu" class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1"></div>
        </div>
    </li>`).join('');

    let dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.innerHTML = (status === 'current') ? 
    `<button type="button" id="complete" class="btn btn-success w-100">Complete</button>
    <button type="button" id="edit" class="btn btn-info w-100 my-2">Edit</button>
    <button type="button" id="delete" class="btn btn-danger w-100">Delete</button>` :
    `<button type="button" id="delete" class="btn btn-danger w-100">Delete</button>`;

    let tasksNumber = (status === 'current') ? toDoTasks.filter(task => !task.isDone).length : toDoTasks.filter(task => task.isDone).length;
    tasksListName.textContent = `ToDo [${tasksNumber}]`;
}