<script setup>
import CountdownFlipUnit from './CountdownFlipUnit.vue'
const props = defineProps({
  date: { type: String, default: '2026-01-01T00:00:00' }
})

const days = ref(0); const hours = ref(0); const minutes = ref(0); const seconds = ref(0)
let timer = null

const updateTime = () => {
  const diff = new Date(props.date).getTime() - new Date().getTime()
  if (diff <= 0) return clearInterval(timer)

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
  minutes.value = Math.floor((diff / 1000 / 60) % 60)
  seconds.value = Math.floor((diff / 1000) % 60)
}

onMounted(() => {
  updateTime(); timer = setInterval(updateTime, 1000)
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="flex items-center gap-4 md:gap-8">
    <CountdownFlipUnit :value="days" label="Days" />
    <CountdownFlipUnit :value="hours" label="Hours" />
    <CountdownFlipUnit :value="minutes" label="Minutes" />
    <CountdownFlipUnit :value="seconds" label="Seconds" />
  </div>
</template>