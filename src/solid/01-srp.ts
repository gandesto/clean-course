(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        // private httpAdapter: object;

        getProduct (id : number){
            console.log('Producto:', {id, name:'Oled Tv'});
        }

        saveProduct ( product : Product){
            console.log('guardando en base de datos', product);
        }
    }

    class Mailer{

        private masterEmail: string = 'egandesto@gmail.copm';

        sendEmail( emailList: string[], template: 'to-clientes'|'to-admins'){

        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService:ProductService, mailer: Mailer){
            this.productService = new ProductService;
            this.mailer = new Mailer;
        }

        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }
    
        notifyClients() {
            this.mailer.sendEmail(['abrahandev@gmail.com'],'to-clientes');
        }
    

    
    }
    
    class CartToBloc{

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
    
    const productService = new ProductService();
    const mailer = new Mailer();


    const productBloc = new ProductBloc(productService,mailer);
    const cartToBloc = new CartToBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartToBloc.onAddToCart(10);








})();