
<template>
  <div>
    <md-dialog-confirm
      :md-active.sync="active"
      md-title="Wirklich löschen?"
      md-content="Wollen sie wirklich das Item löschen?"
      md-confirm-text="Agree"
      md-cancel-text="Disagree"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />

    <md-button class="md-primary md-raised" @click="active = true">Confirm</md-button>
    <span v-if="value">Value: {{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'Delete',
  components: {
    
  },
  data: () => ({
  
  }),
  
  methods: {
    
   
  }
}
</script>

<style lang="scss" scoped>

</style>