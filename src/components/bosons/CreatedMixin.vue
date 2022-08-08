<script>
export default {
  data() {
    return {
      products: [],
      cart: []
    }
  },
  computed: {
    // lista de produtos no carrinho
    $allProducts() {
      return this.$store.getters.$allProducts
    },
    // produtos no carrinho
    $cartProducts() {
      return this.$store.getters.$cartProducts
    },
    // soma do total do carrinho
    $cartTotal() {
      return this.$store.getters.$cartTotal
    },
    $cartProductFixo() {
      return this.$store.getters.$cartProductFixo
    },
    $cartProductTV() {
      return this.$store.getters.$cartProductTV
    },
    $cartProductInternet() {
      return this.$store.getters.$cartProductInternet
    }
  },
  methods: {
    // método que adiciona um produto ao carrinho
    ADD_ITEM(product) {
      this.$store.dispatch('ADD_PRODUCT', product)
    },
    // método que remove um produto do carrinho
    REMOV_ITEM(product) {
      this.$store.dispatch('REMOVE_PRODUCT', product)
    },
    CLEAR_CART() {
      this.$store.dispatch('CLEAR_CART')
    },
    stateInternet() {
      if (
        this.$store.state.cart.filter((product) => {
          return product.category === 'Internet'
        }).length == 0
      ) {
        return true
      } else {
        return false
      }
    },
    stateFixo() {
      if (this.$store.state.cart.length == 2) {
        return true
      } else {
        return false
      }
    },
    stateTV() {
      if (this.$store.state.cart.length == 3) {
        return true
      } else {
        return false
      }
    }
  },
  created() {
    // faz a busca de dados quando a aplicação é iniciada
    this.$store.dispatch('fetchProducts')
  }
}
</script>
