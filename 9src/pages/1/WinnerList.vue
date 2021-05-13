<template>
  <div class="winnerList">
    <div class="winnerListHeader">
      <span>欢迎参加, 新春大抽奖活动</span>
      <div class="headerLeft">
        <div>
          {{userlist.length}}人已签到
        </div>
      </div>
    </div>
    <div class="winnerListShow">
      <div>
         
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
          userlist: state => state.userList
        }),
    }
  }
</script>

<style lang="scss" scoped>
  .winnerList {
    height: 100%;
    width: 100%;
    padding: 65px 80px 45px 100px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .winnerListHeader {
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
    .winnerListShow {
      flex-grow: 1;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      overflow: hidden;
      div {
        height: 83%;
        width: 100%;
        display: flex;
        // align-items: center;
        // justify-content: space-between;
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