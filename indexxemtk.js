const btnlist = document.querySelectorAll('.img-list');
const modal = document.querySelector('.modal-tk');
const btnclose = document.querySelectorAll('.modal-close');
function showmodal(){
    modal.classList.add('open') 
}
function closemodal(){
    modal.classList.remove('open')
}
for(const btnlists of btnlist){
    btnlists.addEventListener('click',showmodal)
}
btnclose.forEach(button => {
    button.addEventListener('click', closemodal);
})