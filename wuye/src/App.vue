<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	#app {
    font-size: .26rem;
    height:100%;
}
  body {
    -webkit-tap-highlight-color: transparent;
    height:100%;
  }
</style>
