<template>
  <div class="lunch">
    <h1>점심메뉴</h1>
    <button @click="toLunch">Pick Lunch</button>
    <p>{{ pickedMenu }}</p>
    <br>
    <h2>로또를 뽑아보자</h2>
    <button @click="toLotto">Pick Lotto</button>
  </div>
</template>

<script>
export default {
  name: 'LunchView',
  data() {
    return {
      menus : ['떡볶이', '국밥', '치킨', '피자', '족발', '짜장면', '짬뽕', '김치찌개'],
      pickedMenu : null,
    }
  },
  components: {
    
  },
  methods: {
    toLunch() {
      this.pickedMenu = this.menus[Math.floor(Math.random() * this.menus.length)];
    },
    toLotto() {
      this.$router.push({ name: 'lotto' })
    }
  }
}
</script>

<style>

</style>