function getRandomColor() {
    // const letters = '0123456789ABCDEF';
    // let color = '#';
    // for (let i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    // }
    // return color;

    let v1 = Math.ceil( Math.random() * 256)
    let v2 = Math.ceil(Math.random() * 256)
    let v3 = Math.ceil(Math.random() * 256)

    return `rgb(${v1},${v2},${v3})`
}

function applyRandomColors() {
    for (let i = 1; i <= 5; i++) {
        const box = document.getElementById(`box${i}`);
        const randomColor = getRandomColor();
        const randomBackgroundColor = getRandomColor();
        box.style.color = randomColor;
        box.style.backgroundColor = randomBackgroundColor;
    }
}

window.onload = applyRandomColors;
