<template>
  <div class="Done">
    
    <div class="full-control">
      <div class="list">
        <md-list>
          <md-subheader>Zuletzt verwendet</md-subheader>
          <md-list-item v-for="(item,i) in doneList" :key="i">
            <div class="md-list-item-text">

              <span >{{item.name}}</span>
              <p>Menge: {{item.menge}}</p>
              <p v-if="item.date !== ''">Fälligkeitsdatum: {{item.date}}</p>
              
            </div>

            <!--Buttons Template---------------------------------------------->
            <template >
              <md-button class="md-icon-button md-list-action" @click="addList(i)">
                <md-icon class="md-primary">reply</md-icon>
              </md-button>
              <md-button class="md-icon-button md-list-action" @click="remove(i)">
                <md-icon class="md-primary">delete</md-icon>
              </md-button>
            </template>
          </md-list-item>
        </md-list>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Done',
  components: {
    
  },
  data: () => ({
      doneList: [],
  }),
  mounted() {
    if (localStorage.getItem('doneList')) {
      try {
        this.doneList = JSON.parse(localStorage.getItem('doneList'));
      } catch(e) {
        console.log("error")
        localStorage.removeItem('doneList');
      }
    }
  },
  methods: {
    //Item von Liste entfernen---------------------------------
    remove(index) {
      this.doneList.splice(index, 1)
      this.saveDoneList()      
    },
    addList(i) {
      this.items.push({id: this.doneList[i].id, name: this.doneList[i].name, menge: this.doneList[i].menge, editing: false, date: this.doneList[i].date})
      this.saveItems()

      this.remove(i)
    },
    saveDoneList() {
      const parsed = JSON.stringify(this.doneList)
      localStorage.setItem('doneList', parsed)
    },
    saveItems() {
      const parsed = JSON.stringify(this.items)
      localStorage.setItem('items', parsed)
    }
  }
}
</script>

<style lang="scss" scoped>

.done {
  padding-top: 20px;
}
.md-list-item-content .md-list-action {
  margin: 0;
}
.md-list-item-content .md-list-action:last-of-type {
  margin: 0;
}
.md-field label {
  padding-left: 16px;
}
.md-field .md-input, .md-field .md-textarea {
  padding: 0 16px;
}

</style>