<template>
  <div id="app">
    <div class="screen">
      <div class="phone-viewport">
        <md-bottom-bar class="md-accent">
          <md-bottom-bar-item md-label="Hinzufügen" md-icon="playlist_add" @click="addItemChild"></md-bottom-bar-item>
          <md-bottom-bar-item md-label="Sortieren" md-icon="sort" @click="sortList"></md-bottom-bar-item>
        </md-bottom-bar>
      </div>
      <List ref="form"/>
      <md-divider></md-divider>
      <Done class="done" v-if="emptyDone > 0"/>
    </div>
  </div>
</template>

<script>
import List from './components/list.vue'
import Done from './components/done.vue'


export default {
  name: 'Home',
   components: {
    List,
    Done
  },
  data () {
    return {
      itemList: []
    }
  },
  computed: {
    emptyDone() {
      return this.$store.getters.doneEmpty
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
  display: flex;
  justify-content: center;
}
.screen {
  width: 100vw;
}
.phone-viewport {  
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: rgba(#000, .06);
}
.md-ripple {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

@media only screen and (min-width: 1200px) {
 
  .screen {
  width: 65vw;
  }
}
</style>
