<?php

// Read JSON file
$json = file_get_contents('../../data/music.json');

//Decode JSON
$json_data = json_decode($json, true);

$tunes = array($json_data);

echo json_encode($tunes, JSON_UNESCAPED_SLASHES);

?>

