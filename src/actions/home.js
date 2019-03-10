import {
  HOME_INFO, HOME_SEARCH_COUNT, HOME_RECOMMEND, HOME_PIN
} from '@constants/home'
// import {
//   API_HOME, API_HOME_SEARCH_COUNT, API_HOME_RECOMMEND, API_HOME_PIN
// } from '@constants/api'
// import { createAction } from '@utils/redux'

/**
 * 首页数据
 * @param {*} payload
 */
export const dispatchHome = payload => createAction({
  url: API_HOME,
  type: HOME_INFO,
  payload
})


/**
 * 推荐商品
 * @param {*} payload
 */
export const dispatchRecommend = payload => createAction({
  url: API_HOME_RECOMMEND,
  type: HOME_RECOMMEND,
  payload
})
