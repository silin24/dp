<template>
  <div class="winnerList">
    <div class="backBtn">
     <button @click="$router.back()">返回</button>
    </div>
    <div class="winnerListContainer">
      <div class="winnerListShow">
        <div class="winnerRound">
          <div class="up">
            <span>第{{1}}轮中奖名单</span>
            <span>{{12}}人</span>
            <span>卡卷名称</span>
          </div>
          <div class="down">
            <div v-for="(item , index) in winnerList" :key="index">
              <div class="avator">
                <img :src="item.avator" alt="头像">
              </div>
              <span class="username">{{item.name}}</span>
            </div>
          </div>
        </div>
        <div class="winnerRound">
          <div class="up">
            <span>第{{1}}轮中奖名单</span>
            <span>{{12}}人</span>
            <span>卡卷名称</span>
          </div>
          <div class="down">
            <div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div>
            <div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div>
          </div>
        </div>
        <div class="winnerRound">
          <div class="up">
            <span>第{{1}}轮中奖名单</span>
            <span>{{12}}人</span>
            <span>卡卷名称</span>
          </div>
          <div class="down">
            <div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div>
            <div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div>
          </div>
        </div>
        <div class="winnerRound">
          <div class="up">
            <span>第{{1}}轮中奖名单</span>
            <span>{{12}}人</span>
            <span>卡卷名称</span>
          </div>
          <div class="down">
            <div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div>
            <div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div><div>
              <div class="avator">
                <img src="../../assets/美女2.webp" alt="">  
              </div>
              <span class="username">貂蝉</span>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>活动支持: 螃蟹科技</span>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed:{
      ...mapState({
        winnerList: state => state.winnerList
      }),
    },
  }
</script>

<style lang="scss" scoped>
  .winnerList {
    height: 100%;
    width: 100%;
    padding: 45px 100px 45px 120px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .backBtn {
      flex-grow: 0;
      box-sizing: border-box;
      color:#fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        padding: 12px 50px;
        box-sizing: border-box;
        border-radius: 60px;
        margin-right: 30px;
        font-size: 33px;
        color: #fff;
        border: 1px solid transparent;
        outline: none;
        background:linear-gradient(#698EFF, #5F2DF9);
      }
    }
    .winnerListContainer {
      flex-grow: 1;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      // align-items: center;
      overflow: hidden;
      .winnerListShow {
        height: 92%;
        width: 100%;
        margin-top: 45px;
        overflow: scroll;
        // background-color: black;
        // background-color:rgba(0,0,0,0.5);
        // opacity: 0.4;
        // box-shadow: 0px 9px 70px 0px rgba(0, 0, 0, 0.35);
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: space-between;
        &::-webkit-scrollbar {
          display: none;
          height: 0;
        }
        .winnerRound {
          height: 48%;
          margin-bottom: 25px;
          // height: 400px;
          width: 100%;
          // width: 1695px;
          // height: 403px;
          box-sizing: border-box;
          padding: 0 80px;
          border: 4px solid #FF3BFF;
          background-color:rgba(0,0,0,0.4);
          // background-image:linear-gradient(0deg, #ED5CFA, #8C67FF);
          // border: 6px solid;
          // border-image: linear-gradient(0deg, #ED5CFA, #8C67FF) 6 6;
          // box-shadow: 0px 3px 25px 0px rgba(0, 0, 0, 0.35);
          border-radius: 35px;
          .up {
            height: 22%;
            width: 100%;
            // background-color: aqua;
            font-size: 30px;
            color: #fff;
            display: flex;
            align-items: center;
            span {
              margin-right: 20px;
              font-weight: 700;
            }
          }
          .down {
            height: 78%;
            width: 100%;
            // background-color: pink;
            display: flex;
            justify-content: space-between;
            align-items: center;
            >div {
              // display: flex;
              // fd
              text-align: center;
              .avator {
                  width: 200px;
                  height: 200px;
                  border-radius: 50%;
                  box-sizing: border-box;
                  border: 4px solid #B762FD;
                  margin-bottom: 20px;
                  img {
                    width: 192px;
                    height: 192px;
                    border-radius: 50%;
                  }
                }
              .username {
                color: #fff;
                font-size: 30px;
              }
            }
          }
        }
      }
    }
    .copyright {
      text-align: right;
      flex-grow: 0;
      color: #a29fa7;
      font-size: 25px;
    }

  }
</style>