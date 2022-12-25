window.addEventListener('load', async () => {
    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const contenidoCarrito = document.querySelector('.div-contenido-carrito');
    const productsSection = document.querySelector('.products');
    const theSubtotal = document.querySelector('#subtotal');
    const theTotal = document.querySelector('#total');
    const theInstallments = document.querySelector('#installments');
    const purchaseButton = document.querySelector('.purchase-link');



    let subtotal = 0;
    let newArticle;

    // obtengo el carrito del localStorage (el array contiene solamente el id de los productos)

    let cartString = localStorage.getItem('shoppingCart') ? localStorage.getItem('shoppingCart') : [];
    let cartArray = localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : [];

    if (cartArray.length == 0) {
        // si el carro está vacío muestro un mensaje
        contenidoCarrito.innerHTML = `
            <div class="mensaje">
                <p>El carrito está vacío.</p>

                <div class="more-products">
                    <a href="/products/productsList">Ver todos los productos</a>
                </div>
            </div>`;
    } else {

        // busco los productos del carro en la BD y los pongo en el array cartProducts
        let cartProducts = await Promise.all(
            cartArray.map(async item => {
                const data = await fetch('http://localhost:3040/api/products/' + item);
                return data.json();
            }))

        // para cada producto de cartProducts agrego el valor al subtotay mando el html a la vista
        cartProducts.forEach(product => {

            !product.data.discount || product.data.discount == 0 ?
                subtotal = subtotal + parseInt(product.data.price) :
                subtotal = subtotal + (parseInt(product.data.price) * (1 - parseInt(product.data.discount) / 100));
            

            newArticle =
                `<article class="productArticle" >
                    <div class="product">
                        <a href="/products/productDetail/${product.data.id}" class="ir-a-detail">
                            <img src="${product.data.img}" alt="Product Image">
                        </a>
                        <p>${product.data.name}</p>
                        <form >
                            <button type="submit" class="i-borrar">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </form>
                    </div>`
              
           
                if (!product.data.discount || product.data.discount == 0) {  
                    newArticle += `<p class="price">$${product.data.price}</p>`
                } else {
                    newArticle += 
                        `<div class="price-discount">
                            <span class="orig-price">$${product.data.price}</span>
                            <span class="final-price">$${product.data.price * (1 - product.data.discount / 100).toFixed()}</span>
                        </div>
                    </article>`
            }


            productsSection.innerHTML += newArticle;
        })

        productsSection.innerHTML += '</section>'



        // al terminar de mostrar los productos muestro los totales de la compra         

        let strSubtotal = toThousand(subtotal);
        let strTotal = strSubtotal;
        let strInstallments = toThousand((subtotal / 6).toFixed(2));

        theSubtotal.innerText = strSubtotal;
        theTotal.innerText = strTotal;
        theInstallments.innerText = strInstallments;
        purchaseButton.href = `/products/purchase/${cartString}`;


        // capturo el botón delete acá porque ya está cargado
        const deleteProduct = document.querySelectorAll('.fa-trash-can');

        deleteProduct.forEach((icon, i) => {
            icon.addEventListener('click', e => {
                //elimino el producto del carrito
                cartArray.splice(i, 1);

                //actualizo el carrito del localStorage
                localStorage.setItem('shoppingCart', JSON.stringify(cartArray));

                //actualizo el contador de productos  del localStorage
                localStorage.setItem('cartCount', JSON.parse(localStorage.getItem('cartCount')) - 1);

            })
        })
    };
})
