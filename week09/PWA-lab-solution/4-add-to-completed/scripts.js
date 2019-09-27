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

function deleteCompleted() {
  localStorage.removeItem('completedItems');
  updateCompletedToDoList();
}

function printNothingToDo() {
  nothingtodo = "<div class='mb-2 col-md-12'><p class='mb-2 mt-2 text-center text-light border border-light p-2'><i class='far fa-thumbs-up mr-4'></i>Thumbs up - theres nothing to do!</p></div>";
  document.getElementById('toDoContainer').innerHTML = nothingtodo;
}

function printNothingComplete() {
  nothingtodo = "<div class='mb-2 col-md-12'><p class='mb-2 mt-2 text-center text-light border border-light p-2'><i class='far fa-hourglass mr-4'></i>Times ticking...better get things done</p></div>";
  document.getElementById('completedContainer').innerHTML = nothingtodo;
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
      div.innerHTML = "<div class='alert alert-primary mb-1' id=item-" + index + " onClick='complete(" + index + ")'><p class='mb-0'><i class='far fa-circle mr-4'></i>" + item + "</p></div>";
      toDoContainer.appendChild(div);
    });
    document.getElementById('toDoContainer').innerHTML = toDoContainer.innerHTML;
  }
}

function updateCompletedToDoList() {
  if (localStorage.getItem("completedItems") === null) { //  if array doesnt exist make one
    blankArray = [];
    localStorage.setItem("completedItems", JSON.stringify(blankArray));
    printNothingComplete();
  } else if (localStorage.getItem("completedItems") === "[]") { //  if array does exist but is empty
    printNothingComplete();
  } else {
    completedList = JSON.parse(localStorage.getItem("completedItems"));
    toDoContainer = document.createElement('div');
    completedList.forEach(function(item, index) {
      div = document.createElement('div');
      div.setAttribute('class', 'mb-2 col-md-12');
      div.innerHTML = "<div class='alert alert-success mb-1' id=item-" + index + "><p class='mb-0'><i class='far fa-circle mr-4'></i>" + item + "</p></div>";
      // console.log(div);
      toDoContainer.appendChild(div);
    });
    document.getElementById('completedContainer').innerHTML = toDoContainer.innerHTML;
  }
}

function complete(index) {
  storedList = JSON.parse(localStorage.getItem("toDoItems"));
  console.log(storedList);
  console.log(storedList[index]);
  completedItem = storedList[index];

  completeToDoList = JSON.parse(localStorage.getItem("completedItems"));
  completeToDoList.push(completedItem);
  localStorage.setItem('completedItems', JSON.stringify(completeToDoList));
  console.log(localStorage.getItem("completedItems"));

  storedList = storedList.filter(function(item) {
    return item !== storedList[index];
  })
  localStorage.setItem('toDoItems', JSON.stringify(storedList));
  updateToDoList();
  updateCompletedToDoList();
}
