

import {
  SAVE_USERLIST,
  SAVE_CARDNAME
} from './mutations-type'



export default {
  [SAVE_USERLIST] (state, userList) {
    state.userList = userList
  },
  [SAVE_CARDNAME] (state, cardName) {
    state.cardName = cardName
  },
}
