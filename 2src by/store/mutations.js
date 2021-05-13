

import {
  SAVE_USERLIST
} from './mutations-type'



export default {
  [SAVE_USERLIST] (state, userList) {
    state.userList = userList
  },
}
