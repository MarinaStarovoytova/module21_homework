const button = document.querySelector('.button-request');
const inputPage = document.querySelector('.input-page');
const inputLimit = document.querySelector('.input-limit');
const blockMessage = document.querySelector('.block-message');

let numberPage = localStorage.getItem('numberPage');
let numberLimit = localStorage.getItem('numberLimit');
const textMessageForPage = '<p>Номер страницы вне диапазона от 1 до 10</p>';
const textMessageForLimit = '<p>Лимит вне диапазона от 1 до 10</p>';
const textMessageAll = '<p>Номер страницы и лимит вне диапазона от 1 до 10</p>';

if (numberPage != null && numberLimit != null) {
    fetch('https://picsum.photos/v2/list?page=' + numberPage + '&limit=' + numberLimit)
        .then((response) => { return response.json(); })
        .then((data) => {
            listImage(data);
        })
        .catch(error => console.log(error));
}

function listImage(json) {
    let tagImg = '';
    for (let i = 0; i < json.length; i++) {
        const jsonImg = json[i].download_url;
        tagImg = tagImg + '<img src = "' + jsonImg + '">';
        console.log(tagImg);
        console.log(jsonImg);
    }
    blockMessage.innerHTML = tagImg;
}

function checkValidNumber(number) {
    return number <= 0 || number > 10 || number === '' || typeof number != "number";
}

function checkValidNumberPageAndLimit(numberPage, numberLimit) {
    if (checkValidNumber(numberPage) && checkValidNumber(numberLimit)) {
        blockMessage.innerHTML = textMessageAll;
        return false;
    } else if (checkValidNumber(numberPage)) {
        blockMessage.innerHTML = textMessageForPage;
        return false;
    } else if (checkValidNumber(numberLimit)) {
        blockMessage.innerHTML = textMessageForLimit;
        return false;
    }
    return true;
}

button.addEventListener('click', function () {
    let numberPage = Number(inputPage.value);
    let numberLimit = Number(inputLimit.value);

    if (checkValidNumberPageAndLimit(numberPage, numberLimit)) {
        fetch('https://picsum.photos/v2/list?page=' + numberPage + '&limit=' + numberLimit)
            .then((response) => { return response.json(); })
            .then((data) => {
                console.log(data);
                listImage(data);
                localStorage.setItem('numberPage', numberPage);
                localStorage.setItem('numberLimit', numberLimit);
            })
            .catch(error => console.log(error));
    }
})







  
