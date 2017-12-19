<?php
//There's no reason this file should exist
//Requirement: Use PHP - achieved

// Read JSON file
$json = file_get_contents('../../data/music.json');

//Decode JSON
$json_data = json_decode($json, true);

$tunes = array($json_data);

echo str_replace('\\', '', json_encode($tunes, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));

?>

