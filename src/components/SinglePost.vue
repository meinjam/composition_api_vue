<template>
  <div class="rounded py-4 px-5 bg-pink-100 cursor-pointer">
    <router-link :to="{ name: 'post-details', params: { id: post.id } }">
      <h3 class="text-xl underline mb-4">{{ post.title }}</h3>
      <p>{{ desc }}</p>
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['post'],

  setup(props) {
    const desc = computed(() => {
      return props.post.body.substring(0, 80) + ' ...';
    });

    return { desc };
  },
};
</script>

<style></style>
