<template>
  <div
    class="bg-white fixed ease-in-out top-10 left-0 h-screen w-screen z-50 rounded-t-lg transform transition-all duration-300 shadow-md"
    :class="open"
  >
    <ModalsProfileAuth />
    <ModalsProfileLoggedIn />
  </div>
</template>

<script setup>
const route = useRoute()

const open = computed(() => {
  const openClass = 'translate-y-0'
  const closedClass = 'translate-y-full'

  if (route.query.modal === 'profile') {
    return openClass
  }

  return closedClass
})
</script>
