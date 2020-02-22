const components = {

};
components.register = `
<div>
      <div class="form-container sign-in-container">

        <form id="register-form">
            <h1>Sign up</h1>
            <input type="fullname" name="fullname" placeholder="Full name" />
            
            <input type="email" name="email" placeholder="Email" />
            <div class="error" id="email-erro"></div>

            <input type="password" name="password" placeholder="Password" />
            <div class="error" id="password-error"></div>

            <input id="confirmpassword-input" type="password" name="confirmPassword" placeholder="Confirm password" onkeyup='check();' />
            <div class="error" id="confirmpassword-error"></div>

            <a id="already-have-account" href="#">Already have an account? Sign in</a>
            <button id="submit">Sign Up</button>
        </form>
      </div>

      <div class="overlay-container overlay-container-hidden">
        <div class="overlay">

            <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                
            </div>
        </div>
      </div>
</div>`;

components.login =
`<div>
  <div id="container">
    <div>
        <div class="signin">
          
            <div id="signin-form">
              <h1>Sign in</h1>
                <form action="#" id="form-signin">
                    <div class="input-group">
                        <label for=""></label>
                        <br>
                        <input id="email-input" name="email" type="email" placeholder="Phone number, username or email">
                    </div>

                    <div class="input-group">
                        <label for=""></label>
                        <br>
                        <input id="password-input" type="password" placeholder="Password">
                    </div>
                    <p id="error-message"></p>
                    <button id="button">Sign in</button>
                </form>
            </div>
        </div>
    </div>
  </div>
</div>`;



// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementsByClassName('sign-up-container');
// const overlay = document.getElementsByClassName('overlay-container');
// signUpButton.addEventListener('click', () => {
//     overlay[0].classList.remove('overlay-container-hidden'); 
//     container[0].classList.add('sign-up-container-active');
// });
// signInButton.addEventListener('click', () => {
//     overlay[0].classList.add('overlay-container-hidden'); 
//     container[0].classList.remove('sign-up-container-active');
// });

// const signUp = document.getElementsByClassName('sign-up-container');
// console.log(signUp)

var check = function () {
  if (document.getElementById('password-input').value ==
    document.getElementById('confirm-password-input').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = '';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Not Matching';
  }
}
