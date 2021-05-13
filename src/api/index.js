import ajax from './ajax'
// const BASE_URL = '192.168.31.137'
// 配置轮次
export const reqDeployRound = (roundData) => ajax.post('/app/index.php?i=1&c=entry&m=crab_cloud_video&do=douyin&op=screen&fn=setRound',
    {
      data:{
        roundData,
        winagain:0,
        screenid:'1'
      }
    }
)
// export const reqDeployRound1 = () => ajax({
//   methods: 'POST',
//   url: '/app/index.php?i=1&c=entry&m=crab_cloud_video&do=douyin&op=screen&fn=setRound',
//   data:{
//     winagain:0,
//     screenid:'1'
//   }
// })
// export const reqDeployRound2 = () => ajax.post('/app/index.php', null,{ params: {
//   export const reqDeployRound2 = () => ajax.post('/app/index.php',
//     { data: {
//         winagain:0,
//         screenid:'1'
//       }
//     },
//     { params: {
//         i:'1',
//         c:'entry',
//         m:'crab_cloud_video',
//         do:'douyin',
//         op:'screen',
//         fn:'setRound',
//       }
//     }
// )
//大屏幕首页
export const reqHome = () => ajax({
  method: 'POST',
  url:  '/app/index.php?i=1&c=entry&m=crab_cloud_video&do=douyin&op=screen&fn=index',
  data:{
    ay:8
  }
})

//中奖用户列表
export const reqWinnerList = () => ajax({
  method: 'POST',
  url:  '/app/index.php?i=1&c=entry&m=crab_cloud_video&do=douyin&op=screen&fn=winnerList',
  data:{
    screenid:1,
    roundid:1
  }
})

//签到用户列表
export const reqSignUserList = (screenid) => ajax({
  method: 'POST',
  url:  '/app/index.php?i=1&c=entry&m=crab_cloud_video&do=douyin&op=screen&fn=signList',
  data:{
    screenid
  }
})

//签到扫码页面
export const reqSignScanPage = () => ajax({
  method: 'POST',
  url:  '/app/index.php?i=1&c=entry&m=crab_cloud_video&do=douyin&op=screen&fn=sign',
  data:{
    ay:1,
  }
})

//清空轮次
export const reqClearRound = () => ajax({
  method: 'POST',
  url:  '/app/index.php?i=1&c=entry&m=crab_cloud_video&do=douyin&op=screen&fn=clearRound',
  data:{
    ay:8,
    screenid:1
  }
})

//抽奖请求
export const reqToDraw = (roundid) => ajax({
  method: 'POST',
  url:  '/app/index.php?i=1&c=entry&m=crab_cloud_video&do=douyin&op=screen&fn=drawPrize',
  data:{
    screenid:1,
    // roundid:1,
    roundid,
    ay:8
  }
})

//签到结束
export const reqSignOver = () => ajax({
  method: 'POST',
  url:  '/app/index.php?i=1&c=entry&m=crab_cloud_video&do=douyin&op=screen&fn=signOver',
  data:{
    screenid:1
  }
})

//签到确认
export const reqSignConfirm = () => ajax({
  method: 'POST',
  url:  '/app/index.php?i=1&c=entry&m=crab_cloud_video&do=douyin&op=screen&fn=signConfirm',
  data:{
    ay:8,
  }
})

//得奖回调
export const reqSetWinner = () => ajax({
  method: 'POST',
  url:  '/app/index.php?i=1&c=entry&m=crab_cloud_video&do=douyin&op=screen&fn=setWinner',
  data:{
    userids:'1',
    screenid:1
  }
})