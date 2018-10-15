<template>
  <div class="pos">
    <el-row>
      <el-col :span="5" class="pos-order" id="order-list">
        <el-tabs class="select-list">
          <el-tab-pane label="点餐">
            <el-table border style="width: 100%" :data="tableData" stripe>
              <el-table-column prop="goodsName" label="商品" align="center"></el-table-column>
              <el-table-column prop="count" label="数量" width="60"></el-table-column>
              <el-table-column prop="price" label="金额" width="60"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right" align="center">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量:</small>
              <strong>{{ totalCount}}</strong>
              <small>合计:</small>
              <strong>{{ totalMoney }}</strong>
            </div>
            <div class="order-btn">
              <el-button type="danger" @click="delAllGoods()">删除</el-button>
              <el-button type="success" @click="checkout()"> 结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="19">
        <div class="often-goods">
          <div class="title">
            常用商品
          </div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" :key="goods.goodsId" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">{{goods.price}}</span>
              </li>
            </ul>
          </div>
        </div>

        <el-tabs class="select-list">
          <el-tab-pane label="汉堡">
            <ul class='cookList'>
              <li v-for="goods in type0Goods" @click="addOrderList(goods)" :key="goods.goodsId">
                <span class="foodImg">
                  <img :src="goods.goodsImg" width="100%">
                </span>
                <span class="foodName">{{goods.goodsName}}</span>
                <span class="foodPrice">￥{{goods.price}}元</span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="小吃">
            <ul class='cookList'>
              <li v-for="goods in type1Goods" @click="addOrderList(goods)" :key="goods.goodsId">
                <span class="foodImg">
                  <img :src="goods.goodsImg" width="100%">
                </span>
                <span class="foodName">{{goods.goodsName}}</span>
                <span class="foodPrice">￥{{goods.price}}元</span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="饮料">
            <ul class='cookList'>
              <li v-for="goods in type2Goods" @click="addOrderList(goods)" :key="goods.goodsId">
                <span class="foodImg">
                  <img :src="goods.goodsImg" width="100%">
                </span>
                <span class="foodName">{{goods.goodsName}}</span>
                <span class="foodPrice">￥{{goods.price}}元</span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="套餐">
            <ul class='cookList'>
              <li v-for="goods in type3Goods" @click="addOrderList(goods)" :key="goods.goodsId">
                <span class="foodImg">
                  <img :src="goods.goodsImg" width="100%">
                </span>
                <span class="foodName">{{goods.goodsName}}</span>
                <span class="foodPrice">￥{{goods.price}}元</span>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pos",
  data() {
    return {
      totalCount: 0,
      totalMoney: 0,
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    };
  },
  mounted() {
    var orderListObj = document.getElementById("order-list");
    var Height = document.body.clientHeight;
    orderListObj.style.height = Height + "px";
  },
  created() {
    // axios
    //   .get("../../static/oftenGoods.json", {})
    axios
      .get(" https://www.easy-mock.com/mock/5b7bb939d02c1e7f50b4106f/oftenGoods")

      .then(response => {
        // console.log(response);
        this.oftenGoods = response.data;
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });

    axios
      // .get("../../static/typeGoods.json", {})
            .get(" https://www.easy-mock.com/mock/5b7bb939d02c1e7f50b4106f/typeGoods")
      .then(response => {
        // console.log(response);
        for (let i = 0; i < 4; i++) {
          this["type" + i + "Goods"] = response.data[i];
        }
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  methods: {
    addOrderList(goods) {
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true;
        }
      }
      if (isHave) {
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney();
    },
    delSingleGoods(goods) {
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    delAllGoods() {
      if (!this.tableData.length) {
        this.$message.error("没有要删除的商品!");
      } else {
        this.$confirm("确认删除订单?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.tableData = [];
            this.getAllMoney();
            this.$message.success("删除成功!");
          })
          .catch(() => {
            this.$message.info("已取消");
          });
      }
    },
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        this.tableData.forEach(element => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + element.price * element.count;
        });
      }
    },
    checkout() {
      if (this.totalCount != 0) {
        this.tableData = [];
        this.getAllMoney();
        this.$message.success("结账成功，感谢你又为店里出了一份力!");
      } else {
        this.$message.error("不能空结。老板了解你急切的心情！");
      }
    }
  }
};
</script>

<style scoped>
.pos {
  font-size: 12px;
}

.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}

.order-btn {
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1.5em;
}

.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
}

.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  cursor: pointer;
  font-size: 18px;
}

.goods-type {
  clear: both;
}

.o-price {
  color: #58b7ff;
}

.often-goods-list {
  border-bottom: 1px solid #c0ccda;
  height: auto;
  overflow: hidden;
  padding-bottom: 10px;
  background-color: #f9fafc;
}

.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}

.cookList li span {
  display: block;
  float: left;
}

.foodImg {
  width: 40%;
}

.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}

.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}

.totalDiv {
  height: auot;
  overflow: hidden;
  text-align: right;
  font-size: 18px;
  background-color: #fff;
  border-bottom: 1px solid #e5e9f2;
  padding: 10px;
}
.select-list {
  padding-left: 5px;
}
</style>