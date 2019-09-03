<template>
  <select ref="kind"><option v-for="t in value.express">{{ t }}</option></select>
</template>
<script>
export default {
  name: 'kind',
  props: ['value'],
  methods: {
    childB: function() {
       this.$parent.send_parent("",this.$refs.kind.value)
    }
  }
}

</script>
<style>
select {
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