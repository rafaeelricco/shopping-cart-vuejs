<template>
  <div class="total">
    <div class="total-line">
      <p>Internet Vivo</p>
      <p>{{ $cartProductInternet }}</p>
    </div>
    <div class="total-line">
      <p>Telefonia fixa</p>
      <p>{{ $cartProductFixo }}</p>
    </div>
    <div class="total-line">
      <p>Vivo TV</p>
      <p>{{ $cartProductTV }}</p>
    </div>
    <hr />
    <div class="total-sum">
      <p>Total</p>
      <p>{{ $cartTotal }}</p>
    </div>
    <div class="buttons-cart">
      <button class="btn-continuar">Finalizar</button>
      <button @click="CLEAR_CART(products)" class="btn-continuar">
        Limpar carrinho
      </button>
    </div>
  </div>
</template>

<script>
import CreatedMixin from '../bosons/CreatedMixin.vue'

export default {
  mixins: [CreatedMixin]
}
</script>

<style scoped>
.total {
  margin: 5rem 0 0 0;
}
.total-line {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  color: #666;
}
.total-sum {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  color: #609;
  font-weight: bold;
}
.btn-continuar {
  background-color: #ff9901;
  border-style: none;
  width: 12rem;
  height: 2.218rem;
  color: #fff;
  border-radius: 0.618rem;
}

.buttons-cart {
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  justify-content: space-between;
  margin: 1.618rem 0 0 0;
}
@media (max-width: 632px) {
  .buttons-cart {
    grid-auto-flow: row;
    grid-gap: 1rem;
    justify-content: space-between;
  }
}
</style>
