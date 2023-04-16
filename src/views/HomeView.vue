<template>
  <secrion id="homepage">
    <div class="container">
      <h1>Home</h1>
      <div class="grid grid-cols-4 gap-4">
        <PostList :posts="posts" />
      </div>
    </div>
  </secrion>
</template>

<script>
import getPosts from '../composables/getPosts';

import PostList from '../components/PostList.vue';

export default {
  components: { PostList },

  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style></style>
