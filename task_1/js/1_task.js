const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");

const listNode = xmlDocument.querySelector('list');
const studentNode = listNode.querySelectorAll('student');

let array = [];

for (let i = 0; i < studentNode.length; i++) {
    const nameNode = studentNode[i].querySelector('name');
    const firstNode = nameNode.querySelector('first');
    const secondNode = nameNode.querySelector('second');
    const ageNode = studentNode[i].querySelector("age");
    const profNode = studentNode[i].querySelector("prof");
    const langAtrr = nameNode.getAttribute("lang");

    const student = {
        name: firstNode.textContent + ' ' + secondNode.textContent,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAtrr
    };

    array.push(student);
}

const listObject = {
    list: array
};

console.log('JS-object: ', listObject);


