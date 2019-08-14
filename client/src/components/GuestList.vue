<template lang="html">
  <div class="guest-wrapper">
    <ul>
      <li v-for="guest in guests">
        <span v-if="guest.checkedIn">{{guest.name}}</span>
      </li>
    </ul>

  </div>

</template>

<script>
export default {
  name: 'guest-list',
  props: ['guests']
}
</script>

<style lang="css" scoped>
</style>
