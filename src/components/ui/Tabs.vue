<script setup>
defineProps({ tabs: Array, active: String })
defineEmits(['change'])
</script>

<template>
  <div class="flex overflow-x-auto rounded-xl bg-blue-700 p-1">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      @click="$emit('change', tab.id)"
      :class="[
        'flex-1 rounded-lg px-3 py-2 text-sm font-semibold text-white transition',
        active === tab.id ? 'bg-blue-900' : 'hover:bg-blue-800'
      ]"
    >
      {{ tab.label }}
    </button>
  </div>
</template>
