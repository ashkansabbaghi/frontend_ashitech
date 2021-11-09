<template>
  <transition :duration="{ enter: 500, leave: 800 }" name="fade">
    <div class="loading" v-if="show">
      <h1 class="loading-obj">Loading ...</h1>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      show: true
    }
  },
  mounted () {
    this.showToggle()
  },
  methods: {
    showToggle () {
      setTimeout(() => {
        this.show = false
      }, 1)
    }
  }
}
</script>

<style lang="scss" scope>

.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #083229;
  z-index: 9999;
  top: 0;

  .loading-obj {
    font-family: none;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #1BBC9B;
  }
}
</style>
