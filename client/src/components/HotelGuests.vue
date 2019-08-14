<template lang="html">
  <div class="">
    <h3>Checked In Guests</h3>
    <ul>
      <li v-for="guest in hotelGuests">{{guest.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hotel-guests',
  props: ['hotelGuests']
}
</script>

<style lang="css" scoped>
</style>
