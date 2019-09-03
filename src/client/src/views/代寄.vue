<template>
  <div class="about">
    <button @click='get'>交互</button>
  </div>
</template>
<script>
export default {
  name: 'dj',
  methods: {
    get() {
      console.log(this)
    },
  }

}

</script>
