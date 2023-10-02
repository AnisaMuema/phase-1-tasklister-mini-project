document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // create variable to grab the values of the displayed tasks
   const taskForm = document.querySelector("#create-task-form");
  //  create another variable that is going to grab the location of where the tasks will be displayed
   const taskList = document.querySelector("#tasks");
  //  Now add an event listener to listen for then the submit button is clicked in order to displayed the submitted values/tasks
   taskForm.addEventListener("submit", (event)=> {
    event.preventDefault()

    // Create another variable to get a hold of the user input 
    const newTask = document.querySelector("#new-task-description").value;
    // display the results on the DOM. To do that create another variable that which will create an approriate section for the task to be displayed
  taskList.innerHTML += `
      <li> ${newTask} 
        <button data-action="delete">remove task</button
  
      </li>
    `
    // const taskItem = document.createElement("li");
    // // the li element is the line on which the userInput will be displayed
    // taskItem.innerHTML = newTask

    // taskList.appendChild(taskItem);
    // // to clear the description bar, add a reset method to the task form

    taskForm.reset()
   }) 
// Add a function that removes task when clicked 
   taskList.addEventListener("click", function(e){
    console.log(e.target.parentNode.remove())
   })
     

  });
