<ul class='Dernieres_News'>
<a href='news-rss.php' id='rss'><span>rss</span></a>

<?php
 $q = "SELECT * FROM NEWS ORDER BY INSERT_DATE LIMIT 1, 2";
 $rs = mysql_query($q, $conn);
 
 for($i=0;$i<2;$i++){
 	$row = mysql_fetch_object($rs);
 	if($row){
 		$link = "/newsdetail.php?id=$row->ID";
 		$subject = $row->SUBJECT;
 		$img = $row->IMAGE_URL;
 		$desc = cutstr($row->DESCR, 50);
 		
		echo "<li style='position:relative;'>";
		echo "<a class='nextcontent3' class='lienfiche' href='$link'><h1>$subject</h1></a>";
		echo "<a class='nextcontent3' class='lienfiche' href='$link'><img src='$img'/></a>";
		echo "<p><a class='nextcontent2' class='lienfiche' href='$link'>$desc</a></p>";
		echo "<a class='lienfiche' href='$link'><span>Read More</span></a>";
		echo "<div class='clear'></div></li>";
 	}
 }
 
 //mysql_close($conn);
 mysql_free_result($rs);
?>

</ul>