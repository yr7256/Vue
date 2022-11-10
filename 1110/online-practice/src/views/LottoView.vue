<template>
  <div class="lotto">
    <h1>로또</h1>
    <button @click="toGetNumbers">Pick Lucky Numbers</button><br>
    <br>
    {{ nums }}
  </div>
</template>

<script>
import _ from "lodash"

export default {
  name: "LottoView",
  data() {
    return {
      nums: null
    }
  },
  components: {

  },
  methods: {
    toGetNumbers() {
      this.nums = _.sampleSize(_.range(1,47), 6)
    }
  }
}
</script>

<style>

</style>