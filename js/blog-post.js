let form = document.querySelector('.form');


let box = document.querySelector('.box');

let box2 = document.querySelector('.post');





let url = `https://reqres.in/api/users/`;

fetch(url).then((response) => response.json()).then((data) => {
    let dataslice = data.data.slice(0, 1);
    console.log(data);
    let datamap = dataslice.map((user) => {
        const { avatar, first_name, title,email,} = user;
        return `
        <div class="section-box">
        <div class="section-box-forimg">
        <img class="image-avatar" src=${avatar} alt="...">
        </div>
        <div class="section-about">
        <div class="forname">
        <h3 class="name">${first_name}</h3>
        <h3 class="title"> ${title}</h3>
        </div>
        <div class="for-data">
        <a class="data" href="mailto:">${email}</a>
        </div>
        </div>
        </div>
        
        `
    })
    sectionbox.innerHTML = datamap.join('');
    
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let name = document.getElementById('name').value;
    
    let title = document.getElementById('title').value;
    let email = document.getElementById('mail').value;
    let image = document.getElementById('file').files[0];
    const read = new FileReader();
    read.readAsDataURL(image);
    read.onload = () => {
        const imageurl = read.result;
        const datapost = {
            firstname: name,
            title: title,
            email: email
        }
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(datapost)
        }).then((response) => response.json()).then((data) => {
            console.log(data);
            box2.innerHTML = `
            <div class="section-box">
            <div class="section-box-forimg">
            <img class="image-avatar" src='${imageurl}' alt="...">
            </div>
            <div class="section-about">
            <div class="forname">
            <h3 class="name">${data.firstname}</h3>
            <h3 class="title"> ${data.title}</h3>
            </div>
            <div class="for-data">
            <a class="data" href="mailto:">${data.email}</a>
            <button class="myedit" data-id="${data.id}">Edit</button>
            <button class="mydelete" data-id="${data.id}">Remove</button>
            
            </div>
            </div>
            
            `
            box2.addEventListener('click',(e)=>{
                if(e.target.classList.contains('box__btn')){
                    const id = e.target.dataset.id;
                    deleteUser(id).then(()=>{
                        const anyth = e.target.closest('div');
                        anyth.remove();
                    }) 
                }
            })
            async function deleteUser (id){
                try {
                    const response = await fetch`${url}/${id}`;
                    method:'Delete'
                    if(response.ok){
                        return response;
                        
                    } 
                } catch (error) {
                    console.log(error)
                }
            }
            box.appendChild(box2)
        })
    }
    box.innerHTML = '';
    
    form.reset();
})


// remove.addEventListener('submit', (e) => {
//    console.log(document.querySelector('.section-box').closest());

//     fetch(url + "id", {
//     method: 'DELETE',
//     })
//     .then(res => res.json())
//     .then(res => console.log(res))
// })




