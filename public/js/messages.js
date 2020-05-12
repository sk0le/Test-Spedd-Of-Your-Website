const closeBtn = document.querySelector('.close');
let i;

for(i = 0; i < closeBtn.length; i++ ) {
    closeBtn[i].onclick = () => {
        const div = closeBtn.parentElement;
    
        div.style.opacity = 0;
    }
}