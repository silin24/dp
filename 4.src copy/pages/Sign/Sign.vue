<template>
  <div class="sign">
    <div class="signContainer">
      <div class="signHeader">
        <span>欢迎参加, 新春大抽奖活动</span>
        <div class="headerLeft">
          <div>
          {{userList.length}}人已签到
          </div>
        </div>
      </div>
      <div class="signBody">
        <div class="signPerson" ref="signList">
          <!-- <div v-for="(item,index) in reUserList" :key="index"> -->
          <div v-for="(item,index) in userList" :key="index">
            <!-- <img src="../../assets/美女2.webp" alt=""> -->
            <img :src="item.avator" alt="">
          </div>
        </div>
      </div>
      <div class="signFooter">
        <div>
          <button class="endSign" @click="isShowQrCode=false">结束签到</button>
          <button class="readyDraw" @click="toDraw">准备抽奖</button>
          <button class="code" @click="showkQrCode">二维码</button>
        </div>
        <span>
          活动支持: 螃蟹科技
        </span>
      </div>
      <div class="qrCode " v-show="isShowQrCode" @click="addUser">
          <img src="../../assets/ewm.png" alt="ewm" class="animate__animated animate__pulse">
          <span>抖音扫一扫, 立即签到</span>
      </div>
    </div>
    <div class="barrageContainer" ref="barrageContainer"></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import {mapState} from 'vuex'
import _ from "lodash";

import {SAVE_USERLIST} from '../../store/mutations-type'
  export default {
    data() {
      return {
        isShowQrCode:false,
        userList:[]
      }
    },
    methods: {
      showkQrCode(){
       !!!this.isShowQrCode ? (this.isShowQrCode = true) : (this.isShowQrCode = false)
      },
      addUser (){
        let num = Math.floor(Math.random()*(200- 250) + 250);
        let a = {
          id:Math.random(),
          name:'貂蝉',
          avator:`https://picsum.photos/${num}`
          }
        let b = this.userList
        // b.push(a)
        b.unshift(a)
        // b[0].clssName = 'animate__animated animate__bounceIn'
        this.userList = b
        let {name,avator} = a
        this.createBarrage(avator,name)
      },
      toDraw(){
        this.$router.push('/draw')
        this.$store.commit(SAVE_USERLIST,this.userList)
      },
      createBarrage(avatorUrl,username) {
        let barrageContainer = this.$refs.barrageContainer
        let barrage = document.createElement('div')
        let img = document.createElement('img')
        let span = document.createElement('span')
        let top = Math.floor(Math.random()*(10 - 90) + 90);
        // console.log(top);
        span.innerHTML = username
        img.src = avatorUrl
        barrage.style.top = top + '%'
        barrage.style.position = 'absolute'
        barrage.style.right = '-510px'
        barrage.style.animation = 'barrage 10s linear 0s'
        barrage.style.boxSizing = 'border-box'
        // barrage.style.padding = '15px 0 15px 15px'
        barrage.style.display = 'flex'
        barrage.style.alignItems = 'center'
        // barrage.style.background = 'black'
        // barrage.style.opacity = '0.4'
        img.style.borderRadius = '50%'
        // img.style.marginRight = '20px'
        // img.style.width = '80px'
        // img.style.height = '80px'
        // span.style.fontSize = '40px'
        img.style.width = '0.41rem'
        img.style.height = '0.41rem'
        img.style.marginRight = '0.1rem'
        span.style.fontSize = '0.2rem'
        span.style.color = '#fff'
        barrage.appendChild(img)
        barrage.appendChild(span)
        barrageContainer.appendChild(barrage)
        setTimeout(() => {
          barrageContainer.removeChild(barrage)
        }, 10000);
      },
    },
    computed:{
      // ...mapState(['address', 'categorys']),
      ...mapState({
        userlist: state => state.userList
      }),
      reUserList () {
        if (this.userList.length>16) {
          return this.userList.slice(-18)
        } else return this.userList

      }
    },
    mounted() {
      this.userList = this.userlist
      //  new BScroll(".signPerson", {
      //   scrollY: true, // 纵向滑动
      //   click: true, // 允许点击
      // });
    },
    watch: {
      userList() {
       let signList = this.$refs.signList
      //  console.log(signList.children)
       signList.children[0] && (signList.children[0].className ='animate__animated animate__bounceIn')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sign {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .signContainer {
      height: 100%;
      width: 100%;
      padding: 65px 100px 45px 100px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      .signHeader {
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
            // width: 220px;
            // height: 50px;
            padding: 20px 36px;
            border-radius: 50px;
            border: 4px solid #8D67FF;
            background: linear-gradient(#8D67FF, #FF26FF);;
            text-align: center;
            font-size: 30px;
          }
        }
      }
      .signBody {
        flex-grow: 1;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        overflow: hidden;
          .signPerson {
            height: 83%;
            //  overflow: hidden;
            overflow: scroll;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            &::-webkit-scrollbar {
              display: none;
              height: 0;
            }
            div {
              width: 200px;
              height: 200px;
              border-radius: 50%;
              box-sizing: border-box;
              border: 4px solid #B762FD;
              margin-right: 50px;
              margin-bottom: 32px;
              img {
                width: 192px;
                height: 192px;
                border-radius: 50%;
              }
            }
          }
      }
      .signFooter {
        flex-grow: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items:flex-end;
        div {
          display: flex;
          button {
            // width: 160px;
            // height: 60px;
            padding: 15px 20px;
            box-sizing: border-box;
            border-radius: 60px;
            margin-right: 30px;
            font-size: 30px;
            color: #fff;
            border: 1px solid transparent;
            outline: none;
          }
          .endSign {
            background: linear-gradient(#C862FF, #981ADF);
          }
          .readyDraw {
            background:linear-gradient(#698EFF, #5F2DF9);
          }
          .code {
            background:linear-gradient(#698EFF, #5F2DF9);
          }
        }
        span {
          color: #a29fa7;
          font-size: 20px;
        }
      }
      .qrCode {
          position: absolute;
          right: 100px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          img {
            width: 576px;
            height: 576px;
            animation-duration: 0.5s;
          }
          span {
            margin-top: 30px;
            color: #fff;
            font-size: 50px;
            text-align: center;
          }
      }
    }
    .barrageContainer {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      pointer-events:none;
    }
  }
</style>