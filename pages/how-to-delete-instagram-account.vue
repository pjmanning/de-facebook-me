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
            >Instagram</span
          >
          <span
            class="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl"
            >How to Delete Instagram Account</span
          >
        </h1>
      </div>
      <nuxt-content
        class="pt-4 pb-12 mx-auto prose lg:prose-lg xl:prose-xl sm:pb-24 sm:pt-8"
        :document="article"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const article = await $content('instagram').fetch()

    return {
      article,
    }
  },

  head() {
    return {
      title: this.article.title,
    }
  },
}
</script>

<style scoped></style>
