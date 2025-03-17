
function setActive(clickedButton) {
    // Xóa class 'active' khỏi tất cả nút
    document.querySelectorAll('.btn-list').forEach(button => button.classList.remove('active'));
    // Thêm class 'active' cho nút được click
    clickedButton.classList.add('active');
}