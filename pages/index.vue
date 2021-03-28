<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">bookshelf</h1>

      <form @submit.prevent="setVeryImportantValue({ veryImportantValue })">
        <label for="value">Very important value</label>
        <div>
          <input
            id="value"
            v-model="veryImportantValue"
            name="value"
            type="text"
          />
          <button type="submit">Update state</button>
        </div>
      </form>
      <br />

      <div>
        <button @click="startLoading">Start Loading</button>
        <button @click="stopLoading">Stop Loading</button>
      </div>
      <br />
      <div>Loading: {{ isLoading }}</div>
      <div>State: {{ reallyVeryImportantValue }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  data() {
    return {
      veryImportantValue: undefined,
    }
  },
  computed: {
    ...mapState({
      isLoading: 'loading',
      reallyVeryImportantValue: 'veryImportantValue',
    }),
  },
  methods: {
    ...mapActions(['startLoading', 'stopLoading', 'setVeryImportantValue']),
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
