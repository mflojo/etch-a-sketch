document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const body = document.querySelector("body");
    const gridSize = 16;
    const boxSize = `calc(100% / ${gridSize})`;

    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center"
    body.style.height = "100vh";
    body.style.margin = "0";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "800px";
    container.style.height = "800px"
    container.style.justifyContent = "center";
    container.style.alignItems = "center"

    for (let i=0; i<gridSize*gridSize; i++) {
        const box = document.createElement("div");
        box.style.width = boxSize;
        box.style.height = boxSize;
        box.style.border = "1px solid black";
        box.style.boxSizing = "border-box";
        container.appendChild(box);
    }
});
