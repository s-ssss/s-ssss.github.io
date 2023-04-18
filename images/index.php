<?php
$rand = rand(1,20);//20是图片总数量
$file_url = 'https://raw.githubusercontent.com/s-ssss/s-ssss.github.io/main/image/1' . $rand . '.jpg';
header('Content-type:image/jpeg');
echo file_get_contents($file_url);
?>
