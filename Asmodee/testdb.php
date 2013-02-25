<?php
/*
 * Created on 2013-2-10
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
 require "func/dbservice.php";
 
 $conn = get_connection();
 
 $q = "SELECT * FROM NEWS ORDER BY INSERT_DATE";
 $rs = mysql_query($q, $conn);
 
 while($row = mysql_fetch_object($rs)){
 	print_r($row->SUBJECT);
 }
 
 echo mysql_num_rows($rs);
 
 mysql_free_result($rs);
 mysql_close($conn);
?>
