const clicker = document.querySelector("#clicker");

// clicker.onclick = alert("hi"); wrong
clicker.onclick = function() {
    console.log("YOU CLICKED THE CLICKER");
};

clicker.ondblclick = function() {
    console.log("double click");
};

const eventListenerBtn = document.querySelector("#eventListenerBtn");

eventListenerBtn.onclick = function() {
    console.log("clicked on eventlistener");
};

eventListenerBtn.onclick = function() {
    console.log("second time");
};

eventListenerBtn.addEventListener("click", function() {
    alert("clicked");
});
eventListenerBtn.addEventListener("click", function() {
    console.log("second event listener");
});

eventListenerBtn.addEventListener("mouseover", function() {
    eventListenerBtn.innerText = "DONT TOCUH ME ";
});

eventListenerBtn.addEventListener("mouseout", function() {
    eventListenerBtn.innerText = " TOCUH ME ";
});

window.addEventListener("scroll", function() {
    console.log("stop scrolling");
});

const assholeBtn = document.querySelector("#asshole");

assholeBtn.addEventListener("mouseover", function() {
    const h = Math.floor(Math.random() * window.innerHeight);
    const w = Math.floor(Math.random() * window.innerWidth);
    assholeBtn.style.left = `${w}px`;
    assholeBtn.style.top = `${h}px`;
});

// eventlistener to multiple elements

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "violet",
];

const printColor = function(event) {
    console.log(event);
    const h1 = document.querySelector("h1");
    console.log(this);
    console.log(`clicke on a box ${this.style.backgroundColor}`);
    h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector("#boxes");
for (let color of colors) {
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.classList.add("box");
    container.appendChild(box);
    // way 1
    /*
                                                                    box.addEventListener("click", function() {
                                                                        printColor(box); // we pass the box from here to the out side function
                                                                    });
                                                                    */
    //way 2

    box.addEventListener("click", printColor); // this refer to the object (box)
}
// the event object

document.body.addEventListener("keypress", function(e) {
    console.log(e);
});

//key events keypress keyup & keydown
const input = document.querySelector("#username");

input.addEventListener("keydown", function(e) {
    //e (event object contains information about what key is pressd)
    console.log("keydown");
});

input.addEventListener("keyup", function(e) {
    console.log("keyup");
});

input.addEventListener("keypress", function(e) {
    console.log("keypress");
});

const addItem = document.querySelector("#addItem");
const itemsUL = document.querySelector("#items");

addItem.addEventListener("keypress", function(e) {
    //console.log(e);
    if (e.key === "Enter") {
        if (!this.value) return;
        console.log(this.value);
        const newItemText = this.value;
        const newItem = document.createElement("li");
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value = "";
    }
});