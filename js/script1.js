/* Author: Timothy Kiyui
 * ID: 4316886
 * Last Updated: 18.8.2014
 * Language: Javascript & JQuery
 * */

/* Menu hover icon animation */
function menuHover(menuImg) {
    menuImg.src = "./images/menu_hover.png";
}

function menuOut(menuImg) {
    menuImg.src = "./images/menu.png";
}

/* Shows a floating "Back to top" text block
 * when the page is scrolled past 1 VH unit
 * and above the page footer.
 * */
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

/* Toggles the floating navigation menu */
function navMenu() {
    
    if (document.getElementById("menu").style.visibility == "visible")
    {
        document.getElementById("menu").style.visibility = "hidden";
    }
    else {
        document.getElementById("menu").style.visibility = "visible"
    }
}

/* Sets the virtual height of the page,
 * used in desktop view to create a parallex
 * scrolling UI.
 * */
function setVH() {
    //Taken from http://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var backgroundArray = document.getElementsByClassName("background");
    
    for (var i = 0; i < backgroundArray.length; i++)
    {
        var SStyle = gtCookie('Style');
        if (SStyle == 2){
            backgroundArray[i].style.height = h + 'px';
            backgroundArray[i].style.minHeight = h + 'px';
        }
        else {
            backgroundArray[i].style.height = '100%';
            backgroundArray[i].style.minHeight = 0 + '100%';
        }
    }
}

//region: Page CSS
/* Makes a cookie containing the page CSS preference (Generic) */
function mkCookie (CName, CVal, CLife, CURL)
{
    var CStr = CURL ? ("; domain=" + CURL) : '' ;
    var CDate = new Date();
    CDate.setTime(CDate.getTime() + 60 * 60 * 24 * CLife);
    document.cookie = CName + "=" + encodeURIComponent( CVal ) + "; expires=" + CDate.toGMTString() + "; path=/" + CStr ;
}

/* Gets the page CSS preference cookie (Generic)*/
function gtCookie (CName)
{
    var CStr = document.cookie;
    if (CStr.length != 0) {
        var CVal = CStr;
        return decodeURIComponent (CVal[6]) ;
    }
    return 'NULL';
}

/* Sets the page stylesheet and remembers the preference */
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
    }
    mkCookie('Style', pgStyle, 30, '127.0.0.1');
    document.getElementById('pagestyle').setAttribute('href', sheet);
    setVH();
}

/* Detect and set the appropriate CSS file on page load */
function applyStyle() {
    var SStyle = gtCookie('Style');
    console.log(SStyle);
    if (SStyle == "0"){
        setCSS('./css/style1.css');
        console.log("STYLE1");
    }
    else if (SStyle == "1")
    {
        setCSS('./css/style2.css');
        console.log("STYLE2");
    }
    else {
        setCSS('./css/style3.css');
        console.log("STYLE3");
        setVH();
    }
}
//endregion

//region: Gallery
/* Fixes gallery name string */
function padStr (myStr, myVal) {
    myStr = myStr.toString();
    return myStr.length < 3 ? padStr("0" + myStr, 3) : myStr;
}

/* Creates gallery item array */
var imageArray = [];
for (var i = 0; i < 35; i++) imageArray[i] = "./images/" + padStr(i + 1, 3) + ".jpg";
var bgCount = 0;

/* Makes sure the images loop */
function checkCount() {
    if (bgCount > 35){
        bgCount = 0;
    }
    else if (bgCount < 0) {
        bgCount = 35;
    }
}

/* Sets gallery page background */
function setBackground() {
    checkCount();
    document.getElementById("gallery_2").style.background = "url(" + imageArray[bgCount] + ") no-repeat center center fixed";
    document.getElementById("viewImage").setAttribute("href", imageArray[bgCount]);
}

/* Next gallery image */
function nextImg() {
    bgCount++;
    setBackground();
}

/* Previous gallery image */
function prevImg() {
    bgCount--;
    setBackground();
}
//endregion

//region: Feedback Form
function checkform () {
    /* Gets form items */
    form=document.forms["form"];
    var comment=form.comments.value;
    var user=form.username.value;
    var email=form.email.value;
    var emailREGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var country=form.country.value;
    /* Alert message init */
    var alertMsg = "Please resolve the following issues:\n";
    /* Counts the numbers of issues */
    var alertNum = 1;
    if (user=="") {
        alertMsg += alertNum + " - Please input your name.\n";
        alertNum += 1;
    }
    if (comment==""){
         alertMsg += alertNum + " - You are required to comment.\n";
         alertNum += 1;
    }
    if (email=="") {
          alertMsg += alertNum + " - Please input your email.\n";
          alertNum += 1;
    }
    if (!emailREGEX.test(email)) {
           alertMsg += alertNum + " - Your email is invalid.\n";
           alertNum += 1;
    }
    if (country=="NULL"){
            alertMsg += alertNum + " - Please select a country.\n";
            alertNum += 1;
    }
    if (alertNum == 1)
    {
        return true;
    }
    else {
        alert(alertMsg);
        return false;
    }
}
//endregion

/* General events */
window.onresize = applyStyle();
document.onresize = applyStyle();
