<template>
  <div class="inicio-container">
    <h1>{{ formattedTime }}</h1>
    <button class="btn-start" @click="startTimer">Start</button>
    <button class="btn-stop" @click="stopTimer">Stop</button>
    <button class="btn-reset" @click="resetTimer">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: 0,
      intervalId: null,
      pausedTime: 0,
      pausedAt: null,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.currentTime / 60000);
      const seconds = Math.floor((this.currentTime % 60000) / 1000);
      const milliseconds = this.currentTime % 1000;
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
    },
  },
  methods: {
    startTimer() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          this.currentTime += 10;
          if (this.currentTime >= 3600000) {
            // 1 hora
            this.stopTimer();
          }
        }, 10);
      }
    },
    stopTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    resetTimer() {
      this.currentTime = 0;
      this.pausedTime = 0;
      this.pausedAt = null;
      this.stopTimer();
    },
    handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        this.pausedAt = Date.now();
        this.pausedTime = this.currentTime;
        this.stopTimer();
      } else {
        if (this.pausedAt) {
          const currentTime = Date.now();
          const timeDiff = currentTime - this.pausedAt;
          this.currentTime = this.pausedTime + timeDiff;
          this.pausedAt = null;
          this.startTimer();
        }
      }
    },
  },
  mounted() {
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  },
  beforeDestroy() {
    document.removeEventListener(
      "visibilitychange",
      this.handleVisibilityChange
    );
  },
};
</script>

<style>
h1 {
  padding-top: 50px;
  font-size: 50px;
  font-family: "Arial Black", sans-serif;
  text-align: center;
  color: #a00101; /* Naranja brillante */
  text-shadow: 0 0 10px #a00101; /* Sombra naranja */
  /* animation: parpadeo 2s infinite; */
}

button {
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px #000;
  cursor: pointer;
  margin: 10px;
}

.btn-start {
  background-color: #00821e;
}

.btn-start:hover {
  background-color: #015a16;
}

.btn-stop {
  background-color: #be0000;
}

.btn-stop:hover {
  background-color: #9d0000;
}

.btn-reset {
  background-color: #ff9900;
}

.btn-reset:hover {
  background-color: #cda401;
}
@keyframes parpadeo {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
