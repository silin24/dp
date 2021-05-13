import Draw from '../pages/Draw/Draw.vue'
import Sign from '../pages/Sign/Sign.vue'

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
    path: '/',
    redirect: '/sign'
  }
]