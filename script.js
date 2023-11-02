const canvas = document.querySelector("#canvas");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.style.display = "row";
    row.classList.toggle('row');
        for (let i = 0; i < 16; i++) {
            const div = document.createElement("div");
            div.style.width = "60px";
            div.style.height = "60px";
            div.style.border = "black solid 1px";
            row.appendChild(div);
        };
    canvas.appendChild(row);
};
