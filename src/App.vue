<template>
  <div id="app">
    <div class="phone-viewport">
      <md-bottom-bar class="md-accent">
        <md-bottom-bar-item md-label="Hinzufügen" md-icon="playlist_add" @click="addItemChild"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="Sortieren" md-icon="sort" @click="sortList"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
    <List ref="form"/>
  </div>
</template>

<script>
import List from './components/list.vue'

export default {
  name: 'Home',
   components: {
    List
  },
  data () {
    return {
      itemList: []
    }
  },
  methods: {
    addItemChild () {
      this.$refs.form.showAdd()
    },
    sortList () {
      this.$refs.form.sortedByDate()
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  min-height: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.phone-viewport {
  width: 100vw;
  
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid rgba(#000, .26);
  background: rgba(#000, .06);
}
.md-ripple {
  display: flex;
  justify-content: center;
  overflow: hidden;
}
</style>
