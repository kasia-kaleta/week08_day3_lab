<template lang="html">
  <form class="" v-on:submit="addGuest" method="post">
    <label for="name">Name: </label>
    <input type="text" id="name" v-model="name" required>

    <label for="email">Email: </label>
    <input type="text" id="email" v-model="email" required>

    <label for="checkedIn">Checked In</label>
    <input type="checkbox" value="yes" name="checkedIn" v-model="checkedIn">

    <input type="submit" name="" value="Add Guest">

  </form>

</template>

<script>
import GuestServices from '@/services/GuestService.js'
import { eventBus } from '@/main.js'

export default {
  name: 'guest-form',
  data(){
    return {
      name: '',
      email: '',
      checkedIn: null
    }
  },
  methods: {
    addGuest(e){
      e.preventDefault()
      const guest = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }
      GuestServices.postGuest(guest)
      .then(res => eventBus.$emit('guest-added', res))
    }
  }

}
</script>

<style lang="css" scoped>
</style>
