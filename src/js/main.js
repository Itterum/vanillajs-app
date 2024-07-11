const translations = {
    en: {
        login_title: 'Log in to your Account',
        welcome: 'Welcome back, please enter your details.',
        or: 'or',
        email_label: 'email address',
        password_label: 'password',
        remember_me: 'remember me',
        forgot_password: 'forgot password?',
        login_button: 'Login',
        no_account: 'Don\'t have an account?',
        sign_up: 'sign up',
        continue_with_google: 'Continue with Google',
    },
    ru: {
        login_title: 'Войти в свой аккаунт',
        welcome: 'Добро пожаловать, пожалуйста, введите ваши данные.',
        or: 'или',
        email_label: 'адрес электронной почты',
        password_label: 'пароль',
        remember_me: 'запомнить меня',
        forgot_password: 'забыли пароль?',
        login_button: 'Войти',
        no_account: 'У вас нет аккаунта?',
        sign_up: 'зарегистрироваться',
        continue_with_google: 'Продолжить с Google',
    },
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// По умолчанию установить начальный язык (английский)
setLanguage('en');