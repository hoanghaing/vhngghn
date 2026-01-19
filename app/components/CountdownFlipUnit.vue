<template>
  <div class="flex flex-col items-center">
    <div class="flex gap-1">
      <div v-for="(digit, index) in digits" :key="index" class="time-segment">
        <div
          class="relative w-full h-full overflow-hidden rounded-lg bg-[#111] shadow-2xl"
        >
          <div
            class="absolute top-0 left-0 w-full h-1/2 flex items-end justify-center bg-[#1a1a1a] text-[#eee] overflow-hidden"
          >
            <span class="translate-y-[50%]">{{ digit }}</span>
          </div>
          <div
            class="absolute bottom-0 left-0 w-full h-1/2 flex items-start justify-center bg-[#222] text-white overflow-hidden border-t border-black/50"
          >
            <span class="-translate-y-[50%]">{{ digit }}</span>
          </div>

          <div :key="digit" class="segment-overlay flip">
            <div class="overlay-top">
              <span class="translate-y-[50%]">{{ digit }}</span>
            </div>
            <div class="overlay-bottom">
              <span class="-translate-y-[50%]">{{ digit }}</span>
            </div>
          </div>

          <div
            class="absolute top-1/2 left-0 w-full h-[1px] bg-black/80 z-20 -translate-y-1/2"
          ></div>
        </div>
      </div>
    </div>
    <p class="mt-4 text-[11px] uppercase tracking-[0.2em] text-white font-bold">
      {{ label }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  value: [String, Number],
  label: String,
});

const digits = computed(() => props.value.toString().padStart(2, "0").split(""));
</script>

<style scoped>
.time-segment {
  position: relative;
  display: block;
  font-weight: 900;
  width: 50px;
  height: 75px;
  font-size: 60px;
}

@media (min-width: 1181px) {
  :deep(.time-segment) {
    width: 90px;
    height: 135px;
    font-size: 110px;
  }
}

@media (min-width: 769px) and (max-width: 1180px) {
  :deep(.time-segment[data-v-243903c8]) {
    width: 81px;
    height: 121px;
    font-size: 99px;
  }
}

@media (max-width: 768px) {
  :deep(.time-segment[data-v-243903c8]) {
    width: 70px;
    height: 100px;
    font-size: 80px;
  }
}
span {
  display: block;
  line-height: 0;
}

.segment-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  perspective: 500px;
}

.overlay-top,
.overlay-bottom {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  backface-visibility: hidden;
}

.overlay-top {
  top: 0;
  align-items: flex-end;
  background-color: #1a1a1a;
  color: #eee;
  z-index: 11;
  transform-origin: bottom;
}

.overlay-bottom {
  bottom: 0;
  align-items: flex-start;
  background-color: #222;
  color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  transform-origin: top;
  transform: rotateX(90deg);
}

.flip .overlay-top {
  animation: flip-top 0.4s ease-in forwards;
}
.flip .overlay-bottom {
  animation: flip-bottom 0.4s ease-out 0.4s forwards;
}

@keyframes flip-top {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-90deg);
  }
}

@keyframes flip-bottom {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
</style>
