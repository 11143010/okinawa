<script setup>
import { computed, ref } from 'vue'
import { itineraryData, famousFoods, famousSpots } from '@/data/itinerary'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import Tabs from '@/components/ui/Tabs.vue'

const activeTab = ref('itinerary')
const activeDay = ref(0)

const tabs = [
  { id: 'itinerary', label: '行程路線' },
  { id: 'lists', label: '美食&景點清單' },
  { id: 'info', label: '自駕提醒' }
]

const currentDay = computed(() => itineraryData[activeDay.value])
const mapUrl = computed(
  () => `https://maps.google.com/maps?q=${currentDay.value.mapQuery}&t=&z=10&ie=UTF8&iwloc=&output=embed`
)

const spotImage = (name) => `https://source.unsplash.com/700x420/?${encodeURIComponent(`okinawa ${name}`)}`
const mapLink = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-sky-100 via-white to-emerald-50">
    <header class="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
      <div class="mx-auto max-w-6xl px-4 py-4">
        <h1 class="text-2xl font-bold text-blue-700">Okinawa 2026 自駕規劃</h1>
        <p class="text-sm text-slate-500">Vue + TailwindCSS + shadcn-vue 風格元件</p>
        <div class="mt-3">
          <Tabs :tabs="tabs" :active="activeTab" @change="activeTab = $event" />
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-6xl p-4">
      <section v-if="activeTab === 'itinerary'" class="grid gap-4 md:grid-cols-3">
        <Card class="p-4">
          <h2 class="mb-3 font-bold text-blue-700">日程</h2>
          <div class="space-y-2">
            <button
              v-for="(day, idx) in itineraryData"
              :key="day.day"
              @click="activeDay = idx"
              class="w-full rounded-xl border p-3 text-left"
              :class="activeDay === idx ? 'border-blue-400 bg-blue-50' : 'border-slate-200 bg-white'"
            >
              <p class="font-semibold">{{ day.day }}</p>
              <p class="text-xs text-slate-500">{{ day.title }}</p>
            </button>
          </div>
        </Card>

        <Card class="p-4 md:col-span-2">
          <h2 class="text-xl font-bold">{{ currentDay.day }}｜{{ currentDay.title }}</h2>
          <p class="mb-4 text-sm text-slate-500">{{ currentDay.desc }}</p>

          <div class="space-y-3">
            <div v-for="spot in currentDay.spots" :key="spot.name" class="rounded-xl border border-blue-100 bg-white p-3">
              <img :src="spotImage(spot.name)" :alt="spot.name" class="mb-2 h-44 w-full rounded-lg object-cover" />
              <div class="mb-1 flex items-center justify-between">
                <h3 class="font-semibold">{{ spot.name }}</h3>
                <span class="rounded bg-sky-100 px-2 py-0.5 text-xs text-sky-700">{{ spot.mapcode }}</span>
              </div>
              <p class="text-sm text-slate-600">{{ spot.note }}</p>
              <p class="mt-1 text-xs text-slate-500">{{ spot.address }}</p>
              <a :href="mapLink(spot.address)" target="_blank" rel="noopener" class="mt-2 inline-block">
                <Button>Google 地址</Button>
              </a>
            </div>
          </div>

          <div class="mt-4 grid gap-2 rounded-xl border border-blue-100 bg-blue-50 p-3 text-sm md:grid-cols-2">
            <p><b>起訖：</b>{{ currentDay.route.start }} → {{ currentDay.route.end }}</p>
            <p><b>里程：</b>{{ currentDay.route.distance }}</p>
            <p><b>車程：</b>{{ currentDay.route.driveTime }}</p>
            <p><b>路線：</b>{{ currentDay.route.expressway }}</p>
            <p class="md:col-span-2"><b>停車提醒：</b>{{ currentDay.route.parkingTip }}</p>
          </div>

          <iframe :src="mapUrl" class="mt-4 h-64 w-full rounded-xl border" />
        </Card>
      </section>

      <section v-else-if="activeTab === 'lists'" class="grid gap-4 md:grid-cols-2">
        <Card class="p-4">
          <h2 class="mb-3 font-bold text-green-700">美食清單</h2>
          <ul class="space-y-2 text-sm">
            <li v-for="food in famousFoods" :key="food" class="rounded-lg border border-green-100 bg-green-50 px-3 py-2">{{ food }}</li>
          </ul>
        </Card>
        <Card class="p-4">
          <h2 class="mb-3 font-bold text-blue-700">景點清單</h2>
          <div class="space-y-2">
            <div v-for="spot in famousSpots" :key="spot" class="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm">{{ spot }}</div>
          </div>
        </Card>
      </section>

      <section v-else>
        <Card class="p-4">
          <h2 class="mb-3 font-bold text-blue-700">自駕注意事項</h2>
          <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>日本右駕左行，轉彎要二次確認。</li>
            <li>那霸市區尖峰時段避免公車專用道。</li>
            <li>高速與熱門景點停車場請避開中午尖峰。</li>
          </ul>
        </Card>
      </section>
    </main>
  </div>
</template>
