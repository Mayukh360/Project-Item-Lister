var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem1 = document.getElementById('item1').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem + '  '));
  li.appendChild(document.createTextNode(newItem1));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  //Edit button
  let editBtn = document.createElement('button');

  editBtn.className = 'btn  btn-sm float-right Edit';

  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.prepend(editBtn)


  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}



//Adding search-Bar function
const searchBar = document.getElementById('filter');
const list = document.getElementById('items');

searchBar.addEventListener('keyup', function (event) {
  const searchText = event.target.value.toLowerCase();
  // Get all the list items
  const items = list.getElementsByTagName('li');

  // Loop through each item and show or hide it based on the search text
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = item.innerText.toLowerCase();

    if (text.indexOf(searchText) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
});


//Creating Default Edit buttons

// Select all the li elements and store them in a variable
const listItems = document.getElementsByTagName('li');

// Loop through each list item and create a button element with class and text
for (let i = 0; i < listItems.length; i++) {
  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm float-right Edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  
  // Add the button to the beginning of each list item
  listItems[i].prepend(editBtn);
}

//Creating Temporary Edit
let editBtn3 = document.createElement('button');
editBtn3.className = 'btn  btn-sm float-right Edit';
editBtn3.appendChild(document.createTextNode('Edit'));
d.prepend(editBtn3)









