<DIV id="actubox">
<UL class="Actualites">

<?php
 //$conn = get_connection();
 
 $q = "SELECT * FROM NEWS ORDER BY INSERT_DATE DESC LIMIT 1, 2";
 $rs = mysql_query($q, $conn);
 
 $row = mysql_fetch_object($rs);
 $link = "/newsdetail.php?id=$row->ID";
 $desc = cutstr($row->DESCR, 50);
 $img = $row->IMAGE_URL;
?>

  <LI class="zone1home"><A class="nextcontent3" href="<?php echo $link?>">
  <H1><?php echo $row->SUBJECT?></H1></A><A class="nextcontent3" href="<?php echo $link?>">
  <DIV class="image"><SPAN class="imgselection"><IMG src="<?php echo $img ?>"></SPAN></DIV></A><A 
  class="nextcontent3" href="<?php echo $link?>"><SPAN></SPAN><A 
  class="nextcontent2" href="<?php echo $link?>"><?php echo $desc?></A> <A class="nextcontent" 
  href="<?php echo $link?>">» 
  Read More</A></LI>
  
  <LI><SPAN id="actutransit"></SPAN></LI>
<?php
 $row = mysql_fetch_object($rs);
 $link = "/newsdetail.php?id=$row->ID";
 $desc = cutstr($row->DESCR, 50);
 $img = $row->IMAGE_URL;
?>

  <LI class="zone2home"><A class="nextcontent3" href="<?php echo $link?>">
  <H1><?php echo $row->SUBJECT?></H1></A><A class="nextcontent3" href="<?php echo $link?>">
  <DIV class="image"><SPAN class="imgselection"><IMG src="<?php echo $img ?>"></SPAN></DIV></A><A 
  class="nextcontent3" href="<?php echo $link?>"><SPAN></SPAN><A 
  class="nextcontent2" href="<?php echo $link?>"><?php echo $desc?></A> <A class="nextcontent" 
  href="<?php echo $link?>">» 
  Read More</A></LI>

</UL>
</DIV>

<?php
 mysql_free_result($rs);
?>