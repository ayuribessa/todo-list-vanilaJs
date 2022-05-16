let id = 0;
document.querySelector('#add-button').addEventListener('click', function addTask() {
   const input = document.getElementById('task-input');
   const taskDescriptionText = input.value;
   const task = document.createElement('span');
   const lineBreak = document.createElement('br');
   const checkBox = document.createElement('input');

   //checkBox atributes
   checkBox.type = 'checkbox';
   checkBox.id = id;
   checkBox.checked = false;
   //task atributes
   task.textContent = taskDescriptionText;
   task.id = id;

   document.getElementById('items').append(checkBox, task, lineBreak);
   //clearing the input
   input.value = "";
   id++;

})

// document.querySelector('#rm-button').addEventListener('click' function removeTask(){

// });