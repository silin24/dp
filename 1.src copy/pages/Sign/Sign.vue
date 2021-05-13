<template>
  <div class="sign">
    <div class="signHeader">
      <span>欢迎参加, 新春大抽奖活动</span>
      <div class="headerLeft">
        <div>
        787人已签到
        </div>
      </div>
    </div>
    <div class="signBody">
      <div class="signPersonContainer">
        <div class="signPerson">
          <div v-for="(item,index) in userList" :key="index">
            <!-- <img src="../../assets/美女2.webp" alt=""> -->
            <img :src="item.avator" alt="">
          </div>
        </div>
      </div>
      <div class="qrCode" v-show="isShowQrCode" @click="addUser">
        <img src="../../assets/ewm.png" alt="ewm">
        <span>抖音扫一扫, 立即签到</span>
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
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {SAVE_USERLIST} from '../../store/mutations-type'
  export default {
    data() {
      return {
        isShowQrCode:false,
        userList:[
          {id:Math.random(),avator:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.ssl.cdn.btime.com%2Ft014c5d8a1e5cef12ba.jpg%3Fsize%3D506x543&refer=http%3A%2F%2Fp2.ssl.cdn.btime.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623054236&t=bef6c855ed9dbddaabe3c4898f63e023'},
          {id:Math.random(),avator:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.ssl.cdn.btime.com%2Ft014c5d8a1e5cef12ba.jpg%3Fsize%3D506x543&refer=http%3A%2F%2Fp2.ssl.cdn.btime.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623054236&t=bef6c855ed9dbddaabe3c4898f63e023'},
          {id:Math.random(),avator:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.ssl.cdn.btime.com%2Ft014c5d8a1e5cef12ba.jpg%3Fsize%3D506x543&refer=http%3A%2F%2Fp2.ssl.cdn.btime.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623054236&t=bef6c855ed9dbddaabe3c4898f63e023'},
          {id:Math.random(),avator:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.ssl.cdn.btime.com%2Ft014c5d8a1e5cef12ba.jpg%3Fsize%3D506x543&refer=http%3A%2F%2Fp2.ssl.cdn.btime.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623054236&t=bef6c855ed9dbddaabe3c4898f63e023'},
          {id:Math.random(),avator:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.ssl.cdn.btime.com%2Ft014c5d8a1e5cef12ba.jpg%3Fsize%3D506x543&refer=http%3A%2F%2Fp2.ssl.cdn.btime.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623054236&t=bef6c855ed9dbddaabe3c4898f63e023'},
          {id:Math.random(),avator:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.ssl.cdn.btime.com%2Ft014c5d8a1e5cef12ba.jpg%3Fsize%3D506x543&refer=http%3A%2F%2Fp2.ssl.cdn.btime.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623054236&t=bef6c855ed9dbddaabe3c4898f63e023'}
        ]
      }
    },
    methods: {
      showkQrCode(){
       !!!this.isShowQrCode ? (this.isShowQrCode = true) : (this.isShowQrCode = false)
      },
      addUser (){
        let a = {id:Math.random(),avator:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.ssl.cdn.btime.com%2Ft014c5d8a1e5cef12ba.jpg%3Fsize%3D506x543&refer=http%3A%2F%2Fp2.ssl.cdn.btime.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623054236&t=bef6c855ed9dbddaabe3c4898f63e023'}
        let b = this.userList
        b.push(a)
        setTimeout(() => {
          this.userList = b
        }, 6000);
      },
      toDraw(){
        this.$router.push('/draw')
        this.$store.commit(SAVE_USERLIST,this.userList)
      }
    },
    computed:{
      // ...mapState(['address', 'categorys']),
      ...mapState({
        userlist: state => state.userList
      }),
    },
    mounted() {
      this.userList = this.userlist
    },
  }
</script>

<style lang="scss" scoped>
  .sign {
    height: 100%;
    width: 100%;
    padding: 65px 100px 45px 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
      padding: 65px 0;
      position: relative;
      // width: 100%;
      overflow: auto;
      .signPersonContainer {
        height: 100%;
        overflow: hidden;
        .signPerson {
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
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
      .qrCode {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        img {
          width: 576px;
          height: 576px;
        }
        span {
          margin-top: 30px;
          color: #fff;
          font-size: 50px;
          text-align: center;
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
  }

</style>