import { defineStore } from 'pinia'
import supabase from '@/supabase'

export const useStoreUsers = defineStore('Users', () => {
  const users = ref([])

  const getUsers = async () => {
    const { data, error } = await supabase.from('users').select('*')
    users.value = data
  }

  return { users, getUsers }
})
