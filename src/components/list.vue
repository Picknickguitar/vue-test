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
                <label>Menge</label>
                <md-input v-model="item.menge"></md-input>
              </md-field>

              <p v-if="!item.editing && item.date !== ''">Fälligkeitsdatum: {{item.date}}</p>
              <md-field  v-if="item.editing">
                <label>Fälligkeitsdatum</label>
                <md-input v-model="item.date"></md-input>
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

            <!--Hinzufügen------------------------------------------------------------->
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

                <md-field v-if="showDate">
                  <label>Fälligkeitsdatum</label>
                  <md-input v-model="date" ></md-input>
                </md-field>

              </div>
            </md-list-item>
            <div v-if="show" class="addButton">
              <md-switch v-model="showDate" @change="resetDate">Fälligkeitsdatum</md-switch>
              <md-button class="md-icon-button" type="submit" @click="addItem()" :disabled="!newItem || !value">
                <md-icon class="md-primary">done</md-icon>
              </md-button>
              <md-button class="md-icon-button" type="submit" @click="addCancel">
                <md-icon class="md-primary">clear</md-icon>
              </md-button>
              
              
            </div>
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
    {name:"Bananen", menge: 5, editing: false, date: "24.02.2021"},
    {name:"Äpfel", menge: 3, editing: false, date: ""},
    {name:"Butter", menge: 1, editing: false, date: "15.11.2020"},
    {name:"Wasser", menge: 6, editing: false, date: ""}
    ],
    newItem: "",
    value: "",
    date: "",
    show: false,
    showDate: false
  }),
  /*
  computed: {
    sortedByDate: function() {
        this.items.sort( ( a, b) => {
            
            return new Date(a.date) - new Date(b.date);
            
        });
        return this.items;
        }
  },*/
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
      const newList = [...list, {name: this.newItem, menge: this.value, editing: false, date: this.date}]
      this.items = newList

      //Form Reset
      this.showAdd()
      this.newItem = ""
      this.value = ""
      this.date = ""
    },
    editItem(item) {
      item.editing = false
    },
    validateUser() {
      console.log("voll valide alter")
    },
    addCancel() {
      this.show = !this.show
      this.newItem = ""
      this.value = ""
      this.date = ""
    },
    resetDate() {
      this.date = ""
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

.addButton {
  display: flex;
  justify-content: flex-end; 
}
</style>