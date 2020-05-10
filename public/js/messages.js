const div = document.querySelector('.message-warning');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    div.remove();
})