<template>
  <div class="divInput">
    <div class="input" @click="openValue">
      <input v-model="value" type="text" placeholder="卡卷1名称">
      <img src="../assets/arrow.png" alt="">
    </div>
    <div class="list" v-show="show">
      <div @click="getvalue(index,item)" v-for="(item,index) in tableData" :key="item.index">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import {SAVE_CARDNAME} from '../store/mutations-type'
  export default {
    data(){
      return{
        tableData:[
          {'name':111},
          {'name':222},
          {'name':333},
          {'name':444}
        ],
        show:false,
        value:''
      }
    },
    methods: {
      openValue(e){
        this.show=!this.show;


      },
      getvalue(index,item){
        this.value=item.name;
        this.show=false;
        this.$store.commit(SAVE_CARDNAME,item.name)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .divInput{
    z-index: 2;
    position: relative;
    background-color: #fff;
    font-size: 15px;
    .input {
      width: 115px;
      height: 35px;
      line-height: 30px;
      // padding-left: 2px;
      box-sizing: border-box;
      overflow: hidden;
      border: 1px solid #cccccc;
      display: flex;
      position: relative;
      input {
        border: none;
        outline: none;
        // width: 115px;
        height: 30px;
        // background-color: #fff;
      }
      img {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        width: 15px;
        height: 15px;
      }
    }
    .list {
      width: 115px;
      // z-index: 20;
      box-sizing: border-box;
      border: 1px solid #cccccc;
      background-color: #fff;
      overflow: hidden;
      position: absolute;
      bottom: 35px;
      left: 0;
      div {
        // width: 100%;
        height: 30px;
        cursor: pointer;
        line-height: 30px;
        &:hover {
          background-color: #cccccc;
        }
      }
    }
   }
</style>