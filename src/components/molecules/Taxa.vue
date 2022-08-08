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
    <button class="btn-continuar">Finalizar</button>
    <!-- <button @click="CLEAR_CART(products)" class="btn-clean">
      Limpar carrinho
    </button> -->
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
  font-weight: 700;
  border-radius: 0.618rem;
}
</style>
