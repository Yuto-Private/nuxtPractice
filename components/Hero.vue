<template>
  <section class='hero'>
    <h1>
      <picture>
        <source media="(min-width: 960px)" srcset="~/assets/images/keyVisual.png"> <!-- desktop -->
        <img src="~/assets/images/mobile/keyVisual.png" alt="ON THE AGENT ファッション・ビューティ業界 × IT/WEB・クリエィティブ領域に特化したエージェント">
      </picture>
    </h1>
  </section>
</template>

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