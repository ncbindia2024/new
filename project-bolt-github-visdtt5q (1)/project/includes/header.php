<header id="header" class="fixed w-full top-0 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
            <a href="?page=home" class="flex items-center space-x-2">
                <div class="bg-blue-700 p-2 rounded-lg">
                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                </div>
                <span id="logo-text" class="text-xl font-bold">F24Tech</span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-8">
                <a href="?page=home" class="nav-link text-sm font-medium transition-colors hover:text-blue-600">Home</a>
                <a href="?page=about" class="nav-link text-sm font-medium transition-colors hover:text-blue-600">About</a>
                <a href="?page=services" class="nav-link text-sm font-medium transition-colors hover:text-blue-600">Services</a>
                <a href="?page=portfolio" class="nav-link text-sm font-medium transition-colors hover:text-blue-600">Portfolio</a>
                <a href="?page=contact" class="nav-link text-sm font-medium transition-colors hover:text-blue-600">Contact</a>
            </nav>

            <!-- Mobile menu button -->
            <button id="mobile-menu-btn" class="md:hidden p-2 rounded-md">
                <svg id="menu-icon" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg id="close-icon" class="h-6 w-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="md:hidden bg-white rounded-lg shadow-lg mt-2 py-2 hidden">
            <a href="?page=home" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Home</a>
            <a href="?page=about" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">About</a>
            <a href="?page=services" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Services</a>
            <a href="?page=portfolio" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Portfolio</a>
            <a href="?page=contact" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Contact</a>
        </div>
    </div>
</header>