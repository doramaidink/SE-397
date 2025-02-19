//js cho chuyển động ảnh

const listImage = document.querySelector('.slider-1'); // gán class slider là listimage
const imgs = document.querySelectorAll('.slider-1 img');// gans toàn bộ thẻ img trong slider 
const length = imgs.length;
let current = 0;// gán để khi chạy được số lần= tổng số ảnh của slider thì có thể quay lại (hàng 8-1111)

setInterval(() => {
    if (current === length - 1) {  // bằng thằng cuối cùng của ảnh thì quay lại tấm đầuđầu
        current = 0;
        listImage.style.transform = `translateX(0px)`;
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+current).classList.add('active')
    } else {
        current++;
        let width = imgs[0].offsetWidth; // đọc lại chiều rộng cứ sau 4s4s
        listImage.style.transform = `translateX(${-width * current}px)`; // lấy chiều ngang của ảnh đầu * với số cần di chuyển là cứ 4s nó di chuyển với chiều ngang bằng số lượng nhânnhân Lưu ý là dấu huyền ` not ngoặc ''
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+current).classList.add('active')
    }
}, 4000);// di chuyển sau 4s