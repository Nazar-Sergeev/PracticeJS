// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
// -- створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// -- Створити 10 попелюшок , покласти їх в масив
// -- Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let cinderellas = [
//     new Cinderella('Katya', 20, 36),
//     new Cinderella('Karina', 20, 35),
//     new Cinderella('Sveta', 20, 37),
//     new Cinderella('Lena', 20, 38),
//     new Cinderella('Dasha', 20, 39),
//     new Cinderella('Olya', 20, 40),
//     new Cinderella('Sofia', 20, 41),
//     new Cinderella('Anna', 20, 42),
//     new Cinderella('Ira', 20, 34),
//     new Cinderella('Natalya', 20, 43),
//
// ];
//
// function Prince(name, age, sizeShoes) {
//     this.name = name;
//     this.age = age;
//     this.sizeShoes = sizeShoes;
// }
//
// let man = [
//     new Prince('Ivan', 25, 34)
// ];
//
// for (let p of man) {
//     for (const item of cinderellas) {
//         if (item.footSize === p.sizeShoes) {
//             console.log(item);
//         }
//     }
//     let find = cinderellas.find(item => item.footSize === p.sizeShoes);
//     console.log(find);
// }


// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }

// function TagDescription(titleOfTag, action, attrs = [{}]) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let tags = [
//     new TagDescription('<a>', 'Создаёт гипертекстовые ссылки.',
//         [{titleOfAttr: 'accesskey', actionOfAttr: 'Генерирует сочетания клавиш для доступа к текущему элементу.'}]),
//     new TagDescription('<div>', 'Тег-контейнер для разделов HTML-документа. Используется для группировки ' +
//         'блочных элементов с целью форматирования стилями.',
//         [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'}]),
//     new TagDescription('<h1>', 'Представляет собой наиболее важный заголовок первого уровня',
//     [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}]),
//     new TagDescription('<span>', 'Предназначен для определения строчных элементов документа.',
//         [{titleOfAttr: 'Universal attributes', actionOfAttr: 'Универсальные атрибуты применяются практически ко ' +
//                 'всем тегам, поэтому выделены в отдельную группу, чтобы не повторять их для всех тегов.'}]),
//     new TagDescription('<input>', 'Является одним из разносторонних элементов формы и позволяет создавать' +
//         ' разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{titleOfAttr: 'accept',
//         actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}]),
//     new TagDescription('<form>', 'Связывает поле с формой по её идентификатору.',
//         [{titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'}]),
//     new TagDescription('<option>', 'Oпределяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//         [{titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'}]),
//     new TagDescription('<select>', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка, ' +
//         'а также список с одним или множественным выбором, как показано далее.', [{titleOfAttr: 'autofocus',
//     actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'}])
// ];
// console.log(tags);