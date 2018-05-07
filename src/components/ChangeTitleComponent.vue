<template id="change-title-template">
  <div class="footer__item">
    <em>Change the title of your shopping list here</em>
    <input :value="title" @input="onInput({title: $event.target.value, id })" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["title", "id"],
  methods: mapActions({
    onInput: "changeTitle"
  })
};
</script>

<style scoped>
.footer__item {
  margin-bottom: 1rem;
}
</style>
