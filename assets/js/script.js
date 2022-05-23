let id = 1;
document.querySelector('#add-button').addEventListener('click', function addTask() {
   const input = document.getElementById('task-input');
   const taskDescriptionText = document.createElement('p');
   const task = document.createElement('span');
   const lineBreak = document.createElement('br');
   const checkBox = document.createElement('input');


   //checkBox atributes
   checkBox.type = 'checkbox';
   checkBox.checked = false;
   //task atributes
   taskDescriptionText.textContent = input.value;
   task.id = id;
   task.className = 'item';

   task.append(checkBox,taskDescriptionText, lineBreak);

   document.getElementById('items').appendChild(task);
   //clearing the input
   input.value = "";
   id++;
})

document.querySelector('#rm-button').addEventListener('click', function removeTask(){
   const checkBoxes = document.querySelectorAll('[type=checkbox]');
   checkBoxes.forEach(element => {
      if (element.checked){
         element.parentElement.remove();
      }
   });
});