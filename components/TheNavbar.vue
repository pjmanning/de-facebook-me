<template>
  <header>
    <section class="relative block w-full py-6 leading-10 text-center text-indigo-900 bg-black">
      <div class="w-full px-6 mx-auto leading-10 text-center lg:px-8 max-w-7xl">
        <div class="box-border flex flex-wrap items-center justify-between -mx-4 text-indigo-900">
          <div
            class="relative z-10 flex items-center w-auto px-4 leading-10 lg:flex-grow-0 lg:flex-shrink-0 lg:text-left"
          >
            <nuxt-link
              to="/"
              class="flex items-center text-2xl no-underline bg-transparent cursor-pointer focus:no-underline"
            >
              <img src="~/assets/images/defacebookme.svg" alt="defacebookme" class="w-16 h-16" />
              <span class="sr-only">DeFacebookMe</span>
            </nuxt-link>
          </div>

          <div
            class="absolute left-0 z-0 justify-center hidden w-full px-4 -ml-5 space-x-4 font-medium leading-10 md:flex lg:-ml-0 lg:space-x-6 md:flex-grow-0 md:text-left lg:text-center"
          >
            <nuxt-link
              to="/prep"
              class="relative inline-block px-0.5 text-lg font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              Prep
            </nuxt-link>
            <nuxt-link
              to="/facebook"
              class="relative inline-block px-0.5 text-lg font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              Facebook
            </nuxt-link>
            <nuxt-link
              to="/instagram"
              class="relative inline-block px-0.5 text-lg font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              Instagram
            </nuxt-link>
            <nuxt-link
              to="/whatsapp"
              class="relative inline-block px-0.5 text-lg font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              WhatsApp
            </nuxt-link>
          </div>

          <div class="items-center hidden space-x-4 text-lg md:flex">
            <a
              href="https://twitter.com/intent/tweet?text=Done%20with%20Facebook?%20Here's%20a%20step-by-step%20guide%20to%20rid%20Facebook%20from%20your%20life.&via=pj_manning&hashtags=facebook,instagram,whatsapp,deletefacebook,deleteinstagram,deletewhatsapp,defacebookme"
              target="_blank"
              class="flex items-center px-6 py-4 font-medium tracking-wide text-center text-gray-200 bg-gray-800 rounded-md hover:text-gray-100 hover:bg-gray-700 focus:outline-none md:mx-0 md:w-auto"
            >
              Share
              <svg
                class="ml-2 fill-current"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                ></path>
              </svg>
            </a>

            <a
              href="https://github.com/pjmanning/de-facebook-me"
              target="_blank"
              class="p-4 tracking-wide text-center text-gray-200 bg-gray-800 rounded-md focus:bg-gray-900 hover:text-gray-100 hover:bg-gray-700 focus:outline-none md:mx-0 md:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>

          <!-- <div
            class="relative items-center hidden px-4 mt-2 space-x-5 font-medium leading-10 md:flex md:flex-grow-0 md:flex-shrink-0 md:mt-0 md:text-right lg:flex-grow-0 lg:flex-shrink-0"
          >
            <a
              href="#_"
              x-data="{ hover: false }"
              @mouseenter="hover = true"
              @mouseleave="hover = false"
              class="relative inline-block px-0.5 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
            >
              <span class="block">Login</span>
              <span class="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                <span
                  x-show="!hover"
                  class="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-black"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="-translate-x-full"
                  x-transition:enter-end="translate-x-0"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="translate-x-0"
                  x-transition:leave-end="translate-x-full"
                ></span>
                <svg
                  class="w-auto h-full text-green-400 fill-current"
                  viewBox="0 0 84 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <g transform="translate(-8)" fill-rule="nonzero">
                      <path
                        d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
            <a
              href="#_"
              class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-green-400 border border-green-400 rounded-md shadow-sm focus:ring-offset-gray-900 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            >
              Sign Up
            </a>
          </div> -->

          <!-- Mobile Button -->
          <div class="flex items-center justify-center h-full mr-5 text-white md:hidden">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-blue-500;
}
</style>
