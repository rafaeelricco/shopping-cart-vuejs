<script>
export default {
  data() {
    return {
      products: [],
      cart: []
    }
  },
  computed: {
    $allProducts() {
      return this.$store.getters.$allProducts
    },
    $cartProducts() {
      return this.$store.getters.$cartProducts
    },
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
    ADD_ITEM(product) {
      this.$store.dispatch('ADD_PRODUCT', product)
    },
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
      if (this.$store.state.cart.length >= 2) {
        return true
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
    this.$store.dispatch('fetchProducts')
  }
}
</script>
