<script>
import store from "./vuex/store";
import { mapGetters, mapActions } from "vuex";
import ShoppingListComponent from "./components/ShoppingListComponent";
import ShoppingListTitleComponent from "./components/ShoppingListTitleComponent";
import _ from "underscore";

export default {
  components: {
    ShoppingListComponent,
    ShoppingListTitleComponent
  },
  store,
  computed: mapGetters({
    shoppinglists: "getLists"
  }),
  methods: _.extend({}, mapActions(["populateShoppingLists", "createShoppingList"]), {
    addShoppingList() {
      let list = {
        title: "New Shopping List",
        items: [],
        bgcolor: "#333"
      };
      this.createShoppingList(list);
    }
  }),
  store,
  mounted() {
    this.populateShoppingLists();
  }
};
</script>

<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" role="presentation">
        <shopping-list-title-component :id="list.id" :title="list.title"></shopping-list-title-component>
      </li>
      <li>
        <a href="#" @click="addShoppingList">
          <i class="glyphicon glyphicon-plus-sign"></i>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" class="tab-pane" role="tabpanel" :id="list.id">
        <shopping-list-component
        :id="list.id"
        :title="list.title"
        :items="list.items"
        :bgcolor="list.bgcolor"
        ></shopping-list-component>
      </div>
    </div>
</div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
