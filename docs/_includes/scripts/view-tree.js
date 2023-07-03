
const viewTree = {
    init: function () {
        const elements = document.getElementsByClassName('current');
        const scrollbar = document.getElementsByClassName('navigation');
        
        if (elements.length > 0  && scrollbar.length > 0 ) {
            scrollbar[0].scrollTop = elements[0].offsetTop - (screen.height / 2.5);
        }
    }
};

(function () {
    viewTree.init();
})();