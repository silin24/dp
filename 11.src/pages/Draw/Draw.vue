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
          <div v-if="startDraw">
            <img :src="drawUrl" alt="" ref="winImg">
          </div>
        </div>
        <div class="right">
          <div v-for="(item,index) in drawRounds">
            <div class="rounds">
              <span>{{index+1}}</span>
            </div>
            <div class="persons" v-if="winUser">
              <div v-for="(item,index) in winUser" :key="index">
                <img :src="item.avator" alt="">
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="drawFooter">
      <div class="btns">
        <button class="deployRound" @click="deployRound">{{deployRoundText}}</button>
        <button class="resetDraw" @click="resetDraw">重置抽奖</button>
        <button class="clearRound" @click="clearRound" >{{clearRoundText}}</button>
        <button class="start" @click="start">{{satrtAndOver}}</button>
        <button class="win" @click="winList">获奖名单</button>
      </div>
      <span>
        活动支持: 螃蟹科技
      </span>
      <div class="roundBox" v-show="showRoundBox">
        <div class="perRound" v-for="(item,index) in roundArr" :key="index">
        <!-- <div class="perRound" v-for="(item,index) in 4" :key="index"> -->
          <div class="roundInfo">
            <span>第{{item.round}}轮</span>
            <span>{{item.persons}}人</span>
          </div>
          <div class="card">
           <!-- <Select :cardName="item.cardName"/> -->
           <div class="selectDiv">
            <div class="input" @click="openValue">
              <input v-model="value" type="text" :placeholder="'cardName'">
              <img src="../../assets/arrow.png" alt="">
            </div>
            <div class="list" v-show="show">
              <div @click="getvalue(index,item)" v-for="(item,index) in selectCardData" :key="item.index">
                {{ item.name }}
              </div>
            </div>
          </div>
            <img src="../../assets/delete.png" alt="">
          </div>
          <input type="checkbox" name="checkbox" class="checkbox" v-model="item['isChecked']">
        </div>
        <div class="selfRound">
          <div>
            <span>第</span>
            <input type="text" name="" v-model="round">
            <span>轮</span>
            <input type="text" name="" v-model="persons">
            <span>人</span>
          </div>
          <Select/>
          <button @click="toAddRound">添加</button>
        </div>
      </div>
      <div class="isResetDraw" v-show="showIsResetDraw">
        <span>确定重置抽奖</span>
        <div>
          <button class="no" @click="isResetDraw(0)">否</button>
          <button class="yes" @click="isResetDraw(1)">是</button>
        </div>
      </div>
      <div class="clearRoundBox" v-show="showIsClearRound">
        <div>
          <span>全部清空</span>
          <input type="checkbox" name="checkbox" class="checkbox">
        </div>
        <div>
          <span>清空第1轮</span>
          <input type="checkbox" name="checkbox" class="checkbox">
        </div>
        <div>
          <span>清空第2轮</span>
          <input type="checkbox" name="checkbox" class="checkbox">
        </div>
        <div>
          <span>清空第3轮</span>
          <input type="checkbox" name="checkbox" class="checkbox">
        </div>
        <div>
          <span>清空第4轮</span>
          <input type="checkbox" name="checkbox" class="checkbox">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import _ from "lodash";
  import Select from '../../components/select'
  import {SAVE_CARDNAME} from '../../store/mutations-type'

  export default {
    components:{Select},
    data() {
      return {
        isShowQrCode:false,
        drawUrl:'',
        startDraw:false,
        satrtAndOver:'开始',
        winUser:[],
        drawRounds:0,
        showRoundBox:false,
        deployRoundText:'配置轮次',
        showIsResetDraw:false,
        showIsClearRound:false,
        clearRoundText:'清空轮次',
        round:'',
        persons:'',
        roundArr:[
          {round:1,persons:8,cardName:'卡卷1名称',isChecked:false},
          {round:2,persons:10,cardName:'卡卷2名称',isChecked:false},
          {round:3,persons:12,cardName:'卡卷3名称',isChecked:false},
          {round:4,persons:16,cardName:'卡卷4名称',isChecked:false}
        ],
        selectCardData:[
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
    computed:{
      // ...mapState(['address', 'categorys']),
      ...mapState({
        userlist: state => state.userList
      }),
      // reUserlist () {
      //   reround _.chunk(this.userlist, 4);
      // }
    },
    methods: {
      showkQrCode(){
       !!!this.isShowQrCode ? (this.isShowQrCode = true) : (this.isShowQrCode = false)
      },
      deployRound(){
         var rounds = Math.floor(Math.random()*(1- 5) + 5);
         this.drawRounds = rounds
        !!!this.showRoundBox ? (this.showRoundBox = true) : (this.showRoundBox = false)
        if (this.deployRoundText === '配置轮次') {
          this.deployRoundText = '确定'
        } else {
          this.deployRoundText = '配置轮次'
          let a =  this.roundArr.filter((item)=>{
          return item.isChecked === true
            
          })
          console.log(a);
        }
        // this.deployRoundText === '配置轮次' ? (this.deployRoundText = '确定') :(this.deployRoundText = '配置轮次')
      },
      resetDraw(){
        // this.startDraw = false
        this.showIsResetDraw = true
      },
      clearRound(){
        // this.roundArr = []
        !!!this.showIsClearRound ? (this.showIsClearRound = true) : (this.showIsClearRound = false)
        this.clearRoundText === '清空轮次' ? (this.clearRoundText = '确定') :(this.clearRoundText = '清空轮次')
      },
      start(){
        this.startDraw = true
        if (this.satrtAndOver === '开始') {
          this.satrtAndOver = '停'
          let num = this.userlist.length
          console.log(num);
          this.timeId = setInterval(() => {
          var index = Math.floor(Math.random()*(1- num) + num);
          console.log(index);
          this.userlist[index] && (this.drawUrl =  this.userlist[index].avator)
          }, 50);
        } else {
          this.satrtAndOver = '开始'
          clearInterval(this.timeId)
          let win = this.$refs.winImg
          let winUrl = win.src
          console.log(winUrl);
          let userArr = this.userlist
          let a = userArr.find((item)=>
            // console.log(item.avator);
            item.avator == winUrl
          )
          console.log(a);
          !!!(a === undefined) && this.winUser.unshift(a)
        //  let b = this.winUser
        //  b.push(a)
        //  this.winUser = b

        }
        // let num = this.userlist.length
        // console.log(num);
        //   // console.log(aa);
        // let timeId = setInterval(() => {
        //  var aa = Math.floor(Math.random()*(1- 13) + 13);
        //  this.drawUrl =  this.userlist[aa].avator
        // }, 200);

        // setTimeout(() => {
        //   clearInterval(timeId)
        //   // this
        // }, 10000);
      },
      winList(){
        console.log(1);
        this.$router.push('/winnerlist')
      },
      isResetDraw(a){
        this.showIsResetDraw = false
        console.log(a);
      },
      toAddRound(e){
        console.log(e);
        let aa = {
          round:5,persons:20,cardName:'卡卷2名称',isChecked:true
        }
        this.roundArr.push(aa)
      },
      openValue(e){
        this.show = !this.show;
        console.log(e);
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
        // overflow: scroll;
        .up {
          // height: 115px;
          height: 18%;
          display: flex;
          justify-content: space-around;
          font-size: 30px;
          color: #fff;
          align-items: center;
        }
        .down {
          height: 82%;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          box-sizing: border-box;
          padding-left: 32px;
          margin-top: 5px;
          overflow: scroll;
          &::-webkit-scrollbar {
            display: none;
            height: 0;
          }
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
        // background-color: #080208;
        // opacity: 0.7;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          // width: 300px;
          // height: 300px;
          height: 100%;
          width: 100%;
          border-radius: 50%;
          box-sizing: border-box;
          // border: 6px solid #B762FD;
          img {
            // width: 288px;
            // height: 288px;
            height: 100%;
            width: 100%;
            border-radius: 50%;
          }
        }
      }
      .right {
        // background-color: green;
        width: 484px;
        height: 650px;
        display: flex;
        flex-direction: column;
        // overflow: hidden;
        overflow: scroll;
        &::-webkit-scrollbar {
          display: none;
          height: 0;
        }
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
          .rounds {
            width: 66px;
            height: 66px;
            border-radius: 50%;
            // background-color: #B762FD;
            background: linear-gradient(#9167FF, #E75DFA);
            text-align: center;
            line-height: 66px;
            span {
              font-size: 40px;
              color: #fff;
            }
          }
          .persons {
            display: flex;
            width: 306px;
            overflow: scroll;
            &::-webkit-scrollbar {
              display: none;
              width: 0;
            }
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
      position: relative;
      .btns {
        display: flex;
        align-items: flex-end;
        button {
          width: 165px;
          height: 65px;
          box-sizing: border-box;
          text-align: center;
          line-height: 65px;
          border-radius: 60px;
          font-size: 30px;
          color: #fff;
          border: 1px solid transparent;
          outline: none;
        }
        .deployRound {
          background: linear-gradient(#C862FF 40%, #981ADF);
          margin-right: 30px;
        }
        .resetDraw {
          background:linear-gradient(#698EFF, #5F2DF9);
          margin-right: 30px;
        }
        .clearRound {
          background: linear-gradient(#698EFF, #5F2DF9);
          margin-right: 70px;
        }
        .start {
          width: 458px;
          height: 127px;
          border-radius: 140px;
          background: linear-gradient(#FF6FD9,#F72F9E 40%,#B0129D 70%, #50015A 90% );
          // background: linear-gradient( blue, green 40%, red);
          font-size: 60px;
          margin-right: 70px;
        }
        .win {
          background: linear-gradient(#698EFF, #5F2DF9);
        }
      }
      span {
        color: #a29fa7;
        font-size: 25px;
      }
      .roundBox {
        position: absolute;
        bottom: 80px;
        left: 0;
        width: 400px;
        padding: 5px 0 10px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid #B762FD;
        background-color: #fff;
        .perRound {
          display: flex;
          height: 50px;
          width: 400px;
          padding:0 20px;
          box-sizing: border-box;
          justify-content: space-between;
          align-items: center;
          position: relative;
          &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            content: '';
            width: 100%;
            height: 1px;
            transform: scaleX(0.95);
            background-color: #B762FD;
          }
          .roundInfo {
            width: 40%;
            // width: 140px;
            span {
              margin-right: 10px;
              color: black;
              font-size: 22px;
            }
          }
          .card {
            width: 50%;
            width: 200px;
            // overflow: hidden;
            display: flex;
            align-items: center;
            // justify-content: space-between;
            .selectDiv{
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
            img {
              margin-left: 10px;
              width: 20px;
              height: 20px;
            }
          }
          .checkbox {
            text-align: center;
            // zoom:200%;
            width: 20px;
            height: 20px;
          }
        }
        .selfRound {
          padding:0 10px 0 20px;
          height: 50px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          >div {
            display: flex;
            align-items: center;
            span {
              margin-right: 6px;
              color: black;
              font-size: 22px;
            }
            input {
              width: 35px;
              height: 30px;
              border: 1px solid #A6A6A6;
              margin-right: 6px;
              outline: none;
              font-size: 15px;
            }
          }
          button {
            background: linear-gradient(#698EFF, #5F2DF9);
            border: 1px solid #5f2df9;
            border-radius: 20px;
            box-sizing: border-box;
            padding: 4px 10px;
            color: #fff;
            font-size: 15px;
          }
        }
      }
      .isResetDraw {
        position: absolute;
        bottom: 80px;
        left: 195px;
        width: 165px;
        height: 100px;
        border-radius: 10px;
        background:#fff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        div {
          // display: flex;
          // justify-content: space-between;
          button {
            // width: 53px;
            // height: 23px;
            border-radius: 20px;
            padding: 2px 20px;
            font-size: 15px;
          }
          .no {
            margin-right: 15px;
            background-color: #fff;
            color: #6077FF;
            border: 1px solid #6077FF;
          }
          .yes {
            color: #fff;
            background-color: #6077FF;
            border: 1px solid #6077FF;
          }
        }
      }
      .clearRoundBox {
        position: absolute;
        bottom: 80px;
        left: 390px;
        width: 163px;
        border-radius: 10px;
        background-color: #fff;
        div {
          height: 50px;
          padding: 0 10px;
          box-sizing: border-box;
          // line-height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
          .checkbox {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

</style>