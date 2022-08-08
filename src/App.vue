<template>
  <Container>
    <VivoInternet />
    <VivoFixo />
    <VivoTV />
    <Taxa />
  </Container>
</template>

<script>
import Container from './components/bosons/Container.vue'
import Taxa from './components/molecules/Taxa.vue'
import VivoTV from './components/organisms/VivoTV.vue'
import VivoInternet from './components/organisms/VivoInternet.vue'
import VivoFixo from './components/organisms/VivoFixo.vue'

export default {
  name: 'App',
  components: { Container, Taxa, VivoTV, VivoInternet, VivoFixo }
}
</script>
