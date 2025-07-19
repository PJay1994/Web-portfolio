<?php
// Get the current page name for navigation highlighting
$current_page = basename($_SERVER['PHP_SELF'], '.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($page_title) ? $page_title . ' - Peter Bidle' : 'Peter Bidle - Portfolio'; ?></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <?php if (isset($include_main_styles) && $include_main_styles): ?>
    <!-- Main Portfolio Styles -->
    <style>
        /* YOUR EXISTING MAIN STYLES FROM index.html GO HERE */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            overflow-x: hidden;
        }
        
        /* Copy all your existing CSS from the <style> section in index.html here */
        /* I'll show you where to copy from below */
    </style>
    <?php else: ?>
    <!-- Project Page Styles -->
    <style>
        /* YOUR EXISTING PROJECT STYLES FROM vr-interaction-study.html GO HERE */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        /* Copy all your existing CSS from the <style> section in your project pages here */
    </style>
    <?php endif; ?>
</head>
<body>
    <!-- Navigation -->
    <nav id="navbar">
        <div class="container">
            <a href="index.php" class="logo">Peter Bidle</a>
            
            <?php if ($current_page === 'index'): ?>
            <!-- Main portfolio navigation -->
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <?php else: ?>
            <!-- Project page navigation -->
            <a href="index.php#portfolio" class="back-link">
                <i class="fas fa-arrow-left"></i>
                Back to Portfolio
            </a>
            <?php endif; ?>
        </div>
    </nav>