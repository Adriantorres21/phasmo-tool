<template>
  <div class="inicio-container">
    <div class="cronometro-container">
      <h1>{{ formattedTime }}</h1>
      <button class="btn-start" @click="startTimer">Start</button>
      <button class="btn-stop" @click="stopTimer">Stop</button>
      <button class="btn-reset" @click="resetTimer">Reset</button>
    </div>
    <div class="progress-card-container">
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: progressBarWidth }"></div>
      </div>
      <div class="card-container">
        <div class="card">
          <h2>{{ entityName }}</h2>
        </div>
      </div>
    </div>
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
      started: false,
      progressBarValue: 0,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.currentTime / 60000);
      const seconds = Math.floor((this.currentTime % 60000) / 1000);
      const milliseconds = this.currentTime % 1000;
      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
    },
    progressBarWidth() {
      return `${(this.currentTime / 180000) * 100}%`;
    },
    entityName() {
      if (this.currentTime < 90000) {
        return "Demonio";
      } else if (this.currentTime >= 90000 && this.currentTime < 180000) {
        return "Cualquiera";
      } else {
        return "Espiritu";
      }
    },
  },
  methods: {
    startTimer() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          this.currentTime += 10;
          if (this.currentTime >= 180000) {
            this.stopTimer();
          }
        }, 10);
        this.started = true;
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
      this.started = false;
    },
    handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        this.pausedAt = Date.now();
        this.pausedTime = this.currentTime;
        this.stopTimer();
      } else {
        if (this.pausedAt && this.started) {
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

<style scoped>
h1 {
  padding-top: 50px;
  font-size: 50px;
  font-family: "Arial Black", sans-serif;
  text-align: center;
  color: #a00101; 
  text-shadow: 0 0 10px #a00101; 
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

.progress-container {
  width: 100%;
  height: 20px;
  background-color: #ccc;
  border-radius: 10px;
  margin-top: 20px;
}

.progress-bar {
  height: 20px;
  background-color: #721616;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
}

.card-container {
  margin-top: 20px;
}

.card {
  width: 100%;
  height: 100px;
  background-color: #5f2424;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.card h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.progress-card-container {
  margin-top: 50px;
}
</style>
