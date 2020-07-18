<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
})
</script>

<template>
  <header class="app--header">
    <div class="header--avatar">
      <img src="~/assets/images/avatar.png" class="avatar" />
    </div>
    <div class="header--title">
      <h1>Matheus Costa</h1>
    </div>
  </header>
</template>

<style>
.app--header {
  display: grid;
  grid-template-columns: 120px auto;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  background: var(--orange);
}

.avatar {
  max-width: 120px;
  max-height: 120px;
}

.header--title h1 {
  font-size: 85px;
  font-weight: 900;
  text-transform: uppercase;
  color: var(--grey-dark);
}
</style>
