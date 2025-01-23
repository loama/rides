<template>
  <div>
    <div id="notch-cover" class="bg-blue-500 w-full fixed top-0 left-0 z-20" />

    <div id="content">
      <NuxtPage />
    </div>

    <ModalsProfileMain />
    <ModalsOverlay />

    <NavigationBar />
  </div>
</template>

<script setup>
import { useStorePosts } from './stores/Posts'
import { useStoreUsers } from './stores/Users'

const storePosts = useStorePosts()
const storeUsers = useStoreUsers()

onMounted(() => {
  storeUsers.getUsers()
})

const router = useRouter()

const openProfileModal = () => {
  router.push({ query: { modal: 'profile' } })
}
</script>

<style lang="sass" scoped>
#notch-cover
  height: 0
  height: env(safe-area-inset-top)

#content
  padding-bottom: 48px
  padding-bottom: calc(env(safe-area-inset-bottom) + 48px)
  padding-top: 0
  padding-top: env(safe-area-inset-top)
</style>
