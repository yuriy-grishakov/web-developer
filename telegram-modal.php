<?php

$category = (isset($_POST['category'])) ? $_POST['category'] : '';
switch ($category) {
	case "category-site": $radio = "Сайт";
		break;
    case "category-banner": $radio = "Баннер";
		break;
    case "category-polygraphy": $radio = "Полиграфия";
		break;
	case "category-other": $radio = "Другое";
		break;
}

$name = $_POST['name'];
$phone = $_POST['phone'];

$token = "5086148467:AAEby1th54ild09zEIJ9oC8DUzOKPk40LtY";
$chat_id = "-758109384";
$arr = array(
  'Проект: ' => $category,
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>