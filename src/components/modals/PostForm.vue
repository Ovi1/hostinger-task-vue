<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent width="600">
            <v-btn primary dark slot="activator"><v-icon left>create</v-icon>New Post</v-btn>
            <v-card>

                <v-card-title>
                    <span class="headline">Add New Post</span>
                </v-card-title>

                <v-card-text>
                    <form @submit.prevent="onSubmit()">
                        <v-text-field label="Post title" required name="title" v-model="form.title"></v-text-field>
                        <v-text-field label="Post text" required multi-line name="body" v-model="form.body"></v-text-field>
                        <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                        <v-btn class="indigo white--text" type="submit">Save</v-btn>
                    </form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        form: {
          id: Math.floor((Math.random() * 9999) + 1),
          title: '',
          body: '',
          userId: 1,
        }
      }
    },
    methods: {
      onSubmit() {
        //should be posted to backend DB
        //axios.post(/post).then(post => this.$emit('postedAdded', post))
        this.$emit('postAdded', this.form);
        this.dialog = false;
      }
    }
  }
</script>