<script setup lang="js">
import { ref, computed, onMounted, onUnmounted, watch, defineEmits } from 'vue';

const emit = defineEmits();

const props = defineProps({
  startTimer: Boolean, 
});

const timeElapsed = ref(0); 
let timer = null; 

// Startar timern och uppdaterar tiden varje sekund
const startTimer = () => {
  timer = setInterval(() => {
    timeElapsed.value++;
    emit('time-updated', formattedTime.value); 
  }, 1000);
};

// Stoppar timern genom att rensa intervallet
const stopTimer = () => {
    clearInterval(timer);
};

// Återställ timern (nollställ tid)
const resetTimer = () => {
  timeElapsed.value = 0;
};

// Starta timern om startTimer är true
onMounted(() => {
  if (props.startTimer) {
    startTimer();
  }
});

// Pausa eller starta timern om startTimers värde ändras
watch(() => props.startTimer, (newValue) => {
  if (newValue) {
    resetTimer();
    startTimer(); 
  } else {
    stopTimer();
  }
});

// Stoppa timern 
onUnmounted(() => {
  stopTimer();
});

// Formattera tiden i formatet mm:ss
const formattedTime = computed(() => {
  const minutes = Math.floor(timeElapsed.value / 60);
  const seconds = timeElapsed.value % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
});
</script>

<template>
  <div class="timer">
    Spelad tid: {{ formattedTime }}
  </div>
</template>

<style scoped>
.timer {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
