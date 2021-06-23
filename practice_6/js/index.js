// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// ДОДАТКОВО:
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

// let formProducts = document.forms.f1;
// let nameInput = f1.name;
// let nameQauntity = f1.quantity;
// let namePrice = f1.price;
//
// formProducts.addEventListener('submit', (event) => {
//     let name = nameInput.value;
//     let quantity = nameQauntity.value;
//     let price = namePrice.value;
//     console.log(price);
//
//     let products = {
//         name: name,
//         quantity: quantity,
//         price: price
//     };
//     let stringify = JSON.stringify(products);
//     localStorage.setItem('products', stringify);
// });

const {name, quantity, price, img} = document.forms.form;
const btn = document.getElementById('btn');
const key = 'key';

const save = (name, quantity, price, img) => {
    const store = JSON.parse(localStorage.getItem(key)) || [];

    store.push({id: Math.random(), name, quantity, price, img});
    localStorage.setItem(key, JSON.stringify(store));

}

btn.onclick = () => {
    save(name.value, quantity.value, price.value, img.value);
}