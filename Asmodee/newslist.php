<?php
include "func/dbservice.php";
include "func/util.php";
header("Content-Type: text/html; charset=utf-8");

$conn = get_connection();

include "ser_newslist.php";

mysql_close($conn);
?>