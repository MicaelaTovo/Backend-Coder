class ProductManager {

    static nroid = 1;

    constructor (id, codigo, titulo, descripcion, precio, imagen, stock) {
        this.productos = [];
        this.codigo =codigo;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen,
        this.stock = stock;
        this.id=id;
    }

// Metodo Alta de productos (debe chequear si el código está duplicado (), id genera automáticamente)
addProduct(producto){
    for (const elemento of this.productos) {
        if (producto.stock < 0 || producto.precio < 0 || producto.titulo ==='' ||producto.descripcion ==='' || producto.imagen ==='') {
            return console.error('Los campos no pueden estar vacios');
        }
        else
        if (elemento.codigo = producto.codigo) {
            return console.error('Ese producto ya existe');
        }
    }
    producto.id = ProductManager.nroid;
    ProductManager.nroid ++;
    return this.productos;
    }

// Metodo Mostrar producto que se agregó 
getProducts(producto){
    return this.productos;
}


// Metodo Ver producto por id debe indicar si no lo encuentra
getProductsById (id) {
    for (const elemento of this.productos) {
        if(elemento.id === id) {
            return elemento.titulo;
        }
    }
    return console.error('Ese artículo NO se encuentra');
}

}


const producto1 = new ProductManager();
console.log('Muestro Lista Vacía');
console.log(ProductManager.getProducts);
console.log('Agregamos un producto');
ProductManager.addProduct({codigo: 'A1', titulo: 'Primer producto A', descripcion:'Es la descripción del Artículo A1' , precio: 1000, imagen:'Imagen A1' , stock:4});
console.log('Muestramos artículo ingresado');
console.log(ProductManager.getProducts);
ProductManager.addProduct({codigo:'A2', titulo: 'Segundo producto A', descripcion: 'Es la descripcion del Articulo A2',precio: 2000, imagen: 'Imagen A2', stock:8});
console.log(ProductManager.getProducts);



