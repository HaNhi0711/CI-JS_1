window.onload = () => {
    console.log(firebase.app().name);
    view.setActiveScreen('register');
    document.getElementById('already-have-account')
        .addEventListener('click', () => {
            view.setActiveScreen('login');
        });
};
