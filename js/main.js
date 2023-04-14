// // const imagesUrl = 'https://image.tmdb.org/t/p/w500';
// let url = 'https://newsapi.org/v2/everything?q=Samsung&apiKey=e7c727b8a37449d8bd90b33bf220b129';
// const searchUrl = `https://newsapi.org/v2/everything?q=Samsung&apiKey=e7c727b8a37449d8bd90b33bf220b129`;
// let searchUrl2 = fullText = true;
// const fragment = document.createDocumentFragment();
// const moviesList = document.querySelector('.movies-list');
// const loaderContainer = document.querySelector('.loader_container')
// const loading = document.createElement('div');
// loading.classList.add('loader');
// loaderContainer.appendChild(loading);
// const search = document.querySelector('.search');
// const btn = document.querySelector('.btn');
// async function fetchData() {
//     const searchIerm = search.value;
//     if (searchIerm) {
//         url = { searchUrl } { searchIerm } { searchUrl2 }
//     } else {
//         url = 'https://newsapi.org/v2/everything?q=Samsung&apiKey=e7c727b8a37449d8bd90b33bf220b129'
//     }
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         moviesList.innerHTML = '';
//         data.map((country) => {
//             const image = document.createElement('img');
//             image.src = { country.flags.png };
//             const title = document.createElement('h4');
//             title.textContent = { country.name.common };
//             const countryContinent = document.createElement('h4');
//             countryContinent.textContent = { country.continents };
//             const popStrtext = document.createElement("h4")
//             const toStringPopulation = String(country.population)
//             const currencies = document.createElement("h4");
//             const div = document.createElement('div');
//             div.appendChild(image);
//             div.appendChild(title);
//             div.appendChild(countryContinent);
//         })



//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchData();
// btn.addEventListener('click', () => {
//     fetchData();
// })
// search.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         setTimeout(() => {
//             fetchData();
//         }, 4000);
//     }
// })


// // // Register
// // const freshForm = document.querySelector('.fresh__form'),
// //     freshInp1 = document.querySelector('.fresh__inp'),
// //     freshInp2 = document.querySelector('.lname__inp'),
// //     userName = document.querySelector(".usern__inp"),
// //     password = document.querySelector(".password__inp"),
// //     Cpassword = document.querySelector(".Cpassword__inp"),

// //     freshSpan1 = document.querySelector('.fresh__inp__span1'),
// //     freshSpan2 = document.querySelector('.fresh__inp__span2'),
// //     freshSpan3 = document.querySelector('.fresh__inp__span3'),
// //     freshSpan4 = document.querySelector('.fresh__inp__span4'),
// //     freshSpan5 = document.querySelector('.fresh__inp__span5');


// // freshForm.addEventListener('submit', function(e) {
// //     e.preventDefault();
// //     if (freshInp1.value === '') {
// //         freshSpan1.classList.add('red__error');
// //         freshSpan1.textContent = 'Пожалуйста введите имя!!!'
// //     } else {
// //         freshSpan1.classList.add('green__error');
// //         freshSpan1.textContent = 'Well Done'
// //     }
// //     if (freshInp2.value === '') {
// //         freshSpan2.classList.add('red__error');
// //         freshSpan2.textContent = 'Пожалуйста введите электронную почту!!!'
// //     } else {
// //         freshSpan2.classList.add('green__error');
// //         freshSpan2.textContent = 'Well Done'
// //     }

// //     if (userName.value === '') {
// //         freshSpan3.classList.add('red__error');
// //         freshSpan3.textContent = 'Пожалуйста введите ник!!!'
// //     } else {
// //         freshSpan3.classList.add('green__error');
// //         freshSpan3.textContent = 'Well Done'
// //     }
// //     if (password.value === '') {
// //         freshSpan4.classList.add('red__error');
// //         freshSpan4.textContent = 'Пожалуйста введите пароль!!!'
// //     } else {
// //         freshSpan4.classList.add('green__error');
// //         freshSpan4.textContent = 'Well Done'
// //     }


// //     if (password.value === Cpassword.value) {
// //         freshSpan5.classList.add('green__error');
// //         freshSpan5.textContent = 'tufta'
// //     } else {
// //         freshSpan5.classList.add('red__error');
// //         freshSpan5.textContent = 'Пароль правельный!!!'
// //     }
// // })