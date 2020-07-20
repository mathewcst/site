<script lang="ts">
import Vue from 'vue'
import {
  faTwitter,
  faTwitch,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export default Vue.extend({
  computed: {
    fab() {
      return {
        faTwitter,
        faTwitch,
        faInstagram,
        faYoutube,
      }
    },
  },
})
</script>

<template>
  <div class="social-media">
    <ul class="media--list">
      <li class="media--item">
        <a
          href="https://twitter.com/mathewcst"
          target="_blank"
          class="media--link media--twitter"
        >
          <fa-icon :icon="fab.faTwitter" class="media--icon" /> Twitter
        </a>
      </li>
      <li class="media--item">
        <a
          href="https://www.twitch.tv/mathewcst"
          target="_blank"
          class="media--link media--twitch"
        >
          <fa-icon :icon="fab.faTwitch" class="media--icon" /> Twitch
        </a>
      </li>
      <li class="media--item">
        <a
          href="https://instagram.com/mathewcst"
          target="_blank"
          class="media--link media--instagram"
        >
          <fa-icon :icon="fab.faInstagram" class="media--icon" /> Instagram
        </a>
      </li>
      <li class="media--item">
        <a
          href="https://youtube.com/mathewcst"
          target="_blank"
          class="media--link media--youtube"
        >
          <fa-icon :icon="fab.faYoutube" class="media--icon" /> YouTube
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
.social-media {
  margin: 15px 0;
  display: block;
}

.media--list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 15px;
}

.media--item {
  height: 60px;
}

.media--link {
  width: 100%;
  height: 100%;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: var(--grey-dark);
  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  background-size: 100% 200%;
  background-image: linear-gradient(to top, black 50%, var(--orange) 50%);
  transition: background-position 200ms;
}

.media--twitter {
  background-image: linear-gradient(to top, var(--blue) 50%, var(--orange) 50%);
}

.media--twitch {
  background-image: linear-gradient(
    to top,
    var(--purple) 50%,
    var(--orange) 50%
  );
}

.media--instagram {
  background-image: linear-gradient(
    to top,
    var(--magenta) 50%,
    var(--orange) 50%
  );
}

.media--youtube {
  background-image: linear-gradient(to top, var(--red) 50%, var(--orange) 50%);
}

.media--link:hover {
  color: #fff;
  background-position: 0 100%;
}

.media--icon {
  margin-right: 10px;
  font-size: 20px;
}

@media screen and (min-width: 860px) {
  .media--list {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    column-gap: 5%;
    row-gap: auto;
  }
}
</style>
