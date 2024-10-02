<template>
  <v-slide-y-transition>
    <div class="cards_item">
      <div class="card">
        <div class="card_image" @click="click()">
          <img
            src="../assets/imagenes/skull.jpg"
            alt=""
          />
        </div>
        <div class="card_content">
          <h2 class="card_title">{{ ghost.name }}</h2>
          <h3 class="card_title">{{ ghost.evidence.join(", ") }}</h3>
          <v-fab-transition>
            <div class="card_text" v-if="mostrarTexto">
              <p>
                <strong>- Debilidad: </strong>{{ ghost.characteristics.débil }} <br />
                <strong>- Fortaleza: </strong>{{ ghost.characteristics.fuerte }} <br /><br />
                <strong>- Parpadeo: </strong>{{ ghost.characteristics.frecuencia_de_parpadear }} <br />
                <strong>- Habilidad de Caza: </strong>{{ ghost.characteristics.habilidad_de_caza }} <br />
                <strong>- Cordura: </strong>{{ ghost.characteristics.tiempo_de_cacería.cordura }} <br />
                <strong>- Incienso: </strong>{{ ghost.characteristics.tiempo_de_cacería.incienso }} <br />
                <strong>- Velocidad: </strong>{{ ghost.characteristics.velocidad.general }} <br />
                <strong>- ¿Cuándo es veloz?: </strong>{{ ghost.characteristics.velocidad.cuando_es_rápido }} <br />                
              </p>
            </div>
          </v-fab-transition>
        </div>
      </div>
    </div>
  </v-slide-y-transition>
</template>

<script>
export default {
  name: "GhostCard",
  props: {
    ghost: { type: Object, default: () => [] },
  },
  data() {
    return {
      mostrarTexto: false,
    };
  },
  methods: {
    click() {
      this.mostrarTexto = !this.mostrarTexto;
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.cards_item {
  width: 250px;
  display: flex;
  padding: 1rem;
}

.card_image {
  height: calc(7 * 1rem);
  padding: 1.5rem 1.2rem 0;
  position: relative;
}
.card_image:before,
.card_image:after {
  content: "";
  position: absolute;
  width: 20px;
  left: 60%;
  top: 0;
  height: 45px;
  background: #bbb38db8;
  transform: rotate(45deg);
}
.card_image:after {
  transform: rotate(-45deg);
  top: auto;
  bottom: -22px;
  left: 40%;
}
.card_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cards_item {
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.25));
}

.card {
  background-color: rgb(58, 47, 12);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-left: 30px;
  background: repeating-linear-gradient(
        #0000 0 calc(1.2rem - 1px),
        #66afe1 0 1.2rem
      )
      right bottom / 100% 100%,
    linear-gradient(red 0 0) 30px 0/2px 100% #f5f2e9;
  background-repeat: no-repeat;
  line-height: 1.2rem;
  -webkit-mask: radial-gradient(circle 0.8rem at 2px 50%, #0000 98%, #000) 0 0/100%
    2.4rem;
}

.card_content {
  padding: 1rem;
}

h2.card_title,
p {
  margin: 1.2rem 0;
}
h2.card_title {
  font-size: 1em;
}
h3.card_title {
  font-size: .8em;
}
body {
  font-family: monospace;
  background: #b7b3a1;
}
.card_text p {
  font-size: 12px;
}
</style>
