var cart = {}; //корзина

function init() {
    //читаем json
    $.getJSON("goods.json", goodsOut);
    
}

function goodsOut(data) {
    //вывод на страницу
    var out='';
    for (var key in data) {
        out +=`<div class="cart">`;
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<img src="img/${data[key].img}" alt="" class="good-img">`;
        out +=`<div class="cost">${data[key].cost}</div>`;
        out +=`<button class="add-to-cart" data-id="${key}">Купить</button>`;
        out +=`</div>`;
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}

function addToCart() {
    //добавляем товар в корзину
}

$(document).ready(function () {
    init();
});