<template>
  <div>
    <div class="bg-white h-12 w-full fixed font-semibold text-xl border-b border-zinc-200 py-2.5 px-4">Chat</div>

    <div class="pt-16">
      <div class="flex justify-between items-center mb-4">
        <input
          type="text"
          class="w-full border border-zinc-200 bg-zinc-100 rounded-md px-2 py-2 mx-4 outline-none focus:border-zinc-500 transition-all duration-300"
          placeholder="Search"
        />
      </div>

      <div v-for="chat in chats" :key="chat.id" class="border-t border-zinc-200 px-2 py-3 flex justify-between gap-4">
        <div class="flex items-center gap-4">
          <img :src="chat.profilePicture" class="border border-zinc-300 h-12 w-12 object-cover rounded-full" />
          <div class="flex flex-col text-left">
            <div class="font-semibold">{{ chat.name }}</div>
            <div class="text-sm text-zinc-500">{{ chat.lastMessage }}</div>
          </div>
        </div>
        <div class="flex flex-col mt-1">
          <div class="text-sm text-zinc-500 whitespace-nowrap">{{ chat.lastMessageAt }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const chats = ref([
  {
    id: 1,
    name: 'Johana Mira',
    lastMessage: 'Hello, how are you?',
    lastMessageAt: '12:00 PM',
    profilePicture:
      'https://images.unsplash.com/photo-1737366984875-fb81751f6655?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'John Doe',
    lastMessage: 'Did you see the new mustang?',
    lastMessageAt: '11:42 PM',
    profilePicture:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Jason JR.',
    lastMessage: 'oh, nevermind',
    lastMessageAt: '11:40 PM',
    profilePicture:
      'https://plus.unsplash.com/premium_photo-1737392495518-ffa46af1592a?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    name: 'Ray Donovan',
    lastMessage: 'Not sure what to do with the battery',
    lastMessageAt: '11:22 PM',
    profilePicture:
      'https://plus.unsplash.com/premium_photo-1736782964993-911e37d4657e?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    name: 'John Doe',
    lastMessage: 'Just fixed my motorcycle, lets go for a ride',
    lastMessageAt: '10:42 PM',
    profilePicture:
      'https://images.unsplash.com/photo-1736894739274-3e85a224f350?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    name: 'Nina Hyn',
    lastMessage: "There's a race happening tomorrow night",
    lastMessageAt: '11:07 AM',
    profilePicture:
      'https://images.unsplash.com/photo-1736829809686-c36b922a26f9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    name: 'John Doe',
    lastMessage: 'how did you fix the roof? looks awesome now',
    lastMessageAt: '9:33 AM',
    profilePicture:
      'https://images.unsplash.com/photo-1736754073585-11dcffe6da63?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
])
</script>
