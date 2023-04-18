<?php
$rand = rand(1,20);//20是图片总数量
$file_url = 'https://s-ssss.github.io/image/' . $rand . '.jpg';
header('Content-type:image/jpeg');
echo file_get_contents($file_url);
?>
