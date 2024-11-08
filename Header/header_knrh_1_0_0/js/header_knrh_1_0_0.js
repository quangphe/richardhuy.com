// Get API Header
const getHeader = async () => {
    const response = await fetch(`https://richardhuy.com/wp-json/api/v1/menu/`);
    const data = await response.json();
    const headerJSON = data.id_header_knrh_1_0_0_sub1;
    headerData = headerJSON.map((item, index) => {
        const titleMain = item.title.split("\r\n");
        
        let itemCol = '', title = '';

        if (item.col1){
            title = `<li class="header_knrh_1_0_0__head"><span class="header_knrh_1_0_0__back">&#10094;</span>${titleMain[0]}</li>`
            itemCol = title + item.col1.replace(/\n|\r/g, "").replace(/<ul>|\r/g, "").replace(/<\/ul>|\r/g, "");
        } else if (item.subMenu){
            title = `<li class="header_knrh_1_0_0__head"><span class="header_knrh_1_0_0__back">&#10094;</span>${titleMain[0]}</li>`
            item.subMenu.forEach(element => {
                let subTitle = element.subMenuTitle.split("\r\n");
                subTitle = `<a class="link-view" href="${subTitle[1]}">${subTitle[0]} <span class="view">&#10095;</span></a>`
                itemCol += `
                    <li class="header_knrh_1_0_0__dropdownItem">
                        ${subTitle}
                        ${element.col1}
                    </li>
                `;
            });
        } else {
            itemCol = '';
        }
        
        let data = { 
            label: `header_knrh_1_0_0_dropdown-${index + 1}`,
            layout: itemCol 
        }
        
        console.log(data);
        return data;
    });
};
let headerData = [];

getHeader();

const eventPC = () => {
    const header_knrh_1_0_0_elmHover = document.querySelectorAll('.header_knrh_1_0_0__navItem a');
    const header_knrh_1_0_0_elmBg = document.querySelector('.header_knrh_1_0_0__bg');
    for (let i = 0; i < header_knrh_1_0_0_elmHover.length; i++) {
        header_knrh_1_0_0_elmHover[i].addEventListener('mouseover', () => {
            let data = headerData;
            for (let i = 0; i < header_knrh_1_0_0_elmHover.length; i++) {
                const header_knrh_1_0_0_elmId = header_knrh_1_0_0_elmHover[i].getAttribute('data-id');
                if (header_knrh_1_0_0_elmId !== null) {
                    document.getElementById(header_knrh_1_0_0_elmId).innerHTML = '';
                }
            }
            const header_knrh_1_0_0_elmId = header_knrh_1_0_0_elmHover[i].getAttribute('data-id');
            const innerData = data.filter(item => item.label === header_knrh_1_0_0_elmId);
            if (innerData.length > 0) {
                document.getElementById(header_knrh_1_0_0_elmId).innerHTML = innerData[0].layout;
                header_knrh_1_0_0_elmBg.style.display = 'block';
            }
        })
    }
    header_knrh_1_0_0_elmBg.addEventListener('mouseover', () => {
        for (let i = 0; i < header_knrh_1_0_0_elmHover.length; i++) {
            const header_knrh_1_0_0_elmId = header_knrh_1_0_0_elmHover[i].getAttribute('data-id');
            if (header_knrh_1_0_0_elmId !== null) {
                document.getElementById(header_knrh_1_0_0_elmId).innerHTML = '';
                header_knrh_1_0_0_elmBg.style.display = 'none';
            }
        }
    })
}

const eventMB = () => {
    const elmClick = document.querySelectorAll('.header_knrh_1_0_0__navItem a');
    const header_knrh_1_0_0_elmBg = document.querySelector('.header_knrh_1_0_0__bg');
    for (let i = 0; i < elmClick.length; i++) {
        elmClick[i].addEventListener('click', () => {
            let data = headerData;
            for (let i = 0; i < elmClick.length; i++) {
                const header_knrh_1_0_0_elmId = elmClick[i].getAttribute('data-id');
                if (header_knrh_1_0_0_elmId !== null) {
                    document.getElementById(header_knrh_1_0_0_elmId).innerHTML = '';
                }
            }
            const header_knrh_1_0_0_elmId = elmClick[i].getAttribute('data-id');
            const innerData = data.filter(item => item.label === header_knrh_1_0_0_elmId);
            if (innerData.length > 0) {
                document.getElementById(header_knrh_1_0_0_elmId).innerHTML = innerData[0].layout;
            }
            newFuncShowSub();
            reloadPage();
        })
    }
    header_knrh_1_0_0_elmBg.addEventListener('click', () => {
        for (let i = 0; i < elmClick.length; i++) {
            const header_knrh_1_0_0_elmId = elmClick[i].getAttribute('data-id');
            if (header_knrh_1_0_0_elmId !== null) {
                document.getElementById(header_knrh_1_0_0_elmId).innerHTML = '';
                header_knrh_1_0_0_elmBg.style.display = 'none';
                document.querySelector('.header_knrh_1_0_0__bottom').classList.remove('show');
                document.body.classList.remove('fixed-body');
                const elmDown = document.querySelectorAll('.header_knrh_1_0_0__dropdown');
                for (let i = 0; i < elmDown.length; i++) {
                    elmDown[i].classList.remove('show');
                }
            }
        }
    })

    document.querySelector('.header_knrh_1_0_0__button').addEventListener('click', () => {
        document.querySelector('.header_knrh_1_0_0__bottom').classList.add('show');
        header_knrh_1_0_0_elmBg.style.display = 'block';
        document.body.classList.add('fixed-body')
        const elmClickDown = document.querySelectorAll('.header_knrh_1_0_0__bottom.show .header_knrh_1_0_0__navItem a');
        for (let i = 0; i < elmClickDown.length; i++) {
            elmClickDown[i].addEventListener('click', () => {
                const idElm = elmClickDown[i].getAttribute('data-id')
                const elmById = document.querySelector(`#${idElm}`)
                if (elmById) {
                    elmById.classList.add('show');
                    const elmClickBack = document.querySelector('.header_knrh_1_0_0__bottom.show .header_knrh_1_0_0__dropdown.show .header_knrh_1_0_0__back');
                    elmClickBack.addEventListener('click', () => {
                        elmById.classList.remove('show');
                    })
                }
            })
        }
    });
    document.querySelector('.header_knrh_1_0_0__close').addEventListener('click', () => {
        document.querySelector('.header_knrh_1_0_0__bottom').classList.remove('show');
        header_knrh_1_0_0_elmBg.style.display = 'none';
        document.body.classList.remove('fixed-body');
        const elmDown = document.querySelectorAll('.header_knrh_1_0_0__dropdown');
        for (let i = 0; i < elmDown.length; i++) {
            elmDown[i].classList.remove('show');
        }
    });
    const newFuncShowSub = () => {
        const elmLocationSub = document.querySelectorAll('.header_knrh_1_0_0__dropdownMain .link-view');
        for (let i = 0; i < elmLocationSub.length; i++) {
            elmLocationSub[i].addEventListener('click', (e) => {
                const elmCallSub = elmLocationSub[i].querySelector('.header_knrh_1_0_0__dropdownMain .view')
                if (elmCallSub.contains(e.target)) {
                    e.preventDefault();
                    elmLocationSub[i].parentElement.querySelector('.header_knrh_1_0_0__dropdownSub').classList.add('show');
                } else {

                }

            })
        }
        const newbtn = document.querySelectorAll('.header_knrh_1_0_0__dropdownSub .header_knrh_1_0_0__back');
        for (let i = 0; i < newbtn.length; i++) {
            newbtn[i].addEventListener('click', (e) => {
                newbtn[i].parentElement.parentElement.classList.remove('show')
            })
        }
    }
    const reloadPage = () => {
        const elms = document.querySelectorAll('.click-reload');
        for (let i = 0; i < elms.length; i++) {
            elms[i].addEventListener('click', () => {
                header_knrh_1_0_0_elmBg.style.display = 'none';
                document.querySelector('.header_knrh_1_0_0__bottom').classList.remove('show');
                document.body.classList.remove('fixed-body');
                const elmDown = document.querySelectorAll('.header_knrh_1_0_0__dropdown');
                for (let i = 0; i < elmDown.length; i++) {
                    elmDown[i].classList.remove('show');
                }
            })
        }
    }
}

const resizeHeader = () => {
    if (window.innerWidth < 1025) {
        eventMB()
    } else {
        eventPC()
    }
}
resizeHeader();