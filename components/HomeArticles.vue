<template>
  <div>
    <!-- Header -->
    <div class="bg-white">
      <div class="px-4 pt-16 mx-auto max-w-7xl sm:pt-24 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Why #delete<span class="text-blue-600">facebook</span>?
        </h2>
        <p class="mt-5 text-base text-gray-500 sm:text-xl">
          Click on the articles below to learn more about why you should delete facebook.
        </p>
      </div>
    </div>

    <!-- Articles -->
    <section class="overflow-x-scroll scrollbars-hidden">
      <div class="container p-5 pb-12 mx-auto md:pt-16 md:pb-20 md:pr-20 md:pl-8 max-w-7xl">
        <div v-if="articles.length > 0" class="flex mx-auto flex-nowrap">
          <a
            v-for="article in articles"
            :key="article.url"
            :href="article.url"
            target="_blank"
            class="md:-ml-16 md:first:ml-0"
          >
            <div class="flex w-full">
              <div
                class="relative flex flex-col items-start m-1 transition duration-200 ease-in-out transform bg-white shadow-2xl w-80 rounded-xl md:w-96 md:hover:-translate-x-8 md:hover:-translate-y-4"
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
      </div>
    </section>
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

  //   async fetch() {
  //     this.articles = await fetch('/articles.json').then((res) => {
  //       return res.json()
  //     })
  //   },
}
</script>

<style scoped></style>
