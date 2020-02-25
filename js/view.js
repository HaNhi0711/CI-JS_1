const view = {

};
const RegExpCheck = {};
RegExpCheck.Uppercase = /.*[A-Z].*/;
RegExpCheck.Number = /.*[0-9].*/

view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'register':
            document.getElementById('app').innerHTML = components.register;
            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', e => {
                e.preventDefault();
                const registerInfo = {
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmpassword: registerForm.confirmPassword.value
                };
                // if(controller.validateForm(registerInfo)){
                //     view.setActiveScreen('login');
                //     view.setValInput('email',registerInfo.email);
                // }
                // Swal.fire('SignUp successful!');
                controller.validateForm(registerInfo);


            });
            break;
        case 'login':
            document.getElementById('app').innerHTML = components.login;
            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', e => {
                e.preventDefault();
                const loginInfo = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                };
               controller.login(loginInfo);
            });
                break;
        case 'chat':

            document.getElementById('app').innerHTML = `
                <div>Id: ${model.authUser.uid}</div>
                <div>Email: ${model.authUser.email}</div>
            `;
            break;
    }

};

    view.setError = (id, textError) => {
        document.getElementById(id).innerHTML = textError;
    }

    view.setErrorArray = (id, textErrorArray) => {
        let textError = '';
        textErrorArray.forEach(e => {
            textError += e + '</br>';
        });
        document.getElementById(id).innerHTML = textError;
    };

