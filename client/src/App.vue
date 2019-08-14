<template>
  <div id="app">
    <guest-form/>
    <hotel-guests :hotelGuests="hotelGuests"/>
    <guest-list :guests="guests"/>
  </div>
</template>

<script>
import GuestServices from './services/GuestService.js'
import GuestList from './components/GuestList.vue'
import GuestForm from './components/GuestForm.vue'
import HotelGuests from './components/HotelGuests.vue'
import { eventBus } from '@/main.js'


export default {
  name: 'app',
  data(){
    return {
      guests: [],
      hotelGuests: []
    }
  },
  components: {
    GuestServices,
    'guest-list': GuestList,
    'guest-form': GuestForm,
    'hotel-guests': HotelGuests
  },

  methods: {


  },

  computed: {
    checkedInGuests: function () {
      this.guests.forEach((guest) => {
        if (guest.checkedIn){
          this.hotelGuests.push(guest)
        }
      })
    }

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

    eventBus.$on('guest-updated', (updatedGuest) => {
      const index = this.guests.findIndex(guest => guest._id === updatedGuest._id)
      this.guests[index] = updatedGuest
    })



  }
}
</script>

<style>

</style>
