var moreBtn = document.querySelector('.moreBtn')
var subnav = document.querySelector('.subnav')

if (window.matchMedia("(max-width: 740px)").matches) {
    moreBtn.onclick = function(){
        const computedStyles = window.getComputedStyle(subnav) 
        const subnavPosition = computedStyles.position
        var Opened  = subnavPosition === 'relative'
        if (Opened){
            subnav.style.position = 'absolute'
        } else {
            subnav.style.position = 'relative'
        }
    } 
}