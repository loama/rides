import { defineStore } from 'pinia'
import supabase from '@/supabase'

export const useStorePosts = defineStore('Posts', () => {
  const posts = ref(['a', 'b', 'c'])

  return { posts }
})
