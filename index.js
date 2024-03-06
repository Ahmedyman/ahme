document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.querySelector("[data-preloader]");
    preloader.classList.add("remove");

    const addEventOnElements = function (elements, eventType, callback) {
        elements.forEach(element => {
            element.addEventListener(eventType, callback);
        });
    };

    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNav = function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("nav-active");
    }

    addEventOnElements(navTogglers, "click", toggleNav);

    const header = document.querySelector("[data-header]");
    window.addEventListener("scroll", function () {
        header.classList.toggle("active", window.scrollY > 100);
    });

    var addItemId = 0;

    function addToCart(itemId) {
        addItemId += 1;

        var selectItem = document.createElement('div');
        selectItem.classList.add('desti-card');
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
});
