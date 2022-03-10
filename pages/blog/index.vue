<template>
  <div class="h-screen space-y-10 grid place-content-center rounded round-xl bg-gray-300">
    <h1 class="px-1 capitalize text-3xl font-extrabold">The nuxt project</h1>
    <div
      class="capitalize flex flex-col px-3"
      v-for="article in articles"
      :key="article.id"
    >
      <nuxt-link
        class="hover:underline font-bold text-lg"
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      >
        {{ article.title }}
      </nuxt-link>
      <p class="font-light">
        {{ article.description }}
      </p>
      <p class="italic font-extralight">
        {{ formatDate(article.createdAt) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("blog").fetch();

    return { articles };
  },
  methods: {
    formatDate(date) {
      // format the date to be displayed in a readable format
      return new Date(date).toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>
