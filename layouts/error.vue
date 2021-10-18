<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="-mt-16 space-y-2 text-center">
      <h2 class="text-6xl font-bold">{{ error.statusCode }}</h2>
      <h1 class="text-2xl italic">Error!</h1>
      <p class="">{{ error.message }}</p>
      <!-- <p class="">
                Sorry this company's page may not be public at this time.
            </p> -->
    </div>
    <nuxt-link to="/" class="px-8 py-3 mt-8 font-bold text-white bg-blue-600 rounded-full">
      Go Back to Home
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
