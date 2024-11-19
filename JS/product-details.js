let id = window.location.href.split("=")[1];
console.log(id);

let datail = document.querySelector(".detail");

if (!datail) {
    console.error("Element 'detail' topilmadi!");
}

async function start() {
    try {
        let resApi = await fetch("http://localhost:5000/products/" + id);
        if (!resApi.ok) throw new Error("API dan noto'g'ri javob keldi!");
        
        let jsonApi = await resApi.json();
        let product = jsonApi.data;

        console.log(product);

        datail.innerHTML = `<div class="mini-detail container">
            <div class="name-baho">
                <p class="mahsulot-nomi">${product.name}</p>
                <div class="tarmoq">
                    <div class="star">
                        <img src="/images/star-sharp-svgrepo-com.svg" alt="">
                        <img src="/images/star-sharp-svgrepo-com.svg" alt="">
                        <img src="/images/star-sharp-svgrepo-com.svg" alt="">
                        <img src="/images/star-sharp-svgrepo-com.svg" alt="">
                        <img src="/images/star-sharp-svgrepo-com.svg" alt="">
                        <p class="sharxlar">0 sharhlar</p>
                    </div>
                </div>
            </div>
            <div class="kattabaza">
                <div class="img-bosh">
                    <img class="detail-uchun" src="${product.image}" alt="">
                </div>
                <div class="malumotnoma">
                    <div class="kichik-img">
                        <img src="${product.image}" alt="">
                        <img src="${product.image}" alt="">
                        <img src="${product.image}" alt="">
                        <img src="${product.image}" alt="">
                    </div>
        <div class="uzunmalumot">
            <p class="textlink">
                Face Id Datchigi _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ Mavjud
            </p>
            <p class="textlink">
                Rangi _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ none
            </p>
            <p class="textlink">
                Rangi _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ none
            </p>
            <p class="textlink">
                Bluetooth Standart _ _ _  _ _ _ _ _ _ _ _ _ _ _ Mavjud
            </p>
            <p class="textlink">
               Display _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ bor
            </p>
            <p class="textlink">
                Nabor _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ Mavjud
            </p>
        </div>
                </div>
                <div class="kattahisob">
                    <div class="product-card">
                        <div class="price-info">
                            <h2>${product.price}</h2>
                            <p class="delivery-info">
                                <i class="icon-truck"></i>
                                Standart yetkazib berish<br>
                                <span>Manzilga qarab 4 soatdan 2 ish kunigacha yetkazib beriladi</span>
                            </p>
                        </div>
                        <div class="actions">
                            <button class="add-to-cart">Savatchaga qo'shish</button>
                            <button class="buy-now">Bir klikda sotib olish</button>
                        </div>
                        <div class="store-info">
                            <p><strong>Insales Store</strong> 📍</p>
                            <p>O'zbekiston, Toshkent, улица Лабзак, 2 / 122</p>
                        </div>
                    </div>  
                    <div class="installment-card">
                        <p class="installment-price">${parseInt(product.price / 12)} so'm / 12 oy</p>
                        <button class="installment-buy">Bo'lib to'lash</button>
                    </div>
                </div>
            </div>
        </div>`;
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        datail.innerHTML = `<p class="error-message">Ma'lumotlarni yuklashda xatolik yuz berdi.</p>`;
    }
}

start();
