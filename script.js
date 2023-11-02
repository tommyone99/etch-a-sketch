const canvas = document.querySelector("#canvas");

for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.style.width = "60px";
    div.style.height = "60px";
    div.style.border = "black solid 1px";
    canvas.appendChild(div);
};