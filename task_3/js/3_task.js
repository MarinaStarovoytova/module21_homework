const options = {
    hour: 'numeric', minute: 'numeric'
}

if (localStorage.getItem('nameUser') === null) {
    let nameUser = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    localStorage.setItem('nameUser', nameUser);
    localStorage.setItem('dateUser', new Date().toLocaleDateString('ru-RU', options));
} else {
    alert('Добрый день, ' + localStorage.getItem('nameUser') + '!' + 
    ' Давно не виделись. В последний раз вы были у нас ' + localStorage.getItem('dateUser') + '!');
    localStorage.setItem('dateUser', new Date().toLocaleDateString('ru-RU', options));
}











