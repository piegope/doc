const dwdCopyAnchor = {
    init: function () {
        const elements = document.getElementsByClassName('header-anchor'); 
        if (elements.length > 0 ) { 
            Array.from(elements).forEach(item => {
                item.addEventListener('click', event => {               
                    navigator.clipboard.writeText(item.href);
                    var popup = document.getElementById("myPopup");
                    popup.classList.toggle("show");
                    myTimeout = setTimeout(function() { popup.classList.toggle("show") }, 3000);
                 });
            });
    
        }
    }
};

(function () {
  dwdCopyAnchor.init();
})();

