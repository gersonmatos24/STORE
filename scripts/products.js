class product {
    constructor(id, nombre, precio, img, stock, discount, proveedor) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.stock = stock
        this.discount = discount
        this.proveedor = proveedor
    }
}


    const product1 = new product(1, "Ipad Pro 12.9", 900000, "https://i.postimg.cc/kX8PKZpq/ipad2.jpg", 10, 50, "Apple");
    const product2 = new product(1, "Ipad Pro 12.9", 900000, "https://i.postimg.cc/kX8PKZpq/ipad2.jpg", 10, 50, "Apple");
    const product3 = new product(1, "Ipad Pro 12.9", 900000, "https://i.postimg.cc/kX8PKZpq/ipad2.jpg", 10, 50, "Apple");
    const product4 = new product(1, "Ipad Pro 12.9", 900000, "https://i.postimg.cc/kX8PKZpq/ipad2.jpg", 10, 50, "Apple");
    const product5 = new product(1, "Ipad Pro 12.9", 900000, "https://i.postimg.cc/kX8PKZpq/ipad2.jpg", 10, 50, "Apple");
    const product6 = new product(1, "Ipad Pro 12.9", 900000, "https://i.postimg.cc/kX8PKZpq/ipad2.jpg", 10, 50, "Apple");

    const products = [product1, product2, product3, product4, product5, product6];

    const selectorContainer = document.getElementById("products");
    function createCard(product) {
        return`<a class="product-card" href="./details.html"> 
        <img class="product-img" src="${product.img}" alt="${product.nombre}">
        <div class="product-info">
            <span class="product-title">${product.nombre}</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>` ;
    }
    let productsTemplate = "";
    for (let product of products) {
        productsTemplate = productsTemplate + createCard(product);
    }
    selectorContainer.innerHTML = productsTemplate;