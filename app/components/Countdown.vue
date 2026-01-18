<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 1. Cấu hình thời gian đích
const props = defineProps({
  date: {
    type: String,
    default: '2026-01-01T00:00:00'
  }
})

const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')
let timer = null

const updateTime = () => {
  const target = new Date(props.date).getTime()
  const now = new Date().getTime()
  const diff = target - now

  if (diff <= 0) {
    clearInterval(timer)
    return
  }

  // Chuyển đổi và định dạng số có 2 chữ số (ví dụ: 09 thay vì 9)
  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((diff % (1000 * 60)) / 1000)

  days.value = d < 10 ? `0${d}` : d
  hours.value = h < 10 ? `0${h}` : h
  minutes.value = m < 10 ? `0${m}` : m
  seconds.value = s < 10 ? `0${s}` : s
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="countdown">
    <div id="days" class="time-section">
      <div class='time-group'>
        <div class='time-segment'>
          <div class='segment-display'>
            <div class="segment-display__top">2</div>
            <div class="segment-display__bottom">2</div>
            <div class="segment-overlay">
              <div class="segment-display__top">2</div>
              <div class="segment-display__bottom">2</div>
            </div>
          </div>
        </div>
        <div class='time-segment'>
          <div class='segment-display'>
            <div class="segment-display__top">2</div>
            <div class="segment-display__bottom">2</div>
            <div class="segment-overlay">
              <div class="segment-overlay__top">2</div>
              <div class="segment-overlay__bottom">2</div>
            </div>
          </div>
        </div>
      </div>
      <p>Days</p>
    </div>
    <div id="hours" class="time-section">
      <div class='time-group'>
        <div class='time-segment'>
          <div class='segment-display'>
            <div class="segment-display__top">2</div>
            <div class="segment-display__bottom">2</div>
            <div class="segment-overlay">
              <div class="segment-display__top">2</div>
              <div class="segment-display__bottom">2</div>
            </div>
          </div>
        </div>
        <div class='time-segment'>
          <div class='segment-display'>
            <div class="segment-display__top">2</div>
            <div class="segment-display__bottom">2</div>
            <div class="segment-overlay">
              <div class="segment-overlay__top">2</div>
              <div class="segment-overlay__bottom">2</div>
            </div>
          </div>
        </div>
      </div>
      <p>Hours</p>
    </div>  
    <div id="minutes" class="time-section">
      <div class='time-group'>
        <div class='time-segment'>
          <div class='segment-display'>
            <div class="segment-display__top">2</div>
            <div class="segment-display__bottom">2</div>
            <div class="segment-overlay">
              <div class="segment-display__top">2</div>
              <div class="segment-display__bottom">2</div>
            </div>
          </div>
        </div>
        <div class='time-segment'>
          <div class='segment-display'>
            <div class="segment-display__top">2</div>
            <div class="segment-display__bottom">2</div>
            <div class="segment-overlay">
              <div class="segment-overlay__top">2</div>
              <div class="segment-overlay__bottom">2</div>
            </div>
          </div>
        </div>
      </div>
      <p>Minutes</p>
    </div>
    <div id="seconds" class="time-section">
      <div class='time-group'>
        <div class='time-segment'>
          <div class='segment-display'>
            <div class="segment-display__top">2</div>
            <div class="segment-display__bottom">2</div>
            <div class="segment-overlay">
              <div class="segment-display__top">2</div>
              <div class="segment-display__bottom">2</div>
            </div>
          </div>
        </div>
        <div class='time-segment'>
          <div class='segment-display'>
            <div class="segment-display__top">2</div>
            <div class="segment-display__bottom">2</div>
            <div class="segment-overlay">
              <div class="segment-overlay__top">2</div>
              <div class="segment-overlay__bottom">2</div>
            </div>
          </div>
        </div>
      </div>
      <p>Seconds</p>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  padding-top: 100px;
}
.countdown {
  display: flex;
  gap: 30px;
  font-family: sans-serif;
}
.time-section {
  text-align: center;
  font-size: 30px;
}
.time-group {
  display: flex;
  gap: 10px;
}
.time-segment {
  display: block;
  font-size: 100px;
  font-weight: 900;
  width: 100px;
}
.segment-display {
  position: relative;
  height: 100%;
}
.segment-display__top, .segment-display__bottom {
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 50%;
  position: relative;
}
.segment-display__top {
  background-color: #111;
  color: #eee;
  line-height: 1.5;
}
.segment-display__bottom {
  background-color: #333;
  color: #fff;
  line-height: 0;
}
.segment-overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100px;
  perspective: 400px;
}
.segment-overlay__top,
.segment-overlay__bottom {
  position: absolute;
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 50%;
}
.segment-overlay__top {
  top: 0;
  line-height: 1.5;
  color: #eee;
  background-color: #111;
}
.segment-overlay__bottom {
  bottom: 0;
  line-height: 0;
  color: #fff;
  background-color: #333;
  border-top: 2px solid black;
  transform-origin: top;
}
.segment-overlay.flip .segment-overlay__top {
  animation: flip-top 0.8s linear;
}
.segment-overlay.flip .segment-overlay__bottom {
  animation: flip-bottom 0.8s linear;
}
@keyframes flip-top {
  0% {
    transform: rotateX(0deg);
  }
  50%, 100% {
    transform: rotateX(-90deg);
  }
}
@keyframes flip-bottom {
  0%, 50% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
</style>