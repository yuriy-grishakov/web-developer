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

$company = $_POST['name-company'];
$activity = $_POST['field-activity'];
$site = $_POST['link-site'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];
$examples = $_POST['examples'];

$token = "5086148467:AAEby1th54ild09zEIJ9oC8DUzOKPk40LtY";
$chat_id = "-758109384";
$arr = array(
  'Проект: ' => $category,
  'Название компании: ' => $company,
  'Сфера деятельности: ' => $activity ,
  'Ссылкана на сайт: ' => $site,
  'Имя пользователя: ' => $name,
  'Email' => $email,
  'Телефон: ' => $phone,
  'Сообщение:' => $msg,
  'Примеры: ' => $examples
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