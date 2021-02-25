
//a function that gets rid of the preloader

window.addEventListener('load' , () =>{
const loader = document.querySelector ('.loader');
loader.classList.add('load-finish');
});