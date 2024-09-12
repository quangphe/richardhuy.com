const queryCertificate_knrh_1_0_0 = async () => {
    const response = await fetch('https://noisoidrgiang.com/wp-json/wp/v2/pages/124');
    const data = await response.json();
    const dataAcfLayout = data.acf.group_page_field.body_custom;
    const dataAfcLayoutFilter = dataAcfLayout.filter(item => {
        return item.acf_fc_layout === "certificate_knrh_1_0_0";
    });
    const datacertificate_knrh_1_0_0 = [];
    dataAfcLayoutFilter[0].list.forEach(item => {
        const splitData = item.content.split('\r\n');
        const itemcertificate_knrh_1_0_0 = {
            alt: splitData[0],
            image: splitData[1],
            link: splitData[2]
        };
        datacertificate_knrh_1_0_0.push(itemcertificate_knrh_1_0_0);
    });
    return datacertificate_knrh_1_0_0;
};

const renderCertificate_knrh_1_0_0 = async () => {
    const datacertificate_knrh_1_0_0 = await queryCertificate_knrh_1_0_0();
    const doubledDatacertificate_knrh_1_0_0 = datacertificate_knrh_1_0_0.concat(datacertificate_knrh_1_0_0)
    const html = doubledDatacertificate_knrh_1_0_0.map(item => `<a class="certificate_knrh_1_0_0__item" href="${item.link}" title="${item.alt}"><img src="${item.image}" alt="${item.alt}"></a>`).join('')
    document.querySelector('.certificate_knrh_1_0_0__track').innerHTML = html;

    // Start the animation
    animateSlider();
}

const slideTrack = document.querySelector('.certificate_knrh_1_0_0__track');
let currentPosition = 0;
let isRunning = false;

function animateSlider() {
    const slides = Array.from(document.querySelectorAll('.certificate_knrh_1_0_0__item'));
    const slideWidth = slides[0].offsetWidth;
    currentPosition -= 1; // Speed of the slider

    // Reset position if it reaches the end of the first set of slides
    if (currentPosition <= -slideWidth * (slides.length / 2) + 250) {
        currentPosition = 0;
    }

    slideTrack.style.transform = `translateX(${currentPosition}px)`;
    if (!isRunning) {
        requestAnimationFrame(animateSlider);
    }
}
slideTrack.addEventListener('mouseover', () => { 
    isRunning = true;
 });
slideTrack.addEventListener('mouseleave', () => {
    isRunning = false;
    requestAnimationFrame(animateSlider);
});


renderCertificate_knrh_1_0_0();