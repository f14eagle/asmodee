<?php
 if(isset($_REQUEST["page"])){
 	$curr_page = $_REQUEST["page"];
 }else{
 	$curr_page = 0;
 }
 $page_size = 8;
 $start_record = $curr_page * $page_size;
 
 $sql = "SELECT * FROM NEWS ORDER BY INSERT_DATE ";
 $csql = "SELECT COUNT(*) COUNT FROM NEWS ";
 $rs = mysql_query($csql, $conn);
 $row = mysql_fetch_object($rs);
 $total_rows = $row->COUNT;
 mysql_free_result($rs);
 $total_page = ceil($total_rows / $page_size);
 
 $q = $sql." LIMIT $start_record, $page_size";
 $rs = mysql_query($q, $conn);
  
 for($i=0;$i<$page_size;$i++){
 	$row = mysql_fetch_object($rs);
 	if($row){
 		$link = "/newsdetail.php?id=$row->ID";
 		$subject = $row->SUBJECT;
 		$img = $row->IMAGE_URL;
 		$desc = cutstr($row->DESCR, 50);
 		$category = $row->CATEGORY_NAME;
 		$date = date('Y-m-d', strtotime($row->NEWS_DATE));
 		
		echo "<li>";
		echo "<span class='categorie_news'>$category</span>";
		echo "<span class='date'>$date</span>";
		echo "<a href='$link'><img src='$img'/></a>";
		echo "<a href='$link'><h1>$subject</h1></a>";
		echo "<a href='$link' ><p>$desc</p></a>";
		echo "<a href='$link' class='lienfiche_categories'><span>» Read More</span></a>";
		echo "</li>";
 	}
 }
 
 
 echo "<div class='Pages'>";
 for($i=0;$i<$total_page;$i++){
 	$p = $i + 1;
 	if($i == $curr_page){
 		echo "<b>$p</b>";
 	}else{
 		echo "<a href='javascript:Articles_Par_Lettre(\"\",$i,\"voir\")'>$p</a>";
 	}
 }
 echo "<div class='clear'></div>";
 echo "</div>";
 
 if($curr_page==0){
 	echo "<a class='page_precedente_off'><span>page précédente</span></a>";
 }else{
 	$pre_page = $curr_page;
 	echo "<a href='javascript:Articles_Par_Lettre(\"\",$pre_page,\"voir\")' class='page_precedente'><span>page précédente</span></a>";
 }
 
 if($curr_page==($total_page-1)){
 	echo "<a class='page_suivante_off'><span>page suivante</span></a>";
 }else{
 	$next_page = $curr_page + 1;
 	echo "<a href='javascript:Articles_Par_Lettre(\"\",$next_page,\"voir\")' class='page_suivante'><span>page suivante</span></a>";
 }
 echo "</div>";
 mysql_free_result($rs);
?>