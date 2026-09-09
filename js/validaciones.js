

const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const form = document.getElementById('loginForm');

    // Reglas de validación
const ruleLength = document.getElementById('ruleLength');
const ruleNumber = document.getElementById('ruleNumber');
const ruleSpecial = document.getElementById('ruleSpecial');

    // Muestra / Oculta contraseña
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.querySelector('i').classList.toggle('bi-eye');
    togglePassword.querySelector('i').classList.toggle('bi-eye-slash');
    });

    // Validación en tiempo real de la contraseña
passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    const hasLength = val.length >= 8;
    const hasNumber = /\d/.test(val);
    const hasSpecial = /[@$!%*?&]/.test(val);

    updateRule(ruleLength, hasLength);
    updateRule(ruleNumber, hasNumber);
    updateRule(ruleSpecial, hasSpecial);
    });

    function updateRule(element, isValid) {
    if (isValid) {
        element.className = 'text-success';
        element.querySelector('i').className = 'bi bi-check-circle-fill me-1';
    } else {
        element.className = 'text-danger';
        element.querySelector('i').className = 'bi bi-x-circle me-1';
    }
    }

    // Validación al enviar el formulario
    form.addEventListener('submit', (event) => {
    const val = passwordInput.value;
    const isValidPassword = val.length >= 8 && /\d/.test(val) && /[@$!%*?&]/.test(val);

    if (!form.checkValidity() || !isValidPassword) {
        event.preventDefault();
        event.stopPropagation();
        
        if (!isValidPassword) {
        passwordInput.setCustomValidity("Invalid");
        } else {
        passwordInput.setCustomValidity("");
        }
    } else {
        passwordInput.setCustomValidity("");
    }

    form.classList.add('was-validated');
    });
