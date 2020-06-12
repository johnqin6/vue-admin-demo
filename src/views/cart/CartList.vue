<template>
  <div>
    <el-table :data="tableList">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        label="产品"
        width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="数量"
        width="120">
        <template slot-scope="scope">
          <input type="text" v-model="scope.row.sqt">
          <span>{{ scope.row.sqt }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="价格"
        width="120">
        <template slot-scope="scope">{{ scope.row.price }}</template>
      </el-table-column>
    </el-table>
    <el-button v-popover:popover>激活popover</el-button>
    <el-popover
      ref="popover"
      placement="right"
      width="400"
      trigger="click">
      <el-table :data="gridData">
        <el-table-column width="150" property="name" label="产品"></el-table-column>
        <el-table-column width="100" label="数量">
          <template slot-scope="scope">
            <input type="text" v-model="scope.row.sqt">
          </template>
        </el-table-column>
        <el-table-column width="300" property="price" label="价格"></el-table-column>
      </el-table>
    </el-popover>
  </div>
</template>
<script>
import { productList, productModel, ruleList } from '@/datas/product'
import { arrSort } from '@/utils/util'

export default {
  data () {
    return {
      productList: [],
      tableList: [],
      gridData: [],
      popoverShow: false
    }
  },
  mounted () {
    console.log(productList, productModel, ruleList)
    this.handleData()
    this.ruleSort()
    this.getGridData()
  },
  methods: {
    getGridData () {
      this.gridData = this.productList.filter((item, index) => index < 10)
    },
    handleData () {
      for (let i = 0, len = productList.length; i < len; i++) {
        this.productList.push({
          ...productList[i],
          checked: false
        })
      }
      console.log(this.productList)
    },
    ruleSort () {
      const newRuleList = arrSort(ruleList, 'zIndex', 'desc')
      console.log(newRuleList, 12)
    }
  }
}
</script>
<style scoped>
</style>
