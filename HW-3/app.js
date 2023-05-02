const list = document.getElementById('list');

while (true) {
    input = prompt('for exit enter nothing or press Esc');
    if (input === null || input === "")
        break;

    list.append(createElement(input));
}

function createElement(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
}


 




