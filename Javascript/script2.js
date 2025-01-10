
const head = document.getElementById("heading");
console.log(head)
const paragraph = document.getElementById("paragraph");

const highlightButton = document.querySelector("#highlight");
const toggleClass = document.querySelector("#toggle-class-button");
const addItem = document.querySelector("#add-list-item");
const removeItem = document.querySelector("#remove-list-item");

const lists = document.querySelector("#lists");

highlightButton.addEventListener("click", () => {

    head.classList.add("highlighted")
    paragraph.classList.add("highlighted")
});

toggleClass.addEventListener("click",()=>{
    head.classList.remove("highlighted")
    paragraph.classList.remove("highlighted")

})


addItem.addEventListener("click", () => {

    const item = document.createElement("li");
    item.textContent =`Item ${lists.childElementCount + 1}`
    lists.appendChild(item);

})


removeItem.addEventListener("click", () => {


    const item = lists.lastChild;
    if (item) item.remove()


})