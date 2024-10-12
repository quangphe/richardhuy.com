const form_knrh_1_0_0 = `
    <div class="form_knrh_1_0_0__overlay" id="form_knrh_1_0_0__overlay"></div>
    <form class="form_knrh_1_0_0__boxTv form_knrh_1_0_0" id="form_knrh_1_0_0">
        <div class="form_knrh_1_0_0__form" id="regist_ft_1_0_0__form">          
            <div class="form_knrh_1_0_0__pic">
            <img width="802" height="446" src="https://richardhuy.com/wp-content/themes/RichardHuyNew/Module/Popup/form_knrh_1_0_0/images/img-form.jpg" alt="">
                    </div>
                    <b id="close-form">╳</b>
            <div class="form_knrh_1_0_0__title">
                Đặt Lịch TƯ VẤN MIỄN PHÍ cùng <br> TS.BS Richard Huy
            </div>
            <article>
                <div style="display:none">
                    <input id="gclid_field" name="referred" value="">
                    <input id="code_campaign" name="code_campaign" value="415266526">
                    <input id="name_campaign" name="name_campaign" value="[Richard Huy] Tư Vấn">
                    <input id="first_link" name="first_link" value="">
                    <input id="website" name="website" value="">
                    <input id="location" name="location" value="">
                </div>
                <div class="form_knrh_1_0_0__item form-group">
                    <input id="iname" name="iname" type="textbox" placeholder="Họ và tên:">
                    <div class="form-message"></div>
                </div>
                <div class="form_knrh_1_0_0__item form-group">
                    <input id="imob" name="imob" type="textbox" placeholder="Số điện thoại:">
                    <div class="form-message"></div>
                </div>
                <div class="form_knrh_1_0_0__item form-group" style="display:none">
                    <input id="itext" name="itext" type="textbox" placeholder="Ghi chú">
                    <div class="form-message"></div>
                </div>                
                <div class="form_knrh_1_0_0__item form-group">
                    <select name="iservice" id="iservice">
                        <option value="">--- Dịch vụ ---</option>
                        <option value="Cắt mí - Bấm mí">Cắt mí - Bấm mí</option>
                        <option value="Nâng mũi">Nâng mũi</option>
                        <option value="Nâng ngực">Nâng ngực</option>
                        <option value="Giảm mỡ">Giảm mỡ</option>
                        <option value="Hàm mặt">Hàm mặt</option>
                        <option value="Tạo hình môi">Tạo hình môi</option>
                        <option value="Phun xăm">Phun xăm</option>
                        <option value="Trị nám - Tàn nhang">Trị nám - Tàn nhang</option>
                        <option value="Trị mụn - Mụn thịt">Trị mụn - Mụn thịt</option>
                        <option value="Căng da - Cấy mỡ">Căng da - Cấy mỡ</option>
                        <option value="Thẩm mỹ khác">Thẩm mỹ khác</option>
                    </select>
                    <div class="form-message"></div>
                </div>
            
            </article>
            <div class="form_knrh_1_0_0__boxBtn">
                <div class="form_knrh_1_0_0__reg">
                    <input id="form_knrh_1_0_0__clickSent" type="submit" value="Đặt lịch ngay">
                </div>
                <a href="tel:19006466" class="form_knrh_1_0_0__call">
                    Gọi Hotline <br> <span>1900.6466</span>
                </a>
            </div>
        </div>
    </form>
`;

const callBtnForm_1_0_0 = document.querySelectorAll(".dltv");
for (let i = 0; i < callBtnForm_1_0_0.length; i++) {
    callBtnForm_1_0_0[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", form_knrh_1_0_0);
        document.querySelector('.form_knrh_1_0_0 input[name="first_link"]').value = document.URL;
        document.querySelector('.form_knrh_1_0_0 input[name="website"]').value = document.referrer;
        getLocation().then((data) => {
            document.querySelector('.form_knrh_1_0_0 input[name="location"]').value = data.city;            
        });
        // Validate Form
        Validator({
            form: '#form_knrh_1_0_0',
            errorSelector: '.form-message',
            formGroupSelector: '.form-group',
            rules: [
                Validator.isRequired('input[name="imob"]'),
                Validator.isRequired('input[name="iname"]'),
                Validator.isMobile('input[name="imob"]'),
                Validator.isRequired('select[name="iservice"]'),
                Validator.addInput('#form_knrh_1_0_0 #itext', () => {
                    return 'Gửi báo giá dịch vụ: ' + document.querySelector('#form_knrh_1_0_0 #iservice').value;
                }),
            ],
            onSubmit: function (data) {
                console.log(data);
                form_knrh_1_0_0__hideForm();
                sendForm(data, '/dang-ky-thanh-cong');             
            }
        });

        document.getElementById('close-form').addEventListener('click', () => {
            form_knrh_1_0_0__closeForm()
        })
        document.getElementById('form_knrh_1_0_0__overlay').addEventListener('click', () => {
            form_knrh_1_0_0__closeForm()
        })
        window.onclick = function (e) {
            if (e.target == document.querySelector('.form_knrh_1_0_0__boxTv')) {
                form_knrh_1_0_0__closeForm()
            }
        }
        function form_knrh_1_0_0__closeForm(){
            document.getElementById('form_knrh_1_0_0').remove();
            document.getElementById('form_knrh_1_0_0__overlay').remove();
        }
        function form_knrh_1_0_0__hideForm(){
            document.getElementById('form_knrh_1_0_0').style.display = 'none';
            document.getElementById('form_knrh_1_0_0__overlay').style.display = 'none';
        }
    })
}