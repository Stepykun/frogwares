<template lang="html">
  <div class="">

    <button  v-if="status == 'SUCCESS'"><router-link :to="{name: 'questInfo', params: {alias: alias, globalId: globalId, status: status}}" tag="button"><font-awesome-icon icon="check" /></router-link></button>
    <button  v-else-if="status == 'CRASH'"><router-link :to="{name: 'questInfo', params: {alias: alias, globalId: globalId, status: status}}" tag="button"><font-awesome-icon icon="times" /></router-link></button>
    <button  v-else-if="status == 'NO_DATA'"><router-link :to="{name: 'questInfo', params: {alias: alias, globalId: globalId, status: status}}" tag="button"><font-awesome-icon icon="minus" /></router-link></button>
    <button v-else>What?</button>
  </div>

</template>

<script>
export default {
  name: 'statusBtn',
  props: ['status', 'globalId', 'alias']
}
</script>

<style lang="css" scoped>
button {
  background: white;
  border: 0;
}
</style>
