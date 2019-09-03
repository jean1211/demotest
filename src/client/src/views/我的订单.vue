<template id="order">
  <div class="orderlist">
    <el-table :data="this.order_data" height="500" border style="width: 100%">
      <el-table-column prop="date" label="下单日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="type" label="快递">
      </el-table-column>
      <el-table-column prop="size" label="大小">
      </el-table-column>
      <el-table-column prop="number" label="取货码">
      </el-table-column>
      <el-table-column prop="phone" label="电话号码">
      </el-table-column>
      <el-table-column prop="address" label="送达地址">
      </el-table-column>
      <el-table-column prop="time" label="送达时间">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      order_data: []
    }
  },
  name: 'order',
  methods: {},
  created() {
    this.$axios.get('./query').then((res, err) => {
      if (err) {
        console.log(err)
      };
      this.order_data.push(...JSON.parse(res.data));
      for (let value of this.order_data) {
        value.date = new Date(value.date).toLocaleString().substring(0, 8);
      }
    })
  },

}

</script>
