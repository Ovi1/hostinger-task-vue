<template>
    <v-app light>
        <v-toolbar fixed class="indigo white--text">
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <main>
            <v-container fluid grid-list-lg>
                <v-slide-y-transition mode="out-in">
                    <v-layout row wrap>
                        <router-view></router-view>
                    </v-layout>
                </v-slide-y-transition>
            </v-container>
        </main>
        <v-footer fixed>
            <span>Ovi, 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Hostinger Task',
      }
    },
  }
</script>

<style lang="stylus">
    @import './stylus/main'
</style>
