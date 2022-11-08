<template>
  <div>
    <div class="ratio ratio-16x9">
      <iframe :src="selectedVideoUrl" frameborder="0"></iframe>
    </div>
    <div>
      <h4>{{ selectedVideo.snippet.title }}</h4>
      <p>{{ selectedVideo.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    selectedVideo: Object,
  },
  computed: {
    selectedVideoUrl() {
      return 'https://www.youtube.com/embed/' + this.selectedVideo.id.videoId
    }
  }
}
</script>

<style>

</style>