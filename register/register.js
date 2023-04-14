// Register
const freshForm = document.querySelector('.fresh__form'),
    freshInp1 = document.querySelector('.fresh__inp'),
    freshInp2 = document.querySelector('.lname__inp'),
    userName = document.querySelector(".usern__inp"),
    password = document.querySelector(".password__inp"),
    Cpassword = document.querySelector(".Cpassword__inp"),

    freshSpan1 = document.querySelector('.fresh__inp__span1'),
    freshSpan2 = document.querySelector('.fresh__inp__span2'),
    freshSpan3 = document.querySelector('.fresh__inp__span3'),
    freshSpan4 = document.querySelector('.fresh__inp__span4'),
    freshSpan5 = document.querySelector('.fresh__inp__span5');


freshForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (freshInp1.value === '') {
        freshSpan1.classList.add('red__error');
        freshSpan1.textContent = 'Пожалуйста введите имя!!!'
    } else {
        freshSpan1.classList.add('green__error');
        freshSpan1.textContent = 'Well Done'
    }
    if (freshInp2.value === '') {
        freshSpan2.classList.add('red__error');
        freshSpan2.textContent = 'Пожалуйста введите электронную почту!!!'
    } else {
        freshSpan2.classList.add('green__error');
        freshSpan2.textContent = 'Well Done'
    }

    if (userName.value === '') {
        freshSpan3.classList.add('red__error');
        freshSpan3.textContent = 'Пожалуйста введите ник!!!'
    } else {
        freshSpan3.classList.add('green__error');
        freshSpan3.textContent = 'Well Done'
    }
    if (password.value === '') {
        freshSpan4.classList.add('red__error');
        freshSpan4.textContent = 'Пожалуйста введите пароль!!!'
    } else {
        freshSpan4.classList.add('green__error');
        freshSpan4.textContent = 'Well Done'
    }


    if (password.value === Cpassword.value) {
        freshSpan5.classList.add('green__error');
        freshSpan5.textContent = 'tufta'
    } else {
        freshSpan5.classList.add('red__error');
        freshSpan5.textContent = 'Пароль неправельный!!!'
    }
})