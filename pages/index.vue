<template>

  <nuxt-link to="/about/">About page</nuxt-link>
  
</template>

<script>


export default {

  
}
</script>

<style scoped lang="scss">

.hero {
  background-color: $mainBlue;
  picture {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @include mediaQuery(verticalFollow) {
      height: 100vh;
    }
  }
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}

</style>
