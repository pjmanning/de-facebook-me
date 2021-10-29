<template>
  <div>
    <!-- Header -->
    <div class="bg-white">
      <div class="px-4 pt-16 mx-auto max-w-7xl sm:pt-24 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Why #delete<span class="text-blue-600">facebook</span>?
        </h2>
        <p class="mt-5 text-xl text-gray-500">
          Click on the articles below to read more about why you should delete facebook.
        </p>
      </div>
    </div>

    <!-- Articles -->
    <section class="md:overflow-x-scroll">
      <div class="container p-5 pb-12 mx-auto md:pt-16 md:pb-20 md:pr-20 md:pl-8 max-w-7xl">
        <div class="flex flex-wrap mx-auto md:flex-nowrap">
          <a
            v-for="article in links"
            :key="article"
            :href="article.url"
            target="_blank"
            class="md:-ml-16 md:first:ml-0"
          >
            <div class="flex w-full">
              <div
                class="relative flex flex-col items-start m-1 transition duration-200 ease-in-out transform bg-white shadow-2xl rounded-xl md:w-96 md:hover:-translate-x-8 md:hover:-translate-y-4"
              >
                <img
                  class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  :src="article.image"
                  :alt="article.title"
                />
                <div class="px-6 pb-8 md:h-56">
                  <h4 class="mt-4 text-2xl font-semibold line-clamp-2">
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
export default {
  data() {
    return {
      // https://developers.facebook.com/tools/debug/
      links: [
        {
          title: 'The Facebook Files',
          image: 'https://images.wsj.net/im-402599/social',
          url: 'https://www.wsj.com/articles/the-facebook-files-11631713039',
          description:
            'Facebook knows, in acute detail, that its platforms are riddled with flaws but hasn’t fixed them. That’s a key finding of a Journal series that launched this week, based on an array of internal company documents. Read all the stories here.',
        },
        {
          title: 'Facebook says Instagram is not ‘toxic for teens,’ despite damning WSJ report',
          image:
            'https://cdn.vox-cdn.com/thumbor/AhEDh8cXLzPzD8FmGa8EbJmzzbs=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19228500/acastro_190919_1777_instagram_0001.0.jpg',
          url:
            'https://www.theverge.com/2021/9/26/22695629/facebook-says-instagram-is-not-toxic-for-teens-despite-damning-wsj-report',
          description: 'The PR push comes days ahead of a Senate hearing',
        },
        {
          title: 'Something Weird Is Happening on Facebook',
          image:
            'https://i0.wp.com/www.politicalorphans.com/wp-content/uploads/2021/09/sample4.png?fit=710%2C271&ssl=1',
          url: 'https://www.politicalorphans.com/something-weird-is-happening-on-facebook/',
          description:
            'Someone appears to be pouring enormous energy and effort into a data collection project aimed at building personality profiles from social media interaction…again',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
