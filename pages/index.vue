<template>
  <div class="h-screen grid place-content-center">
    <h1 class="text-blue-300 font-bold text-6xl capitalize text-center">
      This is the nuxt project
    </h1>
    <p class="text-center font-semibold capitalize bg-blue-500 text-white">
      <nuxt-link
        class="animate-pulse hover:text-green-300 hover:text-2xl hover:transition duration-550 ease-in-out"
        to="blog"
      >
        A blog built on experience
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  /*created() {
    this.$router.push("/blog");
  },*/
};
</script>

<style scoped>
.text-6xl {
  font-size: 3.75rem;
}
</style>
