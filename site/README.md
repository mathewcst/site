---
home: true
heroImage: /avatar-site.png
actionText: Baixar Currículo
actionLink: https://docs.google.com/document/d/1ul-aFVY05Mi0AdA1cjqrCpV9sG8dx1X1QLj-hd_oLw4/edit?usp=sharing
footer: MIT | Feito com ❤️ e VuePress
---

## Olá!
Eu sou Matheus Costa, tenho {{ age }} anos e sou desenvolvedor fullstack há {{ frontAge }} anos. Comecei minha carreira com PHP em 2009, desenvolvendo sistemas completos (na época não tínhamos essa separação de front e backend). Alguns anos depois comecei a me apaixonar cada vez mais pelo frontend com a famosa **web 2.0**, o **tableless** e algum tempo depois o **AngularJS**.

Hoje atuo como freelancer desenvolvendo sistemas completos (conhecido também como **fullstack**) para empresas.

### Stack
Minha ferramenta principal hoje é Javascript :metal: (Vue, React, Node), mas também trabalho com PHP/Wordpress :punch: e de vez em quando arrisco um C# :video_game: (aprendendo a fazer games, é massa!).

Hoje estou apaixonado com [Vue](https://vuejs.org/) :haert: (inclusive esse site é feito com Vuepress)

### Clientes

Algumas empresas que já trabalhei:
[Globo](https://www.globo.com/), [Satia](https://satia.com.vc/), [Ceva](https://www.cevapetgame.com.br/), [Neofit](https://neofit.app/), [Fábrica de Doces Brasil](http://fabricadedocesbrasil.com.br/), [Japa Temaki](http://japatemaki.com.br/), [GPME](http://gpme.com.br/),
[Qranio](https://www.qranio.com/), [BRMedia Group](https://br-mediagroup.com/), [Pagar.me](https://pagar.me/) e [Digital House Brasil](https://br.digitalhouse.com/)]

## Projetos Pessoais
Como a maior parte do meu tempo, hoje, é atuar como freelancer, me dedico a alguns projetos pessoais também. Um deles é este próprio site que é feito em [VuePress](https://v0.vuepress.vuejs.org/) :heart:

Outro é um projeto chamado LoDuo, para ajudar jogadores de :video_game: League of Legends a acharem melhores parceiros para suas partidas. Ainda não posso compartilhar mas logo terá um link aqui.

Você pode me achar no [Twitter](https://twitter.com/mathewcst), no [GitHub](https://github.com/mathewcst) e no [LinkedIn](https://www.linkedin.com/in/mathewcst)

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