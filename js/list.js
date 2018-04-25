var arrayTask = [];

//добавление дел

function addList() {
    var newLi = document.createElement('li');
    newLi.className = "styles-task";
    var task = typeTask.value;
    newLi.innerHTML =task;
    list.appendChild(newLi);
    arrayTask.push(task);
    typeTask.value = "";
}

addTask.addEventListener('click', addList);

//очистка списка

function clearList() {
    var all_clear = document.getElementById("list");
    while (all_clear.firstChild) { // пока условие верно, выполняется код из тела цикла
        all_clear.removeChild(all_clear.firstChild);
    }
}

clearTask.addEventListener('click', clearList);

//зачеркивание

function cross_out(event){
    event.target.classList.toggle("styles-task__line-throught");
}

list.addEventListener('click', cross_out);