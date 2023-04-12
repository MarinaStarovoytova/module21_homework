const objectJS = {};

objectJS.name = 'Anton';
objectJS.age = 36;
objectJS.skills = ['JavaScript', 'HTML', 'CSS'];
objectJS.salary = 80000;

const jsonJS = JSON.stringify(objectJS);
console.log('JSON-строка: ', jsonJS);

