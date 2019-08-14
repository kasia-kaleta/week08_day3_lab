<template lang="html">
  <div class="guest-wrapper">
    <ul>
      <li v-for="guest in guests">
        <span v-if="guest.checkedIn">{{guest.name}}</span>
        <span v-if="guest.checkedIn">
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
