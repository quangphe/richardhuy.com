// Slider Screen3
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
        items.forEach((item, idx) => {
            item.style.display = idx === currentIndex ? 'block' : 'none'; // Hiển thị item tương ứng
            item.style.transform = `translateX(${(idx - currentIndex) * 100}%)`; // Dịch chuyển
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
            // Hiển thị chỉ hình ảnh đầu tiên
            items.forEach((item, index) => {
                item.style.display = index === 0 ? 'block' : 'none';
            });
            goToSlide(0); // Reset về slide đầu tiên
            updateDots();
            startAutoSlide(); // Bắt đầu tự động chuyển slide
        } else {
            // Nếu lớn hơn 430px, hiển thị tất cả
            items.forEach(item => {
                item.style.display = 'block'; // Đảm bảo tất cả đều hiển thị
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

// Slider Screen4 
let url = ''
const dataSlide1 = [
    {
        "image": `https://richardhuy.com/en/cp/dich-vu/tham-my-mui/media/images/nangmui-11.jpg`
    },
    {
        "image": `https://richardhuy.com/en/cp/dich-vu/tham-my-mui/media/images/nangmui-12.jpg`
    },
    {
        "image": `https://richardhuy.com/en/cp/dich-vu/tham-my-mui/media/images/nangmui-13.jpg`
    },
    {
        "image": `https://richardhuy.com/en/cp/dich-vu/tham-my-mui/media/images/nangmui-14.jpg`
    },
    {
        "image": `https://richardhuy.com/en/cp/dich-vu/tham-my-mui/media/images/nangmui-15.jpg`
    },
    {
        "image": `https://richardhuy.com/en/cp/dich-vu/tham-my-mui/media/images/nangmui-16.jpg`
    },
];
const modalPop = (link) => {
    return `
      <div class="modal" id="modal-pic" style="display:flex">
          <div class="modal-closePic">×</div>
          <div class="modal-bg"></div>
          <div class="modal-box modal-box-img animate-zoom">
              <div class="modal-pic" style="text-align:center">
                    <div class="slider"></div>
                <div class="slider__control">
                    <button class="slider__arrow slider__arrow--prev">❮</button>
                    <button class="slider__arrow slider__arrow--next">❯</button>
                </div>
              </div>
          </div>
      </div>
    `;
};

function popupPhoto(data, index){
    document.querySelector('#modal').innerHTML = modalPop();
    createSlider(data, index);
    document.querySelector('.modal-closePic').addEventListener('click', () => {
        document.querySelector('#modal').innerHTML = '';
    });
    document.querySelector('.modal-bg').addEventListener('click', () => {
        document.querySelector('#modal').innerHTML = '';
    });
}


// compoinent slide
const slideCard = (data) => {
    return `
        <div class="slider__item ">
            <img class="slider__image" src="${data.image}" alt="">
        </div>
    `;
};


function createSlider(data, index){
    for(let i = 0; i < data.length; i++){
        let slider = document.querySelector('.slider');
        if(i < 2){
            slider.innerHTML += slideCard(data[index]);
        }
        if (index == data.length-1){
            index = 0;
        } else {
            index ++;
        }
    }
    
    const btnNext = document.getElementsByClassName('slider__arrow--next');
    const btnPrev = document.getElementsByClassName('slider__arrow--prev');
    const img = document.getElementsByClassName('slider__image');
    const text = document.getElementsByClassName('slider__text');
    let i = 0;
    btnNext[0].addEventListener("click", function () {
        plusDivs(1);
        i++;
        for (let x = 0; x < img.length; x++) {
            if (i >= data.length) {
                i = 0;
            }
            img[x].setAttribute('src', data[i].image);
        }
    
    });
    btnPrev[0].addEventListener('click', function () {
        plusDivs(-1);
        i--;
        for (let x = 0; x < img.length; x++) {
            if (i <= -1) {
                i = data.length - 1;
            }
            img[x].setAttribute('src', data[i].image);
            text[x].innerText = data[i].text;
        }
    })
    let slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
        let i;
        let x = document.getElementsByClassName("slider__item");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }
}