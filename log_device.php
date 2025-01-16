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

if (!empty($ip) && !empty($userAgent)) {
    $ip = filter_var($ip, FILTER_VALIDATE_IP);
    $userAgent = htmlspecialchars($userAgent, ENT_QUOTES, 'UTF-8');
    $logEntry = "$dateTime - IP: $ip - Dispositivo: $userAgent\n";
    if (file_put_contents('logs.txt', $logEntry, FILE_APPEND)) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error']);
    }
} else {
    echo json_encode(['status' => 'invalid data']);
}

if (!empty($ip) && !empty($userAgent)) {
    $ip = filter_var($ip, FILTER_VALIDATE_IP);
    $userAgent = htmlspecialchars($userAgent, ENT_QUOTES, 'UTF-8');
    $logEntry = "$dateTime - IP: $ip - Dispositivo: $userAgent\n";
    file_put_contents('logs.txt', $logEntry, FILE_APPEND);
}
