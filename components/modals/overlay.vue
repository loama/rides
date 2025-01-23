<template>
  <div
    class="bg-black fixed top-0 left-0 h-screen w-screen z-40 transition-all duration-200 ease-in-out"
    :class="{
      'opacity-50 pointer-events-auto': open,
      'opacity-0 pointer-events-none': !open
    }"
    v-on:click="close"
  ></div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const open = computed(() => {
  if (route.query.modal) {
    return true
  }

  return false
})

const close = () => {
  router.push({ query: { modal: null } })
}
</script>
