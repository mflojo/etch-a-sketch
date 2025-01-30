document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const button = document.querySelector("#button");
    const body = document.querySelector("body");
    const wrapper = document.querySelector("#wrapper");
    const maxSize = 100;
    const containerSize = 800

    function createGrid(gridSize) {
        container.innerHTML = "";

        body.style.display = "flex";
        body.style.flexDirection = "column";
        body.style.justifyContent = "center";
        body.style.alignItems = "center"
        body.style.height = "100vh";
        body.style.margin = "0";
        body.style.backgroundColor = "rgb(17 24 39)";
        body.style.fontFamily = "Courier";

        wrapper.style.backgroundColor = "lightgrey";
        wrapper.style.padding = "25px"
        wrapper.style.display = "flex";
        wrapper.style.flexDirection = "column";
        wrapper.style.justifyContent = "center";
        wrapper.style.alignItems = "center";
        wrapper.style.gap = "10px";
        wrapper.style.borderRadius = "10px"

        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.width = `${containerSize}px`;
        container.style.height = `${containerSize}px`;
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        container.style.backgroundColor = "lightgrey";

        const boxSize = `${containerSize / gridSize}px`;

        for (let i=0; i<gridSize*gridSize; i++) {
            const box = document.createElement("div");
            box.style.width = boxSize;
            box.style.height = boxSize;
            box.style.border = "1px solid black";
            box.style.boxSizing = "border-box";
    
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "blue";
            })
    
            container.appendChild(box);
        }
    }

    button.addEventListener("click", () => {
        let newSize = prompt("Enter new grid size (1-100 only):", "16");

        if (newSize !== null) {
            newSize = parseInt(newSize);

            if (isNaN(newSize) || newSize < 1 || newSize > maxSize) {
                alert("Grid can only be from 1-100 in size.");
            } else {
                createGrid(newSize);
            }
        }
    })

    createGrid(16);
   
});
