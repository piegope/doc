const dwdLogosDarkTheme = {
    init: function () {
      const images = document.querySelectorAll('img');
        

      if (document.body.classList.contains('dark-theme')) {
        console.log("oui");
        if (images.length > 0 ) {
          Array.from(images).forEach(item => {
            if (item.src.includes("color")) {
              item.src.replace("color", "white");      
            }
          })
        }
      };
    }
}
  
(function () {
dwdLogosDarkTheme.init();
})();