class ProductManager {
    constructor(){
        this.products = []
    }
    getProducts(){
        return this.products
    }

    addProduct(title, description, price, code, thumbnail, stock){
        let product = {
            title, 
            description,
            price,
            code,
            thumbnail,
            stock,
        }        
        
         if(this.products.length === 0){
             product['id'] = 1
         } else {
             product['id'] = this.products[this.products.length - 1]['id'] + 1
         }        
        
         this.products.push(product)
    }

}

const productAdded = new ProductManager()
productAdded.addProduct('Monitor Dell UltraScan P800','Monitor CRT 17 pulgadas Trinitron', 17300,'AR21', 'www.google.com/dellp800', 2)
productAdded.addProduct('Monitor Sony CPD E200','Monitor CRT 19 pulgadas Trinitron', 22400, 'SN19', 'www.google.com/sonycpde200', 5)
console.log(productAdded.getProducts())



