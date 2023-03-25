var header = document.getElementById('header');
var moblieM = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight
var bandM = document.getElementById('bandBtn')
var tourM = document.getElementById('tourBtn')
var contactM = document.getElementById('contactBtn')

const tempHeight = headerHeight+'px';

moblieM.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = tempHeight;
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for( var i = 0; i < menuItems.length; i++ ){
    var menuItem = menuItems[i];
    menuItem.onclick = function() {
            header.style.height = tempHeight;
        }
}

// bandM.onclick = function() {
//     header.style.height = tempHeight;
// }

// tourM.onclick = function() {
//     header.style.height = tempHeight;
// }

// contactM.onclick = function() {
//     header.style.height = tempHeight;
// }

