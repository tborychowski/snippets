<?php

// import sql file
$file_content = file('updates.sql');
$query = "";
foreach ($file_content as $sql_line) {
	if (trim($sql_line) != "" && strpos($sql_line, "--") === false) {
		$query .= $sql_line;
		if (substr(rtrim($query), -1) == ';') {
			$result = $dbo -> dbEdit($query);
			echo $query . '<br>Result: ' . ($result==1 ? 'OK' : $result) . '<br><br><br>';
			$query = "";
		}
	}
}
