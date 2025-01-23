<template>
  <div
    class="bg-white fixed ease-in-out left-0 h-screen w-screen z-50 rounded-t-lg transform transition-all shadow-md"
    id="profile-modal"
    :class="open"
  >
    <ModalsProfileAuth v-if="!user" />
    <ModalsProfileAccount v-else />
  </div>
</template>

<script setup>
import { useStoreAuth } from '../../../stores/Auth'

const storeAuth = useStoreAuth()
const route = useRoute()

const open = computed(() => {
  const openClass = 'translate-y-0 duration-500'
  const closedClass = 'translate-y-full duration-300'

  if (route.query.modal === 'profile') {
    return openClass
  }

  return closedClass
})

const user = computed(() => {
  return storeAuth.user
})
</script>

<style lang="sass" scoped>
#profile-modal
  top: 40px
  top: calc(40px + env(safe-area-inset-top))
</style>
