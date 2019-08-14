<template lang="html">
  <form class="" v-on:submit="addGuest" method="post">
    <label for="name">Name: </label>
    <input type="text" id="name" v-model="name" required>

    <label for="email">Email: </label>
    <input type="text" id="email" v-model="email" required>

    <label for="checkedIn">Checked In</label>
    <input type="checkbox" value="yes" name="checkedIn" v-model="checkedIn">

  </form>

</template>

<script>
export default {
  name: 'guest-form',
  data(){
    return {
      name: '',
      email: '',
      checkedIn: null
    }
  }
}
</script>

<style lang="css" scoped>
</style>
