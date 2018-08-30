<template>
  <section class="container posts">
    <h2>Blog</h2>
    <div class="row posts">
      <router-link class="col-md-4" :to="{ name: 'Post', params: { id: post.id } }" v-for="post in posts" :key="post.id" :id="post.id">
        <div class="card card-body post">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.body }}</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
import posts from '../posts'

export default {
  props: ['posts'],
  data () {
    return {
      // posts: posts
    }
  },
}
</script>
