<template>
  <div>
    <h1> TypeScript Test </h1>
    <squareboard></squareboard>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import squareboard from "@/components/SquareBoard.vue";

export default Vue.extend({
    components:{
	squareboard
    }
})
</script>
