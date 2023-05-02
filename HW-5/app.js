const clear = (elem) => {
    // elem.innerHTML = null;

    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}

document.getElementById('btn').addEventListener('click', () => {
    clear(elem);
});
