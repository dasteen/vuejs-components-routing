<template>
	<div class="post" v-if="post">
		<h2>{{ post.title }}</h2>
		<span>{{ post.body }}</span>
	</div>
</template>

<script>
import posts from '../posts'

export default {
  data () {
    return {
      posts: posts,
      post: null
    }
  },
  created () {
  	const postId = this.$route.params.id

    this.post = this.posts[postId]
  }
}
</script>
