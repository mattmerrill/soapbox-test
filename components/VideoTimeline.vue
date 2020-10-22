<template>
  <div class="video-timeline">
    <v-tooltip v-model="timestampVisible" top absolute
        attach=".video-timeline"
        :nudge-bottom="74"
        :nudge-right="tooltipPlacement">
      {{shownTime}}
    </v-tooltip>
    <div class="timeline"
        ref="timeline"
        @click="add"
        @mousemove="showTime"
        @mouseenter="timestampVisible = true"
        @mouseleave="timestampVisible = false">

      <div v-for="edit in edits" :key="edit.id"
        :style="editStyles(edit)"
        class="edit"
        @click.stop="modifyEdit(edit, $event)">

      </div>
    </div>
    <v-menu v-model="modifyEditMenu"
        :nudge-width="200"
        :close-on-content-click="false"
        absolute
        :position-x="modifyMenuX"
        :position-y="modifyMenuY"
        >
      <v-card v-if="modifyEditMenu">
        <v-card-text>
          <v-btn small icon
              title="Remove edit"
              @click="removeEdit(activeEdit)"
              class="modify-remove-btn">
            <v-icon>mdi-delete</v-icon></v-btn>
          <v-btn-toggle v-model="activeEdit.type" rounded>
            <v-btn icon value="scale" title="Scale">
              <v-icon>mdi-resize</v-icon>
            </v-btn>
            <v-btn icon value="cut" title="Cut">
              <v-icon>mdi-scissors-cutting</v-icon>
            </v-btn>
          </v-btn-toggle>


          <v-text-field v-model="activeEdit.start" style="margin-top: 15px" label="Start" type="number" min="0" :max="duration"></v-text-field>
          <v-text-field v-if="activeEdit.type == 'cut'"
            v-model="activeEdit.end"
            type="number"
            label="End"
            :min="activeEdit.start"
            :max="duration"></v-text-field>

          <template v-if="activeEdit.type == 'scale'">
            <v-subheader style="padding: 0">Scale to:</v-subheader>
            <v-slider  thumb-label v-model="activeEdit.scale" max="200" min="0"></v-slider>
          </template>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="cancelModify" small>cancel</v-btn>
          <v-btn @click="saveModify" small color="primary">save</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {

  props: ["edits", "duration"],

  data() {
    return {
      timestampVisible: false,
      shownTime: "00:00",
      tooltipPlacement: 0,
      modifyEditMenu: false,
      modifyMenuX: 0,
      modifyMenuY: 0,
      activeEdit: null,
    }
  },

  methods: {
    add(e) {
      let percent = e.offsetX / e.target.clientWidth
      let targetSecond = (this.duration * percent).toFixed(2)
      let id = uuidv4()
      this.$store.dispatch('video/addEdit', {
        id,
        start: targetSecond,
      })
      this.$nextTick(() => {
        this.modifyEdit(this.edits[id], e)
      })
      this.$nuxt.$emit('player:seek', targetSecond)
    },
    showTime(e) {
      let percent
      if (e.target.className == "timeline") {
        percent = e.offsetX / e.target.clientWidth
        this.tooltipPlacement = e.offsetX
      } else {
        percent = (e.offsetX + e.target.offsetLeft) / e.target.parentNode.clientWidth
        this.tooltipPlacement = e.offsetX + e.target.offsetLeft
      }
      let targetSecond = (this.duration * percent).toFixed(2)
      this.shownTime = this.secondsToTime(targetSecond)
    },
    secondsToTime(time) {
      let minutes = Math.floor(time / 60)
      let seconds = (time - minutes * 60).toFixed(2)
      if(minutes < 10) {
        minutes = `0${minutes}`
      }
      if (seconds < 10) {
        seconds = `0${seconds}`
      }
      return `${minutes}:${seconds}`
    },
    editStyles(edit) {
      let styles = {
        left: this.getPosition(edit.start) + '%',
      }
      if (edit.type === "cut" && edit.end !== undefined) {
        let secondWidth = this.$refs.timeline.offsetWidth / this.duration
        styles.width = ((edit.end - edit.start) * secondWidth).toFixed(2) + 'px'
      }
      return styles
    },
    getPosition(second) {
      return ((second / this.duration) * 100).toFixed(2)
    },
    modifyEdit(edit, e) {
      this.modifyEditMenu = true
      this.activeEdit = {...edit}
      this.modifyMenuX = e.clientX
      this.modifyMenuY = e.clientY
    },
    removeEdit(edit) {
      this.$store.dispatch('video/removeEdit', edit)
      this.clearEditForm()
    },
    cancelModify() {
      this.clearEditForm()
    },
    saveModify() {
      this.$store.dispatch('video/updateEdit', this.activeEdit)
      this.clearEditForm()
    },
    clearEditForm() {
      this.activeEdit = null
      this.modifyEditMenu = false
    },
  },
}
</script>

<style lang="scss">
.video-timeline {
  position: relative;

  .timeline {
    position: relative;
    margin-top: 15px;
    border-radius: 5px;
    border: 1px solid #fff;
    height: 30px;
    cursor: pointer;
  }

  .edit {
    position: absolute;
    height: 50px;
    background: #1976d2;
    top: 0;
    margin-top: -10px;
    min-width: 7px;
    border-radius: 3px;

    &:hover {
      background: #fff;
    }
  }
}

.modify-remove-btn {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>