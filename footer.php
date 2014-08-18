<?php
function pageAuthor() {
 $pg = substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1);
 if ($pg == 'index.php' || $pg == 'gallery.php' || $pg == 'map.php' || $pg == 'site_map.php' || $pg == 'photographs.php')
 {
     return 'Timothy Kiyui';
 }
 else if ($pg == 'about.php' || $pg == "feedback_form.php" || $pg == 'about_our_group.php'){
     return 'Brian Sim';
 }
 else if ($pg == 'contact.php' || $pg == 'activities.php' || $pg == "states.php"){
     return 'Jason';
 }
 else return $pg;
} 
?>
<div id="footer">
    <a href="#header" class="button-link" title="Back to top">Back to top</a>
    <br />
    <a href="about_our_group.html" class="button-link" title="About Us">&#169;WE&#47;EATED&#47;COOKIE</a>
    <p>Page created by <?php echo pageAuthor() ?> &#124; Last updated: 1&#47;8&#47;2014</p>
    <a href="http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Strict" height="31" width="88" /></a>
    <a href="http://jigsaw.w3.org/css-validator/check/referer"><img style="border:0;width:88px;height:31px" src="http://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!" /></a>
</div>