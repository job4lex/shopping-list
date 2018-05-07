<template id="change-bg-template">
  <div>
    <em>Change background color</em>
    <input :value="bgcolor" @input="onInput({bgcolor: $event.target.value, id })" type="color"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["bgcolor", "id"],
  methods: mapActions({
    onInput: "changeBg"
  })
};
</script>

<style scoped>

</style>
