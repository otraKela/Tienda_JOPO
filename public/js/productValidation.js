window.addEventListener ('load', () => {

    let form = document.querySelector('.form-producto');

    let name = document.querySelector('#name');
    let description = document.querySelector('#description');
    let categoryId = document.querySelector('#category-id');
    let colors = document.querySelectorAll('.colors');
    let price = document.querySelector('#price');
    let discount = document.querySelector('#discount');
    let img = document.querySelector('#img');
    let special = document.querySelector ('#special');
    let nombreImagen = document.querySelector('.nombre-imagen');

    let nameError = document.querySelector('.name-error');
    let descriptionError = document.querySelector('.description-error');
    let categoryIdError = document.querySelector('.category-id-error');
    let colorsError = document.querySelector('.colors-error');
    let priceError = document.querySelector('.price-error');
    let discountError = document.querySelector('.discount-error');
    let imgError = document.querySelector('.img-error');

    
    name.focus();

/* Validación al salir del campo */
name.addEventListener ('blur', () => {
    if (name.value == '') {
        nameError.innerText = 'Debe ingresar un nombre';
    } else {
        if (name.value.length < 5) {
            nameError.innerText = 'El nombre debe tener, al menos, 5 caracteres';
    } else {
        nameError.innerText = '';    
    }};
})

description.addEventListener ('blur', () => {
    if (description.value == '') {
        descriptionError.innerText = 'Debe ingresar la descripción';
    } else {
        if (description.value.length <= 20 || description.value.length > 300) {
            descriptionError.innerText = 'La descripción debe tener entre 20 y 300 caracteres';
    } else {
        descriptionError.innerText = '';    
    }}
})

categoryId.addEventListener ('blur', () => {
    if (categoryId.value == '') {
        categoryIdError.innerText = 'Debe seleccionar la categoría';
    } else {
        categoryIdError.innerText = '';  
    };  
})

price.addEventListener ('blur', () => {
    if (price.value == '' || price.value == 0) {
        priceError.innerText = 'Debe ingresar el precio';
    } else {
        priceError.innerText = '';  
    };  
})

discount.addEventListener ('blur', () => {
    if (discount.value && (discount.value < 0 || discount.value > 100 )) {
        discountError.innerText = 'El descuento debe estar entre 0 y 100';
    } else {
        discountError.innerText = '';
    }
})



/* Validación del formulario */
    form.addEventListener ('submit', (e) => {
        e.preventDefault();

        let errors = {};

        if (name.value == '') {
            errors.name = 'Debe ingresar un nombre';
        } else {
            if (name.value.length <= 5) {
                errors.name = 'El nombre debe tener, al menos, 3 caracteres';
        }};

        if (description.value == '') {
            errors.description = 'Debe ingresar la descripción';
        } else {
            if (description.value.length <= 20 || description.value.length > 300) {
                errors.description = 'La descripción debe tener entre 20 y 300 caracteres';
        }};

        if (categoryId.value == '') {
            errors.categoryId = 'Debe seleccionar la categoría';
        };

        let colorCount = 0;
        for ( const oneColor of colors) {
            if (oneColor.checked) { colorCount += 1;}
        }

        if (colorCount == 0) {
            errors.colors = 'Debe seleccionar, al menos, 1 color';
        } else {
            delete errors.colors;
            colorsError.innerText = '';
        };

        if (price.value == '' || price.value == 0) {
            errors.price = 'Debe ingresar el precio';
        };

        if (discount.value != '' && ( discount.value < 0 || discount.value > 100 )) {
            errors.discount = 'El descuento debe estar entre 0 y 100';
        }

        if (Object.keys(errors).length > 0) {
            nameError.innerText = errors.name? errors.name : null;
            descriptionError.innerText =  errors.description? errors.description : null;
            categoryIdError.innerText = errors.categoryId? errors.categoryId : null;
            colorsError.innerText = errors.colors? errors.colors : null;
            priceError.innerText = errors.price? errors.price : null;
            discountError.innerText = errors.discount? errors.discount : null;

        } else {

            errors = {};

            if (img.value == '' && (nombreImagen == null || nombreImagen.value == '' )) {
                errors.img = 'Debe subir una imagen';
                imgError.innerText = 'Debe subir una imagen';

        } else {
            form.submit();
        }};
       
    })

    form.addEventListener ('reset', (e) => {
    
        name.value = '';
        description.value = '';
        categoryId.value = '';
        colors.forEach (color => { color.checked = false});
        price.value = '';
        discount.value = '';
        img.value = '';
        special.checked = false;


        nameError.value = '';
        descriptionError.value = '';
        categoryIdError.value = '';
        colorsError.value = '';
        priceError.value = '';
        discountError.value = '';
        imgError.value = '';

    
    });

})

