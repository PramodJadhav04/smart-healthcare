// Handle Registration Form
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const errorMessage = document.getElementById('errorMessage');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const age = document.getElementById('age').value;
            const gender = document.getElementById('gender').value;
            
            // Validation
            if (!fullName || !email || !phone || !password || !confirmPassword || !age || !gender) {
                showError('Please fill all required fields');
                return;
            }
            
            if (password !== confirmPassword) {
                showError('Passwords do not match');
                return;
            }
            
            if (password.length < 6) {
                showError('Password must be at least 6 characters');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('Please enter a valid email address');
                return;
            }
            
            // Phone validation
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phone)) {
                showError('Please enter a valid 10-digit phone number');
                return;
            }
            
            // Store user data in localStorage (for frontend demo)
            const userData = {
                fullName,
                email,
                phone,
                password,
                age,
                gender,
                bloodGroup: document.getElementById('bloodGroup').value,
                previousDiseases: document.getElementById('previousDiseases').value,
                emergencyName: document.getElementById('emergencyName').value,
                emergencyPhone: document.getElementById('emergencyPhone').value,
                registeredAt: new Date().toISOString()
            };
            
            // Save to localStorage
            localStorage.setItem('currentUser', JSON.stringify(userData));
            localStorage.setItem('isLoggedIn', 'true');
            
            // Show success message
            errorMessage.style.display = 'block';
            errorMessage.style.background = '#d4edda';
            errorMessage.style.color = '#155724';
            errorMessage.innerHTML = '✅ Account created successfully! Redirecting to dashboard...';
            
            // Redirect to dashboard after 2 seconds
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 2000);
        });
    }
    
    // Handle Login Form (if exists on same page)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            
            // For demo, check if user exists in localStorage
            const storedUser = JSON.parse(localStorage.getItem('currentUser'));
            
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'dashboard.html';
            } else {
                showError('Invalid email or password. For demo, register first.');
            }
        });
    }
    
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // Hide error after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
    
    // Check if user is already logged in
    function checkAuth() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const currentPage = window.location.pathname.split('/').pop();
        
        // If logged in and trying to access login/register, redirect to dashboard
        if (isLoggedIn === 'true' && (currentPage === 'login.html' || currentPage === 'register.html')) {
            window.location.href = 'dashboard.html';
        }
        
        // If not logged in and trying to access protected pages, redirect to login
        if (!isLoggedIn && (currentPage === 'dashboard.html' || currentPage === 'checkup.html' || currentPage === 'doctors.html')) {
            window.location.href = 'login.html';
        }
    }
    
    // Run auth check
    checkAuth();
});