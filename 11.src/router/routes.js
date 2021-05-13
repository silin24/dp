import Draw from '../pages/Draw/Draw.vue'
import Sign from '../pages/Sign/Sign.vue'
import WinnerList from '../pages/WinnerList/WinnerList.vue'

export default [
  {
    path: '/draw',
    component: Draw,
  },
  {
    path: '/sign',
    component: Sign,
  },
  {
    path: '/winnerlist',
    component: WinnerList,
  },
  
  {
    path: '/',
    redirect: '/sign'
  }
]