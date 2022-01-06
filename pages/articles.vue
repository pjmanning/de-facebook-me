<template>
  <div class="relative py-16 overflow-hidden bg-white">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div class="relative h-full mx-auto text-lg max-w-prose" aria-hidden="true">
        <svg
          class="absolute transform translate-x-32 top-12 left-full"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
        <svg
          class="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg
          class="absolute transform translate-x-32 bottom-12 left-full"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
        </svg>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="mx-auto text-lg max-w-prose">
        <h1>
          <span
            class="block text-base font-semibold tracking-wide text-center text-blue-600 uppercase"
            >Articles</span
          >
          <span
            class="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl"
            >Sources on Why You Should Remove Your Data from Facebook</span
          >
        </h1>
      </div>

      <!-- articles  -->
      <section id="articles">
        <div
          v-if="articles.length > 0"
          class="grid gap-5 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl"
        >
          <a v-for="article in articles" :key="article.url" :href="article.url" target="_blank">
            <div>
              <div
                class="transition duration-200 ease-in-out transform bg-white shadow-2xl rounded-xl md:hover:-translate-y-2"
              >
                <img
                  class="object-cover object-center w-full bg-gray-400 rounded-t-xl lg:h-48 h-36"
                  :src="article.image"
                  :alt="article.title"
                />
                <div class="h-56 px-6 pb-8">
                  <h4 class="mt-4 text-xl font-semibold line-clamp-2">
                    <span class="">{{ article.title }} </span>
                  </h4>
                  <p class="mt-4 text-base font-normal text-gray-400 leading-relax line-clamp-5">
                    {{ article.description }}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import articles from 'static/articles.json'

export default {
  data() {
    return {
      articles,
    }
  },

  head() {
    return {
      title: 'Sources on Why You Should Remove Your Data from Facebook',
    }
  },
}
</script>

<style scoped></style>
