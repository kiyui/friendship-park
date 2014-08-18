<?php
function pageName() {
 $pg = substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1);
 if ($pg == 'index.php')
 {
     return 'Friendship Park';
 }
 else if ($pg == 'about_our_group.php'){
     return 'About Us';
 }
 else if ($pg == 'about.php'){
     return 'About';
 }
 else if ($pg == 'activities.php'){
     return 'Activities';
 }
 else if ($pg == 'contact.php'){
     return 'Contact Us';
 }
 else if ($pg == 'feedback_form.php'){
     return 'Feedback'; 
 }
 else if ($pg == 'gallery.php'){
     return 'Gallery';
 }
 else if ($pg == 'map.php'){
     return 'Getting There';
 }
 else if ($pg == 'photographs.php'){
     return 'Our Photographer';
 }
 else if ($pg == 'site_map.php'){
     return 'Ste Map';
 }
 else if ($pg == 'states.php'){
     return 'The Malaysian States';
 }
 else return $pg;
}
?>
<div id="header">
<h2 id="heading" ><?php echo pageName() ?></h2>
<div id="menu_button" >
<img src="./images/menu.png" width="20px" height="20px" alt="Menu" onmouseover="menuHover(this)" onmouseout="menuOut(this)" onclick="navMenu()" />
</div>
</div>