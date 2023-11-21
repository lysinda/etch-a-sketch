const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "Set dimensions";

button.addEventListener("click", () => {
    let amount = prompt("Which height and width do you want?");
    if (!isNaN(amount) && amount <= 100) {
        container.replaceChildren();
        createGrid(amount);
    }
    else {
        alert("Invalid choice! Only numbers, max 100");
    }
});

body.appendChild(button);

const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

function createGrid(dimension = 16) {
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.flexBasis = 800 / dimension + "px";
        for (let j = 0; j < dimension; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.flexBasis = 800 / dimension + "px";

            square.addEventListener("mouseenter", () => {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                square.style.backgroundColor = "#" + randomColor;
            });

            row.appendChild(square);
        }
        container.append(row);
    }
}

createGrid();





