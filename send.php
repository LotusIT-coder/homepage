<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Only POST allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Rate limit: max 5 submissions per IP per hour (file-based)
$ratefile = sys_get_temp_dir() . '/lotus_it_rate_' . md5($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$now = time();
$attempts = [];
if (file_exists($ratefile)) {
    $attempts = array_filter(
        explode("\n", trim(file_get_contents($ratefile))),
        fn($t) => $t && ($now - (int)$t) < 3600
    );
}
if (count($attempts) >= 5) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.']);
    exit;
}
$attempts[] = $now;
file_put_contents($ratefile, implode("\n", $attempts));

// Read & sanitize input
$name      = trim(strip_tags($_POST['name'] ?? ''));
$email     = trim(strip_tags($_POST['email'] ?? ''));
$betreff   = trim(strip_tags($_POST['betreff'] ?? ''));
$nachricht = trim(strip_tags($_POST['nachricht'] ?? ''));

// Honeypot check (bot trap)
if (!empty($_POST['website'])) {
    // Silently succeed for bots
    echo json_encode(['ok' => true]);
    exit;
}

// Validate required fields
if ($name === '' || $email === '' || $nachricht === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Bitte geben Sie eine gültige E-Mail-Adresse ein.']);
    exit;
}

// Map service keys to readable labels
$services = [
    'software'   => 'Softwareentwicklung & -betreuung',
    'ki'         => 'KI-Schulungen & Beratung',
    'security'   => 'Sicherheitsberatung',
    'sonstiges'  => 'Sonstiges',
];
$service_label = $services[$betreff] ?? ($betreff ?: 'Nicht angegeben');

// Build email
$to = 'contact@lotus-it.eu';
$subject = "Anfrage über lotus-it.de: $service_label";

$body  = "Neue Anfrage über das Kontaktformular\n";
$body .= "======================================\n\n";
$body .= "Name:      $name\n";
$body .= "E-Mail:    $email\n";
$body .= "Leistung:  $service_label\n\n";
$body .= "Nachricht:\n";
$body .= "--------------------------------------\n";
$body .= $nachricht . "\n";
$body .= "--------------------------------------\n\n";
$body .= "Gesendet am: " . date('d.m.Y H:i') . " Uhr\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unbekannt') . "\n";

// Headers — prevent header injection
$safe_name  = preg_replace('/[\r\n]/', '', $name);
$safe_email = preg_replace('/[\r\n]/', '', $email);

$headers  = "From: Lotus IT-Services Webseite <noreply@lotus-it.eu>\r\n";
$headers .= "Reply-To: $safe_name <$safe_email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: Lotus IT-Services Contact Form\r\n";

// Send
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es per E-Mail.']);
}
