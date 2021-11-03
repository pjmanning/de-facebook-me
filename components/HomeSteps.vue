<template>
  <div id="steps">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4 max-w-7xl">
          <h2
            class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            Select a service...
          </h2>
          <p class="mt-5 text-xl text-gray-500">
            Within each Facebook company, you can choose whether to deactivate/delete/remove
            specific data.
          </p>
        </div>

        <ul
          role="list"
          class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
        >
          <li class="px-6 py-10 text-center bg-gray-100 rounded-lg xl:px-10 xl:text-left">
            <nuxt-link to="/facebook" class="space-y-6 xl:space-y-10 group-focus:border-blue-500">
              <img
                class="w-40 h-40 mx-auto bg-white rounded-full xl:w-56 xl:h-56"
                src="~/assets/images/facebook.png"
                alt="facebook"
              />
            </nuxt-link>
          </li>
          <li class="px-6 py-10 text-center bg-gray-100 rounded-lg xl:px-10 xl:text-left">
            <nuxt-link to="/instagram" class="space-y-6 xl:space-y-10 group-focus:border-blue-500">
              <div class="flex items-center w-40 h-40 mx-auto rounded-full xl:w-56 xl:h-56">
                <img class="w-40 h-40 mx-auto" src="~/assets/images/instagram.png" alt="" />
              </div>
            </nuxt-link>
          </li>
          <li class="px-6 py-10 text-center bg-gray-100 rounded-lg xl:px-10 xl:text-left">
            <nuxt-link to="/whatsapp" class="space-y-6 xl:space-y-10 group-focus:border-blue-500">
              <img
                class="w-40 h-40 mx-auto bg-white rounded-full xl:w-56 xl:h-56"
                src="~/assets/images/whatsapp.png"
                alt=""
              />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
