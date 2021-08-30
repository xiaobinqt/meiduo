let vm = new Vue({
    el: "#app",
    delimiters: ['[[', ']]'],
    data: {
        username: "",
        password: "",
        password2: "",
        mobile: "",
        allow: "",

        error_username: false,
        error_password: false,
        error_password2: false,
        error_mobile: false,
        error_allow: false,

        error_username_msg: "",
        error_mobile_msg: ""
    },
    methods: {
        check_username() {
            let re = /^[a-zA-Z0-9-_]{5,20}$/;
            if (re.test(this.username)) {
                this.error_username = false;
            } else {
                this.error_username_msg = '请输入5-20个字符的用户名';
                this.error_username = true;
            }
        },
        check_password() {
            let re = /^[0-9A-Za-z]{8,20}$/;
            if (re.test(this.password)) {
                this.error_password = false;
            } else {
                this.error_password = true;
            }
        },
        check_password2() {
            if (this.password == this.password2) {
                this.error_password2 = false
            } else {
                this.error_password2 = true
            }
        },
        check_mobile() {
            let re = /^1[3-9]\d{9}$/;
            if (re.test(this.mobile)) {
                this.error_mobile = false;
            } else {
                this.error_mobile = true;
                this.error_mobile_msg = "您输入的电话格式不正确"
            }
        },
        check_allow() {
            if (this.allow) {
                this.error_allow = false
            } else {
                this.error_allow = true
            }
        }
    }
})



