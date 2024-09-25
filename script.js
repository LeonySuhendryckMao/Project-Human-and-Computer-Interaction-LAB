const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('toggle-active');
});

let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        body.classList.remove('toggle-active');
    })
})


window.addEventListener('load', function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    const showSlide = (index) => {
        const offset = -index * 100; 
        carousel.style.transform = `translateX(${offset}%)`;
    };

    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % totalItems;
            showSlide(currentIndex);
        });

        prevBtn.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            showSlide(currentIndex);
        });
    }
});


function validateForm() {
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("termsError").textContent = "";

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const termsChecked = document.getElementById("terms").checked;

    let isValid = true;

    if (username.length < 3) {
        document.getElementById("usernameError").textContent = "Username must be at least 3 characters.";
        isValid = false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    }

    if (phone.length < 10) {
        document.getElementById("phoneError").textContent = "Phone number must be at least 10 digits.";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    if (!termsChecked) {  
        document.getElementById("termsError").textContent = "Please agree to the Terms and Conditions.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        location.reload()
    }
}
