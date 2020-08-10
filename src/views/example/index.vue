<template>
  <v-layout>
    <div>
      <span>Example View</span>
    </div>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
//import components if needed

export default {
  name: "Example",
  components: {},
  data: () => ({}),
  mounted() {},
  methods: {
    ...mapActions("example", ["exampleAPI"]),
  },
  watch: {},
  computed: {
    ...mapGetters("example", ["exampleData"]),
  },
};
</script>

<style scoped></style>
