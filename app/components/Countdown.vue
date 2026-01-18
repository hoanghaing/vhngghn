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
  <div class="my-custom-clock">
    <div class="unit-box">
      <span class="val">{{ days }}</span>
      <span class="lab">Ngày</span>
    </div>
    <div class="unit-box">
      <span class="val">{{ hours }}</span>
      <span class="lab">Giờ</span>
    </div>
    <div class="unit-box">
      <span class="val">{{ minutes }}</span>
      <span class="lab">Phút</span>
    </div>
    <div class="unit-box">
      <span class="val animation-spin">{{ seconds }}</span>
      <span class="lab">Giây</span>
    </div>
  </div>
</template>

<style scoped>
/* Dán phần CSS của tutorial vào đây */
.my-custom-clock {
  display: flex;
  gap: 15px;
}

.unit-box {
  text-align: center;
  /* Thêm style từ tutorial của bạn... */
}

.val {
  display: block;
  font-size: 2rem;
  font-family: monospace;
}

/* Ví dụ hiệu ứng cho giây */
.animation-spin {
  color: #3b82f6;
  transition: all 0.5s;
}
</style>