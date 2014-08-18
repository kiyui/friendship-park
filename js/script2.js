//Author: Brian Sim
//ID: 4316878

//Page navigation bar 

function menuHover(menuImg) {
    menuImg.src = "./images/menu_hover.png";
}

function menuOut(menuImg) {
    menuImg.src = "./images/menu.png";
}

//Floating back to top 

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

//Floating navigation menu

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
        var SStyle = gtCookie('Style');
        if (SStyle == 2){
            backgroundArray[i].style.height = h + 'px';
            backgroundArray[i].style.minHeight = h + 'px';
        }
        else {
            backgroundArray[i].style.height = 0 + 'px';
            backgroundArray[i].style.minHeight = 0 + 'px';
        }
    }
}

//CSS Cookie

function mkCookie (CName, CVal, CLife, CURL)
{
    var CStr = CURL ? ("; domain=" + CURL) : '' ;
    var CDate = new Date();
    CDate.setTime(CDate.getTime() + 60 * 60 * 24 * CLife);
    document.cookie = CName + "=" + encodeURIComponent( CVal ) + "; expires=" + CDate.toGMTString() + "; path=/" + CStr ;
}

//Obtain CSS Cookie

function gtCookie (CName)
{
    var CStr = document.cookie;
    if (CStr.length != 0) {
        var CVal = CStr;
        return decodeURIComponent (CVal[6]) ;
    }
    return 'NULL';
}

//CSS pages

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

//image number

function numstr(i) {
		if(i<10)
			return "00"+i;
		else 
			return "0"+i;
}
//Array of images

var imagenum=1;
imageArray = new Array();

while(imagenum<35){
	imageArray[imagenum]="./images/"+numstr(imagenum)+".jpg";
	imagenum++;
}

var bgCount = 0;

//First image will appear back after the last image

function checkCount() {
    if (bgCount > 35){
        bgCount = 0;
    }
    else if (bgCount < 0) {
        bgCount = 35;

    }
}
//Auto skipping images

var timerSet = false;
var timerMode = 1;

//Display background

function setBackground() {
    timerSet = true;
    setTimeout("setBackground()",3000);
    bgCount+=timerMode;
    document.getElementById("gallery_2").style.background = "url(" + imageArray[bgCount] + ") no-repeat center center fixed";
    document.getElementById("viewImage").setAttribute("href", imageArray[bgCount]);

}
//Next image

function nextImg() {
    checkCount();
    timerMode = 1;
    if (!timerSet){
        setBackground();
    }
}
//Previce  Image

function prevImg() {
    checkCount();
    timerMode = -1;
    if (!timerSet){
        setBackground();
    }
}
//Form checking

function checkform () {
    myform=document.forms["form"];
    var comment=myform.comments.value;
    var user=myform.username.value;
    var email=myform.email.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var country=myform.country.value;
    var alertMsg = "";
//Display if all input is empty
    if (user==""&& comment==""&& email=="" && country==""){
        alertMsg += "Please ensure that you fill out everything";
    }
//Display if name is empty
    else if (user=="") {
        alertMsg+="Please give us your name";
    }
//Display if comment is empty
    else if (comment==""){
         alertMsg+="Please give us a comment";
    }
//Display if comment is email
    else if (email=="") {
          alertMsg+="Please give us your email"; 
    }
//Checking email
    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
           alertMsg+="Please give a proper email";
    }
//Display if no country is picked
    if (country=="NULL"){
            alertMsg+="Please choose your country";
    }
//Display alertMsg if value is true
    if (alertMsg == "")
    {
        return true;
    }
    else {
        alert(alertMsg);
        return false;
    }
}

//General events
window.onresize = applyStyle();
document.onresize = applyStyle();