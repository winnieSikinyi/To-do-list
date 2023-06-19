document.getElementById('form').addEventListener('submit', async function(event){
    event.preventDefault();
    let firstTask = document.getElementById('first-task').value;
    let secondTask = document.getElementById('second-task').value;
    let thirdTask = document.getElementById('third-task').value;
    let fourthTask = document.getElementById('fourth-task').value;
    let fifthTask = document.getElementById('fifth-task').value;
    let sixthTask = document.getElementById('sixth-task').value;
    let seventhTask = document.getElementById('seventh-task').value;
    let eighthTask = document.getElementById('eighth-task').value;
    
    let data = {
        firstTask:firstTask,
        secondTask: secondTask,
        thirdTask:thirdTask,
        fourthTask:fourthTask,
        fifthTask:fifthTask,
        sixthTask:sixthTask,
        seventhTask:seventhTask,
        eighthTask:eighthTask,
     
    };
    console.log({data});
let result = await fetch('https:/dummyjson.com/todos/add', {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
body:JSON.stringify(data)
})
.then(response=>response.json())
.then(response=>response)
.catch(error=>error.message)
console.log({result});
let success = document.getElementById(`success`);
result.id ? success.innerHTML = `Task completed successfully`:success.innerHTML =`Task not completed`
})  

fetch('https://dummyjson.com/todos/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    completed: false,
  })
})
.then(res => res.json())
.then(console.log);
const completeBtn = taskItem.querySelector('.complete-btn');
    completeBtn.addEventListener('click', () => completeTask(task.id));
    const editBtn = taskItem.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => editTask(task.id));
    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    taskList.appendChild(taskItem);


function completeTask(taskId) {
  const task = task.find(task => task.id === taskId);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}
function editTask(taskId) {
  const task = task.find(task => task.id === taskId);
  if (task) {
    const newTask = prompt('Enter a new task:', task.task);
    if (newTask !== null) {
      task.task = newTask.trim();
      renderTasks();
    }
  }
}
function deleteTask(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    renderTasks();
  }
}
addTaskForm.addEventListener('submit', addTask);
renderTasks();