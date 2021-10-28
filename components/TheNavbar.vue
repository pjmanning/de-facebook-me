<template>
  <header>
    <div class="relative bg-white">
      <div
        class="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <nuxt-link to="/">
            <span class="sr-only">Workflow</span>
            <img
              class="w-auto h-8 sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </nuxt-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden space-x-10 md:flex">
          <nuxt-link to="/facebook" class="text-base font-medium text-gray-500 hover:text-gray-900">
            Facebook
          </nuxt-link>

          <nuxt-link
            to="/instagram"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Instagram
          </nuxt-link>

          <nuxt-link to="/whatsapp" class="text-base font-medium text-gray-500 hover:text-gray-900">
            WhatsApp
          </nuxt-link>
        </nav>
        <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <a
            href="#"
            class="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
          >
            Github
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
          >
            Share
          </a>
        </div>
      </div>

      <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <div
        class="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
      >
        <div
          class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="w-auto h-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid grid-cols-1 gap-7">
                <nuxt-link
                  to="facebook"
                  class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                >
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-600 rounded-md"
                  >
                    <!-- Heroicon name: outline/inbox -->
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">Facebook</div>
                </nuxt-link>

                <nuxt-link
                  to="/instagram"
                  class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                >
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-600 rounded-md"
                  >
                    <!-- Heroicon name: outline/annotation -->
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">Instagram</div>
                </nuxt-link>

                <nuxt-link
                  to="/whatsapp"
                  class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                >
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-600 rounded-md"
                  >
                    <!-- Heroicon name: outline/chat-alt-2 -->
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">WhatsApp</div>
                </nuxt-link>
              </nav>
            </div>
          </div>
          <div class="px-5 py-6">
            <div class="mt-6">
              <a
                href="#"
                class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
              >
                Share
              </a>
              <p class="mt-6 text-base font-medium text-center text-gray-500">
                Want to contribute?
                <a
                  href="https://github.com/pjmanning/de-facebook-me"
                  target="_blank"
                  class="text-gray-900"
                >
                  Github
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped></style>
