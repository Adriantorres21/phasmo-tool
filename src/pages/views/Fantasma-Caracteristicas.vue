<template>
  <h1>Encontrar Fantasma</h1>
  <div class="filtros">
    <div class="filtro">
      <label>Nombre:</label>
      <select v-model="filtroNombre">
        <option value="">Todos</option>
        <option
          v-for="fantasma in fantasmas"
          :key="fantasma.name"
          :value="fantasma.name"
        >
          {{ fantasma.name }}
        </option>
      </select>
    </div>
    <div class="filtro">
      <label>Velocidad:</label>
      <select v-model="filtroVelocidad">
        <option value="">Todos</option>
        <option value="anormal">Anormal</option>
        <option value="media">Media</option>
        <option value="rápido">Rápido</option>
      </select>
    </div>
    <div class="filtro">
      <label>Cordura:</label>
      <select v-model="filtroCordura">
        <option value="">Todos</option>
        <option value="20%">20%</option>
        <option value="30%">30%</option>
        <option value="40%">40%</option>
        <option value="50%">50%</option>
        <option value="60%">60%</option>
      </select>
    </div>
    <div class="filtro">
      <label>Incienso:</label>
      <select v-model="filtroIncienso">
        <option value="">Todos</option>
        <option value="80 segundos">80 segundos</option>
        <option value="120 segundos">120 segundos</option>
        <option value="180 segundos">180 segundos</option>
      </select>
    </div>
    <div class="filtro">
      <label>Frecuencia de parpadear:</label>
      <select v-model="filtroParpadear">
        <option value="">Todos</option>
        <option value="normal">Normal</option>
        <option value="rápido">Rápido</option>
        <option value="lento">Lento</option>
      </select>
    </div>
    <div class="filtro">
      <label>Habilidad de caza:</label>
      <select v-model="filtroHabilidad">
        <option value="">Todos</option>
        <option value="ninguna">Ninguna</option>
        <option value="puede poseer a los vivos">
          Puede poseer a los vivos
        </option>
        <option value="puede crear ilusiones">Puede crear ilusiones</option>
        <option value="puede lanzar muchos objetos a la vez">
          Puede lanzar muchos objetos a la vez
        </option>
      </select>
    </div>
    <div class="filtro">
      <label>Prueba 1:</label>
      <select v-model="filtroPrueba1">
        <option value="">Ninguna</option>
        <option v-for="prueba in pruebas" :key="prueba" :value="prueba">
          {{ prueba }}
        </option>
      </select>
    </div>
    <div class="filtro">
      <label>Prueba 2:</label>
      <select v-model="filtroPrueba2">
        <option value="">Ninguna</option>
        <option v-for="prueba in pruebas" :key="prueba" :value="prueba">
          {{ prueba }}
        </option>
      </select>
    </div>
    <div class="filtro">
      <label>Prueba 3:</label>
      <select v-model="filtroPrueba3">
        <option value="">Ninguna</option>
        <option v-for="prueba in pruebas" :key="prueba" :value="prueba">
          {{ prueba }}
        </option>
      </select>
    </div>
    <div class="filtro">
      <button @click="filtrarFantasmas">Filtrar</button>
    </div>
  </div>
  <div class="lista-fantasmas">
    <ghost-card
      v-for="fantasma in fantasmasFiltrados"
      :key="fantasma.name"
      :ghost="fantasma"
    />
  </div>
</template>

<script>
import { db } from "../../firebase-config.cjs";
import { collection, getDocs } from "firebase/firestore";
import GhostCard from "../../components/GhostCard.vue";

export default {
  name: "Filtro",
  components: { GhostCard },
  data() {
    return {
      filtroNombre: "",
      filtroVelocidad: "",
      filtroCordura: "",
      filtroIncienso: "",
      filtroParpadear: "",
      filtroHabilidad: "",
      filtroPrueba1: "",
      filtroPrueba2: "",
      filtroPrueba3: "",
      fantasmas: [],
      fantasmasFiltrados: [],
      pruebas: [
        "Spirit Box",
        "Orbes",
        "Escritura Fantasma",
        "EMF Nivel 5",
        "Temperaturas bajo cero",
        "Huellas dactilares",
        "Proyector D.O.T.S.",
      ],
    };
  },
  mounted() {
    const datosCollectionRef = collection(db, "datos");
    getDocs(datosCollectionRef).then((snapshot) => {
      this.fantasmas = snapshot.docs.map((doc) => doc.data())[0].ghosts;
      this.fantasmas =  this.fantasmas.map((obj) => ({ ...obj, ghostShow: false }));
      this.fantasmasFiltrados = this.fantasmas;
    });
  },
  methods: {
    filtrarFantasmas() {
      console.log(this.fantasmas);
      this.fantasmasFiltrados = this.fantasmas.filter((fantasma) => {
        return (
          (this.filtroNombre === "" || fantasma.name === this.filtroNombre) &&
          (this.filtroVelocidad === "" ||
            fantasma.characteristics.velocidad.general ===
              this.filtroVelocidad) &&
          (this.filtroCordura === "" ||
            fantasma.characteristics.tiempo_de_cacería.cordura ===
              this.filtroCordura) &&
          (this.filtroIncienso === "" ||
            fantasma.characteristics.tiempo_de_cacería.incienso ===
              this.filtroIncienso) &&
          (this.filtroParpadear === "" ||
            fantasma.characteristics.frecuencia_de_parpadear ===
              this.filtroParpadear) &&
          (this.filtroHabilidad === "" ||
            fantasma.characteristics.habilidad_de_caza ===
              this.filtroHabilidad) &&
          (this.filtroPrueba1 === "" ||
            fantasma.evidence.includes(this.filtroPrueba1)) &&
          (this.filtroPrueba2 === "" ||
            fantasma.evidence.includes(this.filtroPrueba2)) &&
          (this.filtroPrueba3 === "" ||
            fantasma.evidence.includes(this.filtroPrueba3))
        );
      });
    },
  },
};
</script>

<style scoped>
.lista-fantasmas{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}
.filtros {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.filtro {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
}
label {
  color: #ff9900;
  font-weight: bold;
}

select {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px #000;
}

select option {
  background-color: #333;
  color: #fff;
}

button {
  background-color: #ff9900;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px #000;
  cursor: pointer;
}

button:hover {
  background-color: #ffcc00;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #333;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #333;
  color: #fff;
}
select {
  max-width: 150px; /* Ancho máximo de 150px */
  width: 100%; /* Ancho relativo para que se adapte al contenedor */
  height: auto; /* Altura automática para que se adapte al contenido */
  overflow-y: auto; /* Permitir scrolling vertical en caso de que el texto sea demasiado largo */
  white-space: normal; /* Permitir que el texto se ajuste en varias líneas */
  text-overflow: ellipsis; /* Mostrar puntos suspensivos al final del texto si es demasiado largo */
}
</style>
