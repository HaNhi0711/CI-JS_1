const controller = {};
controller.validateForm = registerInfo => {
    let check = true;
    if (!registerInfo.email) {
        view.setError('email-erro', 'Email không được bỏ trống!');
        check = false;
    }
    else {
        view.setError('email-erro', '');
    }

    let passwordErrorArray = [];
    if (!registerInfo.password) {
        passwordErrorArray.push('Password không được bỏ trống!');
        // view.setError('password-error', 'Password không được bỏ trống!');
        check = false;
    }
    if(!(registerInfo.password.length >= 6 && registerInfo.password.length <= 12))
    {
        passwordErrorArray.push('Password phải có độ dài từ 6 đến 12 ký tự');
        // view.setError('password-error', 'Password phải có độ dài từ 6 đến 12 ký tự');
        check = false;
    }
    view.setErrorArray('password-error',passwordErrorArray)
    // else {
    //     view.setError('password-error', '');
    // }

    if (registerInfo.confirmpassword !== registerInfo.password) {
        if(registerInfo.confirmpassword)
        {
            view.setError('confirmpassword-error', 'Mật khẩu không khớp!');
            view.setValInputA('confirmpassword-input', '');
        }
        else 
            view.setError('confirmpassword-error', '');
        check = false;
    }
    else {
        view.setError('confirmpassword-error', '');
      }
    
    return check;
}