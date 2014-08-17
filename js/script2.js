//Author: Jason Thomas Chew
//ID: 4304373

var clientType = 0;

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


//Function for page CSS
function setCSS(page)
{
    if (page == './css/web.css') 
        clientType = 2;
    else if (page == './css/mobile.css')
        clientType = 1;
    else 
        clientType = 0;
    setVH();
    document.getElementById('pagestyle').setAttribute('href', page);
}

//Function for CSS file
function applyStyle() 
{
	var check = 0;
    
	if (check === 0)
	{
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
        check++;
    }
	
    if (clientType == 2)
        setVH();
}

function padStr (myStr, myVal) 
{
    myStr = myStr.toString();
    return myStr.length < 3 ? padStr("0" + myStr, 3) : myStr;
}

var imageArray = [];
for (var i = 0; i < 35; i++) imageArray[i] = "./images/" + padStr(i + 1, 3) + ".jpg";

var bgCount = 0;

function checkCount() 
{
    if (bgCount > 35)
	{
        bgCount = 0;
    }
	
	if (bgCount < 0) 
	{
        bgCount = 35;
    }
}

// Function for setting background
function setBackground() {
    checkCount();
    document.getElementById("gallery_2").style.background = "url(" + imageArray[bgCount] + ") no-repeat center center fixed";
    document.getElementById("viewImage").setAttribute("href", imageArray[bgCount]);
}

// Display next image
function nextImg() 
{
    bgCount++;
    setBackground();
}

// Display previous image
function prevImg() 
{
    bgCount--;
    setBackground();
}

window.onresize = applyStyle;
document.onresize = applyStyle;

// Function for checking form
function checkform()
{
	var valid = true;
	var vuser = true; var vemail = true; var mailvalid = false; var vcountry = true; var vcomments = true;
	var mail = /^.+@.+\..{2,3}$/;
	// text field validation
	formdata=document.forms["form"];
	// username
	if (formdata.username.value == "")
	{
		alert("inside if statement");
		valid = false;
		vuser = false;
	}
	// email
	if (formdata.email.value == "")
	{
		valid = false;
		vemail = false;
	}
	else if (formdata.email.value.match(mail))
		mailvalid = true;
	else
	{
		valid = false;
		vemail = false;
	}
	// country
	if (formdata.country.value == "")
	{
		valid = false;
		vcountry = false;
	}
	// comments
	if (formdata.comments.value == "")
	{
		valid = false;
		vcomments = false;
	}
	
	var vuserstr = ""; 
	var vemailstr = ""; 
	var mailvalidstr = ""; 
	var vcountrystr = ""; 
	var vcommentstr = "";
	
	if (vuser == false)
		vuserstr = "Please enter user name.\n";
	if (vemail == false)
		vemailstr = "Please enter email\n";
	if (mailvalid == false)
		mailvalidstr = "Email format wrong.\n";
	if (vcountry == false)
		vcountrystr = "Please select a country.\n";
	if (vcomments == false)
		vcommentstr = "Please write a comment.\n";
	
	//alert
	if (valid == false)
		alert("Please check the following input:\n" + vuserstr + vemailstr + mailvalidstr + vcountrystr + vcommentstr);
	
	return valid;
	/*
	Please ensure all input is correct:
	username messages: empty
	email messages: empty, wrong format
	country messages: empty
	comments messages: empty
	
	*/
	/*
	myform=document.forms["detailsForm"];
	
    if (myform.firstname.value == "") 
	formOK = false;
	
    if (myform.lastname.value == "") 
	formOK = false;
	
    if (!isEmail(myform.email.value)) 
	formOK = false;
	
    if (!myform.privacy.checked) 
	formOK = false;
	
    if (!formOK) {
        alert("Please ensure all fields are filled out correctly");
    }
	
	
	
	function isEmail (emailString){
		return (emailString.indexOf("@")>0);
	}
	*/
}