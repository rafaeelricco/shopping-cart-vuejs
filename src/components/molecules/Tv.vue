<template>
  <div>
    <h1 class="title">Vivo TV</h1>
    <p class="subtitle">Os melhores planos e canais só aqui na Vivo TV.</p>
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
          <h1 class="price-card">R${{ product.price }}0</h1>
          <div class="buttons">
            <button
              v-if="!stateTV(product)"
              :disabled="!stateFixo(product)"
              @click="ADD_ITEM(product)"
            >
              Selecionar
            </button>
            <button @click="REMOV_ITEM(product)">Remover</button>
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
      return this.$store.state.products.filter((product) => {
        return product.category === 'TV'
      })
    }
  }
}
</script>
