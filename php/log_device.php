<?php
// Lê os dados enviados via POST
$data = json_decode(file_get_contents('php://input'), true);

// Verifica se os dados foram recebidos
if ($data) {
    $ip = $data['ip'];
    $userAgent = $data['userAgent'];
    $dateTime = date('Y-m-d H:i:s');

    // Cria uma linha de log
    $logEntry = "$dateTime - IP: $ip - Dispositivo: $userAgent\n";

    // Salva no arquivo logs.txt
    file_put_contents('logs.txt', $logEntry, FILE_APPEND);
}