<template>
  <div class="divInput">
    <div class="input" @click="openValue">
      <!-- <input v-model="value" type="text" v-if="cardArr[0].name" :placeholder="cardArr[0].name"> -->
      <!-- <input v-model="defaultCardName" type="text"> -->
      <input type="text" :placeholder="value">
      <img src="../assets/arrow.png" alt="">
    </div>
    <div class="list" v-show="show">
      <div @click="getvalue(index,item)" v-for="(item,index) in cardArr" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    props: {
        cardName: String
    },
    model: {
        prop: 'cardId',
        event: 'returnBack'
    },
    computed:{
      ...mapState({
        cardArr: state => state.cardArr,
      }),
      defaultCardName(){
        if (this.cardArr[0]) {
          return this.cardArr[0].name
        }
      }
    },
    data(){
      return{
        // tableData:[
        //   {'name':'卡卷a'},
        //   {'name':'卡卷b'},
        //   {'name':'卡卷c'},
        //   {'name':'卡卷d'},
        //   {'name':'卡卷e'},
        // ],
        show:false,
        value:'选择卡卷'
      }
    },
    methods: {
      openValue(e){
        this.show=!this.show;
      },
      getvalue(index,item){
        this.value=item.name;
        this.show=false;
        this.$emit('returnBack', item.id);
      },
    },
    // watch:{
    //   cardArr(a,b){
    //     console.log(a);
    //     console.log(b);
    //     this.value = this.cardArr[0].name
    //   }
    // }
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