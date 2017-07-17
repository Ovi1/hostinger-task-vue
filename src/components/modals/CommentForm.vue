<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent width="600">
            <v-btn primary dark slot="activator"><v-icon left>create</v-icon>New Comment</v-btn>
            <v-card>

                <v-card-title>
                    <span class="headline">Add New Comment</span>
                </v-card-title>

                <v-card-text>
                    <form @submit.prevent="onSubmit()">
                        <v-text-field label="Email" required name="email" type="email" v-model="form.email"></v-text-field>
                        <v-text-field label="Comment title" required name="name" v-model="form.name"></v-text-field>
                        <v-text-field label="Comment text" required multi-line name="body" v-model="form.body"></v-text-field>
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
          name: '',
          body: '',
          email: '',
          postId: 1,
        }
      }
    },
    methods: {
      onSubmit() {
        //should be posted to backend DB
        //axios.post(/post/1/comment).then(comment => this.$emit('commentAdded', comment))
        this.$emit('commentAdded', this.form);
        this.dialog = false;
      }
    }
  }
</script>