//js dành cho các nút dowm

const listtheloai = document.querySelector('.heading-1');
const down = document.querySelector('.down img');
down.addEventListener('click', () => {
    listtheloai.classList.toggle('open'); // cách hoạt động của toggle thêm class nếu đã có và xóa nếu chưa cócó
});
