import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const usePhone = () => {
    const input = document.querySelector('#phone');

    intlTelInput(input, {
        initialCountry: 'auto',
        geoIpLookup: (callback) => {
            fetch('https://ipapi.co/json')
                .then((res) => res.json())
                .then((data) => callback(data.country_code))
                .catch(() => callback('us'));
        },
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });

    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('input, textarea');
    const errorMessages = form.querySelectorAll('.error-message');

    function validateField(field, regex, errorMessage) {
        const value = field.value.trim();
        const errorSpan = field.nextElementSibling;

        if (!regex.test(value)) {
            field.classList.add('invalid');
            errorSpan.textContent = errorMessage;
        } else {
            field.classList.remove('invalid');
            errorSpan.textContent = '';
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            switch (input.name) {
                case 'firstName':
                    validateField(input, /^[a-zA-Zа]+$/, 'Incorrect name format');
                    break;
                case 'lastName':
                    validateField(input, /^[a-zA-Zа-яА-Я]+$/, 'Incorrect last name format');
                    break;
                case 'phone':
                    validateField(
                        input,
                        /^\+?\d{1,3}?[-\s]?\(?\d{1,3}\)?[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,9}$/,
                    );
                    break;
                case 'email':
                    validateField(
                        input,
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        'Incorrect email format',
                    );
                    break;
            }
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        isValid = !Array.from(inputs).some((input) => input.classList.contains('invalid'));

        if (isValid) {
            form.submit();
        }
    });
};
