document.getElementById('newToDoItem').addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    saveItem();
  }
});

function saveItem(){
  storedList = JSON.parse(localStorage.getItem("toDoItems"));
  storedList.push(document.getElementById('newToDoItem').value);
  localStorage.setItem('toDoItems', JSON.stringify(storedList));
  // console.log(localStorage.getItem('toDoItems'));
  updateToDoList();
  document.getElementById('newToDoItem').value = "";
}

function printNothingToDo() {
  nothingtodo = "<div class='mb-2 col-md-12'><p class='mb-2 mt-2 text-center text-light border border-light p-2'><i class='far fa-thumbs-up mr-4'></i>Thumbs up - theres nothing to do!</p></div>";
  document.getElementById('toDoContainer').innerHTML = nothingtodo;
}

function updateToDoList() {
  if (localStorage.getItem("toDoItems") === null) { //  if array doesnt exist make one
    blankArray = [];
    localStorage.setItem("toDoItems", JSON.stringify(blankArray));
    printNothingToDo();
  } else if (localStorage.getItem("toDoItems") === "[]") { //  if array does exist but is empty
    printNothingToDo();
  } else {
    storedList = JSON.parse(localStorage.getItem("toDoItems")); //get localstorage and turn into array
    toDoContainer = document.createElement('div'); //go through array and write a new alert box for each
    storedList.forEach(function(item, index) {
      div = document.createElement('div');
      div.setAttribute('class', 'mb-2 col-md-12');
      div.innerHTML = "<div class='alert alert-primary mb-1' id=item-" + index + ")'><p class='mb-0'><i class='far fa-circle mr-4'></i>" + item + "</p></div>";
      toDoContainer.appendChild(div);
    });
    document.getElementById('toDoContainer').innerHTML = toDoContainer.innerHTML;
  }
}
