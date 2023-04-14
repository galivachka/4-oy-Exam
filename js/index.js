const url = " https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7c727b8a37449d8bd90b33bf220b129"


const row = document.querySelector('.pop-blogs');

const fragment = document.createDocumentFragment();
async function dataFetch() {
    try {

        const response = await fetch(url);
        const data = await response.json();
        const Data = data.articles;


        Data.slice(0, 3).map((fetchingData) => {

            const blogItem = document.createElement('div');
            const blogImg = document.createElement('img');
            blogImg.src = fetchingData.urlToImage;
            blogImg.alt = fetchingData.title;
            blogImg.classList.add('blogs__img')
            fragment.append(blogImg);
            const blogSpan = document.createElement('span');
            blogSpan.textContent = fetchingData.author;


            blogSpan.classList.add('blogs__span')
            fragment.append(blogSpan);
            const blogTitle = document.createElement('h4');
            blogTitle.textContent = fetchingData.title;
            blogTitle.classList.add('blogs__h4')
            fragment.append(blogTitle);
            const blogsP = document.createElement('p');
            blogsP.textContent = fetchingData.description;
            blogItem.classList.add('blogs__item');

            blogItem.append(fragment);
            row.appendChild(blogItem);

        })
    } catch (error) {
        console.log(error)
    }
}
dataFetch();