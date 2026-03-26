// Initialize theme from localStorage or system preference
function initializeTheme() {
	const savedTheme = localStorage.getItem('theme') || 'dark';
	document.documentElement.setAttribute('data-theme', savedTheme);
	updateToggleIcon(savedTheme);
}

// Update toggle button icon based on current theme
function updateToggleIcon(theme) {
	const toggleIcon = document.querySelector('.theme-toggle-icon');
	toggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Toggle between light and dark themes
function toggleTheme() {
	const html = document.documentElement;
	const currentTheme = html.getAttribute('data-theme');
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
	
	html.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);
	updateToggleIcon(newTheme);
}

// Event listener for theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Initialize theme when page loads
initializeTheme();