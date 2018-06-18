<template>
  <div class="first"> the contacts goes here</div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
              
        ]
      }
    }
  }
</script>

<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0

  .first
    font-size: 10rem
    
</style>

