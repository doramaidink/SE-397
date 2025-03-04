const buyuser = document.querySelectorAll('.heading-user')
const modaltk = document.querySelector('.modal-tk')
function showmodaltk(){
    modaltk.classList.add('open')
}
function closemodal(){
   modaltk.classList.remove('open')
}
for(const buyuse of buyuser){
    buyuse.addEventListener('click',showmodaltk)
}
modalclose.forEach(button => {
    button.addEventListener('click', closemodal);
})