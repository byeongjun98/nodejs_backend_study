const sendNum = () => {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("numarea").innerText = token
    document.getElementById("numarea").style.color = "#" + token
}


// rgb 랜덤 구현 시도
// function makeRandomColor() {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r},${g},${b})`;
// }

// const changeTextColor = () => {
//     const randomColor = makeRandomColor();
//     colorText.innerText = randomColor;
//     document.getElementById("numarea").style.color = randomColor;
// }
