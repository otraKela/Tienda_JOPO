window.addEventListener ('load', () => {

    // let searchBar = document.querySelector ("search-bar");

    // searchBar.addEventListener ('change', () => {
    //     if (searchBar.value == req.body.keyWords) {
    //         searchBar.placeholder = req.body.keyWords;
    //     } else {
    //         searchBar.placeholder = "¿Qué estás buscando?";
    //     };
    // })

    const shoppingCart = document.querySelector ('.cart-shopping');
    const productCount = document.querySelector('.product-count');
    let cartCount;

    if ( localStorage.getItem ('cartCount') ) {
        cartCount = parseInt (localStorage.getItem ('cartCount'))
    } else {
        if ( localStorage.getItem ('shoppingCart') ) {
            cartCount = JSON.parse (localStorage.getItem ('shoppingCart')).length
        } else {
            cartCount = 0;
    }}

    localStorage.setItem ('cartCount', cartCount);
    
    productCount.innerText = cartCount;

    shoppingCart.addEventListener ('click', () => {
        location.assign ('../products/shoppingCart');
    })
})
