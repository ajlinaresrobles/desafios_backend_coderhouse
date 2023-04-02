class ProductManager{
    constructor (){

        this.products = [];
    }
                            // función para agregar productos, se verifica que se llenen todos los campos
    addProduct(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("se deben llenar todos los campos");
        } 
        else{
                            // se verifica que el code no se duplique
            if (this.products.some((element)=>element.code === code)) {
                console.log(`el código ${code} ya se asignó a otro producto, se debe asignar otro código`);
            }
            else{

                            // Se asigna id correlativo          
                let newid;
                if (!this.products.length) {
                    newid = 1
                }
                else{
                    newid = this.products[this.products.length-1].id + 1;
                }
                            // se asignan las propiedades del producto a agregar
                const newProduct = {
                    id:newid,
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock
                }
                            // se agrega el nuevo producto a la matriz de productos
                this.products.push(newProduct);
                console.log(newProduct);
            }
            }
    }
                            // función que muestra los productos ingresados
    getProducts(){

        let showProducts = this.products;
        console.log("showProducts: ", showProducts);
    }
                            // función que busca un producto con el id
    getproductById(id){
            const productFound = this.products.find((element)=>element.id === id)
        if (productFound){

            console.log("productFound: ", productFound);
        }
        else{
            console.log(`No se encontró el producto con el id ${id}`);
        }
        

    }
}

const manager1 = new ProductManager();

console.log(manager1);
                                // se colocan los productos y sus propiedades llamando a la función que agrega los productos
manager1.addProduct("silla", "silla bar", 25990, "https://sodimac.scene7.com/is/image/SodimacCL/8757062_01?wid=1500&hei=1500&qlt=70", "aaa123", 40);
manager1.addProduct("silla", "silla escritorio", 59990, "https://sodimac.scene7.com/is/image/SodimacCL/1698052_00?wid=1500&hei=1500&qlt=70", "aaa456", 64);
manager1.addProduct("silla", "silla playa", 32990, "https://sodimac.scene7.com/is/image/SodimacCL/884139X_01?wid=1500&hei=1500&qlt=70", "aaa789", 7);
manager1.addProduct("silla", "silla gamer", 79990,"https://sodimac.scene7.com/is/image/SodimacCL/5967791_01?wid=1500&hei=1500&qlt=70", "aaa987", 55);


                                // Se llama a la función que muestra los productos agregados
manager1.getProducts();


                                // Se coloca el id del producto a buscar en la función invocada
manager1.getproductById(2);

