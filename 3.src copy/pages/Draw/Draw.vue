<template>
  <div class="draw">
    <div class="drawHeader">
      <span>欢迎参加, 新春大抽奖活动</span>
      <div class="headerLeft">
        <div>
        {{userlist.length}}人已签到
        </div>
      </div>
    </div>
    <div class="drawBody">
        <div class="left" >
          <div class="up" v-if="userlist">
            <span>抽奖名单</span>
            <span>{{userlist.length}}人</span>
          </div>
          <div class="down">
            <div v-for="(item,index) in userlist" :key="index">
              <img :src="item.avator" alt="">
            </div>
          </div>
        </div>
        <div class="middle">
        </div>
        <div class="right">
          <div v-for="(item,index) in turnArr" :key="index">
            <div class="turns">
              <span>{{index+1}}</span>
            </div>
            <div class="persons">
              <div v-for="(item1,index) in item" :key="index">
                <img :src="item1.avator" alt="">
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="drawFooter">
      <div>
        <button class="deployTurn" @click="deployTurn">配置轮次</button>
        <button class="resetDraw" @click="resetDraw">重置抽奖</button>
        <button class="clearTrun" @click="clearTrun" >清空轮次</button>
        <button class="start" @click="start">开始</button>
        <button class="win" @click="winList">获奖名单</button>
      </div>
      <span>
        活动支持: 螃蟹科技
      </span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import _ from "lodash";
  export default {
    data() {
      return {
        isShowQrCode:false,
        turnArr:[]
      }
    },
    computed:{
      // ...mapState(['address', 'categorys']),
      ...mapState({
        userlist: state => state.userList
      }),
      // reUserlist () {
      //   return _.chunk(this.userlist, 4);
      // }
    },
    methods: {
      showkQrCode(){
       !!!this.isShowQrCode ? (this.isShowQrCode = true) : (this.isShowQrCode = false)
      },
      deployTurn(){
         this.turnArr = _.chunk(this.userlist, 4);
      },
      resetDraw(){
        console.log(1);
      },
      clearTrun(){
        this.turnArr = []
      },
      start(){
        console.log(1);
      },
      winList(){
        console.log(1);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .draw {
    height: 100%;
    width: 100%;
    padding: 65px 80px 45px 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .drawHeader {
      flex-grow: 0;
      box-sizing: border-box;
      color:#fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 60px;
      }
      .headerLeft {
        div {
          padding: 20px 36px;
          border-radius: 50px;
          border: 4px solid #8D67FF;
          background: linear-gradient(#8D67FF, #FF26FF);
          text-align: center;
          font-size: 30px;
        }
      }
    }
    .drawBody {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        border: 4px solid #B762FD;
        width: 437px;
        height: 650px;
        border-radius: 60px;
        overflow: hidden;
        .up {
          height: 115px;
          display: flex;
          justify-content: space-around;
          font-size: 30px;
          color: #fff;
          align-items: center;
        }
        .down {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          padding-left: 32px;
          margin-top: 5px;
          div {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            box-sizing: border-box;
            border: 3px solid #B762FD;
            margin: 0 33px 33px 0;
            img {
              width: 94px;
              height: 92px;
              border-radius: 50%;
            }
          }
        }
      }
      .middle {
        width: 600px;
        height: 600px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 16px solid #8D67FF;
        background-color: #060206;
        opacity: 0.7;
      }
      .right {
        // background-color: green;
        width: 484px;
        height: 650px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        >div {
          width: 480px;
          height: 95px;
          box-sizing: border-box;
          padding: 10px 15px 10px 9px;
          border-radius: 50px;
          border: 4px solid #8D67FF;
          margin-bottom: 17px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .turns {
            width: 66px;
            height: 66px;
            border-radius: 50%;
            background-color: #B762FD;
            text-align: center;
            line-height: 66px;
            span {
              font-size: 40px;
              color: #fff;
            }
          }
          .persons {
            display: flex;
            div {
              width: 66px;
              height: 66px;
              border-radius: 50%;
              box-sizing: border-box;
              border: 3px solid #B762FD;
              margin-right: 15px;
              img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
              }
           }
          }
        }

      }
    }
    .drawFooter {
      flex-grow: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items:flex-end;
      div {
        display: flex;
        align-items: flex-end;
        button {
          padding: 15px 20px;
          box-sizing: border-box;
          border-radius: 60px;
          margin-right: 30px;
          font-size: 30px;
          color: #fff;
          border: 1px solid transparent;
          outline: none;
        }
        .deployTurn {
          background: linear-gradient(#C862FF, #981ADF);
        }
        .resetDraw {
          background:linear-gradient(#698EFF, #5F2DF9);
        }
        .clearTrun {
          background: linear-gradient(#698EFF, #5F2DF9);
        }
        .start {
          width: 458px;
          height: 127px;
          border-radius: 140px;
          background: linear-gradient(#C862FF, #981ADF);
          font-size: 60px;
        }
        .win {
          background: linear-gradient(#698EFF, #5F2DF9);

        }
      }
      span {
        color: #fff;
        font-size: 20px;
      }
    }
  }

</style>