import { ref } from 'vue';
import axios from 'axios';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((resp) => {
        // console.log(resp.data);
        post.value = resp.data;
      })
      .catch((error) => console.log(error.response));
  };

  return { post, error, load };
};

export default getPost;
