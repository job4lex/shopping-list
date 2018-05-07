<template>
  <div>
    <h2 :style="style">{{ title }}</h2>
    <add-item-component :id="id" @add="addItem"></add-item-component>
    <items-component :items="items" :id="id" :bgcolor="bgcolor"></items-component>
    <div class="footer">
      <hr />
      <change-title-component :id="id" :title="title"></change-title-component>
      <change-bg-component :id="id" :bgcolor="bgcolor"></change-bg-component>
    </div>
  </div>
</template>

<script>
import AddItemComponent from "./AddItemComponent";
import ItemsComponent from "./ItemsComponent";
import ChangeTitleComponent from "./ChangeTitleComponent";
import ChangeBgComponent from "./ChangeBgComponent";
export default {
  components: {
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent,
    ChangeBgComponent
  },
  props: ["id", "title", "items", "bgcolor"],
  computed: {
    style() {
      return "color:" + this.bgcolor;
    }
  },
  methods: {
    addItem(text) {
      this.items.push({
        text: text,
        checked: false
      });
    }
  }
};
</script>

<style scoped>
.footer {
  font-size: 0.7em;
  margin-top: 20vh;
}
</style>
