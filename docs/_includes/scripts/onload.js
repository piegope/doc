document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('theme') === "dark-theme") {
        document.body.classList.add('dark-theme');
        document.getElementById('dark-icon').style.display = 'none';
        document.getElementById('light-icon').style.display = 'block';
       
    } else {
        document.body.classList.remove('dark-theme');
        document.getElementById('dark-icon').style.display = 'block';
        document.getElementById('light-icon').style.display = 'none';
    }
    dwdLogosDarkTheme.init();

});