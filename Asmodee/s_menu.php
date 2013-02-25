<?php
 $url = $_SERVER["SCRIPT_NAME"];
 
 $ca = array(
 	array("/index.php", "home", "home"),
 	array("/news.php", "news", "news"),
 	array("/jeux.php", "jeux", "jeux"),
 	array("/video.php", "videos", "videos"),
 	array("/societe.php", "societe", "societe")
 );
 
 echo "<ul id=\"Navigation\">";
  foreach($ca as $key => $value){
 	$class = $value[1];
 	if($url == $value[0]){
 		$class = $class."_selected";
 	}
 	echo "<li><a class='$class' href='$value[0]' ><span>$value[2]</span></a></li>";
 }
 echo "</ul>";
?>