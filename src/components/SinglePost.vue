<template>
    <v-flex xs12 sm6 offset-sm3>
        <v-card :raised="true">
            <v-card-media src="https://dummyimage.com/800x500/dbdbdb/fff" height="500px"></v-card-media>
            <v-card-title primary-title class="indigo">
                <h1 class="headline white--text">{{post.title}}</h1>
            </v-card-title>
            <v-card-text>
                <p>{{post.body}}</p>
            </v-card-text>
        </v-card>
        <v-card :raised="true" class="indigo mt-4 mb-1">
            <v-card-title><h6 class="white--text">Comments</h6></v-card-title>
            <v-card-actions>
                <comment-form-dialog @commentAdded="addComment"></comment-form-dialog>
            </v-card-actions>
        </v-card>
        <v-card v-for="(comment, i) in postComments" :key="comment.id" :index="i" class="mb-2">
            <v-card-title><strong>{{comment.name}}</strong>&nbsp;{{comment.email}}</v-card-title>
            <v-card-text>
                <p>{{comment.body}}</p>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
  import Vue from 'vue'
  const commentDialogForm = Vue.component('comment-form-dialog', require('../components/modals/CommentForm.vue'));
  export default {
    name: 'Post',
    components: {
      commentDialogForm
    },
    data () {
      return {
        post: [],
        postComments: [],
        title: 'Post',
      }
    },
    created: function () {
      this.getPost(this.$route.fullPath);
      this.getPostComments(this.$route.fullPath);
    },
    methods: {
      getPost (url) {
        axios.get(baseUrl + url)
          .then(response => this.post = response.data)
          .catch(function (error) {
            console.log(error);
          });
      },
      getPostComments (url) {
        axios.get(baseUrl + url + '/comments')
          .then(response => this.postComments = response.data)
          .catch(function (error) {
            console.log(error);
          });
      },
      addComment (data) {
        this.postComments.unshift(data);
      },
    }
  }
</script>
