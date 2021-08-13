let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C",
    "D", "E", "F"];
const color = document.querySelector(".color");
var closebtns = document.getElementsByClassName("close");

addToDoButton.addEventListener('click', function(){
    if (inputField.value === "") {
        alert("The field is empty.")
    } else {
        let paragraph = document.createElement('p');
        let button = document.createElement('b');
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];
        }
        paragraph.style.color = hexColor
        paragraph.classList.add('paragraph-styling');
        button.classList.add('close');
        button.innerText = "x";
        paragraph.innerText = inputField.value;
        let x = inputField.value;
        toDoContainer.appendChild(paragraph);
        toDoContainer.appendChild(button);
        inputField.value = "";
        paragraph.addEventListener('click', function () {
            if (paragraph.innerText.includes(" ✔")) {
                paragraph.innerText = x;
                paragraph.style.backgroundColor = "white"
            } else {
                paragraph.innerText += " ✔"
                paragraph.style.backgroundColor = "#d6f7a8"
            }
        })
        button.addEventListener('click', function () {
            toDoContainer.removeChild(paragraph);
            toDoContainer.removeChild(button);
        })
    }
})

inputField.addEventListener('keydown', (e)=> {
    if (e.code === "Enter"){
        if (inputField.value === "") {
            alert("The field is empty.")
        }else {
            let paragraph = document.createElement('p');
            let button = document.createElement('b');
            let hexColor = '#';
            for (let i = 0; i < 6; i++) {
                hexColor += hex[getRandomNumber()];
            }
            paragraph.style.color = hexColor
            paragraph.classList.add('paragraph-styling');
            button.classList.add('close');
            button.innerText = "x";
            paragraph.innerText = inputField.value;
            let x = inputField.value;
            toDoContainer.appendChild(paragraph);
            toDoContainer.appendChild(button);
            inputField.value = "";
            paragraph.addEventListener('click', function () {
                if (paragraph.innerText.includes(" ✔")) {
                    paragraph.innerText = x;
                    paragraph.style.backgroundColor = "white"
                } else {
                    paragraph.innerText += " ✔"
                    paragraph.style.backgroundColor = "#d6f7a8"
                }
            })
            button.addEventListener('click', function () {
                toDoContainer.removeChild(paragraph);
                toDoContainer.removeChild(button);
            })
        }

    }
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}


