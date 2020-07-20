<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TwitchPlayer',
})
</script>

<template>
  <div class="twitch-player">
    <iframe
      src="https://player.twitch.tv/?channel=mathewcst&parent=mathewcosta.com&muted=true"
      width="100%"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true"
      autoplay="false"
    />

    <SocialMedia />
  </div>
</template>

<style>
.twitch-player {
  position: relative;
  top: -70px;
  max-width: 90%;
  margin: 0 auto;
}

.twitch-player iframe {
  width: 100%;
  height: calc(100vh / 1.77);
}
</style>
