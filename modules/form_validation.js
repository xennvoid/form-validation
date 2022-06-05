const formValidation = {

    checkLogin: function (login) {
        return /w+/.test(login);
    },
    
    confirmPassword: function (password,confirm_pass) {
        return password == confirm_pass;
    },
    
    checkEmail: function (email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    },

}

export default formValidation;