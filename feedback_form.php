<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title>Friendship Park</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta name="description" content="One of Kuching's most popular attraction, Friendship Park is a fun place to exercise, relax and participate in various activities! Learn more now!" />
    <meta name="keywords" content="friendship park,friendship,park,kuching,activities,fun,sports,exercise,hangout,malaysia,china,chinese,beautiful,attraction" />
    <meta name="author" content="Timur Lavrenti Kiyivinski" />
    <!-- JS Code -->
    <script src="js/mdetect.js" type="text/javascript"></script>
    <script src="js/script.js" type="text/javascript"></script>
    <!-- CSS Code -->
    <link rel="stylesheet" id="pagestyle" href="./css/web.css" title="Desktop Style"/>
    <link rel="alternate stylesheet" href="./css/mobile.css" title="Mobile Style"/>
    <link rel="alternate stylesheet" href="./css/compat.css" title="Compatible &#47; Acessible Style"/>
    <link href='http://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'/>
</head>
<body onload="applyStyle()">
    <div class="header-class" id="header">
    <ul id="menu">
        <li id="heading">Feedback</li>
        <li><a href="index.html" >Home</a></li>
        <li><a href="about.html" >About</a></li>
        <li><a href="contact.html" >Contact Us</a></li>
        <li id="header-style">
        Styles&#58;
        <ul id="header-submenu">
            <li><a href="#" onclick="setCSS('./css/web.css')">Web</a></li>
            <li><a href="#" onclick="setCSS('./css/mobile.css')">Mobile</a></li>
            <li><a href="#" onclick="setCSS('./css/compat.css')">Compatible</a></li>
        </ul>
        </li>
    </ul>
    </div>
    <!-- Section #1 -->
    <div id="feedback_1" class="background">
        <div class="bcg">
            <div class="hsContainer">
                <div class="hsContent">
                <!-- Your content here -->
				<h2>Information Survey</h2>
                <p>Please complete the following survey:</p>
                <form id="form" method="post" action="http://mercury.ict.swin.edu.au/it000000/demos/showpost.php">
                    <fieldset>
                    <fieldset>
                    <legend>General Information</legend>
                        <label>Name:</label>
                        <br />
                        <input type="text" name="username" size="50"/>
                        <br />
                    </fieldset>
                    <fieldset>
                    <legend>Give your comments here</legend>
                        <label>Comments:</label>
                        <br />
                        <textarea name="comments" rows="4" cols="40"></textarea>
                    </fieldset>
                    <input type="hidden" name="debug" value="true" />
                    <button name="submit" value="Submit">Submit</button>
                    </fieldset>
                </form>
                <button id="btnReset" name="reset"  onclick="document.getElementById('form').reset();">Reset Form</button>
                </div>
            </div>
        </div>
    </div>
    <!--Foot with buttons, do not remove-->
    <div id="footer">
        <a href="#header" class="button-link" title="Back to top">Back to top</a>
        <br />
        <a href="about_our_group.html" class="button-link" title="About Us">&#169;WE&#47;EATED&#47;COOKIE</a>
        <p>Page created by Brian Sim &#124; Last updated: 1&#47;8&#47;2014</p>
        <a href="http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Strict" height="31" width="88" /></a>
        <a href="http://jigsaw.w3.org/css-validator/check/referer"><img style="border:0;width:88px;height:31px" src="http://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!" /></a>
    </div>
</body>
</html>