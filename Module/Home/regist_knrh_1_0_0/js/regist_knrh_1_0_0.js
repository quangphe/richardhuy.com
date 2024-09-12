document.addEventListener('DOMContentLoaded', () => {
    const regist_knrh_1_0_0 = document.querySelector("#regist_knrh_1_0_0__clickSent");   
    if (regist_knrh_1_0_0) { // Kiểm tra xem phần tử có tồn tại không
        regist_knrh_1_0_0.addEventListener('click', () => {
            document.querySelector('.regist_knrh_1_0_0 input[name="first_link"]').value = document.URL;
            document.querySelector('.regist_knrh_1_0_0 input[name="website"]').value = document.referrer;
            getLocation().then((data) => {
                document.querySelector('.regist_knrh_1_0_0 input[name="location"]').value = data.city;            
            });
            // Validate Form
            Validator({
                form: '#regist_knrh_1_0_0',
                errorSelector: '.form-message',
                formGroupSelector: '.form-group',
                rules: [
                    Validator.isRequired('input[name="imob"]'),
                    Validator.isRequired('input[name="iname"]'),
                    Validator.isMobile('input[name="imob"]'),
                    Validator.isRequired('select[name="iservice"]'),
                    Validator.addInput('#regist_knrh_1_0_0 input[name="itext"]', () => {
                        return 'Tư vấn dịch vụ: ' + document.querySelector('#regist_knrh_1_0_0 select[name="iservice"]').value;
                    }),
                ],
                onSubmit: function (data) {
                    console.log(data);
                    regist_knrh_1_0_0__hideForm();
                    // sendForm(data, '/dang-ky-thanh-cong');             
                }
            });
        });
    }
});