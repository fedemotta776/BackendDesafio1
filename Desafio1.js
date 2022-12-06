class ProductManager {
    constructor(){
        this.products = []
    }
    getProducts(){
            return this.products
        }
    getProductsById(){
        this.products.forEach(product => {
            if (product.id === 2){
                console.log('Producto encontrado', product) 
            } else {
                console.log('No existe el producto')
            }
            })
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
        
         if(product.title === undefined || product.description === undefined ||  product.price === undefined ||
            product.code === undefined || product.thumbnail === undefined || product.stock === undefined){
            console.log('hay algo raro aca pa')
         }else {
            this.products.push(product)
         }
    }
}
const productAdded = new ProductManager()

productAdded.addProduct('Monitor Dell UltraScan P800','Monitor CRT 17 pulgadas Trinitron', 19220, 'AR21', 'www.google.com/dellp800',2)

productAdded.addProduct('Monitor Sony CPD E200','Monitor CRT 19 pulgadas Trinitron', 22400, 'SN19', 'www.google.com/sonycpde200', 5)


console.log(productAdded.getProducts())
console.log(productAdded.getProductsById())