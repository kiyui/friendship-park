<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title>Feedback</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta name="description" content="One of Kuching's most popular attraction, Friendship Park is a fun place to exercise, relax and participate in various activities! Learn more now!" />
    <meta name="keywords" content="friendship park,friendship,park,kuching,activities,fun,sports,exercise,hangout,malaysia,china,chinese,beautiful,attraction" />
    <meta name="author" content="Timur Lavrenti Kiyivinski" />
    <!-- JS Code -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/mdetect.js" type="text/javascript"></script>
    <script src="js/script.js" type="text/javascript"></script>
    <!-- CSS Code -->
    <link rel="stylesheet" id="pagestyle" href="./css/style3.css" title="Desktop Style"/>
    <link rel="alternate stylesheet" href="./css/style2.css" title="Mobile Style"/>
    <link rel="alternate stylesheet" href="./css/style1.css" title="Compatible &#47; Acessible Style"/>
    <link href='http://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'/>
</head>
<body onload="applyStyle()">
    <?php include("header.php");?>
    <?php include("menu.php");?>
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
    <?php include("footer.php");?>
</body>
</html>
