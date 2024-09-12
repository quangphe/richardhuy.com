const eventPC = (data) => {
    const header_knrh_1_0_0_elmHover = document.querySelectorAll('.header_knrh_1_0_0__navItem a');
    const header_knrh_1_0_0_elmBg = document.querySelector('.header_knrh_1_0_0__bg');
    for(let i = 0; i < header_knrh_1_0_0_elmHover.length; i++){
        header_knrh_1_0_0_elmHover[i].addEventListener('mouseover', () => {
            for(let i = 0; i < header_knrh_1_0_0_elmHover.length; i++){
                const header_knrh_1_0_0_elmId = header_knrh_1_0_0_elmHover[i].getAttribute('data-id');
                if(header_knrh_1_0_0_elmId !== null){
                    document.getElementById(header_knrh_1_0_0_elmId).innerHTML = '';
                }
            }
            const header_knrh_1_0_0_elmId = header_knrh_1_0_0_elmHover[i].getAttribute('data-id');
            const innerData = data.filter(item => item.label === header_knrh_1_0_0_elmId);
            if(innerData.length > 0){
                document.getElementById(header_knrh_1_0_0_elmId).innerHTML = innerData[0].layout;
                header_knrh_1_0_0_elmBg.style.display = 'block';
            }
        })
    }
    header_knrh_1_0_0_elmBg.addEventListener('mouseover', () => {
        for(let i = 0; i < header_knrh_1_0_0_elmHover.length; i++){
            const header_knrh_1_0_0_elmId = header_knrh_1_0_0_elmHover[i].getAttribute('data-id');
            if(header_knrh_1_0_0_elmId !== null){
                document.getElementById(header_knrh_1_0_0_elmId).innerHTML = '';
                header_knrh_1_0_0_elmBg.style.display = 'none';
            }
        }
    })
}

const eventMB = (data) => {
    const elmClick = document.querySelectorAll('.header_knrh_1_0_0__navItem a');
    const header_knrh_1_0_0_elmBg = document.querySelector('.header_knrh_1_0_0__bg');
    for(let i = 0; i < elmClick.length; i++){
        elmClick[i].addEventListener('click', () => {
            for(let i = 0; i < elmClick.length; i++){
                const header_knrh_1_0_0_elmId = elmClick[i].getAttribute('data-id');
                if(header_knrh_1_0_0_elmId !== null){
                    document.getElementById(header_knrh_1_0_0_elmId).innerHTML = '';
                }
            }
            const header_knrh_1_0_0_elmId = elmClick[i].getAttribute('data-id');
            const innerData = data.filter(item => item.label === header_knrh_1_0_0_elmId);
            if(innerData.length > 0){
                document.getElementById(header_knrh_1_0_0_elmId).innerHTML = innerData[0].layout;
            }
            newFuncShowSub();
            reloadPage();
        })
    }
    header_knrh_1_0_0_elmBg.addEventListener('click', () => {
        for(let i = 0; i < elmClick.length; i++){
            const header_knrh_1_0_0_elmId = elmClick[i].getAttribute('data-id');
            if(header_knrh_1_0_0_elmId !== null){
                document.getElementById(header_knrh_1_0_0_elmId).innerHTML = '';
                header_knrh_1_0_0_elmBg.style.display = 'none';
                document.querySelector('.header_knrh_1_0_0__bottom').classList.remove('show');
                document.body.classList.remove('fixed-body');
                const elmDown = document.querySelectorAll('.header_knrh_1_0_0__dropdown');
                for(let i = 0; i < elmDown.length; i++){
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
        for(let i = 0; i < elmClickDown.length; i++){
            elmClickDown[i].addEventListener('click', () => {
                const idElm = elmClickDown[i].getAttribute('data-id')
                const elmById = document.querySelector(`#${idElm}`)
                if(elmById){
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
        for(let i = 0; i < elmDown.length; i++){
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
        for (let i = 0; i < elms.length; i++){
            elms[i].addEventListener('click', () => {
                header_knrh_1_0_0_elmBg.style.display = 'none';
                document.querySelector('.header_knrh_1_0_0__bottom').classList.remove('show');
                document.body.classList.remove('fixed-body');
                const elmDown = document.querySelectorAll('.header_knrh_1_0_0__dropdown');
                for(let i = 0; i < elmDown.length; i++){
                    elmDown[i].classList.remove('show');
                }
            })
        }
    }
}

const resizeHeader = (data) => {
    if (window.innerWidth < 1025) {
        eventMB(data)
    } else {
        eventPC(data)
    }
}
resizeHeader(header_knrh_1_0_0_data);
