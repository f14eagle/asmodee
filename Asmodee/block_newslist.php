<?php
 if(isset($_REQUEST['cate'])){
 	$cate = $_REQUEST['cate'];
 }else{
 	$cate = "full";
 }
 
 $ca = array(
 	array("full", "fullnews", "tout"),
 	array("actualites", "actualitesnews", "actualites"),
 	array("voir", "voirnews", "avoir"),
 	array("faire", "fairenews", "afaire"),
 	array("scoop", "scoopnews", "scoop"),
 	array("reportage", "reportagenews", "reportage")
 );
 
 echo "<div id='liste_boutons_article'>";
 echo "<ul>";
 foreach($ca as $key => $value){
 	$class = $value[1];
 	if($cate == $value[0]){
 		$class = $class."_selected";
 	}
 	echo "<li><a class='$class' href='?cate=$value[0]' ><span>$value[2]</span></a></li>";
 }
 echo "</ul>";
 echo "</div>";
?>

<div class='clearleft'></div>

<div class='Categories_News' id='Liste_Articles_Tous_liste'>

<?php include "ser_newslist.php" ?>

</div>