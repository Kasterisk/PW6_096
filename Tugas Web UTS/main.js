var electroTopSellers = document.getElementById("electroTopSellersRow");
var cookwareTopSellers = document.getElementById("cookwareTopSellersRow");
var specialDiscounts = document.getElementById("specialDiscountsRow");

const produkElektronik = ["Headset", "Gaming Chair", "Keyboard", "Mouse"];
const produkDapur = ["Frying Pan", "Panci Kukusan", "Peralatan Makan", "Pisau Dapur 1 Set"];
const produkDiskon = ["Kipas Portable", "Dehumidifier", "Vacuum Cleaner", "Tas Laptop Travel"];
const hargaProduk = [ "Rp 500.000", "Rp 1.000.000", "Rp 600.000", "Rp 250.000", "Rp 100.000", "Rp 50.000" ]

for (var i = 0; i < 10; i++) {
    electroTopSellers.appendChild(createProductCard(produkElektronik[Math.floor(Math.random() * produkElektronik.length)], hargaProduk[Math.floor(Math.random() * hargaProduk.length)]));
    cookwareTopSellers.appendChild(createProductCard(produkDapur[Math.floor(Math.random() * produkDapur.length)], hargaProduk[Math.floor(Math.random() * hargaProduk.length)]));
    specialDiscounts.appendChild(createProductCard(produkDiskon[Math.floor(Math.random() * produkDiskon.length)], hargaProduk[Math.floor(Math.random() * hargaProduk.length)]));
}

// Membuat elemen kartu produk
function createProductCard(productName, productPrice) {
    var col = document.createElement("div");
    var a = document.createElement("a");
    var card = document.createElement("div");
    var image = document.createElement("img");
    var body = document.createElement("div");
    var price = document.createElement("h6");
    var name = document.createElement("p");

    col.className = "col";
    a.className = "text-decoration-none text-black";
    card.className = "card";
    image.className = "card-img-top";
    body.className = "card-body p-2";
    price.className = "card-title m-0";
    name.className = "card-text m-0";

    a.href = "#";
    image.src = "images/" + productName + ".jpg";
    price.innerText = productPrice;
    name.innerText = productName;

    col.appendChild(a);
    a.appendChild(card);
    card.appendChild(image);
    card.appendChild(body);
    body.appendChild(name);
    body.appendChild(price);

    return col;
}
