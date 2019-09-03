<template>
  <select ref="type"><option v-for="t in value.size">{{ t }}</option></select>
</template>
<script>
export default {
  name: 'type',
  props: ['value'],
  methods: {
     childC: function() {
         this.$parent.send_parent2(this.$refs.type.value)
    }
  }
}

</script>
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