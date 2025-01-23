<template>
  <div>
    <div class="bg-red-500">a</div>
    <div class="bg-blue-500">{{ storePosts.posts }}</div>
    <div class="bg-green-500">{{ storeUsers.users }}</div>

    <ModalsProfileMain />
    <ModalsOverlay />

    <button @click="openProfileModal">Open Profile Modal</button>
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
