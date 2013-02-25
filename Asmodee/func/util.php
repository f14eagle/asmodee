<?php

	function cutstr($str, $len){
		if(mb_strlen($str, "utf-8")>$len){
			return mb_substr($str, 0, $len, "utf-8")."...";
		}else{
			return $str;
		}
	}
?>
