document.getElementById('form').addEventListener('submit', async function(event){
    event.preventDefault();
    let firstTask = document.getElementById('first-task').value;
    let secondTask = document.getElementById('second-task').value;
    // let thirdTask = document.getElementById('third-task').value;
    let fourthTask = document.getElementById('fourth-task').value;
    let fifthTask = document.getElementById('fifth-task').value;
    let sixthTask = document.getElementById('sixth-task').value;
    let seventhTask = document.getElementById('seventh-task').value;
    let eighthTask = document.getElementById('eighth-task').value;
    
    let data = {
        firstTask:firstTask,
        secondTask: secondTask,
        // thirdTask:thirdTask,
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