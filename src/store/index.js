import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    ADD_CART(state, product) {
      if (state.cart.find((item) => item.id === product.id)) {
        return 'Product already in cart'
      } else {
        state.cart.push(product)
      }
    },
    REMOVE_CART(state, product) {
      if (state.cart.find((item) => item.id === product.id)) {
        state.cart.splice(state.cart.indexOf(product), 1)
      }
    },
    CLEAR_CART(state) {
      state.cart = []
    }
  },
  actions: {
    fetchProducts(context) {
      return fetch(
        'https://my-json-server.typicode.com/rafaeelricco/api-json-server/products'
      )
        .then((response) => response.json())
        .then((data) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch((err) => console.error(err))
    },
    ADD_PRODUCT(store, product) {
      store.commit('ADD_CART', product)
    },
    REMOVE_PRODUCT(store, product) {
      store.commit('REMOVE_CART', product)
    },
    CLEAR_CART(store) {
      store.commit('CLEAR_CART', [])
    }
  },
  getters: {
    $allProducts(state) {
      return state.products
    },
    $cartProducts(state) {
      if (state.cart.length < 1) {
        return 'Nenhum plano selecionado'
      } else {
        const name = state.cart.map((product) => product.title).join('')
        return name
      }
    },
    $cartTotal(state) {
      if (state.cart.length < 1) {
        return 'Seu carrinho está vazio'
      } else {
        let total = 0
        state.cart.map((product) => {
          total += product.price
        })
        return 'R$' + Math.floor(total) + ',90'
      }
    },
    $cartProductFixo(state) {
      if (state.cart.length < 1) {
        return 'Vivo Fixo não selecionado'
      } else {
        const fixo = state.cart
          .filter((product) => product.category === 'Fixo')
          .map((product) => product.title)
          .join('')
        return fixo
      }
    },
    $cartProductTV(state) {
      if (state.cart.length < 1) {
        return 'Vivo TV não selecionado'
      } else {
        const tv = state.cart
          .filter((product) => product.category === 'TV')
          .map((product) => product.title)
          .join('')
        return tv
      }
    },
    $cartProductInternet(state) {
      if (state.cart.length < 1) {
        return 'Vivo Internet não selecionado'
      } else {
        const Internet = state.cart
          .filter((product) => product.category === 'Internet')
          .map((product) => product.title)
          .join('')
        return Internet
      }
    }
  }
})
