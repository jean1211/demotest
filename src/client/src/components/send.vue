<template>
  <select ref="send" @change="childA()">
    <option v-for="t in value.time">{{ t }}</option>
  </select>
</template>
<script>
export default {
  name: 'send',
  props: ['value'],
  methods: {
    childA: function() {
      this.$parent.send_parent(this.$refs.send.value)
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
select{
        outline: none;
        margin-top: 15px;
        font-size: 1em;
        font-family: 仿宋, serif;
        display: block;
        opacity: 0.8;
        padding: 0.2em;
        border-radius: 10px;
        background-color: #D4D7D8;
    }

</style>
