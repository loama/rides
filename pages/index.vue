<template>
  <div>
    <div class="bg-blue-500 w-full fixed text-xl border-zinc-200 py-2.5 px-4 text-white z-10">Home</div>

    <div class="pt-12">
      <div
        v-for="post in posts"
        :key="post.id"
        class="border-t border-zinc-200 px-2 py-3 flex gap-4 border-t border-zinc-200 w-full"
      >
        <div class="flex gap-4">
          <img :src="post.image" class="flex-none border border-zinc-300 h-12 w-12 object-cover rounded-full mt-2" />
          <div class="flex-grow">
            <div class="flex flex-col text-left">
              <div class="font-semibold text-sm mt-2">{{ post.title }}</div>
              <div class="text-sm text-zinc-500">{{ post.content }}</div>
            </div>

            <div class="flex gap-4 mt-4">
              <div class="flex gap-2">
                <img src="/images/post/thumbs.svg" class="w-4 h-4" />
                <div class="text-sm text-zinc-500 -mt-0.5">{{ post.likes }}</div>
              </div>
              <div class="flex gap-2">
                <img src="/images/post/comment.svg" class="w-4 h-4" />
                <div class="text-sm text-zinc-500 -mt-0.5">{{ post.comments }}</div>
              </div>

              <div class="flex gap-2">
                <img src="/images/post/repeat.svg" class="w-4 h-4" />
              </div>

              <div class="flex gap-2">
                <img src="/images/post/bookmark.svg" class="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = ref([
  {
    id: 2,
    title: 'Johana Mira',
    content: 'Just got my new Tesla Model S Plaid. This thing is an absolute beast! 0-60 in 1.99s is no joke 🚀',
    likes: 245,
    comments: 42,
    image:
      'https://images.unsplash.com/photo-1737366984875-fb81751f6655?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'John Doe',
    content: 'The new Mustang Dark Horse is everything I hoped for. That V8 sound is pure music to my ears! 🐎',
    likes: 178,
    comments: 23,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 4,
    title: 'Jason JR.',
    content: 'Anyone else think the BMW M4 grille is starting to grow on them? Or am I just losing my mind? 🤔',
    likes: 89,
    comments: 156,
    image:
      'https://plus.unsplash.com/premium_photo-1737392495518-ffa46af1592a?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    title: 'Ray Donovan',
    content: 'Just installed a new cold air intake on my Dodge Challenger. The difference in sound is incredible! 🔧',
    likes: 134,
    comments: 18,
    image:
      'https://plus.unsplash.com/premium_photo-1736782964993-911e37d4657e?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    title: 'Nina Hyn',
    content: 'Track day with the Porsche GT3 RS. Nothing beats the feeling of hitting the perfect apex! 🏎️',
    likes: 312,
    comments: 45,
    image:
      'https://images.unsplash.com/photo-1736829809686-c36b922a26f9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 7,
    title: 'John Doe',
    content: 'The new Corvette Z06 just passed me on the highway. That flat-plane V8 sounds otherworldly! 🏁',
    likes: 267,
    comments: 34,
    image:
      'https://images.unsplash.com/photo-1736894739274-3e85a224f350?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 8,
    title: 'Johana Mira',
    content: 'Finally ceramic coated my Audi RS6 Avant. This wagon looks better than ever! ✨',
    likes: 198,
    comments: 27,
    image:
      'https://images.unsplash.com/photo-1737366984875-fb81751f6655?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 9,
    title: 'Ray Donovan',
    content: 'Who else is excited for the new electric Dodge Charger? The future of muscle cars is here! ⚡',
    likes: 145,
    comments: 89,
    image:
      'https://plus.unsplash.com/premium_photo-1736782964993-911e37d4657e?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 10,
    title: 'Jason JR.',
    content: 'Just spotted the new Ferrari Purosangue in person. Have to admit, it looks much better in real life! 📸',
    likes: 423,
    comments: 67,
    image:
      'https://plus.unsplash.com/premium_photo-1737392495518-ffa46af1592a?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 11,
    title: 'Nina Hyn',
    content: 'Car meet this Saturday at sunset! Bringing my newly wrapped M3. Who else is coming? 🌅',
    likes: 289,
    comments: 94,
    image:
      'https://images.unsplash.com/photo-1736829809686-c36b922a26f9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
])
</script>
