// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// //     


// // a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let title = document.getElementById('main_header');
// title.innerText = 'Mondey-2021';
// title.style.color = 'red';


// // b) робить шириниу елементу ul 400px

// let listWidth = document.getElementsByTagName('ul');
// for(ul of listWidth){
//     ul.style.width = '400px';
// }


// // d) отримує текст який зберігається в елементі з класом listElement2

// let getElementText = document.getElementsByClassName('listElement2')
// for(text of getElementText){
//     console.log(text);
// }


// // c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsLink = document.getElementsByClassName('linkList');
// for(element of elementsLink){
//     element.style.width = '50%';
// }


// // e) отримує всі елементи li та змінює ім колір фону на сірий

// let liCollection = document.getElementsByTagName('li');
// for(li of liCollection){
//     li.style.backgroundColor = 'silver';
// }

// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// // f) отримує всі елементи 'a' та додає їм клас anchor
// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementLink = document.getElementsByTagName('a');
// for(a of elementLink){
//     a.classList.add('anchor');
//     if(a.innerText === 'link3'){
//         a.style.fontSize = '40px'
//     };
//     if(a.innerText === 'XXX'){
//         a.classList.add('element_XXX')
//     }
// }
// let itemLink = document.getElementsByClassName('listElement3');
// for(i of itemLink){
//     i.style.fontSize = '40px'
// }
// console.log(elementLink);


 // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
 // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let bacColor = document.getElementsByClassName('sub-header');
// console.log(bacColor);
// for(element of bacColor){
//     console.log(element);
//     let inputColorBac = prompt();
//     element.style.backgroundColor = (`${inputColorBac}`);
// }
// for(i = 1; i < bacColor.length; i++){
//     let item = bacColor[i];
//     let colorText = prompt();
//     item.style.color = (`${colorText}`)
//  }


// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let textItem = document.getElementsByClassName('content_1');
// console.log(textItem);
// for(item of textItem){
//     textInput = prompt();
//     item.innerText = (`${textInput}`);
// }


// // l) отримати елементи p та змінити їм padding на 20px

// let par = document.getElementsByTagName('p');
// for(itemPar of par){
//     itemPar.style.padding = '20px';
// }


// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// let title2 = document.getElementsByClassName('text2');
// for(item of title2){
//     item.innerText = 'Mondey-2021';
// }
// console.log(title2);


// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
// let form = document.forms.f1;
// let nameInput = f1.name;
// form.addEventListener('submit', (event) => {
//     // event.preventDefault();
//     let name = nameInput.value;
//     let user = {
//         name: name
//     };
//
//     let stringUser = JSON.stringify(user);
//     localStorage.setItem('user', stringUser);
// });








