<template>
  <div class="">
    <button @click="login">Login</button>

    <div v-if="user">
      <p>{{ user.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { useStoreAuth } from '@/stores/Auth'

const storeAuth = useStoreAuth()

const user = computed(() => storeAuth.user)

const login = () => {
  storeAuth.setUser({ name: 'John Doe' })
}
</script>
