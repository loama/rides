<template>
  <div>
    <div>
      <!-- Product grid -->
      <section
        aria-labelledby="products-heading"
        class="mx-auto max-w-2xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:max-w-7xl lg:px-8"
      >
        <h2 id="products-heading" class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a v-for="product in products" :key="product.id" :href="product.href" class="group">
            <img
              :src="product.imageSrc"
              class="aspect-square w-full rounded-lg bg-gray-200 object-contain group-hover:opacity-75 xl:aspect-7/8"
            />
            <h3 class="mt-4 text-sm text-gray-700">{{ product.category }}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">{{ product.model }}</p>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    category: 'Sports',
    model: 'Porsche 911',
    imageSrc: '/images/discover/cars/porsche-911.png'
  },
  {
    id: 2,
    category: 'Off Road',
    model: 'Jeep Wrangler',
    imageSrc: '/images/discover/cars/jeep-wrangler.png'
  },
  {
    id: 3,
    category: 'Electric',
    model: 'Tesla Model Y',
    imageSrc: '/images/discover/cars/tesla-y.png'
  }
]
</script>
