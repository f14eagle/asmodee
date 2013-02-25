<DIV id="enbrefcontent">
<UL class="EnBref">
<?php
 //$conn = get_connection();
 
 $q = "SELECT * FROM NEWS ORDER BY INSERT_DATE DESC LIMIT 1, 3";
 $rs = mysql_query($q, $conn);
 
 for($i=0;$i<3;$i++){
 	$row = mysql_fetch_object($rs);
 	if($row){
 		$link = "/newsdetail.php?id=$row->ID";
 		$img = $row->IMAGE_URL;
 		$subject = $row->SUBJECT;
 		$desc = cutstr($row->DESCR, 30);
 		
	    echo "<LI><A class=\"nextcontent2\" href=\"$link\">";
	    echo "<DIV class=\"img_bref\"><IMG src=\"$img\" width=\"90\"></DIV>";
		echo "<H1>$subject</H1>";
		echo "<SPAN>$desc <SPAN id=\"nextenbref\">» Read More</SPAN></SPAN></A><SPAN class=\"clear\"></SPAN></LI>";
 	}
 }
 
 //mysql_close($conn);
 mysql_free_result($rs);
?>
  <A class="nextcontent" href="/news.php?cate=full">All news &gt;</A>
</UL>
</DIV>