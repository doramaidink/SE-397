//js cho nut đăng kí/ đăng nhập

// gán danh sách các nút ấn 
// Dùng All khi muốn lấy nhiều phần tử có cùng selector
// Khi chỉ cần lấy 1 phần tử duy nhất kh cần dùng all
// ngắn gọn thì dùng all khi sử dụng tập con kh dùng all khi dùng nguyên lớp cha
const buybtns = document.querySelectorAll('.heading-2 button ')
const modal = document.querySelector('.modal')
const modaldangki = document.querySelector('.modal-dangki')
const modalclose = document.querySelectorAll('.modal-close')
// tạo hàm: function;
// cũng có thể gọp lại và làm như close
function showmodal(){
   modal.classList.add('open')
}
function showmodaldangki(){
    modaldangki.classList.add('open')
 }
 // hàm sự kiện khi ấn close
function closemoda(){
    modal.classList.remove('open')
    modaldangki.classList.remove('open')
 }
 // gán sự kiện khi click vào nút đăng kí - đăng nhậpnhập
buybtns[0].addEventListener('click', () => showmodaldangki());
buybtns[1].addEventListener('click', () => showmodal());
// gán sự kiện khi click vào các nút đóng 
modalclose.forEach(button => {
    button.addEventListener('click', closemoda);
})




//gọi đến tuừng nút trong các nút buybtn = 1 th buybtns = danh sách các nút dùng để mở 1 cửa sổ cho tất cả các nútnút
// for( const buybtn of buybtns ){
//    buybtn.addEventListener('click', showmodal) //từng thằng trong danh sách nút ấn sẽ nghe khi click vào sẽ show th hàm rara
// }