<?php
 //$conn = get_connection();
?>

<DIV id="avenircontent">
<UL class="AVenir">
  
<?php
 $q = "SELECT * FROM NEWS ORDER BY INSERT_DATE LIMIT 1, 6";
 $rs = mysql_query($q, $conn);
 
 for($i=0;$i<5;$i++){
 	$row = mysql_fetch_object($rs);
 	if($row){
 		$link = "/newsdetail.php?id=$row->ID";
 		$subject = cutstr($row->SUBJECT, 10);
 		$date = date('Y-m-d', strtotime($row->NEWS_DATE));
 		
	    echo "<LI><A class=\"nextcontent2\" href=\"$link\">";
		echo "<SPAN class=\"dateconsultation\">$date</SPAN>";
		echo "<H1>$subject</H1></A><SPAN id=\"actutransit2\"></SPAN></LI>";
 	}
 }
 
 //mysql_close($conn);
 mysql_free_result($rs);
?>
<DIV id="next"><A class="nextcontent" href="/news.php?cate=full"><SPAN>All news &gt;</SPAN></A></DIV>
</UL>
</DIV>