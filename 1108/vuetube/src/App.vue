<template>
  <div id="app" class="container vuetube-wrap">
    <!-- 제목 영역 -->
    <header class="d-flex justify-content-center">
      <h1 class="mt-4 text-primary">VUETUBE</h1>
    </header>

    <!-- 검색바 -->
    <SearchBar @fetch-videos="onFetchVideos" />
    <!-- 본문 영역 -->
    <section class="row mt-4">
      <!-- 비디오 플레이 영역 -->
      <div class="col-12 col-lg-8">
        <VideoDetail :selectedVideo="selectedVideo"/>
      </div>
      <!-- 오른쪽에 보일 비디오 리스트 5개 -->
      <aside class="col-12 col-lg-4">
        <VideoList :videos="videos"
        @select="onSelect" />
      </aside>
    </section>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import VideoDetail from './components/VideoDetail.vue'
import VideoList from './components/VideoList.vue'


export default {
  name: 'App',
  components: {
    SearchBar, VideoList, VideoDetail
  },
  data() {
    return {
      videos: [],
      selectedVideo: {},
    }
  },
  methods: {
    onFetchVideos(videos) {
      this.videos = videos
    },
    onSelect(selectedVideo) {
      this.selectedVideo = selectedVideo
    }
  }
}
</script>
<style>
.vuetube-wrap {
  min-height: 100vh;
}
</style>
