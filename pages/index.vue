<template>
  <v-row justify="center" align="center">
    <v-col cols="12" >
      <video-editor src="https://embed-fastly.wistia.com/deliveries/70cebfa349c46348db0e3a0246b08bab0d03f0d4/Inclusivity.mp4"></video-editor>
    </v-col>
  </v-row>
</template>

<script>
import VideoEditor from '~/components/VideoEditor'

export default {
  components: {
    VideoEditor,
  },

  layout: 'default',
}
</script>
