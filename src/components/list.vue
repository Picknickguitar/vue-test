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
              <md-button class="md-icon-button md-list-action" @click="addDone(i)">
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
                  <md-input v-model="newItem" :maxlength="maxName"></md-input>
                </md-field>
        
                <md-field>
                  <label>Menge</label>
                  <md-input v-model="value" @keydown="isNumber(e)" :maxlength="maxValue"></md-input>
                </md-field>

                <md-field v-if="showDate">
                  <label>Fälligkeitsdatum</label>
                  <md-input v-model="date" @keydown="isNumber(e)" :maxlength="maxDate"></md-input>
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
  name: 'List',
  
  data: () => ({
    
    newItem: "",
    value: "",
    date: "",
  
    show: false,                //Hinzufügen anzeigen var
    showDate: false,            //switch anzeige var
    e: null,                    //charcode Key event var
    maxName: 25,                //maximale Anzahl zeichen Bezeichnung item
    maxValue: 6,                //maximale Anzahl zeichen Menge
    maxDate: 10                 //maximale Anzahl zeichen Date

  }),
  
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {
  //Liste bearbeiten Methoden------------------------------------------------------------

    //Item von Liste entfernen---------------------------------
    remove(index) {
      this.$store.commit('removeList', index)
    },

    // Fügt Item liste hinzu---------------------------------------------
    addItem() {
      this.showDate = false

      this.$store.commit({
        type: 'addList',
        newItem: this.newItem,
        value: this.value,
        date: this.date
        })

      //Form Reset
      this.showAdd()
      this.newItem = ""
      this.value = ""
      this.date = ""
    },

    //zu zuletzt verwendet list hinzufügen-------------------------------------
    addDone(i) {
      this.$store.commit('addDone', i)

      this.remove(i)
    },

  //Anzeige Methoden----------------------------------------------------------------------
    //Zeigt Form an. Wird von Hinzufügen Button vom Menü angesteuert------------------
    showAdd() {
      this.show = !this.show
    },
    //Switch die Anzeige zu editieren um------------------------------------------
    editItem(item) {
      item.editing = false
    },

  //Reset methoden-------------------------------------------------------------------------
    //Wenn Editieren abegebrochen wird. Reset------------------------------------
    addCancel() {
      this.show = !this.show
      this.newItem = ""
      this.value = ""
      this.date = ""
    },
    //Extra reset für den Switch button Fälligkeitsdatum---------------------------------
    resetDate() {
      this.date = ""
    },

  //Filter Input methoden---------------------------------------------------------------
    //Nur Zahlen & Punkt für Menge akzeptieren
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 190) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    sortedByDate() {
      
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