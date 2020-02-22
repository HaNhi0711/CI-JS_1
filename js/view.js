const view = {
    
};
view.setActiveScreen = (screenName) => {
    switch(screenName) {
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
                if(controller.validateForm(registerInfo)){
                    view.setActiveScreen('login');
                    view.setValInput('email',registerInfo.email);
                }
                   
                
            });
            break;
        case 'login':
            document.getElementById('app').innerHTML = components.login;
            break;
    }
};

view.setError = (id, textError)=> {
    document.getElementById(id).innerHTML = textError;
}

view.setErrorArray = (id, textErrorArray)=> {
    let textError = '';
    textErrorArray.forEach(e => {
        textError += e + '</br>';
    });
    document.getElementById(id).innerHTML = textError;
}

view.setValInput = (name,val) =>{
    document.getElementsByName(name)[0].value = val;
}
