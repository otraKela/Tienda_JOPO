window.addEventListener ( 'load', () => {
    const formComprar = document.querySelector ('.form-comprar');

    const id = document.querySelector ('#p-id-producto').innerText;    
    
    formComprar.addEventListener ( 'submit', (e) => {
        e.preventDefault();

        // actualizo el carrito del localStorage
        let shoppingCart = localStorage.getItem ('shoppingCart')? JSON.parse (localStorage.getItem ('shoppingCart')) : [];
   
        shoppingCart.push (id);

        localStorage.setItem ('shoppingCart', JSON.stringify (shoppingCart));

        //actualizo el contador de productos  del localStorage
        localStorage.setItem ( 'cartCount', JSON.parse (localStorage.getItem ( 'cartCount')) + 1 );

        formComprar.submit();
    })
})