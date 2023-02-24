class ProductManager {

    static numId = 1;

    constructor(id, codigo, titulo, descripcion, precio, thumbnail, stock) {
        this.productos = [];
        this.codigo = codigo;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.thumbnail = thumbnail,
            this.stock = stock;
        this.id = id;
    }


    addProduct(producto) {
        for (const elemento of this.productos) {
            if (producto.stock < 0 || producto.precio < 0 || producto.titulo === '' || producto.descripcion === '' || producto.thumbnail === '') {
                return console.error('Falta completar campos');
            }
            else
                if (elemento.codigo = producto.codigo) {
                    return console.error('Producto existente');
                }
        }
        producto.id = ProductManager.lastId;
        ProductManager.lastId++;
        return this.productos;
    }

    getProducts(producto) {
        return this.productos;
    }

    getProductById(id) {
        for (const elemento of this.productos) {
            if (elemento.id === id) {
                return elemento.titulo;
            }
        }
        return console.error('Articulo no encontrado');
    }

}


const producto1 = new ProductManager();
console.log('Muestro Lista Vacía');

console.log(ProductManager.getProducts);
console.log('Agregamos un producto');

producto1.addProduct({ codigo: 'A1', titulo: 'Porducto 1', descripcion: 'primer producto', precio: 100, thumbnail: 'imagen1', stock: 2 });

console.log('Muestramos artículo ingresado');
console.log(ProductManager.getProducts);

producto1.addProduct({ codigo: 'A2', titulo: 'Producto 2', descripcion: 'Segundo producto', precio: 200, thumbnail: 'imagen2', stock: 3 });
console.log(ProductManager.getProducts);



