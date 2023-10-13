<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <div>
        <!-- <div>
          <button @click="localGetToken"  type="button" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600  disabled:text-black disabled:bg-slate-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Получить токен</button>
        </div> -->

        <ComboBox :listItem="AmoModule.entities" v-model:item="AmoModule.entity" />
        <ButtonComponent @create="createItem" :isActive="isActive" />
      </div>
      <div>
        <ListComponent :positions="AmoModule.createdEntities" />
      </div>
    </div>
  </div>
</template>

<script>
import ComboBox from './components/ComboBox.vue'
import ButtonComponent from './components/ButtonComponent.vue'
import ListComponent from './components/ListComponent.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
// import { AmoAPIInstance } from './api/AmoAPI'

export default {
  name: 'App',
  components: {
    ComboBox,
    ButtonComponent,
    ListComponent,
    // AmoAPIInstance
  },
  methods: {
    ...mapActions("AmoModule", ["createItem"]),
    // localGetToken() {
    //   console.log('getToken 1')
    //   this.getToken()
    // }

  },
  computed: {
    ...mapState(['AmoModule']),
    ...mapGetters("AmoModule", ["isActive"])
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
