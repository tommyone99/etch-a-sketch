const canvas = document.querySelector("#canvas");
const button = document.querySelector("#new-grid");

let n = 16;

button.addEventListener("click", newGrid);


createGrid(n);






function createGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.style.display = "row";
        row.classList.toggle('row');
            for (let i = 0; i < n; i++) {
                const div = document.createElement("div");
                div.style.width = "60px";
                div.style.aspectRatio = "1/1";
                div.style.border = "black solid 1px";
                div.addEventListener("mousemove", bgBlack);
                row.appendChild(div);
            };
        canvas.appendChild(row);
    };
};

function bgBlack(e) {
    e.target.style.backgroundColor = "black";
}

function clearGrid() {
    while (canvas.firstChild){
        canvas.removeChild(canvas.lastChild);
    }
}

function newGrid() {
    n = window.prompt("number of squares per side for the new grid", 16);
    clearGrid();
    createGrid(n);
}