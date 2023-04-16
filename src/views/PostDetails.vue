<template>
  <section id="post_details">
    <div class="container">
      <div v-if="post">
        <h3 class="text-xl underline mb-4">{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import getPost from '../composables/getPost';

export default {
  props: ['id'],

  setup(props) {
    console.log(props.id);
    const { post, error, load } = getPost(props.id);

    load();

    return { post, error };
  },
};
</script>

<style></style>
