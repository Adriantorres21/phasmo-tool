<template>
  <div class="menu-flotante">
    <div class="menu-toggle" @click="toggleMenu">
      <i class="fas fa-ghost"></i>
    </div>
    <div class="menu-dropdown" v-if="isOpen">
      <div
        class="opcion"
        v-for="(opcion, index) in opciones"
        :key="index"
        :style="{ opacity: opcion.opacity }"
      >
        <RouterLink :to="opcion.link" v-if="opcion.tooltip == 'Cerrar'" @click="Cerrar()">
          <v-tooltip
            :text="opcion.tooltip"
          >
            <template v-slot:activator="{ props }">
              <i v-bind="props" class="fas" :class="opcion.icono"></i>
            </template>
          </v-tooltip>
        </RouterLink>
        <RouterLink :to="opcion.link" v-else>
          <v-tooltip
            :text="opcion.tooltip"
          >
            <template v-slot:activator="{ props }">
              <i v-bind="props" class="fas" :class="opcion.icono"></i>
            </template>
          </v-tooltip>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
      opciones: [
        {
          link: "/filtro",
          icono: "fas fa-book",
          opacity: 0,
          tooltip: "Filtrar fantasma",
        },
        {
          link: "/Cronometro",
          icono: "fas fa-clock",
          opacity: 0,
          tooltip: "Cronometro",
        },
        {
          link: "/Inicio",
          icono: "fas fa-arrow-left",
          opacity: 0,
          tooltip: "Volver",
        },       
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.opciones.forEach((opcion, index) => {
          setTimeout(() => {
            opcion.opacity = 1;
          }, index * 200);
        });
      } else {
        this.opciones.forEach((opcion, index) => {
          opcion.opacity = 0;
        });
      }
    },
  },
};
</script>

<style>
.menu-flotante {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.menu-toggle {
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-toggle i {
  font-size: 24px;
  color: #fff;
}

.menu-dropdown {
  position: absolute;
  top: 50px;
  right: 0;
  padding: 10px;
  border-radius: 10px;
}

.opcion {
  width: 50px;
  height: 50px;
  background-color: #333;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  transition: opacity 0.2s ease-in-out;
}

.opcion i {
  font-size: 24px;
  color: #fff;
}
</style>
