export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },

    // SET_CART: (state, product) => {
    //     if (state.cart.length) {
    //         let isProductExists = false;
    //
    //         state.cart.map(function (item) {
    //             if (item.article === product.article) {
    //                 isProductExists = true;
    //                 item.quantity++
    //             }
    //         })
    //         if (!isProductExists) {
    //             state.cart.push(product)
    //         }
    //     } else {
    //         state.cart.push(product)
    //     }
    // },

    SET_CART: (state, product) => {
        let isProductExist = false;

        state.cart.map(function (item) {
            if (item.article === product.article) {
                isProductExist = true
                item.quantity++
            }
        });

        isProductExist || console.log('нету');
        !isProductExist || console.log('такой есть');

        isProductExist || state.cart.push({ ...product, quantity: 1 });
        /*
         * в данной строке мы сразу ставим quantity:1 для любого нового товара в корзине,
         * компоненты получают его сразу в пропсах
         */
    },

    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
    },

    INCREMENT: (state, index) => {
        state.cart[index].quantity++
    },

    DECREMENT: (state, index) => {
        if(state.cart[index].quantity > 1){
            state.cart[index].quantity--
        }
    },
}