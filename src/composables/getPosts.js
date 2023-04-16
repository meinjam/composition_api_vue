import { ref } from 'vue';
import axios from 'axios';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => {
        // console.log(resp.data);
        posts.value = resp.data;
      })
      .catch((error) => console.log(error.response));
  };

  return { posts, error, load };
};

export default getPosts;
