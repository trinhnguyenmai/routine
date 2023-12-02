const products = [
    { 
        img1: "./image/product_image_b.webp", 
        img2: "./image/coffe_icon.webp", 
        img3: "./image/new_arrivals_icon.webp",
        img4: "./image/banner_ad.webp", 
        url: "https://routine.vn/ao-thun-nam-s-cafe-theu-chu-coffee-lovers-form-loose-10f23tss062.html",
        title: "Áo Thun Nam S.Café Thêu chữ Coffee Lovers Form Loose - 10F23TSS062",
        price: "520.000 ₫"
    },
    { 
        img1: "./image/product_image_b.webp", 
        img2: "./image/coffe_icon.webp", 
        img3: "./image/new_arrivals_icon.webp",
        img4: "./image/banner_ad.webp", 
        url: "https://routine.vn/ao-thun-nam-s-cafe-theu-chu-coffee-lovers-form-loose-10f23tss062.html",
        title: "Áo Thun Nam S.Café Thêu chữ Coffee Lovers Form Loose - 10F23TSS062",
        price: "520.000 ₫"
    },
    { 
        img1: "./image/product_image_b.webp", 
        img2: "./image/coffe_icon.webp", 
        img3: "./image/new_arrivals_icon.webp",
        img4: "./image/banner_ad.webp", 
        url: "https://routine.vn/ao-thun-nam-s-cafe-theu-chu-coffee-lovers-form-loose-10f23tss062.html",
        title: "Áo Thun Nam S.Café Thêu chữ Coffee Lovers Form Loose - 10F23TSS062",
        price: "520.000 ₫"
    },
    { 
        img1: "./image/product_image_b.webp", 
        img2: "./image/coffe_icon.webp", 
        img3: "./image/new_arrivals_icon.webp",
        img4: "./image/banner_ad.webp", 
        url: "https://routine.vn/ao-thun-nam-s-cafe-theu-chu-coffee-lovers-form-loose-10f23tss062.html",
        title: "Áo Thun Nam S.Café Thêu chữ Coffee Lovers Form Loose - 10F23TSS062",
        price: "520.000 ₫"
    }
]

const productsWrapper = document.getElementsByClassName("product_image_container")[0]

//render

productsWrapper.innerHTML = products.map((item, index) => {
    return `
        <div class="fm_product">
        <div class="product_wrap_image">
            <div class="product_image">
                <img class="size_product_image" src="${item.img1}" alt="product_image">
            </div>
            <img class="fm_icon_product_a" src="${item.img2}" alt="coffe_icon">
            <img class="fm_icon_product_b" src="${item.img3}" alt="new_arrivals_icon">
            <img class="fm_icon_product_c" src="${item.img4}" alt="banner_ad">
        </div>
        <div>
            <div class="product_details">
                <a href="${item.url}">${item.title}</a>
                <i class="fa-regular fa-heart" style="color: #000000;"></i>
            </div>
            <div class="price">${item.price}</div>
        </div>
        </div>
    `
})
