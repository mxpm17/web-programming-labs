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

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown',function(key) {
        if(key.key == 'Enter')
            search();
    });

    generateMenu();
}