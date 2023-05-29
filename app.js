const getcolor = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    document.getElementById("heading").innerText = "#" + randomNum.toString(16);
    const randomcode = "#" + randomNum.toString(16);
    document.body.style.backgroundColor = randomcode;
    console.log(randomNum);
}

document.getElementById("btn").addEventListener(
    "click", getcolor
)

getcolor();

