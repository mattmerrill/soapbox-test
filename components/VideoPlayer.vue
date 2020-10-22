<template>
  <video ref="plyr" plays-inline controls :data-poster="poster">
    <slot />
  </video>
</template>

<script>
import Plyr from 'plyr'

export default {

  props: ["poster"],

  data() {
    return {
      plyr: null,
    }
  },

  mounted() {
    this.$nextTick(() => {
      let plyr = new Plyr(this.$refs.plyr)
      plyr.on('ready', (e) => {
        this.plyr = e.detail.plyr
      })
      plyr.on('loadedmetadata', (e) => {
        this.$store.dispatch('video/setVideo', {duration: this.plyr.duration})
      })
    })
    this.$nuxt.$on('player:seek', (second) => {
      this.plyr.restart()
      this.plyr.forward(parseInt(second))
    })
  },
}
</script>

<style>

</style>