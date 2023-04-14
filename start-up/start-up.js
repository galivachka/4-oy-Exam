let myUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7c727b8a37449d8bd90b33bf220b129'
const input = document.querySelector(".search__inp");
let currentPage = 1;

const paginationWrapper = document.querySelector('.pagination-wrapper');


async function myFetchData() {
    ``;

    try {
        const searchingBox = document.querySelector(".search__box");
        const myInp = document.querySelector(".search__inp").value;

        if (myInp) {
            myUrl = `https://newsapi.org/v2/everything?q=${myInp}&apiKey=e7c727b8a37449d8bd90b33bf220b129`;
        } else {
            myUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7c727b8a37449d8bd90b33bf220b129&page=${currentPage}`;
        }

        let response = await fetch(myUrl);
        let data = await response.json();

        let totalPages = data.totalResults > 4 ? 4 : data.totalResults;
        searchingBox.innerHTML = '';

        if (data.articles.length === 0) {
            const notFound = document.createElement('div');
            notFound.textContent = 'No Information...'
            searchingBox.appendChild(notFound);
        } else {
            data.articles.slice(0, 6).map((fetches) => {
                const wrapperDiv = document.createElement('div');
                wrapperDiv.classList.add('wrapper__item');
                const wrapperImg = document.createElement('img');
                const wrapperDiv2 = document.createElement('div');
                wrapperDiv2.classList.add("search-box-text");
                const wrapperSpan = document.createElement('span');
                const wrappperTitle = document.createElement('h2');
                const wrapperP = document.createElement('p');

                // wrapperImg.src = fetches.urlToImage
                if (wrapperImg.src == null) {
                    wrapperImg.src = 'https://avatars.mds.yandex.net/get-verba/1540742/2a00000180d7fa047e2e09e71e665301c310/cattouch'
                } else {
                    wrapperImg.src = fetches.urlToImage

                }
                wrapperImg.alt = fetches.title;
                wrapperImg.classList.add('wrapper__img')
                wrapperSpan.textContent = fetches.author;
                wrapperSpan.classList.add('wrapper__span')
                wrappperTitle.textContent = fetches.title;
                wrappperTitle.classList.add('wrapper__h2')
                wrapperP.textContent = fetches.description;

                wrapperDiv2.append(wrapperSpan, wrappperTitle, wrapperP);

                wrapperDiv.append(wrapperImg, wrapperDiv2);

                searchingBox.append(wrapperDiv);
            })
            paginationWrapper.innerHTML = '';
            const buttonsDiv = document.querySelector('.buttons__div')
            if (totalPages > 1) {
                for (let s = 1; s <= totalPages; s++) {
                    const button = document.createElement('button');
                    button.innerText = s;

                    if (currentPage === s) {
                        button.classList.add('button-active')
                    }
                    button.addEventListener('click', () => {
                        currentPage = s;
                        myFetchData();
                    })
                    button.classList.add('btnact')
                    searchingBox.appendChild(button);
                }
            }
        }

    } catch (error) {
        console.error(error);
    }
}
myFetchData();
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        myFetchData();
    }
});