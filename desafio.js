class ProductManager{
    constructor (){

        this.products = [];
    }
    
    addProduct(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("se deben llenar todos los campos");
        } 
        else{

            if (this.products.some((element)=>element.code === code)) {
                console.log(`el código ${code} ya se asignó a otro producto, se debe asignar otro código`);
            }
            else{

                
                let newid;
                if (!this.products.length) {
                    newid = 1
                }
                else{
                    newid = this.products[this.products.length-1].id + 1;
                }
                
                const newProduct = {
                    id:newid,
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock
                }
                
                this.products.push(newProduct);
                console.log(newProduct);
            }
            }
    }

    getProducts(){

        let showProducts = this.products;
        console.log("showProducts: ", showProducts);
    }

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

manager1.addProduct("silla", "silla bar", 25990, "https://sodimac.scene7.com/is/image/SodimacCL/8757062_01?wid=1500&hei=1500&qlt=70", "aaa123", 40);
manager1.addProduct("silla", "silla escritorio", 59990, "https://sodimac.scene7.com/is/image/SodimacCL/1698052_00?wid=1500&hei=1500&qlt=70", "aaa456", 64);
manager1.addProduct("silla", "silla playa", 32990, "https://sodimac.scene7.com/is/image/SodimacCL/884139X_01?wid=1500&hei=1500&qlt=70", "aaa789", 7);
manager1.addProduct("silla", "silla gamer", 79990,"https://sodimac.scene7.com/is/image/SodimacCL/5967791_01?wid=1500&hei=1500&qlt=70", "aaa987", 55);

manager1.getProducts();

manager1.getproductById(2);

