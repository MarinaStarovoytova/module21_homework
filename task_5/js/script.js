const button = document.querySelector('.button-submit');
const inputUser = document.querySelector('.input-user');
const listUser = document.querySelector('.block-list');

function addTag(json) {
    if (json.length > 0) {
        let ul = '<ul>';
        let li = '';
        for (let i = 0; i < json.length; i++) {
            li = li + '<li class="completed_' + json[i].completed + '">' + json[i].title + '</li>';
        }
        ul = ul + li + '</ul>';
        listUser.innerHTML = ul;
    } else {
        listUser.innerHTML = '<p>Нет такого пользователя</p>';
    }
}

button.addEventListener('click', function () {
    let idUser = inputUser.value;
    fetch('https://jsonplaceholder.typicode.com/users/' + idUser + '/todos')
        .then((response) => { return response.json(); })
        .then((data) => {
            console.log(data);
            addTag(data);
        })
        .catch(error => console.log(error))
});





  
