let listDiv = document.getElementById('list');
const key = 'key';
let store = JSON.parse(localStorage.getItem(key)) || [];

const showList = () => {
    if(!store.length){
        const empty = document.createElement('h3');
        empty.innerText = 'List is empty';
        listDiv.appendChild(empty);
    }


let buttonAll = document.createElement('button');
for (const item of store) {
    let itemDiv = document.createElement('div');
    let itemName = document.createElement('div');
    let itemQuantity = document.createElement('div');
    let itemPrice = document.createElement('div');
    let itemImg = document.createElement('img');
    let button = document.createElement('button');

    itemImg.src = item.img
    itemName.innerText = `Name:${item.name}`
    itemPrice.innerText = `Price:${item.price}`
    itemQuantity.innerText = `Quantity:${item.quantity}`
    button.innerText = 'Delete'
    buttonAll.innerText = 'Delete All'
    button.onclick = () => {
        deleteItem(item.id)
    }
    itemDiv.append(itemImg, itemName, itemQuantity, itemPrice, button);
    listDiv.appendChild(itemDiv);
}

    buttonAll.onclick = () => {
        deleteAll();
    }
    listDiv.appendChild(buttonAll);
}


const deleteItem = (id) => {
    store = store.filter(value => value.id !== id)
    localStorage.setItem(key, JSON.stringify(store))
    listDiv.innerHTML = '';
    showList();
}

const deleteAll = () => {
    localStorage.clear()
    showList();
    listDiv.innerHTML = 'List is empty';
}

showList();
