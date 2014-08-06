//Author: Timothy Kiyui
//ID: 4316886

function padStr (myStr, myVal) {
    myStr = myStr.toString();
    return myStr.length < 3 ? padStr("0" + myStr, 3) : myStr;
}
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

