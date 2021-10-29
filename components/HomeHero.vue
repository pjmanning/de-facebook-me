<template>
  <div>
    <section
      class="overflow-hidden md:min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900"
    >
      <nav class="border-b border-gray-800">
        <div class="container flex items-center justify-between p-6 mx-auto">
          <div class="relative z-10 flex items-center w-auto px-0 leading-10 md:px-2">
            <nuxt-link
              to="/"
              class="flex items-center text-2xl no-underline bg-transparent cursor-pointer focus:no-underline"
            >
              <img src="~/assets/images/defacebookme.svg" alt="defacebookme" class="w-16 h-16" />
              <span class="sr-only">DeFacebookMe</span>
            </nuxt-link>
          </div>

          <div class="flex items-center space-x-4 text-lg">
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
        </div>
      </nav>

      <div class="container px-10 pt-12 mx-auto md:py-16 lg:px-6">
        <div class="items-center justify-between mx-auto md:max-w-3xl xl:max-w-4xl md:flex">
          <h1
            class="max-w-sm text-4xl font-extrabold text-white md:leading-tight md:text-5xl lg:text-7xl md:pr-24 lg:pr-0"
          >
            De <br class="hidden md:block" />Facebook <br class="hidden md:block" />Yourself
          </h1>

          <div class="mt-4 md:mt-0">
            <p class="text-xl text-blue-200 md:max-w-md lg:text-2xl">
              A step-by-step guide to remove your data from Facebook, Instagram, and WhatsApp
            </p>
            <button
              v-scroll-to="'#steps'"
              class="w-full px-8 py-5 mt-6 text-xl font-medium leading-5 text-center text-white bg-blue-600 rounded-md sm:w-auto hover:bg-blue-700 focus:outline-none md:mx-0 md:w-auto"
            >
              De-F******k-Me
            </button>
          </div>
        </div>

        <div class="flex items-center justify-center max-w-3xl mx-auto mt-4 xl:max-w-4xl">
          <lottie-animation
            ref="anim"
            :animationData="require('@/assets/animations/facebook-3d-button.json')"
            :loop="true"
          />

          <lottie-animation
            ref="anim"
            :animationData="require('@/assets/animations/whatsapp.json')"
            :loop="true"
          />

          <lottie-animation
            ref="anim"
            :animationData="require('@/assets/animations/instagram-button-flat-3d.json')"
            :loop="true"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LottieAnimation from 'lottie-web-vue' // import lottie-web-vue

export default {
  components: {
    LottieAnimation,
  },
}
</script>

<style scoped></style>
