<template>
  <section class="w-full px-8 py-12 md:py-16 bg-whitexl:px-0">
    <div class="flex flex-col max-w-6xl px-3 mx-auto md:px-0 lg:px-8 xl:px-0 md:flex-row">
      <div class="w-full pr-5 mb-6 space-y-1 md:mb-0 md:space-y-4 md:w-4/12 xl:pr-12">
        <h2
          @click="section = 'prep'"
          class="pb-2 text-5xl font-extrabold cursor-pointer lg:text-6xl"
          :class="{
            'text-black': section == 'prep',
            'text-gray-400 hover:text-gray-900': section != 'prep',
          }"
        >
          Prepare
        </h2>
        <h2
          @click="section = 'download'"
          class="py-2 text-5xl font-extrabold cursor-pointer lg:text-6xl"
          :class="{
            'text-black': section == 'download',
            'text-gray-400 hover:text-gray-900': section != 'download',
          }"
        >
          Download
        </h2>
        <h2
          @click="section = 'delete'"
          class="py-2 text-5xl font-extrabold cursor-pointer lg:text-6xl"
          :class="{
            'text-black': section == 'delete',
            'text-gray-400 hover:text-gray-900': section != 'delete',
          }"
        >
          Delete
        </h2>
      </div>

      <div class="relative w-full mt-6 overflow-hidden md:my-auto md:w-9/12">
        <transition
          enter-active-class="absolute top-0 left-0 w-full h-full transition duration-300 ease-out"
          enter-class="transform translate-y-full opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-300 ease-out"
          leave-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-full opacity-0"
        >
          <div v-show="section == 'prep'" class="w-full space-y-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-12 h-12 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
              />
            </svg>
            <h3 class="text-2xl font-bold leading-7">Create a local and/or cloud folder</h3>
            <p class="text-base font-normal leading-none text-gray-700 md:text-lg">
              Before you delete any files, make sure you have a local and/or cloud folder to back up
              your data. We'll create a folder for each Facebook entity.
            </p>
            <!-- <a
              href="#_"
              class="flex items-center justify-start mt-8 text-lg font-medium tracking-wide text-gray-900 underline uppercase"
              >Learn More
              <svg
                class="w-5 h-5 ml-1 transform -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path></svg
            ></a> -->
          </div>
        </transition>

        <transition
          enter-active-class="absolute top-0 left-0 w-full h-full transition duration-300 ease-out"
          enter-class="transform translate-y-full opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-300 ease-out"
          leave-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-full opacity-0"
        >
          <div class="space-y-6" v-show="section == 'download'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-12 h-12 text-blue-500 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <h3 class="text-2xl font-bold leading-7">Download your data</h3>
            <p class="text-base font-normal leading-none text-gray-700 md:text-lg">
              Next, you'll want to go into each account and make sure you've downloaded all the data
              you want to keep (pictures, messages, contacts, etc.).
            </p>
            <!-- <a
              href="#_"
              class="flex items-center justify-start mt-8 text-lg font-medium tracking-wide text-gray-900 underline uppercase"
              >Learn More
              <svg
                class="w-5 h-5 ml-1 transform -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path></svg
            ></a> -->
          </div>
        </transition>

        <transition
          enter-active-class="absolute top-0 left-0 w-full h-full transition duration-300 ease-out"
          enter-class="transform translate-y-full opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-300 ease-out"
          leave-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-full opacity-0"
        >
          <div class="space-y-6" v-show="section == 'delete'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-12 h-12 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>

            <h3 class="text-2xl font-bold leading-7">Delete your data</h3>
            <p class="text-base font-normal leading-none text-gray-700 md:text-lg">
              Say goodbye to your Facebook data. Delete all your data from Facebook servers and send
              them a nice 'You're Welcome' email for profiting off you.
            </p>
            <!-- <a
              href="#_"
              class="flex items-center justify-start mt-8 text-lg font-medium tracking-wide text-gray-900 underline uppercase"
              >Learn More
              <svg
                class="w-5 h-5 ml-1 transform -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path></svg
            ></a> -->
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      section: 'prep',
    }
  },
}
</script>

<style scoped></style>
