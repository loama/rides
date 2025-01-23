<template>
  <div>
    <div class="bg-blue-500 w-full fixed text-xl border-zinc-200 py-2.5 px-4 text-white z-10">Discover</div>

    <div class="bg-blue-500 pt-10 pb-4 pl-4">
      <input
        id="search"
        type="text"
        class="mt-4 w-full border border-zinc-300 text-white py-2 h-12 text-sm px-4 rounded-3xl outline-none focus:border-blue-500 transition-all duration-300"
        placeholder="Find by brand, model or tags..."
      />

      <div class="mt-5 mb-2 text-white">Popular Brands</div>

      <div class="flex gap-2 overflow-x-scroll mb-2">
        <div
          v-for="brand in brands"
          :key="brand.id"
          class="border border-zinc-200 rounded-sm flex-shrink-0 w-20 h-24"
          style="background: rgba(255, 255, 255, 0.2)"
        >
          <img
            :src="'/images/discover/brands/' + brand.name + '.png'"
            class="object-contain mx-2 mt-1 h-16 mx-auto"
            :class="{
              'w-10': brand.name === 'Tesla' || brand.name === 'BMW',
              'w-16': brand.name !== 'Tesla' && brand.name !== 'BMW'
            }"
          />
          <div class="text-sm text-center">{{ brand.name }}</div>
        </div>
      </div>
    </div>

    <CarTile />
  </div>
</template>

<script setup>
const brands = ref([
  {
    id: 1,
    name: 'Ferrari'
  },
  {
    id: 2,
    name: 'Ford'
  },
  {
    id: 3,
    name: 'Chevrolet'
  },
  {
    id: 4,
    name: 'Bentley'
  },
  {
    id: 5,
    name: 'Audi'
  },
  {
    id: 6,
    name: 'BMW'
  },
  {
    id: 7,
    name: 'Tesla'
  }
])
</script>

<style lang="sass" scoped>
#search
  background: rgba(0, 0, 0, 0.2)

  &::placeholder
    color: #FFF
    opacity: 1
</style>
