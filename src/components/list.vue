<template>
  <div class="Home">
    
    <div class="full-control">
      <div class="list">
        <md-list>

          <md-list-item v-for="(item,i) in items" :key="i">
            <div class="md-list-item-text">

              <!--Bezeichnung------------------------------------------------------------>
              <span v-if="!item.editing">{{item.name}}</span>
              <md-field v-if="item.editing">
                <label>Bezeichnung</label>
                <md-input v-model="item.name"></md-input>
              </md-field>

              <!--Menge------------------------------------------------------------------>
              <p v-if="!item.editing">Menge: {{item.menge}}</p>
              <md-field  v-if="item.editing">
                <label>Bezeichnung</label>
                <md-input v-model="item.menge"></md-input>
              </md-field>
            </div>

            <!--Buttons Not editing Template---------------------------------------------->
            <template v-if="!item.editing">
              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">done</md-icon>
              </md-button>
              <md-button class="md-icon-button md-list-action" @click="item.editing = true">
                <md-icon class="md-primary">edit</md-icon>
              </md-button>
              <md-button class="md-icon-button md-list-action" @click="remove(i)">
                <md-icon class="md-primary">delete</md-icon>
              </md-button>
            </template>

            <!--Buttons editing Template---------------------------------------------->
            <template v-if="item.editing">
              <md-button class="md-icon-button md-list-action"  @click="editItem(item)">
                <md-icon class="md-primary">done</md-icon>
              </md-button>
            </template>

            </md-list-item>
            <!--Hinzufügen Template-------------------------------------------------------->
            <md-list-item v-if="show">
              <div class="md-list-item-text">
              
                <md-field>
                  <label>Bezeichnung</label>
                  <md-input v-model="newItem"></md-input>
                </md-field>
        
                <md-field>
                  <label>Menge</label>
                  <md-input v-model="value"></md-input>
                </md-field>

              </div>
                <md-button class="md-icon-button" type="submit" @click="addItem()">
                  <md-icon class="md-primary">done</md-icon>
                </md-button>
                <md-button class="md-icon-button" type="submit" @click="addCancel">
                  <md-icon class="md-primary">clear</md-icon>
                </md-button>
                
            </md-list-item>
        </md-list>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  data: () => ({
    items: [
    {name:"Bananen", menge: 5, editing: false},
    {name:"Äpfel", menge: 3, editing: false},
    {name:"Butter", menge: 1, editing: false},
    {name:"Wasser", menge: 6, editing: false}
    ],
    newItem: "",
    value: "",
    show: false
  }),
  props: {

  },
  methods: {
    remove(index) {
      
      const list = this.items
      const newList = [
        ...list.slice(0, index),
        ...list.slice(index + 1, list.length)
      ]
      this.items = newList
      
    },
    showAdd() {
      this.show = !this.show
    },
    addItem() {
      const list = this.items
      const newList = [...list, {name: this.newItem, menge: this.value, editing: false}]
      this.items = newList

      //Form Reset
      this.showAdd()
      this.newItem = ""
      this.value = ""
    },
    editItem(item) {
      item.editing = false
      console.log("Edit Bro")
    },
    validateUser() {
      console.log("voll valide alter")
    },
    addCancel() {
      this.show = !this.show
      this.newItem = ""
      this.value = ""
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
.md-field label {
  padding-left: 16px;
}
.md-field .md-input, .md-field .md-textarea {
  padding: 0 16px;
}

</style>