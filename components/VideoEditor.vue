<template>
  <div class="video-editor">
    <v-card>
      <v-card-title class="headline">
        Edit your video
        <v-spacer></v-spacer>
        <v-btn @click="expand = !expand" small>Toggle edits</v-btn>

      </v-card-title>
      <v-card-text>
        <video-player poster="">
          <source :src="src" type="video/mp4" />
        </video-player>

        <v-card-subtitle>Edits:</v-card-subtitle>
        <video-timeline :edits="edits" :duration="video.duration"></video-timeline>
      </v-card-text>
      <v-expand-transition>
        <div v-show="expand">
          <v-divider></v-divider>
          <v-textarea :value="jsonifiedEvents"></v-textarea>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import VideoPlayer from '~/components/VideoPlayer'
import VideoTimeline from '~/components/VideoTimeline'

export default {
  components: {
    VideoPlayer,
    VideoTimeline,
  },

  props: ["src"],

  data() {
    return {
      expand: false,
    }
  },

  computed: {
    ...mapState('video', ['edits', 'video']),

    jsonifiedEvents() {
      return JSON.stringify(this.edits, null, 2)
    }
  }
}
</script>

<style>

</style>