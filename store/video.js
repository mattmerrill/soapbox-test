import { v4 as uuidv4 } from 'uuid'
import Vue from 'vue'

function defaultEdit(overrides) {
  let defaults = {
    id: uuidv4(),
    type: 'scale',
    scale: 100,
  }
  return {...defaults, ...overrides}
}

export const state = () => ({
  video: {},
  edits: {},
})

export const mutations = {
  setVideo(state, video) {
    state.video = video
  },
  addEdit(state, edit) {
    Vue.set(state.edits, edit.id, edit)
  },
  updateEdit(state, edit) {
    if (state.edits[edit.id].type !== edit.type) {
      if (edit.type === 'cut'){
        delete edit.scale
      } else {
        delete edit.end
      }
    }
    Vue.set(state.edits, edit.id, edit)
  },
  removeEdit(state, edit) {
    Vue.delete(state.edits, edit.id)
  },
}

export const actions = {
  setVideo({commit}, video) {
    commit('setVideo', video)
  },
  addEdit({commit}, edit) {
    commit('addEdit', defaultEdit(edit))
  },
  updateEdit({commit}, edit) {
    commit('updateEdit', edit)
  },
  removeEdit({commit}, edit) {
    commit('removeEdit', edit)
  },
}