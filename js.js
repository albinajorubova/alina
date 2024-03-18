const phoneInput = document.getElementById('phone-input'); // Corrected ID
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordIcon = document.querySelector('.password-icon');

phoneInput.addEventListener('input', function() {
  const regex = /^\+7\d{10}$/;
  if (regex.test(this.value)) {
    this.style.borderColor = 'green';
  } else {
    this.style.borderColor = 'red';
  }
});

emailInput.addEventListener('input', function() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(this.value)) {
    this.style.borderColor = 'green';
  } else {
    this.style.borderColor = 'red';
  }
});

passwordIcon.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  if (type === 'text') {
    passwordIcon.classList.remove('fa-eye-slash');
    passwordIcon.classList.add('fa-eye');
  } else {
    passwordIcon.classList.remove('fa-eye');
    passwordIcon.classList.add('fa-eye-slash');
  }
});

const nameInput = document.getElementById('name-input');
        const nameValidation = document.getElementById('name-validation');

        nameInput.addEventListener('input', function() {
            const regex = /^[A-Za-zА-Яа-яЁё\s]*$/;
            if (!regex.test(this.value)) {
                nameValidation.textContent = "Пожалуйста, используйте только буквы.";
            } else {
                nameValidation.textContent = "";
            }
            this.value = this.value.replace(/[0-9]/g, '');
        });

        const phoneValidation = document.getElementById('phone-validation');

        phoneInput.addEventListener('input', function() {
            let phoneNumber = this.value.replace(/\D/g, ''); 
            phoneNumber = phoneNumber.slice(0, 12);

            let formattedNumber = '';

            if (phoneNumber.startsWith('9')) {
                formattedNumber = '+7' + phoneNumber;
            } else {
                formattedNumber = '+7' + phoneNumber.slice(1); 
            }
            this.value = formattedNumber;
        });