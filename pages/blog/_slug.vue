<template>
  <div class="grid place-items-center">
    <nuxt-link :to="{ name: 'blog' }" class="sticky capitalize underline"
      >⬅️ to blog</nuxt-link
    >
    <div class="grid gap-2 text-center py-5">
      <p class="text-3xl capitalize font-semibold">{{ article.title }}</p>
      <p class="font-extralight">Date: {{ formatDate(article.createdAt) }}</p>
      <div class="flex items-center flex-col">
        <p class="font-light text-sm py-2">{{ article.author.name }}</p>
        <img
          class="w-[4em] ring ring-4 ring-blue-600 hover:ring-green-500 order-first rounded-full ring-offset-2"
          :src="article.author.img"
          alt="author image"
        />
      </div>
    </div>
    <div class="w-full grid place-items-center">
      <nuxt-content class="font-sans prose px-4" :document="article" />
    </div>
    <div class="w-full flex text-center space-x-2 justify-around pb-5">
      <nuxt-link
        v-if="prev"
        class="bg-gray-200 hover:bg-gray-400 capitalize p-1 rounded-md"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      >
        previous article: {{ prev.title }}
      </nuxt-link>

      <nuxt-link
        v-if="next"
        class="bg-gray-200 hover:bg-gray-400 capitalize p-1 rounded-md"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      >
        next article: {{ next.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();
    const [prev, next] = await $content("blog")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { article, prev, next };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 10;
  justify-self: end;
  padding-right: 1.5em;
  padding-top: 2em;
  text-decoration-line: underline;
  text-underline-offset: 3px;
}
</style>
