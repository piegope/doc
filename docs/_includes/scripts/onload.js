document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('theme') === "dark-theme") {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    dwdLogosDarkTheme.init();

});