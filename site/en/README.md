---
home: true
heroImage: /avatar-site.png
actionText: Download My CV
actionLink: https://docs.google.com/document/d/1cuClxObtxud29j_Jj7EVLhKlieuU_tO1u-RSarqFLAY/edit?usp=sharing
footer: MIT | Feito com ❤️ e VuePress
---

## Hello there!
I'm Matheus Costa, I have {{ age }} years old and I'm a fullstack developer for {{ frontAge }} years now. I've stated my career with PHP at 2009, making full systems (at the time that was no such thing as frontend or backend in Brazil). Some years later I've started to love more and more working with frontend and the famous **Web 2.0**, the **tableless** and some time later for **AngularJS**.

Nowdays I work as a freelancer developing products for companies.

### Stack
My *go to* tool this days is Javascript :metal: (Vue, React, Node), but I do work with PHP and Wordpress :punch: and, some times, even C# :video_game: (learning to make games, it's awesome!)

I'm completly in love with [Vue](https://vuejs.org/) :heart: (btw this site is built with VuePress)

### Clients

Some companies that I've work with:
[Globo](https://www.globo.com/), [Satia](https://satia.com.vc/), [Ceva](https://www.cevapetgame.com.br/), [Neofit](https://neofit.app/), [Fábrica de Doces Brasil](http://fabricadedocesbrasil.com.br/), [Japa Temaki](http://japatemaki.com.br/), [GPME](http://gpme.com.br/),
[Qranio](https://www.qranio.com/), [BRMedia Group](https://br-mediagroup.com/), [Pagar.me](https://pagar.me/) e [Digital House Brasil](https://br.digitalhouse.com/)]

## Personal Projects
As the majority of my time, today, is to work as freelancer, I also do some side projects in-between jobs. This very site is one of them, build with [VuePress](https://v0.vuepress.vuejs.org/) :heart:.

Another project is called LoDuo, a tool to help :video_game: League of Legends Players find better partners (duos) for better matchs. I can't share it (yet) but soon enough I'll post a link here.

You can find me on [Twitter](https://twitter.com/mathewcst), [GitHub](https://github.com/mathewcst) and [LinkedIn](https://www.linkedin.com/in/mathewcst)

<script>
export default {
  computed: {
    age() {
      const today = new Date().getFullYear()
      const birthday = new Date('1994-07-14').getFullYear()
      return today - birthday
    },
    frontAge() {
      const today = new Date().getFullYear()
      const birthday = new Date('2009-07-14').getFullYear()
      return today - birthday
    },
  }
}
</script>