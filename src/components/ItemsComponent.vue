<script>
import ItemComponent from "./ItemComponent";
export default {
  components: {
    ItemComponent
  },
  props: ["items", "id", "bgcolor"],
  computed: {
    style() {
      return "color:" + this.bgcolor;
    }
  }
};
</script>

<template>
  <div :style="style">
    <item-component v-for="item in items" :item="item" :id="id" :key="item.id"></item-component>
  </div>
</template>

<style scoped>

</style>
