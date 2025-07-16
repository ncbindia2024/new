<?php
session_start();
$current_page = $_GET['page'] ?? 'home';
$title = 'F24Tech Softwares Professional Website';

// Simple routing
$valid_pages = ['home', 'about', 'services', 'portfolio', 'contact', 'blog', 'careers', 'privacy', 'terms'];
if (!in_array($current_page, $valid_pages)) {
    $current_page = 'home';
}

// Set page-specific titles
$page_titles = [
    'home' => 'F24Tech Softwares - Professional Software Development',
    'about' => 'About Us - F24Tech Softwares',
    'services' => 'Our Services - F24Tech Softwares',
    'portfolio' => 'Portfolio - F24Tech Softwares',
    'contact' => 'Contact Us - F24Tech Softwares',
    'blog' => 'Blog - F24Tech Softwares',
    'careers' => 'Careers - F24Tech Softwares',
    'privacy' => 'Privacy Policy - F24Tech Softwares',
    'terms' => 'Terms of Service - F24Tech Softwares'
];

$title = $page_titles[$current_page] ?? $title;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($title); ?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'inter': ['Inter', 'sans-serif'],
                    },
                    animation: {
                        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }
                }
            }
        }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <main>
        <?php
        switch($current_page) {
            case 'about':
                include 'pages/about.php';
                break;
            case 'services':
                include 'pages/services.php';
                break;
            case 'portfolio':
                include 'pages/portfolio.php';
                break;
            case 'contact':
                include 'pages/contact.php';
                break;
            case 'blog':
                include 'pages/blog.php';
                break;
            case 'careers':
                include 'pages/careers.php';
                break;
            case 'privacy':
                include 'pages/privacy.php';
                break;
            case 'terms':
                include 'pages/terms.php';
                break;
            default:
                include 'pages/home.php';
                break;
        }
        ?>
    </main>
    
    <?php include 'includes/footer.php'; ?>
    <?php include 'includes/cookie-consent.php'; ?>
    <?php include 'includes/chatbot.php'; ?>
    
    <script src="assets/js/main.js"></script>
    <script src="assets/js/analytics.js"></script>
</body>
</html>