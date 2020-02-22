window.onload = () => {
    view.setActiveScreen('register');
    document.getElementById('already-have-account')
        .addEventListener('click', () => {
            view.setActiveScreen('login');
        });
};
