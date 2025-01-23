<template>
  <div class="bg-white w-full fixed bottom-0 left-0 z-10 border-t border-zinc-200 fixed" id="navigation-bar">
    <div class="flex justify-between items-center grid grid-cols-4 h-full">
      <NuxtLink to="/" class="nav-icon">
        <img src="/images/nav/inactive/home.svg" alt="Home" :class="{ 'opacity-0': activePage === 'home' }" />
        <img src="/images/nav/active/home.svg" alt="Home" :class="{ 'opacity-0': activePage !== 'home' }" />
      </NuxtLink>

      <NuxtLink to="/discover" class="nav-icon">
        <img
          src="/images/nav/inactive/discover.svg"
          alt="Discover"
          :class="{ 'opacity-0': activePage === 'discover' }"
        />
        <img src="/images/nav/active/discover.svg" alt="Discover" :class="{ 'opacity-0': activePage !== 'discover' }" />
      </NuxtLink>

      <NuxtLink to="/messages" class="nav-icon">
        <img
          src="/images/nav/inactive/message.svg"
          alt="Messages"
          :class="{ 'opacity-0': activePage === 'messages' }"
        />
        <img src="/images/nav/active/message.svg" alt="Messages" :class="{ 'opacity-0': activePage !== 'messages' }" />
      </NuxtLink>

      <div class="nav-icon" @click="openProfileModal">
        <img src="/images/nav/inactive/user.svg" alt="Profile" :class="{ 'opacity-0': activePage === 'profile' }" />
        <img src="/images/nav/active/user.svg" alt="Profile" :class="{ 'opacity-0': activePage !== 'profile' }" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const activePage = computed(() => {
  if (route.path === '/') {
    return 'home'
  }

  if (route.path === '/discover') {
    return 'discover'
  }

  if (route.path === '/messages') {
    return 'messages'
  }

  if (route.query.modal === 'profile') {
    return 'profile'
  }

  return 'home'
})

const openProfileModal = () => {
  router.push({
    query: {
      modal: 'profile'
    }
  })
}
</script>

<style lang="sass" scoped>
.nav-icon
  @apply relative h-full flex items-center justify-center

  img
    @apply w-6 h-6 absolute transition duration-300 ease-in-out
    left: 50%
    transform: translateX(-50%)

#navigation-bar
  height: 48px
  height: calc(48px + env(safe-area-inset-bottom))
  padding-bottom: 0
  padding-bottom: env(safe-area-inset-bottom)
</style>
