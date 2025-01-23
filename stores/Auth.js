import { defineStore } from 'pinia'

export const useStoreAuth = defineStore('Auth', () => {
  const user = ref(null)

  const setUser = async (data) => {
    user.value = data
  }

  return { user, setUser }
})
