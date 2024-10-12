document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelector('.screen3__box');
    const items = document.querySelectorAll('.screen3__item');
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots');
    let currentIndex = 0;
    let slideInterval;

    // Tạo các dots
    items.forEach((item, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    box.parentNode.appendChild(dotsContainer);

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        const offset = -currentIndex * 100; // Tính offset
        items.forEach(item => {
            item.style.transform = `translateX(${offset}%)`;
        });
        updateDots();
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % items.length; // Chuyển đến slide tiếp theo
        goToSlide(currentIndex);
    }

    function startAutoSlide() {
        slideInterval = setInterval(autoSlide, 5000); // 5000 ms = 5 giây
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    function checkWidth() {
        if (window.innerWidth <= 430) {
            goToSlide(0); // Reset về slide đầu tiên
            updateDots();
            startAutoSlide(); // Bắt đầu tự động chuyển slide
        } else {
            // Nếu lớn hơn 430px, hủy bỏ slide (hiển thị tất cả)
            items.forEach(item => {
                item.style.transform = 'translateX(0)';
            });
            dotsContainer.style.display = 'none'; // Ẩn dots
            stopAutoSlide(); // Dừng tự động chuyển slide
        }
    }

    // Kiểm tra kích thước màn hình khi tải trang
    checkWidth();

    // Kiểm tra kích thước màn hình khi thay đổi kích thước
    window.addEventListener('resize', checkWidth);
});