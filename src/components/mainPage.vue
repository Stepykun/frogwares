<template>
  <div class="main">
    <table>
      <tr class="upper">
        <td v-for="item in dataArr1">
          {{ item.alias }}
        </td>
      </tr>
      <tr class="lower">
        <td v-for="item in dataArr1">
          <statusBtn
          v-bind:status="item.status"
          v-bind:alias="item.alias"
          v-bind:globalId="item.globalId" />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import statusBtn from './statusBtn'
export default {
  name: 'mainPage',
  components: {
    statusBtn
  },
  data() {
    return {
      dataArr1: [],
    }
  },
  methods: {
    fetchData: function(route, resultKey) {
      this.$http.get('http://localhost:8080/' + route)
        .then(function(response) {
          this[resultKey] = response.data;
        }).bind(this);
    }
  },
  created: function() {
    this.fetchData("MainPageInfo", 'dataArr1')
  }
}
</script>

<style scoped>
table {
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
  border-color: black;
}
tr {
  height: 30px;
  width: 80px;
  border: 1px solid black;
}
td {
  border: 1px solid black;
  text-align: center;
  width: 200px;
}
.lower {
  height: 70px;
}

</style>
