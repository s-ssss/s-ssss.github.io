<?php
$rand = rand(1,20);//20是图片总数量
$file_url = 'http://网址/image/' . $rand . '.jpg';
header('Content-type:image/jpeg');
echo file_get_contents($file_url);
?>
