<?php
$rand = rand(1,23);//10是图片总数量
$file_url = 'http://s-ssss.github.io/image/' . $rand . '.jpg';
header('Content-type:image/jpeg');
echo file_get_contents($file_url);
?>
