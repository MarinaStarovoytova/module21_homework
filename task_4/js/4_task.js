let number = 0;
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        number = Math.floor(Math.random() * 100) + 1;
        if (number % 2 == 0) {
            resolve('Завершено успешно. Сгенерированное число — ' + number);
        } else {
            reject('Завершено с ошибкой. Сгенерированное число — ' + number);
        }
    }, 3000);
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


    








