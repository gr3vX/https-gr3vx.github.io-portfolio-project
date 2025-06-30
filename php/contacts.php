<?php

$to_email = "danielemanno@istitutoangioy.edu.it";
$subject_prefix = "Nuovo messaggio dal tuo sito web: ";

$db_host = "localhost";
$db_user = "nome_utente_db";
$db_pass = "password_db";
$db_name = "nome_del_tuo_database";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sender_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $object = htmlspecialchars($_POST['object']);
    $message = htmlspecialchars($_POST['info']);

    if (empty($sender_email) || !filter_var($sender_email, FILTER_VALIDATE_EMAIL)) {
        die("Errore: Indirizzo email non valido.");
    }
    if (empty($object)) {
        $object = "Nessun oggetto";
    }
    if (empty($message)) {
        die("Errore: Il messaggio non può essere vuoto.");
    }

    $full_subject = $subject_prefix . $object;
    $email_body = "Email del mittente: " . $sender_email . "\n\n" .
                  "Oggetto: " . $object . "\n\n" .
                  "Messaggio:\n" . $message;

    $headers = "From: webmaster@yourdomain.com\r\n";
    $headers .= "Reply-To: " . $sender_email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to_email, $full_subject, $email_body, $headers)) {
        echo "Email inviata con successo!<br>";
    } else {
        echo "Errore durante l'invio dell'email.<br>";
        error_log("Failed to send email from " . $sender_email . " to " . $to_email);
    }

    $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

    if (!$conn) {
        die("Connessione al database fallita: " . mysqli_connect_error());
    }

    $stmt = mysqli_prepare($conn, "INSERT INTO messages (sender_email, object, message) VALUES (?, ?, ?)");

    if ($stmt === false) {
        die("Errore nella preparazione della query: " . mysqli_error($conn));
    }

    mysqli_stmt_bind_param($stmt, "sss", $sender_email, $object, $message);

    if (mysqli_stmt_execute($stmt)) {
        echo "Dati salvati nel database con successo!";
    } else {
        echo "Errore durante il salvataggio dei dati nel database: " . mysqli_error($conn);
    }

    mysqli_stmt_close($stmt);
    mysqli_close($conn);

} else {
    header("Location: ../index.html");
    exit();
}

?>
