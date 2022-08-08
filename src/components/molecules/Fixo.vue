<template>
  <div>
    <h1 class="title">Fixo</h1>
    <p class="subtitle">Agora escolha seu pacote de telefone fixo</p>
    <div class="cards" v-for="product in filterProducts" :key="product.id">
      <div class="container-card-fixo">
        <h1 class="title-card-fixo">
          {{ product.title }}
        </h1>
        <p class="subtitle-card">
          {{ product.description }}
        </p>
        <h1 class="price-card-fixo">R${{ product.price }}</h1>
        <div class="buttons">
          <button
            v-if="!stateFixo(product)"
            :disabled="stateInternet(product)"
            @click="ADD_ITEM(product)"
          >
            Adicionar
          </button>
          <button @click="REMOV_ITEM(product)">Remover</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreatedMixin from '../bosons/CreatedMixin.vue'

export default {
  mixins: [CreatedMixin],

  computed: {
    // filtra os produtos pela categoria
    filterProducts: function () {
      return this.$store.state.products.filter((product) => {
        return product.category === 'Fixo'
      })
    }
  }
}
</script>
