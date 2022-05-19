function notReadyAlert(event) {
    showModal('Sorry, not teady yer!\nИзвините, ещё не готово!');
    event.preventDefault();
    return false;
}

function topboy() {
    alert("НЕ НАДО СЮДА ЗВОНИТЬ, ПЖ");
    return false;
}

function notcar() {
    alert("Нет в наличии");
    return false;
}

function search() {
    let name = document.getElementById('search').value;
    let productNumber = null;
    
    if (name == 'Camry70') {
        productNumber = 0;
    } else if (name == 'Camry50' ){
        productNumber = 1;
    } else if (name == 'Camry40'){
        productNumber = 2;
    } else {
        alert ('Товар не найден')
    }
    let cards = document.getElementsByClassName('card');
    if (name == '') {
        cards[0].style.display = "inline-block";
        cards[1].style.display = "inline-block";
        cards[2].style.display = "inline-block";    
    }
    else {
    cards[0].style.display = "none";
    cards[1].style.display = "none";
    cards[2].style.display = "none";
    }

    let card = cards[productNumber];
    card.style.display = "inline-block";
    card.style.border = '1px dashed black';
    card.style.backgroundColor = 'Grey';

    

    setTimeout(function () {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 2000);
}

function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';
    
    let items = [
        {href: 'index.html', text: 'Товары'},
        {href: '', text: 'Контакты'},
        {href: '', text: 'Доставка'},
        {href: '', text:  'Акции'},
        {href: 'about-us.html', text:  'О нас'},
    ];

    for(let i = 0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innerText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == '') {
            link.addEventListener('click', notReadyAlert);
        }

        let menuItem = document.createElement('li');
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
}

function showProductInfo(product) {
    showModal(`
    <div><img src="${product.image}"</div>
    <div>${product.name}></div>
    <div>${product.price} &#8381;</div>
    `);
}

function generateCard() {
    let products = [
        {image: 'camry40.jpg', name: 'Camry40', price: 1500000},
        {image: 'camry50.jpg', name: 'Camry50', price: 1500000},
        {image: '6234856026.jpg', name: 'Camry70', price: 1500000},
    ];

    let main = document.querySelector('main');
    for(let product of products) {
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `
        <a href="#">
            <div class="image"><img src="${product.image}"></div>
            <div class="product-name">${product.name}</div>
            <div class="price">${product.price} &#8381;</div>
        </a>
        
        `;
        cardDiv.querySelector('a').addEventListener('click', function(){
            showProductInfo(product);
        });
        main.append(cardDiv);
    }
}


function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown',function(key) {
        if(key.key == 'Enter')
            search();
    });

    generateMenu();
    generateCard();
}


