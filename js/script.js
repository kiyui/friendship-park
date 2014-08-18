//Author: Timothy Kiyui
//ID: 4316886

//Page navigation bar hover
function menuHover(menuImg) {
    menuImg.src = "./images/menu_hover.png";
}

function menuOut(menuImg) {
    menuImg.src = "./images/menu.png";
}

//Show floating back to top text
$(document).ready(function () {
    $(window).scroll(function(){
        //Window value & sizes
        var scrollh = parseInt($(window).scrollTop());
        var doch = parseInt($(document).height());
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var showV = scrollh/h;
        //Toggles visibility of back to top Icon
        if (showV > 0 && doch - scrollh - h > 180){
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

//Resizes the .background size to emulate CSS3 property VH
function setVH() {
    //Taken from http://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var backgroundArray = document.getElementsByClassName("background");
    
    for (var i = 0; i < backgroundArray.length; i++)
    {
        backgroundArray[i].style.height = h + 'px';
        backgroundArray[i].style.minHeight = h + 'px';
    }
}

//region: PAGECSS
//Sets page CSS Cookie
function mkCookie (CName, CVal, CLife, CURL)
{
    var CStr = CURL ? ("; domain=" + CURL) : '' ;
    var CDate = new Date();
    CDate.setTime(CDate.getTime() + 60 * 60 * 24 * CLife);
    document.cookie = CName + "=" + encodeURIComponent( CVal ) + "; expires=" + CDate.toGMTString() + "; path=/" + CStr ;
}

//Gets page CSS Cookie
function gtCookie (CName)
{
    var CStr = document.cookie;
    if (CStr.length != 0) {
        var CVal = CStr;
        return decodeURIComponent (CVal[6]) ;
    }
    return 'NULL';
}

//Sets a page CSS
function setCSS(sheet){
    var pgStyle;
    if (sheet == './css/style1.css') {
        pgStyle = 0;
    }
    else if (sheet == './css/style2.css') {
        pgStyle = 1;
    }
    else {
        pgStyle = 2;
        setVH();
    }
    mkCookie('Style', pgStyle, 30, '127.0.0.1');
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

//Detect and set the appropriate CSS file on page load
function applyStyle() {
    var SStyle = gtCookie('Style');
    console.log(SStyle);
    if (SStyle == "0"){
        setCSS('./css/style1.css');
        console.log("STYLE0");
    }
    else if (SStyle == "1")
    {
        setCSS('./css/style2.css');
        console.log("STYLE1");
    }
    else {
        setCSS('./css/style3.css');
        console.log("STYLE3");
        setVH();
    }
}
//endregion

//region: Gallery
//Fixes gallery name
function padStr (myStr, myVal) {
    myStr = myStr.toString();
    return myStr.length < 3 ? padStr("0" + myStr, 3) : myStr;
}

//Gallery item array
var imageArray = [];
for (var i = 0; i < 35; i++) imageArray[i] = "./images/" + padStr(i + 1, 3) + ".jpg";
var bgCount = 0;

//Makes sure the images loop
function checkCount() {
    if (bgCount > 35){
        bgCount = 0;
    }
    else if (bgCount < 0) {
        bgCount = 35;
    }
}

//Sets gallery page background
function setBackground() {
    checkCount();
    document.getElementById("gallery_2").style.background = "url(" + imageArray[bgCount] + ") no-repeat center center fixed";
    document.getElementById("viewImage").setAttribute("href", imageArray[bgCount]);
}

//Next gallery image
function nextImg() {
    bgCount++;
    setBackground();
    
}

//Previous gallery image
function prevImg() {
    bgCount--;
    setBackground();
}
//endregion

//General events
window.onresize = applyStyle;
document.onresize = applyStyle;