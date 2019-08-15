<template lang="html">
  <div class="guest-wrapper">
    <h3>All Guests</h3>
    <ul>
      <li v-for="guest in guests">
        <span>{{guest.name}}</span>
        <span v-if="!guest.checkedIn">
          <button type="button" name="button" @click="updateCheckin(guest)">Check in</button>
        </span>
        <span v-if="guest.checkedIn">
          <button type="button" name="button" @click="updateCheckin(guest)">Check out</button>
        </span>
        <span>
          <button type="button" name="button" @click="removeGuest(guest._id)">Remove Guest</button>
        </span>
      </li>
    </ul>

  </div>

</template>

<script>
import GuestServices from '@/services/GuestService.js'
import { eventBus } from '@/main.js'

export default {
  name: 'guest-list',
  props: ['guests'],


  methods: {
    removeGuest(id){
      GuestServices.deleteGuest(id)
        .then(() => eventBus.$emit('guest-deleted', id))
    },

    updateCheckin(guest) {
      const id = guest._id
      const data = {
        name: guest.name,
        email: guest.email,
        checkedIn: !guest.checkedIn
      }
      GuestServices.putGuest(data, id)
        .then((updatedGuest) => eventBus.$emit('guest-updated', updatedGuest))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
