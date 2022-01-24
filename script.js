







var saveButton = document.querySelector(".saveBtn");
today.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
saveButton.addEventListener("click", saveTask);

textArea.value = localStorage.getItem("Things to do");
function saveTask() {
    localStorage.setItem("Things to do", textArea.value);
};