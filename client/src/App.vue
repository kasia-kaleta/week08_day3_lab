<template>
  <div id="app">
    <guest-form/>
    <guest-list :guests="guests"/>
  </div>
</template>

<script>
import GuestServices from './services/GuestService.js'
import GuestList from './components/GuestList.vue'
import GuestForm from './components/GuestForm.vue'

export default {
  name: 'app',
  data(){
    return {
      guests: []
    }
  },
  components: {
    GuestServices,
    'guest-list': GuestList,
    'guest-form': GuestForm
  },

  mounted(){
    GuestServices.getGuests()
    .then(guests => this.guests = guests);
  }
}
</script>

<style>

</style>
