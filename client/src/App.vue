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
import { eventBus } from '@/main.js'


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

    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)

    })
    
    eventBus.$on('guest-deleted', (id) => {
      console.log('done');
      const index = this.guests.findIndex(guest => guest._id === id)
      this.guests.splice(index, 1)
    })
  }
}
</script>

<style>

</style>
