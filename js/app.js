const box = document.querySelectorAll(".box");
box.forEach(box => {
    box.addEventListener("click", () => {
       box.classList.toggle("acordion-active");
    });
});

document.querySelector('.icon-burger').addEventListener('click', () =>{
    document.querySelector('.ul').classList.toggle('menu-active');
});