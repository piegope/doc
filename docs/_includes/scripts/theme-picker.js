document.getElementById('theme-button').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark-theme');
      document.getElementById('dark-icon').style.display = 'none';
      document.getElementById('light-icon').style.display = 'block';
    } else {
      localStorage.setItem('theme', '');
      document.getElementById('dark-icon').style.display = 'block';
      document.getElementById('light-icon').style.display = 'none';
    }
    
    dwdLogosDarkTheme.init();
  });