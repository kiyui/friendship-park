//Author: Timothy Kiyui
//ID: 4316886

var detectCSS = 0;
var clientType = 0;

//Page navigation bar hover
function menuHover(menuImg) {
    menuImg.src = "./images/menu_hover.png";
}

function menuOut(menuImg) {
    menuImg.src = "./images/menu.png";
}

//Show floating back to top
$(document).ready(function () {
    $(window).scroll(function(){
        //Window value & sizes
        var scrollh = parseInt($(window).scrollTop());
        var doch = parseInt($(document).height());
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var showV = scrollh/h;
        //Toggles visibility of back to top Icon
        if (showV > 0 && doch - scrollh - h > 150){
            document.getElementById("toTop").style.visibility = "visible";
        }
        else {
            document.getElementById("toTop").style.visibility = "hidden";
        }
    });
});

//Show the floating navigation menu
function navMenu() {
    
    if (document.getElementById("menu").style.visibility == "visible")
    {
        document.getElementById("menu").style.visibility = "hidden";
    }
    else {
        document.getElementById("menu").style.visibility = "visible"
    }
}

function navMenuExit() {
    
}

//Resizes the .background size to emulate CSS3 property VH
function setVH() {
    //Taken from http://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var backgroundArray = document.getElementsByClassName("background");
    
    for (var i = 0; i < backgroundArray.length; i++)
    {
        if (clientType == 2) {
            backgroundArray[i].style.height = h + 'px';
            backgroundArray[i].style.minHeight = h + 'px';
        }
        else {
            backgroundArray[i].style.height = '';
            backgroundArray[i].style.minHeight = '';
        }
    }
}

//Sets the page CSS
function setCSS(sheet){
    if (sheet == './css/web.css') {
        clientType = 2;
    }
    else if (sheet == './css/mobile.css') {
        clientType = 1;
    }
    else {
        clientType = 0;    
    }
    setVH();
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

//Detect and set the appropriate CSS file
function applyStyle() {
    if (detectCSS === 0){
        //Use MobileESP to redirect and set the proper CSS file
        //TODO: Save this option as a cookie.
        if (MobileEsp.InitDeviceScan())
        {
            setCSS('./css/mobile.css');
            clientType = 1;
        }
        else
        {
            setCSS('./css/web.css');
            clientType = 2;
            setVH();
            
        }
        detectCSS++;
    }
    if (clientType == 2){
        setVH();
    }
}

function padStr (myStr, myVal) {
    myStr = myStr.toString();
    return myStr.length < 3 ? padStr("0" + myStr, 3) : myStr;
}

//Gallery specific
var imageArray = [];
for (var i = 0; i < 35; i++) imageArray[i] = "./images/" + padStr(i + 1, 3) + ".jpg";

var bgCount = 0;

function checkCount() {
    if (bgCount > 35){
        bgCount = 0;
    }
    else if (bgCount < 0) {
        bgCount = 35;
    }
}

function setBackground() {
    checkCount();
    document.getElementById("gallery_2").style.background = "url(" + imageArray[bgCount] + ") no-repeat center center fixed";
    document.getElementById("viewImage").setAttribute("href", imageArray[bgCount]);
}

function nextImg() {
    bgCount++;
    setBackground();
    
}

function prevImg() {
    bgCount--;
    setBackground();
}

//General events
window.onresize = applyStyle;
document.onresize = applyStyle;