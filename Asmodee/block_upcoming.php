<?php
 //$conn = get_connection();
?>

<DIV class="listageArticle">
<UL class="listageNews">
  <LI>
  
<?php
 $q = "SELECT * FROM NEWS ORDER BY INSERT_DATE LIMIT 1, 6";
 $rs = mysql_query($q, $conn);
 
 for($i=0;$i<6;$i++){
 	$row = mysql_fetch_object($rs);
 	if($row){
 		$link = "/newsdetail.php?id=$row->ID";
 		$subject = $row->SUBJECT;
 		$date = date('Y-m-d', strtotime($row->NEWS_DATE));
 		
 		echo "<UL id=\"ArticleElement\">";
	    echo "<LI><A class=\"nextcontent2\" href=\"$link\">";
		echo "<SPAN class=\"dateconsultation\">$date</SPAN></A></LI>";
		echo "<A class=\"nextcontent2\" href=\"$link\">";
		echo "<LI><SPAN>$subject</SPAN></LI></A>";
	    echo "<LI></LI></UL>";
 	}
 }
 
 //mysql_close($conn);
 mysql_free_result($rs);
?>
  </LI>
</UL>
</DIV>
