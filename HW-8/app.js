const addCloseBtn = document.getElementById('addCloseBtn');
const messages = document.querySelectorAll(".message");

addCloseBtn.addEventListener('click', () => {
    messages.forEach(item => {
        const close = document.createElement("span");
        close.textContent = "X"
        close.classList.add('close');
        close.addEventListener('click', () => {
            item.remove();
        });
        item.querySelector(".message__header").append(close);
    });
});