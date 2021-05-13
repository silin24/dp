

import {
  SAVE_USERLIST,
  SAVE_WINNERLIST,
  SAVE_CARDARR,
  SAVE_AID,
  SAVE_SCREENID
} from './mutations-type'



export default {
  [SAVE_USERLIST] (state, userList) {
    state.userList = userList
  },
  [SAVE_WINNERLIST] (state, winnerList) {
    state.winnerList = winnerList
  },
  [SAVE_CARDARR] (state, cardArr) {
    state.cardArr = cardArr
  },
  [SAVE_AID] (state, aId) {
    state.aId = aId
  },
  [SAVE_SCREENID] (state, screenId) {
    state.screenId = screenId
  },
}
