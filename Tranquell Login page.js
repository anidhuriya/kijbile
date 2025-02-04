document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const otpForm = document.getElementById('otp-form');
    const sendOtpButton = document.getElementById('send-otp');
    const verifyOtpButton = document.getElementById('verify-otp');
    const mobileInput = document.getElementById('mobile');
    const otpInput = document.getElementById('otp');
    const mobileError = document.getElementById('mobile-error');
    const otpError = document.getElementById('otp-error');

    let generatedOtp = '1234'; // Common OTP for testing

    // Reset forms on page load
    loginForm.style.display = 'block';
    otpForm.style.display = 'none';

    sendOtpButton.addEventListener('click', function(event) {
        event.preventDefault();
        const mobileNumber = mobileInput.value.trim();

        if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
            mobileError.textContent = 'Please enter a valid 10-digit mobile number.';
            return;
        }

        mobileError.textContent = '';
        alert(`OTP sent to ${mobileNumber}`); // Simulate OTP sending

        // Hide login form and show OTP form
        loginForm.style.display = 'none';
        otpForm.style.display = 'block';
    });

    verifyOtpButton.addEventListener('click', function(event) {
        event.preventDefault();
        const enteredOtp = otpInput.value.trim();

        if (!enteredOtp || enteredOtp !== generatedOtp) {
            otpError.textContent = 'Invalid OTP. Please try again.';
            return;
        }

        otpError.textContent = '';
        alert('OTP verified successfully! Redirecting to Tranquell Home Page...');

        // Redirect to Tranquell Home Page
        window.location.href = 'Tranquell Home page.html'; // Replace with the correct URL
    });
});