/**
 * Student Authentication Logic
 * Handles login, registration, and token management
 */

// API Base URL - Use Render backend in production
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000'
    : 'https://pyq-automation-system.onrender.com';

// Tab switching (only on login page)
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

if (loginTab && registerTab && loginForm && registerForm) {
    loginTab.addEventListener('click', () => {
        loginTab.classList.add('bg-white', 'text-purple-600', 'shadow-sm');
        loginTab.classList.remove('text-gray-600');
        registerTab.classList.remove('bg-white', 'text-purple-600', 'shadow-sm');
        registerTab.classList.add('text-gray-600');
        
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    registerTab.addEventListener('click', () => {
        registerTab.classList.add('bg-white', 'text-purple-600', 'shadow-sm');
        registerTab.classList.remove('text-gray-600');
        loginTab.classList.remove('bg-white', 'text-purple-600', 'shadow-sm');
        loginTab.classList.add('text-gray-600');
        
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });
}

// Show message
function showMessage(message, type = 'success') {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = `mt-4 p-4 rounded-lg ${type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`;
    messageDiv.classList.remove('hidden');
    
    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 5000);
}

// Login (only on login page)
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const loginBtn = document.getElementById('loginBtn');
        loginBtn.disabled = true;
        loginBtn.textContent = 'Logging in...';
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/student/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            
            if (data.success) {
                // Store token and student info
                localStorage.setItem('studentToken', data.token);
                localStorage.setItem('studentInfo', JSON.stringify(data.student));
                
                showMessage('Login successful! Redirecting...', 'success');
                
                // Redirect to dashboard
                setTimeout(() => {
                    window.location.href = 'student_dashboard.html';
                }, 1000);
            } else {
                showMessage(data.error || 'Login failed', 'error');
                loginBtn.disabled = false;
                loginBtn.textContent = 'Login';
            }
        } catch (error) {
            console.error('Login error:', error);
            showMessage('Network error. Please try again.', 'error');
            loginBtn.disabled = false;
            loginBtn.textContent = 'Login';
        }
    });
}

// Register (only on login page)
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const registerBtn = document.getElementById('registerBtn');
        registerBtn.disabled = true;
        registerBtn.textContent = 'Registering...';
        
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const enrollment_number = document.getElementById('registerEnrollment').value;
        const branch = document.getElementById('registerBranch').value;
        const semester = parseInt(document.getElementById('registerSemester').value);
        const password = document.getElementById('registerPassword').value;
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/student/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    enrollment_number,
                    branch,
                    semester,
                    password
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                // Store token and student info
                localStorage.setItem('studentToken', data.token);
                localStorage.setItem('studentInfo', JSON.stringify(data.student));
                
                showMessage('Registration successful! Redirecting...', 'success');
                
                // Redirect to dashboard
                setTimeout(() => {
                    window.location.href = 'student_dashboard.html';
                }, 1000);
            } else {
                showMessage(data.error || 'Registration failed', 'error');
                registerBtn.disabled = false;
                registerBtn.textContent = 'Register';
            }
        } catch (error) {
            console.error('Registration error:', error);
            showMessage('Network error. Please try again.', 'error');
            registerBtn.disabled = false;
            registerBtn.textContent = 'Register';
        }
    });
}

// Check if already logged in
function checkAuth() {
    const token = localStorage.getItem('studentToken');
    if (token && window.location.pathname.includes('student_login.html')) {
        // Already logged in, redirect to dashboard
        window.location.href = 'student_dashboard.html';
    }
}

// Verify token on protected pages
async function verifyStudentAuth() {
    const token = localStorage.getItem('studentToken');
    
    if (!token) {
        window.location.href = 'student_login.html';
        return null;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/student/verify`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const data = await response.json();
        
        if (data.success) {
            return data.student;
        } else {
            // Token invalid, redirect to login
            localStorage.removeItem('studentToken');
            localStorage.removeItem('studentInfo');
            window.location.href = 'student_login.html';
            return null;
        }
    } catch (error) {
        console.error('Auth verification error:', error);
        return null;
    }
}

// Logout function
function studentLogout() {
    localStorage.removeItem('studentToken');
    localStorage.removeItem('studentInfo');
    window.location.href = 'student_login.html';
}

// Check auth on page load
if (window.location.pathname.includes('student_login.html')) {
    checkAuth();
}
