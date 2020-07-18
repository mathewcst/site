<template>
  <div class="twitch-player">
    <iframe
      src="https://player.twitch.tv/?channel=mathewcst&parent=localhost&muted=true"
      height="720"
      width="100%"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true"
    >
    </iframe>

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
</style>
