<template>
  <div>
    <home-hero />
    <home-why />
    <home-articles />
    <home-how />
    <home-steps />
    <home-links />
  </div>
</template>

<script>
export default {
  layout: 'home',
  head() {
    return {
      title: 'Detach Yourself from Facebook',
    }
  },
}
</script>
