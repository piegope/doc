document.getElementById('theme-button').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark-theme');
    } else {
      localStorage.setItem('theme', '');
    }
    
    dwdLogosDarkTheme.init();
  });