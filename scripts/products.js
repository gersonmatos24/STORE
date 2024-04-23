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