<style type="text/css">

.container {
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    margin-top: 130px;
    width: 80%;
    background-color: RGBA(0, 0, 0, 0.4);
    padding: 20px;
    border-radius: 30px;
    align-items: center;
}

p {
    font-size: 30px;
    text-align: center;
    margin-top: 15px;
    font-weight: bold;
    color: white;
}
body {
    background-image: url('./images/background.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
a {
    text-decoration: none;
    color: black;
    font-weight: bold;
}

button {
    margin: 0 auto;
    padding: 15px;
    display: inherit;
    background: white;
    opacity: 0.7;
    cursor: pointer;
}

button:hover {
    opacity: 1
}
</style>

<?php
if (isset($_POST['Email'])) {

    $email_to = "tomaszgr95@interia.pl";
    $email_subject = "Nowa wiadomość";

    function problem($error)
    {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }


    if (
        !isset($_POST['Name']) ||
        !isset($_POST['Email']) ||
        !isset($_POST['Message'])
    ) {
        problem('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $message = $_POST['Message'];

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The Email address you entered does not appear to be valid.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'The Name you entered does not appear to be valid.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'The Message you entered do not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Szczegóły wiadomości poniżej\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Imię: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Wiadomość: " . clean_string($message) . "\n";


    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>


<div class='container'>
    <p>Dziękujemy za wiadomość, postaramy się odpowiedzieć jak najszybciej.</p>
    <button><a href='./index'>Powrót do strony głównej</a></button>
</div>
<?php
}
?>
