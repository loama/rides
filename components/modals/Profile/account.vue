<template>
  <header class="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10 bg-white">
    <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex flex-1 items-center gap-x-2">
        <img class="h-8 w-auto" src="/logo.png" alt="Your Company" />
        <div class="font-bold">Rides</div>
      </div>
      <nav class="hidden md:flex md:gap-x-11 md:text-sm/6 md:font-semibold md:text-gray-700">
        <a v-for="(item, itemIdx) in navigation" :key="itemIdx" :href="item.href">{{ item.name }}</a>
      </nav>
      <div class="flex flex-1 items-center justify-end gap-x-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500" v-on:click="closeModal()">
          <span class="sr-only">View notifications</span>
          <XMarkIcon class="size-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  </header>

  <div class="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8 h-full overflow-y-scroll pb-24">
    <main class="px-4 py-8 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
      <div class="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
        <div>
          <div class="pb-6 sm:flex">
            <img
              class="size-16 rounded-full bg-gray-800 mx-auto"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>

          <h2 class="text-base/7 font-semibold text-gray-900">Profile</h2>
          <p class="mt-1 text-sm/6 text-gray-500">
            This information will be displayed publicly so be careful what you share.
          </p>

          <dl class="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
            <div class="py-6 sm:flex">
              <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Full name</dt>
              <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div class="text-gray-900">Tom Cook</div>
                <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>
              </dd>
            </div>
            <div class="py-6 sm:flex">
              <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Email address</dt>
              <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div class="text-gray-900">tom.cook@example.com</div>
                <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>
              </dd>
            </div>
            <div class="py-6 sm:flex">
              <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Description</dt>
              <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div class="text-gray-900">Fan of muscle cars</div>
                <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Main Cars</h2>
          <p class="mt-1 text-sm/6 text-gray-500">The cars you love the most.</p>

          <ul role="list" class="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
            <li class="flex justify-between gap-x-6 py-6">
              <div class="font-medium text-gray-900">Jaguar F-Type</div>
              <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>
            </li>
            <li class="flex justify-between gap-x-6 py-6">
              <div class="font-medium text-gray-900">Porsche 911</div>
              <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>
            </li>
          </ul>

          <div class="flex border-t border-gray-100 pt-6">
            <button type="button" class="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
              <span aria-hidden="true">+</span> Add another
            </button>
          </div>
        </div>

        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Integrations</h2>
          <p class="mt-1 text-sm/6 text-gray-500">Connect applications to your account.</p>

          <ul role="list" class="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
            <li class="flex justify-between gap-x-6 py-6">
              <div class="font-medium text-gray-900">Google Maps</div>
              <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>
            </li>
          </ul>

          <div class="flex border-t border-gray-100 pt-6">
            <button type="button" class="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
              <span aria-hidden="true">+</span> Add another application
            </button>
          </div>
        </div>

        <div>
          <h2 class="text-base/7 font-semibold text-gray-900">Language and dates</h2>
          <p class="mt-1 text-sm/6 text-gray-500">
            Choose what language and date format to use throughout your account.
          </p>

          <dl class="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
            <div class="py-6 sm:flex">
              <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Language</dt>
              <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div class="text-gray-900">English</div>
                <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>
              </dd>
            </div>
            <div class="py-6 sm:flex">
              <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Date format</dt>
              <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div class="text-gray-900">DD-MM-YYYY</div>
                <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Update</button>
              </dd>
            </div>
            <SwitchGroup as="div" class="flex pt-6">
              <SwitchLabel as="dt" class="flex-none pr-6 font-medium text-gray-900 sm:w-64" passive
                >Automatic timezone</SwitchLabel
              >
              <dd class="flex flex-auto items-center justify-end">
                <Switch
                  v-model="automaticTimezoneEnabled"
                  :class="[
                    automaticTimezoneEnabled ? 'bg-indigo-600' : 'bg-gray-200',
                    'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  ]"
                >
                  <span
                    aria-hidden="true"
                    :class="[
                      automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0',
                      'size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out'
                    ]"
                  />
                </Switch>
              </dd>
            </SwitchGroup>
          </dl>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const automaticTimezoneEnabled = ref(true)

const router = useRouter()
const closeModal = () => {
  router.push({
    query: {}
  })
}
</script>
