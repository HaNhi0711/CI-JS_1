const controller = {};
controller.validateForm = async registerInfo => {
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
        // passwordErrorArray.push('Password không được bỏ trống!');
        view.setError('password-error', 'Password không được bỏ trống!');
        check = false;
    }
    if(!(registerInfo.password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{6,12})/)))
    {
        passwordErrorArray.push('Password phải có độ dài từ 6 đến 12 ký tự');
        passwordErrorArray.push('Password phải có chữ in hoa');
        passwordErrorArray.push('Password phải có số và kí tự đặc biệt');
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
            // view.setValInputA('confirmpassword-input', '');
        }
        else 
            view.setError('confirmpassword-error', '');
             check = false;
    }
    else {
        view.setError('confirmpassword-error', '');
      }
    
    // return check;
    // if(
    //     !!registerInfo.email &&
    //     !!registerInfo.password &&
    //     !!registerInfo.confirmpassword && 
    //     registerInfo.confirmpassword === registerInfo.password
    // ) {
        if(check){
        //Đăng ký người dùng
        //Hàm đăng ký, truyền vào 2 tham số Email và Password
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(registerInfo.email, registerInfo.password);
            await firebase.auth().currentUser.sendEmailVerification();
            Swal.fire({
                title: 'Thông Báo',
                html: 'Đăng ký thành công!',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false
            });
            setTimeout(()=>
            {
                view.setActiveScreen('login');
            },2000);
            
            console.log(user);
        } catch (error)  {
            console.log(error)
            view.setError('form-error', error.message);
            
        }
    };

   
    
      
};

controller.login = async loginForm => {
    //1. Validate Form
    //2. Sign in Firebase
    if(!!loginForm.email && !!loginForm.password) {
        try {
            //2.a Gọi hàm sigin firebase
            const loginResult = await firebase.auth().signInWithEmailAndPassword(loginForm.email, loginForm.password);
            console.log(loginResult);

            //2.b Kiểm tra người dùng đã xác nhận mail chưa, nếu chưa thì tb ra
            if(!loginResult.user.emailVerified) {
                view.setError('form-error', 'You need to verify your email');
            } else {
                //2.c Thực hiện lưu dữ liệu
                console.log(loginResult.user);
                model.loginSuccess({
                    uid: loginResult.user.uid,
                    email: loginResult.user.email
                });
                Swal.fire({
                    title: 'Thông Báo',
                    html: 'Đăng nhập thành công!',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false
                });
                setTimeout(()=>
                {
                    view.setActiveScreen('chat');
                },2000);
            }
        } catch(error) {
            console.log(error);
            view.setError('form-error', error.message);
        }
    }
};