<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$company = $_POST['company'] ?? '';
$phone = $_POST['phone'] ?? '';
$service = $_POST['service'] ?? '';
$budget = $_POST['budget'] ?? '';
$message = $_POST['message'] ?? '';

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and message are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Database connection
try {
    include '../config/database.php';
    
    // Insert contact submission
    $contact_id = DB::insert('contact_submissions', [
        'name' => $name,
        'email' => $email,
        'company' => $company,
        'phone' => $phone,
        'service_interest' => $service,
        'budget_range' => $budget,
        'message' => $message,
        'status' => 'new'
    ]);
    
} catch (Exception $e) {
    error_log("Database error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save contact information']);
    exit;
}

// Send email notification
$to = 'sales@f24tech.com';
$subject = 'New Contact Form Submission from ' . $name;

$email_body = "
New Contact Form Submission

Name: $name
Email: $email
Company: " . ($company ?: 'Not provided') . "
Phone: " . ($phone ?: 'Not provided') . "
Service Interest: " . ($service ?: 'Not specified') . "
Budget Range: " . ($budget ?: 'Not specified') . "

Message:
$message

---
Submitted on: " . date('Y-m-d H:i:s') . "
Contact ID: $contact_id
";

$headers = "From: noreply@f24tech.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mail_sent = mail($to, $subject, $email_body, $headers);

if (!$mail_sent) {
    error_log("Failed to send email notification for contact ID: $contact_id");
}

// Send auto-reply to user
$auto_reply_subject = 'Thank you for contacting F24Tech Softwares';
$auto_reply_body = "
Dear $name,

Thank you for reaching out to F24Tech Softwares. We have received your inquiry and will get back to you within 24 hours.

Here's a summary of your submission:
- Service Interest: " . ($service ?: 'General Inquiry') . "
- Budget Range: " . ($budget ?: 'To be discussed') . "

Our team will review your requirements and contact you soon to discuss how we can help bring your project to life.

Best regards,
F24Tech Softwares Team

Contact Information:
Email: sales@f24tech.com
Phone: +91 8950773419
Address: Plot No. 44, Sector 44, Gurgaon, Haryana, 122003, INDIA

Website: https://f24tech.com
";

$auto_reply_headers = "From: sales@f24tech.com\r\n";
$auto_reply_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$auto_reply_headers .= "X-Mailer: PHP/" . phpversion();

mail($email, $auto_reply_subject, $auto_reply_body, $auto_reply_headers);

echo json_encode([
    'success' => true, 
    'message' => 'Thank you for your message. We will get back to you within 24 hours!'
]);
?>