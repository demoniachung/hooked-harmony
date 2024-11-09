// Toggle between Log-In and Sign-Up forms
const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginButton.addEventListener('click', () => {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    loginButton.classList.add('active');
    signupButton.classList.remove('active');
});

signupButton.addEventListener('click', () => {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
    signupButton.classList.add('active');
    loginButton.classList.remove('active');
});

// Display login form by default
loginForm.style.display = 'block';
signupForm.style.display = 'none';

// Sign-Up Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Save the username and password to local storage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Account created successfully! Redirecting to login page.');
    
    // Redirect to login page
    window.location.href = 'Index.html'; // Adjust the path if necessary
});

// Log-In Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored username and password
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check credentials
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful! Redirecting to home page.');
        // Redirect to home page
        window.location.href = 'Home.html'; // Adjust the path if necessary
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
