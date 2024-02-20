var addItemId = 0;

function addToCart(itemId){
    addItemId += 1;

    var selectItem = document.createElement('div');
    selectItem.classList.add('cartImg','card');
    selectItem.setAttribute('id', 'cartItem' + addItemId);

    var img = document.createElement('img');
    img.setAttribute('src', document.getElementById(itemId).querySelector('img').src);

    var title = document.createElement('div');
    title.innerText = document.getElementById(itemId).querySelector('.title').innerText;

    var label = document.createElement('div');
    label.innerText = document.getElementById(itemId).querySelector('p').innerText;

    var delbtn = document.createElement('button');
    delbtn.innerText = 'delete';
    delbtn.addEventListener('click', function () {
        del(addItemId);
    });

    var cartItem = document.getElementById('title');
    cartItem.append(selectItem);
    selectItem.append(img);
    selectItem.append(title);
    selectItem.append(label);
    selectItem.append(delbtn);
}

function del(itemId) {
    document.getElementById('cartItem' + itemId).remove();
}

