<template>
  <section class="py-10 bg-black">
    <div class="px-10 mx-auto max-w-7xl">
      <div class="flex flex-col items-center md:flex-row md:justify-between">
        <nuxt-link to="/" class="flex items-center justify-center w-10 h-10 mr-3 mb-7">
          <img src="~/assets/images/defacebookme.svg" alt="defacebookme" />
        </nuxt-link>

        <div class="flex flex-row justify-center mb-4 -ml-4 -mr-4">
          <a
            href="https://twitter.com/pj_manning"
            target="_blank"
            class="p-4 text-gray-700 hover:text-gray-400"
          >
            <svg class="fill-current" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/pjmanning/de-facebook-me"
            target="_blank"
            class="p-4 text-gray-700 hover:text-gray-400"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col justify-between text-center md:flex-row">
        <p class="order-last text-sm leading-tight text-gray-500 md:order-first">
          Made by
          <a
            href="https://pjmanning.dev"
            target="_blank"
            class="font-medium text-white hover:text-gray-200"
            >PJManning</a
          >
          in Bali, Indonesia 🇮🇩
        </p>

        <div
          class="flex items-center order-2 mx-auto mb-3 text-sm leading-tight text-gray-500 md:order-none"
        >
          <span>Built with</span>
          <a href="https://vuejs.org" target="_blank"
            ><img src="~/assets/images/vuejs.svg" alt="vuejs" class="w-4 h-4 mx-1"
          /></a>
          <span>because...well...</span>
          <a href="https://reactjs.org/docs/how-to-contribute.html" target="_blank"
            ><img src="~/assets/images/react.svg" alt="reactjs" class="w-6 h-6"
          /></a>
        </div>

        <ul class="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm">
          <li>
            <nuxt-link to="/prep" class="px-2 text-gray-500 hover:text-white">Prep</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/how-to-delete-facebook-account"
              class="px-2 text-gray-500 hover:text-white"
              >Facebook</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/how-to-delete-instagram-account"
              class="px-2 text-gray-500 hover:text-white"
              >Instagram</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/how-to-delete-whatsapp-account"
              class="px-2 text-gray-500 hover:text-white"
              >WhatsApp</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped></style>
