<template>
  <div class="divInput">
    <div class="input" @click="openValue">
      <input v-model="value" type="text" :placeholder="cardName">
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
    props:['cardName'],
    data(){
      return{
        tableData:[
          {'name':'卡卷a'},
          {'name':'卡卷b'},
          {'name':'卡卷c'},
          {'name':'卡卷d'},
          {'name':'卡卷e'},
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
      box-sizing: border-box;
      overflow: hidden;
      border: 1px solid #cccccc;
      display: flex;
      position: relative;
      input {
        border: none;
        outline: none;
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
      box-sizing: border-box;
      border: 1px solid #cccccc;
      background-color: #fff;
      overflow: hidden;
      position: absolute;
      bottom: 35px;
      left: 0;
      div {
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