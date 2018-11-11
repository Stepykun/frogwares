<template>
  <div class="main">
    <p v-if="loading">Loading...</p>
    <div class="info" v-else>
      <td v-if="$route.params.status == 'NO_DATA'">
        <p>Quest Info Not Found</p>
      </td>
      <div class="generalQuestInfo" v-else>
        <table>
          <tr class='upper'>
            <td>Global Id</td>
            <td>Platform</td>
            <td>Quest Name</td>
          </tr>
          <tr class='lower'>
            <td>{{$route.params.globalId}}</td>
            <td>{{ showPlatform }}</td>
            <td>{{$route.params.alias}}</td>
          </tr>
        </table>
        <ul class="progression">
          <li v-for="item in compare">
            <font-awesome-icon v-bind:icon="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import statusBtn from './statusBtn'
import mainPage from './mainPage'
export default {
  name: 'questInfo',
  components: {
    statusBtn
  },
  data() {
    return {
      questInfo: [],
      finished: [],
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
    this.fetchData("GeneralQuestsInfo", 'questInfo')
    this.fetchData("FinishedQuestsLeafs", 'finished')
  },
  computed: {
    loading: function() {
        return (this.questInfo.length == 0 || this.finished.length == 0);
    },
    showPlatform: function() {
      var that = this;
      var platform;
      this.questInfo.forEach(function(item) {
        if (that.$route.params.alias == item.alias && that.$route.params.globalId == item.globalId) {
          platform = item.platform;
        }
      })
      return platform;
    },
    compare: function() {
      var result = [];
      var that = this;
      this.questInfo.forEach(function(item) {
        if (that.$route.params.alias == item.alias && that.$route.params.globalId == item.globalId)  {
          item.pathway.leafs.forEach(function(leafs) {
            var found = false;
            that.finished.forEach(function(finishedLeafs) {
              if (item.id == finishedLeafs.questId) {
                if (leafs == finishedLeafs.name) {
                    found = true;
                    result.push('check');
                }
              }
            })
            if (found == false) {
              result.push('times');
            }
          })
        }
      })
      return result;
    }
  }
}
</script>

<style scoped>
   table {
     margin: 0 auto;
     border-collapse: collapse;
     width: 400px;
   }
   tr {
     text-align: center;
     padding: 0 20px;
   }
   td {
     border: 1px solid black;
   }
   li {
     list-style: none;
     display: inline;
     margin: 0 20px;
   }
   .upper {
     height: 40px;
     width: 200px;
     border: 1px solid black;
   }
   .lower {
     height: 70px;
     border: 1px solid black;
   }
   .progression {
     display: flex;
     justify-content: center;
   }

</style>
