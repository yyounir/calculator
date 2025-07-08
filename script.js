var el = document.querySelector('.more');
var btn = el.querySelector('.more-btn');
var menu = el.querySelector('.more-menu');
var visible = false;

function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


function toggleDrawer() {
    const drawerNav = document.querySelector('.drawer-nav');
    if (drawerNav.style.left === '0px') {
        drawerNav.style.left = '-300px';
    } else {
        drawerNav.style.left = '0px';
    }
}


btn.addEventListener('click', showMenu, false);

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function openPopup2() {
    document.getElementById('popup2').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function closePopup2() {
    document.getElementById('popup2').style.display = 'none';
}

function showContextMenu(event) {
    event.preventDefault();
    const contextMenu = document.getElementById('context-menu');
    contextMenu.style.display = 'block';
    contextMenu.style.left = `${event.pageX - contextMenu.offsetWidth}px`;
    contextMenu.style.top = `${event.pageY}px`;
}

window.addEventListener('click', function(event) {
    const contextMenu = document.getElementById('context-menu');
    if (contextMenu.style.display === 'block' && !contextMenu.contains(event.target)) {
        contextMenu.style.display = 'none';
    }
});

document.addEventListener('contextmenu', showContextMenu);


//Calculator
// Function that display value 
function dis(val) { 
    document.getElementById("result").value += val 
} 

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        solve(); 
    } 
} 

// Function that evaluates the digit and return result 
function solve() { 
    let x = document.getElementById("result").value 
    let y = math.evaluate(x) 
    document.getElementById("result").value = y 
} 

// Function that clear the display 
function clr() { 
    document.getElementById("result").value = "" 
} 