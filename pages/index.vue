<template>
  <div class="container">
    <TwitchPlayer />

    <div class="content">
      <div class="content--bio">
        <p>Olá, eu sou <b>Matheus Costa</b>.</p>

        <p>
          Comecei a programar aos 15 anos e fiz disso minha carreira nos últimos
          10 anos. Hoje, apesar de ainda programar algumas coisas, tenho focado
          em uma mudança de carreira (que ainda não sei onde vai dar).
        </p>

        <p>
          Tenho feito streams na <b>Twitch</b> às Terças, Quintas e Sábados e
          criado vídeos para o <b>YouTube</b> nas Segundas e Quartas
          compartilhando o que tenho aprendido sobre live streams, criação de
          conteúdo e esse mundo de redes sociais.
        </p>

        <p>Venha dar um “oi” quando quiser!</p>
      </div>

      <div class="content--form">
        <h2>Mande um Email</h2>
        <form class="contact">
          <input type="text" name="Nome" placeholder="Nome" />
          <input type="email" name="Email" placeholder="Email" />
          <input type="text" name="Assunto" placeholder="Assunto" />
          <textarea name="Mensagem" placeholder="Mensagem" />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  padding: 0 0 50px;
}

.content {
  padding: 0 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
}

.content--bio p {
  color: #fff;
  font-size: 18px;
  margin: 10px 0;
}

.contact {
  display: flex;
  flex-direction: column;
}

.content--form h2 {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
}

.contact input,
.contact textarea {
  font-size: 18px;
  font-weight: 400;
  padding: 8px 10px;
  margin: 5px 0;
  font-family: 'Lato', Arial, Helvetica, sans-serif;
  background: var(--grey-light);
  border: 0;
}

.contact textarea {
  height: 150px;
}

.contact button {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--grey-dark);
  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  background-size: 100% 200%;
  border: 0;
  margin: 10px 0 0;
  background-image: linear-gradient(to top, black 50%, var(--orange) 50%);
  cursor: pointer;
}
</style>
