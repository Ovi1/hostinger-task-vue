import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import SinglePost from '@/components/SinglePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'SinglePost',
      component: SinglePost
    }
  ]
})
