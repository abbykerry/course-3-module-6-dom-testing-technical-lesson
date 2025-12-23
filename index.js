// Your code here!
function addItem() {
    //selct the <ul> element by its ID
    const list = document.getElementById("item-list");
    //create a new <li> element
    const newItem = document.createElement("li");
    //add text content inside the list
    newItem.textContent= "New Item";
    //append the new <li> to the <ul>
    list.appendChild(newItem);
}
//Add a click event listener to the button with the ID 'add-item' after DOMContentLoaded
// When clicked, it will call the addItem function

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-item").addEventListener("click", addItem);
})