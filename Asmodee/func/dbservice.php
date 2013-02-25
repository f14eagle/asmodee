<?php

	function get_connection(){
		$conn = mysql_connect("localhost:3306", "root");
 		mysql_select_db("asmodee", $conn);
 		mysql_query("SET NAMES 'utf8'");
 		return $conn;
	}
?>
