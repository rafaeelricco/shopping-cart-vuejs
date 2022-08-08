<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  align-content: center;
  margin: 2rem 5%;
  max-width: 1100px;
}
</style>
