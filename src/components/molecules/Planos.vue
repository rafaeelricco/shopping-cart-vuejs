<template>
  <div>
    <h1 class="title">Internet</h1>
    <p class="subtitle">Selecione um plano de internet para continuar</p>
    <div class="cards">
      <div v-for="product in filterProducts" :key="product.id">
        <div class="container-card">
          <h1 class="title-card">{{ product.title }}</h1>
          <p class="subtitle-card">
            {{ product.description }}
          </p>
          <div class="icons-layout">
            <img
              class="icon-card"
              src="/src/assets/icons/estadio.png"
              alt="estádio"
            />
            <img
              class="icon-card"
              src="/src/assets/icons/fun-kids.png"
              alt="fun-kids"
            />
            <img class="icon-card" src="/src/assets/icons/b.png" alt="b" />
            <img
              class="icon-card"
              src="/src/assets/icons/band.png"
              alt="band"
            />
            <img
              class="icon-card"
              src="/src/assets/icons/paramount.png"
              alt="paramount"
            />
          </div>
          <p class="details-card">+ Vivo Home Assist</p>
          <h1 class="price-card">R$ {{ product.price }}</h1>
          <div class="buttons">
            <button v-if="stateInternet(product)" @click="ADD_ITEM(product)">
              Adicionar
            </button>
            <button :disabled="stateFixo(product)" @click="REMOV_ITEM(product)">
              Remover
            </button>
          </div>
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
    filterProducts: function () {
      // filtra os produtos pela categoria
      return this.$store.state.products.filter((product) => {
        // retorna os produtos que sejam da categoria Internet
        return product.category === 'Internet'
      })
    }
  }
}
</script>
