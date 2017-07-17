<template>
    <v-flex xs12 sm6 offset-sm3>
        <post-form-dialog @postAdded="addPost"></post-form-dialog>
        <v-card v-for="post in posts" :key="post.id">
            <v-card-media src="https://dummyimage.com/800x500/dbdbdb/fff" height="250px"></v-card-media>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{post.title}}</h3>
                    <div>{{post.body}}</div>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn  block class="indigo white--text" :to="{path: 'posts/'+ post.id}">Explore</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
  import Vue from 'vue'
  const postDialogForm = Vue.component('post-form-dialog', require('../components/modals/PostForm.vue'));
  export default {
    name: 'Posts',
    components: {
      postDialogForm
    },
    data () {
      return {
        posts: {},
      }
    },
    created: function () {
      this.getPosts();
    },
    methods: {
      getPosts() {
        axios.get(baseUrl + '/posts')
          .then(response => this.posts = response.data)
          .catch(function (error) {
            console.log(error);
          });
      },
      addPost(data) {
        this.posts.unshift(data)
      },
    }
  }
</script>
