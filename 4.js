// sự kiện click vào user
const buyuser = document.querySelectorAll('.heading-user')
const modaltk = document.querySelector('.modal-tk')
const modalclose = document.querySelectorAll('.modal-close')
const Xem = document.querySelectorAll('.modal-content button');
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
modalclose.forEach(button => {
    button.addEventListener('click', closemodal);
})
Xem[0].addEventListener('click', () => {
    window.location.href = 'indexxemtk.html';
});
Xem[1].addEventListener('click', () => {
    window.location.href = 'indexxemtk.html';
});
Xem[2].addEventListener('click', () => {
    window.location.href = 'kiemduyet.html';
});