<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<template>
  <div id="app">
    <Header />

    <Nuxt />
  </div>
</template>

<style>
:root {
  --orange: #e4b363;
  --grey-dark: #313638;
  --grey-light: #e8e9eb;
  --headerHeight: 250px;
}

html {
  font-family: 'Lato', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: var(--grey-dark);
}

#app {
  display: grid;
  grid-template-rows: var(--headerHeight) auto;
}
</style>
