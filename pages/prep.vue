<template>
  <div>
    <nuxt-content
      class="px-4 pb-12 mx-auto prose lg:prose-lg xl:prose-xl sm:pb-24"
      :document="article"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('prep').fetch()

    return {
      article,
    }
  },

  head() {
    return {
      title: 'Preparation',
    }
  },
}
</script>

<style scoped></style>
