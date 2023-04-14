let fetchURL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7c727b8a37449d8bd90b33bf220b129'
const input = document.querySelector(".search__inp");
let currentPage = 1;

const paginationWrapper = document.querySelector('.page-wrapper');


async function myFetchData() {
    ``;
    
    try {
        const searchWrapper = document.querySelector(".searching__box");
        const inputValue = document.querySelector(".search__inp").value;
        
        if (inputValue) {
            fetchURL = `https://newsapi.org/v2/everything?q=${inputValue}&apiKey=e7c727b8a37449d8bd90b33bf220b129`;
        } else {
            fetchURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7c727b8a37449d8bd90b33bf220b129&page=${currentPage}`;
        }
        fetch(fetchURL)
        .then(res => res.json())
        .then(data => {
            let totalPages = data.totalResults > 3 ? 3 : data.totalResults;
            searchWrapper.innerHTML = '';
            
            if (data.articles.length === 0) {
                const noInfo = document.createElement('div');
                noInfo.textContent = 'No Info...'
                searchWrapper.appendChild(noInfo);
            } else {
                data.articles.slice(0, 6).map((fetches) => {
                    const wrap1 = document.createElement('div');
                    wrap1.classList.add('wrapper__item');
                    const wrapperImg = document.createElement('img');
                    const wrap2 = document.createElement('div');
                    wrap2.classList.add("search-box-text");
                    const wrapSpan = document.createElement('span');
                    const wrapTitle = document.createElement('h2');
                    const wrapP = document.createElement('p');
                    
        
                    if (wrapperImg.src == null) {
                        wrapperImg.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.edmunds.com%2Fbmw%2F3-series%2F&psig=AOvVaw1_3qohsxkJPM5GIqcrWlur&ust=1681556102881000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjAqeWaqf4CFQAAAAAdAAAAABAJ'
                    } else {
                        wrapperImg.src = fetches.urlToImage
                        
                    }
                    wrapperImg.alt = fetches.title;
                    wrapperImg.classList.add('wrapper__img')
                    wrapSpan.textContent = fetches.author;
                    wrapSpan.classList.add('wrapper__span')
                    wrapTitle.textContent = fetches.title;
                    wrapTitle.classList.add('wrapper__h2')
                    wrapP.textContent = fetches.description;
                    
                    wrap2.append(wrapSpan, wrapTitle, wrapP);
                    
                    wrap1.append(wrapperImg, wrap2);
                    
                    searchWrapper.append(wrap1);
                })
                paginationWrapper.innerHTML = '';
                const btnDiv = document.querySelector('.btn__div')
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
                        searchWrapper.appendChild(button);
                    }
                }
            }
        })
        
        
        
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