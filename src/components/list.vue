<template>
  <div class="Home">
    
    <div class="full-control">
      <div class="list">
        <md-list>

          <md-list-item v-for="(item,i) in items" :key="i">
            <div class="md-list-item-text">
              <span>{{item}}</span>
              <p>Menge: 5</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">done</md-icon>
            </md-button>
            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">edit</md-icon>
            </md-button>
            <md-button class="md-icon-button md-list-action" @click="remove(i)">
              <md-icon class="md-primary">delete</md-icon>
            </md-button>
          </md-list-item>

        </md-list>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  },
  data: () => ({
    items: ["Bananas", "Spinach", "Icecream"],
    newItem: ""
  }),
  methods: {
    remove(index) {
      
      const list = this.items
      const newList = [
        ...list.slice(0, index),
        ...list.slice(index + 1, list.length)
      ]
      this.items = newList
      
    },
    editItem() {
      const list = this.items
      const newList = [...list, this.newItem]
      this.items = newList
    }
  }
}
</script>

<style lang="scss" scoped>
.md-list-item-content .md-list-action {
  margin: 0;
}
.md-list-item-content .md-list-action:last-of-type {
  margin: 0;
}

</style>