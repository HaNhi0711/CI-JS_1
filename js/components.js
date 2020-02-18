const components = {

};
components.register = `<div><h1>Register Screen</h1></div>`;

components.login = `<div><h1>Login Screen</h1></div>`;


// const signUpForm = document.getElementById('form-signup')
// const signInForm = document.getElementById('form-signin')
// const url = "http://5dc6a9cb317717001434f796.mockapi.io/api/users?fbclid=IwAR1D-RI88BlXKfDgf8LFTMvxdyotT45Lg01v3-D8VNnalfzcqS5GTZTHsoQ"
// if (signInForm) {
//     signInForm.addEventListener('submit', async function (event) {
//         event.preventDefault();
//         const email = document.getElementById('email-input').value
//         const password = document.getElementById('password-input').value
//         const rememberMeChecked = document.getElementById('remember-me').checked
//        const request = await fetch(url)
//        const data = await request.json()
//        const userFound = data.filter(function(item) {
//            console.log(item);
//            return item.username == email && item.password == password
//        })[0];
//        if(rememberMeChecked && userFound) {
//            localStorage.setItem('authUser', userFound.username)
//        }
//     //    if(userFound) {
//     //        window.location.href = './homepage.html'
//     //    }
//     });
// }


// if(signInForm) {
//     signInForm.addEventListener('submit', async function (event) {
//         event.preventDefault();
//         const email = document.getElementById('email-input').value
//         const password = document.getElementById('password-input').value
//         const passwordConfirm = document.getElementById('password-confirm').value
//         if (password !== passwordConfirm) {
//             const errMessageContainer = document.getElementById('error-message')
//             errMessageContainer.innerText = "Mật khẩu không khớp, mời nhập lại!"
//         }
//         else {
//             const data = {
//                 password: password,
//                 username: email
//             }

//             const response = await fetch(url, {
//                 method: "POST",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json"
//                 }
//             });
//         }
//     });
// }

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementsByClassName('sign-up-container');
    const overlay = document.getElementsByClassName('overlay-container');
    signUpButton.addEventListener('click', () => {
        overlay[0].classList.remove('overlay-container-hidden'); 
        container[0].classList.add('sign-up-container-active');
    });
    signInButton.addEventListener('click', () => {
        overlay[0].classList.add('overlay-container-hidden'); 
        container[0].classList.remove('sign-up-container-active');
    });